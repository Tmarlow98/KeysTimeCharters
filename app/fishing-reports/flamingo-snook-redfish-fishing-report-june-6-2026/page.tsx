import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { site } from '@/lib/site';
import { faqSchema, blogPostingSchema, breadcrumbSchema } from '@/lib/seo';
import type { FAQItem } from '@/lib/seo';
import { getReportOrThrow } from '@/lib/fishing-reports';

const report = getReportOrThrow('flamingo-snook-redfish-fishing-report-june-6-2026');

export const metadata: Metadata = {
  title: report.title,
  description: report.summary,
  alternates: {
    canonical: `${site.url}/fishing-reports/${report.slug}`,
  },
  openGraph: {
    title: report.title,
    description: report.summary,
    url: `${site.url}/fishing-reports/${report.slug}`,
  },
};

const REPORT_FAQS: FAQItem[] = [
  {
    question: 'Is June a good month for snook and redfish out of Flamingo?',
    answer:
      'Yes. Water temperatures are where both species want them, and with the right tidal setup the bite can be excellent. June tends to reward anglers who key in on the falling tide rather than grinding the incoming slack. The fish are there — the tide dictates when they turn on.',
  },
  {
    question: 'How does a strong east wind affect backcountry fishing near Flamingo?',
    answer:
      'East wind combined with bright sun makes fish spooky on open water. They sit tight and won\'t commit no matter how good the cast is. On this trip the best answer was to fish the mangroves on the incoming and then wait for the falling tide to push the fish onto edges where current gave them something to focus on besides the boat.',
  },
  {
    question: 'What\'s the best tide stage for snook and redfish near Flamingo in summer?',
    answer:
      'The falling afternoon tide has been the consistent producer this season. The incoming pushes fish into the mangroves where they\'re harder to target; when the water pulls back off the flats, they stage on the edges and feed. Plan to be fishing from midday into the afternoon to catch that window.',
  },
  {
    question: 'What does it mean when an overslot redfish is released?',
    answer:
      'Florida\'s slot limit for redfish is 18 to 27 inches. A fish over 27 inches — called overslot — must be released. These are large, spawning-age fish and the regulations protect them for good reason. The red on this trip was estimated at over 30 inches. Quick photo, strong revive, back in the water.',
  },
];

const REPORT_URL = `${site.url}/fishing-reports/${report.slug}`;

