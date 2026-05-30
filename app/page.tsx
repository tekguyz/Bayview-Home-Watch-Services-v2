import { Nav } from "@/components/layout/Nav";
import { HeroSection } from "@/sections/HeroSection";
import { ProblemSection } from "@/sections/ProblemSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { HowItWorksSection } from "@/sections/HowItWorksSection";
import { AboutSection } from "@/sections/AboutSection";
import { ServiceAreaSection } from "@/sections/ServiceAreaSection";
import { ContactSection } from "@/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { MotionSafe } from "@/components/atoms/MotionSafe";

export default function Home() {
  return (
    <>
      <Nav />
      <MotionSafe>
        <main>
          <HeroSection />
          <ProblemSection />
          <ServicesSection />
          <HowItWorksSection />
          <AboutSection />
          <ServiceAreaSection />
          <ContactSection />
        </main>
      </MotionSafe>
      <Footer />
    </>
  );
}
