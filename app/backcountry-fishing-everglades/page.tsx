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
  title: 'Backcountry Fishing Charter | Florida Bay & Everglades',
  description:
    'Private backcountry fishing charters across Florida Bay — redfish, snook, and sea trout in the skinny water of the Everglades with a local guide.',
  alternates: { canonical: `${site.url}/backcountry-fishing-everglades` },
  openGraph: {
    title: 'Backcountry Fishing Charter | Keys Time Charters',
    description:
      'Redfish, snook, and trout in the skinny water of Florida Bay and the Everglades backcountry.',
    url: `${site.url}/backcountry-fishing-everglades`,
    images: [{ url: '/images/trips/backcountry.jpg', width: 1600, alt: 'Angler with a redfish in the Everglades backcountry' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/trips/backcountry.jpg'],
  },
  keywords: ['backcountry fishing everglades', 'florida bay fishing', 'snook redfish everglades', 'florida bay fishing charter', 'everglades backcountry fishing guide'],
};

const RELATED = TRIPS.filter((t) => t.href !== '/backcountry-fishing-everglades');

const BACKCOUNTRY_FAQS: FAQItem[] = [
  {
    question: 'What is the difference between a backcountry trip and the Flamingo charter?',
    answer:
      'Both trips run out of the same area on the same flats skiff, but the emphasis differs. The Flamingo charter focuses on the creek system and basins closest to Flamingo Marina — tarpon in spring and early summer, snook and redfish year round in a more targeted pattern. The backcountry trip covers more of Florida Bay: mangrove keys, oyster bars, and tidal creeks, with a mixed-bag approach to redfish, snook, and sea trout.',
  },
  {
    question: 'Are fish catch-and-release in Everglades National Park?',
    answer:
      'Captain Tyler practices responsible catch-and-release for snook, redfish, tarpon, and other sportfish unless current regulations and trip conditions allow otherwise. Rules vary by species, season, and area inside or outside Everglades National Park. If you hope to keep fish, ask before the trip so the plan stays compliant with current FWC and National Park Service rules.',
  },
  {
    question: 'Do I need saltwater fishing experience for a backcountry trip?',
    answer:
      'No. The backcountry is a great first saltwater fishing experience — multiple species, forgiving presentations, and plenty of shots at fish on most days. We provide all the gear and coach anyone who wants casting or rigging tips.',
  },
  {
    question: 'Where does the backcountry charter depart from?',
    answer:
      'Usually from Flamingo Marina or a Keys-area ramp depending on the plan and what is fishing well. Exact ramp and meeting instructions are confirmed a few days before your trip.',
  },
];

export default function BackcountryPage() {
  return (
    <>
      <Header />
      <main id="main">

        {/* Hero */}
        <section
          aria-labelledby="backcountry-hero-title"
          className="relative isolate flex min-h-[60vh] items-end overflow-hidden bg-ink-900"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-cover"
            style={{ backgroundImage: 'url("/images/redfish-background.jpg"), linear-gradient(135deg,#0b2238,#1f4361)', backgroundPosition: 'center 72%' }}
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-900/80 via-ink-900/30 to-transparent" />
          <div className="container-prose pb-14 pt-32 text-white">
            <span className="eyebrow !text-flats-200">Florida Bay</span>
            <h1 id="backcountry-hero-title" className="mt-4 font-display text-4xl font-semibold leading-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl">
              Backcountry Fishing Charter
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/85">
              Skinny water across Florida Bay basins, mangrove keys, and oyster bars — redfish, snook, and trout where the crowds aren't.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CallToBook className="btn-primary bg-flats-500 hover:bg-flats-600" />
              <a href={site.emailHref} className="btn-secondary">Email Us</a>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section aria-labelledby="backcountry-overview" className="bg-sand-50 py-20 md:py-28">
          <div className="container-prose">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <SectionHeading
                  eyebrow="About This Trip"
                  title="Quiet water, technical fishing, plenty of variety."
                />
                <div className="mt-6 space-y-4 text-ink-700 leading-relaxed">
                  <p>
                    Florida Bay is a massive, shallow estuary stretching between the Everglades mainland and the Florida Keys. Most of it is too skinny for conventional boats — which is why it holds fish that see very little pressure. We run a flats skiff that gets into water other guides can't reach.
                  </p>
                  <p>
                    Redfish are the main target on the bay banks and along the mangrove shorelines — you'll often find them tailing in inches of water. Snook stack in the creek mouths and along the mangrove edges, especially in cooler months. Sea trout hold on the grass flats and are reliable action for mixed-bag days.
                  </p>
                  <p>
                    This trip works well for anglers who want to cover a lot of water, try multiple species, and fish without the traffic of more popular areas. Great for beginners and experienced anglers alike.
                  </p>
                </div>
              </div>
              <div>
                <SectionHeading eyebrow="Target Species" title="What we're chasing." />
                <ul className="mt-6 space-y-4">
                  {[
                    { name: 'Redfish', detail: 'Tailing and cruising on the bay banks and grass flats — year-round action with fish up to 30+ inches.' },
                    { name: 'Snook', detail: 'Mangrove edges and creek mouths throughout the backcountry. Best in warm months, December through February also productive.' },
                    { name: 'Sea Trout', detail: 'Grass flats across Florida Bay — reliable mixed-bag fishing that suits all skill levels.' },
                    { name: 'Bonus Species', detail: 'Jack crevalle, ladyfish, and the occasional shark make for exciting action between the main targets.' },
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
        <section aria-labelledby="backcountry-expect" className="bg-white py-20 md:py-28">
          <div className="container-prose">
            <SectionHeading
              eyebrow="What to Expect"
              title="How a backcountry day runs."
              align="center"
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: 'Departure', body: 'We launch from Flamingo or a Keys ramp depending on the plan — confirmed a few days out with exact meeting instructions.' },
                { label: 'The Water', body: 'Florida Bay basins, mangrove keys, tidal creeks, and oyster bars. The route depends on tides, wind, and what\'s eating.' },
                { label: 'The Gear', body: 'All rods, reels, tackle, and bait provided. Light spinning gear is the primary setup; no fly casting experience required.' },
                { label: 'Who It\'s For', body: 'Great first-time saltwater trip and equally productive for experienced anglers. The diversity of species keeps every skill level engaged.' },
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
        <section aria-labelledby="backcountry-related" className="bg-sand-50 py-20 md:py-28">
          <div className="container-prose">
            <SectionHeading eyebrow="Other Trips" title="More water to fish." />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {RELATED.map((trip) => <TripCard key={trip.href} trip={trip} />)}
            </div>
            <p className="mt-8 text-sm text-ink-600">
              See recent conditions from Florida Bay and the Everglades backcountry in the{' '}
              <a href="/fishing-reports" className="font-medium text-flats-600 underline-offset-2 hover:underline">
                fishing reports
              </a>
              .
            </p>
          </div>
        </section>

        <FAQ faqs={BACKCOUNTRY_FAQS} />
        <BookingCTA />
      </main>
      <Footer />

      {/*
        JSON-LD: FAQPage — catch-and-release Q (index 1) is visible above but excluded from schema
        because substantively identical markup already lives on the Flamingo page.
      */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            faqSchema([BACKCOUNTRY_FAQS[0], BACKCOUNTRY_FAQS[2], BACKCOUNTRY_FAQS[3]])
          ),
        }}
      />
    </>
  );
}
