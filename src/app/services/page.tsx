import type { Metadata } from 'next'
import { services } from '@/data/services'
import Link from 'next/link'
import TrustBar from '@/components/sections/TrustBar'
import CTABand from '@/components/sections/CTABand'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

export const metadata: Metadata = {
  title: 'Roofing Services Houston, TX | ALV Roofing',
  description:
    'ALV Roofing offers 14 professional roofing services across Houston, TX — roof replacement, repair, hail damage, storm damage, metal roofing, and more. Licensed, insured, 4.9 stars. Call 254-FRG-TEAM.',
  alternates: { canonical: 'https://alvroofing.com/services' },
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow text="What We Do" />
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-neutral-100 uppercase mt-4 mb-6 leading-tight">
            All Roofing Services
          </h1>
          <p className="font-body text-neutral-400 text-lg max-w-2xl leading-relaxed">
            From emergency repairs to full replacements — ALV Roofing handles every roofing need
            across Houston. Licensed, insured, and backed by the strongest warranties in the industry.
          </p>
        </div>
      </section>

      <TrustBar />

      {/* Services grid */}
      <section className="bg-dark-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="group bg-dark-700 hover:bg-dark-600 border border-dark-500 hover:border-brand-red p-6 flex flex-col gap-4 transition-all duration-200"
              >
                <div className="flex items-start justify-between">
                  <span className="text-4xl">{service.icon}</span>
                  <span className="text-brand-red font-display text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    →
                  </span>
                </div>
                <div>
                  <h2 className="font-display text-xl text-neutral-100 uppercase group-hover:text-brand-red transition-colors duration-200">
                    {service.name}
                  </h2>
                  <p className="font-body text-sm text-neutral-400 mt-1 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="mt-auto pt-3 border-t border-dark-500">
                  <span className="font-body text-xs text-neutral-400 uppercase tracking-wide">
                    Typical cost:{' '}
                    <span className="text-neutral-200 font-semibold">{service.priceRange}</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
