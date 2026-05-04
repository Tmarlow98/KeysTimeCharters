import Link from 'next/link';
import SectionHeading from './SectionHeading';

/**
 * GALLERY PLACEHOLDERS
 * ---------------------------------------------------------------
 * Replace the .src files below with real photos in /public/images/gallery/.
 * Suggested mix:
 *   1. Wide hero — boat / scenery (sunrise on Florida Bay, mangrove run)
 *   2. Action — angler on the bow with a bent rod
 *   3. Hero fish — clean grip-and-grin (tarpon, bonefish, snook, redfish)
 *   4. Detail — fly box, push pole, pelican on a stake-out marker
 *   5. Client — happy client release shot
 *   6. Scenery — empty flat at golden hour
 *
 * Aim for 1600px wide, < 250 KB each. Export .webp where possible.
 */
const PHOTOS = [
  { src: '/images/gallery/gallery-01.jpg', alt: 'Skiff on the flats at sunrise — Florida Bay', span: 'col-span-2 row-span-2' },
  { src: '/images/gallery/gallery-02.jpg', alt: 'Angler on the bow casting to tailing fish', span: '' },
  { src: '/images/gallery/gallery-03.jpg', alt: 'Tarpon being released boatside', span: '' },
  { src: '/images/gallery/gallery-04.jpg', alt: 'Mangrove shoreline in Everglades National Park', span: '' },
  { src: '/images/gallery/gallery-05.jpg', alt: 'Bonefish on the flats', span: '' },
];

export default function GalleryPreview() {
  return (
    <section
      aria-labelledby="gallery-heading"
      className="bg-sand-50 py-20 md:py-28"
    >
      <div className="container-prose">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Gallery"
            title="Days on the water."
            description="A small selection of recent trips. The full gallery has more shots from Flamingo, Florida Bay, and the Keys."
          />
          <Link href="/gallery" className="link-quiet text-sm font-semibold">
            View full gallery →
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {PHOTOS.map((p, i) => (
            <figure
              key={p.src}
              className={`relative overflow-hidden rounded-2xl bg-ink-100 ${p.span} ${
                i === 0 ? 'min-h-[260px] md:min-h-[420px]' : 'aspect-[4/5]'
              }`}
            >
              <div
                role="img"
                aria-label={p.alt}
                className="absolute inset-0 bg-cover bg-center transition duration-500 hover:scale-[1.03]"
                style={{
                  backgroundImage: `url("${p.src}"), linear-gradient(135deg,#1f4361,#5da9a1)`,
                }}
              />
              <figcaption className="sr-only">{p.alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
