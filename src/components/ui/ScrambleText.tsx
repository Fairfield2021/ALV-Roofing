'use client'

import { useCallback, useState } from 'react'
import { motion } from 'framer-motion'

// Standard telephone keypad mapping
const KEYPAD: Record<string, string> = {
  A:'2',B:'2',C:'2',
  D:'3',E:'3',F:'3',
  G:'4',H:'4',I:'4',
  J:'5',K:'5',L:'5',
  M:'6',N:'6',O:'6',
  P:'7',Q:'7',R:'7',S:'7',
  T:'8',U:'8',V:'8',
  W:'9',X:'9',Y:'9',Z:'9',
}

export function ScrambleChar({ char }: { char: string }) {
  const target = KEYPAD[char.toUpperCase()] ?? null
  const [active, setActive] = useState(false)

  const onEnter = useCallback(() => { if (target) setActive(true) }, [target])
  const onLeave = useCallback(() => { if (target) setActive(false) }, [target])

  if (!target) return <span aria-hidden="true">{char}</span>

  return (
    <span
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="relative inline-block cursor-crosshair select-none"
      style={{ perspective: '300px' }}
    >
      <span
        aria-hidden="true"
        className="transition-opacity duration-[80ms]"
        style={{ opacity: active ? 0 : 1 }}
      >
        {char}
      </span>
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center text-brand-red"
        animate={active
          ? { opacity: 1, rotateX: 0, scale: 1 }
          : { opacity: 0, rotateX: -60, scale: 0.6 }
        }
        transition={{ duration: 0.12, ease: 'easeOut' }}
      >
        {target}
      </motion.span>
    </span>
  )
}

// Convenience wrapper — splits a string and renders each char
export function ScrambleText({ text, 'aria-label': ariaLabel, className }: {
  text: string
  'aria-label'?: string
  className?: string
}) {
  return (
    <span aria-label={ariaLabel ?? text} className={className}>
      {text.split('').map((char, i) => (
        <ScrambleChar key={i} char={char} />
      ))}
    </span>
  )
}
