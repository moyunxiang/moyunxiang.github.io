# moyunxiang.com

The personal website of **Mo Yunxiang (莫云翔)** — undergraduate researcher in NLP at HKUST.

Live at **<https://moyunxiang.com>**. (The original `https://moyunxiang.github.io` still works and 301-redirects to the custom domain.)

## What you'll find here

- **`/`** — academic homepage (bio, news, experience, publications, projects, honors, teaching). Default language is English; a Chinese version lives at **`/zh/`** and is toggled via the **中 / EN** button in the top nav.
- **`/cv/`** — long-form CV rendered as a page.
- **`/files/cv.pdf`**, **`/files/cv-cn.pdf`** — printable CV PDFs (compiled from `MO Yunxiang resume.tex` / `resume CN.tex` in a sibling directory).
- **`/publication/...`** — detail pages for individual papers.
- A few short-link redirects served by Cloudflare Rules:
  - `/cv` → English CV PDF
  - `/cv-cn` → Chinese CV PDF
  - `/transcript` → HKUST transcript PDF
  - `/scholar` → Google Scholar profile
  - `/dixit` → ACL 2026 OpenReview page
  - `/arxiv` → DixitWorld arXiv
  - `/github` → GitHub profile

## A note on subpaths

The site is mainly an academic homepage, but I sometimes host small personal utilities under additional subpaths. For example, `moyunxiang.com/bilibili` might point to a tiny tool that takes a Bilibili URL and returns its video. Such tools are independent micro-pages/apps and have nothing to do with the academic content; they live under their own paths and don't affect the main site.

If you've arrived at a subpath and aren't sure what it is, head back to **<https://moyunxiang.com>** — that's the canonical landing page.

## Stack

- Built on the [AcademicPages](https://github.com/academicpages/academicpages.github.io) fork of [Minimal Mistakes](https://mademistakes.com/work/minimal-mistakes-jekyll-theme/) (Jekyll).
- Hosted on **GitHub Pages**, fronted by **Cloudflare** (custom domain, redirect rules, robots).
- Custom additions on top of the template:
  - Smooth-scrolling single-page nav with capture-phase event delegation (so it survives `greedy-nav` reshuffling).
  - Bilingual (EN / 中文) toggle via a parallel `/zh/` page; relative `#anchor` links so nav works on both languages.
  - HKUST-navy accent in light mode; AA-contrast lighter blues in dark mode (theme variants live in `_sass/theme/`).
  - PWA-installable manifest, theme-color media queries, iOS "Add to Home Screen" meta tags.
  - Logo-on-the-left **Experience** entries (`.exp-item` / `.exp-logo` / `.exp-text`).
  - Card-style **Publications** and **Projects** entries (`.paper-box`).

## Local preview (optional)

```sh
brew install ruby
echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
gem install bundler jekyll
bundle install
bundle exec jekyll serve -l -H localhost
# → http://localhost:4000
```

## Contact

- Email: ymoaj [at] connect [dot] ust [dot] hk
- GitHub: [@moyunxiang](https://github.com/moyunxiang)
- WeChat: m2556377578
