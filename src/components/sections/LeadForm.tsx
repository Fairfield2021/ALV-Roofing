'use client'

import { useState } from 'react'
import { services } from '@/data/services'

interface LeadFormProps {
  serviceName?: string
  cityName?: string
  compact?: boolean
}

interface FormState {
  name: string
  phone: string
  service: string
  address: string
}

// Shared input class — text-base (16px) prevents iOS auto-zoom on focus
const inputClass =
  'w-full bg-dark-600 border border-dark-400 text-neutral-100 placeholder-neutral-600 font-body text-base px-4 py-3 focus:outline-none focus:border-brand-red transition-colors duration-200 rounded-none'

export default function LeadForm({ serviceName, cityName, compact = false }: LeadFormProps) {
  const initialService = serviceName ?? ''

  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    service: initialService,
    address: cityName ?? '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-dark-700 border border-brand-red p-6 sm:p-8 flex flex-col items-center text-center gap-4">
        <div className="w-12 h-12 rounded-full bg-brand-red/15 border border-brand-red flex items-center justify-center">
          <svg className="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl text-neutral-100 uppercase">We Got Your Request!</h3>
        <p className="font-body text-neutral-400 text-sm leading-relaxed">
          We&apos;ll call you within 15 minutes during business hours. For emergencies, call us directly at{' '}
          <a href="tel:2543748326" className="text-brand-red hover:underline font-semibold">
            254-FRG-TEAM
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <div className="bg-dark-700 border border-dark-500 p-5 sm:p-8">
      <div className="mb-5">
        <h3 className="font-display text-2xl text-neutral-100 uppercase leading-tight">
          Get Your Free Estimate
        </h3>
        <p className="font-body text-xs text-brand-red mt-1 uppercase tracking-wide font-semibold">
          Response within 15 minutes
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <input type="hidden" name="source" value="website-lead-form" />
        <input type="hidden" name="city" value={cityName ?? ''} />
        <input type="hidden" name="service_preset" value={initialService} />

        <div className="space-y-3">
          {/* Name */}
          <div>
            <label htmlFor="lf-name" className="block font-body text-xs text-neutral-400 uppercase tracking-wide mb-1.5">
              Full Name *
            </label>
            <input
              id="lf-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="John Smith"
              value={form.name}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          {/* Phone — inputMode numeric for mobile keyboard */}
          <div>
            <label htmlFor="lf-phone" className="block font-body text-xs text-neutral-400 uppercase tracking-wide mb-1.5">
              Phone Number *
            </label>
            <input
              id="lf-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              placeholder="(254) 555-1234"
              value={form.phone}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          {/* Service */}
          {!compact && (
            <div>
              <label htmlFor="lf-service" className="block font-body text-xs text-neutral-400 uppercase tracking-wide mb-1.5">
                Service Needed
              </label>
              <div className="relative">
                <select
                  id="lf-service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={`${inputClass} appearance-none pr-10`}
                >
                  <option value="">Select a service…</option>
                  {services.map((svc) => (
                    <option key={svc.slug} value={svc.name}>
                      {svc.name}
                    </option>
                  ))}
                </select>
                {/* Custom chevron — consistent cross-browser */}
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* Address */}
          {!compact && (
            <div>
              <label htmlFor="lf-address" className="block font-body text-xs text-neutral-400 uppercase tracking-wide mb-1.5">
                Property Address or City
              </label>
              <input
                id="lf-address"
                name="address"
                type="text"
                autoComplete="street-address"
                placeholder="123 Main St, Katy TX"
                value={form.address}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-5 w-full flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark disabled:opacity-60 text-white font-display text-base uppercase tracking-widest py-4 transition-colors duration-200 cursor-pointer min-h-[52px]"
        >
          {loading ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
              Sending…
            </>
          ) : (
            'Get Free Estimate →'
          )}
        </button>

        <p className="mt-3 text-center font-body text-xs text-neutral-600">
          No obligation · No spam · Licensed &amp; Insured
        </p>
      </form>
    </div>
  )
}
