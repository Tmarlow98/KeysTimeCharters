import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingCTA from '@/components/BookingCTA';
import SectionHeading from '@/components/SectionHeading';
import CallToBook from '@/components/CallToBook';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Fishing Charter Prices | Keys Time Charters',
  description:
    'Florida Keys and Flamingo fishing charter pricing — 4, 6, and 8-hour private trips. All gear and tackle included. Call to check availability.',
  alternates: { canonical: `${site.url}/pricing` },
  openGraph: {
    title: 'Fishing Charter Prices | Keys Time Charters',
    description: '4, 6, and 8-hour private fishing charter pricing for the Florida Keys and Flamingo.',
    url: `${site.url}/pricing`,
  },
  keywords: ['florida keys fishing charter prices', 'flamingo fishing charter cost', 'everglades fishing charter rates', 'how much does a fishing charter cost florida keys'],
};

const TRIPS_PRICING = [
  {
    label: '4-Hour Trip',
    price: '$650',
    ideal: 'First-timers, half-day schedules, or anglers with young kids',
    description: 'A focused morning or afternoon targeting one area and species. Plenty of time to get on fish and work the bite.',
  },
  {
    label: '6-Hour Trip',
    price: '$750',
    ideal: 'Most popular — covers more water and species',
    description: 'The most popular option. Enough time to run multiple spots, adjust to the conditions, and give the fish a real chance to turn on.',
  },
  {
    label: '8-Hour Trip',
    price: '$900',
    ideal: 'Full-day explorers and serious anglers',
    description: 'A full day on the water. Best for anglers targeting migratory tarpon, covering multiple fisheries, or just wanting the most time.',
  },
];

const INCLUDED = [
  'All rods, reels, and tackle',
  'Live and artificial bait',
  'Fuel and boat fees',
  'Fish cleaning and filleting',
  'Cold drinking water on board',
  'Florida saltwater fishing license',
  'Expert local guide',
];

const NOT_INCLUDED = [
  'Gratuity (customary, appreciated)',
  'Food and personal snacks',
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main id="main">

        {/* Header section */}
        <section aria-labelledby="pricing-title" className="bg-ink-900 py-20 pt-32 text-white md:py-28 md:pt-40">
          <div className="container-prose">
            <span className="eyebrow !text-flats-200">Private Charters Only</span>
            <h1 id="pricing-title" className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              Charter Pricing
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              All trips are private — your group on the boat, no strangers. Rates below cover the full charter. Call to confirm availability and pick a date.
            </p>
          </div>
        </section>

        {/* Price cards */}
        <section aria-labelledby="pricing-cards" className="bg-sand-50 py-20 md:py-28">
          <div className="container-prose">
            <div className="grid gap-6 md:grid-cols-3">
              {TRIPS_PRICING.map((trip, i) => (
                <div
                  key={trip.label}
                  className={`flex flex-col rounded-2xl border p-8 ${
                    i === 1
                      ? 'border-flats-500 bg-white shadow-lg ring-1 ring-flats-500'
                      : 'border-ink-100 bg-white shadow-card'
                  }`}
                >
                  {i === 1 && (
                    <span className="mb-4 inline-block self-start rounded-full bg-flats-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-flats-700">
                      Most Popular
                    </span>
                  )}
                  <p className="text-sm font-semibold uppercase tracking-widest text-ink-500">{trip.label}</p>
                  <p className="mt-3 font-display text-5xl font-semibold text-ink-900">{trip.price}</p>
                  <p className="mt-1 text-sm text-ink-500">per charter · private group</p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-700">{trip.description}</p>
                  <p className="mt-3 text-xs text-ink-500">
                    <span className="font-medium text-ink-700">Best for:</span> {trip.ideal}
                  </p>
                  <CallToBook className="btn-primary mt-8 text-center" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Included / not included */}
        <section aria-labelledby="pricing-included" className="bg-white py-20 md:py-28">
          <div className="container-prose">
            <SectionHeading
              eyebrow="What's Included"
              title="Everything you need on the boat."
              align="center"
            />
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-ink-100 bg-sand-50 p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-flats-600">Included</p>
                <ul className="mt-4 space-y-3">
                  {INCLUDED.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink-700">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-flats-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-ink-100 bg-sand-50 p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-ink-400">Not Included</p>
                <ul className="mt-4 space-y-3">
                  {NOT_INCLUDED.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink-700">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-flats-50 p-6 text-sm text-ink-700">
              <strong className="text-ink-900">Booking note:</strong> A deposit is required to hold your date. We&apos;ll confirm all details — ramp location, tide window, and exact time — a few days before your trip. Cancellations due to unsafe weather are rescheduled at no charge.
            </div>
          </div>
        </section>

        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
