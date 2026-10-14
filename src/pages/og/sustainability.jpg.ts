// The sustainability page's social card: /og/sustainability.jpg (no counts).
import { pageCard } from "../../og/cards";

export const GET = () =>
  pageCard({
    eyebrow: "drasticstatic ORG lab · Sustainability",
    kicker: "What keeps it running",
    title: "Nothing left to memory",
    summary: "The tokens, the daily rebuild, ORG's shared kit, the map, cached previews and the wallet allowlist, and what to do for each.",
  });
