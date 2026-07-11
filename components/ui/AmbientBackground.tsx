"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function AmbientBackground() {
  const { scrollY } = useScroll();
  // Move the orb slightly slower than the scroll to create parallax
  const y = useTransform(scrollY, [0, 2000], [0, 800]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden bg-black">
      {/* Base noise layer */}
      <div className="absolute inset-0 bg-grainy opacity-30 mix-blend-overlay" />
      
      {/* Top right orb */}
      <motion.div
        style={{ y }}
        className="absolute -top-[20%] -right-[10%] h-[800px] w-[800px] rounded-full bg-emerald-500/10 blur-[120px]"
      />
      
      {/* Center left orb */}
      <motion.div
        style={{ y: useTransform(scrollY, [0, 3000], [0, -600]) }}
        className="absolute top-[40%] -left-[20%] h-[1000px] w-[1000px] rounded-full bg-teal-500/10 blur-[120px]"
      />
    </div>
  );
}
