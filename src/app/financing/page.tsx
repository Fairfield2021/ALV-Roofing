import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import CostEstimator from '@/components/tools/CostEstimator'
import CTABand from '@/components/sections/CTABand'

export const metadata: Metadata = {
  title: 'Roof Financing Houston | ALV Roofing — From $99/Month',
  description:
    'Flexible roof financing options for Houston homeowners. From $99/month with approved credit. 0% interest promotional periods available. Apply today — ALV Roofing 254-FRG-TEAM.',
  alternates: {
    canonical: 'https://alvroofing.com/financing',
  },
  openGraph: {
    title: 'Roof Financing Houston | ALV Roofing',
    description:
      'A new roof doesn\'t have to break the bank. Financing starting at $99/month. Multiple lenders, fast approval, 0% interest options.',
    url: 'https://alvroofing.com/financing',
    siteName: 'ALV Roofing',
    locale: 'en_US',
    type: 'website',
  },
}

const plans = [
  {
    name: 'Standard Plan',
    rate: '$99+/mo',
    term: 'Up to 120 months',
    apr: 'Competitive APR',
    details: 'Ideal for repairs and smaller replacements. Predictable monthly payments with no prepayment penalty.',
    highlight: false,
  },
  {
    name: 'Promotional 0% APR',
    rate: '$0 interest',
    term: '12–18 months',
    apr: '0% APR',
    details: 'Pay off your roof within the promotional period and pay zero interest. Best for homeowners who can pay off within 18 months.',
    highlight: true,
  },
  {
    name: 'Extended Term',
    rate: 'Lowest monthly',
    term: 'Up to 180 months',
    apr: 'Fixed APR',
    details: 'Stretch payments over up to 15 years to minimize monthly cost. Ideal for larger projects like full replacements and metal roofing.',
    highlight: false,
  },
]

const steps = [
  { number: '01', title: 'Request Your Free Estimate', description: 'We inspect your roof at no cost and provide a detailed written estimate covering all materials, labor, and warranty.' },
  { number: '02', title: 'Choose Your Financing Plan', description: 'We present financing options from multiple lenders. You choose the term and monthly payment that fits your budget.' },
  { number: '03', title: 'Fast Approval Process', description: 'Most financing applications are approved within minutes. Credit checks are soft inquiries until you formally apply.' },
  { number: '04', title: 'We Start the Work', description: 'Once financing is approved and contract is signed, we schedule your project — often within 3–5 business days.' },
]

export default function FinancingPage() {
  return (
    <>
      <Hero
        eyebrow="Roof Financing"
        heading="Protect Your Home Now. Pay Over Time."
        description="A damaged or aging roof cannot wait. ALV Roofing offers flexible financing options starting from $99/month — so you can protect your home without draining your savings."
      />
      <TrustBar />

      {/* Financing overview */}
      <section className="bg-dark-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-body text-xs font-semibold text-brand-red uppercase tracking-widest mb-4">
            Financing Options
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-neutral-100 uppercase leading-tight mb-6">
            Plans for Every Budget
          </h2>
          <p className="font-body text-neutral-400 text-lg max-w-2xl leading-relaxed mb-14">
            We work with multiple lending partners to find the right financing solution for your situation.
            Whether you need a small repair or a full metal roof replacement, we have a plan that works.
          </p>

          {/* Plan cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col p-6 border ${
                  plan.highlight
                    ? 'bg-dark-700 border-brand-red'
                    : 'bg-dark-700 border-dark-500'
                }`}
              >
                {plan.highlight && (
                  <span className="inline-block font-body text-xs font-semibold text-white bg-brand-red px-3 py-1 mb-4 self-start uppercase tracking-wide">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-xl text-neutral-100 uppercase mb-2">{plan.name}</h3>
                <p className="font-display text-3xl text-brand-red mb-1">{plan.rate}</p>
                <div className="flex gap-3 mb-4">
                  <span className="font-body text-xs text-neutral-400">{plan.term}</span>
                  <span className="font-body text-xs text-neutral-400">·</span>
                  <span className="font-body text-xs text-neutral-400">{plan.apr}</span>
                </div>
                <p className="font-body text-sm text-neutral-400 leading-relaxed flex-1">{plan.details}</p>
                <Link
                  href="/free-quote"
                  className="mt-6 inline-flex items-center justify-center py-3 bg-brand-red hover:bg-brand-red-dark text-white font-display text-sm uppercase tracking-widest transition-colors duration-200"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          {/* How it works */}
          <div>
            <h2 className="font-display text-3xl sm:text-4xl text-neutral-100 uppercase mb-10">
              How the Process Works
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step) => (
                <div key={step.number} className="flex flex-col">
                  <span className="font-display text-brand-red text-xs uppercase tracking-widest mb-2">
                    Step {step.number}
                  </span>
                  <h3 className="font-display text-xl text-neutral-100 uppercase mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-neutral-400 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Important notes */}
          <div className="mt-14 p-6 bg-dark-700 border border-dark-500">
            <h3 className="font-display text-xl text-neutral-100 uppercase mb-4">Important Information</h3>
            <ul className="space-y-3 font-body text-sm text-neutral-400">
              <li className="flex items-start gap-2">
                <span className="text-brand-red flex-shrink-0 mt-0.5">•</span>
                Financing is subject to credit approval. Rates and terms vary based on creditworthiness.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-red flex-shrink-0 mt-0.5">•</span>
                The 0% APR promotional period is deferred interest — pay the full balance before the period ends to avoid interest charges.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-red flex-shrink-0 mt-0.5">•</span>
                If your roof damage is covered by insurance, financing may not be necessary — you may pay only your deductible. We always check insurance eligibility first.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-red flex-shrink-0 mt-0.5">•</span>
                There is no prepayment penalty on any ALV Roofing financing plan. Pay off early at any time with no fees.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CostEstimator />
      <CTABand />
    </>
  )
}
