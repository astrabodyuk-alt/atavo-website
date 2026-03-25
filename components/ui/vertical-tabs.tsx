"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const SERVICES = [
  {
    id: "01",
    title: "Discover",
    description:
      "We start with a deep dive into your business, goals, and competitors. Understanding your vision is the foundation of everything we build together.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Build",
    description:
      "Our team designs and develops your solution with precision. You're kept in the loop with progress updates and approval checkpoints every step of the way.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Launch",
    description:
      "We go live with confidence. Post-launch, we monitor performance, handle the technical side, and make sure everything runs perfectly from day one.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
];

const AUTO_PLAY_DURATION = 5000;

export function VerticalTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % SERVICES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
  }, []);

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, AUTO_PLAY_DURATION);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused, handleNext]);

  const variants = {
    enter: (dir: number) => ({
      y: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      y: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <section className="w-full bg-[#111111] py-8 md:py-16 lg:py-24">
      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 pt-4">
            <div className="space-y-1 mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2283FF]/10 border border-[#2283FF]/30 mb-3">
                <span className="text-[#2283FF] text-sm font-medium">How It Works</span>
              </div>
              <h2
                className="tracking-tight text-balance text-xl font-bold md:text-2xl lg:text-3xl text-white"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Simple. Fast.{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #FFFFFF 0%, #2283FF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Effective.
                </span>
              </h2>
              <span className="text-[10px] font-medium text-[#525252] uppercase tracking-[0.3em] block ml-0.5">
                (3 STEPS TO GO LIVE)
              </span>
            </div>

            <div className="flex flex-col space-y-0">
              {SERVICES.map((service, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={service.id}
                    onClick={() => handleTabClick(index)}
                    className={cn(
                      "group relative flex items-start gap-4 py-6 md:py-8 text-left transition-all duration-500 border-t border-[#1c1c1c] first:border-0",
                      isActive ? "text-white" : "text-[#525252] hover:text-white"
                    )}
                  >
                    {/* Progress bar */}
                    <div className="absolute left-[-16px] md:left-[-24px] top-0 bottom-0 w-[2px] bg-[#1c1c1c]">
                      {isActive && (
                        <motion.div
                          key={`progress-${index}-${isPaused}`}
                          className="absolute top-0 left-0 w-full bg-[#2283FF] origin-top"
                          initial={{ height: "0%" }}
                          animate={isPaused ? { height: "0%" } : { height: "100%" }}
                          transition={{
                            duration: AUTO_PLAY_DURATION / 1000,
                            ease: "linear",
                          }}
                        />
                      )}
                    </div>

                    <span className="text-[9px] md:text-[10px] font-medium mt-1 tabular-nums text-[#2283FF]/60">
                      /{service.id}
                    </span>

                    <div className="flex flex-col gap-2 flex-1">
                      <span
                        className={cn(
                          "text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight transition-colors duration-500",
                          isActive ? "text-white" : "text-[#333333]"
                        )}
                        style={{ fontFamily: "var(--font-syne)" }}
                      >
                        {service.title}
                      </span>

                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="text-[#A0A0A0] text-sm md:text-base font-normal leading-relaxed max-w-sm pb-2">
                              {service.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <button
                onClick={() => {
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-7 py-3.5 bg-[#2283FF] hover:bg-[#4fa8ff] text-white font-semibold rounded-full text-sm transition-all duration-200 hover:shadow-lg hover:shadow-[#2283FF]/25 hover:-translate-y-0.5"
              >
                Start the journey →
              </button>
            </div>
          </div>

          {/* Right Column — Image */}
          <div className="lg:col-span-7 flex flex-col justify-end h-full order-1 lg:order-2">
            <div
              className="relative group/gallery"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative aspect-4/5 md:aspect-4/3 lg:aspect-16/11 rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-[#1c1c1c] border border-[#282828]">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      y: { type: "spring", stiffness: 260, damping: 32 },
                      opacity: { duration: 0.4 },
                    }}
                    className="absolute inset-0 w-full h-full cursor-pointer"
                    onClick={handleNext}
                  >
                    <img
                      src={SERVICES[activeIndex].image}
                      alt={SERVICES[activeIndex].title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 block"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 via-transparent to-transparent" />

                    {/* Step label on image */}
                    <div className="absolute top-6 left-6 flex items-center gap-2">
                      <div className="px-3 py-1.5 rounded-full bg-[#2283FF]/90 backdrop-blur-sm text-white text-xs font-bold"
                        style={{ fontFamily: "var(--font-syne)" }}>
                        Step {SERVICES[activeIndex].id}
                      </div>
                      <div className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-semibold"
                        style={{ fontFamily: "var(--font-syne)" }}>
                        {SERVICES[activeIndex].title}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Nav buttons */}
                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 flex gap-2 md:gap-3 z-20">
                  <button
                    onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#111111]/80 backdrop-blur-md border border-[#333333] flex items-center justify-center text-white hover:bg-[#111111] hover:border-[#2283FF]/50 transition-all active:scale-90"
                    aria-label="Previous"
                  >
                    <HugeiconsIcon icon={ArrowLeft01Icon} size={18} />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleNext(); }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#2283FF]/90 backdrop-blur-md border border-[#2283FF] flex items-center justify-center text-white hover:bg-[#4fa8ff] transition-all active:scale-90"
                    aria-label="Next"
                  >
                    <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default VerticalTabs;
