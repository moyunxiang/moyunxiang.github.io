# bilibili-dl worker

Backend for `moyunxiang.com/bilibili`. It is **not** published by Jekyll
(`cloudflare-worker` is excluded in `_config.yml`); deploy it separately to
Cloudflare Workers.

## What it does

- `GET /bilibili/api/parse?url=<bili link>&sessdata=<optional>&p=<part>&qn=<optional>`
  resolves the link (incl. `b23.tv` short links), looks up the video, and returns a
  single-file mp4 download link that points back at `/download`.
- `GET /bilibili/api/download?u=<encoded cdn url>&name=<filename>` streams the media
  with the `Referer`/`User-Agent` the bilibili CDN requires, as an attachment.

## Deploy

```sh
cd cloudflare-worker
npx wrangler login        # one-time
npx wrangler deploy       # deploys + binds the route in wrangler.toml
```

The route `moyunxiang.com/bilibili/api/*` is declared in `wrangler.toml`, so after
`deploy` the API is live on the real domain. The static page at `/bilibili/` is served
by GitHub Pages and reaches the worker same-origin.

## Local dev

```sh
npx wrangler dev          # serves on http://localhost:8787
# Then in bilibili/index.html set API_BASE to 'http://localhost:8787' temporarily,
# or just hit http://localhost:8787/bilibili/api/parse?url=... directly.
```

## Notes / scope

- Single-file mp4 only (bilibili `platform=html5` progressive). No login ≈ 360–480p;
  with `SESSDATA` ≈ 720p. 1080p+/4K are DASH-only and out of scope.
- Bangumi (`ss`/`ep`) is rejected with a friendly message.
- `/download` only proxies whitelisted bilibili CDN hosts (`ALLOWED_MEDIA_HOSTS`) so it
  can't be abused as an open proxy.
- `SESSDATA` is only forwarded to bilibili for the current request — never stored or logged.
