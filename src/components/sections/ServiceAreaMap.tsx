import Link from 'next/link'
import { cities } from '@/data/cities'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

export default function ServiceAreaMap() {
  return (
    <section className="bg-dark-700 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <SectionEyebrow text="Service Area" />
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-neutral-100 uppercase mt-3 leading-tight">
            Serving 52 Cities Across Greater Houston
          </h2>
          <p className="font-body text-neutral-400 mt-4 max-w-2xl mx-auto">
            From Katy to Galveston, Conroe to League City — ALV Roofing covers the entire Houston metro. Free
            same-day estimates available in every city listed below.
          </p>
        </div>

        {/* City pill grid */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/roof-replacement/${city.slug}`}
              className="font-body text-sm text-neutral-300 hover:text-white bg-dark-800 hover:bg-brand-red border border-dark-500 hover:border-brand-red px-4 py-2 rounded transition-all duration-200"
            >
              {city.name}
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="font-body text-neutral-400 text-sm mb-4">
            Don&apos;t see your city? Call us — we likely serve your area.
          </p>
          <a
            href="tel:2543748326"
            className="inline-flex items-center gap-2 font-display text-xl text-brand-red hover:text-neutral-100 uppercase tracking-wide transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.86 13.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012.81 2.68h3a2 2 0 012 1.72c.13.96.36 1.9.71 2.81a2 2 0 01-.45 2.11L6.91 10.46a16 16 0 006.56 6.56l1.14-1.14a2 2 0 012.11-.45c.91.35 1.85.58 2.81.71A2 2 0 0122 17.68v-.76z" />
            </svg>
            254-FRG-TEAM
          </a>
        </div>
      </div>
    </section>
  )
}
