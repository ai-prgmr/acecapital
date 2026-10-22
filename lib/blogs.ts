import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { marked } from "marked"

const BLOG_DATA_DIR = path.join(process.cwd(), "public", "blog-data")

export interface BlogPostMeta {
  slug: string
  title: string
  seoTitle?: string
  seoDescription?: string
  category: string
  date: string
  readTime: string
  summary: string
  author: string
  image?: string
  published?: boolean
  order?: number
}

export interface BlogPost extends BlogPostMeta {
  content: string
  html: string
}

// Configure marked with GitHub-flavored markdown and soft breaks
marked.setOptions({
  gfm: true,
  breaks: true,
})

/**
 * Returns all blog slugs available in public/blog-data/*.md
 */
export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DATA_DIR)) {
    return []
  }

  const filenames = fs.readdirSync(BLOG_DATA_DIR)
  return filenames
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""))
}

/**
 * Reads all blog posts metadata from public/blog-data/*.md
 */
export function getAllBlogs(options: { includeDrafts?: boolean } = {}): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DATA_DIR)) {
    return []
  }

  const filenames = fs.readdirSync(BLOG_DATA_DIR)
  const blogs: BlogPostMeta[] = []

  for (const file of filenames) {
    if (!file.endsWith(".md")) continue

    const filePath = path.join(BLOG_DATA_DIR, file)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { data } = matter(fileContent)

    const slug = data.slug || file.replace(/\.md$/, "")
    const published = data.published !== undefined ? Boolean(data.published) : true

    if (!options.includeDrafts && !published) {
      continue
    }

    blogs.push({
      slug,
      title: data.title || slug,
      seoTitle: data.seoTitle,
      seoDescription: data.seoDescription,
      category: data.category || "Market Analysis",
      date: data.date || "2025-01-01",
      readTime: data.readTime || "5 min read",
      summary: data.summary || "",
      author: data.author || "Ace Capital",
      image: data.image,
      published,
      order: data.order !== undefined ? Number(data.order) : 99,
    })
  }

  // Sort by order ascending, fallback to date
  return blogs.sort((a, b) => {
    if ((a.order ?? 99) !== (b.order ?? 99)) {
      return (a.order ?? 99) - (b.order ?? 99)
    }
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

/**
 * Retrieves a single blog post by slug with parsed HTML content
 */
export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_DATA_DIR, `${slug}.md`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContent = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(fileContent)

  const html = await Promise.resolve(marked.parse(content))

  return {
    slug,
    title: data.title || slug,
    seoTitle: data.seoTitle,
    seoDescription: data.seoDescription,
    category: data.category || "Market Analysis",
    date: data.date || "2025-01-01",
    readTime: data.readTime || "5 min read",
    summary: data.summary || "",
    author: data.author || "Ace Capital",
    image: data.image,
    published: data.published !== undefined ? Boolean(data.published) : true,
    order: data.order !== undefined ? Number(data.order) : 99,
    content,
    html: String(html),
  }
}

/**
 * Utility to sync / generate public/blog-data/index.json
 */
export function generateBlogIndexJson(): void {
  const allBlogs = getAllBlogs({ includeDrafts: true })
  const outputPath = path.join(BLOG_DATA_DIR, "index.json")
  fs.writeFileSync(outputPath, JSON.stringify(allBlogs, null, 2), "utf-8")
}
