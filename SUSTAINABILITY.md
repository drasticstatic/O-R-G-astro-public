# 🌱 Sustainability: what keeps the lab running

<div class="tldr"><i class="ph ph-plant"></i> <strong>TL;DR:</strong> Nothing here costs money. The lab and the dApp preview rely on two publishing tokens, one daily rebuild, ORG's kit (loaded from ORG's site), ORG's map, cached link previews and, for the dApp, a Reown project allowlist. Each is below, with what to do.</div>

The full picture for ORG's own sites is on the
[ORG AstroLog's sustainability page](https://octagon-religious-research-group-org.github.io/changelog-astro-public/sustainability).
This page covers the two sites in Christopher's lab, outside ORG's organization. It's also the
repository's `SUSTAINABILITY.md`.

## The pieces

| Repository | What it is | How it goes live |
| --- | --- | --- |
| `drasticstatic/O-R-G-astro` (private) | The lab's source (its `src/` is mirrored publicly) | `deploy-pages.yml` builds it and pushes the site to `O-R-G-astro-public`'s `gh-pages` branch; `sync-public-allowlist.yml` mirrors the allowlisted source to its `main` |
| [`O-R-G-astro-public`](https://drasticstatic.github.io/O-R-G-astro-public/) (public) | The built lab | GitHub Pages, from `gh-pages` |
| `drasticstatic/O-R-G-dapp` (private) → [`O-R-G-dapp-public-preview`](https://drasticstatic.github.io/O-R-G-dapp-public-preview/) | The dApp preview, a Next.js static export | The same two workflows, in its own repository |

## What can quietly stop, and what to do

### 🔑 The publishing tokens (`PUBLIC_REPO_TOKEN`)

Both private repositories push to their public twins with a classic personal access token stored as
`PUBLIC_REPO_TOKEN` (set 2026-10-05 on each). When it expires, **the sites stop updating with no
sign on the sites themselves**. The lab's ledger also uses it (or a `LEDGER_TOKEN`, if set) to read
its private work, which it shows masked.

*What to do:* note the expiry date from GitHub's token settings; before it passes, make a new
classic token (`repo` + `workflow`), update the secret on both repositories, and run each deploy
workflow once by hand. An optional read-only `LEDGER_TOKEN` keeps the ledger off the write token.

### 🗓️ The daily rebuild (10:41 UTC)

`deploy-pages.yml` also runs every day at 10:41 UTC, after ORG's AstroLog (10:17 UTC). It refreshes
the [ledger](https://drasticstatic.github.io/O-R-G-astro-public/ledger) and redraws the
[map](https://drasticstatic.github.io/O-R-G-astro-public/map) from ORG's `map.json`.

*What to do:* if the ledger's newest day looks old, open the workflow's run history.

### 🗺️ ORG's map

The map isn't kept here: the lab fetches ORG's `map.json` when it builds (the cards and, under
`diagram`, the diagram) and falls back to `src/data/map.snapshot.json` if the fetch fails.

*What to do:* change the map in ORG's AstroLog, not here. Refresh the snapshot now and then with
`npm run map:snapshot`.

### 🧰 ORG's arrival kit, loaded by URL

The lab and the dApp load ORG's kit (`arrival.js`, `arrival.css`, `org.js`, `org.css`) from
`https://octagon-religious-research-group-org.github.io/arrival/`. The lab sets its own navbar and
footer groups in `src/layouts/Base.astro`; Reach out, Community and Donate are ORG's.

*What to do:* nothing, unless ORG's kit adds a key the lab wants. Kit upgrades land on ORG's portal
first.

### 🖼️ Cached link previews

Every lab entry and page has its own card. Chat apps cache previews for days or weeks. Cards never
carry counts.

*What to do:* after changing a card, refresh the important links; the steps are in ORG's
[`SOCIAL-PREVIEWS.md`](https://github.com/Octagon-Religious-Research-Group-ORG/.github/blob/main/SOCIAL-PREVIEWS.md).

### 👛 The dApp's wallet connection

The dApp preview's wallet connect runs on a **Reown project** (the `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`
secret on `O-R-G-dapp`), which only loads on allowlisted domains: today `https://drasticstatic.github.io`.
Its donation address is a placeholder until ORG designates a real one.

*What to do:* when ORG's own pages or a new domain host wallet giving, add that origin (for ORG's
GitHub home, `https://octagon-religious-research-group-org.github.io`) to the Reown project's
allowlist. Never present the gift flow as live while the address is a placeholder.

## Who looks after it

Christopher W, with Alfred (Claude Code). *Last reviewed 2026-10-13.*
