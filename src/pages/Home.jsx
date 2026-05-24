import HeroSection from "../components/home/HeroSection";
import AreasSection from "../components/home/AreasSection";
import ServicesSection from "../components/home/ServicesSection";
import DirectorySection from "../components/home/DirectorySection";
import AboutSection from "../components/home/AboutSection";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <DirectorySection />
      <AreasSection />
      <AboutSection />
     
    </div>
  );
}
