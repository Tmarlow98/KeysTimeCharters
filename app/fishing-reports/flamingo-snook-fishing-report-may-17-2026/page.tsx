import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { site } from '@/lib/site';
import { faqSchema, blogPostingSchema, breadcrumbSchema } from '@/lib/seo';
import type { FAQItem } from '@/lib/seo';
import { getReportOrThrow } from '@/lib/fishing-reports';

const report = getReportOrThrow('flamingo-snook-fishing-report-may-17-2026');

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
    question: "What's biting in Flamingo right now?",
    answer:
      'Snook are the main target in the backcountry pockets and channel edges. Redfish are also active on the Florida Bay grass flats, often trailing stingrays. The late-morning low tide has been the best window this week.',
  },
  {
    question: 'Is May a good time for snook fishing in the Everglades?',
    answer:
      'Yes. Water temperatures are where snook want them, and fish are stacking in predictable backcountry spots. When the tides line up, you can have a high-action day. May through early summer is one of the more consistent stretches of the year out of Flamingo.',
  },
  {
    question: 'How does east wind affect fishing out of Flamingo?',
    answer:
      'East wind concentrates fish by pushing water off the flats, but it also breaks up established schools if it blows hard for several days. On this trip we had to skip a spot that had been loaded the week before and find where the fish had moved. Flexibility matters more than a fixed plan when the wind has been up.',
  },
  {
    question: 'Can we target tarpon on the same trip?',
    answer:
      "May is one of the better months for backcountry tarpon near Flamingo. Depending on timing and conditions, it's possible to mix tarpon and snook into the same day. Ask when you book and we'll put together a plan.",
  },
];

const REPORT_URL = `${site.url}/fishing-reports/${report.slug}`;

