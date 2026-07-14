import Link from "next/link";
import { courses, learningPaths } from "@/lib/courses";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const bySlug = new Map(courses.map((c) => [c.slug, c]));

export function LearningPaths() {
  return (
    <section className="container-x py-24 md:py-32">
      <Reveal>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="font-grotesk text-xs font-semibold uppercase tracking-[0.16em] aurora-text">
            เส้นทางการเรียนรู้ · Learning Paths
          </span>
          <h2 className="mt-3.5 font-display text-[clamp(1.9rem,1.3rem+2.2vw,3rem)] font-semibold tracking-[-0.03em] text-white">
            ไม่ต้องเรียนครบทั้ง 8
          </h2>
          <p className="mt-4 leading-relaxed text-white/55">
            เลือกเส้นทางตามบทบาท เป้าหมาย และระดับความพร้อมของคุณ — แต่ละสายเริ่มที่ Claude Operator เหมือนกัน
          </p>
        </div>
      </Reveal>

      <RevealGroup className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {learningPaths.map((path) => (
          <RevealItem key={path.id}>
            <div className="flex h-full flex-col rounded-[18px] border border-white/10 bg-ink-100 p-7">
              <h3 className="font-display text-xl font-semibold text-white">{path.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/50">{path.persona}</p>

              <ol className="mt-6 flex flex-1 flex-col gap-px">
                {path.slugs.map((slug, i) => {
                  const course = bySlug.get(slug);
                  if (!course) return null;
                  return (
                    <li key={slug}>
                      <Link
                        href={`/courses/${slug}`}
                        className="group flex items-center gap-3 rounded-lg py-2 transition-colors hover:bg-white/[0.04]"
                      >
                        <span className="font-grotesk text-xs font-semibold tabular-nums aurora-text">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm text-white/80 transition-colors group-hover:text-white">
                          {course.title}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
