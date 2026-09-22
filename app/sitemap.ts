import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';
import { siteUrl } from '@/lib/shared';

export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const docs: MetadataRoute.Sitemap = source.getPages().map((page) => {
    const depth = page.slugs.length;
    return {
      url: new URL(page.url, siteUrl).toString(),
      lastModified: page.data.lastModified ?? now,
      changeFrequency: depth <= 1 ? 'weekly' : 'monthly',
      priority: depth === 0 ? 0.9 : depth === 1 ? 0.8 : depth === 2 ? 0.6 : 0.4,
    };
  });

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...docs,
  ];
}
