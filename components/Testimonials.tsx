"use client";

import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote:
      "ATAVO delivered our website in under a week, and it immediately started ranking on Google. The SEO work they did has completely transformed our online visibility.",
    name: "Marcus T.",
    role: "Founder, LondonEats",
    avatar: "MT",
    color: "#2283FF",
    stars: 5,
  },
  {
    quote:
      "The loyalty app they built for our gym has been a game-changer. Member retention is up 40% and we're seeing real revenue from the in-app upgrades.",
    name: "Sarah K.",
    role: "Owner, FlowFit Gym",
    avatar: "SK",
    color: "#8B5CF6",
    stars: 5,
  },
  {
    quote:
      "From our first call, they understood exactly what we needed. The automated lead system pays for itself every month. Genuinely the best investment we made.",
    name: "James R.",
    role: "Director, NovaTech Solutions",
    avatar: "JR",
    color: "#10B981",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2283FF]/10 border border-[#2283FF]/30 mb-4">
            <span className="text-[#2283FF] text-sm font-medium">What People Say</span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Real results,
            <br />
            <span style={{
              background: "linear-gradient(135deg, #FFFFFF 0%, #2283FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>real businesses</span>
          </h2>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="h-full flex flex-col p-8 rounded-2xl bg-[#1c1c1c] border border-[#282828] hover:border-[#333333] hover:-translate-y-1 transition-all duration-300 group">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(t.stars)].map((_, j) => (
                    <span key={j} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>

                {/* Quote mark */}
                <div
                  className="text-5xl font-bold leading-none mb-4 -mt-2"
                  style={{ color: `${t.color}30`, fontFamily: "Georgia, serif" }}
                >
                  "
                </div>

                <p className="text-[#A0A0A0] text-sm leading-relaxed flex-1 -mt-4">
                  {t.quote}
                </p>

                {/* Author */}
                <div className="mt-8 flex items-center gap-4 pt-6 border-t border-[#1c1c1c]">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                    style={{ background: `${t.color}30`, border: `1px solid ${t.color}40` }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p
                      className="text-white text-sm font-semibold"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {t.name}
                    </p>
                    <p className="text-[#525252] text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Trust bar */}
        <AnimatedSection delay={0.3} className="mt-16 flex flex-wrap items-center justify-center gap-8 text-[#525252] text-sm">
          <div className="flex items-center gap-2">
            <span className="text-amber-400">★★★★★</span>
            <span>5.0 average rating</span>
          </div>
          <div className="w-px h-4 bg-[#333333] hidden md:block" />
          <div className="flex items-center gap-2">
            <span className="text-[#2283FF]">✓</span>
            <span>100+ UK businesses served</span>
          </div>
          <div className="w-px h-4 bg-[#333333] hidden md:block" />
          <div className="flex items-center gap-2">
            <span className="text-[#2283FF]">✓</span>
            <span>Built by an entrepreneur like you</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
