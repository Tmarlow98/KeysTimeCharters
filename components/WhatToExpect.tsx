import SectionHeading from './SectionHeading';

const BLOCKS = [
  {
    eyebrow: 'On the boat',
    title: 'A real guided day, start to finish',
    body:
      'We meet at the ramp, talk through the plan, and run to the first spot built around the day’s tide and wind. Expect a thoughtful, paced trip — drifts, poled flats, and creek mouths — not a frantic run to a single GPS pin.',
    items: [
      'Half-day, three-quarter, and full-day options',
      'All quality tackle and bait provided',
      'Fly and spin gear available',
      'Coaching for first-timers, no ego required',
    ],
  },
  {
    eyebrow: 'Where we fish',
    title: 'Flamingo, Florida Bay & the Keys backcountry',
    body:
      'We move with the season. Spring and early summer often means tarpon migrations through the Keys. Cooler months push us into Florida Bay basins for redfish, snook, and trout. The plan flexes to match where fish are eating.',
    items: [
      'Everglades National Park (Flamingo)',
      'Florida Bay basins, banks & oyster bars',
      'Keys flats, channels & ocean-side edges',
    ],
  },
  {
    eyebrow: 'What we target',
    title: 'Tarpon, bonefish, snook & redfish',
    body:
      'Every trip is wrapped around quality fish, not numbers. If you’re after a specific species — a permit on the flats or your first tarpon on fly — tell us when you book and we’ll build the day around it.',
    items: [
      'Tarpon — migratory & resident',
      'Bonefish on hard sand and turtle grass',
      'Snook in mangroves & creek mouths',
      'Redfish on the bay banks',
    ],
  },
  {
    eyebrow: 'Who it’s for',
    title: 'First-timers, fly anglers & serious fishermen',
    body:
      'You don’t need to be an expert. We coach beginners through their first cast on the bow, and run technical days for experienced anglers chasing specific shots. Tell us where you’re at and the trip flexes to match.',
    items: [
      'Beginners learning the bow',
      'Fly anglers chasing sight shots',
      'Experienced anglers booking specific species',
    ],
  },
];

export default function WhatToExpect() {
  return (
    <section
      aria-labelledby="expect-heading"
      className="bg-white py-20 md:py-28"
    >
      <div className="container-prose">
        <SectionHeading
          eyebrow="What to expect"
          title="A clear, honest picture of your day on the water."
          description="We’d rather set the right expectations than oversell a trip. Here’s what a charter with us actually looks like."
          align="center"
        />

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
          {BLOCKS.map((block) => (
            <article key={block.title} className="border-t border-ink-100 pt-8">
              <span className="eyebrow">{block.eyebrow}</span>
              <h3 className="mt-3 font-display text-2xl font-semibold text-ink-900 md:text-[1.6rem]">
                {block.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-700">{block.body}</p>
              <ul className="mt-5 space-y-2">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink-800">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="mt-0.5 h-4 w-4 shrink-0 text-flats-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 12l5 5L20 6" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
