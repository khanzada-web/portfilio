import type { MetadataRoute } from "next";
import { getAllProjectSlugs } from "./lib/projects";
import { getAllPosts } from "./blog/lib/posts";

const BASE_URL = "https://mussawarhayat.site";

function url(path: string) {
  return `${BASE_URL}${path}`;
}

/**
 * Only real dates go in <lastmod>. Search engines learn to ignore a sitemap whose lastmod
 * changes on every build, so pages without a tracked edit date simply omit it.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();
  const newestPost = posts
    .map((post) => new Date(post.date))
    .filter((date) => !Number.isNaN(date.getTime()))
    .sort((a, b) => b.getTime() - a.getTime())[0];

  const staticPages: MetadataRoute.Sitemap = [
    { url: url("/"), changeFrequency: "weekly", priority: 1.0 },
    { url: url("/about"), changeFrequency: "monthly", priority: 0.9 },
    { url: url("/services"), changeFrequency: "monthly", priority: 0.9 },
    { url: url("/portfolio"), changeFrequency: "monthly", priority: 0.9 },
    { url: url("/blog"), lastModified: newestPost, changeFrequency: "weekly", priority: 0.8 },
    { url: url("/contact"), changeFrequency: "yearly", priority: 0.7 },
    { url: url("/terms"), lastModified: new Date("2026-09-05"), changeFrequency: "yearly", priority: 0.3 },
    { url: url("/privacy"), lastModified: new Date("2026-09-05"), changeFrequency: "yearly", priority: 0.3 },
  ];

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: url(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const portfolioPages: MetadataRoute.Sitemap = getAllProjectSlugs().map((slug) => ({
    url: url(`/portfolio/${slug}`),
    changeFrequency: "yearly" as const,
    priority: 0.65,
  }));

  return [...staticPages, ...blogPages, ...portfolioPages];
}
