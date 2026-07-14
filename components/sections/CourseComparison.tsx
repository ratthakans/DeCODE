import Link from "next/link";
import { courses, courseDeliverable } from "@/lib/courses";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function CourseComparison() {
  return (
    <section className="container-x py-24 md:py-32">
      <Reveal>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="font-grotesk text-xs font-semibold uppercase tracking-[0.16em] aurora-text">
            เทียบให้ชัด · What You Get
          </span>
          <h2 className="mt-3.5 font-display text-[clamp(1.9rem,1.3rem+2.2vw,3rem)] font-semibold tracking-[-0.03em] text-white">
            แต่ละคอร์ส เดินออกจากห้องพร้อมอะไร
          </h2>
        </div>
      </Reveal>

      <Reveal>
        <div className="overflow-hidden rounded-[18px] border border-white/10 bg-ink-100">
          {/* header row — desktop only */}
          <div className="hidden grid-cols-[auto_1.6fr_1fr] gap-4 border-b border-white/10 px-6 py-4 md:grid">
            <span className="font-grotesk text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/35">
              Stage
            </span>
            <span className="font-grotesk text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/35">
              คอร์ส
            </span>
            <span className="font-grotesk text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/35">
              สิ่งที่ได้
            </span>
          </div>

          <RevealGroup>
            {courses.map((c) => {
              const stage = c.category.split(" · ")[1] ?? c.category;
              const num = c.category.split(" · ")[0];
              return (
                <RevealItem key={c.id} className="border-t border-white/[0.07] first:border-t-0">
                  <Link
                    href={`/courses/${c.slug}`}
                    className="group grid grid-cols-1 gap-1.5 px-6 py-5 transition-colors hover:bg-white/[0.03] md:grid-cols-[auto_1.6fr_1fr] md:items-center md:gap-4"
                  >
                    <span className="font-grotesk text-xs font-semibold tabular-nums text-white/45 md:w-24">
                      <span className="aurora-text">{num}</span>{" "}
                      <span className="hidden md:inline">{stage}</span>
                      <span className="md:hidden"> · {stage}</span>
                    </span>
                    <span>
                      <span className="font-display text-base font-semibold text-white transition-colors group-hover:text-aurora-100">
                        {c.title}
                      </span>
                      {c.edition && (
                        <span className="ml-2 hidden text-xs text-white/35 lg:inline">{c.edition}</span>
                      )}
                    </span>
                    <span className="text-sm text-white/65">{courseDeliverable(c)}</span>
                  </Link>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </Reveal>
    </section>
  );
}
