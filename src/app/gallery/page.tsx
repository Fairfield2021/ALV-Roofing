import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import ProjectsGallery from '@/components/sections/ProjectsGallery'
import CTABand from '@/components/sections/CTABand'

export const metadata: Metadata = {
  title: 'Roofing Project Gallery | ALV Roofing Houston',
  description:
    'Browse ALV Roofing\'s completed projects across greater Houston — roof replacements, hail damage repairs, metal roofing, flat roofing, and more. See the quality before you hire.',
  alternates: {
    canonical: 'https://alvroofing.com/gallery',
  },
  openGraph: {
    title: 'Roofing Project Gallery | ALV Roofing Houston',
    description:
      'Real projects, real results. View completed roofing work from Katy to Pearland, The Woodlands to League City.',
    url: 'https://alvroofing.com/gallery',
    siteName: 'ALV Roofing',
    locale: 'en_US',
    type: 'website',
  },
}

export default function GalleryPage() {
  return (
    <>
      <Hero
        eyebrow="Project Gallery"
        heading="Houston Roofing Projects"
        description="From complete roof replacements to emergency storm repairs — browse our completed projects across the greater Houston area. Every project is backed by our 5-year workmanship warranty."
      />
      <TrustBar />
      <ProjectsGallery limit={18} />
      <CTABand />
    </>
  )
}
