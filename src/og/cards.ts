// The lab's social cards, drawn at build time by the arrival kit's generator (og-card.mjs) in ORG's
// night palette (theme.mjs). One per entry, plus the map.
import path from "node:path";
import { pathToFileURL } from "node:url";
import { renderCard } from "./og-card.mjs";
import { ORG_CARD_THEME } from "./theme.mjs";
import { LAB_STARTED, entryId, type Entry } from "../data/changelog";
import { LAB } from "../lib/url";

// Astro bundles this file, so resolve fonts from the project folder, not import.meta.url.
const OG_DIR = pathToFileURL(path.resolve("src/og") + "/");
// Which wedge of the octagon each area lights (the same order as ORG's AstroLog where they overlap).
const WEDGE: Record<string, number> = { Lab: 0, "Live site": 1, Content: 2, Preview: 3, GitHub: 4, API: 7 };

export const entryUrl = (e: Entry) => `${LAB}changelog/${entryId(e)}/`;
export const entryCardUrl = (e: Entry) => `${LAB}og/changelog/${entryId(e)}.jpg`;
export const mapCardUrl = `${LAB}og/map.jpg`;

const fmt = (d: string) => new Date(`${d}T12:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
const jpeg = (buf: Buffer) => new Response(new Uint8Array(buf), { headers: { "Content-Type": "image/jpeg" } });

export async function entryCard(e: Entry) {
  return jpeg(
    await renderCard(
      {
        eyebrow: "drasticstatic ORG lab · Changelog",
        kicker: e.date < LAB_STARTED ? `${e.area} · sidecar era` : e.area,
        title: e.title,
        summary: e.detail,
        meta: `${fmt(e.date)} · ${e.who}`,
        footer: "drasticstatic ORG lab",
        lit: WEDGE[e.area] ?? null,
      },
      ORG_CARD_THEME,
      OG_DIR
    )
  );
}

export async function pageCard(spec: { eyebrow: string; kicker?: string; title: string; summary?: string; meta?: string }) {
  return jpeg(await renderCard({ footer: "drasticstatic ORG lab", lit: null, ...spec }, ORG_CARD_THEME, OG_DIR));
}
