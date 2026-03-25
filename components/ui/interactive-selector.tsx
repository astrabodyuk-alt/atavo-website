"use client";

import React, { useState, useEffect } from "react";
import { FaUtensils, FaDumbbell, FaMicrochip, FaHeartbeat } from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  result: string;
  category: string;
  year: string;
  image: string;
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    title: "LondonEats",
    subtitle: "Restaurant Platform",
    description:
      "Full-stack restaurant discovery platform with online ordering, loyalty rewards, and local SEO that drove 3× organic traffic in 60 days.",
    result: "+312% organic traffic",
    category: "Website · SEO",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
    icon: <FaUtensils size={20} className="text-white" />,
  },
  {
    title: "FlowFit",
    subtitle: "Gym Management App",
    description:
      "Branded iOS & Android fitness app with class bookings, membership management, and automated retention campaigns.",
    result: "£40k MRR achieved",
    category: "App · Automation",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    icon: <FaDumbbell size={20} className="text-white" />,
  },
  {
    title: "NovaTech",
    subtitle: "B2B Lead System",
    description:
      "End-to-end lead generation website with automated CRM workflows, email sequences, and a conversion-optimised landing page.",
    result: "5× lead volume",
    category: "Website · Automation",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    icon: <FaMicrochip size={20} className="text-white" />,
  },
  {
    title: "BrightMed",
    subtitle: "Healthcare Portal",
    description:
      "Patient booking portal with automated appointment reminders, GP integrations, and a 5-star rated mobile experience.",
    result: "4,000+ bookings/mo",
    category: "App · Website",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
    icon: <FaHeartbeat size={20} className="text-white" />,
  },
];

export function InteractiveSelector() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    projects.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions((prev) => [...prev, i]);
      }, 120 * i);
      timers.push(timer);
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section id="work" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <AnimatedSection className="mb-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2283FF]/10 border border-[#2283FF]/30 mb-4">
                <span className="text-[#2283FF] text-sm font-medium">Our Work</span>
              </div>
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight"
                style={{ fontFamily: "var(--font-dm)" }}
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
            </div>
            <p className="text-[#a0a0a5] max-w-xs text-sm leading-relaxed">
              Every project is built with measurable outcomes in mind. Here&apos;s a
              selection of what we&apos;ve delivered.
            </p>
          </div>
        </AnimatedSection>

        {/* Interactive panels */}
        <AnimatedSection delay={0.15}>
          {/* Horizontal scroll wrapper for mobile */}
          <div className="overflow-x-auto pb-2 -mx-6 px-6 md:mx-0 md:px-0">
            <div className="flex h-[420px] min-w-[640px] md:min-w-0 w-full items-stretch overflow-hidden rounded-2xl border border-[#282828]">
              {projects.map((project, index) => {
                const isActive = activeIndex === index;
                const isAnimated = animatedOptions.includes(index);

                return (
                  <div
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className="relative flex flex-col justify-end overflow-hidden cursor-pointer transition-all duration-700 ease-in-out"
                    style={{
                      backgroundImage: `url('${project.image}')`,
                      backgroundSize: isActive ? "auto 100%" : "auto 120%",
                      backgroundPosition: "center",
                      opacity: isAnimated ? 1 : 0,
                      transform: isAnimated ? "translateX(0)" : "translateX(-50px)",
                      flex: isActive ? "7 1 0%" : "1 1 0%",
                      minWidth: "60px",
                      borderRight: index < projects.length - 1 ? "1px solid #282828" : "none",
                      boxShadow: isActive
                        ? "0 20px 60px rgba(0,0,0,0.5)"
                        : "0 10px 30px rgba(0,0,0,0.3)",
                      willChange: "flex-grow",
                    }}
                  >
                    {/* Dark gradient overlay */}
                    <div
                      className="absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out"
                      style={{
                        bottom: 0,
                        height: "140px",
                        background: isActive
                          ? "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)"
                          : "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)",
                      }}
                    />

                    {/* Blue top accent line on active */}
                    <div
                      className="absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-500"
                      style={{
                        background: "linear-gradient(90deg, #2283FF, #4fa8ff)",
                        opacity: isActive ? 1 : 0,
                      }}
                    />

                    {/* Label */}
                    <div className="absolute left-0 right-0 bottom-5 flex items-end justify-start z-10 pointer-events-none px-4 gap-3">
                      {/* Icon pill */}
                      <div className="min-w-[40px] max-w-[40px] h-[40px] flex items-center justify-center rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex-shrink-0">
                        {project.icon}
                      </div>

                      {/* Text — only visible when active */}
                      <div className="flex flex-col gap-0.5">
                        <span
                          className="font-bold text-white text-base leading-tight transition-all duration-500 ease-in-out"
                          style={{
                            opacity: isActive ? 1 : 0,
                            transform: isActive ? "translateX(0)" : "translateX(20px)",
                            fontFamily: "var(--font-dm)",
                          }}
                        >
                          {project.title}
                          <span className="text-[#a0a0a5] font-normal"> — {project.subtitle}</span>
                        </span>
                        <span
                          className="text-xs text-[#a0a0a5] leading-snug transition-all duration-500 ease-in-out delay-75"
                          style={{
                            opacity: isActive ? 1 : 0,
                            transform: isActive ? "translateX(0)" : "translateX(20px)",
                            maxWidth: "340px",
                          }}
                        >
                          {project.description}
                        </span>

                        {/* Result badge */}
                        <span
                          className="mt-1.5 inline-flex items-center self-start px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#2283FF]/90 text-white backdrop-blur-sm transition-all duration-500 ease-in-out delay-100"
                          style={{
                            opacity: isActive ? 1 : 0,
                            transform: isActive ? "translateX(0)" : "translateX(20px)",
                            fontFamily: "var(--font-dm)",
                          }}
                        >
                          {project.result}
                        </span>
                      </div>
                    </div>

                    {/* Category + year chip — top right, active only */}
                    <div
                      className="absolute top-4 right-4 flex flex-col items-end gap-1 transition-all duration-500 ease-in-out"
                      style={{ opacity: isActive ? 1 : 0 }}
                    >
                      <span className="text-[10px] font-medium text-white/60 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-mono text-white/40">
                        {project.year}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
