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
import { faqSchema } from '@/lib/seo';
import type { FAQItem } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Florida Keys Flats Fishing Charter | Tarpon, Snook & Redfish',
  description:
    'Sight-fishing charters on the Florida Keys flats — tarpon, snook, and redfish with a local guide who fishes the Upper and Middle Keys year round.',
  alternates: { canonical: `${site.url}/florida-keys-flats-fishing` },
  openGraph: {
    title: 'Florida Keys Flats Fishing Charter | Keys Time Charters',
    description:
      'Sight-fishing on the Florida Keys flats — tarpon, snook, and redfish with a local guide.',
    url: `${site.url}/florida-keys-flats-fishing`,
    images: [{ url: '/images/trips/keys-flats.jpg', width: 1600, alt: 'Angler on a flats skiff on the Florida Keys' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/trips/keys-flats.jpg'],
  },
  keywords: ['florida keys flats fishing', 'tarpon fishing florida keys', 'snook fishing florida keys', 'flats fishing charter keys', 'sight fishing florida keys', 'redfish florida keys'],
};

const RELATED = TRIPS.filter((t) => t.href !== '/florida-keys-flats-fishing');

const KEYS_FAQS: FAQItem[] = [
  {
    question: 'What species can we target on the Florida Keys flats?',
    answer:
      'Tarpon, snook, and redfish are the primary targets. Migratory tarpon move through the Keys from April through July — fish over 100 lbs are common on the right tides. Snook hold along the mangrove edges and tidal cuts year round. Redfish tail on the grass flats and sand edges and are available in all seasons.',
  },
  {
    question: 'Do I need fly fishing experience?',
    answer:
      'No experience required — we provide both spinning and fly gear and will coach your presentation. If you want to target tarpon on the fly, some casting ability helps, but it is not a prerequisite for the trip.',
  },
  {
    question: 'When is the best time for the Florida Keys flats?',
    answer:
      'Tarpon migrate through April into July. Snook are most active in warmer months but hold year round in the right spots. Redfish are available in all seasons. Spring and early summer are the peak window when the biggest fish move through the Upper and Middle Keys.',
  },
  {
    question: 'Is this all sight fishing?',
    answer:
      'Yes. We pole the flats and look for fish, then make targeted presentations to what we spot. It is visual and athletic fishing. That said, there is action for beginners and experienced anglers alike — we pick locations based on skill level and what you want out of the day.',
  },
];

export default function KeysFlatsPage() {
  return (
    <>
      <Header />
      <main id="main">

        {/* Hero */}
        <section
          aria-labelledby="keys-hero-title"
          className="relative isolate flex min-h-[60vh] items-end overflow-hidden bg-ink-900"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-cover"
            style={{ backgroundImage: 'url("/images/snook-background.jpg"), linear-gradient(135deg,#0b2238,#1f4361)', backgroundPosition: 'center 35%' }}
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-900/80 via-ink-900/30 to-transparent" />
          <div className="container-prose pb-14 pt-32 text-white">
            <span className="eyebrow !text-flats-200">Upper & Middle Keys</span>
            <h1 id="keys-hero-title" className="mt-4 font-display text-4xl font-semibold leading-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl">
              Florida Keys Flats Fishing Charter
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/85">
              Sight-fishing on hard sand and turtle grass — tarpon, snook, and redfish on the clearest water in South Florida.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CallToBook className="btn-primary bg-flats-500 hover:bg-flats-600" />
              <a href={site.emailHref} className="btn-secondary">Email Us</a>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section aria-labelledby="keys-overview" className="bg-sand-50 py-20 md:py-28">
          <div className="container-prose">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <SectionHeading
                  eyebrow="About This Trip"
                  title="Sight-fishing the Keys flats the right way."
                />
                <div className="mt-6 space-y-4 text-ink-700 leading-relaxed">
                  <p>
                    The Florida Keys flats are some of the most technical fishing in the world — gin-clear water, spooky fish, and presentations that have to be right the first time. We run the Upper and Middle Keys where the hard-bottom flats, turtle grass, and tidal cuts hold tarpon, snook, and redfish year round.
                  </p>
                  <p>
                    Tarpon migrate through the Keys from April into July — these are fish over a hundred pounds and one of the best fights in saltwater. Snook hold along the mangrove edges and tidal cuts year round, especially around structure and creek mouths. Redfish tail on the grass flats and sand edges and are reliable in every season.
                  </p>
                  <p>
                    This is a visual, athletic style of fishing — you'll be on the bow looking for fish. It suits beginners who want to learn and experienced anglers alike.
                  </p>
                </div>
              </div>
              <div>
                <SectionHeading eyebrow="Target Species" title="What we're chasing." />
                <ul className="mt-6 space-y-4">
                  {[
                    { name: 'Tarpon', detail: 'Migratory fish rolling through the Keys April through July — shots at fish over 100 lbs on the right tides.' },
                    { name: 'Snook', detail: 'Mangrove edges, tidal cuts, and creek mouths year round — best action in warmer months.' },
                    { name: 'Redfish', detail: 'Tailing and cruising on the grass flats and sand edges throughout the year.' },
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
        <section aria-labelledby="keys-expect" className="bg-white py-20 md:py-28">
          <div className="container-prose">
            <SectionHeading
              eyebrow="What to Expect"
              title="How a flats fishing day runs."
              align="center"
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: 'Departure', body: 'We launch from the Upper or Middle Keys at first light. Exact ramp and time confirmed a few days before based on tides.' },
                { label: 'The Boat', body: 'A purpose-built flats skiff — shallow draft, push-pole quiet, with a high polling platform for spotting fish at distance.' },
                { label: 'The Gear', body: 'Spinning and fly gear provided. Light leader, accurate casts, and patience are the most important things you bring.' },
                { label: 'Skill Level', body: 'Beginners welcome — we\'ll coach your cast and pick spots that give you the best shot. Experienced anglers can push into technical sight-fishing for tarpon.' },
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
        <section aria-labelledby="keys-related" className="bg-sand-50 py-20 md:py-28">
          <div className="container-prose">
            <SectionHeading eyebrow="Other Trips" title="More water to fish." />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {RELATED.map((trip) => <TripCard key={trip.href} trip={trip} />)}
            </div>
          </div>
        </section>

        <FAQ faqs={KEYS_FAQS} />
        <BookingCTA />
      </main>
      <Footer />

      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(KEYS_FAQS)) }}
      />
    </>
  );
}
