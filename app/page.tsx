import { HeroSection } from "@/components/home/hero-section"
import { IntroSection } from "@/components/home/intro-section"
import { FeaturedProjects } from "@/components/home/featured-projects"
import { ServicesPreview } from "@/components/home/services-preview"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <FeaturedProjects />
      <ServicesPreview />
      <CTASection />
    </>
  )
}
