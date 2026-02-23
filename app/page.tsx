import Navbar from "@/components/ui/Navbar";
import StickyCtaBar from "@/components/ui/StickyCtaBar";
import Hero from "@/components/sections/Hero";
import LogoBar from "@/components/sections/LogoBar";
import ProblemSection from "@/components/sections/ProblemSection";
import ServicesSection from "@/components/sections/ServicesSection";
import HappinessIndex from "@/components/sections/HappinessIndex";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import BookingSection from "@/components/sections/BookingSection";
import AboutSection from "@/components/sections/AboutSection";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <StickyCtaBar /> */}

      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Social Proof / Logo Bar */}
        <LogoBar />

        {/* 3. Problem → Agitation */}
        <ProblemSection />

        {/* 4. Services Domains */}
        <ServicesSection />

        {/* 5. Happiness Index */}
        <HappinessIndex />

        {/* 6. How We Work — Process */}
        <ProcessSection />

        {/* 7. Testimonials — Video + Text */}
        <TestimonialsSection />

        {/* 8. Industries */}
        <IndustriesSection />

        {/* 9. Booking — Primary CTA */}
        <BookingSection />

        {/* 10. About / Credibility */}
        <AboutSection />

        {/* 11. Final CTA */}
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
