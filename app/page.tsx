import Navbar from "@/components/Navbar";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import ClientsStrip from "@/components/ClientsStrip";
import { LandingAccordionItem } from "@/components/ui/interactive-image-accordion";
import VerticalTabs from "@/components/ui/vertical-tabs";
import { InteractiveSelector } from "@/components/ui/interactive-selector";
import { UniqueTestimonials } from "@/components/ui/unique-testimonial";
import PricingSection4 from "@/components/ui/pricing-section-4";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroGeometric
          badge="Online Presence · United Kingdom"
          title1="Elevate your business"
          title2="with a strong online presence."
        />
        <ClientsStrip />
        <LandingAccordionItem />
        <VerticalTabs />
        <InteractiveSelector />
        <UniqueTestimonials />
        <PricingSection4 />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
