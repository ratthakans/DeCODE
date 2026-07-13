import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";

const POINTS = [
  {
    title: "ลงมือทำจริง",
    body: "ทุกคอร์สจบด้วย Capstone เอางานจริงของคุณมาทำในคลาส เดินออกพร้อมระบบที่รันต่อได้",
    icon: "M4.5 12.75l6 6 9-13.5",
  },
  {
    title: "ไม่ต้องมีพื้นฐาน",
    body: "สอนวิธี ‘สั่งงาน’ AI ด้วยภาษาคน เจ้าของร้าน คนทำงาน ผู้บริหาร เรียนได้หมด",
    icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0",
  },
  {
    title: "ได้ระบบกลับบ้าน",
    body: "ไม่ใช่แค่สไลด์ แต่ได้ Workflow และคลัง Prompt ที่ก๊อปไปใช้กับธุรกิจได้ทันที",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

export function Concept() {
  return (
    <section className="border-y border-white/10 bg-gradient-to-b from-aurora-200/[0.03] to-transparent py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="font-grotesk text-xs font-semibold uppercase tracking-[0.12em] aurora-text">
              แนวคิด DeCODE
            </span>
            <h2 className="mt-3.5 font-display text-[clamp(1.9rem,1.3rem+2.2vw,3rem)] font-bold leading-tight tracking-[-0.03em] text-white text-balance">
              เราไม่ได้สอนให้คุณ<span className="aurora-text">รู้จัก</span> AI
              <br />
              เราสอนให้คุณ<span className="aurora-text">สั่งงานมันเป็น</span>
            </h2>
          </div>
        </Reveal>

        <RevealGroup className="grid gap-4 md:grid-cols-3">
          {POINTS.map((p) => (
            <RevealItem key={p.title}>
              <div className="h-full rounded-[18px] border border-white/10 bg-ink-100 p-8">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-aurora-200/10">
                  <svg className="h-5 w-5 stroke-aurora-200" fill="none" viewBox="0 0 24 24" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={p.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold tracking-tight text-white">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/55">{p.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
