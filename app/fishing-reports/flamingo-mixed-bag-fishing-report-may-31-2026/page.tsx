import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { site } from '@/lib/site';
import { faqSchema, blogPostingSchema, breadcrumbSchema } from '@/lib/seo';
import type { FAQItem } from '@/lib/seo';
import { getReportOrThrow } from '@/lib/fishing-reports';

const report = getReportOrThrow('flamingo-mixed-bag-fishing-report-may-31-2026');

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
    question: 'How does a full moon affect fishing in Flamingo?',
    answer:
      'A full moon can push fish off their usual feeding windows and scatter them from predictable spots. On this trip the snook and redfish that had been stacking in reliable areas were nowhere to be found the morning after a full moon. The fish had moved. Flexibility and a willingness to explore paid off more than sticking to the original plan.',
  },
  {
    question: 'What lures worked on this mixed-bag Flamingo trip?',
    answer:
      'A 3-inch Z-Man Mulletron in gold rush on a light jighead accounted for the tarpon. Gulp shrimp with a slow, patient retrieve got the tripletail to commit right off the side of the boat. The snook and redfish in the tidal cut were responding more to current position than any specific presentation.',
  },
  {
    question: 'Can you target tripletail out of Flamingo?',
    answer:
      'Yes. Tripletail are a fun sight-fishing target — they float near the surface and are visible when conditions cooperate. Slick calm water is your best friend. Even on an overcast day, no wind makes them readable by their outline. The legal minimum in Florida is 18 inches; the one from this trip was 17, so it went back. Gulp shrimp or a small paddle tail worked close to the boat.',
  },
  {
    question: "What's the best tide for backcountry fishing near Flamingo?",
    answer:
      'A falling morning tide that bottoms out around late morning is a reliable setup — fish funnel through cuts and stage on edges. That was the forecast for this trip. The full moon shuffled the usual snook and redfish, but tidal current still turned up fish. When a spot goes quiet, move and find where the water is moving.',
  },
];

const REPORT_URL = `${site.url}/fishing-reports/${report.slug}`;

