import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { site } from '@/lib/site';

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

const REPORTS = [
  {
    href: '/fishing-reports/flamingo-snook-fishing-report-may-17-2026',
    title: 'Flamingo Fishing Report: Double-Digit Snook – May 17, 2026',
    date: 'May 17, 2026',
    dateTime: '2026-05-17',
    summary:
      'A stiff east wind and late-morning low water set up a strong day of Everglades backcountry fishing out of Flamingo — double-digit snook and a shot at redfish.',
  },
];

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
              Recent reports from Flamingo, Everglades National Park, Florida Bay, and the Keys backcountry — current conditions, tides, wind, and what's biting.
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
              {REPORTS.map((r) => (
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
    </>
  );
}
