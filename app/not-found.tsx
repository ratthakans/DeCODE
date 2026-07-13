import { GradientField } from "@/components/ui/GradientField";
import { Button, ArrowIcon } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-24">
      <GradientField />
      <div className="container-x relative text-center">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-aurora-200/70">
          404
        </p>
        <h1 className="mx-auto mt-4 max-w-lg font-display text-fluid-2xl font-bold text-white">
          ไม่เจอหน้านี้ <span className="text-aurora-200">แต่เจอทางกลับ</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-white/55">
          หน้าที่คุณกำลังหาอาจถูกย้ายหรือยังไม่เปิด ลองกลับไปหน้าแรกหรือดูคอร์สทั้งหมด
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/" variant="aurora" size="md">
            กลับหน้าแรก <ArrowIcon />
          </Button>
          <Button href="/courses" variant="ghost" size="md" magnetic={false}>
            ดูคอร์ส
          </Button>
        </div>
      </div>
    </section>
  );
}
