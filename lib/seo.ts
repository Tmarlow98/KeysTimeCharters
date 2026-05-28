import { site } from './site';

/**
 * JSON-LD builders. Keep these as plain objects so they can be
 * dropped into a <Script type="application/ld+json"> tag from any page.
 */

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${site.url}/#business`,
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: `${site.url}/images/og-cover.jpg`,
    priceRange: '$$$',
    currenciesAccepted: 'USD',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Flamingo',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.143,
      longitude: -80.9194,
    },
    hasMap: 'https://maps.google.com/?q=Flamingo+Marina+Everglades+National+Park+Florida',
    founder: {
      '@type': 'Person',
      '@id': `${site.url}/#captain-tyler-marlow`,
      name: 'Tyler Marlow',
    },
    areaServed: site.serviceArea.map((a) => ({ '@type': 'Place', name: a })),
    openingHours: site.hours,
    sameAs: Object.values(site.social).filter(Boolean),
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/images/og-cover.jpg`,
    sameAs: Object.values(site.social).filter(Boolean),
    founder: {
      '@type': 'Person',
      '@id': `${site.url}/#captain-tyler-marlow`,
      name: 'Tyler Marlow',
    },
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  image: string;
  areaServed: string[];
  offers: { name: string; price: number; duration: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${opts.url}#service`,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    image: opts.image,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${site.url}/#business`,
    },
    areaServed: opts.areaServed.map((a) => ({ '@type': 'Place', name: a })),
    offers: opts.offers.map((o) => ({
      '@type': 'Offer',
      name: o.name,
      price: o.price,
      priceCurrency: 'USD',
      description: o.duration,
    })),
  };
}

export function reportListSchema(
  items: { title: string; url: string; datePublished: string; description: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${site.url}/fishing-reports#collection`,
    name: 'Florida Keys & Flamingo Fishing Reports',
    description:
      'Recent fishing reports from Keys Time Charters covering Florida Keys, Flamingo, Everglades National Park, and Florida Bay.',
    url: `${site.url}/fishing-reports`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: item.url,
        name: item.title,
      })),
    },
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

export function blogPostingSchema(opts: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: opts.title,
    description: opts.description,
    url: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: {
      '@type': 'Person',
      '@id': `${site.url}/#captain-tyler-marlow`,
      name: opts.authorName ?? 'Captain Tyler Marlow',
    },
    image: opts.image,
    publisher: {
      '@type': 'LocalBusiness',
      name: site.name,
      url: site.url,
    },
  };
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${site.url}/#captain-tyler-marlow`,
    name: 'Tyler Marlow',
    givenName: 'Tyler',
    familyName: 'Marlow',
    honorificPrefix: 'Captain',
    jobTitle: 'Fishing Guide & Charter Captain',
    description:
      'USCG-licensed fishing guide and Commercial Use Authorization permit holder for Everglades National Park. Specializes in light tackle and fly fishing for tarpon, snook, and redfish out of Flamingo and the Florida Keys.',
    image: `${site.url}/images/og-cover.jpg`,
    url: `${site.url}/meet-your-captain`,
    telephone: site.phone,
    email: site.email,
    sameAs: Object.values(site.social).filter(Boolean),
    worksFor: {
      '@type': 'LocalBusiness',
      '@id': `${site.url}/#business`,
      name: site.name,
      url: site.url,
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'License',
        name: "USCG Captain's License",
        recognizedBy: { '@type': 'Organization', name: 'U.S. Coast Guard' },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Permit',
        name: 'Commercial Use Authorization — Everglades National Park',
        recognizedBy: { '@type': 'GovernmentOrganization', name: 'National Park Service' },
      },
    ],
    knowsAbout: [
      'Light tackle fishing',
      'Fly fishing',
      'Paddle tail lures',
      'Tarpon fishing',
      'Redfish',
      'Snook',
      'Trout',
      'Everglades backcountry fishing',
      'Florida Keys flats fishing',
      'Flamingo fishing',
    ],
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    url: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: {
      '@type': 'Person',
      '@id': `${site.url}/#captain-tyler-marlow`,
      name: 'Captain Tyler Marlow',
    },
    image: opts.image,
    publisher: {
      '@type': 'LocalBusiness',
      '@id': `${site.url}/#business`,
      name: site.name,
      url: site.url,
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
