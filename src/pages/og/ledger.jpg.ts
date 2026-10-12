// The lab ledger's social card: /og/ledger.jpg (static, built once per build).
import { pageCard } from "../../og/cards";
import { loadLedger } from "../../ledger/ledger.mjs";
import { LEDGER } from "../../data/ledger.config.mjs";

export async function GET() {
  const l = await loadLedger(LEDGER);
  return pageCard({
    eyebrow: "drasticstatic ORG lab · Ledger",
    kicker: "Every public change",
    title: "The lab, in plain words",
    summary: `${l.shown} public changes to the lab and the dApp preview, grouped by day and by kind, each linked to the change itself.`,
    meta: "Refreshed every day",
  });
}
