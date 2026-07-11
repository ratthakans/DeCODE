import Link from "next/link";
import { nav, site } from "@/lib/site";
import { lineLink } from "@/lib/line";
import { Wordmark } from "./ui/Wordmark";
import { Button, LineIcon } from "./ui/Button";

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-aurora-300/10 bg-ink-100">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Wordmark className="text-2xl" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              {site.tagline} — เรียน onsite ลงมือทำจริง ได้ระบบที่เอาไปใช้กับธุรกิจต่อได้ทันที
            </p>
            <div className="mt-6">
              <Button href={lineLink()} external variant="lime" size="sm">
                <LineIcon /> ทักไลน์ {site.lineOaId}
              </Button>
            </div>
          </div>

          <div>
            <h4 className="eyebrow mb-4">เมนู</h4>
            <ul className="space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-sm text-white/60 transition-colors hover:text-accent"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-4">ติดต่อ</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>{site.address}</li>
              <li>{site.hours}</li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-accent">
                  {site.email}
                </a>
              </li>
              <li>{site.phone}</li>
            </ul>
            <div className="mt-4 flex gap-3">
              {Object.entries(site.socials).map(([k, v]) => (
                <a
                  key={k}
                  href={v}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-aurora-300/15 text-xs uppercase text-white/60 transition-colors hover:border-mint/50 hover:text-mint"
                >
                  {k[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-aurora-300/8 pt-6 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {site.name}. สงวนลิขสิทธิ์.</p>
          <p className="font-mono tracking-wide">
            สอน AI แบบลงมือทำ · Claude · Gemini · ChatGPT · Coding
          </p>
        </div>
      </div>
    </footer>
  );
}
