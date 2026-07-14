import { Masthead } from "@/components/sections/Masthead";
import { Concept } from "@/components/sections/Concept";
import { FeaturedCourse } from "@/components/FeaturedCourse";
import { HomeCourses } from "@/components/sections/HomeCourses";
import { BrandManifesto } from "@/components/sections/BrandManifesto";
import { CtaSection } from "@/components/sections/CtaSection";
import { Reveal } from "@/components/ui/Reveal";
import { getAvailableCourse } from "@/lib/courses";
import type { ComponentType } from "react";
import { ClaudeIcon, OpenAI, Supabase } from "@/components/ui/icons";

const PARTNERS: { name: string; icon?: ComponentType<{ className?: string }> }[] = [
  { name: "Claude", icon: ClaudeIcon },
  { name: "OpenAI", icon: OpenAI },
  { name: "Supabase", icon: Supabase },
  { name: "Next.js" },
  { name: "n8n" },
  { name: "ClickUp" },
  { name: "Vercel" },
];

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
              <h2 className="mt-3.5 font-display text-[clamp(1.9rem,1.3rem+2.2vw,3rem)] font-semibold tracking-[-0.03em] text-white">
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
          <p className="mb-7 text-center font-grotesk text-xs uppercase tracking-[0.16em] text-white/45">
            เครื่องมือที่ใช้จริงในคลาส
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-[clamp(24px,5vw,52px)] gap-y-6 opacity-70">
            {PARTNERS.map(({ name, icon: Icon }) => (
              <span key={name} className="flex items-center gap-2.5 text-white/55 transition-colors hover:text-white/80">
                {Icon && <Icon className="h-6 w-6" />}
                <span className="font-grotesk text-base font-medium tracking-tight">{name}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Brand manifesto */}
      <BrandManifesto />

      {/* 7. CTA */}
      <CtaSection />
    </>
  );
}
