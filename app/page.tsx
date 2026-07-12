import { Masthead } from "@/components/sections/Masthead";
import { HomeCourses } from "@/components/sections/HomeCourses";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaSection } from "@/components/sections/CtaSection";
import { Marquee } from "@/components/ui/Marquee";
import { OpenAI, Supabase, NextJsIcon, ClaudeIcon } from "@/components/ui/icons";

export default function HomePage() {
  return (
    <>
      <Masthead />

      {/* Trust strip */}
      <section className="border-y border-white/10 bg-black py-8">
        <Marquee speed={30}>
          <div className="flex items-center gap-16 px-8">
            <div className="flex items-center gap-4 text-white/45"><ClaudeIcon className="h-7 w-7" /> <span className="font-mono text-lg font-medium">Claude</span></div>
            <div className="flex items-center gap-4 text-white/45"><NextJsIcon className="h-7 w-24" /></div>
            <div className="flex items-center gap-4 text-white/45"><Supabase className="h-7 w-7" /> <span className="font-mono text-lg font-medium">Supabase</span></div>
            <div className="flex items-center gap-4 text-white/45"><OpenAI className="h-7 w-7" /> <span className="font-mono text-lg font-medium">OpenAI</span></div>
            <div className="flex items-center gap-4 text-white/45"><span className="font-mono text-lg font-medium tracking-tight">Cursor</span></div>
            <div className="flex items-center gap-4 text-white/45"><span className="font-mono text-lg font-medium">Vercel</span></div>
            <div className="flex items-center gap-4 text-white/45"><span className="font-mono text-lg font-medium">TailwindCSS</span></div>
          </div>
        </Marquee>
      </section>

      <HomeCourses />
      <Features />
      {/* Trust layer: testimonials answer "does it work for others" */}
      <Testimonials />
      <CtaSection />
    </>
  );
}
