import { Masthead } from "@/components/sections/Masthead";
import { Concept } from "@/components/sections/Concept";
import { FeaturedCourse } from "@/components/FeaturedCourse";
import { HomeCourses } from "@/components/sections/HomeCourses";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaSection } from "@/components/sections/CtaSection";
import { Reveal } from "@/components/ui/Reveal";
import { getAvailableCourse } from "@/lib/courses";

const PARTNERS = ["Claude", "OpenAI", "Next.js", "Supabase", "n8n", "ClickUp", "Vercel"];

export default function HomePage() {
  const featured = getAvailableCourse();

  return (
    <>
      {/* 1. Hero */}
      <Masthead />

      {/* 2. Concept */}
      <Concept />

      {/* 3. Course promo (featured) */}
      {featured && (
        <section className="container-x py-24 md:py-32">
          <Reveal>
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <span className="font-grotesk text-xs font-semibold uppercase tracking-[0.12em] aurora-text">
                คอร์สแนะนำ · เปิดรับตอนนี้
              </span>
              <h2 className="mt-3.5 font-display text-[clamp(1.9rem,1.3rem+2.2vw,3rem)] font-bold tracking-[-0.03em] text-white">
                รอบเดียวก่อนปิดปีนี้
              </h2>
            </div>
          </Reveal>
          <FeaturedCourse course={featured} />
        </section>
      )}

      {/* 4. Remaining courses */}
      <HomeCourses />

      {/* 5. Partner logos */}
      <section className="border-y border-white/10 py-14">
        <div className="container-x">
          <p className="mb-7 text-center font-grotesk text-xs uppercase tracking-[0.16em] text-white/35">
            เครื่องมือที่ใช้จริงในคลาส
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-[clamp(28px,6vw,64px)] gap-y-6 opacity-60">
            {PARTNERS.map((p) => (
              <span key={p} className="font-grotesk text-lg font-bold tracking-tight text-white/70">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <Testimonials />

      {/* 7. CTA */}
      <CtaSection />
    </>
  );
}
