import { MetadataRoute } from 'next';
import { serviceAreasData } from '@/lib/service-areas-data';

const baseUrl = 'https://protektsurface.com.au';

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/get-quote',
    '/quote-estimator',
    '/tint-selector',
    '/blog',
    '/author/david-trieu',
    // Services
    '/residential-window-tinting',
    '/automotive-window-tinting',
    '/commercial-window-tinting',
    // Film Types
    '/ceramic-window-tint',
    '/privacy-window-film',
    '/uv-blocking-film',
    '/window-protection-film',
    '/frosted-decorative-window-film',
    '/marble-protection-film',
  ];

  const staticRoutes: MetadataRoute.Sitemap = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.includes('window-tinting') ? 0.9 : 0.8,
  }));

  // Blog posts
  const blogSlugs = [
    'benefits-of-ceramic-window-tinting-sydney-homes',
    'car-window-tinting-laws-nsw-guide',
    'uv-protection-window-film-health-benefits',
    'commercial-window-tinting-energy-savings',
    'choosing-right-window-tint-shade-guide',
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Service areas
  const serviceAreaRoutes: MetadataRoute.Sitemap = serviceAreasData.map((area) => ({
    url: `${baseUrl}/service-areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes, ...serviceAreaRoutes];
}
