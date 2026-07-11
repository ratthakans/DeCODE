import Link from "next/link";
import { courses } from "@/lib/courses";
import { CourseCard } from "../CourseCard";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { ArrowIcon } from "../ui/Button";

export function HomeCourses() {
  // Use all courses to display them in a unified A4 poster grid
  const displayCourses = courses.slice(0, 4);

  return (
    <section className="container-x py-24 md:py-32">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="หลักสูตรทั้งหมด"
          title={
            <>
              อัปสกิลรอบด้านด้วย{" "}
              <span className="text-gradient-teal">DeCODE</span>
            </>
          }
          intro="เลือกคอร์สที่เหมาะกับเป้าหมายของคุณ พร้อมเริ่มเรียนทันที หรือกดรับแจ้งเตือนสำหรับคอร์สใหม่"
        />
        <Link
          href="/courses"
          className="group inline-flex items-center gap-2 rounded-full border border-emerald-500/15 px-5 py-2.5 text-sm text-white/70 transition-colors hover:border-emerald-400/40 hover:text-emerald-400"
        >
          ดูทั้งหมด
          <ArrowIcon className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {displayCourses.map((c) => (
          <RevealItem key={c.id}>
            <CourseCard course={c} />
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
