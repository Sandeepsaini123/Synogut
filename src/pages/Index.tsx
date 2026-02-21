import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import NaturalSolutionSection from "@/components/NaturalSolutionSection";
import ProductSection from "@/components/ProductSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <NaturalSolutionSection />
      <ProductSection />
      <BenefitsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
