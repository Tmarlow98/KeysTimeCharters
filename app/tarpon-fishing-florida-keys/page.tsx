import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingCTA from '@/components/BookingCTA';
import SectionHeading from '@/components/SectionHeading';
import TripCard from '@/components/TripCard';
import { TRIPS } from '@/lib/trips';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Tarpon Fishing Florida Keys & Flamingo | Keys Time Charters',
  description:
    'Tarpon fishing charters in the Florida Keys and Flamingo — migratory silver kings in the passes and resident fish in the backcountry creeks year round.',
  alternates: { canonical: `${site.url}/tarpon-fishing-florida-keys` },
  openGraph: {
    title: 'Tarpon Fishing Florida Keys & Flamingo | Keys Time Charters',
    description:
      'Migratory and resident tarpon charters in the Florida Keys and Everglades — the silver king on light tackle or fly.',
    url: `${site.url}/tarpon-fishing-florida-keys`,
    images: [{ url: '/images/trips/flamingo.jpg', width: 1600, alt: 'Large tarpon being released at boatside — Florida Keys tarpon fishing' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/trips/flamingo.jpg'],
  },
  keywords: ['tarpon fishing florida keys', 'flamingo tarpon fishing', 'everglades tarpon', 'silver king florida keys', 'tarpon charter florida'],
};

const RELATED = TRIPS.filter((t) => t.href !== '/tarpon-fishing-florida-keys').slice(0, 2);

export default function TarponPage() {
  return (
    <>
      <Header />
      <main id="main">

        {/* Hero */}
        <section
          aria-labelledby="tarpon-hero-title"
          className="relative isolate flex min-h-[60vh] items-end overflow-hidden bg-ink-900"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-cover bg-center"
            style={{ backgroundImage: 'url("/images/trips/flamingo.jpg"), linear-gradient(135deg,#0b2238,#1f4361)' }}
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-900/80 via-ink-900/30 to-transparent" />
          <div className="container-prose pb-14 pt-32 text-white">
            <span className="eyebrow !text-flats-200">Florida Keys & Flamingo</span>
            <h1 id="tarpon-hero-title" className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              Tarpon Fishing — <span className="text-flats-200">The Silver King</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/85">
              Migratory fish rolling through the passes in spring. Resident fish in the backcountry creeks year round. There is no better tarpon fishery in the world.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={site.phoneHref} className="btn-primary bg-flats-500 hover:bg-flats-600">Call to Book</a>
              <a href={site.emailHref} className="btn-secondary">Email Us</a>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section aria-labelledby="tarpon-overview" className="bg-sand-50 py-20 md:py-28">
          <div className="container-prose">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <SectionHeading
                  eyebrow="About Tarpon Fishing Here"
                  title="Two fisheries, one guide who knows both."
                />
                <div className="mt-6 space-y-4 text-ink-700 leading-relaxed">
                  <p>
                    South Florida offers two distinct tarpon fisheries and we fish both. In the Florida Keys, migratory tarpon move through the passes and stage on the flats from April through July — big fish, 80 to 150+ pounds, that you present to on light tackle or fly gear.
                  </p>
                  <p>
                    In Flamingo and the Everglades backcountry, juvenile and resident tarpon hold in the tidal creeks year round. These fish are smaller — typically 10 to 40 pounds — but they eat in tight quarters and fight hard. This is some of the most exciting light-tackle fishing anywhere.
                  </p>
                  <p>
                    Tell us when you're coming and what you're after. We'll tell you honestly which fishery makes sense for your dates and skill level, and set the trip up for your best shot at a tarpon.
                  </p>
                </div>
              </div>
              <div>
                <SectionHeading eyebrow="The Two Fisheries" title="Keys vs. Flamingo tarpon." />
                <div className="mt-6 space-y-4">
                  {[
                    {
                      label: 'Florida Keys — Migratory',
                      items: ['April through July peak season', 'Fish 80–150+ lbs rolling the passes', 'Light tackle and fly gear', 'World-class sight-fishing opportunity'],
                    },
                    {
                      label: 'Flamingo — Resident',
                      items: ['Year-round backcountry fish', 'Juvenile tarpon 10–40 lbs in the creeks', 'High-action light tackle fishing', 'Great intro to tarpon for newer anglers'],
                    },
                  ].map((group) => (
                    <div key={group.label} className="rounded-2xl border border-ink-100 bg-white p-6">
                      <p className="font-semibold text-ink-900">{group.label}</p>
                      <ul className="mt-3 space-y-1.5">
                        {group.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-ink-600">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-flats-400" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Season guide */}
        <section aria-labelledby="tarpon-season" className="bg-white py-20 md:py-28">
          <div className="container-prose">
            <SectionHeading
              eyebrow="Season Guide"
              title="When to come for tarpon."
              align="center"
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { season: 'Spring (Mar–May)', body: 'Migratory fish begin arriving in the Keys. Flamingo backcountry fish are active. Best all-around window for tarpon.' },
                { season: 'Summer (Jun–Aug)', body: 'Peak migratory season in the Keys passes. Backcountry fish slow slightly in peak heat but remain catchable early morning.' },
                { season: 'Fall (Sep–Nov)', body: 'Migratory fish have moved on. Resident backcountry tarpon in Flamingo are your best bet — still great fishing.' },
                { season: 'Winter (Dec–Feb)', body: 'Resident juveniles hold in the deeper creek bends. Slower but possible on warm days. Redfish and snook pick up the slack.' },
              ].map((item) => (
                <div key={item.season} className="rounded-2xl border border-ink-100 bg-sand-50 p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-flats-600">{item.season}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related trips */}
        <section aria-labelledby="tarpon-related" className="bg-sand-50 py-20 md:py-28">
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
