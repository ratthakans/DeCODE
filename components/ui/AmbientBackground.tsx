/**
 * Pure black canvas with the barest whisper of teal depth — no grain, no
 * parading orbs. Motion and color are spent in the Hero's aurora; every
 * other page stays quiet so that moment reads as the exception, not the rule.
 */
export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden bg-black">
      <div className="absolute inset-x-0 top-0 h-[60vh] bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(18,165,148,0.08),transparent_70%)]" />
    </div>
  );
}
