// The lab's ledger config (canonical example: my-template changelog-template/arrival/ledger). Plain
// .mjs so both the Astro build and `npm run ledger:snapshot` can import it.
//
// Whose history: Christopher's lab repositories on drasticstatic. The public lane reads only the
// PUBLIC mirrors (O-R-G-astro-public, O-R-G-dapp-public-preview). Ledger v2's private lane reads the
// ORG-lane private sources ONLY (O-R-G, O-R-G-astro, O-R-G-dapp), never any other drasticstatic
// repository: repository, day, kind and priority, the words masked, no link; commits already public
// through a mirror are deduped. This file and the snapshot are public (src/ is synced to
// O-R-G-astro-public), which is fine: the snapshot only ever holds the masked form, and
// `npm run ledger:verify` checks no private words reach the build. ORG's own repositories have
// their ledger in the ORG AstroLog.
import path from "node:path";

export const LEDGER = {
  owner: "drasticstatic",
  ownerType: "user",
  include: /^O-R-G-(astro-public|dapp-public-preview)$/,
  deny: [],
  private: [
    { repo: "O-R-G", label: "O-R-G (private)", mask: "full" },
    { repo: "O-R-G-astro", label: "The lab's source", mask: "full" },
    { repo: "O-R-G-dapp", label: "The dApp's source", mask: "full" },
  ],
  repoLabels: {
    "O-R-G-astro-public": { label: "The lab", blurb: "This site" },
    "O-R-G-dapp-public-preview": { label: "dApp preview", blurb: "The O-R-G dApp preview" },
  },
  // First name and last initial (every org's default since ledger v2), linked to GitHub.
  people: [{ name: "Christopher W.", github: "drasticstatic", names: ["Christopher", "drasticstatic", "Christopher Wilson"] }],
  nameStyle: "first-last-initial",
  // The lab's changelog is written in src/data/changelog.ts (its wording may match a commit).
  verify: { publicText: ["src/data/changelog.ts"] },
  timeZone: "America/New_York",
  maxPerRepo: 400,
  snapshot: path.resolve("src/data/ledger.snapshot.json"),
};
