import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingCTA from '@/components/BookingCTA';
import SectionHeading from '@/components/SectionHeading';
import TripCard from '@/components/TripCard';
import CallToBook from '@/components/CallToBook';
import FAQ from '@/components/FAQ';
import { TRIPS } from '@/lib/trips';
import { site } from '@/lib/site';
import { faqSchema, serviceSchema } from '@/lib/seo';
import type { FAQItem } from '@/lib/seo';

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

const FLAMINGO_FAQS: FAQItem[] = [
  {
    question: 'What fish can we catch on a Flamingo charter?',
    answer:
      'Tarpon, snook, redfish, and sea trout are the primary targets. Migratory tarpon move through the passes and basins from spring into early summer; resident snook hold in the creek mouths year round; redfish tail across the bay banks and grass flats. Every trip is built around whatever is actively eating that week.',
  },
  {
    question: 'When is the best time for tarpon near Flamingo?',
    answer:
      'Migratory tarpon season runs roughly April through early July, when fish stage and roll through the passes and basins near Flamingo. Resident juvenile tarpon are in the creeks year round — if you want a backcountry tarpon shot outside of peak migration, ask about it when you book.',
  },
  {
    question: 'Are fish catch-and-release in Everglades National Park?',
    answer:
      'Captain Tyler practices responsible catch-and-release for snook, redfish, tarpon, and other sportfish unless current regulations and trip conditions allow otherwise. Rules vary by species, season, and area inside or outside Everglades National Park. If you hope to keep fish, ask before the trip so the plan stays compliant with current FWC and National Park Service rules.',
  },
  {
    question: 'How do I book a Flamingo charter?',
    answer:
      'Call or email with your dates and group size. We will tell you what is fishing well for your window, confirm which trip fits the plan, and lock in all details — ramp location, tide window, and exact meeting time — a few days before you arrive.',
  },
];

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
            <h1 id="flamingo-hero-title" className="mt-4 font-display text-4xl font-semibold leading-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl">
              Flamingo Fishing Charter
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/85">
              Backcountry trips out of Flamingo Marina — tarpon, snook, and redfish on the water a local guide fishes every week.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CallToBook className="btn-primary bg-flats-500 hover:bg-flats-600" />
              <a href={site.emailHref} className="btn-secondary">Email Us</a>
            </div>
            <p className="mt-3 text-sm text-white/60">
              Starting at $600 for a 4-hour private trip —{' '}
              <a href="/pricing" className="underline underline-offset-2 transition-colors hover:text-white/80">
                see all pricing
              </a>
            </p>
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
                  <p className="text-sm">
                    <a href="/meet-your-captain" className="font-medium text-flats-600 transition-colors hover:text-flats-700">
                      Meet Captain Tyler →
                    </a>
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
            <p className="mt-8 text-sm text-ink-600">
              See recent conditions from Flamingo and Florida Bay in the{' '}
              <a href="/fishing-reports" className="font-medium text-flats-600 underline-offset-2 hover:underline">
                fishing reports
              </a>
              .
            </p>
            <p className="mt-4 text-sm text-ink-600">
              Related guides:{' '}
              <a href="/best-time-to-fish-flamingo" className="font-medium text-flats-600 underline-offset-2 hover:underline">Best time to fish Flamingo</a>
              {', '}
              <a href="/flamingo-tarpon-fishing" className="font-medium text-flats-600 underline-offset-2 hover:underline">Flamingo tarpon fishing guide</a>
              {', '}
              <a href="/everglades-snook-fishing" className="font-medium text-flats-600 underline-offset-2 hover:underline">Everglades snook fishing guide</a>
              .
            </p>
          </div>
        </section>

        <FAQ faqs={FLAMINGO_FAQS} />
        <BookingCTA />
      </main>
      <Footer />

      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FLAMINGO_FAQS)) }}
      />
      {/* JSON-LD: Service */}
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Flamingo Fishing Charter',
              description:
                'Private fishing charters out of Flamingo in Everglades National Park. Tarpon, snook, and redfish in the backcountry with a local guide who fishes it year round.',
              url: `${site.url}/flamingo-fishing-charter`,
              image: `${site.url}/images/trips/flamingo.jpg`,
              areaServed: ['Flamingo', 'Everglades National Park', 'Florida Bay'],
              offers: [
                { name: '4-Hour Charter', price: 600, duration: '4-hour private trip, up to 2 anglers' },
                { name: '6-Hour Charter', price: 700, duration: '6-hour private trip, up to 2 anglers' },
                { name: '8-Hour Charter', price: 800, duration: '8-hour private trip, up to 2 anglers' },
              ],
            })
          ),
        }}
      />
    </>
  );
}
