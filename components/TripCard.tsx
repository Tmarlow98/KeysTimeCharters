import Link from 'next/link';

export type Trip = {
  href: string;
  title: string;
  area: string;
  blurb: string;
  species: string[];
  /**
   * Path to the trip card image. Replace the placeholder files in
   * /public/images/trips/* with real photography (skiff/scenery + a hero fish).
   */
  image: string;
};

type Props = { trip: Trip };

export default function TripCard({ trip }: Props) {
  return (
    <Link
      href={trip.href}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:-translate-y-0.5"
    >
      {/* IMAGE: replace placeholder file at trip.image with real trip photo */}
      <div
        className="relative h-56 w-full bg-cover bg-center"
        style={{
          backgroundImage: `url("${trip.image}"), linear-gradient(135deg,#1f4361,#5da9a1)`,
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-ink-900/10 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-ink-800 shadow-sm">
          {trip.area}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-ink-900">{trip.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-700">{trip.blurb}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {trip.species.map((s) => (
            <li
              key={s}
              className="rounded-full bg-flats-50 px-3 py-1 text-xs font-medium text-flats-700"
            >
              {s}
            </li>
          ))}
        </ul>

        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-900">
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
