'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { services } from '@/data/services'
import { cities } from '@/data/cities'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Locations', href: '/locations', hasDropdown: true },
  { label: 'Projects', href: '/gallery' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
]

const TOP_CITIES = cities.slice(0, 8)

// Service icons mapped to SVG since emoji rendering can be inconsistent
const SERVICE_ICON_MAP: Record<string, string> = {
  'roof-replacement': '🏠',
  'roof-repair': '🔧',
  'hail-damage-repair': '🌨',
  'storm-damage-repair': '⛈',
  'emergency-roof-repair': '🚨',
  'insurance-claim-help': '📋',
  'asphalt-shingle-roofing': '🏗',
  'metal-roofing': '⚡',
  'flat-roofing': '▬',
  'tile-roofing': '🏛',
  'roof-inspections': '🔍',
  'roof-maintenance': '🛠',
  'commercial-roofing': '🏢',
  'roof-financing': '💳',
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [locationsOpen, setLocationsOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false)

  const servicesRef = useRef<HTMLDivElement>(null)
  const locationsRef = useRef<HTMLDivElement>(null)
  const servicesTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const locationsTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearServicesTimer = useCallback(() => {
    if (servicesTimerRef.current) clearTimeout(servicesTimerRef.current)
  }, [])

  const clearLocationsTimer = useCallback(() => {
    if (locationsTimerRef.current) clearTimeout(locationsTimerRef.current)
  }, [])

  const handleServicesEnter = useCallback(() => {
    clearServicesTimer()
    setServicesOpen(true)
  }, [clearServicesTimer])

  const handleServicesLeave = useCallback(() => {
    servicesTimerRef.current = setTimeout(() => setServicesOpen(false), 150)
  }, [])

  const handleLocationsEnter = useCallback(() => {
    clearLocationsTimer()
    setLocationsOpen(true)
  }, [clearLocationsTimer])

  const handleLocationsLeave = useCallback(() => {
    locationsTimerRef.current = setTimeout(() => setLocationsOpen(false), 150)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const closeMobile = useCallback(() => {
    setMobileOpen(false)
    setMobileServicesOpen(false)
    setMobileLocationsOpen(false)
  }, [])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 h-[68px]"
        style={{ background: 'rgba(22,22,22,0.97)', backdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-4">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-baseline gap-1 shrink-0 group"
            onClick={closeMobile}
          >
            <span className="font-display text-white text-3xl leading-none tracking-wider group-hover:text-neutral-100 transition-colors">
              ALV
            </span>
            <span className="font-display text-neutral-400 text-lg leading-none tracking-widest group-hover:text-neutral-100 transition-colors">
              ROOFING
            </span>
            <span className="font-display text-brand-red text-3xl leading-none">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {NAV_LINKS.map((link) => {
              if (link.label === 'Services') {
                return (
                  <div
                    key="services"
                    ref={servicesRef}
                    onMouseEnter={handleServicesEnter}
                    onMouseLeave={handleServicesLeave}
                    className="relative"
                  >
                    <button
                      className="flex items-center gap-1 px-3 py-2 text-xs font-body font-semibold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors duration-150"
                      onClick={() => setServicesOpen((v) => !v)}
                      aria-expanded={servicesOpen}
                    >
                      Services
                      <ChevronIcon open={servicesOpen} />
                    </button>

                    {servicesOpen && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[580px] bg-dark-800 border border-dark-600 shadow-2xl rounded-sm"
                        onMouseEnter={handleServicesEnter}
                        onMouseLeave={handleServicesLeave}
                      >
                        <div className="p-4 border-b border-dark-600">
                          <p className="text-xs font-body font-semibold uppercase tracking-widest text-neutral-400">
                            All Services
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-0 p-2">
                          {services.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/${service.slug}`}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-sm hover:bg-dark-600 group/item transition-colors duration-100"
                              onClick={() => setServicesOpen(false)}
                            >
                              <span className="text-lg w-6 text-center shrink-0 leading-none">
                                {SERVICE_ICON_MAP[service.slug] ?? '🏠'}
                              </span>
                              <div className="min-w-0">
                                <p className="text-xs font-body font-semibold text-neutral-100 group-hover/item:text-white leading-tight">
                                  {service.name}
                                </p>
                                <p className="text-xs font-body text-neutral-400 truncate leading-tight mt-0.5">
                                  {service.priceRange}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="p-3 border-t border-dark-600">
                          <Link
                            href="/services"
                            className="text-xs font-body font-semibold text-brand-red hover:text-white uppercase tracking-wider transition-colors"
                            onClick={() => setServicesOpen(false)}
                          >
                            View all services →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                )
              }

              if (link.label === 'Locations') {
                return (
                  <div
                    key="locations"
                    ref={locationsRef}
                    onMouseEnter={handleLocationsEnter}
                    onMouseLeave={handleLocationsLeave}
                    className="relative"
                  >
                    <button
                      className="flex items-center gap-1 px-3 py-2 text-xs font-body font-semibold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors duration-150"
                      onClick={() => setLocationsOpen((v) => !v)}
                      aria-expanded={locationsOpen}
                    >
                      Locations
                      <ChevronIcon open={locationsOpen} />
                    </button>

                    {locationsOpen && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 bg-dark-800 border border-dark-600 shadow-2xl rounded-sm"
                        onMouseEnter={handleLocationsEnter}
                        onMouseLeave={handleLocationsLeave}
                      >
                        <div className="p-2">
                          {TOP_CITIES.map((city) => (
                            <Link
                              key={city.slug}
                              href={`/roof-replacement/${city.slug}`}
                              className="flex items-center gap-2 px-3 py-2 rounded-sm hover:bg-dark-600 transition-colors duration-100 group/city"
                              onClick={() => setLocationsOpen(false)}
                            >
                              <span className="text-brand-red text-xs">●</span>
                              <span className="text-xs font-body font-semibold text-neutral-100 group-hover/city:text-white transition-colors">
                                {city.name}
                              </span>
                              <span className="text-xs font-body text-neutral-600 ml-auto">
                                {city.state}
                              </span>
                            </Link>
                          ))}
                        </div>
                        <div className="p-3 border-t border-dark-600">
                          <Link
                            href="/locations"
                            className="text-xs font-body font-semibold text-brand-red hover:text-white uppercase tracking-wider transition-colors"
                            onClick={() => setLocationsOpen(false)}
                          >
                            See all areas →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-xs font-body font-semibold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors duration-150"
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop Right: Phone + CTA */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a
              href="tel:2543748326"
              className="font-display text-white text-lg tracking-wider hover:text-brand-red transition-colors duration-150 whitespace-nowrap"
            >
              254-FRG-TEAM
            </a>
            <Link
              href="/free-quote"
              className="inline-flex items-center justify-center bg-brand-red hover:bg-brand-red-dark text-white font-display text-sm uppercase tracking-wider px-5 py-2.5 transition-colors duration-150 whitespace-nowrap"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] shrink-0"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-200 origin-center ${
                mobileOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
                mobileOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-200 origin-center ${
                mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={closeMobile}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-[68px] left-0 right-0 z-40 lg:hidden bg-dark-800 border-t border-dark-600 overflow-y-auto max-h-[calc(100vh-68px)] transition-all duration-300 ${
          mobileOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          <Link
            href="/"
            className="block px-3 py-3 text-sm font-body font-semibold uppercase tracking-wider text-neutral-100 hover:text-white hover:bg-dark-600 rounded-sm transition-colors"
            onClick={closeMobile}
          >
            Home
          </Link>

          {/* Mobile Services */}
          <div>
            <button
              className="w-full flex items-center justify-between px-3 py-3 text-sm font-body font-semibold uppercase tracking-wider text-neutral-100 hover:text-white hover:bg-dark-600 rounded-sm transition-colors"
              onClick={() => setMobileServicesOpen((v) => !v)}
            >
              Services
              <ChevronIcon open={mobileServicesOpen} />
            </button>
            {mobileServicesOpen && (
              <div className="ml-3 mt-1 space-y-0.5 border-l border-dark-600 pl-3">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/${service.slug}`}
                    className="flex items-center gap-2 px-2 py-2 text-xs font-body font-medium text-neutral-400 hover:text-white hover:bg-dark-600 rounded-sm transition-colors"
                    onClick={closeMobile}
                  >
                    <span className="text-base w-5 text-center leading-none shrink-0">
                      {SERVICE_ICON_MAP[service.slug] ?? '🏠'}
                    </span>
                    {service.name}
                  </Link>
                ))}
                <Link
                  href="/services"
                  className="block px-2 py-2 text-xs font-body font-semibold text-brand-red hover:text-white uppercase tracking-wider transition-colors"
                  onClick={closeMobile}
                >
                  View all services →
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Locations */}
          <div>
            <button
              className="w-full flex items-center justify-between px-3 py-3 text-sm font-body font-semibold uppercase tracking-wider text-neutral-100 hover:text-white hover:bg-dark-600 rounded-sm transition-colors"
              onClick={() => setMobileLocationsOpen((v) => !v)}
            >
              Locations
              <ChevronIcon open={mobileLocationsOpen} />
            </button>
            {mobileLocationsOpen && (
              <div className="ml-3 mt-1 grid grid-cols-2 gap-0.5 border-l border-dark-600 pl-3">
                {TOP_CITIES.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/roof-replacement/${city.slug}`}
                    className="px-2 py-2 text-xs font-body font-medium text-neutral-400 hover:text-white hover:bg-dark-600 rounded-sm transition-colors"
                    onClick={closeMobile}
                  >
                    {city.name}
                  </Link>
                ))}
                <Link
                  href="/locations"
                  className="col-span-2 px-2 py-2 text-xs font-body font-semibold text-brand-red hover:text-white uppercase tracking-wider transition-colors"
                  onClick={closeMobile}
                >
                  See all areas →
                </Link>
              </div>
            )}
          </div>

          {[
            { label: 'Projects', href: '/gallery' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'Blog', href: '/blog' },
            { label: 'About', href: '/about' },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="block px-3 py-3 text-sm font-body font-semibold uppercase tracking-wider text-neutral-100 hover:text-white hover:bg-dark-600 rounded-sm transition-colors"
              onClick={closeMobile}
            >
              {label}
            </Link>
          ))}

          {/* Mobile CTA block */}
          <div className="pt-4 border-t border-dark-600 space-y-3">
            <a
              href="tel:2543748326"
              className="flex items-center justify-center gap-2 w-full py-3 font-display text-xl text-white tracking-wider hover:text-brand-red transition-colors"
              onClick={closeMobile}
            >
              <PhoneIcon />
              254-FRG-TEAM
            </a>
            <Link
              href="/free-quote"
              className="flex items-center justify-center w-full py-3.5 bg-brand-red hover:bg-brand-red-dark text-white font-display text-base uppercase tracking-wider transition-colors"
              onClick={closeMobile}
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      aria-hidden="true"
    >
      <path
        d="M2 4L6 8L10 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02L6.62 10.79z"
        fill="currentColor"
      />
    </svg>
  )
}
