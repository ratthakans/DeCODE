import { testimonials } from "@/lib/testimonials";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { Avatar } from "../ui/Avatar";
import type { Course } from "@/lib/courses";

const accents: Course["accent"][] = ["teal", "neutral", "neutral"];

export function Testimonials() {
  return (
    <section className="container-x py-24 md:py-32">
      <SectionHeading
        eyebrow="ผลลัพธ์จริงจากผู้เรียน"
        title={
          <>
            ไม่มีพื้นฐานโค้ด{" "}
            <span className="text-gradient-teal">ก็เอาไปใช้กับธุรกิจได้จริง</span>
          </>
        }
        intro="เราไม่ขายคำชมลอยๆ — วัดกันที่ตัวเลขที่ลูกค้าประหยัดได้จริง ทั้งเงินและเวลา"
        className="mb-14"
      />

      <RevealGroup className="grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <RevealItem key={t.id}>
            <figure className="flex h-full flex-col rounded-3xl liquid-glass p-6">
              {/* before/after — the heart of the card */}
              <div className="mb-5 rounded-2xl border border-aurora-300/15 bg-aurora-300/[0.04] p-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-white/45 line-through decoration-white/25">
                    {t.beforeAfter.before}
                  </span>
                </div>
                <div className="mt-2 flex items-start gap-2">
                  <ArrowDown />
                  <span className="font-display text-base font-semibold leading-snug text-mint-soft">
                    {t.beforeAfter.after}
                  </span>
                </div>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="font-mono text-xs font-semibold text-accent">
                    {t.beforeAfter.metric}
                  </span>
                </div>
              </div>

              <blockquote className="flex-1 text-sm leading-relaxed text-white/70">
                “{t.quote}”
              </blockquote>

              <figcaption className="mt-5 flex items-center gap-3 border-t border-aurora-300/10 pt-4">
                <Avatar name={t.name} accent={accents[i % accents.length]} size={40} />
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-white/50">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}

function ArrowDown() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="mt-1 h-4 w-4 shrink-0 text-mint" aria-hidden>
      <path
        d="M12 5v14m0 0 5-5m-5 5-5-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
