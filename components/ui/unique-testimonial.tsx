"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import AnimatedSection from "@/components/AnimatedSection";

const testimonials = [
  {
    id: 1,
    quote:
      "ATAVO delivered our website in under a week and it immediately started ranking on Google. The SEO work they did has completely transformed our online visibility.",
    author: "Marcus T.",
    role: "Founder, LondonEats",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    quote:
      "The loyalty app they built for our gym has been a game-changer. Member retention is up 40% and we're seeing real revenue from the in-app upgrades every month.",
    author: "Sarah K.",
    role: "Owner, FlowFit Gym",
    avatar:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    quote:
      "From our first call, they understood exactly what we needed. The automated lead system pays for itself every month. Genuinely the best investment we've made.",
    author: "James R.",
    role: "Director, NovaTech Solutions",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
  },
];

export function UniqueTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayedQuote, setDisplayedQuote] = useState(testimonials[0].quote);
  const [displayedRole, setDisplayedRole] = useState(testimonials[0].role);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    if (index === activeIndex || isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setDisplayedQuote(testimonials[index].quote);
      setDisplayedRole(testimonials[index].role);
      setActiveIndex(index);
      setTimeout(() => setIsAnimating(false), 400);
    }, 200);
  };

  return (
    <section className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2283FF]/10 border border-[#2283FF]/30 mb-4">
            <span className="text-[#2283FF] text-sm font-medium">What People Say</span>
          </div>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Real results,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FFFFFF 0%, #2283FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              real businesses
            </span>
          </h2>
        </AnimatedSection>

        {/* Testimonial widget */}
        <AnimatedSection delay={0.15}>
          <div className="flex flex-col items-center gap-10 py-8">

            {/* Quote */}
            <div className="relative px-8 max-w-2xl w-full">
              <span className="absolute -left-2 -top-6 text-8xl font-serif text-[#2283FF]/10 select-none pointer-events-none leading-none">
                &ldquo;
              </span>

              <p
                className={cn(
                  "text-2xl md:text-3xl font-light text-white text-center leading-relaxed transition-all duration-400 ease-out",
                  isAnimating
                    ? "opacity-0 blur-sm scale-[0.98]"
                    : "opacity-100 blur-0 scale-100"
                )}
              >
                {displayedQuote}
              </p>

              <span className="absolute -right-2 -bottom-8 text-8xl font-serif text-[#2283FF]/10 select-none pointer-events-none leading-none">
                &rdquo;
              </span>
            </div>

            {/* Role + avatars */}
            <div className="flex flex-col items-center gap-6 mt-2">
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={cn(
                      "text-amber-400 text-sm transition-all duration-500 ease-out",
                      isAnimating ? "opacity-0 scale-90" : "opacity-100 scale-100"
                    )}
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Role */}
              <p
                className={cn(
                  "text-xs text-[#525252] tracking-[0.2em] uppercase transition-all duration-500 ease-out",
                  isAnimating
                    ? "opacity-0 translate-y-2"
                    : "opacity-100 translate-y-0"
                )}
              >
                {displayedRole}
              </p>

              {/* Avatar selector pills */}
              <div className="flex items-center justify-center gap-2">
                {testimonials.map((testimonial, index) => {
                  const isActive = activeIndex === index;
                  const isHovered = hoveredIndex === index && !isActive;
                  const showName = isActive || isHovered;

                  return (
                    <button
                      key={testimonial.id}
                      onClick={() => handleSelect(index)}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className={cn(
                        "relative flex items-center rounded-full cursor-pointer",
                        "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                        isActive
                          ? "bg-[#2283FF] shadow-lg shadow-[#2283FF]/30"
                          : "bg-transparent hover:bg-[#1c1c1c]",
                        showName ? "pr-4 pl-2 py-2" : "p-0.5"
                      )}
                    >
                      {/* Avatar */}
                      <div className="relative flex-shrink-0">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className={cn(
                            "w-8 h-8 rounded-full object-cover",
                            "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                            isActive
                              ? "ring-2 ring-white/30"
                              : "ring-1 ring-[#333333]",
                            !isActive && "hover:scale-105"
                          )}
                          onError={(e) => {
                            const t = e.target as HTMLImageElement;
                            t.style.display = "none";
                          }}
                        />
                      </div>

                      {/* Expanding name */}
                      <div
                        className={cn(
                          "grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                          showName
                            ? "grid-cols-[1fr] opacity-100 ml-2"
                            : "grid-cols-[0fr] opacity-0 ml-0"
                        )}
                      >
                        <div className="overflow-hidden">
                          <span
                            className={cn(
                              "text-sm font-semibold whitespace-nowrap block",
                              "transition-colors duration-300",
                              isActive ? "text-white" : "text-[#A0A0A0]"
                            )}
                            style={{ fontFamily: "var(--font-syne)" }}
                          >
                            {testimonial.author}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Trust bar */}
        <AnimatedSection delay={0.3} className="mt-12 flex flex-wrap items-center justify-center gap-8 text-[#525252] text-sm">
          <div className="flex items-center gap-2">
            <span className="text-amber-400">★★★★★</span>
            <span>5.0 average rating</span>
          </div>
          <div className="w-px h-4 bg-[#282828] hidden md:block" />
          <div className="flex items-center gap-2">
            <span className="text-[#2283FF]">✓</span>
            <span>100+ UK businesses served</span>
          </div>
          <div className="w-px h-4 bg-[#282828] hidden md:block" />
          <div className="flex items-center gap-2">
            <span className="text-[#2283FF]">✓</span>
            <span>Built by an entrepreneur like you</span>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
