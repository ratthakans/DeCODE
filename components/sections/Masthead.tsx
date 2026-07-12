import Image from "next/image";
import { site } from "@/lib/site";
import { Button, ArrowIcon } from "../ui/Button";

const STATS = [
  { n: "7", s: "+", l: "คอร์ส" },
  { n: "24", s: "", l: "ที่นั่ง/รอบ" },
  { n: "100", s: "%", l: "ลงมือทำจริง" },
  { n: "2", s: "วัน", l: "ได้ระบบกลับบ้าน" },
];

/**
 * Cinematic masthead — a dark, moody photograph fills the section, faded
 * hard to black with an aurora glow, carrying a restrained brand lockup.
 */
export function Masthead() {
  return (
    <section className="relative flex min-h-[88svh] w-full items-center overflow-hidden bg-black">
      {/* cinematic backdrop */}
      <Image
        src="https://images.pexels.com/photos/28494632/pexels-photo-28494632.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
        fill
        priority
        aria-hidden
        className="object-cover opacity-55"
      />
      {/* fades: cinematic dark + aurora glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_0%,rgba(18,165,148,0.16),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black" />

      <div className="container-x relative z-10 w-full">
        <div className="mx-auto max-w-3xl pt-24 text-center">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-mint">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint shadow-[0_0_10px_2px_rgba(45,212,191,0.7)]" />
            AI Institute · Bangkok
          </span>

          <h1 className="mt-7 font-display text-[clamp(2.7rem,1.5rem+5vw,5.4rem)] font-bold leading-[1.02] tracking-[-0.035em] text-[#f8fbfa] text-balance">
            ลดเวลาทำงาน 10 เท่า
            <br />
            ด้วย{" "}
            <span className="bg-gradient-to-r from-mint via-aurora-200 to-aurora-300 bg-clip-text text-transparent">
              AI ที่ใช้ได้จริง
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-[52ch] text-[clamp(1.05rem,0.98rem+0.4vw,1.3rem)] leading-relaxed text-white/65">
            {site.tagline} — เรียน onsite เปลี่ยน Claude และ Automation ให้เป็นระบบที่เอากลับไปใช้กับธุรกิจได้ทันที
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/courses" variant="aurora" size="lg">
              ดูคอร์สทั้งหมด <ArrowIcon />
            </Button>
            <Button href="/concept" variant="ghost" size="lg" magnetic={false}>
              ทำไมต้อง DeCODE
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-x-[clamp(28px,6vw,72px)] gap-y-6">
            {STATS.map((st) => (
              <div key={st.l}>
                <div className="font-display text-[clamp(1.8rem,1.3rem+1.6vw,2.6rem)] font-bold tracking-[-0.02em] tabular-nums text-white">
                  {st.n}
                  <span className="text-aurora-200">{st.s}</span>
                </div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-soft/70">
                  {st.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
