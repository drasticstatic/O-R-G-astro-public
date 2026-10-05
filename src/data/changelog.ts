// Drawn from the commit history of ORG's repositories (org-frontend, org-backend, ORG-Website)
// and of the drasticstatic previews. Newest first.

export type Area = "Live site" | "API" | "Content" | "Preview" | "GitHub";

export type Entry = {
  date: string;
  title: string;
  detail: string;
  area: Area;
  who: string;
  link?: string;
};

const FRONTEND = "https://github.com/Octagon-Religious-Research-Group-ORG/org-frontend";
const BACKEND = "https://github.com/Octagon-Religious-Research-Group-ORG/org-backend";

export const CHANGELOG: Entry[] = [
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
