import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingCTA from '@/components/BookingCTA';
import SectionHeading from '@/components/SectionHeading';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Photo Gallery | Keys Time Charters',
  description:
    'Photos from recent fishing charters in the Florida Keys and Flamingo — tarpon, bonefish, redfish, snook, and the backcountry waters we fish.',
  alternates: { canonical: `${site.url}/gallery` },
  openGraph: {
    title: 'Photo Gallery | Keys Time Charters',
    description: 'Tarpon, bonefish, redfish, and snook from recent Florida Keys and Flamingo charters.',
    url: `${site.url}/gallery`,
    images: [{ url: '/images/hero-flats.jpg', width: 1600, alt: 'Florida Keys fishing charter gallery' }],
  },
  keywords: ['florida keys fishing photos', 'flamingo fishing charter gallery', 'tarpon fishing pictures florida', 'everglades fishing photos'],
};

const PHOTOS = [
  { src: '/images/gallery/gallery-01.jpg', alt: 'Sunset tarpon fishing in Flamingo — Everglades National Park', span: 'col-span-2 row-span-2' },
  { src: '/images/gallery/gallery-17.jpg', alt: 'Angler with a big snook at golden hour — glassy flat water' },
  { src: '/images/gallery/gallery-12.jpg', alt: 'Angler with a redfish on fly gear — dramatic backlit sky' },
  { src: '/images/gallery/gallery-08.jpg', alt: 'Angler with a big redfish at sunset — Florida backcountry' },
  { src: '/images/gallery/gallery-02.jpg', alt: 'Large tarpon being released boatside on a Maverick flats skiff' },
  { src: '/images/gallery/gallery-03.jpg', alt: 'Top-down view of a tarpon release — Florida backcountry' },
  { src: '/images/gallery/gallery-06.jpg', alt: 'Angler with a large snook — mangrove shoreline' },
  { src: '/images/gallery/gallery-07.jpg', alt: 'Angler with a snook — Skiff Life' },
  { src: '/images/gallery/gallery-09.jpg', alt: 'Young angler with a redfish — Everglades backcountry' },
  { src: '/images/gallery/gallery-10.jpg', alt: 'Close-up of a redfish tail — the signature black spot' },
  { src: '/images/gallery/gallery-11.jpg', alt: 'Angler with a redfish in a backcountry creek' },
  { src: '/images/gallery/gallery-13.jpg', alt: 'Angler with a big redfish — Everglades National Park' },
  { src: '/images/gallery/gallery-14.jpg', alt: 'Angler with a snook on open water' },
  { src: '/images/gallery/gallery-04.jpg', alt: 'Anglers with a large redfish — Florida Bay backcountry' },
  { src: '/images/gallery/gallery-05.jpg', alt: 'Bonefish caught on the Florida Keys flats' },
  { src: '/images/gallery/gallery-15.jpg', alt: 'Angler with a large black drum — Florida Keys' },
  { src: '/images/gallery/gallery-16.jpg', alt: 'Angler with a snook — Maverick flats skiff' },
  { src: '/images/gallery/gallery-18.jpg', alt: 'Angler with a snook on a overcast day' },
  { src: '/images/gallery/gallery-19.jpg', alt: 'Maverick flats skiff on the trailer — ready for the water' },
  { src: '/images/trips/flamingo.jpg', alt: 'Tarpon fishing at golden hour — Flamingo, Everglades National Park' },
  { src: '/images/trips/keys-flats.jpg', alt: 'Angler holding a bonefish on the Florida Keys flats' },
  { src: '/images/trips/backcountry.jpg', alt: 'Redfish caught in the Florida Bay backcountry' },
];

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main id="main">

        <section aria-labelledby="gallery-title" className="bg-sand-50 py-20 pt-32 md:py-28 md:pt-40">
          <div className="container-prose">
            <SectionHeading
              eyebrow="Gallery"
              title="Days on the water."
              description="A selection of recent trips from Flamingo, Florida Bay, and the Keys. Every charter is private — this is what your day could look like."
            />

            <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {PHOTOS.map((photo, i) => (
                <figure
                  key={photo.src}
                  className={`relative overflow-hidden rounded-2xl bg-ink-100 ${photo.span ?? ''} ${
                    i === 0 ? 'min-h-[260px] md:min-h-[480px]' : 'aspect-[4/5]'
                  }`}
                >
                  <div
                    role="img"
                    aria-label={photo.alt}
                    className="absolute inset-0 bg-cover bg-center transition duration-500 hover:scale-[1.03]"
                    style={{ backgroundImage: `url("${photo.src}"), linear-gradient(135deg,#1f4361,#5da9a1)` }}
                  />
                  <figcaption className="sr-only">{photo.alt}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
