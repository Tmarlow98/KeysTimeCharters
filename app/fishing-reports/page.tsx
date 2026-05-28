import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { site } from '@/lib/site';
import { reportListSchema } from '@/lib/seo';
import { sortedFishingReports } from '@/lib/fishing-reports';

export const metadata: Metadata = {
  title: 'Florida Keys & Flamingo Fishing Reports | Keys Time Charters',
  description:
    "Recent fishing reports from Keys Time Charters — Florida Keys, Flamingo, Everglades National Park, and Florida Bay. See what's biting and when.",
  alternates: { canonical: `${site.url}/fishing-reports` },
  openGraph: {
    title: 'Florida Keys & Flamingo Fishing Reports | Keys Time Charters',
    description:
      'Recent fishing reports covering the Florida Keys, Flamingo, Everglades National Park, and Florida Bay backcountry fishing.',
    url: `${site.url}/fishing-reports`,
  },
  keywords: [
    'Florida Keys fishing report',
    'Flamingo fishing report',
    'Everglades fishing report',
    'Florida Bay fishing report',
    'backcountry fishing Flamingo',
    'snook fishing Everglades',
    'redfish Florida Bay',
  ],
};

const reports = sortedFishingReports.map((r) => ({
  href: `/fishing-reports/${r.slug}`,
  title: r.title,
  date: r.date,
  dateTime: r.datePublished,
  summary: r.summary,
}));

export default function FishingReportsPage() {
  return (
    <>
      <Header />
      <main id="main">

        <section
          aria-labelledby="reports-title"
          className="bg-ink-900 pb-16 pt-28 text-white md:pb-20 md:pt-36"
        >
          <div className="container-prose">
            <span className="eyebrow !text-flats-300">On the Water</span>
            <h1
              id="reports-title"
              className="mt-3 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl"
            >
              Fishing Reports
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/75">
              Recent reports from Flamingo, Everglades National Park, Florida Bay, and the Keys backcountry — current conditions, tides, wind, and what&apos;s biting. Book a{' '}
              <Link href="/flamingo-fishing-charter" className="underline underline-offset-2 text-white/90 hover:text-white">Flamingo charter</Link>
              ,{' '}
              <Link href="/backcountry-fishing-everglades" className="underline underline-offset-2 text-white/90 hover:text-white">backcountry trip</Link>
              , or{' '}
              <Link href="/florida-keys-flats-fishing" className="underline underline-offset-2 text-white/90 hover:text-white">Keys flats day</Link>
              .
            </p>
          </div>
        </section>

        <section
          aria-labelledby="recent-reports-heading"
          className="bg-sand-50 py-16 md:py-24"
        >
          <div className="container-prose">
            <h2
              id="recent-reports-heading"
              className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl"
            >
              Recent Reports
            </h2>
            <div className="mt-8 grid gap-5">
              {reports.map((r) => (
                <article
                  key={r.href}
                  className="rounded-2xl border border-ink-100 bg-white p-8 shadow-card"
                >
                  <time
                    dateTime={r.dateTime}
                    className="text-xs font-semibold uppercase tracking-widest text-flats-700"
                  >
                    {r.date}
                  </time>
                  <h3 className="mt-2 font-display text-xl font-semibold text-ink-900 sm:text-2xl">
                    <Link
                      href={r.href}
                      className="transition-colors hover:text-flats-600"
                    >
                      {r.title}
                    </Link>
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-600">
                    {r.summary}
                  </p>
                  <Link
                    href={r.href}
                    className="mt-5 inline-block text-sm font-semibold text-flats-600 transition-colors hover:text-flats-700"
                  >
                    Read full report →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />

      {/* JSON-LD: CollectionPage + ItemList */}
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            reportListSchema(
              reports.map((r) => ({
                title: r.title,
                url: `${site.url}${r.href}`,
                datePublished: r.dateTime,
                description: r.summary,
              }))
            )
          ),
        }}
      />
    </>
  );
}
