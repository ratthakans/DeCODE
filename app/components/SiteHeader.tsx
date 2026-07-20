"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navItems = [
  ["/programs", "Programs"],
  ["/institute", "Institute"],
  ["/organizations", "Organizations"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    if (!open) return;

    const scrollPosition = window.scrollY;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousHtmlScrollBehavior = document.documentElement.style.scrollBehavior;
    const previousBodyOverflow = document.body.style.overflow;
    const previousBodyTouchAction = document.body.style.touchAction;
    const previousBodyPosition = document.body.style.position;
    const previousBodyTop = document.body.style.top;
    const previousBodyWidth = document.body.style.width;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.touchAction = previousBodyTouchAction;
      document.body.style.position = previousBodyPosition;
      document.body.style.top = previousBodyTop;
      document.body.style.width = previousBodyWidth;
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, scrollPosition);
      document.documentElement.style.scrollBehavior = previousHtmlScrollBehavior;
    };
  }, [open]);

  return (
    <>
      <header className="site-header glass-surface">
        <span className="header-progress" aria-hidden="true" />
        <Link className="brand" href="/" aria-label="DeCODE หน้าแรก">
          <span className="brand-word" aria-hidden="true"><span className="brand-de">De</span><span className="brand-code">CODE</span><i /></span>
          <span className="brand-caption mono">BUSINESS AI INSTITUTE</span>
        </Link>
        <nav aria-label="เมนูหลัก">
          {navItems.map(([href, label]) => <Link className={isActive(href) ? "is-active" : ""} href={href} key={href}>{label}</Link>)}
        </nav>
        <Link className={`header-contact ${pathname === "/contact" ? "is-active" : ""}`} href="/contact">ปรึกษาเส้นทางเรียน <span className="header-arrow" aria-hidden="true">↗</span></Link>
        <button ref={menuButtonRef} className="menu-toggle" type="button" aria-label={open ? "ปิดเมนู" : "เปิดเมนู"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
          <span /> <span />
        </button>
      </header>
      <div id="mobile-navigation" className={`mobile-menu ${open ? "is-open" : ""}`} role="dialog" aria-modal="true" aria-label="เมนูหลัก" aria-hidden={!open}>
        <nav aria-label="เมนูมือถือ">
          {navItems.map(([href, label]) => <Link className={isActive(href) ? "is-active" : ""} href={href} key={href} onClick={() => setOpen(false)}>{label}</Link>)}
          <Link className={pathname === "/contact" ? "is-active" : ""} href="/contact" onClick={() => setOpen(false)}>ปรึกษาเส้นทางเรียน</Link>
        </nav>
        <p className="mono">BUSINESS AI INSTITUTE<br />BANGKOK · THAILAND</p>
      </div>
    </>
  );
}
