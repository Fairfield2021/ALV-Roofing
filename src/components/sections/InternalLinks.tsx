'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import type { Service } from '@/data/services'
import type { City } from '@/data/cities'
import { services as allServices } from '@/data/services'
import { cities as allCities, distanceMiles } from '@/data/cities'
import { neighborhoodsByCity } from '@/data/neighborhoods'

interface InternalLinksProps {
  currentService: Service
  currentCity: City
  services: typeof allServices
  cities: typeof allCities
}

// Houston geographic zones — organizes the 52 cities into crawlable regional clusters
const ZONES = [
  {
    label: 'West Houston',
    slug: 'west',
    cities: ['katy', 'sugar-land', 'richmond', 'missouri-city', 'cinco-ranch', 'fulshear', 'stafford', 'brookshire', 'rosenberg'],
  },
  {
    label: 'North Houston',
    slug: 'north',
    cities: ['the-woodlands', 'spring', 'conroe', 'tomball', 'magnolia', 'kingwood', 'atascocita', 'humble'],
  },
  {
    label: 'South Houston',
    slug: 'south',
    cities: ['pearland', 'league-city', 'friendswood', 'alvin', 'la-marque', 'galveston', 'webster', 'clear-lake'],
  },
  {
    label: 'East Houston',
    slug: 'east',
    cities: ['baytown', 'pasadena', 'deer-park'],
  },
  {
    label: 'Inner Houston',
    slug: 'inner',
    cities: ['the-heights', 'montrose', 'river-oaks', 'galleria', 'energy-corridor', 'west-university', 'bellaire', 'memorial', 'midtown'],
  },
]

// Animated counter — counts up from 0 to target when in view
function StatCounter({ value, suffix = '', label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1400
    const step = 16
    const increment = value / (duration / step)
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, step)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <div ref={ref} className="flex flex-col items-center gap-1 px-6 py-4">
      <span className="font-display text-3xl sm:text-4xl text-brand-red tracking-wider leading-none">
        {count}{suffix}
      </span>
      <span className="font-body text-xs text-neutral-400 uppercase tracking-widest whitespace-nowrap">
        {label}
      </span>
    </div>
  )
}

