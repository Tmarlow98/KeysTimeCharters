import type { Metadata } from 'next';
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
import { faqSchema, localBusinessSchema } from '@/lib/seo';
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
        <BookingCTA />
        <FAQ />
      </main>
      <Footer />

      {/* JSON-LD: LocalBusiness */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />
      {/* JSON-LD: FAQPage — fed from the same array the FAQ component renders */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }}
      />
    </>
  );
}
