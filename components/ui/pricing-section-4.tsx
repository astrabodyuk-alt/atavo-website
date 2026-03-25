"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sparkles as SparklesComp } from "@/components/ui/sparkles";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { motion } from "motion/react";
import { useRef, useState } from "react";

// ATAVO pricing plans
// Toggle: "Standard" shows full price / "Save 10%" shows discounted price
const plans = [
  {
    name: "Starter Website",
    description:
      "Get your business online in 7 days with a professional, conversion-ready website.",
    price: 499,
    discountedPrice: 449,
    suffix: "one-time",
    discountedSuffix: "one-time",
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
    popular: false,
    includes: [
      "What's included:",
      "Up to 5 custom pages",
      "Mobile-first design",
      "Basic SEO setup",
      "Contact form included",
      "7-day delivery",
      "1 month free support",
    ],
  },
  {
    name: "Pro / E-Commerce",
    description:
      "A complete digital business platform with e-commerce, advanced SEO, and full CMS.",
    price: 999,
    discountedPrice: 899,
    suffix: "one-time",
    discountedSuffix: "one-time",
    buttonText: "Get Started",
    buttonVariant: "default" as const,
    popular: true,
    includes: [
      "Everything in Starter, plus:",
      "Unlimited pages + E-commerce",
      "Advanced SEO package",
      "Blog & CMS",
      "Analytics dashboard",
      "3 months free support",
      "Google Business setup",
    ],
  },
  {
    name: "App / SaaS Platform",
    description:
      "A fully automated, revenue-generating platform built and maintained every month.",
    price: 300,
    discountedPrice: 270,
    suffix: "per month",
    discountedSuffix: "per month",
    buttonText: "Start Building",
    buttonVariant: "outline" as const,
    popular: false,
    includes: [
      "What's included:",
      "Custom mobile app",
      "Loyalty & rewards system",
      "Automation workflows",
      "CRM integration",
      "Monthly updates included",
      "Priority support",
    ],
  },
];

const PricingSwitch = ({ onSwitch }: { onSwitch: (value: string) => void }) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className="flex justify-center">
      <div className="relative z-10 mx-auto flex w-fit rounded-full bg-neutral-900 border border-[#2283FF]/30 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors text-sm",
            selected === "0" ? "text-white" : "text-gray-400"
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId="switch"
              className="absolute top-0 left-0 h-10 w-full rounded-full border-2 shadow-sm shadow-[#2283FF]/60 border-[#2283FF] bg-gradient-to-t from-[#1a6ee8] to-[#2283FF]"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Standard</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 w-fit h-10 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors text-sm",
            selected === "1" ? "text-white" : "text-gray-400"
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId="switch"
              className="absolute top-0 left-0 h-10 w-full rounded-full border-2 shadow-sm shadow-[#2283FF]/60 border-[#2283FF] bg-gradient-to-t from-[#1a6ee8] to-[#2283FF]"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            Save 10%
            <span className="text-[10px] font-bold text-amber-300 bg-amber-400/10 px-1.5 py-0.5 rounded-full border border-amber-400/20">
              NEW
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

const revealVariants = {
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.15,
      duration: 0.5,
    },
  }),
  hidden: {
    filter: "blur(10px)",
    y: -20,
    opacity: 0,
  },
};

