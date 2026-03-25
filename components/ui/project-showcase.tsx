"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface Project {
  title: string;
  description: string;
  year: string;
  category: string;
  result: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "LondonEats — Restaurant Platform",
    description:
      "Full-stack restaurant discovery platform with online ordering, loyalty rewards, and local SEO that drove 3x organic traffic in 60 days.",
    year: "2024",
    category: "Website · SEO",
    result: "+312% organic traffic",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "FlowFit — Gym Management App",
    description:
      "Branded iOS & Android fitness app with class bookings, membership management, and automated retention campaigns.",
    year: "2024",
    category: "App · Automation",
    result: "£40k MRR achieved",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "NovaTech — B2B Lead System",
    description:
      "End-to-end lead generation website with automated CRM workflows, email sequences, and a conversion-optimised landing page.",
    year: "2023",
    category: "Website · Automation",
    result: "5x lead volume",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "BrightMed — Healthcare Portal",
    description:
      "Patient booking portal with automated appointment reminders, GP integrations, and a 5-star rated mobile experience.",
    year: "2023",
    category: "App · Website",
    result: "4,000+ bookings/mo",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
  },
];

export function ProjectShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }));
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [mousePosition]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setIsVisible(false);
  };

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
                style={{ fontFamily: "var(--font-syne)" }}
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
            <p className="text-[#A0A0A0] max-w-xs text-sm leading-relaxed">
              Every project is built with measurable outcomes in mind. Here&apos;s a selection of what we&apos;ve delivered.
            </p>
          </div>
        </AnimatedSection>

        {/* Project list with cursor image preview */}
        <AnimatedSection delay={0.1}>
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative"
          >
            {/* Floating image preview — follows cursor */}
            <div
              className="pointer-events-none fixed z-50 overflow-hidden rounded-2xl shadow-2xl shadow-black/40"
              style={{
                left: containerRef.current?.getBoundingClientRect().left ?? 0,
                top: containerRef.current?.getBoundingClientRect().top ?? 0,
                transform: `translate3d(${smoothPosition.x + 24}px, ${smoothPosition.y - 110}px, 0)`,
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.85,
                transition:
                  "opacity 0.25s cubic-bezier(0.4,0,0.2,1), scale 0.25s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              <div className="relative w-[260px] h-[170px] bg-[#1c1c1c] overflow-hidden">
                {projects.map((project, index) => (
                  <img
                    key={project.title}
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out"
                    style={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      scale: hoveredIndex === index ? 1 : 1.08,
                      filter: hoveredIndex === index ? "none" : "blur(8px)",
                    }}
                  />
                ))}
                {/* Blue result badge on preview */}
                {hoveredIndex !== null && (
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-[#2283FF]/90 text-white text-[10px] font-semibold backdrop-blur-sm"
                    style={{ fontFamily: "var(--font-syne)" }}>
                    {projects[hoveredIndex].result}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>

            {/* Project rows */}
            <div className="space-y-0">
              {projects.map((project, index) => (
                <a
                  key={project.title}
                  href={project.link}
                  className="group block"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="relative py-6 border-t border-[#1c1c1c] transition-all duration-300 ease-out">
                    {/* Row hover background */}
                    <div
                      className={`absolute inset-0 -mx-4 px-4 bg-[#1c1c1c] rounded-xl transition-all duration-300 ease-out ${
                        hoveredIndex === index
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-[0.98]"
                      }`}
                    />

                    <div className="relative flex items-center justify-between gap-4">
                      {/* Left: number + title + description */}
                      <div className="flex items-start gap-5 flex-1 min-w-0">
                        <span
                          className="text-[10px] font-medium tabular-nums text-[#2283FF]/50 mt-1 flex-shrink-0"
                          style={{ fontFamily: "var(--font-syne)" }}
                        >
                          /{String(index + 1).padStart(2, "0")}
                        </span>

                        <div className="min-w-0">
                          <div className="inline-flex items-center gap-2 mb-1">
                            <h3
                              className="text-white font-bold text-xl md:text-2xl tracking-tight relative"
                              style={{ fontFamily: "var(--font-syne)" }}
                            >
                              <span className="relative">
                                {project.title}
                                <span
                                  className={`absolute left-0 -bottom-0.5 h-px bg-white transition-all duration-300 ease-out ${
                                    hoveredIndex === index ? "w-full" : "w-0"
                                  }`}
                                />
                              </span>
                            </h3>
                            <ArrowUpRight
                              className={`w-4 h-4 text-[#2283FF] flex-shrink-0 transition-all duration-300 ease-out ${
                                hoveredIndex === index
                                  ? "opacity-100 translate-x-0 translate-y-0"
                                  : "opacity-0 -translate-x-2 translate-y-2"
                              }`}
                            />
                          </div>
                          <p
                            className={`text-sm leading-relaxed max-w-xl transition-colors duration-300 ${
                              hoveredIndex === index
                                ? "text-[#A0A0A0]"
                                : "text-[#525252]"
                            }`}
                          >
                            {project.description}
                          </p>
                        </div>
                      </div>

                      {/* Right: category + result + year */}
                      <div className="flex-shrink-0 text-right hidden sm:flex flex-col items-end gap-1.5">
                        <span
                          className={`text-xs px-2.5 py-1 rounded-full border transition-all duration-300 ${
                            hoveredIndex === index
                              ? "bg-[#2283FF]/15 border-[#2283FF]/40 text-[#2283FF]"
                              : "bg-transparent border-[#282828] text-[#525252]"
                          }`}
                        >
                          {project.result}
                        </span>
                        <span className="text-xs text-[#333333] font-mono tabular-nums">
                          {project.category} · {project.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}

              {/* Closing border */}
              <div className="border-t border-[#1c1c1c]" />
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
