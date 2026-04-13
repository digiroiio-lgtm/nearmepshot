import { MetadataRoute } from 'next';
import { cities, programmaticPrefixes } from '@/data/cities';

const BASE_URL = 'https://pshotnearme.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
  ];

  const cityRoutes: MetadataRoute.Sitemap = cities.map(city => ({
    url: `${BASE_URL}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const programmaticRoutes: MetadataRoute.Sitemap = cities.flatMap(city =>
    programmaticPrefixes.map(prefix => ({
      url: `${BASE_URL}/${prefix}-${city.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  );

  return [...staticRoutes, ...cityRoutes, ...programmaticRoutes];
}
