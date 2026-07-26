import type { MetadataRoute } from "next";

const BASE_URL = "https://www.mussawarhayat.site";

const BLOG_POSTS: { slug: string; date: string }[] = [
  { slug: "nextjs-16-saas-tutorial-prisma-typescript-2026", date: "2026-07-26" },
  { slug: "ai-agents-blockchain-web3-2026", date: "2026-03-10" },
  { slug: "account-abstraction-smart-wallets-guide", date: "2026-03-05" },
  { slug: "real-world-asset-tokenization-rwa-guide", date: "2026-02-28" },
  { slug: "modular-blockchains-l2-developer-guide", date: "2026-02-20" },
  { slug: "deploying-multi-site-nextjs-vps-nginx", date: "2026-05-15" },
  { slug: "building-bitcoin-ordinals-marketplace", date: "2026-05-10" },
  { slug: "metamask-vs-walletconnect-dapp", date: "2026-05-05" },
  { slug: "spf-dkim-dmarc-multi-domain-vps", date: "2026-04-28" },
  { slug: "gdpr-compliant-web-apps-checklist", date: "2026-04-20" },
  { slug: "multi-chain-dex-interface-performance", date: "2026-04-15" },
];

function url(path: string) {
  return `${BASE_URL}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: url("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: { en: url("/") },
      },
    },
    {
      url: url("/services"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: url("/blog"),
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: url("/contact"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: url(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
