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

const PAGE_URL = `${site.url}/everglades-snook-fishing`;

export const metadata: Metadata = {
  title: 'Everglades Snook Fishing Guide',
  description:
    'Seasons, tides, wind, and what to expect for snook fishing in the Everglades backcountry — from mangrove creek mouths to Florida Bay edges, written by a local guide.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Everglades Snook Fishing Guide | Keys Time Charters',
    description:
      'Seasons, tides, and what to expect for snook fishing in the Everglades backcountry.',
    url: PAGE_URL,
    images: [{ url: '/images/snook-background.jpg', width: 1600, alt: 'Everglades mangrove shoreline — snook fishing habitat' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/snook-background.jpg'],
  },
};

const SNOOK_FAQS: FAQItem[] = [
  {
    question: 'When is the best time for snook fishing in the Everglades?',
    answer:
      'Spring and fall are typically the strongest windows. March through June offers active fish in the creek mouths and along the mangrove shorelines as water warms. September through November brings aggressive feeding before winter. Snook are catchable year round, but cold fronts in winter can slow activity significantly.',
  },
  {
    question: 'Where do snook hold in the Everglades backcountry?',
    answer:
      'Creek mouths, mangrove points, and channel edges are the most consistent producers. Snook are ambush predators that position where current moves bait past them. A falling tide draining a flat into a deeper edge is a reliable setup. Water with some current is almost always better than slack water.',
  },
  {
    question: 'What gear is used for Everglades snook?',
    answer:
      'Medium-heavy spinning gear with a fluorocarbon leader is the standard setup. Soft plastic paddle tails and jerkbaits are effective in most conditions. Live bait works well when current moves it naturally past structure. All gear is provided — you do not need to bring your own.',
  },
  {
    question: 'Are Everglades snook catch-and-release?',
    answer:
      'Captain Tyler practices responsible catch-and-release for snook. Regulations vary by species, season, and location — including different rules inside and outside Everglades National Park. If keeping fish is a consideration, discuss it when you book so the plan stays consistent with current FWC and National Park Service rules.',
  },
];

export default function EvergladesSnookFishingPage() {
  return (
    <>
      <Header />
      <main id="main">

        {/* Hero */}
        <section
          aria-labelledby="snook-hero-title"
          className="relative isolate flex min-h-[60vh] items-end overflow-hidden bg-ink-900"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-cover"
            style={{ backgroundImage: 'url("/images/snook-background.jpg"), linear-gradient(135deg,#0b2238,#1f4361)', backgroundSize: '140%', backgroundPosition: 'center 35%' }}
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-900/80 via-ink-900/30 to-transparent" />
          <div className="container-prose pb-14 pt-32 text-white">
            <span className="eyebrow !text-flats-200">Everglades National Park</span>
            <h1 id="snook-hero-title" className="mt-4 font-display text-4xl font-semibold leading-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl">
              Everglades Snook Fishing Guide
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/85">
              Snook hold in the mangrove creek mouths and coastal points of the Everglades year round. Here is how seasons, tides, and wind affect where they are and how they eat.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CallToBook className="btn-primary bg-flats-500 hover:bg-flats-600" />
              <a href={site.emailHref} className="btn-secondary">Email Us</a>
            </div>
          </div>
        </section>

        {/* Where Snook Live */}
        <section className="bg-white py-20 md:py-28">
          <div className="container-prose">
            <SectionHeading eyebrow="Where Snook Live" title="Mangrove creek mouths, coastal points, channel edges." />
            <div className="mt-6 max-w-3xl space-y-4 text-ink-700 leading-relaxed">
              <p>
                Everglades snook are structure-oriented, ambush-style predators. They hold where current funnels bait past them — creek mouths where tidal flow concentrates shrimp and mullet, mangrove points that stick into the current, and channel edges where shallow flats drop into deeper water.
              </p>
              <p>
                The Everglades holds snook year round, which makes it a reliable fishery across seasons. What changes is where the fish sit and how aggressively they feed — that shifts with water temperature, tides, and wind, all of which shape the daily plan.
              </p>
              <p>
                The{' '}
                <Link href="/backcountry-fishing-everglades" className="text-flats-600 underline underline-offset-2 transition-colors hover:text-flats-700">
                  backcountry trip
                </Link>{' '}
                is the standard starting point for Everglades snook, covering the mangrove shorelines and tidal creek systems of Florida Bay.
              </p>
            </div>
          </div>
        </section>

        {/* Seasonal Patterns */}
        <section className="bg-sand-50 py-20 md:py-28">
          <div className="container-prose">
            <SectionHeading eyebrow="Seasonal Patterns" title="How snook behavior changes through the year." align="center" />
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {[
                {
                  season: 'Spring (March–June)',
                  body: 'Water warms and snook become more active across the creek mouths and mangrove shorelines. Pre-spawn feeding picks up through April and May. One of the most consistent windows of the year.',
                },
                {
                  season: 'Summer (July–September)',
                  body: 'Snook spawn near passes and inlets, which can scatter fish from typical holding spots. Still fishable, particularly early morning or in deeper, shaded mangrove pockets. Adjust expectations and plan accordingly.',
                },
                {
                  season: 'Fall (October–November)',
                  body: 'Post-spawn fish return to structure and feed aggressively before winter. Often the most active period of the year. Water cools, fish are predictable, and pressure is typically low.',
                },
                {
                  season: 'Winter (December–February)',
                  body: 'Snook are cold-sensitive. When temperatures drop, fish push into deeper creek channels and become lethargic. Productive fishing requires stable conditions and patience. Best results between fronts on clear, sunny afternoons.',
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
            <SectionHeading eyebrow="Conditions" title="Reading tides and wind for snook." />
            <div className="mt-6 max-w-3xl">
              <p className="text-ink-700 leading-relaxed">
                Snook are one of the most tide-responsive fish in the Everglades. The tide shapes not just where they hold, but how aggressively they eat. The daily plan is always built around the tide window.
              </p>
              <ul className="mt-6 space-y-3 text-[17px] leading-relaxed text-ink-800">
                {[
                  { label: 'Falling tide', body: 'drains the flats and forces bait onto channel edges — snook stack at the mouths of draining creeks and feed actively' },
                  { label: 'Rising tide', body: 'pushes snook into the mangroves to ambush shrimp and small fish moving with the water' },
                  { label: 'Slack tide', body: 'least productive period — fish sit tight and eat less aggressively' },
                  { label: 'East or SE wind', body: 'generally favorable — concentrates bait and gives the skiff a low profile on approach' },
                  { label: 'North wind', body: 'slows snook noticeably, especially October through February — plan shifts to deeper, protected water' },
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

        {/* Catch-and-Release */}
        <section className="bg-sand-50 py-20 md:py-28">
          <div className="container-prose">
            <SectionHeading eyebrow="Conservation" title="Catch-and-release expectations." />
            <div className="mt-6 max-w-3xl space-y-4 text-ink-700 leading-relaxed">
              <p>
                Captain Tyler practices responsible catch-and-release for snook. Fish are revived and released in the water — that is the standard approach for backcountry snook fishing in this area and helps keep the fishery healthy.
              </p>
              <p>
                Snook regulations vary by species, season, and location — including different rules inside and outside Everglades National Park. If keeping fish is a consideration for your trip, ask about it when you book so the plan stays consistent with current FWC and National Park Service requirements.
              </p>
              <p>
                For recent conditions and what has been biting, see the{' '}
                <Link href="/fishing-reports" className="text-flats-600 underline underline-offset-2 transition-colors hover:text-flats-700">
                  fishing reports
                </Link>{' '}
                — including the{' '}
                <Link href="/fishing-reports/flamingo-snook-fishing-report-may-17-2026" className="text-flats-600 underline underline-offset-2 transition-colors hover:text-flats-700">
                  May 17, 2026 Flamingo snook report
                </Link>
                . The{' '}
                <Link href="/flamingo-fishing-charter" className="text-flats-600 underline underline-offset-2 transition-colors hover:text-flats-700">
                  Flamingo charter
                </Link>{' '}
                page covers how these trips are structured.
              </p>
              <p className="text-sm text-ink-600">
                Related:{' '}
                <Link href="/best-time-to-fish-flamingo" className="font-medium text-flats-600 underline-offset-2 hover:underline">best time to fish Flamingo</Link>
                {', '}
                <Link href="/flamingo-tarpon-fishing" className="font-medium text-flats-600 underline-offset-2 hover:underline">Flamingo tarpon fishing guide</Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* CTA links */}
        <section className="bg-white py-12 md:py-16">
          <div className="container-prose">
            <p className="text-ink-700">
              Ready to target snook in the Everglades?{' '}
              <Link href="/pricing" className="text-flats-600 underline underline-offset-2 transition-colors hover:text-flats-700">
                See pricing
              </Link>
              ,{' '}
              <Link href="/backcountry-fishing-everglades" className="text-flats-600 underline underline-offset-2 transition-colors hover:text-flats-700">
                book a backcountry trip
              </Link>
              ,{' '}
              <Link href="/flamingo-fishing-charter" className="text-flats-600 underline underline-offset-2 transition-colors hover:text-flats-700">
                explore the Flamingo charter
              </Link>
              , or{' '}
              <Link href="/contact" className="text-flats-600 underline underline-offset-2 transition-colors hover:text-flats-700">
                contact us
              </Link>{' '}
              with your dates.
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
                {SNOOK_FAQS.map((item) => (
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
              title: 'Everglades Snook Fishing Guide',
              description:
                'Seasons, tides, wind, and what to expect for snook fishing in the Everglades backcountry.',
              url: PAGE_URL,
              datePublished: '2026-05-28',
              image: `${site.url}/images/snook-background.jpg`,
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
              { name: 'Everglades Snook Fishing Guide', url: PAGE_URL },
            ])
          ),
        }}
      />
      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(SNOOK_FAQS)) }}
      />
    </>
  );
}
