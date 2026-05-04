import SectionHeading from './SectionHeading';
import TripCard from './TripCard';
import { TRIPS } from '@/lib/trips';

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
