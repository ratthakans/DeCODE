import { HomeCourses } from "@/components/sections/HomeCourses";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { B2BSection } from "@/components/sections/B2BSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { ConceptTeaser } from "@/components/sections/ConceptTeaser";
import { Marquee } from "@/components/ui/Marquee";
import { OpenAI, Supabase, NextJsIcon, ClaudeIcon } from "@/components/ui/icons";

export default function HomePage() {
  return (
    <>
      {/* Tech Stack Marquee — first section; clears the fixed navbar */}
      <section className="bg-black pt-28 pb-8 md:pt-32 border-b border-white/10">
        <Marquee speed={30}>
          <div className="flex items-center gap-16 px-8">
            <div className="flex items-center gap-4 text-white/50"><ClaudeIcon className="h-8 w-8" /> <span className="font-display text-xl font-semibold">Claude</span></div>
            <div className="flex items-center gap-4 text-white/50"><NextJsIcon className="h-8 w-24" /></div>
            <div className="flex items-center gap-4 text-white/50"><Supabase className="h-8 w-8" /> <span className="font-display text-xl font-semibold">Supabase</span></div>
            <div className="flex items-center gap-4 text-white/50"><OpenAI className="h-8 w-8" /> <span className="font-display text-xl font-semibold">OpenAI</span></div>
            <div className="flex items-center gap-4 text-white/50"><span className="font-display text-xl font-bold tracking-tighter">CURSOR</span></div>
            <div className="flex items-center gap-4 text-white/50"><span className="font-display text-xl font-semibold">Vercel</span></div>
            <div className="flex items-center gap-4 text-white/50"><span className="font-display text-xl font-semibold">TailwindCSS</span></div>
          </div>
        </Marquee>
      </section>

      <HomeCourses />
      <ConceptTeaser />
      <Features />
      {/* Trust layer: testimonials answer "does it work for others" */}
      <Testimonials />
      <B2BSection />
      <CtaSection />
    </>
  );
}
