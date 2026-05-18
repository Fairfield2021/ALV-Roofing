import type { FC } from 'react'

interface SectionEyebrowProps {
  text: string
}

const SectionEyebrow: FC<SectionEyebrowProps> = ({ text }) => {
  return (
    <span className="inline-block border-l-2 border-brand-red pl-3 text-brand-red text-xs font-body font-semibold uppercase tracking-widest">
      {text}
    </span>
  )
}

export default SectionEyebrow
