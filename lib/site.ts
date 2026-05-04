/**
 * Central place for business info that appears in many components.
 * Update phone / email / booking link here and the whole site picks it up.
 *
 * TODO (CLIENT): replace placeholders below with real values before launch.
 */
export const site = {
  name: 'Keys Time Charters',
  legalName: 'Keys Time Charters LLC',
  tagline: 'Florida Keys & Flamingo Fishing Charters',
  description:
    'Private flats and backcountry fishing charters in the Florida Keys and Everglades National Park. Tarpon, bonefish, snook, and redfish with a local guide.',

  url: 'https://keystimecharters.com',

  // TODO: replace with real contact info
  phone: '(305) 555-0123',
  phoneHref: 'tel:+13055550123',
  email: 'book@keystimecharters.com',
  emailHref: 'mailto:book@keystimecharters.com',

  // TODO: replace with real booking link (FareHarbor, Calendly, etc.)
  bookingUrl: '/contact',

  // TODO: replace with real coordinates / departure point if you want them in schema
  departurePoint: 'Florida Keys & Flamingo, FL',
  serviceArea: ['Florida Keys', 'Flamingo', 'Florida Bay', 'Everglades National Park'],

  // Social — leave blank strings to hide a link in the footer
  social: {
    instagram: 'https://instagram.com/keystimecharters',
    facebook: '',
    youtube: '',
  },

  // Fishing seasons / hours of operation for LocalBusiness schema
  hours: 'Mo-Su 05:00-19:00',
} as const;

export type SiteConfig = typeof site;
