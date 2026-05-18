import type { Metadata } from 'next'
import LeadForm from '@/components/sections/LeadForm'
import TrustBar from '@/components/sections/TrustBar'

export const metadata: Metadata = {
  title: 'Free Roofing Estimate Houston | ALV Roofing — Same-Day Response',
  description:
    'Get a free, no-obligation roofing estimate in Houston. ALV Roofing responds within 15 minutes during business hours. Licensed, insured, 4.9-star rated. Call 254-FRG-TEAM.',
  alternates: {
    canonical: 'https://alvroofing.com/free-quote',
  },
  openGraph: {
    title: 'Free Roofing Estimate Houston | ALV Roofing',
    description:
      'No obligation, no pressure. Same-day response from Houston\'s most trusted roofing contractor. GAF Master Elite certified.',
    url: 'https://alvroofing.com/free-quote',
    siteName: 'ALV Roofing',
    locale: 'en_US',
    type: 'website',
  },
}

const trustBullets = [
  {
    title: 'Same-Day Response',
    description: 'We respond to all form submissions within 15 minutes during business hours, and same-day for all inspection requests.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'No Obligation',
    description: 'Our estimates are completely free. You are never pressured to commit — we earn your business by providing the best value.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Licensed & Insured',
    description: 'RCAT licensed, $2M general liability, workers comp on every crew. You are fully protected from the moment work begins.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
]

export default function FreeQuotePage() {
  return (
    <div className="bg-dark-900 min-h-screen">
      {/* Minimal hero */}
      <section className="bg-dark-800 border-b border-dark-700 py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="font-body text-xs font-semibold text-brand-red uppercase tracking-widest mb-4">
            Free Estimate
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-neutral-100 uppercase leading-tight mb-5">
            Get Your Free Roofing Estimate
          </h1>
          <p className="font-body text-neutral-400 text-lg leading-relaxed">
            Fill out the form below and a licensed ALV Roofing inspector will contact you within 15 minutes.
            No pressure, no obligation — just an honest assessment of your roof.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {['Free Inspection', 'Same-Day Response', 'No Obligation', 'GAF Master Elite'].map((item) => (
              <span key={item} className="flex items-center gap-1.5 font-body text-xs text-neutral-400">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 lg:py-20">
        <div className="max-w-xl mx-auto px-6 lg:px-8">
          <LeadForm />
          <div className="mt-6 text-center">
            <p className="font-body text-sm text-neutral-500">
              Prefer to call?{' '}
              <a href="tel:2543748326" className="text-brand-red hover:text-neutral-100 transition-colors duration-200 font-semibold">
                254-FRG-TEAM
              </a>
            </p>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Trust bullets */}
      <section className="bg-dark-800 py-16 lg:py-20 border-t border-dark-700">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustBullets.map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red rounded-sm">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl text-neutral-100 uppercase">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