export default function FlamingoSnookRedfishJune6ReportPage() {
  return (
    <>
      <Header />
      <main id="main">

        {/* Article header */}
        <section
          aria-labelledby="report-title"
          className="bg-ink-900 pb-6 pt-20 text-white md:pb-8 md:pt-24"
        >
          <div className="container-prose">
            <Link
              href="/fishing-reports"
              className="inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-flats-200"
            >
              ← Fishing Reports
            </Link>
            <time
              dateTime={report.datePublished}
              className="mt-3 block text-xs font-semibold uppercase tracking-widest text-flats-300"
            >
              {report.date}
            </time>
            <h1
              id="report-title"
              className="mt-3 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl"
            >
              Flamingo Fishing Report: Snook &amp; Redfish on the Falling Tide
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              A slow morning with spooky fish and low water turned into a strong afternoon once
              the tide started pulling out — 4 reds and 3 snook, capped by a 30-plus-inch
              overslot red on the flat edge.
            </p>
          </div>
        </section>

        {/* Article body */}
        <section className="bg-white pt-8 pb-16 md:pt-10 md:pb-20">
          <div className="container-prose">
            <div className="mx-auto max-w-3xl text-[17px] leading-relaxed text-ink-800">

              <Image
                src="/images/KevinBigRedHeroPic6-6.jpeg"
                alt="Angler holding a 30-inch-plus overslot redfish on the backcountry flats near Flamingo"
                width={800}
                height={600}
                className="mb-6 w-full rounded-2xl"
                priority
              />

              <h2 className="mt-0 font-display text-2xl font-semibold text-ink-900">
                The Setup
              </h2>
              <p className="mt-4">
                When I looked at the forecast Friday night, the tides made sense on paper — low
                water early, an incoming push starting around nine or ten, and a falling afternoon
                tide that would drain off the flats by mid-afternoon. Half moon, 15 mph east wind,
                clear skies. I was planning for snook and reds out of{' '}
                <Link
                  href="/flamingo-fishing-charter"
                  className="text-flats-600 underline underline-offset-2 transition-colors hover:text-flats-700"
                >
                  Flamingo
                </Link>
                , with tarpon on my mind if we found the right water. We launched the three of
                us — my brother, a friend, and me — and went to work.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold text-ink-900">
                Too Early, Too Low
              </h2>
              <p className="mt-4">
                My first stop needed more water than it had. The flat was almost dry — we
                couldn&apos;t fish it at all. Sometimes you push early and hope conditions
                cooperate. They didn&apos;t. We idled out and waited on the incoming tide to give
                us something to work with. No tarpon showed up anywhere on the water that morning,
                either. Some days they&apos;re around, some days they&apos;re not.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold text-ink-900">
                Incoming Tide: Fish Are There, Fish Won&apos;t Eat
              </h2>
              <p className="mt-4">
                As the tide filled, I pushed us onto some channel edges where fish typically stack
                on the push. We could see them. That&apos;s the frustrating part — the fish were
                right there and they just weren&apos;t eating. Bright sun overhead, east wind
                pushing a chop, fish sitting tight and wired. We made clean casts and got nothing
                back. On days like this, forcing the issue only makes it worse.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold text-ink-900">
                Mangroves on the Push
              </h2>
              <p className="mt-4">
                Rather than keep grinding on fish that weren&apos;t going to bite in the open,
                I moved us into the trees. On a hard incoming the{' '}
                <Link
                  href="/backcountry-fishing-everglades"
                  className="text-flats-600 underline underline-offset-2 transition-colors hover:text-flats-700"
                >
                  mangroves
                </Link>{' '}
                are more productive than exposed water — fish get up tight in the roots and wait
                for current to bring food to them. We slowed down, picked our shots, and got a
                red and a snook to the boat. One of each.
              </p>
              <p className="mt-4">
                Not the wide-open bite I was expecting, but it confirmed what I needed to know —
                the fish were in the system. They just needed the right setup to go off.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Image
                  src="/images/TylerRed6-6.JPG"
                  alt="Captain Tyler holding a redfish caught tight to the mangroves on the incoming tide near Flamingo"
                  width={600}
                  height={600}
                  className="w-full rounded-2xl"
                />
                <Image
                  src="/images/dylanSmallSnook6-6.JPG"
                  alt="Angler holding a snook caught in the mangroves on the incoming tide near Flamingo"
                  width={600}
                  height={600}
                  className="w-full rounded-2xl"
                />
              </div>

              <h2 className="mt-10 font-display text-2xl font-semibold text-ink-900">
                The Falling Tide Pays Off
              </h2>
              <p className="mt-4">
                Around midday the tide peaked and started falling. That&apos;s when things changed.
                As the water peeled back off the flat edges, the snook and reds repositioned and
                turned on. This is the pattern I&apos;ve been seeing consistently this season out
                of Flamingo — the incoming pushes fish into places that are hard to target, and the
                falling tide puts them right where you want them. We worked the edges and the rods
                stayed busy.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold text-ink-900">
                A 30-Inch-Plus Red on the Flat
              </h2>
              <p className="mt-4">
                The standout of the afternoon was a thick redfish that pushed onto an exposed flat
                edge ahead of the tide. We guessed him at over 30 inches — well over the
                27-inch slot maximum. He took a solid hook, ran hard, and came to the boat in good
                shape. Quick photo, strong revive, back in the water. That&apos;s a spawning fish
                and it goes back every time.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Image
                  src="/images/DylanPrettyRed6-6.jpeg"
                  alt="Angler holding a redfish caught on the flat edges during the falling tide near Flamingo"
                  width={600}
                  height={600}
                  className="w-full rounded-2xl"
                />
                <Image
                  src="/images/KevinDecentSnook6-6.jpeg"
                  alt="Angler holding a snook caught on the flat edges during the falling afternoon tide near Flamingo"
                  width={600}
                  height={600}
                  className="w-full rounded-2xl"
                />
              </div>

              <h2 className="mt-10 font-display text-2xl font-semibold text-ink-900">
                How the Day Finished
              </h2>
              <p className="mt-4">
                We ended with 4 reds and 3 snook. Not a blowout day, but a solid finish
                considering how the morning went. The consistent theme this season has been
                patience — the incoming tide is almost always harder, the falling tide almost
                always delivers. Keep working through the slow stretch and let the water do its job.
              </p>
              <p className="mt-4">
                The day started about as slow as it can — water too low to fish, then spooky
                fish that wouldn&apos;t eat. Consistency and adjusting to what the tide was giving
                us is what turned it around. That&apos;s the lesson this season.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold text-ink-900">
                What&apos;s Biting Right Now
              </h2>
              <ul className="mt-4 space-y-3">
                {[
                  { label: 'Snook', body: 'are staging on flat edges on the falling tide — east wind and bright sun shut down the open-water bite; wait for current to activate them' },
                  { label: 'Redfish', body: 'were in the mangroves on the incoming and pushed to the flat edges as the water fell; the falling tide is the window' },
                  { label: 'Tides', body: 'the falling afternoon tide has been the consistent producer this season — plan to be on the water from midday into the afternoon' },
                  { label: 'Wind', body: '15 mph east with full sun shuts down the open flats bite; fish tight to cover on the push, then work the edges as the tide pulls back' },
                  { label: 'Tarpon', body: 'were not around on this trip — no rolling fish anywhere on the water; snook and reds were the play' },
                ].map((item) => (
                  <li key={item.label} className="flex gap-2">
                    <span className="shrink-0 text-flats-500" aria-hidden="true">—</span>
                    <span>
                      <strong className="font-semibold text-ink-900">{item.label}</strong>
                      {' '}
                      {item.body}
                    </span>
                  </li>
                ))}
              </ul>

              <hr className="my-10 border-ink-100" />

              <h2 className="font-display text-2xl font-semibold text-ink-900">
                Frequently Asked Questions
              </h2>
              <div className="mt-6 space-y-6">
                {REPORT_FAQS.map((item) => (
                  <div key={item.question}>
                    <p className="font-semibold text-ink-900">{item.question}</p>
                    <p className="mt-2">{item.answer}</p>
                  </div>
                ))}
              </div>

              <hr className="my-10 border-ink-100" />

              <h2 className="font-display text-2xl font-semibold text-ink-900">
                Related Pages
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {report.relatedPages.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      className="flex items-center justify-between rounded-xl border border-ink-100 bg-white px-5 py-4 text-sm font-semibold text-ink-800 shadow-card transition-colors hover:border-flats-300 hover:text-flats-700"
                    >
                      {page.label}
                      <span aria-hidden="true" className="ml-3 text-flats-400">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/fishing-reports"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-flats-600 transition-colors hover:text-flats-700"
              >
                ← More fishing reports
              </Link>

              <hr className="my-10 border-ink-100" />

              <p>
                Ready to fish Flamingo?{' '}
                <Link
                  href="/contact"
                  className="text-flats-600 underline underline-offset-2 transition-colors hover:text-flats-700"
                >
                  Book a Flamingo backcountry fishing charter
                </Link>
                {' '}and we&apos;ll put together a plan around the tides and current conditions.
              </p>

            </div>
          </div>
        </section>

      </main>
      <Footer />

      {/* JSON-LD: BlogPosting */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            blogPostingSchema({
              title: report.title,
              description: report.summary,
              url: REPORT_URL,
              datePublished: report.datePublished,
              dateModified: report.dateModified,
              authorName: 'Captain Tyler Marlow',
              image: report.image ? `${site.url}${encodeURI(report.image)}` : undefined,
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
              { name: 'Fishing Reports', url: `${site.url}/fishing-reports` },
              { name: report.title, url: REPORT_URL },
            ])
          ),
        }}
      />

      {/* JSON-LD: FAQPage — fed from the same array rendered above */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(REPORT_FAQS)) }}
      />
    </>
  );
}
