import HeroSection from "@/components/HeroSection";
import ThemeOverviewSection from "@/components/ThemeOverviewSection";
import HomeDemosSection from "@/components/HomeDemosSection";
import ElementorSection from "@/components/ElementorSection";
import InnerPagesSection from "@/components/InnerPagesSection";
import BenefitsSection from "@/components/BenefitsSection";
import FeaturesSection from "@/components/FeaturesSection";
import MerchandiseSection from "@/components/MerchandiseSection";
import TypographySection from "@/components/TypographySection";
import TutorialsAndSupportSection from "@/components/TutorialsAndSupportSection";
import EcoSystemSection from "@/components/EcoSystemSection";
import ExpertHelpSection from "@/components/ExpertHelpSection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import CTABannerSection from "@/components/CTABannerSection";

export default function Index() {
  return (
    <main className="min-h-screen bg-black font-['Roboto']">
      <HeroSection />
      <ThemeOverviewSection />
      <HomeDemosSection />
      <ElementorSection />
      <InnerPagesSection />
      <BenefitsSection />
      <FeaturesSection />
      <MerchandiseSection />
      <TypographySection />
      <TutorialsAndSupportSection />
      <EcoSystemSection />
      <ExpertHelpSection />
      <ReviewsSection />
      <FAQSection />
      <CTABannerSection />
    </main>
  );
}
