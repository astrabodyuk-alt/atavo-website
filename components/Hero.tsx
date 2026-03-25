"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111111]"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(34,131,255,0.2) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{
            scale: [1.1, 0.9, 1.1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(34,131,255,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Floating shapes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
            className="absolute w-1 h-1 rounded-full bg-[#2283FF]"
            style={{
              left: `${15 + i * 14}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
          />
        ))}

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2283FF]/10 border border-[#2283FF]/30 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#2283FF] animate-pulse" />
          <span className="text-[#2283FF] text-sm font-medium">
            Online Presence · United Kingdom
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight mb-6"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Elevate your business
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #FFFFFF 0%, #2283FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            with a strong
          </span>
          <br />
          online presence.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-lg md:text-xl text-[#A0A0A0] max-w-2xl mx-auto mb-10"
        >
          Modern websites · SEO · Apps · Automation. We build digital experiences that convert — built by an entrepreneur like you.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => handleScroll("#pricing")}
            className="px-8 py-4 bg-[#2283FF] hover:bg-[#4fa8ff] text-white font-semibold rounded-full text-base transition-all duration-200 hover:shadow-xl hover:shadow-[#2283FF]/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            Get Started
          </button>
          <button
            onClick={() => handleScroll("#contact")}
            className="px-8 py-4 bg-transparent hover:bg-white/5 text-white font-semibold rounded-full text-base border border-[#333333] transition-all duration-200 hover:border-[#525252] hover:-translate-y-0.5 active:translate-y-0"
          >
            Schedule a Call
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: "7", unit: " days", label: "Website delivery" },
            { value: "100", unit: "+", label: "Businesses served" },
            { value: "£499", unit: "", label: "Starting from" },
            { value: "5★", unit: "", label: "Client satisfaction" },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-1 p-4 rounded-2xl bg-[#111111] border border-[#282828]"
            >
              <span
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {stat.value}
                <span className="text-[#2283FF]">{stat.unit}</span>
              </span>
              <span className="text-xs text-[#A0A0A0] text-center">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[#A0A0A0] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-0.5 h-8 bg-gradient-to-b from-[#2283FF] to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
