import Image from "next/image";
import { testimonials } from "@/lib/testimonials";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";

export function Testimonials() {
  return (
    <section className="container-x py-24 md:py-32">
      <Reveal>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="font-grotesk text-xs font-semibold uppercase tracking-[0.12em] aurora-text">
            ผลลัพธ์จริงจากผู้เรียน
          </span>
          <h2 className="mt-3.5 font-display text-[clamp(1.9rem,1.3rem+2.2vw,3rem)] font-semibold tracking-[-0.03em] text-white">
            วัดกันที่ตัวเลข ไม่ใช่คำชม
          </h2>
        </div>
      </Reveal>

      <RevealGroup className="grid gap-4 md:grid-cols-3">
        {testimonials.map((t) => (
          <RevealItem key={t.id}>
            <figure className="flex h-full flex-col rounded-[18px] border border-white/10 bg-ink-100 p-7">
              <span className="mb-4 inline-block self-start rounded-full bg-aurora-200/10 px-3 py-1.5 text-sm font-semibold text-aurora-200">
                {t.beforeAfter.metric}
              </span>
              <blockquote className="flex-1 leading-relaxed text-white/90">“{t.quote}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                {t.photoUrl ? (
                  <Image src={t.photoUrl} alt={t.name} width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
                ) : (
                  <span className="h-10 w-10 rounded-full aurora-bg" aria-hidden />
                )}
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-white/50">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
