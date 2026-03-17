import type { MetadataRoute } from "next";

// ─── Config ───────────────────────────────────────────────────────────────────

const BASE_URL = "https://www.mussawarhayat.site";

// ─── Blog Posts ───────────────────────────────────────────────────────────────
// Keep this list in sync with your actual blog content.
// Dates must be accurate — Google uses lastModified to decide re-crawl frequency.

const BLOG_POSTS: { slug: string; date: string }[] = [
  { slug: "ai-agents-blockchain-web3-2026",         date: "2026-03-10" },
  { slug: "account-abstraction-smart-wallets-guide", date: "2026-03-05" },
  { slug: "real-world-asset-tokenization-rwa-guide", date: "2026-02-28" },
  { slug: "modular-blockchains-l2-developer-guide",  date: "2026-02-20" },
  // ❌ Removed: blog posts with 2024 dates that belong to a different domain/topic
  // ("how-to-improve-seo-rankings-2024", "ai-business-automation-2025")
  // Add them back only if they are real pages on this site.
];

// ─── Helper ───────────────────────────────────────────────────────────────────

function url(path: string) {
  return `${BASE_URL}${path}`;
}

// ─── Sitemap ──────────────────────────────────────────────────────────────────

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // ── Static pages ────────────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url:             url("/"),
      lastModified:    now,
      changeFrequency: "weekly",
      priority:        1.0,
      // hreflang for English — add more languages here if you ever localise
      alternates: {
        languages: { en: url("/") },
      },
    },
    {
      url:             url("/services"),
      lastModified:    now,
      changeFrequency: "weekly",
      priority:        0.9,
    },
    {
      url:             url("/portfolio"),
      lastModified:    now,
      changeFrequency: "monthly",
      priority:        0.8,
    },
    {
      url:             url("/about"),
      lastModified:    now,
      changeFrequency: "monthly",
      priority:        0.8,
    },
    {
      url:             url("/blog"),
      lastModified:    now,
      changeFrequency: "daily",   // index page updates whenever a new post is published
      priority:        0.8,
    },
    {
      url:             url("/contact"),
      lastModified:    now,
      changeFrequency: "yearly",
      priority:        0.7,
    },
  ];

  // ── Blog posts ───────────────────────────────────────────────────────────────
  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url:             url(`/blog/${post.slug}`),
    lastModified:    new Date(post.date),
    changeFrequency: "monthly" as const,
    priority:        0.6,
  }));

  return [...staticPages, ...blogPages];
}