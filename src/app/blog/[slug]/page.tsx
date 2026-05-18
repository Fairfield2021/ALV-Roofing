import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/data/blog-posts'
import { buildArticleSchema } from '@/lib/schema'
import SchemaScript from '@/components/ui/SchemaScript'

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: `${post.title} | ALV Roofing Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://alvroofing.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://alvroofing.com/blog/${post.slug}`,
      siteName: 'ALV Roofing',
      locale: 'en_US',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

const articleContent: Record<string, string[]> = {
  'roof-replacement-cost-houston-2025': [
    "Roof replacement is one of the largest home improvement investments a Houston homeowner will make. In 2025, the typical cost ranges from $9,000 to $20,000 for a standard single-family home, though premium materials like metal or tile can push the total well above $30,000. Understanding what drives these numbers is the key to getting a fair price.",
    "The single biggest cost factor is roof size, measured in roofing squares (one square = 100 square feet). A 2,000 square foot home typically has a roof surface of 22–25 squares once pitch is factored in. Materials run $250–$600 per square for asphalt shingles, $700–$1,200 per square for metal, and $1,500–$3,000 per square for clay tile. Labor in the Houston metro averages $150–$250 per square installed.",
    "Roof pitch — the steepness of your roof — significantly affects labor cost. A low-pitch 4/12 roof is straightforward to work on. A steep 8/12 or 10/12 pitch requires more safety equipment, slower work pace, and higher labor rates, often adding 20–40% to the base cost. Houston homes with complex hip roofs or multiple valleys also cost more due to additional cuts and flashing work.",
    "Decking replacement is the most common hidden cost. When old roofing is torn off, damaged or rotted OSB or plywood sheathing is revealed. Most Houston homes built before 2000 have some decking damage from years of humidity. Replacing decking costs $70–$120 per sheet, and it is not uncommon for a full replacement to require 10–30 sheets of new decking.",
    "Insurance can dramatically reduce your out-of-pocket cost. If your roof has hail or wind damage — extremely common in Houston — your homeowners insurance may cover the full replacement cost minus your deductible. ALV Roofing helps document and file claims, and most of our clients who qualify for insurance coverage pay only their deductible, which averages $1,000–$2,500 in Harris County.",
    "Getting the best price means getting multiple written estimates with line-item breakdowns. Be wary of unusually low bids — they often indicate cheaper materials, unlicensed crews, or missing components like ice-and-water shield and proper ventilation. A properly installed roof with GAF or Owens Corning materials and a certified crew is a 20–30 year investment. Cutting corners on a $12,000 job can cost you another $12,000 five years later.",
  ],
  'best-shingles-houston-heat-humidity': [
    "Houston's climate is uniquely brutal on roofing materials. The combination of extreme summer heat (attic temperatures exceeding 160°F), 50+ inches of annual rainfall, oppressive humidity, and the constant threat of hurricane-force winds creates conditions that accelerate the failure of inferior shingles. Choosing the right product for the Houston climate can add 5–10 years to your roof's life.",
    "GAF Timberline HDZ and Timberline CS are the top performers in Houston based on our decade of installations. These architectural shingles feature StainGuard Plus anti-algae protection — critical in Houston's humid environment where black algae streaking is a near-universal problem on unprotected roofs within 3–5 years. The HDZ's LayerLock technology provides exceptional wind resistance rated up to 130 mph.",
    "Owens Corning Duration shingles are our other top recommendation. The SureNail Technology strip creates a nailing zone that dramatically outperforms standard fastening in wind events. Independent testing shows Duration shingles withstand 130 mph winds, and real-world performance during Hurricane Beryl confirmed this. Duration shingles with the WeatherGuard HP wind warranty are our standard recommendation for any Houston home.",
    "Impact-resistant (IR) shingles deserve serious consideration in the Houston area. Class 4 impact-resistant shingles from GAF, Owens Corning, or CertainTeed can reduce your homeowners insurance premium by 20–30% annually, often recovering their premium cost within 2–3 years. They also survive hail events that would destroy standard shingles, meaning fewer claims and less disruption. Algae-resistant, impact-resistant options are the smart choice for most Houston homeowners.",
    "What to avoid: three-tab shingles have largely been phased out for good reason. Their flat profile provides less wind resistance, they have shorter warranties, and they look dated on modern homes. Cheap off-brand shingles from discount suppliers often lack the granule quality and fiberglass mat thickness to withstand Houston summers. We have seen sub-par shingles from unknown manufacturers fail in as few as 7 years in Houston's climate.",
    "Ventilation matters as much as the shingle itself. Even the best shingle will fail prematurely if your attic is poorly ventilated, because superheated attic air accelerates shingle degradation from below. A proper ridge-and-soffit ventilation system keeps attic temps manageable and extends shingle life by 25–40%. This is one of the most commonly overlooked elements in Houston roofing — and one ALV Roofing always addresses.",
  ],
}

