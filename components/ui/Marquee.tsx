"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right";
}

export function Marquee({ children, speed = 40, direction = "left" }: MarqueeProps) {
  return (
    <div className="relative flex w-full overflow-hidden whitespace-nowrap bg-transparent py-4">
      {/* Gradient Mask for fading edges */}
      <div className="pointer-events-none absolute inset-0 z-10 w-full bg-gradient-to-r from-black via-transparent to-black" />
      
      <motion.div
        className="flex min-w-max items-center gap-16 pr-16"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {/* Double children for seamless loop */}
        <div className="flex gap-16">{children}</div>
        <div className="flex gap-16">{children}</div>
      </motion.div>
    </div>
  );
}
