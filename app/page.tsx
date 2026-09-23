import PrimaryNavigation from '@/components/PrimaryNavigation'
import HeroSection from '@/components/HeroSection'
import ProblemStatement from '@/components/ProblemStatement'
import ProcessStages from '@/components/ProcessStages'
import CaseStudies from '@/components/CaseStudies'
import Services from '@/components/Services'
import AiDifferentiator from '@/components/AiDifferentiator'
import Testimonials from '@/components/Testimonials'
import FaqSection from '@/components/FaqSection'
import FinalCta from '@/components/FinalCta'
import Footer from '@/components/Footer'
import RevealOnScroll from '@/components/RevealOnScroll'

export default function Home() {
  return (
    <main className="min-h-screen bg-surface">
      <PrimaryNavigation />
      <HeroSection />
      <RevealOnScroll direction="up">
        <ProblemStatement />
      </RevealOnScroll>
      <RevealOnScroll direction="left">
        <ProcessStages />
      </RevealOnScroll>
      <RevealOnScroll direction="right">
        <CaseStudies />
      </RevealOnScroll>
      <RevealOnScroll direction="up">
        <Services />
      </RevealOnScroll>
      <RevealOnScroll direction="left">
        <AiDifferentiator />
      </RevealOnScroll>
      <RevealOnScroll direction="right">
        <Testimonials />
      </RevealOnScroll>
      <RevealOnScroll direction="up">
        <FaqSection />
      </RevealOnScroll>
      <RevealOnScroll direction="up">
        <FinalCta />
      </RevealOnScroll>
      <Footer />
    </main>
  )
}
