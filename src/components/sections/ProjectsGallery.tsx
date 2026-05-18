'use client'

import { motion } from 'framer-motion'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

interface Project {
  id: number
  name: string
  location: string
  serviceType: string
  description: string
}

const allProjects: Project[] = [
  {
    id: 1,
    name: 'Cinco Ranch Complete Reroof',
    location: 'Katy, TX',
    serviceType: 'Roof Replacement',
    description: 'Full tear-off and GAF Timberline HDZ installation on a 3,400 sq ft home after Hurricane Beryl damage.',
  },
  {
    id: 2,
    name: 'Sugar Land Hail Damage Claim',
    location: 'Sugar Land, TX',
    serviceType: 'Hail Damage Repair',
    description: 'Documented and filed a State Farm hail claim totaling $18,400. Homeowner paid deductible only.',
  },
  {
    id: 3,
    name: 'The Woodlands Metal Roof',
    location: 'The Woodlands, TX',
    serviceType: 'Metal Roofing',
    description: 'Standing seam metal roof installation with 50-year warranty on a 4,200 sq ft custom home in Creekside Park.',
  },
  {
    id: 4,
    name: 'Pearland Storm Emergency Repair',
    location: 'Pearland, TX',
    serviceType: 'Emergency Roof Repair',
    description: 'Same-day emergency tarp and repair after a large tree limb punctured the roof deck during a severe storm.',
  },
  {
    id: 5,
    name: 'Cypress Commercial Flat Roof',
    location: 'Cypress, TX',
    serviceType: 'Flat Roofing',
    description: 'Full TPO flat roof replacement on an 8,000 sq ft commercial building in the Bridgeland corridor.',
  },
  {
    id: 6,
    name: 'Galleria Tile Reroof',
    location: 'Houston, TX',
    serviceType: 'Tile Roofing',
    description: 'Clay tile removal and replacement with matching concrete tile on a Mediterranean-style home off Post Oak.',
  },
  {
    id: 7,
    name: 'Spring Branch Asphalt Shingle',
    location: 'Spring Branch, TX',
    serviceType: 'Asphalt Shingle Roofing',
    description: 'Owens Corning Duration shingle installation with full ridge vent upgrade and attic ventilation correction.',
  },
  {
    id: 8,
    name: 'League City Roof Inspection',
    location: 'League City, TX',
    serviceType: 'Roof Inspections',
    description: 'Pre-sale inspection revealing hidden storm damage; buyer credit negotiated and repairs completed in 3 days.',
  },
]

const serviceColors: Record<string, string> = {
  'Roof Replacement': 'bg-brand-red',
  'Hail Damage Repair': 'bg-blue-700',
  'Metal Roofing': 'bg-gray-600',
  'Emergency Roof Repair': 'bg-orange-700',
  'Flat Roofing': 'bg-teal-700',
  'Tile Roofing': 'bg-amber-700',
  'Asphalt Shingle Roofing': 'bg-slate-600',
  'Roof Inspections': 'bg-green-700',
}

interface ProjectsGalleryProps {
  serviceSlug?: string
  citySlug?: string
  cityName?: string
  serviceName?: string
  limit?: number
}

export default function ProjectsGallery({
  serviceSlug,
  citySlug,
  cityName,
  serviceName,
  limit = 6,
}: ProjectsGalleryProps) {
  const displayed = allProjects.slice(0, limit)

  const headingCity = cityName ?? 'Houston'
  const headingService = serviceName ? `${serviceName} ` : ''

  return (
    <section className="bg-dark-900 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <SectionEyebrow text="Recent Projects" />
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-neutral-100 uppercase mt-3 leading-tight">
            {headingService}Roofing Projects<br className="hidden sm:block" /> Across {headingCity}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group relative overflow-hidden bg-dark-700 border border-dark-500"
            >
              {/* Placeholder image area */}
              <div className="aspect-video bg-dark-600 relative overflow-hidden">
                {/* Gradient pattern placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-dark-600 to-dark-800" />
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, #333 0, #333 1px, transparent 0, transparent 50%)',
                    backgroundSize: '12px 12px',
                  }}
                />

                {/* Hover dark overlay */}
                <motion.div
                  className="absolute inset-0 bg-dark-900"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.7 }}
                  transition={{ duration: 0.25 }}
                />

                {/* Project info — slides up on hover */}
                <motion.div
                  className="absolute inset-x-0 bottom-0 p-4"
                  initial={{ y: '100%', opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                >
                  <p className="font-body text-sm text-neutral-200 leading-snug">{project.description}</p>
                </motion.div>

                {/* Location badge — always visible */}
                <div className="absolute top-3 right-3">
                  <span className="font-body text-xs text-white bg-dark-900/80 px-2 py-1 rounded">
                    {project.location}
                  </span>
                </div>
              </div>

              {/* Card footer */}
              <div className="p-4">
                <h3 className="font-display text-lg text-neutral-100 uppercase leading-tight mb-1">
                  {project.name}
                </h3>
                <span
                  className={`inline-block font-body text-xs text-white px-2 py-0.5 rounded ${serviceColors[project.serviceType] ?? 'bg-dark-500'}`}
                >
                  {project.serviceType}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
