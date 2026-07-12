import type { Metadata } from "next";
import { site } from "@/lib/site";
import { lineLink } from "@/lib/line";
import { GradientField } from "@/components/ui/GradientField";
import { Reveal } from "@/components/ui/Reveal";
import { Button, LineIcon } from "@/components/ui/Button";
import { QrMock } from "@/components/ui/QrMock";
import { ContactFormB2C, ContactFormB2B } from "@/components/ContactForms";

export const metadata: Metadata = {
  title: "ติดต่อ",
  description:
    "ติดต่อ DeCODE — สอบถามคอร์สผ่าน Line OA หรือขอใบเสนอราคาสำหรับองค์กร",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 md:pt-44">
        <GradientField className="h-[130%]" intensity={0.8} />
        <div className="container-x relative pb-10">
          <Reveal>
            <span className="eyebrow">ติดต่อเรา</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-5 max-w-3xl text-balance font-display text-fluid-2xl font-extrabold leading-[1.05] text-white">
              คุยกับเราก่อนได้{" "}
              <span className="text-gradient-teal">ไม่มีข้อผูกมัด</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-xl text-fluid-base leading-relaxed text-white/60">
              ช่องทางหลักคือ Line OA — ทักมาถามที่ว่าง ขอคำแนะนำคอร์ส
              หรือให้เราช่วยเลือกสิ่งที่เหมาะกับธุรกิจคุณ
            </p>
          </Reveal>
        </div>
      </section>

      {/* Line primary + info */}
      <section className="container-x py-12">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-lime/20 bg-gradient-to-br from-teal-500/10 to-transparent p-8">
              <div>
                <span className="eyebrow text-lime/80">ช่องทางหลัก</span>
                <h2 className="mt-3 font-display text-fluid-lg font-bold text-white">
                  ทักไลน์ตอบไว ที่สุด
                </h2>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
                  แอดไลน์ {site.lineOaId} แล้วพิมพ์ชื่อคอร์สที่สนใจได้เลย
                  ทีมงานพร้อมตอบเรื่องที่ว่าง ราคา และรอบเรียน
                </p>
                <div className="mt-6">
                  <Button href={lineLink()} external variant="aurora" size="lg">
                    <LineIcon /> เพิ่มเพื่อน {site.lineOaId}
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full items-center gap-6 rounded-3xl border border-white/8 bg-ink-100/50 p-8">
              <QrMock />
              <div>
                <p className="font-display font-semibold text-white">
                  สแกนเพื่อแอดไลน์
                </p>
                <p className="mt-1 text-xs text-white/45">
                  (QR ตัวอย่าง — ใช้ QR จริงตอนขึ้นระบบ)
                </p>
                <ul className="mt-5 space-y-2 text-sm text-white/60">
                  <li>{site.hours}</li>
                  <li>{site.phone}</li>
                  <li>
                    <a href={`mailto:${site.email}`} className="hover:text-lime">
                      {site.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* forms — B2C + B2B split path */}
      <section className="container-x py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* B2C */}
          <Reveal>
            <div className="rounded-3xl border border-white/8 bg-ink-100/40 p-7">
              <span className="eyebrow">บุคคลทั่วไป</span>
              <h2 className="mt-3 font-display text-lg font-bold text-white">
                สอบถามคอร์ส / ขอคำแนะนำ
              </h2>
              <p className="mt-2 text-sm text-white/55">
                กรอกสั้นๆ แล้วเราติดต่อกลับ หรือกดทักไลน์เพื่อคุยทันที
              </p>
              <div className="mt-6">
                <ContactFormB2C />
              </div>
            </div>
          </Reveal>

          {/* B2B entry point */}
          <Reveal delay={0.08}>
            <div
              id="b2b"
              className="scroll-mt-28 rounded-3xl border border-teal-300/20 bg-gradient-to-br from-teal-500/[0.07] to-transparent p-7"
            >
              <div className="flex items-center gap-2">
                <span className="eyebrow">สำหรับองค์กร</span>
                <span className="rounded-full bg-teal-400/15 px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-widest text-teal-200">
                  B2B
                </span>
              </div>
              <h2 className="mt-3 font-display text-lg font-bold text-white">
                ขอใบเสนอราคา / In-house training
              </h2>
              <p className="mt-2 text-sm text-white/55">
                ซื้อสิทธิ์ให้พนักงาน หรือจัดอบรมในองค์กร —
                ผู้เชี่ยวชาญจะติดต่อกลับพร้อมใบเสนอราคา
              </p>
              <div className="mt-6">
                <ContactFormB2B />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="pb-16" />
    </>
  );
}
