import type { Course } from "./courses";

/**
 * A single signature hue, two weights: teal is spent on what's available
 * right now; neutral keeps everything else quiet so teal stays meaningful.
 */
export const accentMap: Record<
  Course["accent"],
  { from: string; to: string; glyph: string; ring: string; text: string }
> = {
  teal: { from: "#2DD4BF", to: "#0C3B36", glyph: "◇", ring: "rgba(45,212,191,0.4)", text: "#7FF3DC" },
  neutral: { from: "#3A3F3E", to: "#0A0F0E", glyph: "◇", ring: "rgba(255,255,255,0.15)", text: "#C7CFCD" },
};
