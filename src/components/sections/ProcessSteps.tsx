import SectionEyebrow from '@/components/ui/SectionEyebrow'

interface ProcessStepsProps {
  serviceName: string
  cityName: string
}

const steps = [
  {
    number: '01',
    title: 'Free Inspection',
    description:
      'A certified ALV Roofing inspector arrives at your property — same day in most cases. We document all damage, measure your roof, and check ventilation, decking, and flashing with no cost and no obligation.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Detailed Estimate',
    description:
      'We present a written line-item estimate covering materials, labor, waste removal, permits, and warranty. If insurance is involved, we prepare the full claim documentation and work directly with your adjuster.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Expert Installation',
    description:
      'Our GAF-certified crew handles complete tear-off, decking inspection, waterproofing, and installation of premium materials. Most jobs are completed in one to two days. Your property is protected and respected throughout.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Final Walkthrough',
    description:
      'Before we leave, we walk the property with you, confirm all debris is removed, review the completed work, and hand you your warranty documentation. We do not consider a job done until you are fully satisfied.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
]

export default function ProcessSteps({ serviceName, cityName }: ProcessStepsProps) {
  return (
    <section className="bg-dark-800 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <SectionEyebrow text="How It Works" />
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-neutral-100 uppercase mt-3 leading-tight">
            Our {serviceName} Process in {cityName}
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[calc(100%_-_12px)] w-full h-px bg-dark-500 z-0" />
              )}

              {/* Number circle */}
              <div className="relative z-10 w-14 h-14 rounded-full border-2 border-brand-red flex items-center justify-center mb-5 bg-dark-800">
                <span className="text-brand-red">{step.icon}</span>
              </div>

              {/* Step label */}
              <span className="font-display text-xs text-brand-red uppercase tracking-widest mb-1">
                Step {step.number}
              </span>

              {/* Title */}
              <h3 className="font-display text-xl text-neutral-100 uppercase mb-3 leading-tight">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm text-neutral-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
