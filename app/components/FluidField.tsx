"use client";

import { useEffect, useRef } from "react";

export type FluidVariant = "hero" | "lens" | "ambient" | "cta";
export type FluidIntensity = "low" | "medium";

export function FluidField({ className = "", variant = "ambient", intensity = "medium" }: {
  className?: string;
  variant?: FluidVariant;
  intensity?: FluidIntensity;
}) {
  const fieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const field = fieldRef.current;
    if (!field) return;
    const observer = new IntersectionObserver(([entry]) => field.toggleAttribute("data-active", entry.isIntersecting), { rootMargin: "12%" });
    observer.observe(field);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={fieldRef} className={`fluid-field ${className}`} data-variant={variant} data-intensity={intensity} aria-hidden="true">
      <span className="fluid-orb fluid-orb-a" />
      <span className="fluid-orb fluid-orb-b" />
      <span className="fluid-ribbon" />
      <span className="fluid-lens" />
    </div>
  );
}
