import Link from 'next/link'
import { ScrambleText } from '@/components/ui/ScrambleText'

interface CTABandProps {
  serviceName?: string
  cityName?: string
}

export default function CTABand({ serviceName, cityName }: CTABandProps) {
  const heading =
    serviceName && cityName
      ? `Ready for ${serviceName} in ${cityName}?`
      : serviceName
      ? `Ready for Expert ${serviceName}?`
      : cityName
      ? `Ready to Protect Your ${cityName} Home?`
      : 'Ready for a Free Estimate?'

  return (
    <section className="bg-dark-800 py-16 lg:py-20 border-y border-dark-700">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-neutral-100 uppercase leading-tight mb-4">
          {heading}
        </h2>
        <p className="font-body text-neutral-400 text-base sm:text-lg mb-8">
          Call or book online — we respond within 15 minutes during business hours.
        </p>

        {/* Big phone number */}
        <a
          href="tel:2543748326"
          className="block font-display text-5xl sm:text-6xl lg:text-7xl text-brand-red hover:text-brand-red-dark transition-colors duration-200 leading-none mb-10"
        >
          <ScrambleText text="254-FRG-TEAM" aria-label="254-FRG-TEAM" />
        </a>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/free-quote"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-red hover:bg-brand-red-dark text-white font-display text-base uppercase tracking-widest transition-colors duration-200"
          >
            Get Free Estimate
          </Link>
          <a
            href="tel:2543748326"
            className="inline-flex items-center justify-center px-8 py-4 border border-brand-red text-brand-red hover:bg-brand-red hover:text-white font-display text-base uppercase tracking-widest transition-colors duration-200"
          >
            Call Now
          </a>
        </div>

        {/* Micro trust */}
        <p className="mt-8 font-body text-xs text-neutral-600 uppercase tracking-wide">
          Licensed &amp; Insured · GAF Master Elite · Workers Comp on Every Crew
        </p>
      </div>
    </section>
  )
}
