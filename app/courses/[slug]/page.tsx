import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { courses, getCourse } from "@/lib/courses";
import { courseLineLink, lineLink, notifyLineLink } from "@/lib/line";
import { Reveal } from "@/components/ui/Reveal";


import { CourseHero } from "@/components/course/CourseHero";
import { CourseOutcomes } from "@/components/course/CourseOutcomes";
import { CourseSyllabus } from "@/components/course/CourseSyllabus";
import { CourseInstructor } from "@/components/course/CourseInstructor";
import { CourseAction } from "@/components/course/CourseAction";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const course = getCourse(params.slug);
  if (!course) return { title: "ไม่พบคอร์ส" };
  return {
    title: course.title,
    description: course.subtitle,
  };
}

export default function CourseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const course = getCourse(params.slug);
  if (!course) notFound();

  const available = course.status === "available";
  const b2b = course.businessType === "b2b";
  // b2b (องค์กร) ขายแบบ consultative — ชวนคุย ไม่ใช่กดจอง
  const ctaHref = b2b
    ? lineLink(`สนใจหลักสูตร ${course.title} สำหรับองค์กร ขอนัดคุยรายละเอียดครับ/ค่ะ`)
    : available
      ? courseLineLink(course.title, course.schedule)
      : notifyLineLink(course.title);
  const ctaLabel = b2b ? "นัดคุยกับทีมเรา" : available ? "สอบถาม / จองที่นั่ง" : "แจ้งเตือนเมื่อเปิด";

  return (
    <>
      <CourseHero 
        course={course} 
        available={available} 
        ctaHref={ctaHref} 
        ctaLabel={ctaLabel} 
      />
      <CourseOutcomes course={course} />
      <CourseSyllabus course={course} />
      <CourseInstructor course={course} />

      {/* bottom CTA */}
      <section className="container-x py-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-white/[0.04] px-6 py-14 text-center">
            <div className="relative mx-auto max-w-xl">
              <h2 className="font-display text-fluid-xl font-semibold text-white">
                {b2b ? "คุยกันก่อน ไม่มีข้อผูกมัด" : available ? "พร้อมจองที่นั่งแล้ว?" : "อยากรู้ก่อนใครเมื่อเปิด?"}
              </h2>
              <p className="mt-4 text-white/60">
                {b2b
                  ? "เล่าโจทย์ขององค์กรคุณให้เราฟัง เราจะช่วยประเมินว่าหลักสูตรนี้ตอบโจทย์หรือไม่"
                  : available
                    ? `เหลือ ${course.seatsAvailable} ที่นั่งสุดท้ายในรอบนี้ ทักไลน์มาจองได้เลย`
                    : "กดแจ้งเตือน แล้วเราจะทักไปทันทีที่รอบใหม่เปิดจอง"}
              </p>
              <div className="mt-8">
                <CourseAction
                  available={available}
                  ctaHref={ctaHref}
                  ctaLabel={ctaLabel}
                  courseSlug={course.slug}
                  courseTitle={course.title}
                />
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
