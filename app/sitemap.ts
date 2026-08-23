import type { MetadataRoute } from "next";
import { getAllProjectSlugs } from "./lib/projects";
import { getAllPosts } from "./blog/lib/posts";

const BASE_URL = "https://mussawarhayat.site";

function url(path: string) {
  return `${BASE_URL}${path}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: url("/"), lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: url("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: url("/services"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: url("/portfolio"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: url("/blog"), lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: url("/contact"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/terms"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: url("/privacy"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const posts = await getAllPosts();
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: url(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const portfolioPages: MetadataRoute.Sitemap = getAllProjectSlugs().map((slug) => ({
    url: url(`/portfolio/${slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...staticPages, ...blogPages, ...portfolioPages];
}
