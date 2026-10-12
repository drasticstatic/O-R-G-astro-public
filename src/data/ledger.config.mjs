// The lab's ledger config (canonical example: my-template changelog-template/arrival/ledger). Plain
// .mjs so both the Astro build and `npm run ledger:snapshot` can import it.
//
// Whose history: Christopher's lab repositories on drasticstatic, and only their PUBLIC mirrors
// (O-R-G-astro-public, O-R-G-dapp-public-preview). Their private sources are never read; ledger.mjs
// also drops anything private before it asks for commits. ORG's own repositories have their ledger
// in the ORG AstroLog.
import path from "node:path";

export const LEDGER = {
  owner: "drasticstatic",
  ownerType: "user",
  include: /^O-R-G-(astro-public|dapp-public-preview)$/,
  deny: [],
  repoLabels: {
    "O-R-G-astro-public": { label: "The lab", blurb: "This site" },
    "O-R-G-dapp-public-preview": { label: "dApp preview", blurb: "The O-R-G dApp preview" },
  },
  people: [{ name: "Christopher", github: "drasticstatic", names: ["drasticstatic", "Christopher Wilson"] }],
  nameStyle: "full",
  coAuthors: ["Alfred"],
  timeZone: "America/New_York",
  maxPerRepo: 400,
  snapshot: path.resolve("src/data/ledger.snapshot.json"),
};
