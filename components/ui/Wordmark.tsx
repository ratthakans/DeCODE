/** DeCODE wordmark — Space Grotesk, the "CO" carries the aurora gradient. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-grotesk font-bold tracking-[-0.03em] text-white ${className}`}>
      De<span className="aurora-text">CO</span>DE
    </span>
  );
}
