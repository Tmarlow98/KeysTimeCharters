import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

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
  ];
  const reportRoutes = [
    '/fishing-reports',
    '/fishing-reports/flamingo-snook-fishing-report-may-17-2026',
  ];
  return [
    ...routes.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: now,
      changeFrequency: (path === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
      priority: path === '' ? 1.0 : 0.7,
    })),
    {
      url: `${site.url}${reportRoutes[0]}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${site.url}${reportRoutes[1]}`,
      lastModified: new Date('2026-05-17'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];
}
