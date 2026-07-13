import { site } from "@/lib/site";
import { Button, ArrowIcon, LineIcon } from "../ui/Button";
import { lineLink } from "@/lib/line";

const VIDEO_ID = "rKV5JcALQoQ";

/**
 * Hero — a muted, looping YouTube video dimmed hard to black, with an aurora
 * glow and a clean modern brand lockup on top.
 */
export function Masthead() {
  return (
    <section className="relative flex min-h-[92svh] w-full items-center overflow-hidden bg-black text-center">
      {/* dimmed video background (scaled up to crop the YouTube chrome) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe
          className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 scale-[1.45] pointer-events-none"
          src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&iv_load_policy=3`}
          title="DeCODE"
          allow="autoplay; encrypted-media"
          frameBorder={0}
          aria-hidden
        />
      </div>
      <div className="absolute inset-0 z-[1] bg-[rgba(3,5,6,0.8)]" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(60%_60%_at_50%_12%,rgba(45,212,191,0.14),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-32 bg-gradient-to-b from-transparent to-black" />

      <div className="container-x relative z-10 mx-auto w-full max-w-4xl py-24">
        <h1 className="sr-only">DeCODE — {site.tagline}</h1>

        <span className="inline-flex items-center gap-2 rounded-full border border-white/16 px-3.5 py-1.5 text-xs font-semibold text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-aurora-200 shadow-[0_0_8px_2px_rgba(45,212,191,0.7)]" />
          เปิดรับรอบ · กรกฎาคม 2026
        </span>

        <h2 className="mt-7 font-display text-[clamp(2.7rem,1.5rem+5.2vw,5.2rem)] font-bold leading-[1.05] tracking-[-0.035em] text-white text-balance">
          ลดเวลาทำงาน 10 เท่า
          <br />
          ด้วย <span className="aurora-text">AI ที่ใช้ได้จริง</span>
        </h2>

        <p className="mx-auto mt-6 max-w-[50ch] text-[clamp(1.05rem,0.98rem+0.4vw,1.28rem)] leading-relaxed text-white/65">
          {site.tagline} — เรียน onsite เปลี่ยน Claude และ Automation ให้เป็นระบบที่เอากลับไปใช้กับธุรกิจได้ทันที
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/courses" variant="aurora" size="lg">
            ดูคอร์สทั้งหมด <ArrowIcon />
          </Button>
          <Button href={lineLink()} external variant="ghost" size="lg" magnetic={false}>
            <LineIcon /> ทักไลน์สอบถาม
          </Button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-3 text-sm text-white/45">
          <span className="flex">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="-ml-2 h-6 w-6 rounded-full border-2 border-black aurora-bg first:ml-0" />
            ))}
          </span>
          ผู้เรียนกว่า 500+ คน · รีวิว 4.9/5
        </div>
      </div>
    </section>
  );
}
