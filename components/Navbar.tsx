"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PillMorphTabs, { type PillTab } from "@/components/ui/pill-morph-tabs";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const navItems: PillTab[] = navLinks.map((link) => ({
  value: link.href,
  label: link.label,
}));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleTabChange = useCallback((value: string) => {
    const el = document.querySelector(value);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#111111]/90 backdrop-blur-xl border-b border-[#282828]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-full bg-[#2283FF] flex items-center justify-center">
              <span className="text-white text-xs font-bold" style={{ fontFamily: "var(--font-syne)" }}>A</span>
            </div>
            <span
              className="text-white font-bold text-xl tracking-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              ATAVO
            </span>
          </button>

          {/* Center — PillMorphTabs desktop */}
          <div className="hidden md:flex items-center">
            <PillMorphTabs
              items={navItems}
              defaultValue="#home"
              onValueChange={handleTabChange}
            />
          </div>

          {/* CTA — desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNavClick("#contact")}
              className="px-5 py-2 bg-[#2283FF] hover:bg-[#4fa8ff] text-white text-sm font-medium rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#2283FF]/25"
            >
              Let&apos;s Talk
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#111111]/95 backdrop-blur-xl border-b border-[#282828] md:hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-[#A0A0A0] hover:text-white hover:bg-white/5 rounded-xl transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#contact")}
                className="mt-2 px-5 py-3 bg-[#2283FF] hover:bg-[#4fa8ff] text-white font-medium rounded-full transition-all duration-200"
              >
                Let&apos;s Talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