// City card — key SEO element: county label, star rating, direct service link
function CityCard({ city, serviceSlug, serviceName }: { city: City; serviceSlug: string; serviceName: string }) {
  return (
    <Link
      href={`/${serviceSlug}/${city.slug}`}
      className="group relative bg-dark-700 border border-dark-500 hover:border-brand-red p-4 flex flex-col gap-2 transition-all duration-200 overflow-hidden"
    >
      {/* Red glow on hover */}
      <div className="absolute inset-0 bg-brand-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />

      {/* Top row: city name + arrow */}
      <div className="flex items-start justify-between gap-2">
        <h4 className="font-display text-lg text-neutral-100 uppercase leading-tight group-hover:text-brand-red transition-colors duration-200">
          {city.name}
        </h4>
        <span className="text-brand-red opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-200 text-sm shrink-0 mt-0.5">
          →
        </span>
      </div>

      {/* County label */}
      <p className="font-body text-xs text-neutral-600 leading-none">
        {city.county} County, TX
      </p>

      {/* Star rating — E-E-A-T trust signal */}
      <div className="flex items-center gap-1 mt-auto pt-2 border-t border-dark-600">
        <div className="flex gap-0.5">
          {[1,2,3,4,5].map(i => (
            <svg key={i} className="w-2.5 h-2.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="font-body text-xs text-neutral-400">4.9 · ALV Roofing</span>
      </div>
    </Link>
  )
}

export default function InternalLinks({ currentService, currentCity, services, cities }: InternalLinksProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })

  // Sort by real geographic distance from current city, take 8 nearest
  const nearbyCities = (cities as readonly City[])
    .filter(c => c.slug !== currentCity.slug)
    .slice()
    .sort((a, b) =>
      distanceMiles(currentCity.lat, currentCity.lng, a.lat, a.lng) -
      distanceMiles(currentCity.lat, currentCity.lng, b.lat, b.lng)
    )
    .slice(0, 8)

  const otherServices = (services as readonly Service[])
    .filter(s => s.slug !== currentService.slug)

  const totalPages = services.length * cities.length

  const currentCityHoods = neighborhoodsByCity[currentCity.slug] ?? []

  return (
    <section ref={sectionRef} className="bg-dark-900 border-t border-dark-700 overflow-hidden">

      {/* ── STAT BAR ──────────────────────────────────────────────────────── */}
      <div className="border-b border-dark-700 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-stretch justify-center divide-x divide-dark-700 overflow-x-auto">
            <StatCounter value={cities.length} label="Cities Served" />
            <StatCounter value={services.length} label="Services Offered" />
            <StatCounter value={totalPages} label="Location Pages" />
            <div className="flex flex-col items-center gap-1 px-6 py-4 shrink-0">
              <span className="font-display text-3xl sm:text-4xl text-brand-red tracking-wider leading-none">4.9★</span>
              <span className="font-body text-xs text-neutral-400 uppercase tracking-widest whitespace-nowrap">Google Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ──────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16">

          {/* LEFT — City cards */}
          <div>
            {/* Section label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1 h-8 bg-brand-red shrink-0" />
              <div>
                <p className="font-body text-xs text-brand-red uppercase tracking-widest font-semibold">Coverage Area</p>
                <h3 className="font-display text-2xl sm:text-3xl text-neutral-100 uppercase leading-tight">
                  {currentService.name} Near {currentCity.name}
                </h3>
              </div>
            </div>

            {/* City cards grid — all links in static HTML for full crawlability */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-2 sm:gap-3">
              {nearbyCities.map((city, i) => (
                <motion.div
                  key={city.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.35, delay: i * 0.06, ease: 'easeOut' }}
                >
                  <CityCard
                    city={city}
                    serviceSlug={currentService.slug}
                    serviceName={currentService.name}
                  />
                </motion.div>
              ))}
            </div>

            {/* View all locations CTA */}
            <div className="mt-4">
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 font-body text-sm text-neutral-400 hover:text-brand-red transition-colors duration-200 group"
              >
                <span>View all 52 service areas</span>
                <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
            </div>

            {/* Neighborhoods of current city */}
            {currentCityHoods.length > 0 && (
              <div className="mt-8 pt-8 border-t border-dark-700">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-5 bg-brand-red shrink-0" />
                  <p className="font-body text-xs text-brand-red uppercase tracking-widest font-semibold">
                    {currentCity.name} Neighborhoods
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {currentCityHoods.map((hood) => (
                    <Link
                      key={hood.slug}
                      href={`/${currentService.slug}/${currentCity.slug}/${hood.slug}`}
                      className="font-body text-xs text-neutral-400 hover:text-white hover:bg-brand-red/20 border border-dark-500 hover:border-brand-red/50 px-3 py-1.5 transition-all duration-150 whitespace-nowrap"
                    >
                      {hood.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT — Services list */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1 h-8 bg-brand-red shrink-0" />
              <div>
                <p className="font-body text-xs text-brand-red uppercase tracking-widest font-semibold">Full Service Menu</p>
                <h3 className="font-display text-2xl sm:text-3xl text-neutral-100 uppercase leading-tight">
                  More Services in {currentCity.name}
                </h3>
              </div>
            </div>

            <div className="space-y-1">
              {otherServices.map((svc, i) => (
                <motion.div
                  key={svc.slug}
                  initial={{ opacity: 0, x: 12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.04, ease: 'easeOut' }}
                >
                  <Link
                    href={`/${svc.slug}/${currentCity.slug}`}
                    className="group flex items-center justify-between gap-3 px-4 py-3 bg-dark-800 hover:bg-dark-700 border-l-2 border-transparent hover:border-brand-red transition-all duration-150"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-lg shrink-0 leading-none w-6 text-center">{svc.icon}</span>
                      <div className="min-w-0">
                        <p className="font-body text-sm font-semibold text-neutral-200 group-hover:text-white transition-colors duration-150 truncate">
                          {svc.name}
                        </p>
                        <p className="font-body text-xs text-neutral-600 leading-none mt-0.5">
                          {svc.priceRange}
                        </p>
                      </div>
                    </div>
                    <span className="text-neutral-600 group-hover:text-brand-red text-xs transition-colors duration-150 shrink-0">
                      →
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* View all services CTA */}
            <div className="mt-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-body text-sm text-neutral-400 hover:text-brand-red transition-colors duration-200 group"
              >
                <span>View all 14 services</span>
                <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── GEOGRAPHIC ZONE STRIP ─────────────────────────────────────────── */}
      {/* Second internal link layer — regional clusters reinforce topical authority */}
      <div className="border-t border-dark-700 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center gap-2 sm:gap-0 sm:divide-x sm:divide-dark-600">
            <span className="font-body text-xs text-neutral-600 uppercase tracking-widest mr-2 sm:pr-4 shrink-0">
              Coverage Zones
            </span>
            {ZONES.map((zone) => {
              const cityCount = zone.cities.length
              const firstCity = (cities as readonly City[]).find(c => c.slug === zone.cities[0])
              const href = firstCity ? `/${currentService.slug}/${firstCity.slug}` : '/locations'
              return (
                <Link
                  key={zone.slug}
                  href={href}
                  className="group sm:px-5 py-1 flex items-center gap-2 hover:text-white transition-colors duration-150"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-dark-500 group-hover:bg-brand-red transition-colors duration-150 shrink-0" />
                  <span className="font-body text-xs font-semibold text-neutral-400 group-hover:text-white transition-colors duration-150 whitespace-nowrap">
                    {zone.label}
                  </span>
                  <span className="font-body text-xs text-neutral-600">
                    ({cityCount})
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

    </section>
  )
}
