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
    '/tarpon-fishing-florida-keys',
    '/pricing',
    '/gallery',
    '/contact',
  ];
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1.0 : 0.7,
  }));
}
