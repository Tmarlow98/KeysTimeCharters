import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingCTA from '@/components/BookingCTA';
import SectionHeading from '@/components/SectionHeading';
import CallToBook from '@/components/CallToBook';
import FAQ from '@/components/FAQ';
import { site } from '@/lib/site';
import { faqSchema } from '@/lib/seo';
import type { FAQItem } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Fishing Charter Prices | Keys Time Charters',
  description:
    'Florida Keys and Flamingo fishing charter pricing — 4-hour $600, 6-hour $700, 8-hour $800. Private trips, all gear included. Call to check availability.',
  alternates: { canonical: `${site.url}/pricing` },
  openGraph: {
    title: 'Fishing Charter Prices | Keys Time Charters',
    description: '4-hour $600, 6-hour $700, 8-hour $800 — private fishing charters in the Florida Keys and Flamingo.',
    url: `${site.url}/pricing`,
  },
  keywords: ['florida keys fishing charter prices', 'flamingo fishing charter cost', 'everglades fishing charter rates', 'how much does a fishing charter cost florida keys'],
};

const TRIPS_PRICING = [
  {
    label: '4-Hour Trip',
    price: '$600',
    ideal: 'First-timers, families, or a tight morning window',
    description: 'A focused half-day hitting one area hard. Ideal for early risers who want to be off the water before the heat sets in.',
  },
  {
    label: '6-Hour Trip',
    price: '$700',
    ideal: 'Best for covering more water and working multiple species',
    description: 'The sweet spot. Enough time to run spots, adjust to the conditions, and give the fish a real chance to cooperate.',
    featured: true,
  },
  {
    label: '8-Hour Trip',
    price: '$800',
    ideal: 'Serious anglers and full-day explorers',
    description: 'A full day on the water. Best for targeting migratory tarpon, covering multiple fisheries, or just not wanting the trip to end.',
  },
];

const INCLUDED = [
  'All rods, reels, and tackle',
  'Live and artificial bait',
  'Fuel and boat fees',
  'Fish cleaning and filleting for all legally harvested fish (FWC regulations)',
  'Cold drinking water on board',
  'Florida saltwater fishing license',
  'Expert local guide',
];

const NOT_INCLUDED = [
  'Gratuity (customary, appreciated)',
  'Food and personal snacks',
];

const PRICING_FAQS: FAQItem[] = [
  {
    question: 'What is included in the charter price?',
    answer:
      'All rods, reels, tackle, live and artificial bait, fuel and boat fees, cold water on board, fishing license coverage under the charter vessel, and fish cleaning and filleting for any legal harvest. Rates cover up to 2 anglers; a third angler is an additional $100. See the full breakdown above.',
  },
  {
    question: 'How many people can fish on one charter?',
    answer:
      'Up to 3 anglers per charter. Rates above cover up to 2 anglers. A third angler is welcome for an additional $100. All trips are private — your group only.',
  },
  {
    question: 'Is a deposit required to book?',
    answer:
      'Yes. A deposit holds your date. We will confirm all details — ramp location, tide window, and exact meeting time — a few days before the trip.',
  },
  {
    question: 'What if the weather is bad?',
    answer:
      'Trips cancelled due to unsafe weather are rescheduled at no charge. We will stay in contact as your date approaches and communicate early if conditions look questionable.',
  },
  {
    question: 'Is fish cleaning included?',
    answer:
      "Fish cleaning and filleting is included on every trip. Keep as many fish as you'd like within FWC regulations — we'll take care of the rest.",
  },
  {
    question: 'Is gratuity included?',
    answer:
      'Gratuity is not included in the charter price. It is customary and appreciated for a good day on the water.',
  },
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main id="main">

        {/* Header section */}
        <section aria-labelledby="pricing-title" className="bg-ink-900 pb-16 pt-28 text-white md:pb-20 md:pt-36">
          <div className="container-prose">
            <span className="eyebrow !text-flats-300">Private Charters Only</span>
            <h1 id="pricing-title" className="mt-3 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
              Charter Pricing
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/75">
              All trips are private — your group on the boat, no strangers. Rates below cover the full charter. Call to confirm availability and pick a date.
            </p>
          </div>
        </section>

        {/* Price cards */}
        <section aria-labelledby="pricing-cards" className="bg-sand-50 py-20 md:py-28">
          <div className="container-prose">
            <div className="grid gap-6 md:grid-cols-3 md:items-start">
              {TRIPS_PRICING.map((trip) => (
                <div
                  key={trip.label}
                  className={`flex flex-col rounded-2xl border p-8 ${'featured' in trip && trip.featured
                    ? 'border-transparent bg-ink-900 shadow-xl'
                    : 'border-ink-100 bg-white shadow-card'
                  }`}
                >
                  {'featured' in trip && trip.featured && (
                    <span className="mb-4 inline-block self-start rounded-full bg-flats-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-flats-300">
                      Most Popular
                    </span>
                  )}
                  <p className={`text-sm font-semibold uppercase tracking-widest ${'featured' in trip && trip.featured ? 'text-white/50' : 'text-ink-400'}`}>
                    {trip.label}
                  </p>
                  <p className={`mt-3 font-display text-5xl font-semibold ${'featured' in trip && trip.featured ? 'text-white' : 'text-ink-900'}`}>
                    {trip.price}
                  </p>
                  <p className={`mt-1 text-sm ${'featured' in trip && trip.featured ? 'text-white/40' : 'text-ink-400'}`}>
                    per charter · up to 2 anglers
                  </p>
                  <p className={`mt-5 text-sm leading-relaxed ${'featured' in trip && trip.featured ? 'text-white/70' : 'text-ink-600'}`}>
                    {trip.description}
                  </p>
                  <p className={`mt-3 text-xs ${'featured' in trip && trip.featured ? 'text-white/50' : 'text-ink-400'}`}>
                    <span className={`font-medium ${'featured' in trip && trip.featured ? 'text-white/70' : 'text-ink-600'}`}>Best for:</span> {trip.ideal}
                  </p>
                  <CallToBook className={`mt-8 text-center ${'featured' in trip && trip.featured ? 'btn-outline-white' : 'btn-primary'}`} />
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
            <div className="mt-4 rounded-2xl bg-flats-50 p-6 text-sm text-ink-700">
              <strong className="text-ink-900">Group size:</strong> Rates above are for up to 2 anglers. A third angler is welcome for an additional $100. Maximum 3 anglers per charter.
            </div>
          </div>
        </section>

        <FAQ faqs={PRICING_FAQS} />
        <BookingCTA />
      </main>
      <Footer />

      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(PRICING_FAQS)) }}
      />
    </>
  );
}
