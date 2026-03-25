"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const tabs = [
  {
    id: "websites",
    label: "Websites",
    icon: "🌐",
    headline: "Beautiful, Fast & Converting Websites",
    description:
      "We design and build modern, mobile-first websites that don't just look great — they convert visitors into customers. From landing pages to full business platforms, every pixel is crafted with purpose.",
    features: [
      "Custom design tailored to your brand",
      "Mobile-first, lightning-fast performance",
      "SEO-ready from day one",
      "Delivered in as little as 7 days",
    ],
    color: "#2283FF",
  },
  {
    id: "seo",
    label: "SEO",
    icon: "📈",
    headline: "Get Found on Google",
    description:
      "Being invisible online means losing customers every day. Our SEO strategies get your business ranking for the keywords that matter — driving consistent, free organic traffic to your site.",
    features: [
      "Keyword research & competitor analysis",
      "On-page and technical SEO",
      "Local SEO for UK businesses",
      "Monthly reporting & optimisation",
    ],
    color: "#10B981",
  },
  {
    id: "apps",
    label: "Apps",
    icon: "📱",
    headline: "Loyalty Apps & Mobile Platforms",
    description:
      "Turn one-time buyers into loyal customers with a branded app. We build custom loyalty platforms, booking systems and mobile apps that keep your customers coming back.",
    features: [
      "Branded iOS & Android apps",
      "Loyalty & rewards systems",
      "Push notifications & engagement",
      "Seamless payment integration",
    ],
    color: "#F59E0B",
  },
  {
    id: "automation",
    label: "Automation",
    icon: "⚙️",
    headline: "Revenue-Generating Systems",
    description:
      "Stop doing repetitive tasks manually. We build automated systems that handle customer follow-ups, bookings, invoicing, and more — so you can focus on growing your business.",
    features: [
      "CRM & workflow automation",
      "Automated email & SMS sequences",
      "Booking & scheduling systems",
      "Custom SaaS platform development",
    ],
    color: "#8B5CF6",
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState("websites");
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="services" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2283FF]/10 border border-[#2283FF]/30 mb-4">
            <span className="text-[#2283FF] text-sm font-medium">What We Do</span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Your Business
            <br />
            <span style={{
              background: "linear-gradient(135deg, #FFFFFF 0%, #2283FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Journey</span>
          </h2>
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection delay={0.1} className="flex flex-wrap gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeTab === tab.id
                  ? "bg-[#2283FF] text-white border-[#2283FF] shadow-lg shadow-[#2283FF]/20"
                  : "bg-[#1c1c1c] text-[#A0A0A0] border-[#282828] hover:border-[#333333] hover:text-white"
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </AnimatedSection>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            {/* Text content */}
            <div>
              <h3
                className="text-2xl md:text-3xl font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {active.headline}
              </h3>
              <p className="text-[#A0A0A0] leading-relaxed mb-8">
                {active.description}
              </p>
              <ul className="space-y-3">
                {active.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: `${active.color}20`, border: `1px solid ${active.color}40` }}
                    >
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path
                          d="M1 4L3.5 6.5L9 1"
                          stroke={active.color}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-[#A0A0A0] text-sm">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual card */}
            <div className="relative">
              <div
                className="rounded-2xl p-8 border border-[#282828] bg-[#1c1c1c] overflow-hidden"
                style={{ boxShadow: `0 0 60px ${active.color}15` }}
              >
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-20"
                  style={{ background: active.color, transform: "translate(30%, -30%)" }}
                />
                <div className="relative z-10">
                  <div
                    className="text-6xl mb-6 w-20 h-20 rounded-2xl flex items-center justify-center"
                    style={{ background: `${active.color}15`, border: `1px solid ${active.color}30` }}
                  >
                    {active.icon}
                  </div>
                  <h4
                    className="text-xl font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {active.label}
                  </h4>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed">
                    Transforming UK businesses through world-class {active.label.toLowerCase()}.
                  </p>
                  <div className="mt-6 flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ background: active.color }}
                    />
                    <span className="text-xs text-[#A0A0A0]">Available now</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Pain points */}
        <AnimatedSection delay={0.2} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "🔗", problem: "No website", impact: "Losing clients" },
            { icon: "📋", problem: "Outdated website", impact: "Invisible online" },
            { icon: "🔍", problem: "No SEO", impact: "Not found on Google" },
            { icon: "⚙️", problem: "No system", impact: "No repeat customers" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-[#1c1c1c] border border-[#282828] hover:border-[#2283FF]/40 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-2xl mb-3 grayscale group-hover:grayscale-0 transition-all duration-300">
                {item.icon}
              </div>
              <p className="text-white text-sm font-semibold mb-1" style={{ fontFamily: "var(--font-syne)" }}>
                {item.problem}
              </p>
              <p className="text-[#2283FF] text-xs">{item.impact}</p>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
