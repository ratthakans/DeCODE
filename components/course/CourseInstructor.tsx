import { Course } from "@/lib/courses";
import { Reveal } from "@/components/ui/Reveal";
import { Avatar } from "@/components/ui/Avatar";

export function CourseInstructor({ course }: { course: Course }) {
  return (
    <section className="container-x py-16">
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="flex h-full flex-col justify-center border-t border-white/10 pt-8">
            <span className="font-mono text-xs uppercase tracking-widest text-white/40">Instructor</span>
            <div className="mt-6 flex items-center gap-5">
              <Avatar
                name={course.instructor.name}
                src={course.instructor.photoUrl}
                accent={course.accent}
                size={80}
              />
              <div>
                <p className="font-display text-xl font-semibold text-white">
                  {course.instructor.name}
                </p>
                <p className="mt-1 text-sm text-white/50">
                  {course.instructor.title}
                </p>
              </div>
            </div>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              {course.instructor.bio}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex h-full flex-col justify-center border-t border-white/10 pt-8">
            <span className="font-mono text-xs uppercase tracking-widest text-white/40">Final Project</span>
            <h3 className="mt-6 font-display text-xl font-semibold text-white">
              สิ่งที่คุณจะสร้าง และได้กลับไปใช้จริง
            </h3>
            <ul className="mt-6 space-y-5">
              {course.bonuses.map((b) => (
                <li key={b} className="flex gap-4 text-base leading-relaxed text-white/70">
                  <span className="text-white/40">
                    —
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
