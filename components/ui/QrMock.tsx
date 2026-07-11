/** Decorative QR placeholder (mockup) — deterministic pattern, no data. */
export function QrMock({ size = 132 }: { size?: number }) {
  const cells = 11;
  const cell = size / cells;
  // deterministic pseudo-pattern
  const filled = (r: number, c: number) => {
    const corner =
      (r < 3 && c < 3) || (r < 3 && c > cells - 4) || (r > cells - 4 && c < 3);
    if (corner) return (r === 0 || r === 2 || c === 0 || c === 2 || (r === 1 && c === 1));
    return (r * 7 + c * 3 + ((r * c) % 5)) % 2 === 0;
  };

  return (
    <div
      className="rounded-2xl bg-white p-3"
      style={{ width: size + 24, height: size + 24 }}
      aria-label="Line QR (ตัวอย่าง)"
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {Array.from({ length: cells }).map((_, r) =>
          Array.from({ length: cells }).map((_, c) =>
            filled(r, c) ? (
              <rect
                key={`${r}-${c}`}
                x={c * cell + 1}
                y={r * cell + 1}
                width={cell - 2}
                height={cell - 2}
                rx={1.5}
                fill="#05080a"
              />
            ) : null
          )
        )}
      </svg>
    </div>
  );
}
