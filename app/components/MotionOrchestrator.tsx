"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const REVEAL_SELECTOR = "[data-reveal]";
const PARALLAX_SELECTOR = "[data-parallax]";

export function MotionOrchestrator() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const parallaxTargets = new Set<HTMLElement>();

    const reveal = (element: HTMLElement) => {
      if (element.dataset.delay) element.style.setProperty("--reveal-delay", `${Number(element.dataset.delay) || 0}ms`);
      if (element.dataset.reveal === "stagger") {
        [...element.children].forEach((child, index) => {
          (child as HTMLElement).style.setProperty("--reveal-delay", `${Math.min(index * 60, 360)}ms`);
        });
      }
      element.classList.add("is-visible");
    };

    if (reducedMotion.matches) {
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach(reveal);
      root.dataset.motion = "reduced";
      return;
    }

    root.dataset.motion = "ready";
    body.classList.add("motion-enabled");

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        reveal(entry.target as HTMLElement);
        revealObserver.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -9%", threshold: 0.08 });

    const parallaxObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement;
        if (entry.isIntersecting) parallaxTargets.add(element);
        else parallaxTargets.delete(element);
      });
    }, { rootMargin: "18% 0px" });

    const observeElement = (element: HTMLElement) => {
      if (element.matches(REVEAL_SELECTOR) && !element.classList.contains("is-visible")) revealObserver.observe(element);
      if (element.matches(PARALLAX_SELECTOR)) parallaxObserver.observe(element);
      element.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach((target) => {
        if (!target.classList.contains("is-visible")) revealObserver.observe(target);
      });
      element.querySelectorAll<HTMLElement>(PARALLAX_SELECTOR).forEach((target) => parallaxObserver.observe(target));
    };

    document.querySelectorAll<HTMLElement>(`${REVEAL_SELECTOR}, ${PARALLAX_SELECTOR}`).forEach(observeElement);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => mutation.addedNodes.forEach((node) => {
        if (node instanceof HTMLElement) observeElement(node);
      }));
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    const render = () => {
      const viewportHeight = Math.max(window.innerHeight, 1);
      const scrollRange = Math.max(document.documentElement.scrollHeight - viewportHeight, 1);
      const progress = Math.min(Math.max(window.scrollY / scrollRange, 0), 1);
      root.style.setProperty("--scroll-progress", progress.toFixed(4));
      body.classList.toggle("is-scrolled", window.scrollY > 28);

      parallaxTargets.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const position = (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
        const strength = Number(element.dataset.parallax ?? 18);
        const offset = Math.max(-strength, Math.min(strength, position * -strength));
        element.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
      });
      frame = window.requestAnimationFrame(render);
    };

    frame = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(frame);
      revealObserver.disconnect();
      parallaxObserver.disconnect();
      mutationObserver.disconnect();
      parallaxTargets.clear();
      body.classList.remove("motion-enabled", "is-scrolled");
      delete root.dataset.motion;
    };
  }, [pathname]);

  return null;
}
