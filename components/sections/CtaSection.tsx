import { GradientField } from "../ui/GradientField";
import { Reveal } from "../ui/Reveal";
import { Button, LineIcon, ArrowIcon } from "../ui/Button";
import { lineLink } from "@/lib/line";

export function CtaSection() {
  return (
    <section className="container-x py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] liquid-glass border-aurora-300/20 px-6 py-16 text-center sm:px-12 sm:py-24 noise">
          <GradientField intensity={0.9} />
          <div className="relative mx-auto max-w-2xl">
            <span className="eyebrow">พร้อมเริ่มแล้วใช่ไหม</span>
            <h2 className="mt-5 text-balance font-display text-fluid-2xl font-extrabold leading-[1.05] text-white">
              ช้าวันไหน ก็ถูกแซงวันนั้น
              <br />
              <span className="text-gradient-teal">เริ่มก่อน ได้เปรียบก่อน</span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-fluid-base leading-relaxed text-white/60">
              บอกเราว่าคุณทำธุรกิจอะไร อยากใช้ AI กับงานส่วนไหน
              เดี๋ยวเราแนะนำคอร์สที่เหมาะกับคุณให้เอง
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
