import { getComingSoonCourses } from "@/lib/courses";
import { CourseCard } from "../CourseCard";
import { Button, ArrowIcon } from "../ui/Button";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";

export function HomeCourses() {
  const comingSoon = getComingSoonCourses();
  // 6 ใบพอดี 2 แถว — ที่เหลือไปดูครบพร้อมเส้นทางแนะนำที่ /courses
  const preview = comingSoon.slice(0, 6);

  return (
    <section className="container-x py-24 md:py-32">
      <Reveal>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-display text-[clamp(1.9rem,1.3rem+2.2vw,3rem)] font-semibold tracking-[-0.03em] text-white">
            เส้นทางยังไปต่ออีก {comingSoon.length} สเตจ
          </h2>
          <p className="mt-3.5 text-white/60">
            แต่ละคอร์สคือหนึ่งขั้นของระบบเดียวกัน เลือกตามบทบาทได้เลย
          </p>
        </div>
      </Reveal>

      <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {preview.map((c) => (
          <RevealItem key={c.id}>
            <CourseCard course={c} />
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal delay={0.08}>
        <div className="mt-10 text-center">
          <Button href="/courses" variant="ghost" size="lg" magnetic={false}>
            ดูครบทั้ง 8 คอร์ส พร้อมเส้นทางแนะนำ <ArrowIcon />
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
