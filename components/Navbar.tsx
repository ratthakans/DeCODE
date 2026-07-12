"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav } from "@/lib/site";
import { Button, LineIcon } from "./ui/Button";
import { lineLink } from "@/lib/line";
import { Wordmark } from "./ui/Wordmark";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-aurora-300/10 bg-ink/60 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between md:h-20">
          <Link href="/" aria-label="DeCODE หน้าแรก" className="group">
            <Wordmark />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                    active ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-aurora-300/10"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Button href={lineLink()} external variant="aurora" size="sm">
              <LineIcon /> ทักไลน์
            </Button>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-aurora-300/15 bg-aurora-300/5 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="เมนู"
            aria-expanded={open}
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`h-0.5 w-5 bg-white transition-transform ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-white transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-white transition-transform ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="border-b border-aurora-300/10 bg-ink/90 backdrop-blur-2xl md:hidden"
          >
            <nav className="container-x flex flex-col py-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-aurora-300/8 py-3.5 text-lg text-white/80"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4">
                <Button href={lineLink()} external variant="aurora" size="md" className="w-full">
                  <LineIcon /> ทักไลน์ สอบถามคอร์ส
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