export default function FlamingSnookReportPage() {
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
              Flamingo Fishing Report: Double-Digit Snook
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              A stiff east wind and late-morning low water set up a strong day of Everglades
              backcountry fishing out of Flamingo — double-digit snook and a shot at redfish.
            </p>
          </div>
        </section>

        {/* Article body */}
        <section className="bg-white pt-8 pb-16 md:pt-10 md:pb-20">
          <div className="container-prose">
            <div className="mx-auto max-w-3xl text-[17px] leading-relaxed text-ink-800">

              <Image
                src="/images/dad morning snook.jpeg"
                alt="Angler holding a snook on a flats skiff with an early morning sky, Flamingo"
                width={800}
                height={600}
                className="mb-6 w-full rounded-2xl"
                priority
              />

              <h2 className="mt-0 font-display text-2xl font-semibold text-ink-900">
                The Setup
              </h2>
              <p className="mt-4">
                When I checked the forecast Saturday night, I had a good feeling. Stiff east
                wind, late-morning low tide, warm water temperatures — that combination in May
                pushes fish into the backcountry pockets and channels where I want them. I had
                four spots in mind and a plan for the tide.
              </p>
              <p className="mt-4">
                We launched out of Flamingo and ran into the{' '}
                <Link
                  href="/flamingo-fishing-charter"
                  className="text-flats-600 underline underline-offset-2 transition-colors hover:text-flats-700"
                >
                  Everglades backcountry
                </Link>
                . The Florida Bay grass flats were clear, which cuts both ways — fish see your
                presentation well, but they also see your boat. The wind chop was actually
                helping with that today.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold text-ink-900">
                First Stop: Schools Broken Up by the Wind
              </h2>
              <p className="mt-4">
                My first spot had been loaded with redfish on our previous trip — big schools,
                stacked and feeding. Four or five days of sustained east wind will move fish
                around, and when we pushed up into the zone, the schools were gone.
              </p>
              <p className="mt-4">
                We weren't skunked. A solid snook came to the boat and a smaller redfish.
                Something heavy came off before I could tell whether it was a bull red or a big
                snook. That's fishing. You move on.
              </p>
              <p className="mt-4">
                Two more stops after that produced nothing. When the fish aren't home, you
                don't force it.
              </p>
              <Image
                src="/images/dad snook.jpeg"
                alt="Angler holding a snook on a Florida Bay flat, Everglades backcountry"
                width={800}
                height={600}
                className="mt-6 w-full rounded-2xl"
              />

              <h2 className="mt-10 font-display text-2xl font-semibold text-ink-900">
                The Money Spot
              </h2>
              <p className="mt-4">
                The fourth stop was the one I'd been building toward all morning. The falling
                tide was draining off a flat into a deeper edge at just the right pace, and the
                snook were stacked.
              </p>
              <p className="mt-4">
                We doubled up four separate times — two bent rods at once, both fish running
                different directions. Solo snook in between. The fish were aggressive and the
                window stayed open longer than I expected. A good snook bite in the Everglades
                backcountry has its own rhythm, and we stayed in it.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Image
                  src="/images/tyler and jake snook.jpeg"
                  alt="Two anglers each holding a snook on a flats skiff in Florida Bay"
                  width={600}
                  height={600}
                  className="w-full rounded-2xl"
                />
                <Image
                  src="/images/tyler and dad snook.jpeg"
                  alt="Captain on the polling platform while angler holds a snook, Florida Bay"
                  width={600}
                  height={600}
                  className="w-full rounded-2xl"
                />
              </div>

              <h2 className="mt-10 font-display text-2xl font-semibold text-ink-900">
                A Shot at Redfish on the Ray
              </h2>
              <p className="mt-4">
                In the middle of the snook action, I spotted a large redfish working behind a
                stingray on a nearby flat. The ray roots up shrimp and crabs from the grass;
                the redfish follows right behind and cleans up. Classic{' '}
                <Link
                  href="/backcountry-fishing-everglades"
                  className="text-flats-600 underline underline-offset-2 transition-colors hover:text-flats-700"
                >
                  Florida Bay redfish
                </Link>{' '}
                behavior.
              </p>
              <p className="mt-4">
                We got into position. The presentation was good. The fish committed. The
                hookset didn't connect.
              </p>
              <p className="mt-4">
                That fish was north of 30 inches. That's sight fishing — the read, the cast,
                and the drift all came together. Sometimes the last piece just doesn't.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold text-ink-900">
                How the Day Finished
              </h2>
              <p className="mt-4">
                We ended with double-digit snook and that one redfish from the morning. There
                were plenty of shots we couldn't convert — short strikes, angles that didn't
                allow a clean cast, and that redfish. A full day of fishing in the Everglades
                backcountry looks like that.
              </p>
              <p className="mt-4">
                The late-morning low was the best window. East wind is moving fish around right
                now, so be ready to adjust if a spot doesn't produce quickly. Hit the next one.
              </p>
              <Image
                src="/images/jake red.jpeg"
                alt="Angler holding a redfish caught in the Everglades backcountry near Flamingo"
                width={800}
                height={600}
                className="mt-6 w-full rounded-2xl"
              />

              <h2 className="mt-10 font-display text-2xl font-semibold text-ink-900">
                What's Biting Right Now
              </h2>
              <ul className="mt-4 space-y-3">
                {[
                  { label: 'Snook', body: 'are stacked in backcountry pockets and channel edges — moving water is everything' },
                  { label: 'Redfish', body: 'are working the Florida Bay grass flats, often following rays — look for them tailing in that stingray wake' },
                  { label: 'Tides', body: 'late-morning lows have been the best window this week out of Flamingo' },
                  { label: 'Wind', body: 'east wind is concentrating fish but also breaking up schools — plan for multiple stops' },
                  { label: 'Water clarity', body: 'excellent right now — longer casts and lighter presentations are worth the effort' },
                ].map((item) => (
                  <li key={item.label} className="flex gap-2">
                    <span className="shrink-0 text-flats-500" aria-hidden="true">—</span>
                    <span>
                      <strong className="font-semibold text-ink-900">{item.label}</strong>
                      {item.label === 'Tides' ? ': ' : ' '}
                      {item.body}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6">
                May is also one of the better months for tarpon in the backcountry. If you want
                to mix in a shot at rolling fish on the same day, ask about it when you book.
              </p>

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
                </Link>{' '}
                and we&apos;ll put together a plan.
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
