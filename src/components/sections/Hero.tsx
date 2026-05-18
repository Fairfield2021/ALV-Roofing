'use client'

import { useRef, useCallback, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import Link from 'next/link'
import SectionEyebrow from '@/components/ui/SectionEyebrow'
import LeadForm from '@/components/sections/LeadForm'
import { ScrambleChar } from '@/components/ui/ScrambleText'

interface HeroProps {
  eyebrow?: string
  heading: string
  description: string
  showForm?: boolean
  serviceSlug?: string
  citySlug?: string
  serviceName?: string
  cityName?: string
}

const topServices = [
  { name: 'Roof Replacement', slug: 'roof-replacement', icon: '🏠', tagline: 'Full tear-off & premium install' },
  { name: 'Storm Damage Repair', slug: 'storm-damage-repair', icon: '⛈', tagline: '24/7 emergency response' },
  { name: 'Hail Damage Repair', slug: 'hail-damage-repair', icon: '🌨', tagline: 'Insurance claim experts' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const wordVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function Hero({
  eyebrow,
  heading,
  description,
  showForm = false,
  serviceSlug,
  citySlug,
  serviceName,
  cityName,
}: HeroProps) {
  const words = heading.split(' ')
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Mouse-tracking tilt on the video layer
  const tiltX = useMotionValue(0)
  const tiltY = useMotionValue(0)
  const springTiltX = useSpring(tiltX, { stiffness: 90, damping: 22 })
  const springTiltY = useSpring(tiltY, { stiffness: 90, damping: 22 })

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const cx = window.innerWidth / 2
    const cy = window.innerHeight / 2
    const dx = (e.clientX - cx) / cx
    const dy = (e.clientY - cy) / cy
    tiltY.set(dx * 4)
    tiltX.set(-dy * 4)
  }, [tiltX, tiltY])

  const handleMouseLeave = useCallback(() => {
    tiltX.set(0)
    tiltY.set(0)
  }, [tiltX, tiltY])

  // framer-motion scroll for visual parallax transforms only
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const videoY = useTransform(smoothProgress, [0, 1], ['0%', '30%'])
  const videoScale = useTransform(smoothProgress, [0, 1], [1.12, 1.25])
  const overlayOpacity = useTransform(smoothProgress, [0, 0.6], [0.1, 0.4])
  const contentY = useTransform(smoothProgress, [0, 1], ['0%', '15%'])
  const contentOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.pause()

    let targetTime = 0
    let lastApplied = -1
    let seeking = false
    let rafId = 0

    const EPSILON = 1 / 60 // skip writes smaller than one frame

    const applySeek = () => {
      if (seeking) return
      if (!video.duration) return
      if (Math.abs(targetTime - lastApplied) < EPSILON) return
      seeking = true
      lastApplied = targetTime
      video.currentTime = targetTime
    }

    const onSeeked = () => {
      seeking = false
      // If the target moved while we were decoding, chase it immediately.
      if (Math.abs(targetTime - lastApplied) >= EPSILON) applySeek()
    }
    video.addEventListener('seeked', onSeeked)

    const tick = () => {
      applySeek()
      rafId = requestAnimationFrame(tick)
    }

    const start = () => {
      if (!video.duration) return
      lastApplied = video.currentTime
      rafId = requestAnimationFrame(tick)
    }

    if (video.readyState >= 1 && video.duration) start()
    else video.addEventListener('loadedmetadata', start, { once: true })

    const unsubscribe = scrollYProgress.on('change', (progress) => {
      if (!video.duration) return
      targetTime = progress * video.duration
    })

    return () => {
      cancelAnimationFrame(rafId)
      video.removeEventListener('seeked', onSeeked)
      video.removeEventListener('loadedmetadata', start)
      unsubscribe()
    }
  }, [scrollYProgress])

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh] bg-dark-900"
    >
    {/* Sticky container — pins for the full 300vh scroll */}
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="sticky top-0 h-screen flex flex-col overflow-hidden"
      style={{ perspective: '1200px' }}
    >
      {/* ── VIDEO PARALLAX + 3D TILT LAYER ─────────────────────────────── */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          y: videoY,
          scale: videoScale,
          rotateX: springTiltX,
          rotateY: springTiltY,
          willChange: 'transform',
        }}
      >
        <div className="absolute inset-0 bg-dark-800" />
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/beforeandafterroofing.mp4"
        />
      </motion.div>

      {/* ── SCROLL-DRIVEN OVERLAY ───────────────────────────────────────── */}
      <motion.div
        className="absolute inset-0 bg-dark-900 pointer-events-none"
        style={{ opacity: overlayOpacity }}
      />

      {/* Subtle left gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark-900/60 via-dark-900/20 to-transparent pointer-events-none" />

      {/* Red glow accent */}
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand-red/10 blur-[120px] pointer-events-none" />

      {/* ── VERTICAL SOCIAL STRIP — left ───────────────────────────────── */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-4 items-center">
        <div className="w-px h-16 bg-neutral-600" />
        <a
          href="https://www.facebook.com/alvroofing"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="ALV Roofing on Facebook"
          className="text-neutral-400 hover:text-brand-red transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/alvroofing"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="ALV Roofing on Instagram"
          className="text-neutral-400 hover:text-brand-red transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
          </svg>
        </a>
        <a
          href="https://g.page/alvroofing"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="ALV Roofing on Google"
          className="text-neutral-400 hover:text-brand-red transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
        </a>
        <div className="w-px h-16 bg-neutral-600" />
      </div>

      {/* ── SCROLL ARROW — right ────────────────────────────────────────── */}
      <div className="absolute right-6 bottom-32 z-20 hidden lg:flex flex-col items-center gap-2">
        <span
          className="text-neutral-400 text-xs font-body uppercase tracking-widest"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          className="text-brand-red"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>

      {/* ── MAIN CONTENT ────────────────────────────────────────────────── */}
      <motion.div
        className="relative z-10 flex-1 flex items-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-24 lg:py-32">
          <div className={`grid gap-12 ${showForm ? 'lg:grid-cols-[1fr_380px]' : 'lg:grid-cols-1 max-w-3xl'}`}>

            {/* Text column */}
            <div className="flex flex-col justify-center">
              {eyebrow && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mb-4"
                >
                  <SectionEyebrow text={eyebrow} />
                </motion.div>
              )}

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="mb-6"
              >
                <h1
                  aria-label={heading}
                  className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-neutral-100 leading-[0.92] uppercase"
                >
                  {words.map((word, wi) => (
                    <motion.span
                      key={wi}
                      variants={wordVariants}
                      className="inline-block mr-[0.2em] last:mr-0"
                    >
                      {word.split('').map((char, ci) => (
                        <ScrambleChar key={ci} char={char} />
                      ))}
                    </motion.span>
                  ))}
                </h1>
              </motion.div>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-neutral-400 font-body text-lg leading-relaxed max-w-xl mb-8"
              >
                {description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/free-quote"
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand-red hover:bg-brand-red-dark text-white font-display text-base uppercase tracking-widest transition-colors duration-200"
                >
                  Get Free Estimate
                </Link>
                <a
                  href="tel:2543748326"
                  className="inline-flex items-center justify-center px-8 py-4 border border-neutral-400 hover:border-brand-red text-neutral-100 hover:text-brand-red font-display text-base uppercase tracking-widest transition-colors duration-200"
                >
                  Call 254-FRG-TEAM
                </a>
              </motion.div>

              {/* Trust micro-bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
              >
                {['GAF Master Elite', 'BBB A+', 'Free Estimates', 'RCAT Licensed'].map((t) => (
                  <span key={t} className="flex items-center gap-1.5 text-neutral-400 text-xs font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0" />
                    {t}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Form column — service/city pages only */}
            {showForm && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="hidden lg:block"
              >
                <LeadForm serviceName={serviceName} cityName={cityName} />
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      {/* ── SERVICE TEASER CARDS — bottom strip ─────────────────────────── */}
      <div className="relative z-10 border-t border-dark-700/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {topServices.map((svc, i) => (
              <motion.div
                key={svc.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
              >
                <Link
                  href={`/${svc.slug}`}
                  className="group flex items-center gap-4 px-6 py-5 bg-dark-900/70 hover:bg-dark-700/80 backdrop-blur-sm border-r border-dark-700/60 last:border-r-0 transition-colors duration-200"
                >
                  <span className="text-2xl">{svc.icon}</span>
                  <div>
                    <p className="font-display text-base text-neutral-100 uppercase group-hover:text-brand-red transition-colors duration-200">
                      {svc.name}
                    </p>
                    <p className="font-body text-xs text-neutral-400">{svc.tagline}</p>
                  </div>
                  <span className="ml-auto text-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
