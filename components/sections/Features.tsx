import { SectionHeading } from "../ui/SectionHeading";
import { RevealGroup, RevealItem } from "../ui/Reveal";

interface Feature {
  title: string;
  body: string;
  glyph: string;
  span: string;
  tint: string;
}

const features: Feature[] = [
  {
    title: "เรียนแบบลงมือทำ ไม่ใช่นั่งฟัง",
    body: "ทุกคอร์สจบด้วย Capstone ที่ให้คุณเอางานจริงของตัวเองมาทำในคลาส เดินออกจากห้องพร้อมระบบที่รันต่อได้ทันที",
    glyph: "◇",
    span: "md:col-span-2 md:row-span-1",
    tint: "",
  },
  {
    title: "ไม่ต้องมีพื้นฐานโค้ด",
    body: "สอนวิธี ‘สั่งงาน’ AI ด้วยภาษาคน เจ้าของร้าน คนทำงาน ผู้บริหาร เรียนได้หมด",
    glyph: "❋",
    span: "md:col-span-1",
    tint: "",
  },
  {
    title: "โค้ชประกบรายโต๊ะ",
    body: "รับจำนวนจำกัดต่อรอบ เพื่อให้ทุกคนได้คำแนะนำแบบใกล้ชิด ไม่ใช่สัมมนาหมื่นคน",
    glyph: "✦",
    span: "md:col-span-1",
    tint: "",
  },
  {
    title: "ได้คลัง Prompt & Template ติดมือกลับ",
    body: "ทุกคอร์สแถมคลังคำสั่งและ Blueprint ที่ก๊อปไปปรับใช้กับงานจริงได้เลย ไม่ต้องเริ่มจากศูนย์",
    glyph: "◈",
    span: "md:col-span-2",
    tint: "",
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
              className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl liquid-glass p-6 transition-colors hover:border-mint/25`}
            >
              <span className="font-display text-3xl text-mint/70 transition-transform duration-500 group-hover:scale-110 group-hover:text-accent">
                {f.glyph}
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-white">
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
