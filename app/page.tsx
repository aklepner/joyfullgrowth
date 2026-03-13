import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import GrowthJournalsSignup from "@/components/growth-journals-signup"
import PortfolioSection from "@/components/portfolio-section"
import VisionSection from "@/components/vision-section"
import LeadershipCTAFooter from "@/components/leadership-cta-footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <GrowthJournalsSignup />
      <section id="portfolio">
        <PortfolioSection />
      </section>
      <section id="vision">
        <VisionSection />
      </section>
      <section id="leadership">
        <LeadershipCTAFooter />
      </section>
    </main>
  )
}
