import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from './SectionHeading';

/**
 * Homepage gallery preview — 5 photos in a 4-column masonry-ish grid.
 * The full /gallery page renders the rest. All images go through next/image,
 * which auto-converts to AVIF/WebP, picks a responsive size per breakpoint,
 * and lazy-loads since this section is below the fold.
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
              <Image
                src={p.src}
                alt={p.alt}
                fill
                // The first image is 2x wide on md+, hence the wider sizes hint there.
                sizes={
                  i === 0
                    ? '(min-width: 768px) 50vw, 100vw'
                    : '(min-width: 768px) 25vw, 50vw'
                }
                className="object-cover object-center transition duration-500 hover:scale-[1.03]"
              />
              <figcaption className="sr-only">{p.alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
