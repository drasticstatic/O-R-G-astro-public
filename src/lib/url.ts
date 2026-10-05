export function url(path = ""): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}

export const DAPP = "https://drasticstatic.github.io/O-R-G-dapp-public-preview/";
export const LIVE = "https://orgspirituality.org";
export const PROPOSAL = "https://org-new-look.netlify.app/";
