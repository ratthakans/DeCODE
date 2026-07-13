import type { Course } from "@/lib/courses";

/**
 * Badge must have a VOICE, not just a color. Available uses the signature mint;
 * coming_soon stays quiet teal so the available course never gets drowned out.
 */
export function StatusBadge({
  course,
  size = "md",
}: {
  course: Course;
  size?: "sm" | "md";
}) {
  const available = course.status === "available";
  const pad = size === "sm" ? "px-2.5 py-1 text-[0.65rem]" : "px-3.5 py-1.5 text-xs";

  if (available) {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full bg-accent font-mono font-semibold uppercase tracking-[0.14em] text-ink ${pad}`}
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-ink/70" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ink" />
        </span>
        {course.statusLabel}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-aurora-300/20 bg-aurora-300/5 font-mono uppercase tracking-[0.14em] text-aurora-200/90 ${pad}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-aurora-200/70" />
      {course.statusLabel}
    </span>
  );
}
