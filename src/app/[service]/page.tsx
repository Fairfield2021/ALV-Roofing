import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { services } from '@/data/services'
import type { City } from '@/data/cities'
import { serviceFaqs, generalFaqs } from '@/data/faqs'
import { generateServiceMetadata } from '@/lib/seo'
import { buildCityServiceSchema } from '@/lib/schema'
import SchemaScript from '@/components/ui/SchemaScript'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import LocalIntro from '@/components/sections/LocalIntro'
import ProcessSteps from '@/components/sections/ProcessSteps'
import ServicesGrid from '@/components/sections/ServicesGrid'
import ReviewsSection from '@/components/sections/ReviewsSection'
import FAQAccordion from '@/components/sections/FAQAccordion'
import CTABand from '@/components/sections/CTABand'

const houstonCity = {
  name: 'Houston',
  slug: 'houston',
  county: 'Harris',
  state: 'TX',
  neighborhoods: ['The Heights', 'Montrose', 'River Oaks', 'Memorial', 'Galleria'],
} as unknown as City

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>
}): Promise<Metadata> {
  const { service: serviceSlug } = await params
  const service = services.find((s) => s.slug === serviceSlug)
  if (!service) return {}
  return generateServiceMetadata(service)
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>
}) {
  const { service: serviceSlug } = await params
  const service = services.find((s) => s.slug === serviceSlug)
  if (!service) notFound()

  const faqs = serviceFaqs[service.slug] ?? generalFaqs.slice(0, 4)
  const schema = buildCityServiceSchema(service.name, 'Houston', service.priceRange)

  return (
    <>
      <SchemaScript schema={schema} />
      <Hero
        eyebrow={service.name}
        heading={`${service.name} in Houston, TX`}
        description={`${service.description}. ALV Roofing is Houston's most trusted contractor for ${service.name.toLowerCase()}. Free same-day estimates — call 254-FRG-TEAM.`}
      />
      <TrustBar />
      <LocalIntro service={service} city={houstonCity} />
      <ProcessSteps serviceName={service.name} cityName="Houston" />
      <ServicesGrid limit={6} />
      <ReviewsSection />
      <FAQAccordion faqs={faqs} />
      <CTABand serviceName={service.name} />
    </>
  )
}
