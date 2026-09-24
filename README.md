# O-R-G-astro

> Sidecar Astro site for [O-R-G-dapp](https://github.com/drasticstatic/O-R-G-dapp) — changelog-as-
> content and a scrubbed structure map, published separately from the main dApp.

[![License: MIT](https://img.shields.io/badge/license-MIT-lightgrey?style=flat)](LICENSE)
[![Public Preview](https://img.shields.io/badge/%F0%9F%8C%90%20Public%20Preview-Available-brightgreen)](https://drasticstatic.github.io/O-R-G-astro-public/)
[![Sync](https://github.com/drasticstatic/O-R-G-astro/actions/workflows/sync-public-allowlist.yml/badge.svg)](https://github.com/drasticstatic/O-R-G-astro/actions/workflows/sync-public-allowlist.yml)
[![Built with Claude Code](https://img.shields.io/badge/Built%20with-Claude%20Code%20CLI-blueviolet)](https://code.claude.com/docs/en/overview)
[![Status](https://img.shields.io/badge/Status-%F0%9F%8C%B1%20Early%20Scaffold-orange)](https://github.com/drasticstatic/O-R-G-astro)

---

**🌐 [Explore the Public Preview →](https://drasticstatic.github.io/O-R-G-astro-public/)**

---

## 👋 What this is

Sidecar [Astro](https://astro.build) site for the
[O-R-G-dapp](https://github.com/drasticstatic/O-R-G-dapp) dApp (Octagon Research Group and
Spirituality Centers). It publishes two things the main dApp repo doesn't:

- **Changelog-as-content pages** — the project's `changelog.md` rendered as a public, browsable site.
- **A scrubbed structure map** — module relationships only, with no source snippets.

Neither is populated yet — this repo currently holds the initial site scaffold only.

**Breadcrumb, 2026-09-23:** when this gets finished, use
[`my-template/changelog-template/`](https://github.com/drasticstatic/my-template/tree/main/changelog-template)
rather than building the changelog-as-content pages from scratch — it's the same Astro
content-collection pattern this repo already anticipated, now proven out as PIR's and THEF's
`changelog-astro`/`changelog-astro-public` pairs. Public repo target stays `drasticstatic`-owned
(this is a personal project, not a community-owned org, per the template README's org-vs-personal
split), same as today.

## 🔒 Private / Public Split

This repo is **private** and is the source of truth. A public sibling,
[`O-R-G-astro-public`](https://github.com/drasticstatic/O-R-G-astro-public), mirrors only what's
explicitly allowlisted, pushed automatically by
[`sync-public-allowlist.yml`](.github/workflows/sync-public-allowlist.yml) on every push to `main` —
same pattern as
[`gratitude-token-project_astro`](https://github.com/drasticstatic/gratitude-token-project_astro) →
`gratitude-token-project_astro-public`.

Everything not named in the sync workflow's `public_allowlist` stays private by default, including
this repo's agent orchestration files (`AGENT-SYNC-O-R-G-astro/`, `CLAUDE.md`, `AGENTS.md`,
`.claude/`, `.githooks/`, `scripts/`).

## 💻 Local Development

```bash
npm install
npm run dev       # dev server
npm run build     # production build to dist/
npm run preview   # preview the production build
```

Requires Node.js `>=22.12.0`.

## 🏗️ Structure

```
src/pages/   Astro pages (currently just a placeholder homepage)
public/      Static assets served as-is
```

---

*Built and maintained by [drasticstatic](https://github.com/drasticstatic) · w/ Anthropic's Claude
Code CLI*