export default function FlamingoMixedBagReportPage() {
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
              Flamingo Mixed-Bag Fishing Report: Tarpon, Snook, Redfish &amp; Tripletail
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              A full moon the night before scrambled the snook and redfish bite — but it opened
              the door to backcountry tarpon, thick trout action, a 17-inch tripletail, and a
              new tidal cut that saved the day.
            </p>
          </div>
        </section>

        {/* Article body */}
        <section className="bg-white pt-8 pb-16 md:pt-10 md:pb-20">
          <div className="container-prose">
            <div className="mx-auto max-w-3xl text-[17px] leading-relaxed text-ink-800">

              <Image
                src="/images/TylerTarpon05312026.jpeg"
                alt="Captain Tyler holding a 10-pound tarpon on the flats near Flamingo, Everglades"
                width={800}
                height={600}
                className="mb-6 w-full rounded-2xl"
                priority
              />

              <h2 className="mt-0 font-display text-2xl font-semibold text-ink-900">
                The Setup
              </h2>
              <p className="mt-4">
                When I checked the forecast Saturday night, I had high expectations. A falling
                morning tide bottoming out around 11 — that&apos;s my textbook setup out of{' '}
                <Link
                  href="/flamingo-fishing-charter"
                  className="text-flats-600 underline underline-offset-2 transition-colors hover:text-flats-700"
                >
                  Flamingo
                </Link>
                . Moving water in the morning, low slack at midday, then an incoming afternoon
                tide. What I didn&apos;t account for was the full moon the night before. That
                single variable changed everything.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold text-ink-900">
                First Stop: Nothing Where It Should Have Been
              </h2>
              <p className="mt-4">
                We started at a spot that had been producing well over the past few weeks. Not
                a soul in sight — no snook, no redfish, nothing moving. The moon had shuffled
                the fish off their normal haunts. Rather than grind a dead spot, I called an
                audible and pushed deeper into the{' '}
                <Link
                  href="/backcountry-fishing-everglades"
                  className="text-flats-600 underline underline-offset-2 transition-colors hover:text-flats-700"
                >
                  backcountry
                </Link>
                .
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold text-ink-900">
                Backcountry Bights: Trout, Tarpon, and a Problem
              </h2>
              <p className="mt-4">
                What we found back there was not what I expected. Spotted seatrout were
                stacked — more than ten over the course of the morning — and mixed in with
                them were tarpon ranging from around 20 to 100 pounds, all in less than two
                feet of water on a backcountry flat.
              </p>
              <p className="mt-4">
                The problem: the trout were so thick that every cast meant picking one up
                before we could work a bait in front of the tarpon. Unusual trouble to have.
                When a hundred-pound tarpon is ghosting the flat and you keep pulling trout
                out of the way, the day takes on its own rhythm.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold text-ink-900">
                A 10-Pound Tarpon Takes the Mulletron
              </h2>
              <p className="mt-4">
                As the tide reached where I wanted it, we moved to a backcountry current seam
                that had been excellent on our last trip. Still no snook — but more tarpon. As
                we pushed the edge I spotted a pair of small ones, maybe 10 pounds, holding
                just ahead of the bow. I put a 3-inch Z-Man Mulletron in gold rush out in
                front and the near fish smoked it. We got it to the boat, quick photo, a healthy
                revive, and it was on its way.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold text-ink-900">
                Flats Check: Sharks, Rays, and an Audible
              </h2>
              <p className="mt-4">
                We worked a few{' '}
                <Link
                  href="/backcountry-fishing-everglades"
                  className="text-flats-600 underline underline-offset-2 transition-colors hover:text-flats-700"
                >
                  Florida Bay flats
                </Link>{' '}
                looking for redfish. Mullet, sharks, and rays — no snook or reds. The full moon
                had clearly moved things around. I almost called it early. Then I noticed the
                conditions: the light was flat and overcast, but there was not a breath of wind
                on the water. Hot and slick calm. That combination is good for one thing.
              </p>

              <Image
                src="/images/TylerTripletail05312026.jpeg"
                alt="Captain Tyler holding a 17-inch tripletail caught on slick calm water near Flamingo"
                width={800}
                height={600}
                className="mt-6 w-full rounded-2xl"
              />

              <h2 className="mt-10 font-display text-2xl font-semibold text-ink-900">
                The Tripletail Gamble
              </h2>
              <p className="mt-4">
                Tripletail float near the surface and are tough to see without direct sunlight,
                but a slick calm surface makes them readable by their outline. I ran a few miles
                and found one free-floating in open water. I threw a Gulp shrimp and had to work
                it — tripletail can be picky — but it finally committed right off the side of the
                boat. A very cool eat to watch.
              </p>
              <p className="mt-4">
                It measured 17 inches. The legal minimum in Florida is 18. We took a quick
                picture and let it go.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold text-ink-900">
                The Hail Mary: A New Tidal Cut Pays Off
              </h2>
              <p className="mt-4">
                Around 12:30 we had trout, a tarpon, and the tripletail. Not terrible, but not
                what I expect out of Flamingo this time of year. I noticed the incoming tide was
                funneling hard through a tidal cut between a mangrove island and the mainland —
                the kind of moving water that concentrates fish. We drifted through and worked
                the protected shoreline on the back side.
              </p>
              <p className="mt-4">
                Within 30 minutes: two redfish and two snook, one of each being a solid fish.
                They had been pushed through the cut and tucked into the mangroves to wait out
                the current. When I have tough days I like to explore new water instead of
                grinding dead spots, and this time it paid off.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Image
                  src="/images/JonSnook05312026.jpeg"
                  alt="Angler holding a snook caught on a protected backcountry shoreline near Flamingo"
                  width={600}
                  height={600}
                  className="w-full rounded-2xl"
                />
                <Image
                  src="/images/TimRedfish05312026.jpeg"
                  alt="Angler holding a redfish caught in a tidal cut near Flamingo, Everglades"
                  width={600}
                  height={600}
                  className="w-full rounded-2xl"
                />
              </div>

              <h2 className="mt-10 font-display text-2xl font-semibold text-ink-900">
                How the Day Finished
              </h2>
              <p className="mt-4">
                We ended with double-digit trout, a tarpon, a tripletail, two redfish, and two
                snook. Not the snook and redfish day I had planned for — the full moon saw to
                that. But there was never a moment where the rods weren&apos;t bent. Backcountry
                fishing in the Everglades has a way of giving you a different day than you
                expected and a better story than you planned.
              </p>
              <p className="mt-4">
                The key takeaway: when the moon disrupts the normal pattern, explore. Find the
                current. The fish are still there — they&apos;ve just moved.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold text-ink-900">
                What&apos;s Biting Right Now
              </h2>
              <ul className="mt-4 space-y-3">
                {[
                  { label: 'Tarpon', body: 'were thick in the backcountry — mixed with trout on shallow flats and along current seams' },
                  { label: 'Spotted seatrout', body: 'were stacked in the deeper backcountry areas; reliable action even when the primary targets scatter' },
                  { label: 'Snook', body: 'are responding to tidal current — look for them staged in cuts and on the sheltered side of moving water' },
                  { label: 'Redfish', body: 'were off their normal flats this trip; the ones we found were pushed through a tidal cut and sheltering in the mangroves' },
                  { label: 'Tripletail', body: 'visible on calm water — overcast with no wind is the window; look for them floating near the surface' },
                  { label: 'Moon phase', body: 'the full moon the night before scattered the usual snook and redfish bite; plan for extra stops and stay flexible' },
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
