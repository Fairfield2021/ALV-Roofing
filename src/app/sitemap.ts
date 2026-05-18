import { services } from '@/data/services'
import { cities } from '@/data/cities'
import { neighborhoods } from '@/data/neighborhoods'
import { blogPosts } from '@/data/blog-posts'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://alvroofing.com'
  const now = new Date()

  const cityServiceUrls = services.flatMap(service =>
    cities.map(city => ({
      url: `${base}/${service.slug}/${city.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  )

  const neighborhoodUrls = services.flatMap(service =>
    neighborhoods.map(hood => ({
      url: `${base}/${service.slug}/${hood.citySlug}/${hood.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    }))
  )

  const serviceUrls = services.map(service => ({
    url: `${base}/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const blogUrls = blogPosts.map(post => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const staticUrls = [
    '',
    '/about',
    '/reviews',
    '/contact',
    '/free-quote',
    '/gallery',
    '/financing',
    '/faq',
    '/blog',
  ].map(path => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1.0 : 0.7,
  }))

  return [...staticUrls, ...serviceUrls, ...blogUrls, ...cityServiceUrls, ...neighborhoodUrls]
}
