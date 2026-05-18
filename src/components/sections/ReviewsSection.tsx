import { reviews } from '@/data/reviews'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

interface ReviewsSectionProps {
  cityName?: string
  serviceName?: string
  limit?: number
}

export default function ReviewsSection({ cityName, serviceName, limit = 3 }: ReviewsSectionProps) {
  const displayed = reviews.slice(0, limit)

  const headingPrefix = cityName
    ? `${cityName} Homeowners Love`
    : serviceName
    ? `What Customers Say About Our ${serviceName}`
    : '400+ Five-Star Reviews'

  return (
    <section className="bg-dark-900 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <SectionEyebrow text="Customer Reviews" />
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-neutral-100 uppercase mt-3 leading-tight">
              {headingPrefix}
            </h2>
          </div>
          {/* Google rating badge */}
          <div className="flex-shrink-0 flex items-center gap-3 bg-dark-700 border border-dark-500 px-5 py-3">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div>
              <p className="font-body font-semibold text-neutral-100 text-sm leading-none">4.9 on Google</p>
              <p className="font-body text-xs text-neutral-400 mt-0.5">400+ Reviews</p>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed.map((review) => (
            <div
              key={review.id}
              className="flex flex-col bg-dark-700 border border-dark-500 p-6"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-body text-sm text-neutral-300 italic leading-relaxed flex-1 mb-5">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="border-t border-dark-500 pt-4 flex items-start justify-between gap-3">
                <div>
                  <p className="font-body font-semibold text-neutral-100 text-sm">{review.name}</p>
                  <p className="font-body text-xs text-neutral-400 mt-0.5">{review.location} · {review.date}</p>
                </div>
                <span className="flex-shrink-0 font-body text-xs text-brand-red bg-brand-red/10 border border-brand-red/20 px-2 py-0.5 rounded whitespace-nowrap">
                  {review.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://g.page/alvroofing/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body font-semibold text-brand-red hover:text-neutral-100 transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            View All 400+ Reviews on Google
          </a>
        </div>
      </div>
    </section>
  )
}
