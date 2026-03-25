"use client";

import AnimatedSection from "./AnimatedSection";
import MultistepForm from "@/components/ui/multistep-form";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left — info */}
          <AnimatedSection direction="left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2283FF]/10 border border-[#2283FF]/30 mb-4">
              <span className="text-[#2283FF] text-sm font-medium">Get In Touch</span>
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Let&apos;s build
              <br />
              <span style={{
                background: "linear-gradient(135deg, #FFFFFF 0%, #2283FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                something great
              </span>
            </h2>
            <p className="text-[#A0A0A0] leading-relaxed mb-10">
              Ready to elevate your online presence? Fill in the brief and we&apos;ll be in touch within 24 hours to kick things off.
            </p>

            <div className="space-y-4 mb-12">
              {[
                { icon: "🌐", label: "Website",       value: "atavo.co.uk" },
                { icon: "📍", label: "Location",      value: "United Kingdom" },
                { icon: "⏱️", label: "Response time", value: "Within 24 hours" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1c1c1c] border border-[#282828] flex items-center justify-center text-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-[#525252]">{item.label}</p>
                    <p className="text-white text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-[#1c1c1c] border border-[#282828]">
              <p className="text-[#A0A0A0] text-sm italic leading-relaxed">
                &ldquo;We build digital experiences that convert — because we&apos;ve been in your shoes. Built by an entrepreneur like you.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full bg-[#2283FF]/20 border border-[#2283FF]/30 flex items-center justify-center text-xs font-bold text-[#2283FF]"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  A
                </div>
                <div>
                  <p className="text-white text-xs font-semibold" style={{ fontFamily: "var(--font-syne)" }}>
                    ATAVO Team
                  </p>
                  <p className="text-[#525252] text-xs">Online Presence Experts</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — multi-step form */}
          <AnimatedSection direction="right" delay={0.15}>
            <MultistepForm />
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
