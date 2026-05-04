/**
 * Central place for business info that appears in many components.
 * Update phone / email / booking link here and the whole site picks it up.
 *
 * TODO (CLIENT): replace placeholders below with real values before launch.
 */
export const site = {
  name: 'Keys Time Charters',
  legalName: 'Keys Time Charters, Inc.',
  tagline: 'Florida Keys & Flamingo Fishing Charters',
  description:
    'Private flats and backcountry fishing charters in the Florida Keys and Everglades National Park. Tarpon, bonefish, snook, and redfish with a local guide.',

  url: 'https://keystimecharters.com',

  phone: '(954) 621-7953',
  phoneHref: 'tel:+19546217953',
  email: 'info@keystimecharters.com',
  emailHref: 'mailto:info@keystimecharters.com',

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
