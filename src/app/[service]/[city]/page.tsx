import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/data/services'
import { cities } from '@/data/cities'
import { neighborhoodsByCity } from '@/data/neighborhoods'
import { generateCityServiceMetadata } from '@/lib/seo'
import { buildCityServiceSchema, buildLocalBusinessSchema } from '@/lib/schema'
import SchemaScript from '@/components/ui/SchemaScript'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import LocalIntro from '@/components/sections/LocalIntro'
import ProcessSteps from '@/components/sections/ProcessSteps'
import ProjectsGallery from '@/components/sections/ProjectsGallery'
import ReviewsSection from '@/components/sections/ReviewsSection'
import FAQAccordion from '@/components/sections/FAQAccordion'
import InternalLinks from '@/components/sections/InternalLinks'
import CTABand from '@/components/sections/CTABand'

export function generateStaticParams() {
  return services.flatMap((s) =>
    cities.map((c) => ({ service: s.slug, city: c.slug }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string; city: string }>
}): Promise<Metadata> {
  const { service: serviceSlug, city: citySlug } = await params
  const service = services.find((s) => s.slug === serviceSlug)
  const city = cities.find((c) => c.slug === citySlug)
  if (!service || !city) return {}
  return generateCityServiceMetadata(service, city)
}

export default async function CityServicePage({
  params,
}: {
  params: Promise<{ service: string; city: string }>
}) {
  const { service: serviceSlug, city: citySlug } = await params
  const service = services.find((s) => s.slug === serviceSlug)
  const city = cities.find((c) => c.slug === citySlug)

  if (!service || !city) notFound()

  const n = city.neighborhoods
  const nb0 = n[0] ?? city.name
  const nb1 = n[1] ?? n[0] ?? city.name

  const dynamicFaqs = [
    {
      q: `How much does ${service.name.toLowerCase()} cost in ${city.name}, TX?`,
      a: `${service.name} in ${city.name} typically runs ${service.priceRange}. The exact cost depends on your roof's size, pitch, and material choice. ALV Roofing offers free, no-obligation estimates — call 254-FRG-TEAM or fill out the form on this page.`,
    },
    {
      q: `How quickly can ALV Roofing respond in ${city.name}?`,
      a: `We offer same-day and next-day inspections throughout ${city.name} and ${city.county} County. For emergency situations, we are available 24/7. Most scheduled projects begin within 3–5 business days of contract signing.`,
    },
    {
      q: `Do you serve all neighborhoods in ${city.name}?`,
      a: `Yes — ALV Roofing serves all of ${city.name}, including ${nb0}, ${nb1}, and surrounding neighborhoods. We are familiar with local HOA requirements, building codes, and the specific weather conditions that affect roofs in ${city.county} County.`,
    },
    {
      q: `Is ALV Roofing licensed to work in ${city.name}, Texas?`,
      a: `Yes. ALV Roofing holds a current RCAT license, carries $2M in general liability insurance, and maintains workers compensation on every crew. We are fully qualified to work on any residential or commercial property in ${city.name} and throughout the greater Houston area.`,
    },
  ]

  const cityServiceSchema = buildCityServiceSchema(service.name, city.name, service.priceRange)
  const localBusinessSchema = buildLocalBusinessSchema()

  return (
    <>
      <SchemaScript schema={cityServiceSchema} />
      <SchemaScript schema={localBusinessSchema} />
      <Hero
        eyebrow={`${service.name} — ${city.name}, TX`}
        heading={`${service.name} in ${city.name}`}
        description={`ALV Roofing provides expert ${service.name.toLowerCase()} throughout ${city.name}, TX. Licensed, insured, and 4.9-star rated. Free same-day estimates — call 254-FRG-TEAM.`}
        showForm={true}
        serviceName={service.name}
        cityName={city.name}
        serviceSlug={service.slug}
        citySlug={city.slug}
      />
      <TrustBar />
      <LocalIntro service={service} city={city} />
      <ProcessSteps serviceName={service.name} cityName={city.name} />
      <ProjectsGallery serviceSlug={service.slug} citySlug={city.slug} serviceName={service.name} cityName={city.name} />
      <ReviewsSection cityName={city.name} serviceName={service.name} />
      <FAQAccordion faqs={dynamicFaqs} />
      {/* Neighborhood pages — third tier of SEO pyramid */}
      {neighborhoodsByCity[city.slug]?.length > 0 && (
        <section className="bg-dark-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-8 bg-brand-red shrink-0" />
              <div>
                <p className="font-body text-xs text-brand-red uppercase tracking-widest font-semibold">Neighborhood Coverage</p>
                <h2 className="font-display text-2xl sm:text-3xl text-neutral-100 uppercase leading-tight">
                  {service.name} by Neighborhood in {city.name}
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
              {neighborhoodsByCity[city.slug].map((hood) => (
                <Link
                  key={hood.slug}
                  href={`/${service.slug}/${city.slug}/${hood.slug}`}
                  className="group bg-dark-700 border border-dark-500 hover:border-brand-red p-3 sm:p-4 flex flex-col gap-1 transition-all duration-200"
                >
                  <span className="font-body text-sm font-semibold text-neutral-200 group-hover:text-brand-red transition-colors leading-tight">{hood.name}</span>
                  <span className="font-body text-xs text-neutral-600">{hood.county} Co.</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <InternalLinks
        currentService={service}
        currentCity={city}
        services={services}
        cities={cities}
      />
      <CTABand serviceName={service.name} cityName={city.name} />
    </>
  )
}
