"use client";

import React, { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

// --- ATAVO real projects ---
const accordionItems = [
  {
    id: 1,
    title: "AZ Audio Optique",
    label: "Web Design",
    description: "Full brand website for an audio & optical retailer in France.",
    location: "Plaisir, France",
    imageUrl: "/images/88_1x_shots_so.png",
  },
  {
    id: 2,
    title: "AstraBody Studio",
    label: "Web Design",
    description: "Conversion-focused studio website for a fitness brand in Southampton.",
    location: "Southampton, England",
    imageUrl: "/images/777_1x_shots_so.png",
  },
  {
    id: 3,
    title: "AstraBody Loyalty App",
    label: "Mobile App",
    description: "Custom iOS & Android loyalty app with rewards and in-app upgrades.",
    location: "",
    imageUrl: "/images/64_1x_shots_so.png",
  },
];

// --- Types ---
interface AccordionItemData {
  id: number;
  title: string;
  label: string;
  description: string;
  location: string;
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
        {item.location && (
          <p
            className={`text-white/40 text-xs mt-0.5 transition-all duration-300 ${
              isActive ? "opacity-100 max-h-6" : "opacity-0 max-h-0"
            }`}
          >
            📍 {item.location}
          </p>
        )}
      </div>
    </div>
  );
};

// --- Main export ---
export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="projects" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-14">

          {/* Left — text content */}
          <div className="w-full lg:w-[42%]">
            <AnimatedSection direction="left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2283FF]/10 border border-[#2283FF]/30 mb-4">
                <span className="text-[#2283FF] text-sm font-medium">Our Work</span>
              </div>

              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Projects that
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #FFFFFF 0%, #2283FF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  drive results
                </span>
              </h2>

              <p className="text-[#A0A0A0] text-base leading-relaxed mb-8 max-w-md">
                Real websites and apps built for real businesses. Every project
                is crafted to convert visitors into customers and keep them
                coming back.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { stat: "7-day", label: "Average delivery" },
                  { stat: "100%", label: "Client satisfaction" },
                  { stat: "40%+", label: "Avg. retention lift" },
                  { stat: "3 countries", label: "Clients served" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-[#1c1c1c] border border-[#282828]"
                  >
                    <p
                      className="text-[#2283FF] text-sm font-bold"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {item.stat}
                    </p>
                    <p className="text-[#A0A0A0] text-xs mt-0.5">{item.label}</p>
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
                {accordionItems[activeIndex].location && (
                  <p className="text-[#525252] text-xs mt-0.5">
                    📍 {accordionItems[activeIndex].location}
                  </p>
                )}
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
