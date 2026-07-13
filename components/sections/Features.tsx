import { SectionHeading } from "../ui/SectionHeading";
import { RevealGroup, RevealItem } from "../ui/Reveal";

interface Feature {
  title: string;
  body: string;
  span: string;
}

const features: Feature[] = [
  {
    title: "เรียนแบบลงมือทำ ไม่ใช่นั่งฟัง",
    body: "ทุกคอร์สจบด้วย Capstone ที่ให้คุณเอางานจริงของตัวเองมาทำในคลาส เดินออกจากห้องพร้อมระบบที่รันต่อได้ทันที",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    title: "ไม่ต้องมีพื้นฐานโค้ด",
    body: "สอนวิธี ‘สั่งงาน’ AI ด้วยภาษาคน เจ้าของร้าน คนทำงาน ผู้บริหาร เรียนได้หมด",
    span: "md:col-span-1",
  },
  {
    title: "โค้ชประกบรายโต๊ะ",
    body: "รับจำนวนจำกัดต่อรอบ เพื่อให้ทุกคนได้คำแนะนำแบบใกล้ชิด ไม่ใช่สัมมนาหมื่นคน",
    span: "md:col-span-1",
  },
  {
    title: "ได้คลัง Prompt & Template ติดมือกลับ",
    body: "ทุกคอร์สแถมคลังคำสั่งและ Blueprint ที่ก๊อปไปปรับใช้กับงานจริงได้เลย ไม่ต้องเริ่มจากศูนย์",
    span: "md:col-span-2",
  },
];

export function Features() {
  return (
    <section className="container-x py-24 md:py-32">
      <SectionHeading
        eyebrow="ทำไมต้อง DeCODE"
        title={
          <>
            คอร์ส AI ที่ออกแบบมาให้{" "}
            <span className="text-gradient-teal">เอาไปใช้ได้จริง</span>
          </>
        }
        intro="ไม่ใช่คอร์สที่สอนให้ตื่นเต้นกับ AI แล้วกลับบ้านไปทำอะไรไม่ถูก แต่คือแคมป์ที่เปลี่ยนวิธีทำงานของคุณตั้งแต่วันแรก"
        className="mb-14"
      />

      <RevealGroup className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 md:grid-cols-3">
        {features.map((f) => (
          <RevealItem key={f.title} className={f.span}>
            <div
              className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-colors hover:border-white/20`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-aurora-200/70 transition-colors group-hover:bg-aurora-100" />
              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {f.body}
                </p>
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
