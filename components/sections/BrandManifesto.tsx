import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";

const STATEMENTS = [
  { plain: "We don’t teach AI.", accent: "We teach business leverage." },
  { plain: "Intelligence becomes valuable", accent: "when it becomes usable." },
  { plain: "Turn complexity", accent: "into capability." },
];

export function BrandManifesto() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,rgba(45,212,191,0.5),transparent)" }}
        aria-hidden
      />
      <div className="container-x">
        <Reveal>
          <span className="font-grotesk text-xs font-semibold uppercase tracking-[0.16em] aurora-text">
            ความเชื่อของ DeCODE · Brand Belief
          </span>
        </Reveal>

        <RevealGroup className="mt-10 flex flex-col gap-5 border-l border-white/10 pl-6 md:pl-8">
          {STATEMENTS.map((s) => (
            <RevealItem key={s.accent}>
              <p className="font-display text-[clamp(1.35rem,1rem+1.6vw,2.1rem)] font-semibold leading-snug tracking-[-0.025em]">
                <span className="text-white/45">{s.plain} </span>
                <span className="text-white">{s.accent}</span>
              </p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <p className="mt-14 max-w-2xl leading-relaxed text-white/50">
            อนาคตไม่ได้เป็นของคนที่รู้จักเครื่องมือมากที่สุด แต่เป็นของคนที่เข้าใจความเปลี่ยนแปลง
            สร้างระบบที่เหมาะกับตนเอง และเปลี่ยนความสามารถของ AI ให้กลายเป็นแรงทวีคูณ
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-16 border-t border-white/10 pt-14">
            <p className="font-display text-[clamp(2rem,1.3rem+3.2vw,4rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-white">
              Structure the chaos.
              <br />
              <span className="aurora-text">DeCODE the possible.</span>
            </p>
            <p className="mt-6 font-grotesk text-sm uppercase tracking-[0.16em] text-white/40">
              Close the gap · Build beyond human capacity
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
