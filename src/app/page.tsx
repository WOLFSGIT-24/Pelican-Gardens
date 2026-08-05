"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import Hero from "@/components/sections/Hero";
import TrustIndicators from "@/components/sections/TrustIndicators";
import ProjectHighlights from "@/components/sections/ProjectHighlights";
import LeadFormSection from "@/components/sections/LeadFormSection";
import Lifestyle from "@/components/sections/Lifestyle";
import LocationAdvantages from "@/components/sections/LocationAdvantages";
import Amenities from "@/components/sections/Amenities";
import FloorPlans from "@/components/sections/FloorPlans";
import DeveloperProfile from "@/components/sections/DeveloperProfile";
import FAQs from "@/components/sections/FAQs";
import Disclaimer from "@/components/sections/Disclaimer";
import EnquiryModal from "@/components/ui/EnquiryModal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--brand-bg)]">
      <Header />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust Indicators — Immediately after hero */}
      <TrustIndicators />

      {/* 3. Project Highlights */}
      <ProjectHighlights />

      {/* 4. Lead Form (First placement) */}
      <LeadFormSection id="lead-form-1" />

      {/* 5. Lifestyle Section */}
      <Lifestyle />

      {/* 6. Location Advantages */}
      <LocationAdvantages />

      {/* 7. Amenities */}
      <Amenities />

      {/* 8. Floor Plans */}
      <FloorPlans />

      {/* 9. Developer Profile (Optional) */}
      <DeveloperProfile />

      {/* 11. Lead Form (Second placement) */}
      <LeadFormSection id="lead-form-2" />

      {/* 12. FAQs */}
      <FAQs />

      {/* 13. Disclaimer & T&C */}
      <Disclaimer />

      <Footer />

      {/* Sticky Mobile CTA */}
      <StickyMobileCTA />

      {/* Enquiry Modal */}
      <EnquiryModal />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
