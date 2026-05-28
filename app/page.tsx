import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import FeaturedTrips from '@/components/FeaturedTrips';
import WhyBook from '@/components/WhyBook';
import WhatToExpect from '@/components/WhatToExpect';
import GalleryPreview from '@/components/GalleryPreview';
import Testimonials from '@/components/Testimonials';
import BookingCTA from '@/components/BookingCTA';
import FAQ, { FAQS } from '@/components/FAQ';
import Footer from '@/components/Footer';
import { faqSchema, localBusinessSchema, organizationSchema } from '@/lib/seo';
import { site } from '@/lib/site';

/**
 * HOMEPAGE
 *
 * Page-level metadata overrides the defaults set in app/layout.tsx.
 * Schema markup is emitted as JSON-LD at the bottom of the page.
 */
export const metadata: Metadata = {
  title: 'Keys Time Charters | Florida Keys & Flamingo Fishing Charters',
  description:
    'Private Florida Keys and Flamingo fishing charters — flats, backcountry, and Everglades trips for tarpon, bonefish, snook, and redfish with a local guide.',
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    title: 'Keys Time Charters | Florida Keys & Flamingo Fishing Charters',
    description:
      'Private flats and backcountry charters in the Florida Keys and Everglades National Park. Tarpon, bonefish, snook, and redfish with a local guide.',
    url: site.url,
    siteName: site.name,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        // TODO (CLIENT): replace with a real 1200×630 OG image at /public/images/og-cover.jpg
        url: '/images/og-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'A poled flats skiff on Florida Bay at sunrise — Keys Time Charters',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keys Time Charters | Florida Keys & Flamingo Fishing Charters',
    description:
      'Private flats and backcountry charters in the Florida Keys and Everglades. Tarpon, bonefish, snook, redfish.',
    images: ['/images/og-cover.jpg'],
  },
  keywords: [
    'Florida Keys fishing charter',
    'Flamingo fishing charter',
    'Everglades backcountry fishing',
    'Florida Bay fishing charter',
    'flats fishing Florida Keys',
    'tarpon fishing Florida Keys',
  ],
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <TrustBar />
        <FeaturedTrips />
        <WhyBook />
        <WhatToExpect />
        <GalleryPreview />
        <Testimonials />

        {/* Latest Fishing Reports */}
        <section aria-labelledby="latest-reports-heading" className="bg-white py-20 md:py-28">
          <div className="container-prose">
            <span className="eyebrow">From the Water</span>
            <h2
              id="latest-reports-heading"
              className="mt-4 font-display text-3xl font-semibold text-ink-900 sm:text-4xl"
            >
              Latest Fishing Reports
            </h2>
            <p className="mt-4 max-w-xl text-ink-700">
              Real trip reports from the water — current conditions, tides, and what's been
              biting out of Flamingo and the Everglades backcountry.
            </p>
            <div className="mt-10 max-w-2xl rounded-2xl border border-ink-100 bg-sand-50 p-8 shadow-card">
              <time
                dateTime="2026-05-17"
                className="text-xs font-semibold uppercase tracking-widest text-flats-700"
              >
                May 17, 2026
              </time>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink-900">
                <Link
                  href="/fishing-reports/flamingo-snook-fishing-report-may-17-2026"
                  className="transition-colors hover:text-flats-600"
                >
                  Flamingo Fishing Report: Double-Digit Snook
                </Link>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">
                A stiff east wind and late-morning low water set up a strong day of Everglades
                backcountry fishing out of Flamingo — double-digit snook and a shot at redfish.
              </p>
              <Link
                href="/fishing-reports/flamingo-snook-fishing-report-may-17-2026"
                className="mt-4 inline-block text-sm font-medium text-flats-600 transition-colors hover:text-flats-700"
              >
                Read the full report →
              </Link>
            </div>
            <Link
              href="/fishing-reports"
              className="mt-6 inline-block text-sm font-medium text-ink-500 transition-colors hover:text-ink-900"
            >
              All fishing reports →
            </Link>
          </div>
        </section>

        <BookingCTA />
        <FAQ />
      </main>
      <Footer />

      {/* JSON-LD: LocalBusiness */}
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />
      {/* JSON-LD: Organization — links business entity to founder */}
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />
      {/* JSON-LD: FAQPage — fed from the same array the FAQ component renders */}
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }}
      />
    </>
  );
}
