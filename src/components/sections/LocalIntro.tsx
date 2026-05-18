import type { Service } from '@/data/services'
import type { City } from '@/data/cities'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

interface LocalIntroProps {
  service: Service
  city: City
}

export default function LocalIntro({ service, city }: LocalIntroProps) {
  const neighborhoodList = city.neighborhoods.join(', ')
  const firstNeighborhood = city.neighborhoods[0]
  const secondNeighborhood = city.neighborhoods[1] ?? city.neighborhoods[0]

  return (
    <section className="bg-dark-900 py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <SectionEyebrow text={`${city.name}, Texas`} />
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-neutral-100 uppercase mt-4 mb-8 leading-tight">
          Expert {service.name} in {city.name}
        </h2>

        <div className="space-y-5 font-body text-neutral-400 leading-relaxed text-base sm:text-lg">
          <p>
            When Houston area homeowners in <strong className="text-neutral-200">{city.name}</strong> need
            reliable {service.name.toLowerCase()}, ALV Roofing is the contractor they trust. Serving{' '}
            {city.county} County for over a decade, our crews are familiar with the specific weather patterns,
            building codes, and HOA requirements that affect roofing projects throughout {city.name} and the
            surrounding area.
          </p>

          <p>
            {city.name} sits in one of the most storm-active regions of Texas. Severe hail, high winds, and
            tropical systems regularly impact homes across neighborhoods like{' '}
            <strong className="text-neutral-200">{firstNeighborhood}</strong> and{' '}
            <strong className="text-neutral-200">{secondNeighborhood}</strong>. Our team responds quickly —
            often same-day — to assess damage, document conditions for insurance, and begin work as soon as
            material delivery allows.
          </p>

          <p>
            Our {service.name.toLowerCase()} work in {city.name} covers the full spectrum of residential and
            light commercial properties. Whether you live in the established subdivisions near{' '}
            {neighborhoodList.length > 60 ? neighborhoodList.slice(0, 60) + '…' : neighborhoodList}, we bring
            the same GAF Master Elite standards and{' '}
            <strong className="text-neutral-200">5-year workmanship warranty</strong> to every job. Every crew
            carries workers compensation coverage — protecting you from liability the moment work begins on your
            property.
          </p>

          <p>
            As a licensed RCAT contractor with $2M in general liability insurance, ALV Roofing is fully
            qualified to work anywhere in {city.county} County. We have completed hundreds of projects across{' '}
            {city.name} and maintain a{' '}
            <strong className="text-neutral-200">4.9-star rating on Google</strong> with over 400 verified
            reviews. When it comes to {service.name.toLowerCase()} in {city.name}, Texas, there is no more
            trusted name than ALV Roofing.
          </p>

          <p>
            We offer <strong className="text-neutral-200">free same-day inspections</strong> throughout{' '}
            {city.name}. Call{' '}
            <a href="tel:2543748326" className="text-brand-red hover:text-neutral-100 transition-colors duration-200">
              254-FRG-TEAM
            </a>{' '}
            to schedule your no-obligation estimate, or fill out the form on this page and we will contact you
            within 15 minutes.
          </p>
        </div>
      </div>
    </section>
  )
}
