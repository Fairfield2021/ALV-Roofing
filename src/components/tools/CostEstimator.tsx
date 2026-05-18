'use client'

import { useState, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

type Material = 'asphalt' | 'metal' | 'tile' | 'flat'
type Stories = 1 | 2

interface MaterialOption {
  id: Material
  label: string
  rate: number
  description: string
}

const MATERIALS: MaterialOption[] = [
  { id: 'asphalt', label: 'Asphalt Shingles', rate: 4.5, description: 'Most popular & cost-effective' },
  { id: 'metal', label: 'Metal Roofing', rate: 12, description: '40–70 year lifespan' },
  { id: 'tile', label: 'Tile Roofing', rate: 18, description: 'Premium & long-lasting' },
  { id: 'flat', label: 'Flat / TPO', rate: 7, description: 'Commercial & low-slope' },
]

const STORY_MULTIPLIER: Record<Stories, number> = {
  1: 1.0,
  2: 1.35,
}

const SQFT_MIN = 800
const SQFT_MAX = 5000
const SQFT_DEFAULT = 1500

const RATE_PER_SQFT = 5

function formatCurrency(value: number): string {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  })
}

function calculateEstimate(sqft: number, stories: Stories) {
  const base = sqft * RATE_PER_SQFT * STORY_MULTIPLIER[stories]
  const low = base * 0.9
  const high = base * 1.155565
  return { low, high }
}

