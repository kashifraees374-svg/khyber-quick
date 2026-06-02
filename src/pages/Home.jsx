import HeroSection from "../components/home/HeroSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import AreasSection from "../components/home/AreasSection";
import ServicesSection from "../components/home/ServicesSection";
import DirectorySection from "../components/home/DirectorySection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import DeliveryProcess from "../components/home/DeliveryProcess";
import PricingCalculator from "../components/home/PricingCalculator";

import AboutSection from "../components/home/AboutSection";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <HowItWorksSection />
      <ServicesSection />
      <DirectorySection />
      <WhyChooseUs />
      <DeliveryProcess />
      <PricingCalculator />
      <AreasSection />
      <AboutSection />
     
    </div>
  );
}
