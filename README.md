# O-R-G-astro · the drasticstatic ORG lab

> The changelog and portfolio of what Christopher ([drasticstatic](https://github.com/drasticstatic))
> builds for the Octagon Religious-Research Group (ORG) in his lab: the
> [O-R-G dApp preview](https://drasticstatic.github.io/O-R-G-dapp-public-preview/) first, and whatever
> comes next.

[![License: MIT](https://img.shields.io/badge/license-MIT-lightgrey?style=flat)](LICENSE)
[![Public Preview](https://img.shields.io/badge/%F0%9F%8C%90%20Public%20Preview-Available-brightgreen)](https://drasticstatic.github.io/O-R-G-astro-public/)
[![Sync](https://github.com/drasticstatic/O-R-G-astro/actions/workflows/sync-public-allowlist.yml/badge.svg)](https://github.com/drasticstatic/O-R-G-astro/actions/workflows/sync-public-allowlist.yml)
[![Built with Claude Code](https://img.shields.io/badge/Built%20with-Claude%20Code%20CLI-blueviolet)](https://code.claude.com/docs/en/overview)
[![Status](https://img.shields.io/badge/Status-%F0%9F%A7%AA%20Lab-8b6cf6)](https://drasticstatic.github.io/O-R-G-astro-public/)

---

**🧪 [Visit the lab →](https://drasticstatic.github.io/O-R-G-astro-public/)**

**📜 Looking for ORG's official changelog?** It's the
[ORG AstroLog](https://octagon-religious-research-group-org.github.io/changelog-astro-public/), the
record for every repository in ORG's own GitHub organization. This lab records the work that happens
outside it.

---

## 👋 What this is

A personal lab for ORG, kept by Christopher with Alfred, and agreed with ORG:

- **The ORG AstroLog** (owned by ORG) is the official record of the repositories in the
  [ORG organization](https://github.com/Octagon-Religious-Research-Group-ORG).
- **This lab** (owned by drasticstatic) is the changelog and portfolio of what Christopher builds for
  ORG outside that organization: the O-R-G dApp preview today, and the next experiments as they
  arrive.

Until 2026-10-12 this site was the dApp's *sidecar* and also tracked ORG's own sites. Every entry from
that time stays in the [lab changelog](https://drasticstatic.github.io/O-R-G-astro-public/changelog),
marked *sidecar era*, as history. Nothing was deleted.

## 🌗 Arriving

The lab runs on ORG's arrival kit, loaded from ORG's own site
(`https://octagon-religious-research-group-org.github.io/arrival/`), so it looks and behaves like
ORG's portal and AstroLog:

- A first-visit welcome to **choose how you arrive**: Night Sanctuary, Prism Light, Stone & Lapis, or
  Follow the day; still, gentle, or vivid motion; and more contrast if you'd like it. Your choice is
  shared with the dApp preview in the same browser.
- **Press `/`** to search this lab and ORG's AstroLog at once. **Press `?`** for the welcome guide.
- Avatars on every entry: GitHub pictures, or ORG's octagon initials.

## 🗺️ One map, two sites

The [map](https://drasticstatic.github.io/O-R-G-astro-public/map) is the same as the
[ORG AstroLog's](https://octagon-religious-research-group-org.github.io/changelog-astro-public/map).
Its one canonical copy lives in ORG's `changelog-astro` (`astro/src/data/map.ts`), published as
`map.json`; this lab fetches it when it builds and draws it with the same `OrgMap` component. If the
fetch fails, the build uses `src/data/map.snapshot.json` (refresh: `npm run map:snapshot`). To change
the map, change ORG's copy, then rebuild the lab.

## 🔒 Private / Public Split

This repo is **private** and is the source of truth. A public sibling,
[`O-R-G-astro-public`](https://github.com/drasticstatic/O-R-G-astro-public), mirrors only what's
explicitly allowlisted, pushed automatically by
[`sync-public-allowlist.yml`](.github/workflows/sync-public-allowlist.yml) on every push to `main`;
[`deploy-pages.yml`](.github/workflows/deploy-pages.yml) builds the site onto its `gh-pages` branch.
The public repo's ruleset blocks deletion and force-pushes, with an admin bypass the workflows use.

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
src/data/changelog.ts   the lab's entries (newest first) and who made them
src/data/map.ts         loads ORG's canonical map (ORG AstroLog /map.json) at build; snapshot fallback
src/og/                 the arrival kit's social-card generator, ORG's card theme, fonts
src/pages/              porch (index), changelog, map, 404, search.json
src/lib/url.ts          the lab's, ORG's and the dApp's addresses, and ORG's arrival kit
public/                 static assets served as-is
```

---

*Built and maintained by [drasticstatic](https://github.com/drasticstatic) · w/ Anthropic's Claude
Code CLI*
