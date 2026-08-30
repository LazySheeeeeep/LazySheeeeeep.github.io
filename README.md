# LazySheeeeeep.github.io

> Personal academic homepage of **Yaoyang Liu** — [lazysheeeeeep.github.io](https://lazysheeeeeep.github.io)

A minimal, Jekyll-powered site for my bio, publications, and CV.
Built on top of [Academic Pages](https://github.com/academicpages/academicpages.github.io), with custom styling tweaks.

## 🧭 About me

- 🎓 Second-year Ph.D. student at **HKUST CSE**, advised by [Prof. Long Chen](https://zjuchenlong.github.io/).
- 🎓 B.Eng. in Artificial Intelligence, **USTC** (2021 – 2025).
- 🔬 Research interests: **video generation**, efficient generation, high-quality synthesis.

## 📂 Structure

| Path | Purpose |
| --- | --- |
| `_pages/about.md` | Homepage (Bio · Education · Experience) |
| `_publications/` | One Markdown file per publication |
| `_config.yml` | Site-wide config (author info, socials, nav) |
| `_includes/head/custom.html` | Custom CSS (fonts, colors, timeline cards) |
| `files/` | Static assets (CV PDF, etc.) |
| `images/` | Profile photo, publication teasers |

## 🚀 Run locally

```bash
bundle install
bundle exec jekyll serve -l -H localhost
```

Then open <http://localhost:4000>.

## 📄 License

Site content © Yaoyang Liu.
The underlying theme ([Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) / Academic Pages)
is released under the MIT License — see [`LICENSE.md`](LICENSE.md).
