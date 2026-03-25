"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const plans = [
  {
    name: "Starter Website",
    price: "£499",
    period: "one-time",
    tagline: "Delivered in 7 days",
    description: "Perfect for getting your business online fast with a professional, conversion-ready website.",
    features: [
      "Up to 5 pages",
      "Mobile-first design",
      "Basic SEO setup",
      "Contact form",
      "7-day delivery",
      "1 month free support",
    ],
    cta: "Get Started",
    popular: false,
    color: "#A0A0A0",
  },
  {
    name: "Pro Website / E-Commerce",
    price: "£999",
    period: "one-time",
    tagline: "Full business system",
    description: "A complete digital business platform with e-commerce, SEO, and everything you need to grow.",
    features: [
      "Unlimited pages",
      "E-commerce store",
      "Advanced SEO package",
      "Blog & CMS",
      "Analytics dashboard",
      "3 months free support",
      "Performance optimised",
      "Google Business setup",
    ],
    cta: "Most Popular — Get Started",
    popular: true,
    color: "#2283FF",
  },
  {
    name: "App / SaaS Platform",
    price: "£300",
    period: "per month",
    tagline: "Automated platform",
    description: "A fully automated, revenue-generating platform built and maintained for your business.",
    features: [
      "Custom mobile app",
      "Loyalty & rewards system",
      "Automation workflows",
      "CRM integration",
      "Monthly updates",
      "Priority support",
    ],
    cta: "Start Building",
    popular: false,
    color: "#8B5CF6",
  },
];

export default function Pricing() {
  const handleScroll = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2283FF]/10 border border-[#2283FF]/30 mb-4">
            <span className="text-[#2283FF] text-sm font-medium">Simple Pricing</span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Transparent pricing,
            <br />
            <span style={{
              background: "linear-gradient(135deg, #FFFFFF 0%, #2283FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>no surprises</span>
          </h2>
          <p className="mt-4 text-[#A0A0A0] max-w-md">
            Everything included. No hidden fees, no confusing add-ons. Pick the plan that fits your business.
          </p>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 0.12}>
              <div
                className={`relative h-full flex flex-col rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? "bg-[#2283FF] border-[#2283FF]"
                    : "bg-[#1c1c1c] border-[#282828] hover:border-[#333333]"
                }`}
                style={{
                  boxShadow: plan.popular
                    ? "0 0 60px rgba(34,131,255,0.3), 0 20px 40px rgba(34,131,255,0.2)"
                    : undefined,
                }}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-1 bg-white text-[#2283FF] text-xs font-bold rounded-full shadow-lg tracking-wide uppercase">
                      POPULAR
                    </div>
                  </div>
                )}

                {/* Plan name */}
                <p
                  className={`text-sm font-medium mb-1 ${plan.popular ? "text-white/70" : "text-[#A0A0A0]"}`}
                >
                  {plan.name}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-1">
                  <span
                    className={`text-5xl font-extrabold ${plan.popular ? "text-white" : "text-white"}`}
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.popular ? "text-white/60" : "text-[#525252]"}`}>
                    /{plan.period}
                  </span>
                </div>

                <p
                  className={`text-xs mb-4 ${plan.popular ? "text-white/70" : "text-[#2283FF]"}`}
                >
                  {plan.tagline}
                </p>

                <p
                  className={`text-sm leading-relaxed mb-6 ${plan.popular ? "text-white/70" : "text-[#A0A0A0]"}`}
                >
                  {plan.description}
                </p>

                {/* Divider */}
                <div
                  className={`h-px mb-6 ${plan.popular ? "bg-white/20" : "bg-[#282828]"}`}
                />

                {/* Features */}
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                          plan.popular ? "bg-white/20" : "bg-[#2283FF]/20"
                        }`}
                      >
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                          <path
                            d="M1 3L2.8 5L7 1"
                            stroke={plan.popular ? "white" : "#2283FF"}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span
                        className={`text-sm ${plan.popular ? "text-white" : "text-[#A0A0A0]"}`}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={handleScroll}
                  className={`mt-8 w-full py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 ${
                    plan.popular
                      ? "bg-white text-[#2283FF] hover:shadow-xl hover:shadow-white/20"
                      : "bg-[#2283FF] text-white hover:bg-[#4fa8ff] hover:shadow-lg hover:shadow-[#2283FF]/25"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom note */}
        <AnimatedSection delay={0.4} className="mt-12 text-center">
          <p className="text-[#525252] text-sm">
            All plans include a free consultation call.{" "}
            <button
              onClick={handleScroll}
              className="text-[#2283FF] hover:underline"
            >
              Book yours today →
            </button>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
