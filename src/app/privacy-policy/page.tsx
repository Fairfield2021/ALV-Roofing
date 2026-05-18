import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | ALV Roofing',
  robots: { index: false, follow: false },
}

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-dark-900 pt-32 pb-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl sm:text-5xl text-neutral-100 uppercase mb-8">Privacy Policy</h1>
        <div className="font-body text-neutral-400 space-y-6 leading-relaxed text-sm sm:text-base">
          <p>Last updated: January 2025</p>
          <p>
            ALV Roofing (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the website alvroofing.com. This page informs you of our
            policies regarding the collection, use, and disclosure of personal information when you use our site.
          </p>
          <h2 className="font-display text-2xl text-neutral-200 uppercase mt-8">Information We Collect</h2>
          <p>
            We collect information you provide directly — such as your name, phone number, email address, and
            property address — when you submit a quote request or contact form on our website.
          </p>
          <h2 className="font-display text-2xl text-neutral-200 uppercase mt-8">How We Use Your Information</h2>
          <p>
            We use your information solely to respond to your roofing inquiry, provide estimates, and communicate
            about your project. We do not sell or share your personal information with third parties for marketing purposes.
          </p>
          <h2 className="font-display text-2xl text-neutral-200 uppercase mt-8">Contact Us</h2>
          <p>
            Questions about this policy? Contact us at{' '}
            <a href="mailto:mac@alvroofing.com" className="text-brand-red hover:underline">mac@alvroofing.com</a>{' '}
            or call <a href="tel:2543748326" className="text-brand-red hover:underline">254-FRG-TEAM</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
