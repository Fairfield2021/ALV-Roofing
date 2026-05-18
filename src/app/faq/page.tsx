import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import FAQAccordion from '@/components/sections/FAQAccordion'
import CTABand from '@/components/sections/CTABand'
import SchemaScript from '@/components/ui/SchemaScript'
import { generalFaqs } from '@/data/faqs'
import { buildFAQSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Roofing FAQs | ALV Roofing Houston — Common Questions Answered',
  description:
    'Answers to the most common Houston roofing questions — costs, insurance claims, repair vs. replacement, materials, warranties, and more. From ALV Roofing, Houston\'s top-rated contractor.',
  alternates: {
    canonical: 'https://alvroofing.com/faq',
  },
  openGraph: {
    title: 'Roofing FAQs | ALV Roofing Houston',
    description:
      'Everything you need to know about Houston roofing — answered honestly by a GAF Master Elite certified contractor with 400+ five-star reviews.',
    url: 'https://alvroofing.com/faq',
    siteName: 'ALV Roofing',
    locale: 'en_US',
    type: 'website',
  },
}

export default function FAQPage() {
  const faqSchema = buildFAQSchema(generalFaqs)

  return (
    <>
      <SchemaScript schema={faqSchema} />
      <Hero
        eyebrow="Frequently Asked Questions"
        heading="Roofing FAQs"
        description="Honest answers to the most common Houston roofing questions — from a GAF Master Elite certified contractor with over a decade of experience protecting Houston homes."
      />
      <TrustBar />
      <FAQAccordion faqs={generalFaqs} />

      {/* Additional FAQ content for SEO */}
      <section className="bg-dark-800 py-16 lg:py-20 border-t border-dark-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="font-body text-xs font-semibold text-brand-red uppercase tracking-widest mb-4">
            More Resources
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-neutral-100 uppercase leading-tight mb-6">
            Houston Roofing: What You Should Know
          </h2>
          <div className="space-y-5 font-body text-neutral-400 leading-relaxed">
            <p>
              Houston&apos;s climate presents unique roofing challenges. The combination of intense summer heat
              (attic temps exceeding 160°F), 50+ inches of annual rainfall, high humidity, and regular severe
              weather — including hail, high winds, and hurricane threats — means Houston roofs face more
              wear than in most parts of the country.
            </p>
            <p>
              A standard asphalt shingle roof that lasts 25 years in a mild climate may only last 15–18 years
              in Houston without proper ventilation and premium materials. This is why ALV Roofing exclusively
              installs GAF and Owens Corning shingles with Class 4 impact resistance ratings — they are
              specifically engineered to withstand the conditions Houston roofs face every year.
            </p>
            <p>
              Texas homeowners insurance policies generally cover roof damage caused by wind, hail, and
              storm events. However, policies vary in their specific coverage terms — some have roof
              replacement cost coverage, others have actual cash value clauses that factor in depreciation.
              Understanding your policy before a storm hits is critical. ALV Roofing can help you review
              your coverage and ensure you are positioned to receive the full benefit you are entitled to.
            </p>
            <p>
              If you have additional questions not covered here, please call{' '}
              <a href="tel:2543748326" className="text-brand-red hover:text-neutral-100 transition-colors duration-200">
                254-FRG-TEAM
              </a>{' '}
              or visit our{' '}
              <a href="/contact" className="text-brand-red hover:text-neutral-100 transition-colors duration-200">
                contact page
              </a>
              . We are happy to answer any question — no commitment required.
            </p>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
