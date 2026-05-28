import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingCTA from '@/components/BookingCTA';
import SectionHeading from '@/components/SectionHeading';
import CallToBook from '@/components/CallToBook';
import { site } from '@/lib/site';
import { articleSchema, faqSchema, breadcrumbSchema } from '@/lib/seo';
import type { FAQItem } from '@/lib/seo';

const PAGE_URL = `${site.url}/best-time-to-fish-flamingo`;

export const metadata: Metadata = {
  title: 'Best Time to Fish Flamingo, Florida',
  description:
    'A guide to seasons, tides, wind, and target species for fishing out of Flamingo in Everglades National Park — from a captain who fishes it year round.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Best Time to Fish Flamingo, Florida | Keys Time Charters',
    description:
      'Seasons, tides, and target species for fishing out of Flamingo in Everglades National Park — from a captain who fishes it year round.',
    url: PAGE_URL,
    images: [{ url: '/images/hero-flats.jpg', width: 1600, alt: 'Flamingo flats at dawn — Everglades National Park' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/hero-flats.jpg'],
  },
};

const GUIDE_FAQS: FAQItem[] = [
  {
    question: 'What month is best for fishing at Flamingo?',
    answer:
      'April and May are typically the strongest months for variety — migratory tarpon are in the area, snook are active in the creek mouths, and redfish are on the bay banks. October and November are the second-best window as temperatures drop and fish feed aggressively before winter.',
  },
  {
    question: 'Can you fish Flamingo in winter?',
    answer:
      'Yes, though winter is the toughest stretch. Snook hold in deeper creek channels when water cools, and redfish can still be found on calm afternoons in protected cuts. Fishing tends to be most productive in the warming days between cold fronts.',
  },
  {
    question: 'How do tides affect fishing at Flamingo?',
    answer:
      'Moving water almost always produces better fishing than slack tide. An outgoing tide that drains the flats and concentrates bait on channel edges is often the most reliable setup. Each trip is built around the tide window for that specific day.',
  },
  {
    question: 'Is Flamingo good for beginners?',
    answer:
      'It is a solid introduction to saltwater flats fishing. All gear is provided, the trip is private, and multiple species across varied water keeps any skill level engaged. No prior saltwater experience is required.',
  },
];

export default function BestTimeToFishFlamingoPage() {
  return (
    <>
      <Header />
      <main id="main">

        {/* Hero */}
        <section
          aria-labelledby="guide-hero-title"
          className="relative isolate flex min-h-[60vh] items-end overflow-hidden bg-ink-900"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-cover bg-center"
            style={{ backgroundImage: 'url("/images/hero-flats.jpg"), linear-gradient(135deg,#0b2238,#1f4361)' }}
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-900/80 via-ink-900/30 to-transparent" />
          <div className="container-prose pb-14 pt-32 text-white">
            <span className="eyebrow !text-flats-200">Everglades National Park</span>
            <h1 id="guide-hero-title" className="mt-4 font-display text-4xl font-semibold leading-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl">
              Best Time to Fish Flamingo, Florida
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/85">
              A practical guide to seasons, tides, wind, and target species — from a captain who fishes Flamingo year round.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CallToBook className="btn-primary bg-flats-500 hover:bg-flats-600" />
              <a href={site.emailHref} className="btn-secondary">Email Us</a>
            </div>
          </div>
        </section>

        {/* Quick Answer */}
        <section className="bg-white py-20 md:py-28">
          <div className="container-prose">
            <SectionHeading eyebrow="The Short Answer" title="Spring and early summer lead — but Flamingo fishes year round." />
            <div className="mt-6 max-w-3xl space-y-4 text-ink-700 leading-relaxed">
              <p>
                April, May, and June are the most productive months out of Flamingo.{' '}
                <Link href="/flamingo-tarpon-fishing" className="text-flats-600 underline underline-offset-2 transition-colors hover:text-flats-700">
                  Migratory tarpon
                </Link>{' '}
                are rolling through the passes and staging in the basins, snook are active in the creek mouths, and redfish are tailing on the bay banks. Those three species in the same window make spring the clear peak.
              </p>
              <p>
                That said, Flamingo holds fish in every season. Fall — particularly October and November — is the second-best window: the heat breaks, fish feed aggressively, and boat pressure is low. Even winter produces results if you are targeting the right species in the right water.
              </p>
              <p>
                A{' '}
                <Link href="/flamingo-fishing-charter" className="text-flats-600 underline underline-offset-2 transition-colors hover:text-flats-700">
                  Flamingo charter
                </Link>{' '}
                is built around what is fishing well for your specific dates rather than a fixed schedule.
              </p>
            </div>
          </div>
        </section>

        {/* Seasonal Breakdown */}
        <section className="bg-sand-50 py-20 md:py-28">
          <div className="container-prose">
            <SectionHeading eyebrow="Seasonal Guide" title="What to expect by season." align="center" />
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {[
                {
                  season: 'Spring (March–June)',
                  body: 'The peak window. Migratory tarpon move through the passes and basins from late March into early summer. Snook are active in the creek mouths. Redfish tail across the bay banks. Best overall variety and action of the year.',
                },
                {
                  season: 'Summer (July–September)',
                  body: 'Heat peaks but snook and redfish remain catchable. Early mornings are the most productive window. Fish move into the shade of mangrove edges during midday. Tarpon migration winds down through July.',
                },
                {
                  season: 'Fall (October–November)',
                  body: 'An underrated stretch. Temperatures drop, fish feed hard, and pressure is low. Snook and redfish are the main targets. Sea trout action on the grass flats picks up as water cools.',
                },
                {
                  season: 'Winter (December–February)',
                  body: 'The toughest window, but not dead. Snook sit in deeper creek channels. Redfish are accessible on calm, sunny afternoons. Best results come in the warming days between cold fronts.',
                },
              ].map((item) => (
                <div key={item.season} className="rounded-2xl border border-ink-100 bg-white p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-flats-600">{item.season}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tides and Wind */}
        <section className="bg-white py-20 md:py-28">
          <div className="container-prose">
            <SectionHeading eyebrow="Conditions" title="How tides and wind shape the fishing." />
            <div className="mt-6 max-w-3xl">
              <p className="text-ink-700 leading-relaxed">
                Flamingo is tide-driven fishing. The daily plan is built around the tide window — specifically the movement on either side of the change, when bait concentrates and fish position on edges and creek mouths.
              </p>
              <ul className="mt-6 space-y-3 text-[17px] leading-relaxed text-ink-800">
                {[
                  { label: 'Moving tide', body: 'nearly always better than slack water — outgoing tides drain the flats and stack fish on channel edges' },
                  { label: 'Slack tide', body: 'the quietest period — fish sit tight and eat less aggressively, typically used for running to the next spot' },
                  { label: 'East or southeast wind', body: 'concentrates bait and gives the skiff a low profile — generally favorable conditions' },
                  { label: 'North wind', body: 'slows snook and redfish noticeably, especially November through February — plan and targets shift accordingly' },
                  { label: 'Wind chop', body: 'moderate chop masks the boat approach and often improves results on flat, clear water' },
                ].map((item) => (
                  <li key={item.label} className="flex gap-2">
                    <span className="shrink-0 text-flats-500" aria-hidden="true">—</span>
                    <span>
                      <strong className="font-semibold text-ink-900">{item.label}</strong>{' '}{item.body}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Beginner Expectations */}
        <section className="bg-sand-50 py-20 md:py-28">
          <div className="container-prose">
            <SectionHeading eyebrow="First-Timers" title="What to expect if this is your first saltwater trip." />
            <div className="mt-6 max-w-3xl space-y-4 text-ink-700 leading-relaxed">
              <p>
                Flamingo is a good starting point for saltwater fishing. The trip covers multiple species across varied water types, so even a slower day offers variety. All gear is provided and technique coaching is part of the experience. No prior saltwater experience is needed.
              </p>
              <p>
                Set realistic expectations: sight fishing on the flats involves patience. Not every cast produces, and not every fish eats. The goal is to put you in front of fish consistently — what the fish decide to do is always up to them.
              </p>
              <p>
                All charters are private — just your group and the captain — with the flexibility to shift the plan mid-trip based on what is working. The{' '}
                <Link href="/backcountry-fishing-everglades" className="text-flats-600 underline underline-offset-2 transition-colors hover:text-flats-700">
                  backcountry trip
                </Link>{' '}
                is worth considering if you would like more mixed-bag variety across a wider range of water.
              </p>
            </div>
          </div>
        </section>

        {/* CTA links */}
        <section className="bg-white py-12 md:py-16">
          <div className="container-prose">
            <p className="text-ink-700">
              Ready to plan a trip?{' '}
              <Link href="/pricing" className="text-flats-600 underline underline-offset-2 transition-colors hover:text-flats-700">
                See pricing
              </Link>
              ,{' '}
              <Link href="/flamingo-fishing-charter" className="text-flats-600 underline underline-offset-2 transition-colors hover:text-flats-700">
                book a Flamingo charter
              </Link>
              ,{' '}
              <Link href="/fishing-reports" className="text-flats-600 underline underline-offset-2 transition-colors hover:text-flats-700">
                read recent fishing reports
              </Link>
              , or{' '}
              <Link href="/contact" className="text-flats-600 underline underline-offset-2 transition-colors hover:text-flats-700">
                contact us
              </Link>{' '}
              with your dates and questions.
            </p>
            <p className="mt-4 text-sm text-ink-600">
              Related guides:{' '}
              <Link href="/flamingo-tarpon-fishing" className="font-medium text-flats-600 underline-offset-2 hover:underline">Flamingo tarpon fishing guide</Link>
              {', '}
              <Link href="/everglades-snook-fishing" className="font-medium text-flats-600 underline-offset-2 hover:underline">Everglades snook fishing guide</Link>
              .
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-sand-50 py-20 md:py-28">
          <div className="container-prose">
            <div className="mx-auto max-w-3xl">
              <hr className="mb-10 border-ink-100" />
              <h2 className="font-display text-2xl font-semibold text-ink-900">Frequently Asked Questions</h2>
              <div className="mt-6 space-y-6 text-[17px] leading-relaxed text-ink-800">
                {GUIDE_FAQS.map((item) => (
                  <div key={item.question}>
                    <p className="font-semibold text-ink-900">{item.question}</p>
                    <p className="mt-2">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <BookingCTA />
      </main>
      <Footer />

      {/* JSON-LD: Article */}
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title: 'Best Time to Fish Flamingo, Florida',
              description:
                'A guide to seasons, tides, wind, and target species for fishing out of Flamingo in Everglades National Park.',
              url: PAGE_URL,
              datePublished: '2026-05-28',
              image: `${site.url}/images/hero-flats.jpg`,
            })
          ),
        }}
      />
      {/* JSON-LD: BreadcrumbList */}
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: site.url },
              { name: 'Best Time to Fish Flamingo, Florida', url: PAGE_URL },
            ])
          ),
        }}
      />
      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(GUIDE_FAQS)) }}
      />
    </>
  );
}
