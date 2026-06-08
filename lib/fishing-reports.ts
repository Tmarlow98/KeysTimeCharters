export interface FishingReport {
  slug: string;
  title: string;
  date: string;
  datePublished: string;
  dateModified?: string;
  summary: string;
  location: string;
  targetSpecies: string[];
  conditions: string;
  image?: string;
  imageAlt?: string;
  relatedPages: { href: string; label: string }[];
}

export const fishingReports: FishingReport[] = [
  {
    slug: 'flamingo-snook-redfish-fishing-report-june-6-2026',
    title: 'Flamingo Fishing Report: Snook & Redfish on the Falling Tide – June 6, 2026',
    date: 'June 6, 2026',
    datePublished: '2026-06-06',
    summary:
      'A sunny 15 mph east wind day out of Flamingo that started slow and finished strong — 4 reds and 3 snook, including a 30-plus-inch overslot red, once the falling afternoon tide pushed the fish onto the flat edges.',
    location: 'Flamingo, Everglades National Park',
    targetSpecies: ['Snook', 'Redfish'],
    conditions: 'Sunny, 15 mph east wind, half moon, morning low, incoming 9–10 am, falling afternoon tide',
    image: '/images/KevinBigRedHeroPic6-6.jpeg',
    imageAlt: 'Angler holding a 30-inch-plus overslot redfish on the backcountry flats near Flamingo',
    relatedPages: [
      { href: '/flamingo-fishing-charter', label: 'Flamingo Fishing Charter' },
      { href: '/backcountry-fishing-everglades', label: 'Backcountry Fishing Charter' },
      { href: '/everglades-snook-fishing', label: 'Everglades Snook Fishing Guide' },
      { href: '/best-time-to-fish-flamingo', label: 'Best Time to Fish Flamingo' },
    ],
  },
  {
    slug: 'flamingo-mixed-bag-fishing-report-may-31-2026',
    title: 'Flamingo Mixed-Bag Fishing Report: Tarpon, Snook, Redfish & Tripletail – May 31, 2026',
    date: 'May 31, 2026',
    datePublished: '2026-05-31',
    summary:
      'A full moon the night before scrambled the usual snook and redfish bite out of Flamingo — but it opened the door to backcountry tarpon, thick trout action, a 17-inch tripletail, and a new tidal cut that delivered redfish and snook when everything else went quiet.',
    location: 'Flamingo, Everglades National Park',
    targetSpecies: ['Tarpon', 'Snook', 'Redfish', 'Spotted Seatrout', 'Tripletail'],
    conditions: 'No wind, overcast skies, full moon prior night, morning outgoing tide with 11 am low, afternoon incoming',
    image: '/images/TylerTarpon05312026.jpeg',
    imageAlt: 'Captain Tyler holding a 10-pound tarpon on the flats near Flamingo, Everglades',
    relatedPages: [
      { href: '/flamingo-fishing-charter', label: 'Flamingo Fishing Charter' },
      { href: '/backcountry-fishing-everglades', label: 'Backcountry Fishing Charter' },
      { href: '/flamingo-tarpon-fishing', label: 'Flamingo Tarpon Fishing Guide' },
      { href: '/everglades-snook-fishing', label: 'Everglades Snook Fishing Guide' },
      { href: '/best-time-to-fish-flamingo', label: 'Best Time to Fish Flamingo' },
    ],
  },
  {
    slug: 'flamingo-snook-fishing-report-may-17-2026',
    title: 'Flamingo Fishing Report: Double-Digit Snook – May 17, 2026',
    date: 'May 17, 2026',
    datePublished: '2026-05-17',
    summary:
      'A stiff east wind and late-morning low water set up a strong day of Everglades backcountry fishing out of Flamingo — double-digit snook and a shot at redfish.',
    location: 'Flamingo, Everglades National Park',
    targetSpecies: ['Snook', 'Redfish'],
    conditions: 'Stiff east wind, late-morning low tide, warm water, excellent clarity',
    image: '/images/dad morning snook.jpeg',
    imageAlt: 'Angler holding a snook on a flats skiff with an early morning sky, Flamingo',
    relatedPages: [
      { href: '/flamingo-fishing-charter', label: 'Flamingo Fishing Charter' },
      { href: '/backcountry-fishing-everglades', label: 'Backcountry Fishing Charter' },
      { href: '/everglades-snook-fishing', label: 'Everglades Snook Fishing Guide' },
      { href: '/flamingo-tarpon-fishing', label: 'Flamingo Tarpon Fishing Guide' },
      { href: '/best-time-to-fish-flamingo', label: 'Best Time to Fish Flamingo' },
    ],
  },
];

export const sortedFishingReports = [...fishingReports].sort(
  (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
);

export function getReport(slug: string): FishingReport | undefined {
  return fishingReports.find((r) => r.slug === slug);
}

export function getReportOrThrow(slug: string): FishingReport {
  const report = getReport(slug);
  if (!report) throw new Error(`Fishing report not found: ${slug}`);
  return report;
}
