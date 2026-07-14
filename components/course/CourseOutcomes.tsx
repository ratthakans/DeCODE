import { Course } from "@/lib/courses";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function CourseOutcomes({ course }: { course: Course }) {
  return (
    <section className="container-x py-16">
      <Reveal>
        <h2 className="font-display text-fluid-lg font-semibold text-white">
          เรียนจบแล้ว คุณจะ<span className="text-gradient-teal">ทำอะไรได้</span>
        </h2>
      </Reveal>
      <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-3">
        {course.outcomes.map((o, i) => (
          <RevealItem key={o}>
            <div className="flex h-full flex-col gap-3 py-4">
              <span className="font-mono text-3xl font-normal text-white/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-base leading-relaxed text-white/90">{o}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      {course.notFor && course.notFor.length > 0 && (
        <Reveal delay={0.08}>
          <div className="mt-10 rounded-[20px] bg-white/[0.04] p-7">
            <h3 className="font-grotesk text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
              พูดตรง ๆ — คอร์สนี้อาจไม่เหมาะ ถ้า
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {course.notFor.map((n) => (
                <li key={n} className="flex items-start gap-3 text-sm leading-relaxed text-white/60">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-white/40" aria-hidden />
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      )}
    </section>
  );
}
