/**
 * Aurora Borealis gradient field — layered CSS blobs producing an ethereal
 * northern-lights backdrop. GPU-cheap keyframe animation, no JS needed.
 * Server component (no interactivity) — animation is CSS keyframes.
 */
export function GradientField({
  className = "",
  intensity = 1,
}: {
  className?: string;
  intensity?: number;
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {/* base wash */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_-10%,rgba(72,168,154,0.2),transparent_55%)]" />

      {/* blob 1 — drifting aurora mint */}
      <div
        className="absolute left-[15%] top-[10%] h-[30vw] w-[30vw] rounded-full animate-gradient-drift blur-[90px]"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(181,242,219,0.25), transparent 60%)",
          opacity: 0.4 * intensity,
        }}
      />
      {/* blob 2 — deep aurora */}
      <div
        className="absolute right-[10%] top-[20%] h-[28vw] w-[28vw] rounded-full animate-gradient-drift-slow blur-[90px]"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, rgba(0,82,77,0.3), transparent 62%)",
          opacity: 0.4 * intensity,
        }}
      />
      {/* blob 3 — emerald depth */}
      <div
        className="absolute left-[38%] bottom-[5%] h-[25vw] w-[25vw] rounded-full animate-gradient-drift blur-[90px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(5,57,49,0.3), transparent 65%)",
          opacity: 0.3 * intensity,
        }}
      />

      {/* blob 4 — aurora curtain: thin wide horizontal band */}
      <div
        className="absolute left-[-20%] top-[15%] h-[15%] w-[140%] animate-aurora-wave blur-[60px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, rgba(181,242,219,0.08) 30%, rgba(72,168,154,0.12) 50%, rgba(181,242,219,0.08) 70%, transparent 95%)",
          opacity: intensity * 0.7,
        }}
      />

      {/* starfield */}
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 12% 28%, rgba(255,255,255,0.7), transparent)," +
            "radial-gradient(1px 1px at 37% 14%, rgba(255,255,255,0.5), transparent)," +
            "radial-gradient(1.2px 1.2px at 58% 42%, rgba(255,255,255,0.6), transparent)," +
            "radial-gradient(0.8px 0.8px at 73% 8%, rgba(255,255,255,0.4), transparent)," +
            "radial-gradient(1px 1px at 85% 55%, rgba(255,255,255,0.5), transparent)," +
            "radial-gradient(0.8px 0.8px at 22% 68%, rgba(255,255,255,0.3), transparent)," +
            "radial-gradient(1px 1px at 48% 82%, rgba(255,255,255,0.4), transparent)," +
            "radial-gradient(1.2px 1.2px at 92% 35%, rgba(255,255,255,0.45), transparent)," +
            "radial-gradient(0.8px 0.8px at 5% 90%, rgba(255,255,255,0.35), transparent)," +
            "radial-gradient(1px 1px at 65% 72%, rgba(255,255,255,0.4), transparent)",
          backgroundSize: "100% 100%",
        }}
      />

      {/* fine grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(120% 80% at 50% 0%, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(120% 80% at 50% 0%, black, transparent 75%)",
        }}
      />
    </div>
  );
}