export default function PricingSection4() {
  const [isDiscounted, setIsDiscounted] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  const togglePricingPeriod = (value: string) =>
    setIsDiscounted(parseInt(value) === 1);

  const handleContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="pricing"
      className="relative bg-black overflow-x-hidden py-0"
      ref={pricingRef}
    >
      {/* Sparkles header */}
      <TimelineContent
        animationNum={4}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute top-0 h-96 w-full overflow-hidden pointer-events-none"
        style={{
          maskImage: "radial-gradient(50% 50%, white, transparent)",
          WebkitMaskImage: "radial-gradient(50% 50%, white, transparent)",
        } as React.CSSProperties}
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a08_1px,transparent_1px)] bg-[size:70px_80px]" />
        <SparklesComp
          density={1400}
          direction="bottom"
          speed={0.8}
          color="#2283FF"
          className="absolute inset-x-0 bottom-0 h-full w-full"
          style={{
            maskImage:
              "radial-gradient(50% 50%, white, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(50% 50%, white, transparent 85%)",
          } as React.CSSProperties}
        />
      </TimelineContent>

      {/* Blue glow ellipses */}
      <TimelineContent
        animationNum={5}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute left-0 top-0 w-full h-[60vh] z-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute left-[-30%] right-[-30%] top-0 h-[600px] rounded-full"
          style={{
            border: "180px solid #2283FF",
            filter: "blur(92px)",
            WebkitFilter: "blur(92px)",
            opacity: 0.12,
          }}
        />
      </TimelineContent>

      {/* Content */}
      <article className="text-center mb-6 pt-28 max-w-3xl mx-auto space-y-4 relative z-10 px-6">
        {/* Badge */}
        <TimelineContent
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2283FF]/10 border border-[#2283FF]/30">
            <span className="text-[#2283FF] text-sm font-medium">Simple Pricing</span>
          </div>
        </TimelineContent>

        {/* Headline */}
        <h2
          className="text-2xl md:text-3xl font-bold text-white"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.12}
            staggerFrom="first"
            containerClassName="justify-center flex-wrap"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 40,
              delay: 0,
            }}
          >
            Transparent pricing, no surprises
          </VerticalCutReveal>
        </h2>

        {/* Subtitle */}
        <TimelineContent
          animationNum={1}
          timelineRef={pricingRef}
          customVariants={revealVariants}
        >
          <p className="text-gray-400 max-w-md mx-auto text-sm leading-relaxed">
            Everything included. No hidden fees, no confusing add-ons. Pick the
            plan that fits your business — built by an entrepreneur like you.
          </p>
        </TimelineContent>

        {/* Toggle */}
        <TimelineContent
          animationNum={2}
          timelineRef={pricingRef}
          customVariants={revealVariants}
        >
          <PricingSwitch onSwitch={togglePricingPeriod} />
        </TimelineContent>
      </article>

      {/* Cards */}
      <div className="grid md:grid-cols-3 max-w-5xl gap-4 py-8 pb-24 mx-auto px-6 relative z-10">
        {plans.map((plan, index) => (
          <TimelineContent
            key={plan.name}
            animationNum={3 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card
              className={cn(
                "relative text-white border-neutral-800 h-full flex flex-col",
                plan.popular
                  ? "bg-gradient-to-b from-neutral-800 via-neutral-900 to-neutral-900 shadow-[0px_-10px_200px_0px_#2283FF40] z-20 border-[#2283FF]/40"
                  : "bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-950 z-10"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#2283FF] text-white text-xs font-bold rounded-full shadow-lg tracking-wide uppercase">
                  POPULAR
                </div>
              )}

              <CardHeader className="text-left">
                <h3
                  className="text-2xl mb-2 font-bold text-white"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white">
                    £
                    <NumberFlow
                      value={isDiscounted ? plan.discountedPrice : plan.price}
                      className="text-3xl font-extrabold"
                    />
                  </span>
                  <span className="text-gray-400 ml-1 text-sm">
                    /{isDiscounted ? plan.discountedSuffix : plan.suffix}
                  </span>
                </div>
                {isDiscounted && (
                  <p className="text-[#2283FF] text-xs font-medium">
                    Save £{plan.price - plan.discountedPrice} with this offer
                  </p>
                )}
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0 flex flex-col flex-1">
                <button
                  onClick={handleContact}
                  className={cn(
                    "w-full mb-6 p-3.5 text-base rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5",
                    plan.popular
                      ? "bg-gradient-to-t from-[#1a6ee8] to-[#2283FF] shadow-lg shadow-[#2283FF]/30 border border-[#2283FF]/50 text-white hover:shadow-xl hover:shadow-[#2283FF]/40"
                      : "bg-gradient-to-t from-neutral-950 to-neutral-700 shadow-lg shadow-neutral-900 border border-neutral-700 text-white hover:border-neutral-500"
                  )}
                >
                  {plan.buttonText}
                </button>

                <div className="space-y-3 pt-4 border-t border-neutral-800 flex-1">
                  <h4 className="font-semibold text-sm text-white mb-3"
                    style={{ fontFamily: "var(--font-syne)" }}>
                    {plan.includes[0]}
                  </h4>
                  <ul className="space-y-2.5">
                    {plan.includes.slice(1).map((feature, i) => (
                      <li key={i} className="flex items-center gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[#2283FF]/20 border border-[#2283FF]/40 flex items-center justify-center flex-shrink-0">
                          <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                            <path
                              d="M1 3L2.8 5L7 1"
                              stroke="#2283FF"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </div>

      {/* Bottom note */}
      <TimelineContent
        animationNum={6}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="pb-8 text-center relative z-10"
      >
        <p className="text-[#525252] text-sm">
          All plans include a free consultation call.{" "}
          <button
            onClick={handleContact}
            className="text-[#2283FF] hover:underline"
          >
            Book yours today →
          </button>
        </p>
      </TimelineContent>
    </section>
  );
}
