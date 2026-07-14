import { Course } from "@/lib/courses";
import { Reveal } from "@/components/ui/Reveal";

export function CourseSyllabus({ course }: { course: Course }) {
  return (
    <section className="container-x py-16">
      <Reveal>
        <h2 className="font-display text-fluid-lg font-semibold text-white">
          เนื้อหาหลักสูตร
        </h2>
      </Reveal>
      <div className="mt-12 relative border-l border-white/[0.08] ml-4 md:ml-6 pl-8 space-y-12">
        {course.syllabus.map((day, di) => (
          <Reveal key={day.day} delay={di * 0.06}>
            <div className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[37px] md:-left-[45px] top-1 h-4 w-4 rounded-full bg-white/[0.12] transition-colors group-hover:bg-aurora-200 group-hover:shadow-[0_0_12px_rgba(45,212,191,0.5)]" />

              <div className="flex flex-col gap-4">
                <div className="shrink-0">
                  <span className="font-mono text-xs uppercase tracking-widest text-aurora-200">
                    Module {String(di + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight text-white transition-colors group-hover:text-aurora-100">
                    {day.day.replace(/^(DAY|MODULE)\s*\d+\s*—\s*/, "")}
                  </h3>
                </div>
                <ul className="flex-1 space-y-4">
                  {day.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-4 text-base leading-relaxed text-white/70"
                    >
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-white/30" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