export default function CostEstimator() {
  const [sqft, setSqft] = useState(SQFT_DEFAULT)
  const [stories, setStories] = useState<Stories>(1)
  const [material, setMaterial] = useState<Material>('asphalt')
  const [prevEstimate, setPrevEstimate] = useState<{ low: number; high: number } | null>(null)

  const estimate = useMemo(() => calculateEstimate(sqft, stories), [sqft, stories])

  const handleSqftChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSqft(Number(e.target.value))
  }, [])

  const handleMaterialChange = useCallback((m: Material) => {
    setPrevEstimate(estimate)
    setMaterial(m)
  }, [estimate])

  const handleStoriesChange = useCallback((s: Stories) => {
    setPrevEstimate(estimate)
    setStories(s)
  }, [estimate])

  const estimateKey = `${estimate.low}-${estimate.high}`

  return (
    <section className="relative bg-dark-700 overflow-hidden">
      {/* Subtle background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(215,43,43,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <SectionEyebrow text="Cost Estimator" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-white tracking-wider uppercase mb-3">
            Estimate Your Roof Cost
          </h2>
          <p className="font-body text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
            Get an instant ballpark estimate based on your home's size and roofing
            preferences. No commitment required.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-start">
          {/* Controls panel */}
          <div className="lg:col-span-3 space-y-6">

            {/* Sqft Slider */}
            <div className="bg-dark-800 border border-dark-600 rounded-sm p-5 space-y-4">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="sqft-slider"
                  className="font-body text-sm font-semibold text-neutral-100 uppercase tracking-wider"
                >
                  Roof Size
                </label>
                <span className="font-display text-2xl text-white tracking-wider">
                  {sqft.toLocaleString()}{' '}
                  <span className="text-neutral-400 text-base">sq ft</span>
                </span>
              </div>

              <div className="relative">
                <input
                  id="sqft-slider"
                  type="range"
                  min={SQFT_MIN}
                  max={SQFT_MAX}
                  step={50}
                  value={sqft}
                  onChange={handleSqftChange}
                  className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #D72B2B 0%, #D72B2B ${
                      ((sqft - SQFT_MIN) / (SQFT_MAX - SQFT_MIN)) * 100
                    }%, #282828 ${
                      ((sqft - SQFT_MIN) / (SQFT_MAX - SQFT_MIN)) * 100
                    }%, #282828 100%)`,
                  }}
                />
                <style>{`
                  #sqft-slider::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    width: 20px;
                    height: 20px;
                    background: #D72B2B;
                    border-radius: 50%;
                    cursor: pointer;
                    box-shadow: 0 0 0 3px rgba(215,43,43,0.2);
                    transition: box-shadow 0.15s;
                  }
                  #sqft-slider::-webkit-slider-thumb:hover {
                    box-shadow: 0 0 0 5px rgba(215,43,43,0.3);
                  }
                  #sqft-slider::-moz-range-thumb {
                    width: 20px;
                    height: 20px;
                    background: #D72B2B;
                    border-radius: 50%;
                    cursor: pointer;
                    border: none;
                    box-shadow: 0 0 0 3px rgba(215,43,43,0.2);
                  }
                `}</style>
              </div>

              <div className="flex justify-between font-body text-xs text-neutral-600">
                <span>{SQFT_MIN.toLocaleString()} sq ft</span>
                <span>{SQFT_MAX.toLocaleString()} sq ft</span>
              </div>
            </div>

            {/* Stories Toggle */}
            <div className="bg-dark-800 border border-dark-600 rounded-sm p-5 space-y-3">
              <p className="font-body text-sm font-semibold text-neutral-100 uppercase tracking-wider">
                Number of Stories
              </p>
              <div className="grid grid-cols-2 gap-2">
                {([1, 2] as Stories[]).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => handleStoriesChange(s)}
                    className={`py-3 font-display text-base uppercase tracking-wider transition-colors duration-150 border ${
                      stories === s
                        ? 'bg-brand-red border-brand-red text-white'
                        : 'bg-transparent border-dark-500 text-neutral-400 hover:border-neutral-400 hover:text-neutral-100'
                    }`}
                  >
                    {s === 1 ? '1 Story' : '2 Stories'}
                    {s === 2 && (
                      <span className="block text-xs font-body font-normal normal-case tracking-normal opacity-75 mt-0.5">
                        +35% for access
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Material Selector */}
            <div className="bg-dark-800 border border-dark-600 rounded-sm p-5 space-y-3">
              <p className="font-body text-sm font-semibold text-neutral-100 uppercase tracking-wider">
                Roofing Material
              </p>
              <div className="grid grid-cols-2 gap-2">
                {MATERIALS.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => handleMaterialChange(m.id)}
                    className={`py-3 px-3 text-left transition-colors duration-150 border ${
                      material === m.id
                        ? 'bg-brand-red border-brand-red text-white'
                        : 'bg-transparent border-dark-500 text-neutral-400 hover:border-neutral-400 hover:text-neutral-100'
                    }`}
                  >
                    <span className="block font-display text-sm uppercase tracking-wider leading-tight">
                      {m.label}
                    </span>
                    <span
                      className={`block font-body text-xs normal-case tracking-normal mt-0.5 ${
                        material === m.id ? 'text-red-100' : 'text-neutral-600'
                      }`}
                    >
                      {m.description}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result panel */}
          <div className="lg:col-span-2">
            <div className="bg-dark-800 border border-dark-600 rounded-sm p-6 space-y-6 sticky top-24">
              <div>
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-1">
                  Estimated Range
                </p>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={estimateKey}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="relative"
                  >
                    <p className="font-display text-3xl sm:text-4xl text-brand-red tracking-wider leading-tight">
                      {formatCurrency(estimate.low)}
                      <span className="text-neutral-400 mx-1">–</span>
                      {formatCurrency(estimate.high)}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Summary */}
              <div className="space-y-2 border-t border-dark-600 pt-4">
                <SummaryRow
                  label="Rate"
                  value="$2.50 – $5/sq ft"
                />
                <SummaryRow
                  label="Stories"
                  value={stories === 1 ? '1 Story' : '2 Stories'}
                />
                <SummaryRow
                  label="Material"
                  value={MATERIALS.find((m) => m.id === material)!.label}
                />
              </div>

              {/* Disclaimer + CTA */}
              <div className="space-y-3 border-t border-dark-600 pt-4">
                <p className="font-body text-xs text-neutral-600 leading-relaxed">
                  Estimates are approximate and vary based on roof pitch, underlayment,
                  decking condition, and local labor rates.
                </p>
                <Link
                  href="/free-quote"
                  className="flex items-center justify-center w-full py-3.5 bg-brand-red hover:bg-brand-red-dark text-white font-display text-sm uppercase tracking-wider transition-colors duration-150"
                >
                  Get Exact Pricing →
                </Link>
                <a
                  href="tel:2543748326"
                  className="flex items-center justify-center w-full py-3 border border-dark-500 hover:border-neutral-400 text-neutral-400 hover:text-white font-display text-sm uppercase tracking-wider transition-colors duration-150"
                >
                  Call 254-FRG-TEAM
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-dark-600 pt-8">
          {[
            { stat: '400+', label: 'Reviews' },
            { stat: '4.9★', label: 'Rating' },
            { stat: '15+', label: 'Years Experience' },
            { stat: '24/7', label: 'Emergency Service' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-display text-2xl text-brand-red tracking-wider">{item.stat}</p>
              <p className="font-body text-xs text-neutral-600 uppercase tracking-wider mt-0.5">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-body text-xs text-neutral-600 uppercase tracking-wider">
        {label}
      </span>
      <span className="font-body text-xs font-semibold text-neutral-100">
        {value}
      </span>
    </div>
  )
}
