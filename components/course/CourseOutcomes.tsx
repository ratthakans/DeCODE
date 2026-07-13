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
    </section>
  );
}
