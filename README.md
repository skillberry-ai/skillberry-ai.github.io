# skillberry-ai.github.io

Org-level pages of skillberry-ai: https://skillberry-ai.github.io

A small [Jekyll](https://jekyllrb.com/) site with no theme dependency. It is built and deployed by
GitHub Actions ([`.github/workflows/pages.yml`](.github/workflows/pages.yml)).

## Layout

| Path | What it is |
|---|---|
| `index.html` | Home: intro, key projects, latest blog posts, latest YouTube items |
| `_projects/*.md` | One file per key project. Front matter drives the cards and project page; the body is free markdown |
| `_data/blogs.yml` | Blog corner entries, sorted by `date` when rendered |
| `_data/youtube.yml` | Latest YouTube items. **Generated**, don't edit by hand |
| `scripts/update_youtube.py` | Refreshes `_data/youtube.yml` from the channel's public feeds (stdlib only, no API key) |
| `_layouts/`, `_includes/` | Page templates and reusable partials |
| `assets/css/main.css` | All styles. Light/dark palettes are CSS variables at the top |
| `assets/js/theme.js` | Light / system / dark switch (saved in `localStorage`) |

## Common edits

**Add a blog post:** append an entry to `_data/blogs.yml`. Save a graphic from the post under
`assets/img/blog/` and point `image` at it. A local copy won't break if the platform changes its CDN.
Keep the `abstract` to one paragraph of about three lines.

**Add or change a project:** add or edit `_projects/<repo-name>.md`. `order` sets its position. Set
`site:` if the project has its own GitHub Pages site, and it will be linked from the card and the page.

**YouTube:** [`.github/workflows/youtube.yml`](.github/workflows/youtube.yml) runs the updater daily,
commits only when the list actually changes, and that commit triggers a redeploy. Run it manually from
the Actions tab, or locally with `python3 scripts/update_youtube.py`.

## Local preview

```bash
bundle install
bundle exec jekyll serve --livereload   # http://localhost:4000
```

## One-time setup

In the repository settings, go to **Pages → Build and deployment → Source** and choose **GitHub Actions**.
