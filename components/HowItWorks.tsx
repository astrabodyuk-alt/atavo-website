"use client";

import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start with a deep dive into your business, goals, and competitors. Understanding your vision is the foundation of everything we build.",
    icon: "🔍",
    highlights: ["Discovery call", "Competitor research", "Strategy brief"],
  },
  {
    number: "02",
    title: "Build",
    description:
      "Our team designs and develops your solution with precision. You're kept in the loop with progress updates and approval checkpoints.",
    icon: "🛠️",
    highlights: ["Custom design", "Development sprint", "Review & feedback"],
  },
  {
    number: "03",
    title: "Launch",
    description:
      "We go live with confidence. Post-launch, we monitor performance, handle the technical side, and make sure everything runs perfectly.",
    icon: "🚀",
    highlights: ["Go live", "Performance monitoring", "Ongoing support"],
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2283FF]/10 border border-[#2283FF]/30 mb-4">
            <span className="text-[#2283FF] text-sm font-medium">How It Works</span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Simple. Fast.
            <br />
            <span style={{
              background: "linear-gradient(135deg, #FFFFFF 0%, #2283FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Effective.</span>
          </h2>
        </AnimatedSection>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.15}>
              <div className="relative p-8 rounded-2xl bg-[#1c1c1c] border border-[#282828] hover:border-[#2283FF]/40 transition-all duration-300 hover:-translate-y-2 group h-full">
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-3 w-6 h-0.5 bg-[#2283FF]/30 z-10" />
                )}

                {/* Number */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-5xl font-extrabold text-[#2283FF]/20 group-hover:text-[#2283FF]/40 transition-colors duration-300"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-[#2283FF]/10 border border-[#2283FF]/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>

                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {step.title}
                </h3>
                <p className="text-[#A0A0A0] text-sm leading-relaxed mb-6">
                  {step.description}
                </p>

                <ul className="space-y-2">
                  {step.highlights.map((h, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-[#525252] group-hover:text-[#A0A0A0] transition-colors duration-300">
                      <div className="w-1 h-1 rounded-full bg-[#2283FF]" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-gradient-to-r from-transparent via-[#2283FF]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA banner */}
        <AnimatedSection delay={0.4} className="mt-16">
          <div className="relative overflow-hidden rounded-2xl bg-[#2283FF] p-8 md:p-12 text-center">
            <div className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at top, rgba(255,255,255,0.1) 0%, transparent 60%)",
              }}
            />
            <p className="text-white/70 text-sm mb-2">Ready to start?</p>
            <h3
              className="text-2xl md:text-3xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Your website can be live in 7 days.
            </h3>
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 bg-white text-[#2283FF] font-semibold rounded-full text-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Start the journey →
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
