import { getComingSoonCourses } from "@/lib/courses";
import { CourseCard } from "../CourseCard";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";

export function HomeCourses() {
  const courses = getComingSoonCourses();

  return (
    <section className="container-x py-24 md:py-32">
      <Reveal>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="font-grotesk text-xs font-semibold uppercase tracking-[0.12em] aurora-text">
            หลักสูตรทั้งหมด
          </span>
          <h2 className="mt-3.5 font-display text-[clamp(1.9rem,1.3rem+2.2vw,3rem)] font-semibold tracking-[-0.03em] text-white">
            เลือกเส้นทางของคุณ
          </h2>
          <p className="mt-3.5 text-white/60">
            อีก {courses.length} คอร์สกำลังจะเปิด — กดจองสิทธิ์ไว้ก่อนได้ เราจะแจ้งเตือนเมื่อเปิดรอบ
          </p>
        </div>
      </Reveal>

      <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <RevealItem key={c.id}>
            <CourseCard course={c} />
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
