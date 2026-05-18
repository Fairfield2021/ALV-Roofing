import type { Metadata } from 'next'
import { Bebas_Neue, Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import MobileCtaBar from '@/components/layout/MobileCtaBar'
import { buildLocalBusinessSchema } from '@/lib/schema'
import SchemaScript from '@/components/ui/SchemaScript'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "ALV Roofing | Houston's Premier Roofing Company",
  description:
    "ALV Roofing provides expert roofing services across Houston, TX. Licensed, insured, 4.9-star rated with 400+ reviews. GAF Master Elite & Owens Corning Platinum Preferred. Call 254-FRG-TEAM.",
  metadataBase: new URL('https://alvroofing.com'),
  openGraph: {
    siteName: 'ALV Roofing',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${montserrat.variable}`}>
      <body>
        <SchemaScript schema={buildLocalBusinessSchema()} />
        <Navbar />
        {/*
          pb-14 lg:pb-0 — on mobile, pushes footer content above the
          fixed MobileCtaBar (56px / h-14). Not needed on desktop.
        */}
        <main className="pb-14 lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  )
}
