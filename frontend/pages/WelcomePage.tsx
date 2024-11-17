import BusinessStrategy from '@/components/BusinessStrategy'
import FaqSection from '@/components/FaqSection'
import HeroSection from '@/components/HeroSection'
import WhyGlobuy from '@/components/WhyGlobuy'

function WelcomePage() {
  return (
    <>
      <HeroSection />
      <WhyGlobuy />
      <BusinessStrategy />
      <FaqSection />
    </>
  )
}

export default WelcomePage