import Link from 'next/link'
import { services } from '@/data/services'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

interface ServicesGridProps {
  limit?: number
}

export default function ServicesGrid({ limit }: ServicesGridProps) {
  const displayed = limit ? services.slice(0, limit) : services

  return (
    <section className="bg-dark-900 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <SectionEyebrow text="Our Services" />
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-neutral-100 uppercase mt-3 leading-tight">
            14 Roofing Services for<br className="hidden sm:block" /> Houston Homeowners
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {displayed.map((svc) => (
            <Link
              key={svc.slug}
              href={`/${svc.slug}`}
              className="group flex flex-col gap-3 p-5 sm:p-6 bg-dark-700 hover:bg-dark-600 border border-dark-500 hover:border-brand-red transition-all duration-200"
            >
              <span className="text-3xl sm:text-4xl leading-none" aria-hidden="true">
                {svc.icon}
              </span>
              <div className="flex-1">
                <h3 className="font-display text-lg sm:text-xl text-neutral-100 uppercase leading-tight mb-1">
                  {svc.name}
                </h3>
                <p className="font-body text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {svc.description}
                </p>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="font-body text-xs text-neutral-600">{svc.priceRange}</span>
                <span className="text-brand-red font-body text-base translate-x-0 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
