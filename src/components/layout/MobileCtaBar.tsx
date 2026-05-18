'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function MobileCtaBar() {
  const [visible, setVisible] = useState(false)

  // Show bar after user scrolls 120px — don't show immediately so it doesn't
  // fight with the hero CTA buttons visible on first load
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          // lg:hidden — desktop doesn't need this; the nav already has CTAs
          className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur-sm border-t border-dark-600"
          // Safe area for iPhone home indicator
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          <div className="flex items-stretch h-14">
            {/* Call Now — left half */}
            <a
              href="tel:2543748326"
              className="flex-1 flex items-center justify-center gap-2 bg-dark-700 hover:bg-dark-600 active:bg-dark-500 border-r border-dark-600 text-white font-display text-sm uppercase tracking-widest transition-colors duration-150"
              aria-label="Call ALV Roofing"
            >
              <svg className="w-4 h-4 text-brand-red shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              Call Now
            </a>

            {/* Free Estimate — right half */}
            <Link
              href="/free-quote"
              className="flex-1 flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark active:bg-brand-red-dark text-white font-display text-sm uppercase tracking-widest transition-colors duration-150"
              aria-label="Get a free roofing estimate"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Free Estimate
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
