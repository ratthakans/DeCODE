import type { Course } from "./courses";

/** Per-course gradient signatures — aurora-themed accents. */
export const accentMap: Record<
  Course["accent"],
  { from: string; to: string; glyph: string; ring: string; text: string }
> = {
  teal: { from: "#48A89A", to: "#00524D", glyph: "◇", ring: "rgba(72,168,154,0.4)", text: "#B5F2DB" },
  cyan: { from: "#38bdf8", to: "#0e7490", glyph: "⌘", ring: "rgba(56,189,248,0.4)", text: "#a5e8ff" },
  emerald: { from: "#34d399", to: "#0f766e", glyph: "❋", ring: "rgba(52,211,153,0.4)", text: "#a7f3d0" },
  violet: { from: "#a78bfa", to: "#5b21b6", glyph: "✦", ring: "rgba(167,139,250,0.4)", text: "#ddd6fe" },
  amber: { from: "#FFC933", to: "#b45309", glyph: "◈", ring: "rgba(255,201,51,0.4)", text: "#fde68a" },
  rose: { from: "#fb7185", to: "#9f1239", glyph: "✺", ring: "rgba(251,113,133,0.4)", text: "#fecdd3" },
};
