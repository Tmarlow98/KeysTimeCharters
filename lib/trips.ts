import type { Trip } from '@/components/TripCard';

export const TRIPS: Trip[] = [
  {
    href: '/flamingo-fishing-charter',
    title: 'Flamingo Fishing Charter',
    area: 'Everglades National Park',
    blurb:
      'Run the backcountry out of Flamingo with a guide who fishes it year round. Tarpon migrations, redfish on the bank, snook in the creeks.',
    species: ['Tarpon', 'Snook', 'Redfish'],
    image: '/images/trips/flamingo.jpg',
  },
  {
    href: '/florida-keys-flats-fishing',
    title: 'Florida Keys Flats Fishing Charter',
    area: 'Upper & Middle Keys',
    blurb:
      'Sight-fishing on hard sand and turtle grass — bonefish on the flats, permit on the edges, and shots at rolling tarpon when the season lines up.',
    species: ['Bonefish', 'Tarpon', 'Permit'],
    image: '/images/trips/keys-flats.jpg',
  },
  {
    href: '/backcountry-fishing-everglades',
    title: 'Backcountry Fishing Charter',
    area: 'Florida Bay',
    blurb:
      'Skinny water across Florida Bay basins, mangrove keys, and oyster bars. Perfect for anglers who want variety and a quieter, technical day.',
    species: ['Redfish', 'Snook', 'Trout'],
    image: '/images/trips/backcountry.jpg',
  },
];
