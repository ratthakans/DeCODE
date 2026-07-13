import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const alignCls =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <div className={`flex max-w-2xl flex-col ${alignCls} ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow mb-4 inline-flex items-center gap-2">
            <span className="h-px w-6 bg-aurora-200/50" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="text-balance font-display text-fluid-xl font-semibold leading-[1.1] text-white">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.12}>
          <p className="mt-4 text-fluid-base leading-relaxed text-white/60">
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
