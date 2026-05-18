import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import ServicesGrid from '@/components/sections/ServicesGrid'
import StatsRow from '@/components/sections/StatsRow'
import ProjectsGallery from '@/components/sections/ProjectsGallery'
import AboutSection from '@/components/sections/AboutSection'
import ReviewsSection from '@/components/sections/ReviewsSection'
import CostEstimator from '@/components/tools/CostEstimator'
import ServiceAreaMap from '@/components/sections/ServiceAreaMap'
import CTABand from '@/components/sections/CTABand'

export const metadata = {
  title: "Houston's Premier Roofing Company | ALV Roofing",
  description:
    "ALV Roofing is Houston's top-rated roofing contractor. Licensed, insured, 4.9-star rated with 400+ reviews. Serving Houston and surrounding areas since 2015. Free estimates — call 254-FRG-TEAM.",
  alternates: {
    canonical: 'https://alvroofing.com',
  },
  openGraph: {
    title: "Houston's Premier Roofing Company | ALV Roofing",
    description:
      'Licensed, insured, 4.9-star rated. Roof replacement, storm damage, hail repair, and more. Serving Houston since 2015.',
    url: 'https://alvroofing.com',
    siteName: 'ALV Roofing',
    locale: 'en_US',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero
        heading="Houston's Premier Roofing Company"
        description="Licensed, insured, 4.9-star rated. Serving Houston since 2015."
      />
      <TrustBar />
      <ServicesGrid />
      <StatsRow />
      <ProjectsGallery />
      <AboutSection />
      <ReviewsSection />
      <CostEstimator />
      <ServiceAreaMap />
      <CTABand />
    </>
  )
}
