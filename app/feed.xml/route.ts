import { getAllPosts } from "../blog/lib/posts";

const SITE = "https://mussawarhayat.site";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = await getAllPosts();
  const items = posts
    .map((post) => {
      const link = `${SITE}/blog/${post.slug}`;
      const pubDate = new Date(`${post.date}T00:00:00.000Z`).toUTCString();
      return [
        "    <item>",
        `      <title>${escapeXml(post.title)}</title>`,
        `      <link>${link}</link>`,
        `      <guid isPermaLink="true">${link}</guid>`,
        `      <pubDate>${pubDate}</pubDate>`,
        `      <category>${escapeXml(post.category)}</category>`,
        `      <description>${escapeXml(post.excerpt)}</description>`,
        "    </item>",
      ].join("\n");
    })
    .join("\n");

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "  <channel>",
    "    <title>Mussawar Hayat — Next.js, Web3 &amp; Full-Stack Blog</title>",
    `<link>${SITE}/blog</link>`.replace("<link>", "    <link>"),
    "    <description>Production guides on Next.js 16, React, TypeScript, Web3, security, and DevOps by Mussawar Hayat.</description>",
    "    <language>en</language>",
    `<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>`.replace("<last", "    <last"),
    `<atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml"/>`.replace("<atom", "    <atom"),
    items,
    "  </channel>",
    "</rss>",
    "",
  ].join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
