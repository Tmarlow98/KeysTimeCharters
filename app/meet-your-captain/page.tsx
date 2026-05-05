import type { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingCTA from '@/components/BookingCTA';
import SectionHeading from '@/components/SectionHeading';
import CallToBook from '@/components/CallToBook';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Meet Captain Tyler Marlow | Keys Time Charters — Flamingo & Florida Keys Guide',
  description:
    'Captain Tyler Marlow is a USCG-licensed fishing guide with a Commercial Use Authorization permit for Everglades National Park. Light tackle, fly, and bait fishing out of Flamingo and the Florida Keys.',
  alternates: { canonical: `${site.url}/meet-your-captain` },
  openGraph: {
    title: 'Meet Captain Tyler Marlow | Keys Time Charters',
    description:
      'USCG-licensed guide and CUA permit holder for Everglades National Park. Flamingo and Florida Keys flats and backcountry fishing.',
    url: `${site.url}/meet-your-captain`,
    images: [{ url: '/images/og-cover.jpg', width: 1600, alt: 'Captain Tyler Marlow — Florida Keys and Flamingo fishing guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-cover.jpg'],
  },
  keywords: [
    'Captain Tyler Marlow',
    'Flamingo fishing guide',
    'Florida Keys fishing guide',
    'Everglades National Park fishing guide',
    'USCG licensed captain Florida Keys',
    'CUA permit Everglades National Park',
    'Keys Time Charters',
    'light tackle fishing guide Florida',
    'fly fishing guide Flamingo Florida',
  ],
};

const captainSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tyler Marlow',
  honorificPrefix: 'Captain',
  jobTitle: 'Fishing Guide & Charter Captain',
  worksFor: {
    '@type': 'LocalBusiness',
    name: site.name,
    url: site.url,
  },
  url: `${site.url}/meet-your-captain`,
  telephone: site.phone,
  email: site.email,
  knowsAbout: [
    'Light tackle fishing',
    'Fly fishing',
    'Paddle tail lures',
    'Tarpon fishing',
    'Redfish',
    'Snook',
    'Trout',
    'Everglades backcountry fishing',
    'Florida Keys flats fishing',
    'Flamingo fishing',
  ],
};

