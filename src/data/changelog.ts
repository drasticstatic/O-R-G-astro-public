// The drasticstatic ORG lab's changelog, newest first. Entries from before 2026-10-12 come from the
// sidecar era, when this site also tracked ORG's own repositories (org-frontend, org-backend,
// ORG-Website); they stay as history. ORG's official record of its own repositories is the ORG
// AstroLog (ORG_ASTROLOG below).

export type Area = "Live site" | "API" | "Content" | "Preview" | "GitHub" | "Lab";

export type Entry = {
  date: string;
  title: string;
  detail: string;
  area: Area;
  who: string;
  link?: string;
};

export const ORG_ASTROLOG = "https://octagon-religious-research-group-org.github.io/changelog-astro-public/";
export const LAB_STARTED = "2026-10-12";
const FRONTEND = "https://github.com/Octagon-Religious-Research-Group-ORG/org-frontend";
const BACKEND = "https://github.com/Octagon-Religious-Research-Group-ORG/org-backend";

export const CHANGELOG: Entry[] = [
  {
    date: "2026-10-12",
    title: "Every entry gets its own page and preview card",
    detail: "Share one change and it arrives designed: each entry now has a page of its own, and a link to it shows that entry's title, summary and who made it in Telegram, iMessage or Discord. If Telegram shows an old preview, send the link to @WebpageBot to refresh it.",
    area: "Lab",
    who: "drasticstatic with Alfred",
  },
  {
    date: "2026-10-12",
    title: "Choose how you arrive, here too",
    detail: "The lab now runs on ORG's arrival kit: a first-visit welcome, light, motion and contrast that carry over to the dApp preview, a welcome guide, and / to search this lab and ORG's AstroLog at once.",
    area: "Lab",
    who: "drasticstatic with Alfred",
  },
  {
    date: "2026-10-12",
    title: "The sidecar becomes the drasticstatic ORG lab",
    detail: "This site is now the changelog and portfolio of what Christopher builds for ORG in his lab, starting with the dApp preview. ORG's own repositories have their official record in the ORG AstroLog. Every entry below stays here as history.",
    area: "Lab",
    who: "drasticstatic with Alfred",
    link: ORG_ASTROLOG,
  },
  {
    date: "2026-10-05",
    title: "The dApp preview takes on all three lights",
    detail: "Living marble you can stir, an octagon made of the eight section artworks, the blotter sheet as a second view, and real belief tallies with agreement bars.",
    area: "Preview",
    who: "drasticstatic with Alfred",
    link: "https://drasticstatic.github.io/O-R-G-dapp-public-preview/",
  },
  {
    date: "2026-10-05",
    title: "ORG's GitHub gets a profile, a root page, and brand assets",
    detail: "The organization now has a public profile, a landing page at its github.io address, and a shared set of logo files.",
    area: "GitHub",
    who: "drasticstatic with Alfred",
    link: "https://github.com/Octagon-Religious-Research-Group-ORG",
  },
  {
    date: "2026-10-05",
    title: "Three design directions shared for a vote",
    detail: "Night Sanctuary, Prism Light, and Stone & Lapis, each shown on the home and Beliefs pages with ORG's real images and words.",
    area: "Live site",
    who: "Renan",
    link: "https://org-new-look.netlify.app/",
  },
  {
    date: "2026-10-05",
    title: "Home tile labels move below the art",
    detail: "Captions sit under each image instead of on top of it, so they stay readable.",
    area: "Live site",
    who: "Renan, at Tripp's request",
    link: FRONTEND,
  },
  {
    date: "2026-10-04",
    title: "Blotter-sheet perforations across the art tiles",
    detail: "Fine tab perforations on every tile and stronger tear lines between them.",
    area: "Live site",
    who: "Renan",
    link: FRONTEND,
  },
  {
    date: "2026-10-03",
    title: "Faster home page images",
    detail: "Landing tiles are served as 800px WebP, and fingerprinted assets are cached for a year.",
    area: "Live site",
    who: "Renan",
    link: FRONTEND,
  },
  {
    date: "2026-09-15",
    title: "dApp and sidecar previews begin",
    detail: "A Next.js web3 preview and this sidecar site, each published automatically from a private source.",
    area: "Preview",
    who: "drasticstatic with Alfred",
  },
  {
    date: "2026-08-17",
    title: "Member sign-in moves to Clerk",
    detail: "Auth0 is replaced with Clerk on both the site and the API.",
    area: "API",
    who: "Renan",
    link: BACKEND,
  },
  {
    date: "2026-07-23",
    title: "An API for offerings and editable pages",
    detail: "A NestJS backend for the offerings shop, member profiles, and website content that admins can edit and publish.",
    area: "API",
    who: "mitch8020",
    link: BACKEND,
  },
  {
    date: "2026-07-23",
    title: "Offerings shop and website editor",
    detail: "Members can request offerings, and admins can edit page content with drafts and revisions.",
    area: "Live site",
    who: "mitch8020",
    link: FRONTEND,
  },
  {
    date: "2026-07-14",
    title: "Monthly meditation ceremony details",
    detail: "The ceremony format is updated, wording now includes all entheogens rather than only DMT, and camera use is optional.",
    area: "Content",
    who: "Tripp",
  },
  {
    date: "2026-07-11",
    title: "A spinning rainbow octagon for the mobile menu",
    detail: "The menu icon on phones becomes the octagon.",
    area: "Live site",
    who: "Tripp",
    link: FRONTEND,
  },
  {
    date: "2026-06-17",
    title: "Join page, member portal, and site search",
    detail: "A membership page with an application form and sign-in, and the Perforated Index search across every page.",
    area: "Live site",
    who: "Tripp",
    link: FRONTEND,
  },
  {
    date: "2026-06-16",
    title: "The home page becomes a perforated blotter sheet",
    detail: "The nine tiles touch edge to edge as one perforated sheet, with matching tabs in the top navigation.",
    area: "Live site",
    who: "Tripp",
    link: FRONTEND,
  },
  {
    date: "2026-06-15",
    title: "About page and navigation tabs revised",
    detail: "Section images return to the navigation tabs, and the About page is simplified.",
    area: "Content",
    who: "Tripp",
  },
  {
    date: "2026-06-08",
    title: "Section pages move onto the site",
    detail: "Content that lived in iCloud Pages documents is now part of the site itself.",
    area: "Live site",
    who: "mitch8020",
    link: FRONTEND,
  },
  {
    date: "2026-06-01",
    title: "About page with the founding charter",
    detail: "The ORG charter gets its own page.",
    area: "Content",
    who: "mitch8020",
  },
  {
    date: "2026-05-25",
    title: "Sacred-geometry octagon home page",
    detail: "The home page grid of octagons, with the rainbow octagon spinning at the center.",
    area: "Live site",
    who: "mitch8020",
    link: FRONTEND,
  },
  {
    date: "2026-05-11",
    title: "The new site begins",
    detail: "The repository is created and five home page concepts are explored, from Editorial Bureau to Tarot Atelier.",
    area: "Live site",
    who: "mitch8020",
    link: FRONTEND,
  },
];

