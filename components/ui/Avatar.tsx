import type { Course } from "@/lib/courses";
import { accentMap } from "@/lib/accents";

import Image from "next/image";

function initials(name: string): string {
  const clean = name.trim();
  // For Thai names, first char of each word; keep it to 2 glyphs.
  const parts = clean.split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] ?? "") + (parts[1][0] ?? "");
  return clean.slice(0, 2);
}

/** Deterministic gradient avatar with initials or image */
export function Avatar({
  name,
  src,
  accent = "teal",
  size = 56,
  className = "",
}: {
  name: string;
  src?: string;
  accent?: Course["accent"];
  size?: number;
  className?: string;
}) {
  const a = accentMap[accent];
  
  if (src) {
    return (
      <div 
        className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full ${className}`}
        style={{ width: size, height: size }}
      >
        <Image
          src={src}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full font-display font-semibold text-ink ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(120% 120% at 20% 15%, ${a.from}, ${a.to})`,
        fontSize: size * 0.36,
        boxShadow: `0 0 0 1px ${a.ring}, inset 0 0 24px rgba(0,0,0,0.25)`,
      }}
      aria-hidden
    >
      <span className="absolute inset-0 opacity-25 mix-blend-overlay noise" />
      {initials(name)}
    </span>
  );
}