export default function MeetYourCaptainPage() {
  return (
    <>
      <Script
        id="captain-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(captainSchema) }}
      />
      <Header />
      <main id="main">

        {/* Hero — LCP element, served via next/image with priority */}
        <section
          aria-labelledby="captain-hero-title"
          className="relative isolate flex min-h-[60vh] items-end overflow-hidden bg-ink-900"
        >
          <Image
            src="/images/captain-hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 -z-10 object-cover object-center"
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-900/95 via-ink-900/70 to-ink-900/40" />
          <div className="container-prose pb-14 pt-32 text-white">
            <span className="eyebrow !text-flats-200">Keys Time Charters</span>
            <h1 id="captain-hero-title" className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              Meet <span className="text-flats-200">Captain Tyler Marlow</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/85">
              USCG-licensed guide and CUA permit holder for Everglades National Park — fishing Flamingo and the Florida Keys with full effort, every single day.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/70">
              {[
                'USCG Captain\'s License',
                'CUA Permit — Everglades National Park',
                'Flamingo & Florida Keys',
              ].map((cred) => (
                <span key={cred} className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-flats-400" aria-hidden="true" />
                  {cred}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <CallToBook className="btn-primary bg-flats-500 hover:bg-flats-600" />
              <a href={site.emailHref} className="btn-secondary">Email Us</a>
            </div>
          </div>
        </section>

        {/* About */}
        <section aria-labelledby="captain-about" className="bg-sand-50 py-20 md:py-28">
          <div className="container-prose">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <SectionHeading
                  eyebrow="About Tyler"
                  title="A Fort Lauderdale kid who found his place on the water."
                  id="captain-about"
                />
                <div className="mt-6 space-y-4 text-ink-700 leading-relaxed">
                  <p>
                    Captain Tyler Marlow grew up in Fort Lauderdale surrounded by South Florida's fishing culture. The pull toward guiding came naturally — through friendships with working guides who fished these same waters, Tyler learned the craft from the inside out before ever running his own charters.
                  </p>
                  <p>
                    Now in his third season guiding out of Flamingo, Tyler runs trips through the Everglades backcountry and the Florida Keys flats — two of the most productive and technical fisheries in the country. He'll tell you honestly where the fish are, what's working, and exactly how hard he's going to grind to put you on them.
                  </p>
                  <p>
                    Whether you're throwing paddle tails for redfish in the creeks, presenting a fly to a rolling tarpon, or bait fishing the passes, Tyler brings the same thing every trip: a full day's effort, no excuses, and a genuine love for these waters.
                  </p>
                </div>
              </div>

              <div>
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] w-full">
                  <Image
                    src="/images/captain-tyler.jpg"
                    alt="Captain Tyler Marlow on the poling platform of his skiff — Florida Bay, Flamingo"
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    priority
                  />
                </div>
                <SectionHeading eyebrow="At a Glance" title="What you should know." />
                <div className="mt-6 space-y-3">
                  {[
                    { label: 'Home Waters', value: 'Flamingo & the Florida Keys' },
                    { label: 'Based Out Of', value: 'Fort Lauderdale, FL' },
                    { label: 'Seasons Guiding', value: 'Third season out of Flamingo' },
                    { label: 'Techniques', value: 'Light tackle · Paddle tails · Fly fishing · Bait fishing' },
                    { label: 'Target Species', value: 'Tarpon · Redfish · Snook · Trout' },
                  ].map((row) => (
                    <div key={row.label} className="flex gap-4 rounded-2xl border border-ink-100 bg-white px-5 py-4">
                      <p className="w-36 shrink-0 text-sm font-semibold text-ink-500">{row.label}</p>
                      <p className="text-sm text-ink-800">{row.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section aria-labelledby="captain-credentials" className="bg-white py-20 md:py-28">
          <div className="container-prose">
            <SectionHeading
              eyebrow="Credentials"
              title="Licensed, permitted, and prepared."
              align="center"
              id="captain-credentials"
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-ink-100 bg-sand-50 p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-flats-600">USCG Captain's License</p>
                <p className="mt-3 font-display text-xl font-semibold text-ink-900">United States Coast Guard Licensed</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">
                  Every charter with Keys Time Charters is operated by a fully USCG-licensed captain. That means you're on the water with someone who has met federal safety requirements and is legally authorized to carry paying passengers — not a friend with a boat and a cooler.
                </p>
              </div>
              <div className="rounded-2xl border border-ink-100 bg-sand-50 p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-flats-600">CUA Permit — Everglades National Park</p>
                <p className="mt-3 font-display text-xl font-semibold text-ink-900">Commercial Use Authorization</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">
                  The National Park Service issues a limited number of Commercial Use Authorization permits allowing guides to operate professionally inside Everglades National Park. Captain Tyler holds one — giving you legal access to the full Flamingo backcountry, Florida Bay, and the remote creek systems that other guides simply cannot take you into.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Techniques */}
        <section aria-labelledby="captain-techniques" className="bg-sand-50 py-20 md:py-28">
          <div className="container-prose">
            <SectionHeading
              eyebrow="Techniques"
              title="What we fish and how we fish it."
              align="center"
              id="captain-techniques"
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  technique: 'Light Tackle',
                  body: 'Spinning and baitcasting setups for all experience levels. The backbone of most Flamingo and Keys trips — versatile, effective, and accessible whether you\'ve fished your whole life or you\'re just getting started.',
                },
                {
                  technique: 'Paddle Tails',
                  body: 'Soft-plastic paddle tail lures are a go-to in the Everglades backcountry. Deadly for redfish and snook working the mangrove edges, oyster bars, and tidal creek mouths.',
                },
                {
                  technique: 'Fly Fishing',
                  body: 'Sight-casting to bonefish, tarpon, and redfish on the flats. Tyler can position the skiff for quality shots whether you\'re a seasoned fly angler or picking up a fly rod for the first time.',
                },
                {
                  technique: 'Bait Fishing',
                  body: 'Live and cut bait when conditions call for it. Sometimes the most effective presentation is the most natural one — Tyler fishes what works, not what looks good at the dock.',
                },
              ].map((item) => (
                <div key={item.technique} className="rounded-2xl border border-ink-100 bg-white p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-flats-600">{item.technique}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section aria-labelledby="captain-philosophy" className="bg-white py-20 md:py-28">
          <div className="container-prose">
            <div className="mx-auto max-w-2xl text-center">
              <SectionHeading
                eyebrow="The Promise"
                title="No matter how the day goes, we work hard."
                align="center"
                id="captain-philosophy"
              />
              <p className="mt-6 text-ink-700 leading-relaxed">
                Fishing is fishing — tides shift, fish move, weather changes. Tyler won't promise a fish on the wall because no honest guide can. What he will promise is this: you will never wonder if your guide gave you his best shot. Every drift, every presentation, every decision on the water is made with your day in mind. First-timers, experienced anglers, families — everyone gets the same full effort.
              </p>
              <blockquote className="mt-10 rounded-2xl border border-flats-200 bg-sand-50 px-8 py-7">
                <p className="font-display text-xl font-semibold text-ink-900 leading-snug">
                  "No matter how the day goes, we will work hard and put in the effort."
                </p>
                <footer className="mt-3 text-sm text-ink-500">— Captain Tyler Marlow, Keys Time Charters</footer>
              </blockquote>
            </div>
          </div>
        </section>

        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
