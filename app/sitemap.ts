import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { fishingReports } from '@/lib/fishing-reports';

/**
 * Sitemap — homepage is live now; trip + utility pages are listed
 * so they're discoverable as soon as you add their /app routes.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    '',
    '/flamingo-fishing-charter',
    '/florida-keys-flats-fishing',
    '/backcountry-fishing-everglades',
    '/meet-your-captain',
    '/pricing',
    '/gallery',
    '/contact',
    '/best-time-to-fish-flamingo',
    '/flamingo-tarpon-fishing',
    '/everglades-snook-fishing',
  ];
  return [
    ...routes.map((path) => {
      const isTripPage =
        path === '/flamingo-fishing-charter' ||
        path === '/florida-keys-flats-fishing' ||
        path === '/backcountry-fishing-everglades';
      return {
        url: `${site.url}${path}`,
        lastModified: now,
        changeFrequency: (path === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
        priority: path === '' ? 1.0 : isTripPage ? 0.8 : 0.7,
      };
    }),
    {
      url: `${site.url}/fishing-reports`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    ...fishingReports.map((r) => ({
      url: `${site.url}/fishing-reports/${r.slug}`,
      lastModified: new Date(r.datePublished),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
