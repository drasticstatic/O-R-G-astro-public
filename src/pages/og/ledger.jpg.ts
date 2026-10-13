// The lab ledger's social card: /og/ledger.jpg (static, built once per build).
import { pageCard } from "../../og/cards";

// No counts on the card (ledger v2): a cached share preview would go stale; the page has the numbers.
export const GET = () =>
  pageCard({
    eyebrow: "drasticstatic ORG lab · Ledger",
    kicker: "Every change, in plain words",
    title: "The lab, in plain words",
    summary: "Every public change to the lab and the dApp preview, grouped by day and by kind and linked to the change itself, with private work shown masked.",
    meta: "Refreshed every day",
  });
