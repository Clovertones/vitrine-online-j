import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import BonusSection from "@/components/BonusSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <BonusSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
