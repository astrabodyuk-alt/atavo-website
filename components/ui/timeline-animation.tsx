"use client";

import { motion, type Variants } from "framer-motion";
import type { ElementType, RefObject } from "react";

interface TimelineContentProps {
  children: React.ReactNode;
  animationNum?: number;
  /** kept for API compatibility — not used in this implementation */
  timelineRef?: RefObject<HTMLElement | null>;
  customVariants?: Variants;
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: unknown;
}

/**
 * Lightweight scroll-triggered fade/blur-in wrapper.
 * Replaces the original timeline-based implementation with
 * framer-motion whileInView so no scroll position tracking is needed.
 */
export function TimelineContent({
  children,
  animationNum = 0,
  customVariants,
  className,
  style,
}: TimelineContentProps) {
  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: -20, filter: "blur(10px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  };

  return (
    <motion.div
      className={className}
      style={style}
      custom={animationNum}
      variants={customVariants ?? defaultVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}
