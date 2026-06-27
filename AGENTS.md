# pdp80-blog — Hugo Blog

## Overview

This is **Phil Piwonka's blog**, hosted at https://pdp.dev/. It's a Hugo static-site blog using a fork of the "Cactus Plus" Hugo theme (a minimal, text-focused theme).

## Repo structure

| Path | Purpose |
|---|---|
| `config/_default/config.toml` | Site-level config (baseURL, theme, params) |
| `content/posts/` | Blog posts as Markdown files — each post gets its own `.md` file with YAML front matter |
| `content/about/` | The about page (`_index.md`) |
| `themes/pdp80-theme/` | The Hugo theme (a fork of hugo-theme-cactus-plus). Contains templates, assets, CSS, and archetypes. |
| `layouts/` | Custom site-level overrides (e.g. shortcodes like `img`, `code`, `video`, `mermaid`) |
| `static/` | Static files served as-is (images, etc.) |
| `public/` | Hugo build output — **this is committed** (deployed static files). Do not edit manually; always re-generate with Hugo. |
| `devenv.*` | Dev environment config (devenv/nix) |

## How Hugo is used

- `hugo` builds the site from `content/` + `themes/pdp80-theme/` into `public/`.
- Posts live in `content/posts/` with YAML front matter (title, date, categories, etc.).
- The theme renders `index.html` (homepage) and `_default/list.html` (archive view).
- Custom shortcodes exist in `themes/pdp80-theme/layouts/shortcodes/` (`img`, `code`, `figure`, `video`, `videogif`, `mermaid`).
- Themes can be customized by editing files under `themes/pdp80-theme/layouts/`.

### Front-matter `code` and `mermaid` flags

Posts that use the `{{< code >}}` or `{{< mermaid >}}` shortcodes **must** declare the corresponding boolean flag in their front matter. The `head.html` partial conditionally loads the required CSS/JS based on these params:

- `code: true` — loads `code.css` (collapsible code block styling)
- `mermaid: true` — loads MermaidJS from unpkg (diagram rendering)

If you are writing or editing a post that uses `{{< code >}}` or `{{< mermaid >}}` in the body, you **must** set the matching front-matter flag to `true`. Leaving it as `false` (or omitting it entirely) means the shortcode output will be rendered but without the necessary CSS/JS — the code blocks or diagrams will look broken.

**Example: post using code block** (`content/posts/Speedys-E-Bike-Rescue.md`):

```yaml
---
title: Speedy's E-Bike Rescue
date: 2025-01-05T01:11:52.078Z
draft: false
code: false   # ← explicitly false, no code blocks used
categories:
  - biking
---
```

If a post uses `{{< code >}}`, change to `code: true`:

```yaml
---
code: true   # ← enables code.css
---
```

Similarly for mermaid diagrams, add `mermaid: true` to front matter.

**Example: plain post (no code/mermaid)** (`content/posts/2025-12-05-llm-movie-summaries.md`) — no `code` or `mermaid` needed in front matter.

## ⚠️ Git policy — DO NOT PUSH

**Never run `git push` in this repository.** Pushing fails with SSH key errors because the agent environment doesn't have the correct credentials configured. Always leave pushing to the human operator. You may commit freely, but pushing is off-limits.
