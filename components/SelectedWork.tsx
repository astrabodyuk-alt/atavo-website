"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "LondonEats — Restaurant Platform",
    category: "Website · SEO",
    description:
      "A full-stack restaurant discovery platform with online ordering, loyalty rewards, and local SEO that drove 3x organic traffic in 60 days.",
    tags: ["Next.js", "SEO", "E-Commerce"],
    result: "+312% organic traffic",
    color: "#2283FF",
    gradient: "from-[#2283FF]/20 to-transparent",
  },
  {
    title: "FlowFit — Gym Management App",
    category: "App · Automation",
    description:
      "A branded iOS & Android fitness app with class bookings, membership management, and automated retention campaigns.",
    tags: ["Mobile App", "Automation", "SaaS"],
    result: "£40k MRR achieved",
    color: "#8B5CF6",
    gradient: "from-[#8B5CF6]/20 to-transparent",
  },
  {
    title: "NovaTech — B2B Lead System",
    category: "Website · Automation",
    description:
      "End-to-end lead generation website with automated CRM workflows, email sequences, and a conversion-optimised landing page.",
    tags: ["Lead Gen", "CRM", "Automation"],
    result: "5x lead volume",
    color: "#10B981",
    gradient: "from-[#10B981]/20 to-transparent",
  },
];

export default function SelectedWork() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="work" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2283FF]/10 border border-[#2283FF]/30 mb-4">
              <span className="text-[#2283FF] text-sm font-medium">Our Work</span>
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Projects that
              <br />
              <span style={{
                background: "linear-gradient(135deg, #FFFFFF 0%, #2283FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>drive results</span>
            </h2>
          </div>
          <p className="text-[#A0A0A0] max-w-xs text-sm leading-relaxed">
            Every project is built with measurable outcomes in mind. Here's a selection of what we've delivered.
          </p>
        </AnimatedSection>

        {/* Project cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <motion.div
                className="relative rounded-2xl bg-[#1c1c1c] border border-[#282828] overflow-hidden cursor-pointer h-full flex flex-col"
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                animate={{
                  y: hovered === i ? -8 : 0,
                  borderColor: hovered === i ? `${project.color}60` : "#282828",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                  boxShadow:
                    hovered === i ? `0 20px 60px ${project.color}20` : "none",
                }}
              >
                {/* Visual header */}
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}
                >
                  <div className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  {/* Decorative circles */}
                  <div className="relative flex items-center justify-center gap-4">
                    <div
                      className="w-16 h-16 rounded-2xl border flex items-center justify-center text-2xl"
                      style={{ borderColor: `${project.color}40`, background: `${project.color}10` }}
                    >
                      {i === 0 ? "🌐" : i === 1 ? "📱" : "⚙️"}
                    </div>
                    <div className="flex flex-col gap-1">
                      {[...Array(4)].map((_, j) => (
                        <div
                          key={j}
                          className="h-1.5 rounded-full"
                          style={{
                            width: `${60 + j * 15}px`,
                            background: `${project.color}${j === 0 ? "80" : "30"}`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Result badge */}
                  <div
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: `${project.color}20`, color: project.color, border: `1px solid ${project.color}40` }}
                  >
                    {project.result}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full bg-[#202020] text-[#525252] border border-[#333333]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3
                    className="text-lg font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-[#525252]">{project.category}</span>
                    <motion.span
                      className="text-xs font-medium"
                      style={{ color: project.color }}
                      animate={{ x: hovered === i ? 4 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      View case study →
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
