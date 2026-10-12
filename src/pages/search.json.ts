// The lab's search index for ORG's arrival kit ("/" search, people). Same shape as the ORG
// AstroLog's search.json; Base.astro adds that one too, so "/" here searches both at once.
import { CHANGELOG, PEOPLE, LAB_STARTED, entryId, madeBy } from "../data/changelog";
import { LAB, DAPP } from "../lib/url";

export async function GET() {
  const items = [
    { type: "page", t: "The lab", k: "page", i: "flask", h: LAB, x: "home porch drasticstatic lab portfolio" },
    { type: "page", t: "Lab changelog", k: "page", i: "clock-counter-clockwise", h: LAB + "changelog", pin: true, x: "history entries" },
    { type: "page", t: "Map of ORG's sites and the lab", k: "page", i: "tree-structure", h: LAB + "map", x: "diagram hosting repositories" },
    { type: "page", t: "O-R-G dApp preview", k: "lab", i: "cube", h: DAPP, x: "web3 wallet octagon three lights donation" },
    ...CHANGELOG.map((e) => ({
      type: "entry",
      t: e.title,
      k: `lab changelog · ${e.area}${e.date < LAB_STARTED ? " · sidecar era" : ""}`,
      i: e.area === "Lab" || e.area === "Preview" ? "flask" : "clock-counter-clockwise",
      h: `${LAB}changelog#${entryId(e)}`,
      d: e.date,
      s: e.detail,
      who: e.who,
    })),
  ];
  const people = PEOPLE.map((p) => ({ name: p.name, role: p.role, github: p.github, count: CHANGELOG.filter((e) => madeBy(p, e.who)).length }));
  return new Response(JSON.stringify({ updated: CHANGELOG[0]?.date ?? null, items, people }), {
    headers: { "Content-Type": "application/json" },
  });
}
