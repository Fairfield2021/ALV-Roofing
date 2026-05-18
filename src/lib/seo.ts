import { Metadata } from 'next'
import { Service } from '@/data/services'
import { City } from '@/data/cities'

export function generateCityServiceMetadata(service: Service, city: City): Metadata {
  return {
    title: `${service.name} in ${city.name}, TX | ALV Roofing — Free Estimate`,
    description: `ALV Roofing provides expert ${service.name.toLowerCase()} in ${city.name}, TX. Licensed, insured, 4.9-star rated. Serving ${city.name} since 2015. Call 254-FRG-TEAM for a free same-day estimate.`,
    alternates: {
      canonical: `https://alvroofing.com/${service.slug}/${city.slug}`,
    },
    openGraph: {
      title: `${service.name} in ${city.name}, TX | ALV Roofing`,
      description: `Expert ${service.name.toLowerCase()} in ${city.name}. 4.9 stars, 400+ reviews.`,
      url: `https://alvroofing.com/${service.slug}/${city.slug}`,
      siteName: 'ALV Roofing',
      locale: 'en_US',
      type: 'website',
    },
  }
}

export function generateServiceMetadata(service: Service): Metadata {
  return {
    title: `${service.name} Houston, TX | ALV Roofing — Free Estimate`,
    description: `Expert ${service.name.toLowerCase()} in Houston, TX. ALV Roofing is licensed, insured, and 4.9-star rated with 400+ reviews. ${service.priceRange}. Call 254-FRG-TEAM for a free estimate.`,
    alternates: {
      canonical: `https://alvroofing.com/${service.slug}`,
    },
    openGraph: {
      title: `${service.name} Houston, TX | ALV Roofing`,
      description: `Expert ${service.name.toLowerCase()} in Houston. 4.9 stars, 400+ reviews. ${service.priceRange}.`,
      url: `https://alvroofing.com/${service.slug}`,
      siteName: 'ALV Roofing',
      locale: 'en_US',
      type: 'website',
    },
  }
}
