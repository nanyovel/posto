import { IntroSection } from "@/components/home/intro-section";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { ServicesPreview } from "@/components/home/services-preview";
import { CTASection } from "@/components/home/cta-section";
import { HeroSection } from "@/components/home/hero-section v2";
import Newsletter from "@/components/newLetter";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <FeaturedProjects />
      <ServicesPreview />
      <Newsletter />
      <CTASection />
    </>
  );
}
