import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { services } from '@/data/services'
import { cities } from '@/data/cities'
import { serviceFaqs, generalFaqs } from '@/data/faqs'
import { neighborhoods, neighborhoodsByCity } from '@/data/neighborhoods'
import TrustBar from '@/components/sections/TrustBar'
import FAQAccordion from '@/components/sections/FAQAccordion'
import CTABand from '@/components/sections/CTABand'
import SchemaScript from '@/components/ui/SchemaScript'
import { buildLocalBusinessSchema } from '@/lib/schema'

export async function generateStaticParams() {
  const params: { service: string; city: string; neighborhood: string }[] = []
  for (const service of services) {
    for (const city of cities) {
      const cityNeighborhoods = neighborhoodsByCity[city.slug] ?? []
      for (const hood of cityNeighborhoods) {
        params.push({ service: service.slug, city: city.slug, neighborhood: hood.slug })
      }
    }
  }
  return params
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string; city: string; neighborhood: string }>
}): Promise<Metadata> {
  const { service: serviceSlug, city: citySlug, neighborhood: neighborhoodSlug } = await params

  const service = services.find((s) => s.slug === serviceSlug)
  const city = cities.find((c) => c.slug === citySlug)
  const hood = neighborhoods.find(
    (n) => n.slug === neighborhoodSlug && n.citySlug === citySlug
  )

  if (!service || !city || !hood) return {}

  const title = `${hood.name} ${service.name} | ${city.name} TX | ALV Roofing`
  const description = `Expert ${service.name.toLowerCase()} in ${hood.name}, ${city.name}, TX. ALV Roofing serves ${hood.name} homeowners with free inspections, licensed crews, and same-day estimates. Call 254-FRG-TEAM.`
  const canonicalUrl = `https://alvroofing.com/${service.slug}/${city.slug}/${hood.slug}`

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'ALV Roofing',
      locale: 'en_US',
      type: 'website',
    },
  }
}

