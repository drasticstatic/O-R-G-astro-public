# 🌱 Sustainability: what keeps the lab running

<div class="tldr"><i class="ph ph-plant"></i> <strong>TL;DR:</strong> Nothing here costs money. The lab and the dApp preview rely on two publishing tokens, one daily rebuild, ORG's kit (loaded from ORG's site), ORG's map, cached link previews and a shared Reown project for wallet connect. Each is below, with what to do. And today one person holds all of their keys, so there's a plan to change that.</div>

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

### 🔍 The ledger's read-only token (`LEDGER_TOKEN`)

**Set since 2026-10-26:** the fine-grained `ledger-read-drasticstatic`.
- **Resource owner:** `drasticstatic`.
- **Repositories, and only these six:** `O-R-G`, `O-R-G-astro`, `O-R-G-dapp`,
  `psychedelic-policy-reform`, `-astro` and `-dapp`. Never all of drasticstatic.
- **Permission:** read-only Contents. **No expiration.**
- **Shared with** `drasticstatic/psychedelic-policy-reform-astro`.

The lab's ledger now reads its private work with it rather than the write-capable publishing token.

*To replace it:* make a new read-only token over the same six repositories. Set it as `LEDGER_TOKEN`
on both repositories (`pbpaste | gh secret set LEDGER_TOKEN -R drasticstatic/<repo>`), and run each
deploy once.

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

The lab and the dApp load ORG's kit (1.4.0: `arrival.js`, `arrival.css`, `org.js`, `org.css`) from
`https://octagon-religious-research-group-org.github.io/arrival/`. The lab sets its own navbar and
footer groups in `src/layouts/Base.astro`; Reach out, Community (ORG's four Telegram chats) and the
kit's essentials (Donate and the welcome guide) are ORG's. The ledger's generator
(`src/ledger/ledger.mjs`) is a vendored copy of the kit's, like ORG's.

*What to do:* nothing, unless ORG's kit adds a key the lab wants. Kit upgrades land on ORG's portal
first.

### 🖼️ Cached link previews

Every lab entry and page has its own card. Chat apps cache previews for days or weeks. Cards never
carry counts.

*What to do:* after changing a card, refresh the important links; the steps are in ORG's
[`SOCIAL-PREVIEWS.md`](https://github.com/Octagon-Religious-Research-Group-ORG/.github/blob/main/SOCIAL-PREVIEWS.md).

### 👛 The dApp's wallet connection

The dApp preview's wallet connect runs on a **Reown project** (the `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`
secret on `O-R-G-dapp`), which only loads on allowlisted origins. Its donation address is a
placeholder until ORG designates a real one.

*What to do:* never present the gift flow as live while the address is a placeholder.

### 🔌 Wallet connect (Reown project)

That project is **shared by every org today: `00b6a1cd528ff580f1fd845ed08b0187`**, made for this
dApp and held in Christopher W's Reown account. Giving with crypto and the kit 1.4 pledge of support
on ORG's portal (and the other orgs' portals) connect through it too; its allowlist lists all five
org origins plus `https://drasticstatic.github.io`. If it's deleted, suspended or runs past its
free-plan limit, wallet connect stops on every site at once (each page then says so calmly; nothing
breaks).

*What to do:* ORG gets its own project with a **one-line `org.js` change** on ORG's portal
(`give.reownProjectId`, which the pledge uses too); this dApp follows by updating its
`NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` secret. Create the project at dashboard.reown.com under an
account ORG controls, allowlist every origin that uses it, and do it before ORG publishes a treasury
address.

## 🤝 Stewardship and succession

**Today, one person holds every key here.** The lab and the dApp preview live in drasticstatic's own
GitHub account (Christopher W), which holds their `PUBLIC_REPO_TOKEN`s and the Reown account above;
drasticstatic also owns or administers ORG's GitHub organization. That's a single point of failure:
if he stepped away, the tokens would expire on schedule and both sites would quietly stop updating.
The plan, so this work outlives any one person:

1. **A home in ORG's organization** for whatever ORG wants to keep (the lab's record, the dApp), with
   at least two owners from ORG's own people.
2. **Org-owned automation, not personal tokens**: a GitHub App or an org bot account publishes.
3. **A token register and a renewal runbook**: every token and secret, its owner, scopes and expiry,
   and how to renew each, with a reminder a month before.
4. **Written hand-over steps**: transferring these repositories, the Pages sites and the Reown project.
5. **Exports and backups** of the repositories, on a schedule.

ORG's side of the plan is on the
[ORG AstroLog's sustainability page](https://octagon-religious-research-group-org.github.io/changelog-astro-public/sustainability#-stewardship-and-succession); progress is on
the [roadmap](https://drasticstatic.github.io/O-R-G-astro-public/roadmap).

## Who looks after it

Christopher W, with Alfred (Claude Code). *Last reviewed 2026-10-22.*