function getArticleContent(slug: string, title: string): string[] {
  if (articleContent[slug]) return articleContent[slug]
  // Generate generic high-quality content based on title
  return [
    `Houston homeowners face unique roofing challenges that make expertise and local knowledge essential. This guide covers everything you need to know about ${title.toLowerCase()}, drawing from over a decade of experience installing and repairing roofs across the greater Houston metropolitan area.`,
    `The Houston climate — characterized by intense summer heat, high humidity, frequent severe thunderstorms, and periodic hurricane threats — places extraordinary demands on roofing systems. What works in a more temperate climate may fail prematurely in our environment. Understanding these local factors is the first step toward making a smart roofing decision.`,
    `One of the most important things Houston homeowners can do is work with a locally based, licensed contractor who understands Harris County building codes, HOA requirements, and the specific failure modes common in our region. Storm chasers and out-of-town contractors often lack this knowledge, and homeowners pay the price in callbacks, warranty disputes, and substandard work.`,
    `Insurance plays a larger role in Houston roofing than almost anywhere else in the country. Texas leads the nation in hail damage claims, and the Houston area regularly experiences severe weather events that cause widespread roof damage. Knowing how to document damage, file a claim correctly, and work with your adjuster can mean the difference between paying your deductible and paying tens of thousands out of pocket.`,
    `Material selection is critical in Houston. For most residential applications, we recommend GAF Timberline HDZ or Owens Corning Duration architectural shingles with Class 4 impact resistance ratings. These products provide superior wind and hail resistance, carry manufacturer warranties of 30–50 years, and qualify for insurance discounts in Texas. Metal roofing is an excellent premium option for homeowners planning to stay long-term.`,
    `When it is time to move forward, get at least three written estimates with line-item breakdowns covering materials, labor, tear-off, disposal, permits, and warranty terms. Compare the total value — not just the price. A slightly higher bid from a GAF Master Elite certified contractor with a strong warranty will almost always outperform the lowest bid over the life of your roof. Call ALV Roofing at 254-FRG-TEAM for a free same-day inspection and honest assessment.`,
  ]
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const schema = buildArticleSchema(post.title, post.date, post.author)
  const paragraphs = getArticleContent(post.slug, post.title)
  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3)
  const fallbackRelated = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)
  const displayRelated = relatedPosts.length >= 2 ? relatedPosts : fallbackRelated

  return (
    <>
      <SchemaScript schema={schema} />
      <div className="bg-dark-900 min-h-screen">
        {/* Hero image placeholder */}
        <div className="w-full bg-dark-700 border-b border-dark-600" style={{ height: '340px' }}>
          <div className="max-w-7xl mx-auto h-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-dark-700 to-dark-900" />
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, #333 0, #333 1px, transparent 0, transparent 50%)',
                backgroundSize: '14px 14px',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16">
            {/* Article body */}
            <article>
              {/* Eyebrow */}
              <p className="font-body text-xs font-semibold text-brand-red uppercase tracking-widest mb-4">
                {post.category}
              </p>

              {/* Title */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-neutral-100 uppercase leading-tight mb-6">
                {post.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-dark-600">
                <span className="font-body text-sm text-neutral-400">
                  By <strong className="text-neutral-200">{post.author}</strong>
                </span>
                <span className="font-body text-sm text-neutral-500">{formatDate(post.date)}</span>
                <span className="font-body text-sm text-neutral-500">{post.readTime}</span>
              </div>

              {/* Body paragraphs */}
              <div className="space-y-6 font-body text-neutral-400 text-base leading-relaxed">
                {paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* CTA inside article */}
              <div className="mt-12 p-6 bg-dark-700 border border-brand-red/30">
                <h3 className="font-display text-2xl text-neutral-100 uppercase mb-3">
                  Need a Free Roof Inspection?
                </h3>
                <p className="font-body text-neutral-400 text-sm mb-4">
                  ALV Roofing provides free, no-obligation inspections throughout greater Houston. Same-day
                  availability in most areas.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/free-quote"
                    className="inline-flex items-center justify-center px-6 py-3 bg-brand-red hover:bg-brand-red-dark text-white font-display text-sm uppercase tracking-widest transition-colors duration-200"
                  >
                    Get Free Estimate
                  </Link>
                  <a
                    href="tel:2543748326"
                    className="inline-flex items-center justify-center px-6 py-3 border border-brand-red text-brand-red hover:bg-brand-red hover:text-white font-display text-sm uppercase tracking-widest transition-colors duration-200"
                  >
                    Call 254-FRG-TEAM
                  </a>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* CTA card */}
              <div className="bg-dark-700 border border-dark-500 p-6">
                <h3 className="font-display text-xl text-neutral-100 uppercase mb-3">
                  Free Roof Inspection
                </h3>
                <p className="font-body text-sm text-neutral-400 mb-4 leading-relaxed">
                  Hail damage, leaks, or storm impact? ALV Roofing responds same-day across Houston.
                </p>
                <a
                  href="tel:2543748326"
                  className="block text-center font-display text-2xl text-brand-red hover:text-brand-red-dark transition-colors duration-200 mb-4"
                >
                  254-FRG-TEAM
                </a>
                <Link
                  href="/free-quote"
                  className="flex items-center justify-center w-full py-3 bg-brand-red hover:bg-brand-red-dark text-white font-display text-sm uppercase tracking-widest transition-colors duration-200"
                >
                  Request Estimate
                </Link>
                <ul className="mt-4 space-y-1.5">
                  {['Same-day response', 'Licensed & Insured', 'GAF Master Elite', 'No obligation'].map((item) => (
                    <li key={item} className="flex items-center gap-2 font-body text-xs text-neutral-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related posts */}
              <div>
                <h3 className="font-display text-lg text-neutral-100 uppercase mb-4 border-b border-dark-600 pb-3">
                  Related Articles
                </h3>
                <div className="space-y-4">
                  {displayRelated.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="group block"
                    >
                      <p className="font-body text-sm text-neutral-300 group-hover:text-brand-red transition-colors duration-200 leading-snug mb-1">
                        {related.title}
                      </p>
                      <p className="font-body text-xs text-neutral-500">{formatDate(related.date)}</p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Back to blog */}
              <Link
                href="/blog"
                className="flex items-center gap-2 font-body text-sm text-neutral-400 hover:text-brand-red transition-colors duration-200"
              >
                ← All Blog Posts
              </Link>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
