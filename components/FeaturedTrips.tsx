import SectionHeading from './SectionHeading';
import TripCard, { Trip } from './TripCard';

const TRIPS: Trip[] = [
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

export default function FeaturedTrips() {
  return (
    <section
      id="trips"
      aria-labelledby="trips-heading"
      className="bg-sand-50 py-20 md:py-28"
    >
      <div className="container-prose">
        <SectionHeading
          eyebrow="Featured Trips"
          title={
            <>
              Three trips, one common thread —<br className="hidden md:block" />{' '}
              <span className="text-flats-600">water we know inside and out.</span>
            </>
          }
          description="Every charter is private and tailored to the day's conditions. Pick the area that fits your goals; the rest gets dialed in once we talk."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {TRIPS.map((trip) => (
            <TripCard key={trip.href} trip={trip} />
          ))}
        </div>
      </div>
    </section>
  );
}
