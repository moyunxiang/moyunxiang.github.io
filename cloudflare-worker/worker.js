// Cloudflare Worker for moyunxiang.com/bilibili
//
// Routes (bound via wrangler.toml to `moyunxiang.com/bilibili/api/*`):
//   GET /bilibili/api/parse?url=<bili link>&sessdata=<optional>&p=<part, 1-based>&qn=<optional>
//        -> resolves the link, looks up the video, returns title/cover + a single-file
//           mp4 download link (pointing back at this worker's /download endpoint).
//   GET /bilibili/api/download?u=<encoded CDN url>&name=<filename>
//        -> streams the media back with the Referer/UA the bilibili CDN requires,
//           as an attachment so the browser saves it directly.
//
// Why a worker at all: bilibili's API has no CORS and its CDN requires
// `Referer: https://www.bilibili.com`, neither of which a static page can satisfy.
// Being same-origin (/bilibili/api/*) also means the front-end has no CORS to fight.

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
  '(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';
const REFERER = 'https://www.bilibili.com';

// Only these host suffixes may be proxied by /download, so the worker can't be
// abused as an open proxy. bilibili media lives on these CDNs.
const ALLOWED_MEDIA_HOSTS = [
  'bilivideo.com',
  'bilivideo.cn',
  'akamaized.net',
  'hdslb.com',
  'mcdn.bilivideo.cn',
];

function json(body, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'access-control-allow-origin': '*',
      'cache-control': 'no-store',
      ...extraHeaders,
    },
  });
}

function upstreamHeaders(sessdata) {
  const h = {
    'User-Agent': UA,
    Referer: REFERER,
    Origin: REFERER,
  };
  if (sessdata) h.Cookie = `SESSDATA=${sessdata}`;
  return h;
}

function hostAllowed(hostname) {
  return ALLOWED_MEDIA_HOSTS.some(
    (suffix) => hostname === suffix || hostname.endsWith('.' + suffix)
  );
}

