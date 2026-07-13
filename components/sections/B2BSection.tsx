import Link from "next/link";
import { Reveal } from "../ui/Reveal";
import { ArrowIcon, Button } from "../ui/Button";

/**
 * B2B entry point — separate path, same brand. More formal tone than B2C.
 * Links to the short quote-request form on /contact, not straight to Line.
 */
export function B2BSection() {
  return (
    <section className="container-x py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] liquid-glass p-8 sm:p-12">
          {/* subtle formal gradient — no signature accent here, this path is B2B */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-aurora-200/10 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <span className="eyebrow mb-4 inline-flex items-center gap-2">
                <span className="h-px w-6 bg-aurora-200/50" />
                สำหรับองค์กร
              </span>
              <h2 className="max-w-xl font-display text-fluid-lg font-bold leading-tight text-white">
                อยากอัปสกิล AI ให้ทั้งทีม หรือจัดอบรม In-house?
              </h2>
              <p className="mt-4 max-w-lg text-fluid-base leading-relaxed text-white/60">
                DeCODE ออกแบบหลักสูตรเฉพาะองค์กร ปรับเนื้อหาให้ตรงกับงานจริงของทีมคุณ
                ทั้งซื้อสิทธิ์เป็นกลุ่มและจัดอบรมในสถานที่ พร้อมเอกสารและใบกำกับภาษีครบถ้วน
              </p>

              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/55">
                {["In-house training", "ซื้อสิทธิ์ให้พนักงาน", "ปรับหลักสูตรตามธุรกิจ", "ออกใบกำกับภาษี"].map(
                  (x) => (
                    <li key={x} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-aurora-200" />
                      {x}
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="rounded-2xl glass p-6">
              <p className="text-sm text-white/60">
                กรอกฟอร์มสั้นๆ แล้วผู้เชี่ยวชาญของเราจะติดต่อกลับพร้อมใบเสนอราคา
              </p>
              <div className="mt-5">
                <Button href="/contact#b2b" variant="teal" size="md" className="w-full">
                  ขอใบเสนอราคา / ปรึกษาผู้เชี่ยวชาญ <ArrowIcon />
                </Button>
              </div>
              <p className="mt-3 text-center font-mono text-[0.65rem] uppercase tracking-widest text-white/35">
                ช่องทางสำหรับลูกค้าองค์กรโดยเฉพาะ
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