// Who made the changes, named and described the way ORG's organization profile does. `match` lists
// how they appear in an entry's `who`. Avatars come from GitHub when a handle is known; anyone else
// gets ORG's octagon initials from the arrival kit.
export type Person = { name: string; role: string; match: string[]; github?: string };
export const PEOPLE: Person[] = [
  { name: "Christopher", role: "Builds this lab and the dApp preview, with Alfred. Looks after ORG's GitHub.", match: ["drasticstatic", "Christopher"], github: "drasticstatic" },
  { name: "Renan Teixeira", role: "Develops ORG's website and drew up the design directions.", match: ["Renan"], github: "SCDEVBrazil" },
  { name: "Tripp Aardema", role: "ORG's founder. Leads much of the site's content and design.", match: ["Tripp"] },
  { name: "mitch8020", role: "Built ORG's original site and its API.", match: ["mitch8020"], github: "mitch8020" },
];

// Everyone named in a `who`, in the order they're named ("Renan, at Tripp's request" → Renan, Tripp).
export const peopleIn = (who: string): Person[] =>
  PEOPLE.map((p) => ({ p, at: Math.min(...p.match.map((m) => who.indexOf(m)).filter((i) => i >= 0)) }))
    .filter((x) => Number.isFinite(x.at))
    .sort((a, b) => a.at - b.at)
    .map((x) => x.p);

// Entries where this person did the work (named first).
export const madeBy = (p: Person, who: string) => p.match.some((m) => who.startsWith(m));

export const entryId = (e: Entry) =>
  `${e.date}-${e.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`.slice(0, 80);
