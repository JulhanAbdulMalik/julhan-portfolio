import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesHubSection } from "@/components/sections/ServicesHubSection";
import { PortfolioPreviewSection } from "@/components/sections/PortfolioPreviewSection";
import { PricingPreviewSection } from "@/components/sections/PricingPreviewSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. Hero Section (Dark) */}
      <HeroSection />

      {/* 2. About & Stats Section (Light Mode + Thin Grid Lines - wpu.id style) */}
      <AboutSection />

      {/* 3. Services Section (Dark) */}
      <ServicesHubSection />

      {/* 4. Portfolio Section (Light + Grid) */}
      <PortfolioPreviewSection />

      {/* 5. Pricing Section (Dark) */}
      <PricingPreviewSection />

      {/* 6. Contact Section (Light + Grid) */}
      <ContactSection />
    </div>
  );
}