// Turn whatever the user pasted into { bvid } or { aid }, or throw a friendly error.
async function resolveId(rawUrl) {
  let input = (rawUrl || '').trim();
  if (!input) throw new Error('请粘贴一个 B 站链接');

  // Bare BV / av id pasted directly.
  let m = input.match(/^(BV[0-9A-Za-z]+)$/);
  if (m) return { bvid: m[1] };
  m = input.match(/^av(\d+)$/i);
  if (m) return { aid: m[1] };

  // Make sure it parses as a URL (prepend scheme if missing).
  if (!/^https?:\/\//i.test(input)) input = 'https://' + input;

  let u;
  try {
    u = new URL(input);
  } catch {
    throw new Error('无法识别这个链接');
  }

  // b23.tv short link -> follow the redirect to the real bilibili.com URL.
  if (/(^|\.)b23\.tv$/i.test(u.hostname) || /(^|\.)bili2233\.cn$/i.test(u.hostname)) {
    const res = await fetch(u.toString(), {
      method: 'GET',
      redirect: 'manual',
      headers: { 'User-Agent': UA },
    });
    const loc = res.headers.get('location');
    if (loc) {
      try {
        u = new URL(loc, u);
      } catch {
        /* fall through and try regex on whatever we have */
      }
    } else {
      // Some short links 200 with a meta-refresh / JS redirect; fall back to final url.
      const finalUrl = res.url;
      if (finalUrl && finalUrl !== u.toString()) {
        try {
          u = new URL(finalUrl);
        } catch {
          /* ignore */
        }
      }
    }
  }

  const full = u.toString();

  // Bangumi (番剧/电影) uses a different playurl API — explicitly out of scope.
  if (/\/bangumi\/play\/(ss|ep)\d+/i.test(full) || /\/(ss|ep)\d+/i.test(u.pathname)) {
    throw new Error('暂不支持番剧 / 影视(ss/ep 链接),只支持普通投稿视频');
  }

  const bv = full.match(/BV[0-9A-Za-z]+/);
  if (bv) return { bvid: bv[0] };
  const av = full.match(/\/av(\d+)/i);
  if (av) return { aid: av[1] };

  throw new Error('链接里没找到视频号(BV/av),请检查是否为普通视频链接');
}

function idQuery(id) {
  return id.bvid ? `bvid=${id.bvid}` : `aid=${id.aid}`;
}

async function biliGet(url, sessdata) {
  const res = await fetch(url, { headers: upstreamHeaders(sessdata) });
  const data = await res.json();
  if (data.code !== 0) {
    throw new Error(`B 站接口返回错误:${data.message || data.code}`);
  }
  return data.data;
}

async function handleParse(url, env) {
  const sessdata = url.searchParams.get('sessdata') || '';
  const part = Math.max(1, parseInt(url.searchParams.get('p') || '1', 10) || 1);
  const wantQn = url.searchParams.get('qn'); // optional explicit quality

  const id = await resolveId(url.searchParams.get('url') || '');
  const q = idQuery(id);

  // 1) Video info -> title, cover, list of parts (each with its own cid).
  const view = await biliGet(`https://api.bilibili.com/x/web-interface/view?${q}`, sessdata);
  const pages = view.pages || [];
  if (!pages.length) throw new Error('没有取到视频分 P 信息');
  const pageIdx = Math.min(part, pages.length) - 1;
  const cid = pages[pageIdx].cid;
  const bvid = view.bvid || id.bvid;

  // 2) Play url. fnval=1 + platform=html5 -> a single, already-merged MP4 (durl),
  //    not DASH. Without login this tops out around 360-480p; with SESSDATA ~720p.
  const qn = wantQn || '80';
  const playUrl =
    `https://api.bilibili.com/x/player/playurl?bvid=${bvid}&cid=${cid}` +
    `&qn=${qn}&fnval=1&fourk=1&platform=html5&high_quality=1&otype=json`;
  const play = await biliGet(playUrl, sessdata);

  if (!play.durl || !play.durl.length) {
    throw new Error('这个视频没有可用的单文件 mp4(可能仅提供高清 DASH 流)');
  }

  // Map bilibili quality codes -> human labels (from accept_quality/description).
  const acceptQn = play.accept_quality || [];
  const acceptDesc = play.accept_description || [];
  const qualities = acceptQn.map((code, i) => ({
    qn: code,
    label: acceptDesc[i] || String(code),
  }));

  const safeTitle = (view.title || 'bilibili').replace(/[\\/:*?"<>|\n\r]+/g, '_').trim();
  const multi = play.durl.length > 1;
  const downloads = play.durl.map((seg, i) => {
    const name = multi ? `${safeTitle}-P${part}-${i + 1}.mp4` : `${safeTitle}.mp4`;
    return {
      label: multi ? `分段 ${i + 1}/${play.durl.length}` : 'mp4',
      proxiedUrl:
        `/bilibili/api/download?u=${encodeURIComponent(seg.url)}` +
        `&name=${encodeURIComponent(name)}`,
      size: seg.size || 0,
    };
  });

  return json({
    title: view.title,
    cover: view.pic,
    bvid,
    currentQn: play.quality,
    qualities,
    parts: pages.map((pg, i) => ({ p: i + 1, name: pg.part || `P${i + 1}` })),
    currentPart: part,
    multiSegment: multi,
    downloads,
  });
}

async function handleDownload(request, url) {
  const raw = url.searchParams.get('u');
  if (!raw) return json({ error: 'missing u' }, 400);

  let target;
  try {
    target = new URL(raw);
  } catch {
    return json({ error: 'bad url' }, 400);
  }
  if (!hostAllowed(target.hostname)) {
    return json({ error: 'host not allowed' }, 403);
  }

  const name = url.searchParams.get('name') || 'bilibili.mp4';
  const headers = upstreamHeaders(); // CDN doesn't need the cookie, just Referer/UA
  // Forward the browser's Range header so seeking / resuming works.
  const range = request.headers.get('range');
  if (range) headers.Range = range;

  const upstream = await fetch(target.toString(), { headers });

  const respHeaders = new Headers();
  for (const k of ['content-type', 'content-length', 'accept-ranges', 'content-range', 'etag']) {
    const v = upstream.headers.get(k);
    if (v) respHeaders.set(k, v);
  }
  if (!respHeaders.has('content-type')) respHeaders.set('content-type', 'video/mp4');
  respHeaders.set(
    'content-disposition',
    `attachment; filename*=UTF-8''${encodeURIComponent(name)}`
  );
  respHeaders.set('cache-control', 'no-store');

  // Stream straight through — no buffering, no size limit.
  return new Response(upstream.body, { status: upstream.status, headers: respHeaders });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'access-control-allow-origin': '*',
          'access-control-allow-methods': 'GET, OPTIONS',
          'access-control-allow-headers': '*',
        },
      });
    }

    try {
      if (path === '/bilibili/api/parse') return await handleParse(url, env);
      if (path === '/bilibili/api/download') return await handleDownload(request, url);
    } catch (err) {
      return json({ error: err && err.message ? err.message : String(err) }, 500);
    }

    return json({ error: 'not found' }, 404);
  },
};
