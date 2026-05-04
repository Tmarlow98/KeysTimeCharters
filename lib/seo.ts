import { site } from './site';

/**
 * JSON-LD builders. Keep these as plain objects so they can be
 * dropped into a <Script type="application/ld+json"> tag from any page.
 */

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${site.url}#business`,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: `${site.url}/images/og-cover.jpg`,
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    areaServed: site.serviceArea.map((a) => ({ '@type': 'Place', name: a })),
    openingHours: site.hours,
    sameAs: Object.values(site.social).filter(Boolean),
  };
}

export type FAQItem = { question: string; answer: string };

export function faqSchema(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
