import { MetadataRoute } from 'next'

export const dynamic = 'force-static';


export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://acecapitalenterprise.com'

  const staticPages = [
    '',
    '/about',
    '/contact',
    '/careers',
    '/prop-trading-automated',
    '/mutual-funds-investments',
    '/blogs',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const blogSlugs = [
    '5-easy-way-to-master-candlestick-patterns',
    'how-to-become-profitable-trader',
    '5-best-railway-stocks-in-india-2025',
    'master-the-market-with-smart-and-simple-trading-tactics',
  ]

  const blogPages = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blogs/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...blogPages]
}
