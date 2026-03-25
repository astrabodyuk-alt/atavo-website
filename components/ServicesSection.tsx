"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "websites",
    label: "Websites",
    badge: "🌐",
    headline: "Websites that win clients",
    description:
      "We design and build conversion-focused websites that look stunning, load fast, and turn visitors into paying customers — delivered in 7 days.",
    features: [
      "Mobile-first responsive design",
      "Optimised page speed & Core Web Vitals",
      "Contact forms & live chat ready",
      "CMS for easy content updates",
      "7-day delivery guarantee",
    ],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200&auto=format&fit=crop",
    stat: "7 days",
    statLabel: "average delivery",
    color: "#2283FF",
  },
  {
    id: "seo",
    label: "SEO",
    badge: "📈",
    headline: "Get found on Google",
    description:
      "From local SEO to full technical audits, we put your business in front of the right customers at the right moment — no ad spend required.",
    features: [
      "Local & national keyword strategy",
      "Technical SEO audit & fixes",
      "Google Business Profile setup",
      "Monthly ranking reports",
      "Content & backlink strategy",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    stat: "3×",
    statLabel: "average traffic growth",
    color: "#22c55e",
  },
  {
    id: "apps",
    label: "Apps",
    badge: "📱",
    headline: "Apps that retain customers",
    description:
      "Custom iOS & Android apps with loyalty programmes, push notifications, and in-app purchases — turning one-time buyers into repeat revenue.",
    features: [
      "iOS & Android (React Native)",
      "Loyalty & rewards system",
      "Push notification campaigns",
      "In-app purchases & upgrades",
      "Analytics & user insights",
    ],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    stat: "40%+",
    statLabel: "avg. retention increase",
    color: "#a855f7",
  },
  {
    id: "automation",
    label: "Automation",
    badge: "⚡",
    headline: "Systems that work while you sleep",
    description:
      "We build automated lead generation, CRM workflows, email sequences, and follow-up systems that grow your revenue on autopilot.",
    features: [
      "Lead capture & nurture funnels",
      "CRM integration & setup",
      "Automated email sequences",
      "Appointment booking systems",
      "Monthly performance reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    stat: "5×",
    statLabel: "avg. lead volume increase",
    color: "#f59e0b",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="services" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <AnimatedSection className="mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2283FF]/10 border border-[#2283FF]/30 mb-4">
            <span className="text-[#2283FF] text-sm font-medium">What We Do</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
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
            <p className="text-[#A0A0A0] max-w-sm text-sm leading-relaxed md:text-right">
              Everything your business needs to win online — from a stunning
              first impression to a fully automated revenue machine.
            </p>
          </div>
        </AnimatedSection>

        {/* Tab bar */}
        <AnimatedSection delay={0.1}>
          <div className="flex gap-2 flex-wrap mb-10">
            {services.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  active === i
                    ? "bg-[#2283FF] border-[#2283FF] text-white shadow-lg shadow-[#2283FF]/25"
                    : "bg-transparent border-[#282828] text-[#525252] hover:border-[#444] hover:text-[#A0A0A0]"
                }`}
                style={{ fontFamily: "var(--font-syne)" }}
              >
                <span>{s.badge}</span>
                {s.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Content panel */}
        <AnimatedSection delay={0.15}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">

            {/* Left — details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
              >
                {/* Stat callout */}
                <div className="inline-flex items-baseline gap-2 mb-6">
                  <span
                    className="text-5xl font-extrabold"
                    style={{
                      fontFamily: "var(--font-syne)",
                      color: current.color,
                    }}
                  >
                    {current.stat}
                  </span>
                  <span className="text-[#525252] text-sm">{current.statLabel}</span>
                </div>

                <h3
                  className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {current.headline}
                </h3>

                <p className="text-[#A0A0A0] text-base leading-relaxed mb-8">
                  {current.description}
                </p>

                <ul className="space-y-3 mb-10">
                  {current.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: `${current.color}20`,
                          border: `1px solid ${current.color}40`,
                        }}
                      >
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                          <path
                            d="M1 3L2.8 5L7 1"
                            stroke={current.color}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-[#A0A0A0] text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    const el = document.querySelector("#contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-7 py-3.5 bg-[#2283FF] hover:bg-[#4fa8ff] text-white font-semibold rounded-full text-sm transition-all duration-200 hover:shadow-lg hover:shadow-[#2283FF]/25 hover:-translate-y-0.5"
                >
                  Get started →
                </button>
              </motion.div>
            </AnimatePresence>

            {/* Right — image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id + "-img"}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-[#141414] border border-[#222222]"
              >
                <img
                  src={current.image}
                  alt={current.label}
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Label badge */}
                <div className="absolute top-5 left-5 flex items-center gap-2">
                  <div
                    className="px-3 py-1.5 rounded-full text-white text-xs font-bold backdrop-blur-sm"
                    style={{
                      backgroundColor: `${current.color}dd`,
                      fontFamily: "var(--font-syne)",
                    }}
                  >
                    {current.badge} {current.label}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
