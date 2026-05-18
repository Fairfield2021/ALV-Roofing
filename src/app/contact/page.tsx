import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import LeadForm from '@/components/sections/LeadForm'
import FAQAccordion from '@/components/sections/FAQAccordion'
import { generalFaqs } from '@/data/faqs'

export const metadata: Metadata = {
  title: 'Contact ALV Roofing | Free Estimates in Houston, TX',
  description:
    'Contact ALV Roofing for a free same-day roof inspection in Houston. Call 254-FRG-TEAM or fill out our online form. Licensed, insured, 4.9-star rated.',
  alternates: {
    canonical: 'https://alvroofing.com/contact',
  },
  openGraph: {
    title: 'Contact ALV Roofing | Free Estimates in Houston, TX',
    description:
      'Call or message Houston\'s top-rated roofing contractor. Same-day response, free estimates, licensed and insured.',
    url: 'https://alvroofing.com/contact',
    siteName: 'ALV Roofing',
    locale: 'en_US',
    type: 'website',
  },
}

const contactInfo = [
  {
    label: 'Phone',
    value: '254-FRG-TEAM',
    href: 'tel:2543748326',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.86 13.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012.81 2.68h3a2 2 0 012 1.72c.13.96.36 1.9.71 2.81a2 2 0 01-.45 2.11L6.91 10.46a16 16 0 006.56 6.56l1.14-1.14a2 2 0 012.11-.45c.91.35 1.85.58 2.81.71A2 2 0 0122 17.68v-.76z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'mac@alvroofing.com',
    href: 'mailto:mac@alvroofing.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Address',
    value: 'Houston, TX (serving greater Houston metro)',
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: 'Hours',
    value: 'Mon–Sun: Available 24/7 for emergencies\nOffice: Mon–Fri 7am–7pm, Sat 8am–5pm',
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
]

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Get In Touch"
        heading="Contact ALV Roofing"
        description="Free same-day roof inspections across greater Houston. Call now or fill out our form — we respond within 15 minutes during business hours."
      />
      <TrustBar />

      {/* Contact section */}
      <section className="bg-dark-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: contact info */}
            <div>
              <p className="font-body text-xs font-semibold text-brand-red uppercase tracking-widest mb-4">
                Contact Information
              </p>
              <h2 className="font-display text-4xl sm:text-5xl text-neutral-100 uppercase leading-tight mb-8">
                Reach Us Anytime
              </h2>
              <p className="font-body text-neutral-400 leading-relaxed mb-10">
                We serve all of greater Houston — from Katy and Cypress in the west to Pearland and League
                City in the south, and everywhere in between. Whether you have an emergency leak or want to
                plan a future project, we are ready to help.
              </p>

              <ul className="space-y-6">
                {contactInfo.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-body text-xs text-neutral-500 uppercase tracking-wide mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-body text-neutral-100 hover:text-brand-red transition-colors duration-200 font-semibold"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-body text-neutral-300 whitespace-pre-line leading-relaxed">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Emergency banner */}
              <div className="mt-10 p-5 bg-brand-red/10 border border-brand-red/30">
                <p className="font-display text-lg text-neutral-100 uppercase mb-1">
                  Roof Emergency?
                </p>
                <p className="font-body text-sm text-neutral-400 mb-3">
                  We offer 24/7 emergency response for active leaks and storm damage. Call us anytime.
                </p>
                <a
                  href="tel:2543748326"
                  className="inline-flex items-center gap-2 font-display text-brand-red text-xl hover:text-neutral-100 transition-colors duration-200"
                >
                  254-FRG-TEAM
                </a>
              </div>
            </div>

            {/* Right: lead form */}
            <div>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion faqs={generalFaqs} />
    </>
  )
}
