import { MetadataRoute } from 'next'

// Blog posts data - this should match your blog posts
const blogPosts = [
  { slug: 'ai-agents-blockchain-web3-2026', date: '2026-03-10' },
  { slug: 'account-abstraction-smart-wallets-guide', date: '2026-03-05' },
  { slug: 'real-world-asset-tokenization-rwa-guide', date: '2026-02-28' },
  { slug: 'modular-blockchains-l2-developer-guide', date: '2026-02-20' },
  { slug: 'how-to-improve-seo-rankings-2024', date: '2024-12-01' },
  { slug: 'ai-business-automation-2025', date: '2024-12-15' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mussawarhayat.site'
  
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
      alternates: {
        languages: {
          en: baseUrl,
        },
      },
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
  ]

  const blogPages = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...blogPages]
}
