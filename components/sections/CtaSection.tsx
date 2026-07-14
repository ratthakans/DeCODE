import { Reveal } from "../ui/Reveal";
import { Button, LineIcon, ArrowIcon } from "../ui/Button";
import { lineLink } from "@/lib/line";

export function CtaSection() {
  return (
    <section className="container-x py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[28px] border border-white/16 px-6 py-14 text-center sm:py-20">
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(60% 90% at 50% 0,rgba(45,212,191,0.18),transparent 65%)" }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-xl">
            <h2 className="font-display text-[clamp(1.9rem,1.4rem+2.2vw,3rem)] font-semibold tracking-[-0.03em] text-white">
              ปิดช่องว่างระหว่าง<span className="aurora-text">คุณกับ AI</span>
            </h2>
            <p className="mt-4 text-white/60">
              บอกเราว่าคุณทำธุรกิจอะไร เราจะแนะนำเส้นทางเรียนที่เหมาะกับบทบาทและเป้าหมายของคุณ
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={lineLink()} external variant="aurora" size="lg">
                <LineIcon /> ทักไลน์สอบถาม
              </Button>
              <Button href="/courses" variant="ghost" size="lg" magnetic={false}>
                ดูคอร์สทั้งหมด <ArrowIcon />
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
