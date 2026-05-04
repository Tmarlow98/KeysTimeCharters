import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingCTA from '@/components/BookingCTA';
import SectionHeading from '@/components/SectionHeading';
import TripCard from '@/components/TripCard';
import CallToBook from '@/components/CallToBook';
import { TRIPS } from '@/lib/trips';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Flamingo Fishing Charter | Everglades National Park',
  description:
    'Private fishing charters out of Flamingo in Everglades National Park. Tarpon, snook, and redfish in the backcountry with a local guide who fishes it year round.',
  alternates: { canonical: `${site.url}/flamingo-fishing-charter` },
  openGraph: {
    title: 'Flamingo Fishing Charter | Keys Time Charters',
    description:
      'Private backcountry charters out of Flamingo — tarpon, snook, and redfish in Everglades National Park.',
    url: `${site.url}/flamingo-fishing-charter`,
    images: [{ url: '/images/trips/flamingo.jpg', width: 1600, alt: 'Flamingo fishing charter — tarpon at boatside' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/trips/flamingo.jpg'],
  },
  keywords: ['flamingo fishing charter', 'everglades fishing charter', 'flamingo marina fishing', 'backcountry fishing flamingo', 'tarpon snook redfish everglades'],
};

const RELATED = TRIPS.filter((t) => t.href !== '/flamingo-fishing-charter');

export default function FlamingoPage() {
  return (
    <>
      <Header />
      <main id="main">

        {/* Hero */}
        <section
          aria-labelledby="flamingo-hero-title"
          className="relative isolate flex min-h-[60vh] items-end overflow-hidden bg-ink-900"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-cover bg-center"
            style={{ backgroundImage: 'url("/images/trips/flamingo.jpg"), linear-gradient(135deg,#0b2238,#1f4361)' }}
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-900/80 via-ink-900/30 to-transparent" />
          <div className="container-prose pb-14 pt-32 text-white">
            <span className="eyebrow !text-flats-200">Everglades National Park</span>
            <h1 id="flamingo-hero-title" className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              Flamingo Fishing Charter
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/85">
              Backcountry trips out of Flamingo Marina — tarpon, snook, and redfish on the water a local guide fishes every week.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CallToBook className="btn-primary bg-flats-500 hover:bg-flats-600" />
              <a href={site.emailHref} className="btn-secondary">Email Us</a>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section aria-labelledby="flamingo-overview" className="bg-sand-50 py-20 md:py-28">
          <div className="container-prose">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <SectionHeading
                  eyebrow="About This Trip"
                  title="The Everglades backcountry, fished by someone who knows it."
                />
                <div className="mt-6 space-y-4 text-ink-700 leading-relaxed">
                  <p>
                    Flamingo sits at the southern tip of Everglades National Park, where Florida Bay meets a network of creeks, basins, and mangrove shorelines that most anglers never see. This isn't tourist water — it's technical, tide-dependent fishing that rewards local knowledge.
                  </p>
                  <p>
                    Spring and early summer bring migratory tarpon rolling through the passes and staging in the basins. Year round you'll find resident snook holding in the creek mouths and redfish tailing across the bay banks. Trips are tailored to whatever's eating that week.
                  </p>
                  <p>
                    All charters are private — just your group on the boat. We run a Maverick flats skiff, purpose-built for the skinny water around Flamingo, and provide all rods, reels, tackle, and bait.
                  </p>
                </div>
              </div>
              <div>
                <SectionHeading eyebrow="Target Species" title="What we're chasing." />
                <ul className="mt-6 space-y-4">
                  {[
                    { name: 'Tarpon', detail: 'Migratory fish April–July; resident juveniles year round in the creeks.' },
                    { name: 'Snook', detail: 'Mangrove creek mouths and coastal points — best action in warmer months.' },
                    { name: 'Redfish', detail: 'Tailing and cruising on the bay banks and grass flats throughout the year.' },
                    { name: 'Sea Trout', detail: 'Grass flats in Florida Bay — reliable action for all skill levels.' },
                  ].map((s) => (
                    <li key={s.name} className="flex gap-4 rounded-2xl border border-ink-100 bg-white p-5">
                      <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-flats-500" aria-hidden="true" />
                      <div>
                        <p className="font-semibold text-ink-900">{s.name}</p>
                        <p className="mt-0.5 text-sm text-ink-600">{s.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What to expect */}
        <section aria-labelledby="flamingo-expect" className="bg-white py-20 md:py-28">
          <div className="container-prose">
            <SectionHeading
              eyebrow="What to Expect"
              title="How a Flamingo charter day runs."
              align="center"
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: 'Departure', body: 'We launch from Flamingo Marina at first light — exact time confirmed a few days out based on tides and weather.' },
                { label: 'The Boat', body: 'A Maverick flats skiff — fast across open water, quiet enough to pole into the skinny stuff without spooking fish.' },
                { label: 'The Gear', body: 'All rods, reels, tackle, and bait provided. Spinning and fly gear available. Fishing license included.' },
                { label: 'Private Only', body: 'Every charter is private. No shared trips. It\'s just your group and the guide, all day.' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-ink-100 bg-sand-50 p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-flats-600">{item.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related trips */}
        <section aria-labelledby="flamingo-related" className="bg-sand-50 py-20 md:py-28">
          <div className="container-prose">
            <SectionHeading eyebrow="Other Trips" title="More water to fish." />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {RELATED.map((trip) => <TripCard key={trip.href} trip={trip} />)}
            </div>
          </div>
        </section>

        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
