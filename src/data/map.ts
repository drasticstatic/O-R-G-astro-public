// The map of ORG's sites is NOT kept here. Its one canonical copy is ORG's AstroLog
// (Octagon-Religious-Research-Group-ORG/changelog-astro: astro/src/data/sitemap.ts for the cards,
// astro/src/data/map.ts for the diagram), published together at MAP_SOURCE. This lab fetches it when
// it builds and draws the same cards (MapGrid) and diagram (OrgMap), so the maps can't drift. If the
// fetch fails (offline, ORG's site down), the build uses the committed snapshot instead; refresh it
// with `npm run map:snapshot`. To change the map, change ORG's copy.
//
// Shape (kit 1.2, version 2): { version: 2, title, desc, groups, nodes, diagram: <version 1 diagram> }.
// A version 1 file (before 2026-10-13) is the diagram alone, and is still read.
import snapshot from "./map.snapshot.json";

export const MAP_SOURCE = "https://octagon-religious-research-group-org.github.io/changelog-astro-public/map.json";

export type OrgMapData = {
  version: 1;
  title: string;
  desc: string;
  width: number;
  height: number;
  nodeW: number;
  nodeH: number;
  columns: { x: number; label: string }[];
  nodes: { id: string; x: number; y: number; name: string; line: string; href?: string; private?: boolean; self?: string; points: string }[];
  edges: { d: string; label: string; lx: number; ly: number; soft?: boolean }[];
};
export type MapGroup = { id: string; label: string; icon?: string; note?: string };
export type MapNode = { id: string; group: string; name: string; line?: string; href?: string; open?: string; og?: string; icon?: string; self?: string; external?: boolean };
export type SiteMap = { version: 2; title: string; desc: string; groups: MapGroup[]; nodes: MapNode[] };

type Loaded = { map: OrgMapData; grid: SiteMap | null; from: "live" | "snapshot" };

// Split a published map.json into the diagram and (version 2) the cards.
function read(raw: unknown): { map: OrgMapData; grid: SiteMap | null } | null {
  const j = raw as Record<string, unknown> | null;
  if (!j) return null;
  const diagram = (j.version === 2 ? j.diagram : j) as OrgMapData | undefined;
  if (diagram?.version !== 1 || !Array.isArray(diagram.nodes) || !Array.isArray(diagram.edges)) return null;
  const grid = j.version === 2 && Array.isArray(j.groups) && Array.isArray(j.nodes) ? (j as unknown as SiteMap) : null;
  return { map: diagram, grid };
}

let cached: Promise<Loaded> | null = null;

export function loadMap() {
  cached ??= (async () => {
    try {
      const res = await fetch(MAP_SOURCE, { signal: AbortSignal.timeout(10000) });
      if (res.ok) {
        const got = read(await res.json());
        if (got) {
          console.log(`[map] drawn from ${MAP_SOURCE}`);
          return { ...got, from: "live" as const };
        }
      }
    } catch {
      // fall through to the snapshot
    }
    console.warn("[map] couldn't fetch ORG's map.json; using src/data/map.snapshot.json");
    const got = read(snapshot)!;
    return { ...got, from: "snapshot" as const };
  })();
  return cached;
}
