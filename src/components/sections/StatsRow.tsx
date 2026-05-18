'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface Stat {
  value: number
  suffix: string
  label: string
  decimals?: number
}

const stats: Stat[] = [
  { value: 10, suffix: '+', label: 'Years in Business' },
  { value: 1000, suffix: '+', label: 'Roofs Installed' },
  { value: 400, suffix: '+', label: '5-Star Reviews' },
  { value: 4.9, suffix: '', label: 'Star Rating on Google', decimals: 1 },
]

function CountUp({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const startedRef = useRef(false)

  useEffect(() => {
    if (!inView || startedRef.current) return
    startedRef.current = true

    const duration = 1400
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(parseFloat((eased * value).toFixed(decimals)))
      if (progress < 1) requestAnimationFrame(tick)
      else setDisplay(value)
    }

    requestAnimationFrame(tick)
  }, [inView, value, decimals])

  return (
    <span ref={ref}>
      {decimals > 0 ? display.toFixed(decimals) : Math.round(display)}
      {suffix}
    </span>
  )
}

export default function StatsRow() {
  return (
    <section className="bg-dark-800 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <p className="font-display text-5xl lg:text-6xl text-brand-red leading-none">
                <CountUp value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </p>
              <p className="font-body text-sm text-neutral-400 mt-2 uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
