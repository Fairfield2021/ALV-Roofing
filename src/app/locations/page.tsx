import type { Metadata } from 'next'
import { cities } from '@/data/cities'
import { services } from '@/data/services'
import Link from 'next/link'
import TrustBar from '@/components/sections/TrustBar'
import CTABand from '@/components/sections/CTABand'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

export const metadata: Metadata = {
  title: 'Roofing Service Areas Houston, TX | ALV Roofing',
  description:
    'ALV Roofing serves 52 cities across Greater Houston — Katy, Sugar Land, The Woodlands, Pearland, Cypress, Spring, and more. Licensed, insured, 4.9 stars. Call 254-FRG-TEAM.',
  alternates: { canonical: 'https://alvroofing.com/locations' },
}

// Group cities into suburbs and Houston neighborhoods
const suburbs = cities.slice(0, 32)
const neighborhoods = cities.slice(32)

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow text="Service Area" />
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-neutral-100 uppercase mt-4 mb-6 leading-tight">
            52 Cities Across<br className="hidden sm:block" /> Greater Houston
          </h1>
          <p className="font-body text-neutral-400 text-lg max-w-2xl leading-relaxed">
            From Katy to Galveston, The Woodlands to League City — ALV Roofing serves the entire
            Houston metro area. Same crew, same quality, same 4.9-star service wherever you are.
          </p>
        </div>
      </section>

      <TrustBar />

      {/* Suburbs */}
      <section className="bg-dark-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow text="Houston Suburbs" />
          <h2 className="font-display text-3xl sm:text-4xl text-neutral-100 uppercase mt-3 mb-8">
            Suburbs &amp; Surrounding Cities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {suburbs.map((city) => (
              <div key={city.slug} className="bg-dark-700 border border-dark-500 p-5">
                <h3 className="font-display text-lg text-neutral-100 uppercase mb-1">{city.name}</h3>
                <p className="font-body text-xs text-neutral-400 mb-3">{city.county} County, TX</p>
                <div className="flex flex-wrap gap-1.5">
                  {services.slice(0, 4).map((svc) => (
                    <Link
                      key={svc.slug}
                      href={`/${svc.slug}/${city.slug}`}
                      className="font-body text-xs text-neutral-400 hover:text-brand-red hover:underline transition-colors"
                    >
                      {svc.name}
                    </Link>
                  ))}
                  <Link
                    href={`/roof-replacement/${city.slug}`}
                    className="font-body text-xs text-brand-red hover:text-white transition-colors font-semibold"
                  >
                    + More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Houston Neighborhoods */}
      <section className="bg-dark-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow text="Inside Houston" />
          <h2 className="font-display text-3xl sm:text-4xl text-neutral-100 uppercase mt-3 mb-8">
            Houston Neighborhoods
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {neighborhoods.map((city) => (
              <div key={city.slug} className="bg-dark-700 border border-dark-500 p-5">
                <h3 className="font-display text-lg text-neutral-100 uppercase mb-1">{city.name}</h3>
                <p className="font-body text-xs text-neutral-400 mb-3">{city.county} County, TX</p>
                <div className="flex flex-wrap gap-1.5">
                  {services.slice(0, 4).map((svc) => (
                    <Link
                      key={svc.slug}
                      href={`/${svc.slug}/${city.slug}`}
                      className="font-body text-xs text-neutral-400 hover:text-brand-red hover:underline transition-colors"
                    >
                      {svc.name}
                    </Link>
                  ))}
                  <Link
                    href={`/roof-replacement/${city.slug}`}
                    className="font-body text-xs text-brand-red hover:text-white transition-colors font-semibold"
                  >
                    + More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
