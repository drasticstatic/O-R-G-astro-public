// The lab's /latest.json: what the arrival kit's "new since your last visit" count reads on the lab
// and the dApp preview. Newest first, absolute URLs. Shape in my-template changelog-template README
// (wave 5): { updated, items: [{ type: "entry" | "ledger", t, k, i, h, d, ts?, who? }] }.
import { CHANGELOG, entryId } from "../data/changelog";
import { LAB } from "../lib/url";
import { loadLedger, ledgerNewsItems } from "../ledger/ledger.mjs";
import { LEDGER } from "../data/ledger.config.mjs";

export async function GET() {
  const ledger = await loadLedger(LEDGER);
  const items = [
    ...CHANGELOG.slice(0, 30).map((e) => ({
      type: "entry",
      t: e.title,
      k: `lab changelog · ${e.area}`,
      i: "flask",
      h: `${LAB}changelog/${entryId(e)}/`,
      d: e.date,
      who: e.who,
    })),
    ...ledgerNewsItems(ledger, { kicker: "lab ledger" }),
  ].sort((a, b) => String(b.ts ?? b.d).localeCompare(String(a.ts ?? a.d)));
  return new Response(JSON.stringify({ updated: new Date().toISOString(), items }), {
    headers: { "Content-Type": "application/json" },
  });
}
