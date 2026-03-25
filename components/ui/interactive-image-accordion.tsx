"use client";

import React, { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

// --- ATAVO service data ---
const accordionItems = [
  {
    id: 1,
    title: "Modern Websites",
    label: "Websites",
    description: "Custom design tailored to your brand",
    imageUrl:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "SEO & Rankings",
    label: "SEO",
    description: "Get found on Google by your ideal customers",
    imageUrl:
      "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=2074&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Loyalty Apps",
    label: "Apps",
    description: "Branded iOS & Android apps that retain customers",
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Automation",
    label: "Automation",
    description: "Revenue-generating systems that work 24/7",
    imageUrl:
      "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "E-Commerce",
    label: "E-Commerce",
    description: "Full online stores with payment & inventory",
    imageUrl:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
  },
];

// --- Types ---
interface AccordionItemData {
  id: number;
  title: string;
  label: string;
  description: string;
  imageUrl: string;
}

interface AccordionItemProps {
  item: AccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
}

// --- Accordion Item ---
const AccordionItem = ({ item, isActive, onMouseEnter }: AccordionItemProps) => {
  return (
    <div
      className={`
        relative h-[460px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out flex-shrink-0
        ${isActive ? "w-[340px]" : "w-[60px]"}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
        style={{ transform: isActive ? "scale(1.03)" : "scale(1)" }}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src =
            "https://placehold.co/340x460/141414/2D6EF5?text=ATAVO";
        }}
      />

      {/* Gradient overlay — always visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

      {/* Active: blue accent line at top */}
      <div
        className={`absolute top-0 left-0 right-0 h-0.5 bg-[#2283FF] transition-opacity duration-500 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Active: label badge */}
      <div
        className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-[#2283FF]/90 text-white transition-all duration-400 ${
          isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
        style={{ fontFamily: "var(--font-syne)" }}
      >
        {item.label}
      </div>

      {/* Caption — horizontal when active, vertical when collapsed */}
      <div
        className={`absolute transition-all duration-500 ease-in-out ${
          isActive
            ? "bottom-6 left-5 right-5 rotate-0"
            : "bottom-28 left-1/2 -translate-x-1/2 rotate-90 whitespace-nowrap"
        }`}
      >
        <p
          className="text-white font-semibold text-base leading-tight"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {item.title}
        </p>
        <p
          className={`text-white/60 text-xs mt-1 leading-snug transition-all duration-300 ${
            isActive ? "opacity-100 max-h-10" : "opacity-0 max-h-0"
          }`}
        >
          {item.description}
        </p>
      </div>
    </div>
  );
};

// --- Main export ---
export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-14">

          {/* Left — text content */}
          <div className="w-full lg:w-[42%]">
            <AnimatedSection direction="left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2283FF]/10 border border-[#2283FF]/30 mb-4">
                <span className="text-[#2283FF] text-sm font-medium">What We Do</span>
              </div>

              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Your Business
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #FFFFFF 0%, #2283FF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Journey
                </span>
              </h2>

              <p className="text-[#A0A0A0] text-base leading-relaxed mb-8 max-w-md">
                We elevate your online presence and add automation. From a
                stunning website to a full revenue-generating system — we
                build everything your business needs to win online.
              </p>

              {/* Pain points */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { problem: "No website", impact: "Losing clients" },
                  { problem: "Outdated website", impact: "Invisible online" },
                  { problem: "No SEO", impact: "Not found on Google" },
                  { problem: "No system", impact: "No repeat customers" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-[#1c1c1c] border border-[#282828]"
                  >
                    <p
                      className="text-white text-xs font-semibold"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {item.problem}
                    </p>
                    <p className="text-[#2283FF] text-xs mt-0.5">{item.impact}</p>
                  </div>
                ))}
              </div>

              {/* Active service details */}
              <div className="p-5 rounded-2xl bg-[#1c1c1c] border border-[#2283FF]/30">
                <p className="text-xs text-[#525252] mb-1 uppercase tracking-wider">
                  Currently viewing
                </p>
                <p
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {accordionItems[activeIndex].title}
                </p>
                <p className="text-[#A0A0A0] text-sm mt-1">
                  {accordionItems[activeIndex].description}
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right — accordion */}
          <AnimatedSection direction="right" delay={0.1} className="w-full lg:w-[55%]">
            <div className="flex flex-row items-center justify-center gap-3 overflow-x-auto pb-2">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => setActiveIndex(index)}
                />
              ))}
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-5">
              {accordionItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-6 h-1.5 bg-[#2283FF]"
                      : "w-1.5 h-1.5 bg-[#333333] hover:bg-[#525252]"
                  }`}
                  aria-label={`View ${accordionItems[i].label}`}
                />
              ))}
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
