import Link from 'next/link'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

const credentials = [
  'RCAT Licensed & Fully Insured',
  'GAF Master Elite Certified',
  'Same-Day Free Estimates',
  'Workers Comp on Every Crew',
  '10 Years Serving Houston',
]

export default function AboutSection() {
  return (
    <section className="bg-dark-900 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16 items-center">
          {/* Image placeholder — 60% width on lg+ */}
          <div className="order-2 lg:order-1 relative">
            <div
              className="w-full aspect-[4/3] lg:aspect-[5/4] bg-dark-700"
              /* Replace with real image: <Image src="/images/about-crew.jpg" fill alt="ALV Roofing crew" className="object-cover" /> */
            >
              {/* Decorative pattern placeholder */}
              <div className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 0, transparent 40px), repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 0, transparent 40px)',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-6xl text-dark-500 uppercase tracking-widest select-none">ALV Roofing</span>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 lg:-right-8 bg-brand-red px-6 py-4 shadow-2xl">
              <p className="font-display text-3xl text-white leading-none">10+</p>
              <p className="font-body text-xs text-white/80 uppercase tracking-wide">Years Experience</p>
            </div>
          </div>

          {/* Text column */}
          <div className="order-1 lg:order-2">
            <SectionEyebrow text="Why Choose ALV Roofing" />
            <h2 className="font-display text-4xl sm:text-5xl lg:text-5xl text-neutral-100 uppercase mt-4 mb-6 leading-tight">
              Houston's Most Trusted Roofing Contractor
            </h2>
            <p className="font-body text-neutral-400 leading-relaxed mb-8">
              ALV Roofing has been protecting Houston homes for over 10 years. As a GAF Master Elite contractor
              — a designation earned by fewer than 2% of roofers in the country — we bring unmatched expertise,
              premium materials, and a customer-first approach to every project. When storms hit Houston, we are
              the company your neighbors call.
            </p>

            <ul className="space-y-3 mb-10">
              {credentials.map((item) => (
                <li key={item} className="flex items-center gap-3 font-body text-neutral-200">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-red/15 border border-brand-red flex items-center justify-center">
                    <svg className="w-3 h-3 text-brand-red" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-body font-semibold text-brand-red hover:text-neutral-100 transition-colors duration-200 group"
            >
              Learn More About ALV Roofing
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
