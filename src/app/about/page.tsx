import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import AboutSection from '@/components/sections/AboutSection'
import StatsRow from '@/components/sections/StatsRow'
import ReviewsSection from '@/components/sections/ReviewsSection'
import CTABand from '@/components/sections/CTABand'

export const metadata: Metadata = {
  title: 'About ALV Roofing | Houston\'s Trusted Roofing Contractor Since 2015',
  description:
    'Learn about ALV Roofing — Houston\'s GAF Master Elite certified roofing contractor. Over 10 years serving Harris County and greater Houston with 400+ five-star reviews. RCAT licensed and fully insured.',
  alternates: {
    canonical: 'https://alvroofing.com/about',
  },
  openGraph: {
    title: 'About ALV Roofing | Houston\'s Trusted Roofing Contractor',
    description:
      'GAF Master Elite certified. BBB A+ rated. Serving Houston since 2015 with 400+ five-star reviews. Meet the team behind Houston\'s most trusted roofing company.',
    url: 'https://alvroofing.com/about',
    siteName: 'ALV Roofing',
    locale: 'en_US',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="Our Story"
        heading="About ALV Roofing"
        description="Founded in Houston in 2015, ALV Roofing has grown into one of the most trusted roofing contractors in the greater Houston area — powered by honest work, premium materials, and a team that genuinely cares about protecting your home."
      />
      <TrustBar />
      <AboutSection />
      <StatsRow />

      {/* Extended about content */}
      <section className="bg-dark-800 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="font-body text-xs font-semibold text-brand-red uppercase tracking-widest mb-4">
            Our Mission
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-neutral-100 uppercase leading-tight mb-8">
            Built on Honesty, Backed by Results
          </h2>
          <div className="space-y-6 font-body text-neutral-400 leading-relaxed text-base sm:text-lg">
            <p>
              ALV Roofing was founded with a single principle: give Houston homeowners the same quality roof
              you would put on your own home. Our founder, Mac A., started the company after years in the
              roofing industry watching contractors cut corners, use inferior materials, and disappear after
              collecting payment. He set out to build a different kind of company.
            </p>
            <p>
              Today, ALV Roofing holds a <strong className="text-neutral-200">GAF Master Elite certification</strong> —
              a designation earned by fewer than 2% of roofing contractors in North America. This certification
              requires background checks, licensing verification, ongoing training, and a commitment to
              customer satisfaction. It allows us to offer the{' '}
              <strong className="text-neutral-200">GAF Golden Pledge warranty</strong>, the strongest
              manufacturer-backed warranty available, covering both materials and workmanship for up to 25 years.
            </p>
            <p>
              We are also an <strong className="text-neutral-200">Owens Corning Platinum Preferred Contractor</strong>,
              a <strong className="text-neutral-200">BBB A+ Accredited Business</strong>, and hold a current
              RCAT (Roofing Contractors Association of Texas) license. Every ALV Roofing crew carries
              workers compensation coverage — meaning if something happens on your property, you are fully
              protected. We carry $2 million in general liability insurance, and we will provide proof of
              any credential on request.
            </p>
            <p>
              Houston storms are relentless. We have served homeowners through multiple major hail events,
              Hurricane Harvey, Hurricane Beryl, and countless severe thunderstorm seasons. Our insurance
              claim process has saved Houston homeowners millions of dollars — by documenting damage
              thoroughly, working directly with adjusters, and ensuring every client receives the full
              settlement they are entitled to. Most clients with covered claims pay only their deductible.
            </p>
            <p>
              With over 400 verified five-star reviews on Google and a 4.9-star rating, our reputation speaks
              for itself. We are proud to serve Katy, Sugar Land, The Woodlands, Pearland, Cypress, Spring,
              and dozens of other communities across the greater Houston metropolitan area. When your roof
              needs attention, we are the team your neighbors call.
            </p>
          </div>
        </div>
      </section>

      <ReviewsSection />
      <CTABand />
    </>
  )
}
