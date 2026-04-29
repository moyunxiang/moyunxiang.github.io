# Personal website — setup guide

This folder is a ready-to-deploy [AcademicPages](https://github.com/academicpages/academicpages.github.io) (Jekyll) site, pre-customized for Mo Yunxiang. It will look very similar to https://rcorona.github.io once you fill in your real content.

---

## Step 1 — Create the GitHub repo

1. Go to https://github.com/new
2. Repo name: **`<your-github-username>.github.io`** (this exact name is required for free hosting)
3. Visibility: **Public**
4. Do **NOT** check "Add a README" / "Add .gitignore" / "Add license" — this folder already has its own initial commit
5. Click "Create repository"

GitHub will show a page with a URL like `git@github.com:<your-username>/<your-username>.github.io.git`. Copy it.

## Step 2 — Push this folder to that repo

Open Terminal in this folder (`/Users/moyunxiang/kevinelw/study/coding/resume/personal-website`) and run:

```bash
git remote add origin git@github.com:<your-username>/<your-username>.github.io.git
git push -u origin main
```

(If you use HTTPS instead of SSH, use the `https://github.com/...` URL.)

## Step 3 — Turn on GitHub Pages

1. On GitHub, go to your new repo → **Settings** → **Pages** (left sidebar)
2. Under "Build and deployment" → "Source", choose **Deploy from a branch**
3. Branch: **`main`**, folder: **`/ (root)`**, click **Save**
4. Wait 1–3 minutes. Your site will be live at `https://<your-username>.github.io`

## Step 4 — Replace the placeholders

The following placeholders are scattered through the site — search and replace each:

| Placeholder | Where | Replace with |
|---|---|---|
| `YOUR_GITHUB_USERNAME` | `_config.yml`, `_pages/about.md` | your GitHub handle |
| `YOUR_SCHOLAR_ID` | `_config.yml`, `_pages/about.md` | from your Google Scholar profile URL |
| `[Paper Title — ACL 2026]` etc. | `_publications/*.md`, `_pages/about.md` | real paper titles, authors, links |
| `[Advisor Name]`, `[Lab Name]` | `_pages/about.md` | your advisor / lab |
| `yunxiangmo@example.com` | `_config.yml` | your real email |
| `images/profile.png` | `images/` folder | overwrite with your headshot, same filename |

VS Code: `Cmd+Shift+F` to search across the whole folder.

## Step 5 — Edit content

Each section is just a Markdown file. Edit, commit, push — GitHub Pages rebuilds automatically (takes ~1 min).

| File | What it controls |
|---|---|
| `_config.yml` | Site title, sidebar info, social links |
| `_pages/about.md` | The homepage you see at `/` |
| `_pages/cv.md` | The `/cv/` page |
| `_publications/*.md` | One Markdown file per paper. Listed automatically on `/publications/` |
| `_data/navigation.yml` | The top menu bar |
| `images/profile.png` | The sidebar headshot |
| `files/cv.pdf` | Drop your CV PDF here; about page links to it |

## Step 6 (optional) — Preview locally

Not required (GitHub Pages builds it for you), but if you want to see changes before pushing:

```bash
# One-time setup (your Mac has Ruby 2.6 — Jekyll wants 2.7+; easiest is via Homebrew)
brew install ruby
echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
gem install bundler jekyll

# In this folder:
bundle install
bundle exec jekyll serve -l -H localhost
# Open http://localhost:4000
```

If local preview is annoying, just push to GitHub and check the live site — the iteration loop is ~1 min.

## Step 7 (optional) — Custom domain

Buy a domain (e.g. Cloudflare Registrar ~$10/yr), add a `CNAME` file with `yunxiangmo.com` in this folder, and configure DNS per [GitHub's docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

---

## What's already done for you

- ✅ Cloned AcademicPages template
- ✅ `_config.yml` filled with HKUST profile skeleton
- ✅ Homepage rewritten (HKUST CS+Math+AI, ACL/EMNLP, US exchange ask)
- ✅ Two publication entries seeded (ACL 2026, EMNLP 2025) — fill in the real details
- ✅ Top navigation trimmed to **Publications + CV** (matches rcorona.github.io)
- ✅ Demo content (sample papers/talks/blog posts) deleted
- ✅ Fresh `git` repo with one clean initial commit, ready to push

## What you still need to do

- ⬜ Replace placeholders (Step 4)
- ⬜ Drop in `images/profile.png` (your headshot)
- ⬜ Drop in `files/cv.pdf` (your CV)
- ⬜ Real paper titles, abstracts, links
- ⬜ Push to GitHub (Steps 1–3)

Good luck!
