import SectionHeading from './SectionHeading';

const REVIEWS = [
  {
    quote:
      "Hit the inshore slam — snook, redfish, and trout — in just a couple of hours. One of the redfish was the biggest I've ever caught. Tyler knows this water inside and out. I grew up fishing Flamingo and haven't been back in over a decade — safe to say I'll be back much sooner, and I'll be calling Tyler.",
    author: 'Josh P.',
    location: '',
    trip: 'Half Day · Flamingo Inshore',
  },
  {
    quote:
      "Limited out on mangrove snapper with a throwback snook at the end as an exclamation point. Tyler was attentive — offering help, poling, sighting, and baiting when needed. His Maverick runs 30 mph in a foot of water, which was a thrill in itself. Highly recommend.",
    author: 'Bernie R.',
    location: '',
    trip: 'Snapper Day · Flamingo',
  },
  {
    quote:
      "We were on a catch-and-cook mission with my 13-year-old and Captain Tyler did not disappoint — landed a beautiful sheephead and red drum and brought it back to Flamingo Lodge to be cooked. Multispecies outing, great service all around.",
    author: 'Anthony C.',
    location: '',
    trip: 'Half Day · Catch & Cook',
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
                {r.location && <span className="text-ink-600"> &middot; {r.location}</span>}
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
