import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/data/blog-posts'

export const metadata: Metadata = {
  title: 'Houston Roofing Blog | ALV Roofing',
  description:
    'Roofing tips, storm damage guides, insurance claim advice, and Houston weather updates from ALV Roofing — Houston\'s most trusted roofing contractor.',
  alternates: {
    canonical: 'https://alvroofing.com/blog',
  },
  openGraph: {
    title: 'Houston Roofing Blog | ALV Roofing',
    description:
      'Expert roofing articles for Houston homeowners — storm damage, insurance claims, cost guides, and maintenance tips.',
    url: 'https://alvroofing.com/blog',
    siteName: 'ALV Roofing',
    locale: 'en_US',
    type: 'website',
  },
}

const categoryColors: Record<string, string> = {
  'Cost Guides': 'bg-green-900/60 text-green-300 border-green-700',
  'Materials': 'bg-blue-900/60 text-blue-300 border-blue-700',
  'Insurance': 'bg-amber-900/60 text-amber-300 border-amber-700',
  'Guides': 'bg-purple-900/60 text-purple-300 border-purple-700',
  'Storm Damage': 'bg-red-900/60 text-red-300 border-red-700',
  'Consumer Protection': 'bg-orange-900/60 text-orange-300 border-orange-700',
  'Maintenance': 'bg-teal-900/60 text-teal-300 border-teal-700',
  'Home Value': 'bg-indigo-900/60 text-indigo-300 border-indigo-700',
  'Financing': 'bg-sky-900/60 text-sky-300 border-sky-700',
  'Emergency': 'bg-rose-900/60 text-rose-300 border-rose-700',
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogIndexPage() {
  return (
    <div className="bg-dark-900 min-h-screen">
      {/* Hero */}
      <section className="bg-dark-800 border-b border-dark-700 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-body text-xs font-semibold text-brand-red uppercase tracking-widest mb-4">
            ALV ROOFING BLOG
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-neutral-100 uppercase leading-tight mb-6">
            Roofing Tips &amp;<br className="hidden sm:block" /> Houston Storm Updates
          </h1>
          <p className="font-body text-neutral-400 text-lg max-w-2xl leading-relaxed">
            Expert advice from Houston&apos;s most trusted roofing contractor. Storm damage guides, insurance
            claim walkthroughs, material comparisons, and money-saving tips for Houston homeowners.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col bg-dark-700 border border-dark-500 hover:border-brand-red transition-colors duration-200"
              >
                {/* Image placeholder */}
                <div className="aspect-video bg-dark-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-dark-600 to-dark-800" />
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(45deg, #333 0, #333 1px, transparent 0, transparent 50%)',
                      backgroundSize: '12px 12px',
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-4xl text-dark-500 uppercase tracking-widest select-none">
                      ALV
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 sm:p-6">
                  {/* Meta row */}
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`font-body text-xs px-2 py-0.5 border rounded ${
                        categoryColors[post.category] ?? 'bg-dark-600 text-neutral-400 border-dark-400'
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="font-body text-xs text-neutral-500">{formatDate(post.date)}</span>
                  </div>

                  {/* Title */}
                  <h2 className="font-display text-lg sm:text-xl text-neutral-100 uppercase leading-tight mb-3 group-hover:text-brand-red transition-colors duration-200">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="font-body text-sm text-neutral-400 leading-relaxed flex-1 mb-5">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between border-t border-dark-500 pt-4">
                    <span className="font-body text-xs text-neutral-500">{post.readTime}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="font-body text-sm font-semibold text-brand-red hover:text-neutral-100 transition-colors duration-200"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-dark-800 border-t border-dark-700 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-neutral-100 uppercase mb-4">
            Need a Roof Inspection?
          </h2>
          <p className="font-body text-neutral-400 mb-6">
            Free same-day inspections across greater Houston. No obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-quote"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-red hover:bg-brand-red-dark text-white font-display text-base uppercase tracking-widest transition-colors duration-200"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:2543748326"
              className="inline-flex items-center justify-center px-8 py-4 border border-brand-red text-brand-red hover:bg-brand-red hover:text-white font-display text-base uppercase tracking-widest transition-colors duration-200"
            >
              Call 254-FRG-TEAM
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
