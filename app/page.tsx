import Navbar from "@/components/Navbar";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import ClientsStrip from "@/components/ClientsStrip";
import ServicesSection from "@/components/ServicesSection";
import VerticalTabs from "@/components/ui/vertical-tabs";
import { LandingAccordionItem } from "@/components/ui/interactive-image-accordion";
import { UniqueTestimonials } from "@/components/ui/unique-testimonial";
import PricingSection4 from "@/components/ui/pricing-section-4";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* 1 — Navbar */}
      <Navbar />

      {/* 2 — Hero */}
      <HeroGeometric />

      {/* 3 — Scrolling clients strip */}
      <ClientsStrip />

      {/* 4 — Services (4 tabs) */}
      <ServicesSection />

      {/* 5 — How It Works (3 steps) */}
      <VerticalTabs />

      {/* 6 — Our Work (expanding panels) */}
      <LandingAccordionItem />

      {/* 7 — Testimonials */}
      <UniqueTestimonials />

      {/* 8 — Pricing */}
      <PricingSection4 />

      {/* 9 — Contact */}
      <Contact />

      {/* 10 — Footer */}
      <Footer />
    </>
  );
}
