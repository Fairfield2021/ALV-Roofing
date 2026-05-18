import Link from 'next/link'
import { services } from '@/data/services'
import { cities } from '@/data/cities'
import { ScrambleText } from '@/components/ui/ScrambleText'

const TOP_CITIES = cities.slice(0, 12)
const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-700">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Col 1 — Brand + Social */}
          <div className="space-y-5">
            {/* Logo */}
            <Link href="/" className="inline-flex items-baseline gap-1 group">
              <span className="font-display text-white text-2xl leading-none tracking-wider group-hover:text-neutral-100 transition-colors">
                ALV
              </span>
              <span className="font-display text-neutral-400 text-base leading-none tracking-widest group-hover:text-neutral-100 transition-colors">
                ROOFING
              </span>
              <span className="font-display text-brand-red text-2xl leading-none">.</span>
            </Link>

            <p className="font-body text-sm text-neutral-400 leading-relaxed max-w-xs">
              Houston's Premier Roofing Company. Licensed, insured, and trusted
              by thousands of homeowners across the greater Houston area.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {['GAF Master Elite', 'Owens Corning Platinum', 'BBB A+'].map((badge) => (
                <span
                  key={badge}
                  className="inline-block px-2 py-1 border border-dark-600 text-neutral-600 font-body text-xs uppercase tracking-wider"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-1">
              <a
                href="https://www.facebook.com/alvroofing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ALV Roofing on Facebook"
                className="text-neutral-600 hover:text-white transition-colors duration-150"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/alvroofing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ALV Roofing on Instagram"
                className="text-neutral-600 hover:text-white transition-colors duration-150"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://g.page/alvroofing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ALV Roofing on Google"
                className="text-neutral-600 hover:text-white transition-colors duration-150"
              >
                <GoogleIcon />
              </a>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div className="space-y-4">
            <h3 className="font-display text-white text-lg tracking-wider uppercase">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    className="font-body text-sm text-neutral-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-150"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Service Areas */}
          <div className="space-y-4">
            <h3 className="font-display text-white text-lg tracking-wider uppercase">
              Service Areas
            </h3>
            <ul className="space-y-2">
              {TOP_CITIES.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/roof-replacement/${city.slug}`}
                    className="font-body text-sm text-neutral-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-150"
                  >
                    {city.name}
                    <span className="text-neutral-600">, TX</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/locations"
                  className="font-body text-sm font-semibold text-brand-red hover:text-white transition-colors duration-150"
                >
                  View all areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div className="space-y-4">
            <h3 className="font-display text-white text-lg tracking-wider uppercase">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-neutral-600 mb-1">
                  Phone
                </p>
                <a
                  href="tel:2543748326"
                  className="font-display text-xl text-white hover:text-brand-red tracking-wider transition-colors duration-150"
                >
                  <ScrambleText text="254-FRG-TEAM" aria-label="254-FRG-TEAM" />
                </a>
              </li>
              <li>
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-neutral-600 mb-1">
                  Email
                </p>
                <a
                  href="mailto:mac@alvroofing.com"
                  className="font-body text-sm text-neutral-400 hover:text-white transition-colors duration-150 break-all"
                >
                  mac@alvroofing.com
                </a>
              </li>
              <li>
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-neutral-600 mb-1">
                  Location
                </p>
                <p className="font-body text-sm text-neutral-400">
                  Houston, TX
                </p>
              </li>
              <li>
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-neutral-600 mb-1">
                  Hours
                </p>
                <p className="font-body text-sm text-neutral-400">
                  Mon–Sun:{' '}
                  <span className="text-brand-red font-semibold">24/7 Emergency Service</span>
                </p>
              </li>
              <li className="pt-2">
                <Link
                  href="/free-quote"
                  className="inline-flex items-center justify-center w-full py-3 bg-brand-red hover:bg-brand-red-dark text-white font-display text-sm uppercase tracking-wider transition-colors duration-150"
                >
                  Get Free Estimate
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-neutral-600 text-center sm:text-left">
            &copy; {currentYear} ALV Roofing. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            {['RCAT Licensed', 'Fully Insured', 'BBB A+'].map((item, i, arr) => (
              <span key={item} className="flex items-center gap-4">
                <span className="font-body text-xs font-semibold text-neutral-600 uppercase tracking-wider">
                  {item}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-dark-600 text-xs">|</span>
                )}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="font-body text-xs text-neutral-600 hover:text-neutral-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-body text-xs text-neutral-600 hover:text-neutral-400 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FacebookIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function GoogleIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  )
}
