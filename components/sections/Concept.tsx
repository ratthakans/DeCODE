import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";

const FORCES = [
  {
    name: "STRUCTURE",
    gloss: "จัดระเบียบสิ่งที่ซับซ้อน",
    body: "เราไม่สอนให้สุ่มลอง AI ไปเรื่อย ๆ แต่สอนให้เข้าใจว่าแต่ละเครื่องมือควรอยู่ตรงไหนของกระบวนการทำงาน",
    keywords: ["Logic", "Framework", "System", "Process"],
  },
  {
    name: "CLARITY",
    gloss: "ถอดรหัสความซับซ้อน",
    body: "หน้าที่ของแบรนด์คือเปลี่ยนสิ่งที่ยากให้คนเข้าใจและนำไปใช้ได้ — มองเห็นชัดว่าอะไรคือสิ่งที่ควรทำต่อ",
    keywords: ["Knowledge", "Focus", "Judgement", "Confidence"],
  },
  {
    name: "INTELLIGENCE",
    gloss: "พลังที่กำลังเคลื่อนไหว",
    body: "ไม่ใช่แค่ความฉลาดของเครื่องจักร แต่คือความสามารถใหม่ที่เกิดขึ้นเมื่อมนุษย์ใช้เครื่องจักรได้อย่างถูกต้อง",
    keywords: ["Transformation", "Connection", "Human Potential"],
    accent: true,
  },
];

export function Concept() {
  return (
    <section className="bg-gradient-to-b from-aurora-200/[0.03] to-transparent py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="font-display text-[clamp(1.8rem,1.2rem+2.4vw,3.1rem)] font-semibold leading-[1.12] tracking-[-0.035em] text-balance">
              <span className="block">
                <span className="text-white/40">BLACK</span> <span className="text-white">STRUCTURE.</span>
              </span>
              <span className="block">
                <span className="text-white/40">WHITE</span> <span className="text-white">CLARITY.</span>
              </span>
              <span className="block aurora-text">AURORA INTELLIGENCE.</span>
            </h2>
            <p className="mt-5 leading-relaxed text-white/55">
              DeCODE อยู่ระหว่างความคิดสร้างสรรค์กับระบบ — เปลี่ยนความคิดให้เป็นระบบ
              และเปลี่ยนเทคโนโลยีให้เป็นความสามารถทางธุรกิจ
            </p>
          </div>
        </Reveal>

        <RevealGroup className="grid gap-4 md:grid-cols-3">
          {FORCES.map((f) => (
            <RevealItem key={f.name}>
              <div
                className={`flex h-full flex-col rounded-[20px] p-8 ${
                  f.accent ? "bg-aurora-200/[0.07]" : "bg-white/[0.04]"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      f.accent
                        ? "bg-aurora-200 shadow-[0_0_8px_2px_rgba(45,212,191,0.6)]"
                        : "bg-white/40"
                    }`}
                  />
                  <h3
                    className={`font-grotesk text-sm font-semibold uppercase tracking-[0.14em] ${
                      f.accent ? "aurora-text" : "text-white"
                    }`}
                  >
                    {f.name}
                  </h3>
                </div>
                <p className="mt-4 text-base font-semibold tracking-tight text-white">{f.gloss}</p>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-white/55">{f.body}</p>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {f.keywords.map((k) => (
                    <span
                      key={k}
                      className="rounded-full bg-white/[0.05] px-2.5 py-1 font-grotesk text-[0.7rem] tracking-wide text-white/50"
                    >
                      {k}
                    </span>
                  ))}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
