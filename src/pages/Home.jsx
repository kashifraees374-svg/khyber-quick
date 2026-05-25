import HeroSection from "../components/home/HeroSection";
import AreasSection from "../components/home/AreasSection";
import ServicesSection from "../components/home/ServicesSection";
import DirectorySection from "../components/home/DirectorySection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import DeliveryProcess from "../components/home/DeliveryProcess";
import AboutSection from "../components/home/AboutSection";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <DirectorySection />
      <WhyChooseUs />
      <DeliveryProcess />
      <AreasSection />
      <AboutSection />
     
    </div>
  );
}
