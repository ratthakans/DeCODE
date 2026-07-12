/** DeCODE wordmark — monospace developer lockup; the "CO" carries the mint,
 *  a blinking cursor gives it a terminal feel. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-mono font-medium tracking-[-0.04em] text-white ${className}`}
    >
      De<span className="text-mint">CO</span>DE
      <span className="animate-cursor text-aurora-200">_</span>
    </span>
  );
}
