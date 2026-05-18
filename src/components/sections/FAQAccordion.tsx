'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

interface FAQ {
  q: string
  a: string
}

interface FAQAccordionProps {
  faqs: FAQ[]
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  return (
    <section className="bg-dark-900 py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <SectionEyebrow text="Frequently Asked Questions" />
          <h2 className="font-display text-4xl sm:text-5xl text-neutral-100 uppercase mt-3 leading-tight">
            Roofing Questions Answered
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className={`border transition-colors duration-200 ${
                  isOpen ? 'border-brand-red bg-dark-700' : 'border-dark-500 bg-dark-800 hover:border-dark-400'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-body font-semibold text-neutral-100 text-sm sm:text-base leading-snug">
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center font-body font-bold text-base transition-colors duration-200 ${
                      isOpen
                        ? 'border-brand-red text-brand-red bg-brand-red/10'
                        : 'border-dark-400 text-neutral-400'
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 border-t border-dark-600">
                        <p className="font-body text-sm text-neutral-400 leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="font-body text-neutral-400 text-sm mb-3">Have more questions? We are here to help.</p>
          <a
            href="tel:2543748326"
            className="inline-flex items-center gap-2 font-display text-lg text-brand-red hover:text-neutral-100 uppercase tracking-wide transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.86 13.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012.81 2.68h3a2 2 0 012 1.72c.13.96.36 1.9.71 2.81a2 2 0 01-.45 2.11L6.91 10.46a16 16 0 006.56 6.56l1.14-1.14a2 2 0 012.11-.45c.91.35 1.85.58 2.81.71A2 2 0 0122 17.68v-.76z" />
            </svg>
            Call 254-FRG-TEAM
          </a>
        </div>
      </div>
    </section>
  )
}
