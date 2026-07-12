/** DeCODE wordmark — the "CO" carries the signature mint as a brand tell. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display text-xl font-extrabold tracking-tight text-white ${className}`}
    >
      De<span className="text-mint">CO</span>DE
      <span className="ml-0.5 inline-block h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-accent align-middle" />
    </span>
  );
}
