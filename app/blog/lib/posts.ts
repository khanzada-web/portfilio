import fs from 'fs'
import path from 'path'

export interface BlogPost {
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  category: string
  author: string
  keywords: string[]
  slug: string
}

const CONTENT_DIR = path.join(process.cwd(), 'app/blog/content')

/**
 * Returns every .ts file slug in app/blog/content/ (filename without extension).
 * Runs at build time / server only.
 */
export function getAllSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith('.ts') && !file.startsWith('_') && !file.startsWith('.'))
    .map((file) => file.replace(/\.ts$/, ''))
}

/**
 * Dynamically import a single post module by slug.
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    // Dynamic import relative to this file's location at build time
    const mod = await import(`../content/${slug}`)
    if (!mod.title || !mod.content) return null
    return {
      title: mod.title,
      excerpt: mod.excerpt ?? '',
      content: mod.content,
      date: mod.date ?? '1970-01-01',
      readTime: mod.readTime ?? '5 min read',
      category: mod.category ?? 'Full-Stack',
      author: mod.author ?? 'Mussawar Hayat',
      keywords: Array.isArray(mod.keywords) ? mod.keywords : [],
      slug,
    }
  } catch {
    return null
  }
}

/**
 * Load all posts and sort newest first.
 */
export async function getAllPosts(): Promise<BlogPost[]> {
  const slugs = getAllSlugs()
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)))
  return posts
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => b.date.localeCompare(a.date))
}

/**
 * Related posts: same category first, then newest others.
 */
export async function getRelatedPosts(
  currentSlug: string,
  limit = 3
): Promise<BlogPost[]> {
  const all = await getAllPosts()
  const current = all.find((p) => p.slug === currentSlug)
  if (!current) return all.filter((p) => p.slug !== currentSlug).slice(0, limit)

  const sameCategory = all.filter(
    (p) => p.slug !== currentSlug && p.category === current.category
  )
  const others = all.filter(
    (p) => p.slug !== currentSlug && p.category !== current.category
  )
  return [...sameCategory, ...others].slice(0, limit)
}
