'use client'

import { motion } from 'framer-motion'

interface AnimatedHeadingProps {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4'
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
}

export default function AnimatedHeading({
  text,
  className = '',
  as: Tag = 'h2',
}: AnimatedHeadingProps) {
  const words = text.split(' ')

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <Tag className={`font-display ${className}`}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={wordVariants}
            className="inline-block mr-[0.25em] last:mr-0"
          >
            {word}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  )
}
