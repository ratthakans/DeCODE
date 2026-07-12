import { site } from "@/lib/site";
import { Button, ArrowIcon } from "../ui/Button";

const VIDEO_ID = "rKV5JcALQoQ";

/**
 * Cinematic hero — a muted, looping YouTube video fills the whole section,
 * heavily faded to black so it reads as a moody backdrop for the brand lockup.
 */
export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-black">
      {/* full-bleed video background (16:9 scaled to cover) */}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2"
          src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&iv_load_policy=3`}
          title="DeCODE"
          allow="autoplay; encrypted-media; picture-in-picture"
          frameBorder={0}
          aria-hidden
        />
      </div>

      {/* black fade — video stays a subtle, cinematic backdrop (~90% dark) */}
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black" />

      {/* brand lockup */}
      <div className="container-x relative z-10 flex h-full flex-col items-center justify-center text-center">
        <span className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-aurora-100/20 bg-aurora-200/[0.06] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-mint-soft backdrop-blur-sm">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint shadow-[0_0_10px_2px_rgba(52,211,153,0.8)]" />
          เปิดรับรอบ · กรกฎาคม 2026
        </span>

        <h1 className="font-display text-6xl font-bold leading-none tracking-tight text-white sm:text-7xl lg:text-[8rem]">
          De<span className="text-mint">CO</span>DE
        </h1>

        <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
          {site.tagline} — เปลี่ยน Claude และ Automation ให้เป็นผู้ช่วยที่เก่งที่สุดของคุณ
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button href="/courses" variant="aurora" size="lg">
            ดูคอร์สทั้งหมด <ArrowIcon />
          </Button>
          <Button href="/concept" variant="ghost" size="lg" magnetic={false}>
            ทำไมต้อง DeCODE
          </Button>
        </div>
      </div>

      {/* fade into the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
}
