import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const QUESTIONS = [
  {
    no: "01",
    q: "What will you understand?",
    a: "ผู้เรียนจะเข้าใจแนวคิดและระบบอะไร ไม่ใช่แค่จำเครื่องมือ",
  },
  {
    no: "02",
    q: "What will you build?",
    a: "ผู้เรียนจะสร้างอะไรระหว่างเรียน — ทุกคอร์สจบด้วยระบบที่จับต้องได้",
  },
  {
    no: "03",
    q: "What will you use on Monday?",
    a: "ผู้เรียนนำสิ่งใดกลับไปใช้กับงานหรือธุรกิจได้ทันทีในวันจันทร์",
  },
];

export function CoursePhilosophy() {
  return (
    <section className="container-x py-24 md:py-32">
      <Reveal>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-display text-[clamp(1.9rem,1.3rem+2.2vw,3rem)] font-semibold tracking-[-0.03em] text-white">
            ทุกคอร์สต้องตอบ 3 ข้อนี้ให้ได้
          </h2>
        </div>
      </Reveal>

      <RevealGroup className="grid gap-4 md:grid-cols-3">
        {QUESTIONS.map((item) => (
          <RevealItem key={item.no}>
            <div className="flex h-full flex-col rounded-[20px] bg-white/[0.04] p-8">
              <span className="font-grotesk text-3xl font-semibold tabular-nums aurora-text">
                {item.no}
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">{item.q}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">{item.a}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal delay={0.1}>
        <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-white/45">
          DeCODE ไม่ได้วัดคุณค่าของหลักสูตรจากจำนวน Tool หรือ Prompt ที่สอน
          แต่วัดจากความสามารถใหม่ที่ผู้เรียนสร้างขึ้น และระบบที่ยังทำงานต่อได้หลังออกจากห้องเรียน
        </p>
      </Reveal>

      <Reveal delay={0.16}>
        <div className="mt-16 rounded-[2rem] bg-white/[0.04] px-6 py-16 text-center">
          <p className="font-display text-[clamp(1.8rem,1.2rem+2.6vw,3.2rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-white">
            Don&apos;t leave with slides.
            <br />
            Leave with a <span className="aurora-text">system</span>.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
