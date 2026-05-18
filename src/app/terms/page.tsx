import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | ALV Roofing',
  robots: { index: false, follow: false },
}

export default function TermsPage() {
  return (
    <section className="bg-dark-900 pt-32 pb-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl sm:text-5xl text-neutral-100 uppercase mb-8">Terms of Service</h1>
        <div className="font-body text-neutral-400 space-y-6 leading-relaxed text-sm sm:text-base">
          <p>Last updated: January 2025</p>
          <p>
            By using the ALV Roofing website (alvroofing.com), you agree to these terms. Please read them carefully.
          </p>
          <h2 className="font-display text-2xl text-neutral-200 uppercase mt-8">Use of Site</h2>
          <p>
            This website is provided for informational purposes and to facilitate contact with ALV Roofing.
            You agree not to misuse the site or submit false information through our contact forms.
          </p>
          <h2 className="font-display text-2xl text-neutral-200 uppercase mt-8">Estimates &amp; Quotes</h2>
          <p>
            Online cost estimates are approximate and for reference only. Final pricing is determined after
            an in-person inspection by an ALV Roofing representative.
          </p>
          <h2 className="font-display text-2xl text-neutral-200 uppercase mt-8">Contact Us</h2>
          <p>
            Questions? Contact us at{' '}
            <a href="mailto:mac@alvroofing.com" className="text-brand-red hover:underline">mac@alvroofing.com</a>{' '}
            or call <a href="tel:2543748326" className="text-brand-red hover:underline">254-FRG-TEAM</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
