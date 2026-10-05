// Same storage key and shape as O-R-G-dapp/src/lib/experience.ts. Both previews share an origin,
// so a light chosen on one is already in place on the other.
const KEY = "org-experience";

type Exp = { light: string; motion: string; view?: string; chosen?: boolean };

function read(): Exp {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return { light: "night", motion: "gentle", ...JSON.parse(raw) };
  } catch {
    // Storage blocked: defaults for this visit.
  }
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  return { light: "night", motion: reduced ? "still" : "gentle" };
}

function themeFor(light: string): string {
  if (light !== "day") return light;
  const h = new Date().getHours();
  return h >= 5 && h < 11 ? "prism" : h >= 11 && h < 17 ? "stone" : "night";
}

function apply(exp: Exp) {
  const d = document.documentElement.dataset;
  d.light = exp.light;
  d.theme = themeFor(exp.light);
  d.motion = exp.motion;
}

function save(patch: Partial<Exp>) {
  const next = { ...read(), ...patch, chosen: true };
  apply(next);
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // Applied for this page only.
  }
  sync();
}

function sync() {
  const exp = read();
  document.querySelectorAll<HTMLInputElement>("[data-exp-light]").forEach((i) => {
    i.checked = i.value === exp.light;
  });
  document.querySelectorAll<HTMLInputElement>("[data-exp-motion]").forEach((i) => {
    i.checked = i.value === exp.motion;
  });
  cursor(exp.motion === "vivid");
}

let stopCursor: (() => void) | null = null;

function cursor(on: boolean) {
  if (!on || matchMedia("(pointer: coarse)").matches) {
    stopCursor?.();
    stopCursor = null;
    return;
  }
  if (stopCursor) return;
  const canvas = document.createElement("canvas");
  canvas.className = "cursor-prism";
  canvas.setAttribute("aria-hidden", "true");
  document.body.append(canvas);
  const ctx = canvas.getContext("2d")!;
  const dpr = Math.min(2, devicePixelRatio || 1);
  const pts: { x: number; y: number; t: number }[] = [];
  let raf = 0;
  const size = () => {
    canvas.width = innerWidth * dpr;
    canvas.height = innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  const frame = () => {
    raf = 0;
    const now = performance.now();
    while (pts.length && now - pts[0].t > 520) pts.shift();
    const night = document.documentElement.dataset.theme === "night";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = night ? "lighter" : "source-over";
    ctx.lineCap = "round";
    for (let i = 1; i < pts.length; i++) {
      const life = 1 - (now - pts[i].t) / 520;
      const hue = (pts[i].t / 6 + i * 9) % 360;
      ctx.strokeStyle = `hsla(${hue}, ${night ? 90 : 75}%, ${night ? 68 : 58}%, ${life * (night ? 0.8 : 0.55)})`;
      ctx.lineWidth = 0.6 + life * 3.2;
      ctx.beginPath();
      ctx.moveTo(pts[i - 1].x, pts[i - 1].y);
      ctx.lineTo(pts[i].x, pts[i].y);
      ctx.stroke();
    }
    if (pts.length) raf = requestAnimationFrame(frame);
  };
  const move = (e: PointerEvent) => {
    if (e.pointerType === "touch") return;
    pts.push({ x: e.clientX, y: e.clientY, t: performance.now() });
    if (pts.length > 48) pts.shift();
    if (!raf) raf = requestAnimationFrame(frame);
  };
  size();
  addEventListener("resize", size);
  addEventListener("pointermove", move);
  stopCursor = () => {
    cancelAnimationFrame(raf);
    removeEventListener("resize", size);
    removeEventListener("pointermove", move);
    canvas.remove();
  };
}

export function initExperience() {
  apply(read());
  sync();
  document.querySelectorAll<HTMLInputElement>("[data-exp-light]").forEach((i) =>
    i.addEventListener("change", () => save({ light: i.value })),
  );
  document.querySelectorAll<HTMLInputElement>("[data-exp-motion]").forEach((i) =>
    i.addEventListener("change", () => save({ motion: i.value })),
  );
  setInterval(() => {
    if (read().light === "day") apply(read());
  }, 10 * 60 * 1000);
  addEventListener("storage", (e) => {
    if (e.key === KEY) {
      apply(read());
      sync();
    }
  });
}