export default async function NeighborhoodServicePage({
  params,
}: {
  params: Promise<{ service: string; city: string; neighborhood: string }>
}) {
  const { service: serviceSlug, city: citySlug, neighborhood: neighborhoodSlug } = await params

  const service = services.find((s) => s.slug === serviceSlug)
  const city = cities.find((c) => c.slug === citySlug)
  const hood = neighborhoods.find(
    (n) => n.slug === neighborhoodSlug && n.citySlug === citySlug
  )

  if (!service || !city || !hood) notFound()

  // Build FAQs: service-specific first, then fill from general up to 6 total
  const specificFaqs = serviceFaqs[service.slug] ?? []
  const combined = [
    ...specificFaqs,
    ...generalFaqs.filter((gf) => !specificFaqs.some((sf) => sf.q === gf.q)),
  ].slice(0, 6)

  const neighborhoodSchema = {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    name: 'ALV Roofing',
    telephone: '+12543748326',
    areaServed: { '@type': 'Place', name: `${hood.name}, ${city.name}, TX` },
    url: `https://alvroofing.com/${service.slug}/${city.slug}/${hood.slug}`,
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '400' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.name} in ${hood.name}, ${city.name}, TX`,
    },
    priceRange: service.priceRange,
  }

  const localBusinessSchema = buildLocalBusinessSchema()

  const otherNeighborhoods = (neighborhoodsByCity[city.slug] ?? []).filter(
    (n) => n.slug !== hood.slug
  )

  return (
    <>
      <SchemaScript schema={neighborhoodSchema} />
      <SchemaScript schema={localBusinessSchema} />

      {/* Lightweight hero — no video, neighborhood-specific */}
      <section className="bg-dark-900 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-800 to-dark-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-body text-brand-red uppercase tracking-widest text-sm font-semibold mb-3">
            {city.name}, TX &middot; {hood.county} County
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-neutral-100 uppercase leading-tight mb-6">
            {service.name}
            <br />
            {hood.name}
          </h1>
          <p className="font-body text-neutral-400 text-lg max-w-2xl leading-relaxed mb-8">
            Expert {service.name.toLowerCase()} in {hood.name}, {city.name}.{' '}
            {hood.localNote} Serving {hood.name} and surrounding {city.name}{' '}
            neighborhoods since 2015.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:2543748326"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-body font-bold px-8 py-4 uppercase tracking-wider transition-colors"
            >
              Call 254-FRG-TEAM
            </a>
            <Link
              href={`/${service.slug}/${city.slug}`}
              className="inline-flex items-center gap-2 border border-neutral-600 hover:border-brand-red text-neutral-300 hover:text-white font-body px-8 py-4 uppercase tracking-wider transition-colors text-sm"
            >
              All {service.name} in {city.name} &rarr;
            </Link>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Neighborhood-specific content */}
      <section className="bg-dark-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="font-body text-brand-red text-xs uppercase tracking-widest font-semibold mb-3">
                Local Expertise
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-neutral-100 uppercase mb-6">
                {service.name} Specialists in {hood.name}
              </h2>
              <div className="font-body text-neutral-400 space-y-4 leading-relaxed">
                <p>{hood.localNote}</p>
                <p>
                  ALV Roofing has completed hundreds of {service.name.toLowerCase()} projects
                  throughout {hood.name} and the greater {city.name} area. Our crews know the
                  local building codes, HOA requirements, and weather patterns that affect
                  roofing in this part of {hood.county} County.
                </p>
                <p>
                  We offer free inspections for {hood.name} homeowners. Call us today at
                  254-FRG-TEAM or use our online form to schedule.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Quick facts card */}
              <div className="bg-dark-700 border border-dark-500 p-6">
                <h3 className="font-display text-xl text-neutral-100 uppercase mb-4">
                  Quick Facts
                </h3>
                <dl className="space-y-3">
                  <div className="flex justify-between text-sm font-body">
                    <dt className="text-neutral-600">Neighborhood</dt>
                    <dd className="text-neutral-200 font-semibold">{hood.name}</dd>
                  </div>
                  <div className="flex justify-between text-sm font-body">
                    <dt className="text-neutral-600">City</dt>
                    <dd className="text-neutral-200 font-semibold">{city.name}, TX</dd>
                  </div>
                  <div className="flex justify-between text-sm font-body">
                    <dt className="text-neutral-600">County</dt>
                    <dd className="text-neutral-200 font-semibold">{hood.county} County</dd>
                  </div>
                  <div className="flex justify-between text-sm font-body">
                    <dt className="text-neutral-600">Service</dt>
                    <dd className="text-neutral-200 font-semibold">{service.name}</dd>
                  </div>
                  <div className="flex justify-between text-sm font-body">
                    <dt className="text-neutral-600">Estimate Price</dt>
                    <dd className="text-brand-red font-semibold">{service.priceRange}</dd>
                  </div>
                </dl>
              </div>

              {/* Coordinates card — useful for local SEO signals */}
              {(hood.lat !== undefined && hood.lng !== undefined) && (
                <div className="bg-dark-700 border border-dark-500 p-6">
                  <h3 className="font-display text-xl text-neutral-100 uppercase mb-4">
                    Service Area
                  </h3>
                  <p className="font-body text-sm text-neutral-400 leading-relaxed">
                    ALV Roofing serves {hood.name} and all surrounding streets and
                    sub-divisions within {city.name}, {hood.county} County, TX. We are
                    fully licensed and insured for work anywhere in the greater Houston
                    metropolitan area.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQAccordion faqs={combined} />

      {/* Nearby neighborhoods */}
      {otherNeighborhoods.length > 0 && (
        <section className="bg-dark-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-body text-brand-red text-xs uppercase tracking-widest font-semibold mb-2">
              More Coverage
            </p>
            <h2 className="font-display text-3xl text-neutral-100 uppercase mb-6">
              {service.name} in Other {city.name} Neighborhoods
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              {otherNeighborhoods.slice(0, 8).map((n) => (
                <Link
                  key={n.slug}
                  href={`/${service.slug}/${city.slug}/${n.slug}`}
                  className="group bg-dark-700 border border-dark-500 hover:border-brand-red p-3 transition-all duration-200"
                >
                  <p className="font-body text-sm font-semibold text-neutral-300 group-hover:text-brand-red transition-colors">
                    {n.name}
                  </p>
                  <p className="font-body text-xs text-neutral-600 mt-0.5">
                    {city.name}, TX
                  </p>
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <Link
                href={`/${service.slug}/${city.slug}`}
                className="font-body text-sm text-neutral-400 hover:text-brand-red transition-colors"
              >
                &larr; Back to all {service.name} in {city.name}
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTABand serviceName={service.name} cityName={city.name} />
    </>
  )
}
