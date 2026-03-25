"use client";

import AnimatedSection from "./AnimatedSection";

const clients = [
  "Restaurants",
  "Barbershops",
  "Beauty Salons",
  "Architects",
  "Law Firms",
  "Real Estate",
  "Fitness Studios",
  "E-Commerce",
  "Healthcare",
  "Coaches",
  "Photographers",
  "Retail Stores",
];

export default function ClientsStrip() {
  const doubled = [...clients, ...clients];

  return (
    <section className="py-14 bg-[#111111] border-y border-[#202020] overflow-hidden">
      <AnimatedSection className="text-center mb-8">
        <p className="text-[#A0A0A0] text-sm tracking-widest uppercase">
          Trusted by businesses across the UK
        </p>
      </AnimatedSection>

      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #111111, transparent)" }}
        />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #111111, transparent)" }}
        />

        <div className="flex animate-scroll-left whitespace-nowrap">
          {doubled.map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-8 flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-[#2283FF]/50" />
              <span
                className="text-[#525252] text-sm font-medium tracking-wide hover:text-[#A0A0A0] transition-colors cursor-default"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
