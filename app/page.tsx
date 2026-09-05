import AnnouncementBar from '@/components/AnnouncementBar'
import PrimaryNavigation from '@/components/PrimaryNavigation'
import SecondaryNavigation from '@/components/SecondaryNavigation'
import HeroSection from '@/components/HeroSection'
import SocialProofStrip from '@/components/SocialProofStrip'
import ProblemStatement from '@/components/ProblemStatement'
import ProcessStages from '@/components/ProcessStages'
import CaseStudies from '@/components/CaseStudies'
import Services from '@/components/Services'
import AiDifferentiator from '@/components/AiDifferentiator'
import Testimonials from '@/components/Testimonials'
import FaqSection from '@/components/FaqSection'
import FinalCta from '@/components/FinalCta'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-surface">
      <AnnouncementBar />
      <PrimaryNavigation />
      <SecondaryNavigation />
      <HeroSection />
      <SocialProofStrip />
      <ProblemStatement />
      <ProcessStages />
      <CaseStudies />
      <Services />
      <AiDifferentiator />
      <Testimonials />
      <FaqSection />
      <FinalCta />
      <Footer />
    </main>
  )
}
