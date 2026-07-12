"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function AmbientBackground() {
  const { scrollY } = useScroll();
  // Move the orb slightly slower than the scroll to create parallax
  const y1 = useTransform(scrollY, [0, 2000], [0, 800]);
  const y2 = useTransform(scrollY, [0, 3000], [0, -600]);
  const y3 = useTransform(scrollY, [0, 2000], [0, -400]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden bg-aurora-900">
      {/* Base noise layer */}
      <div className="absolute inset-0 bg-grainy opacity-40 mix-blend-overlay" />
      
      {/* Top right orb - Ice Blue */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-[20%] -right-[10%] h-[800px] w-[800px] rounded-full bg-aurora-50/25 blur-[120px]"
      />
      
      {/* Center left orb - Teal */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[30%] -left-[20%] h-[1000px] w-[1000px] rounded-full bg-aurora-300/25 blur-[140px]"
      />

      {/* Bottom right orb - Dark Teal */}
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-[-10%] right-[10%] h-[600px] w-[600px] rounded-full bg-aurora-500/30 blur-[120px]"
      />
      
      {/* Center ambient glow - Deep Forest Green */}
      <div
        className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 h-[800px] w-[1200px] rounded-[100%] bg-aurora-600/30 blur-[150px]"
      />
    </div>
  );
}
