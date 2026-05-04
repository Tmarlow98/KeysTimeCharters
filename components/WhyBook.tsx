import SectionHeading from './SectionHeading';

const REASONS = [
  {
    title: 'Local knowledge of tides, wind, and water clarity',
    body:
      "Conditions in the Keys and Florida Bay change by the hour. We pick the right basin, bank, or creek mouth for the wind and tide on your day — not yesterday's pattern.",
  },
  {
    title: 'Real time on Flamingo and Florida Bay',
    body:
      'Most of our season is spent inside Everglades National Park and the surrounding bays. That means fewer guesses, more shots, and a route built around fish — not waypoints from a forum.',
  },
  {
    title: 'Sight fishing and technical flats fishing',
    body:
      'Poled skiff, polarized eyes, quiet approach. Whether you fly fish or throw spin, we set up for clean shots at fish you can actually see.',
  },
  {
    title: 'Professional, reliable, clean setup',
    body:
      'Modern flats skiff, well-kept gear, on-time launches, and a trip that runs the way a guided day should — no rough edges.',
  },
];

export default function WhyBook() {
  return (
    <section
      aria-labelledby="why-heading"
      className="relative overflow-hidden bg-ink-900 py-20 text-white md:py-28"
    >
      {/* Subtle background texture using a gradient — keeps payload tiny */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(60% 60% at 80% 0%, rgba(93,169,161,0.45), transparent 60%), radial-gradient(40% 50% at 0% 100%, rgba(93,169,161,0.25), transparent 60%)',
        }}
      />

      <div className="container-prose relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why book with us"
              title={
                <span className="text-white">
                  Built for anglers who want a real day on the water.
                </span>
              }
              description={
                <span className="text-white/80">
                  Keys Time Charters is a small operation on purpose. You get the same
                  guide every trip, the same boat, and a plan made for the conditions
                  in front of us — not a script.
                </span>
              }
            />
          </div>

          <ul className="grid gap-6 sm:grid-cols-2 lg:col-span-7 lg:gap-8">
            {REASONS.map((r, i) => (
              <li
                key={r.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <span className="font-display text-3xl text-flats-200">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-white">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{r.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
