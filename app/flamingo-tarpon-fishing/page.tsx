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

const PAGE_URL = `${site.url}/flamingo-tarpon-fishing`;

export const metadata: Metadata = {
  title: 'Flamingo Tarpon Fishing Guide',
  description:
    'When tarpon show up near Flamingo, what conditions bring them in, and what anglers should expect — a guide from a captain who fishes Everglades National Park year round.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Flamingo Tarpon Fishing Guide | Keys Time Charters',
    description:
      'When tarpon show up near Flamingo, what conditions bring them in, and what anglers should expect.',
    url: PAGE_URL,
    images: [{ url: '/images/trips/flamingo.jpg', width: 1600, alt: 'Flamingo fishing at sunrise — Everglades National Park' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/trips/flamingo.jpg'],
  },
};

const TARPON_FAQS: FAQItem[] = [
  {
    question: 'When is tarpon season near Flamingo?',
    answer:
      'Migratory tarpon typically move near Flamingo from late March through early July, with April, May, and June being the most consistent months. Resident juvenile tarpon are in the backcountry creeks year round and offer a good shot at the species outside of migration season.',
  },
  {
    question: 'How big are the tarpon near Flamingo?',
    answer:
      'Migratory fish are large — the ones that stage near Flamingo each spring are substantial fish. Juvenile tarpon in the creeks are much smaller and are a different kind of experience: light tackle, technical presentations, and an active fight. Both are worth pursuing depending on what you want from the trip.',
  },
  {
    question: 'Is fly fishing available for tarpon near Flamingo?',
    answer:
      'Yes. The flats and passes around Flamingo are well suited to fly fishing for tarpon. We carry fly gear and can structure the day around presentations to visible fish. Some prior fly casting experience is helpful when targeting large migratory fish.',
  },
  {
    question: 'Are tarpon catch-and-release near Flamingo?',
    answer:
      'Captain Tyler practices responsible catch-and-release for tarpon. Fish are kept in the water for a quick photo and a proper release. Florida tarpon regulations and any applicable permit requirements should be confirmed with FWC if harvest is a consideration.',
  },
];

export default function FlamingoTarponFishingPage() {
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
            <span className="eyebrow !text-flats-200">Everglades National Park</span>
            <h1 id="tarpon-hero-title" className="mt-4 font-display text-4xl font-semibold leading-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl">
              Flamingo Tarpon Fishing Guide
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/85">
              When migratory tarpon show up near Flamingo, what conditions bring them in, and what a day on the water looks like.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CallToBook className="btn-primary bg-flats-500 hover:bg-flats-600" />
              <a href={site.emailHref} className="btn-secondary">Email Us</a>
            </div>
          </div>
        </section>

        {/* Migration Window */}
        <section className="bg-white py-20 md:py-28">
          <div className="container-prose">
            <SectionHeading eyebrow="The Migration Window" title="Tarpon arrive near Flamingo in late March and stay through early summer." />
            <div className="mt-6 max-w-3xl space-y-4 text-ink-700 leading-relaxed">
              <p>
                Migratory tarpon follow warming water north along the Florida coast each spring. Near Flamingo, that window runs roughly late March through early July — with April, May, and June being the most consistent months for finding fish staged in the passes and rolling through the basins.
              </p>
              <p>
                Outside the migration, resident juvenile tarpon hold in the backcountry creeks year round. They are smaller than the migratory fish but offer a legitimate shot at the species on any trip, any month.
              </p>
              <p>
                The{' '}
                <Link href="/flamingo-fishing-charter" className="text-flats-600 underline underline-offset-2 transition-colors hover:text-flats-700">
                  Flamingo charter
                </Link>{' '}
                can target tarpon specifically or incorporate them alongside snook and redfish depending on what is active on your dates.
              </p>
              <p>
                For a full seasonal breakdown across all species,{' '}
                <Link href="/best-time-to-fish-flamingo" className="text-flats-600 underline underline-offset-2 transition-colors hover:text-flats-700">
                  the best time to fish Flamingo guide
                </Link>{' '}
                covers what to expect month by month.
              </p>
            </div>
          </div>
        </section>

        {/* Migratory vs Resident */}
        <section className="bg-sand-50 py-20 md:py-28">
          <div className="container-prose">
            <SectionHeading eyebrow="Two Different Fisheries" title="Migratory fish and year-round residents." align="center" />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-ink-100 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-flats-600">Migratory Tarpon</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">
                  Large fish that push through the passes and stage in the deeper basins near Flamingo each spring. Sight fishing — you find rolling or tailing fish, make a presentation, and wait for the eat. It is patient, technical work, and not every fish eats. When it comes together, there is nothing else like it.
                </p>
              </div>
              <div className="rounded-2xl border border-ink-100 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-flats-600">Resident Juvenile Tarpon</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">
                  Smaller fish that live in the backcountry creek systems year round. More active feeders, easier to approach, and excellent on light tackle. A good option if you want tarpon fishing outside the spring migration window or want to mix a tarpon element into a multi-species day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions */}
        <section className="bg-white py-20 md:py-28">
          <div className="container-prose">
            <SectionHeading eyebrow="Conditions" title="What affects tarpon near Flamingo." />
            <div className="mt-6 max-w-3xl">
              <p className="text-ink-700 leading-relaxed">
                Tarpon behavior near Flamingo shifts with several overlapping factors. Understanding what makes conditions favorable helps set realistic expectations before the trip.
              </p>
              <ul className="mt-6 space-y-3 text-[17px] leading-relaxed text-ink-800">
                {[
                  { label: 'Water temperature', body: 'tarpon become more active as water warms through spring — fish stage and move more predictably once the warmth holds consistently' },
                  { label: 'Tides', body: 'rolling tarpon are easier to spot and approach on a slow tide — fast current makes presentations difficult' },
                  { label: 'Wind', body: 'moderate SE or E wind is generally favorable — enough chop to mask the boat approach without making visibility or casting difficult' },
                  { label: 'Moon phase', body: 'full and new moons move larger numbers of fish through the passes — worth timing a trip around if possible' },
                  { label: 'Water clarity', body: 'clear conditions allow longer presentations — leader selection and presentation angle matter more on glassy water' },
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

        {/* What to Expect */}
        <section className="bg-sand-50 py-20 md:py-28">
          <div className="container-prose">
            <SectionHeading eyebrow="What to Expect" title="A realistic picture of a tarpon day." />
            <div className="mt-6 max-w-3xl space-y-4 text-ink-700 leading-relaxed">
              <p>
                Tarpon fishing near Flamingo is sight fishing. You are on the water looking for rolling or tailing fish, then making a presentation when the angle and distance are right. It involves long stretches of scanning and waiting, broken up by short windows of intense action.
              </p>
              <p>
                Even on a good day with plenty of fish around, not every cast draws a strike and not every strike ends in a hookup. That is the nature of tarpon fishing. The experience is built on sightings, solid casts, and — when everything lines up — a fish in the air.
              </p>
              <p>
                Captain Tyler practices responsible catch-and-release for tarpon. Fish are kept in the water during revival before release. Florida tarpon regulations apply — confirm current rules with FWC if keeping fish is a consideration.
              </p>
              <p>
                For a broader mix of species alongside tarpon, the{' '}
                <Link href="/backcountry-fishing-everglades" className="text-flats-600 underline underline-offset-2 transition-colors hover:text-flats-700">
                  backcountry trip
                </Link>{' '}
                can incorporate snook and redfish on the same day.
              </p>
            </div>
          </div>
        </section>

        {/* CTA links */}
        <section className="bg-white py-12 md:py-16">
          <div className="container-prose">
            <p className="text-ink-700">
              Ready to plan a tarpon trip?{' '}
              <Link href="/pricing" className="text-flats-600 underline underline-offset-2 transition-colors hover:text-flats-700">
                See pricing
              </Link>
              ,{' '}
              <Link href="/flamingo-fishing-charter" className="text-flats-600 underline underline-offset-2 transition-colors hover:text-flats-700">
                book a Flamingo charter
              </Link>
              ,{' '}
              <Link href="/fishing-reports" className="text-flats-600 underline underline-offset-2 transition-colors hover:text-flats-700">
                read recent reports
              </Link>
              , or{' '}
              <Link href="/contact" className="text-flats-600 underline underline-offset-2 transition-colors hover:text-flats-700">
                contact us
              </Link>{' '}
              to discuss timing and what to expect.
            </p>
            <p className="mt-4 text-sm text-ink-600">
              Related guides:{' '}
              <Link href="/best-time-to-fish-flamingo" className="font-medium text-flats-600 underline-offset-2 hover:underline">Best time to fish Flamingo</Link>
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
                {TARPON_FAQS.map((item) => (
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
              title: 'Flamingo Tarpon Fishing Guide',
              description:
                'When tarpon show up near Flamingo, what conditions bring them in, and what anglers should expect.',
              url: PAGE_URL,
              datePublished: '2026-05-28',
              image: `${site.url}/images/trips/flamingo.jpg`,
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
              { name: 'Flamingo Tarpon Fishing Guide', url: PAGE_URL },
            ])
          ),
        }}
      />
      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(TARPON_FAQS)) }}
      />
    </>
  );
}
