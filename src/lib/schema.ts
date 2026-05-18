export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    name: 'ALV Roofing',
    url: 'https://alvroofing.com',
    telephone: '254-FRG-TEAM',
    email: 'mac@alvroofing.com',
    address: { '@type': 'PostalAddress', addressLocality: 'Houston', addressRegion: 'TX', addressCountry: 'US' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '400' },
    openingHours: 'Mo-Su 00:00-23:59',
    priceRange: '$$',
    areaServed: 'Houston Metropolitan Area, TX',
    hasCredential: [
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'GAF Master Elite Contractor' },
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Owens Corning Platinum Preferred' },
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'BBB A+ Accredited' },
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'RCAT Licensed' },
    ],
  }
}

export function buildCityServiceSchema(serviceName: string, cityName: string, priceRange: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    name: 'ALV Roofing',
    url: 'https://alvroofing.com',
    telephone: '254-FRG-TEAM',
    email: 'mac@alvroofing.com',
    areaServed: { '@type': 'City', name: cityName, addressRegion: 'TX' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '400' },
    hasOfferCatalog: { '@type': 'OfferCatalog', name: `${serviceName} in ${cityName}, TX` },
    priceRange,
  }
}

export function buildFAQSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

export function buildArticleSchema(title: string, date: string, author: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    datePublished: date,
    author: { '@type': 'Person', name: author },
    publisher: {
      '@type': 'Organization',
      name: 'ALV Roofing',
      url: 'https://alvroofing.com',
    },
  }
}
