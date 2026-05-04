import SectionHeading from './SectionHeading';

/**
 * Placeholder testimonials.
 * TODO (CLIENT): replace with real client quotes + first names + city/state.
 * Keep them specific — the more concrete the detail, the more it converts.
 */
const REVIEWS = [
  {
    quote:
      "Easily the most dialed-in guide I’ve fished with in the Keys. Read the wind, made the right call on the bay, and put me on tailing reds inside the first hour. Already booking the next trip.",
    author: 'Mark D.',
    location: 'Atlanta, GA',
    trip: 'Backcountry — Florida Bay',
  },
  {
    quote:
      "I’d never stood on the bow of a flats skiff. By the end of the day I’d hooked my first tarpon. Patient coaching, no pressure, and just a really good day on the water.",
    author: 'Lauren K.',
    location: 'Chicago, IL',
    trip: 'Flamingo — Tarpon',
  },
  {
    quote:
      "Booked a half day expecting a quick trip and got a full guided experience. Snook, redfish, and the kind of scenery you don’t get anywhere else. Boat was clean, gear was right, fish were there.",
    author: 'Brian T.',
    location: 'Charlotte, NC',
    trip: 'Backcountry — Snook',
  },
];

export default function Testimonials() {
  return (
    <section
      aria-labelledby="reviews-heading"
      className="bg-flats-50 py-20 md:py-28"
    >
      <div className="container-prose">
        <SectionHeading
          eyebrow="On the water"
          title="What anglers say after a day with us."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          {REVIEWS.map((r) => (
            <figure
              key={r.author}
              className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-card"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-7 w-7 text-flats-300"
                fill="currentColor"
              >
                <path d="M7 7h4v4H7c0 2 1 3 3 3v3c-4 0-6-2-6-6V7zm9 0h4v4h-4c0 2 1 3 3 3v3c-4 0-6-2-6-6V7z" />
              </svg>
              <blockquote className="mt-4 text-[15px] leading-relaxed text-ink-800">
                {r.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-ink-100 pt-4 text-sm">
                <span className="font-semibold text-ink-900">{r.author}</span>
                <span className="text-ink-600"> · {r.location}</span>
                <div className="mt-1 text-xs uppercase tracking-widest text-flats-700">
                  {r.trip}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
