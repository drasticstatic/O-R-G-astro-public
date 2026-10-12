export function url(path = ""): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}

// This lab, absolute (for search.json and anything another origin reads).
export const LAB = "https://drasticstatic.github.io/O-R-G-astro-public/";
export const DAPP = "https://drasticstatic.github.io/O-R-G-dapp-public-preview/";
export const LIVE = "https://orgspirituality.org";
export const PROPOSAL = "https://org-new-look.netlify.app/";
// Renan's design directions, kept as history in ORG's AstroLog (moved off the dApp preview).
export const DIRECTIONS = "https://octagon-religious-research-group-org.github.io/changelog-astro-public/three-directions";
// ORG's own GitHub Pages site: its official AstroLog, and the arrival kit every ORG page shares.
export const ORG_SITE = "https://octagon-religious-research-group-org.github.io/";
export const ORG_LOG = ORG_SITE + "changelog-astro-public/";
export const ORG_KIT = ORG_SITE + "arrival";
