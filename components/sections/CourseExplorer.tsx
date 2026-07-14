"use client";

import { useState } from "react";
import { courses, learningPaths } from "@/lib/courses";
import { CourseCard } from "@/components/CourseCard";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

/**
 * The CORE 8 explorer — a clickable journey rail (OPERATE → MASTER),
 * role-based path filters, and the course grid. Selecting a path dims
 * courses outside it and numbers the ones on it in learning order.
 */
export function CourseExplorer() {
  const [activePath, setActivePath] = useState<string | null>(null);
  const path = learningPaths.find((p) => p.id === activePath);
  const orderOf = (slug: string) =>
    path ? path.slugs.indexOf(slug) : -1;

  const scrollToCourse = (slug: string) => {
    document.getElementById(`course-${slug}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div>
      {/* journey rail — the CORE 8 as a visible progression */}
      <div className="mb-10 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex min-w-max items-center gap-1">
          {courses.map((c, i) => {
            const [num, stage] = c.category.split(" · ");
            return (
              <div key={c.id} className="flex items-center">
                {i > 0 && <span className="mx-1 h-px w-4 bg-white/15 sm:w-6" aria-hidden />}
                <button
                  type="button"
                  onClick={() => scrollToCourse(c.slug)}
                  className="group flex items-center gap-2 rounded-full bg-white/[0.05] px-3.5 py-2 transition-colors hover:bg-white/[0.09]"
                  aria-label={`ไปที่คอร์ส ${c.title}`}
                >
                  <span className="font-grotesk text-[0.7rem] font-semibold tabular-nums aurora-text">{num}</span>
                  <span className="font-grotesk text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white/60 transition-colors group-hover:text-white">
                    {stage}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* role filter — the learning paths as chips */}
      <div className="mb-8 flex flex-wrap items-center gap-2">
        <span className="mr-1 font-grotesk text-xs uppercase tracking-[0.14em] text-white/45">
          คุณคือใคร:
        </span>
        <button
          type="button"
          onClick={() => setActivePath(null)}
          className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
            activePath === null
              ? "bg-aurora-200/15 text-aurora-100"
              : "bg-white/[0.05] text-white/55 hover:bg-white/[0.09] hover:text-white/80"
          }`}
        >
          ทั้งหมด
        </button>
        {learningPaths.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setActivePath(activePath === p.id ? null : p.id)}
            title={p.persona}
            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
              activePath === p.id
                ? "bg-aurora-200/15 text-aurora-100"
                : "bg-white/[0.05] text-white/55 hover:bg-white/[0.09] hover:text-white/80"
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      {path && (
        <p className="mb-6 text-sm leading-relaxed text-white/50">
          {path.persona} — เรียนตามลำดับหมายเลขบนการ์ด ({path.slugs.length} คอร์ส)
        </p>
      )}

      <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => {
          const order = orderOf(c.slug);
          const dimmed = path ? order === -1 : false;
          return (
            <RevealItem key={c.id}>
              <div
                id={`course-${c.slug}`}
                className={`relative h-full scroll-mt-28 transition-opacity duration-300 ${
                  dimmed ? "opacity-30" : "opacity-100"
                }`}
              >
                {order >= 0 && (
                  <span className="absolute -left-2 -top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full aurora-bg font-grotesk text-sm font-semibold text-[#04211d] shadow-lg">
                    {order + 1}
                  </span>
                )}
                <CourseCard course={c} />
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </div>
  );
}
