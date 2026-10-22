import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getAllBlogSlugs, getBlogBySlug } from "@/lib/blogs"

// Static params generation for static export / static pages
export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

// Meta helper
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogBySlug(slug)

  if (!post) {
    return {
      title: "Blog Post Not Found | Ace Capital Enterprise",
    }
  }

  // Ensure title is strictly within 50-60 characters
  const metaTitle =
    post.seoTitle ||
    (post.title.length <= 44
      ? `${post.title} | Ace Capital`
      : post.title.length <= 60
        ? post.title
        : `${post.title.slice(0, 57)}...`)

  // Ensure description is strictly within 140-160 characters
  const metaDescription =
    post.seoDescription ||
    (post.summary.length <= 160
      ? post.summary
      : `${post.summary.slice(0, 157)}...`)

  const canonicalUrl = `https://acecapitalenterprise.com/blogs/${slug}`
  const ogImage = post.image || "/logo-acecapital-enterprise.webp"

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: "Ace Capital Enterprise",
      locale: "en_IN",
      type: "article",
      publishedTime: post.date ? new Date(post.date).toISOString() : undefined,
      authors: [post.author || "Ace Capital"],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [ogImage],
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getBlogBySlug(slug)

  if (!post) {
    notFound()
  }

  // Schema for Article AEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.summary,
    "datePublished": post.date ? new Date(post.date).toISOString().split("T")[0] : "2026-10-19",
    "author": {
      "@type": "Organization",
      "name": post.author,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ace Capital Enterprise",
      "logo": {
        "@type": "ImageObject",
        "url": "https://acecapitalenterprise.com/logo.png",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://acecapitalenterprise.com/blogs/${slug}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="min-h-screen bg-background pt-8 pb-20 px-gutter">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Breadcrumbs */}
          <div className="text-xs font-section-label text-outline flex items-center gap-2 uppercase tracking-widest pt-4">
            <Link href="/" className="hover:text-secondary">Home</Link>
            <span>/</span>
            <Link href="/blogs" className="hover:text-secondary">Blogs</Link>
            <span>/</span>
            <span className="text-foreground font-semibold truncate max-w-[200px]">{post.category}</span>
          </div>

          {/* Title Header */}
          <div className="space-y-4">
            <span className="bg-primary-container text-primary text-xs uppercase px-3 py-1 font-bold font-section-label">
              {post.category}
            </span>
            <h1 className="font-display-hero text-3xl md:text-4xl lg:text-5xl text-foreground uppercase leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-xs text-outline font-section-label uppercase">
              <span>By <strong className="text-silver">{post.author}</strong></span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          {post.image && (
            <div className="w-full overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-contain rounded"
              />
            </div>
          )}

          {/* Blog Content body */}
          <div
            className="blog-content mt-8"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          {/* Interactive CTA Card */}
          <div className="ace-card p-8 rounded border border-secondary/40 bg-surface-container-lowest my-8 space-y-6">
            <div className="space-y-2">
              <span className="font-section-label text-xs text-secondary uppercase tracking-widest block">
                Start With Clarity
              </span>
              <h3 className="font-display-hero text-2xl text-foreground uppercase">
                Ready to Take Your First Step?
              </h3>
              <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                Connect with Ace Capital Enterprise to discuss your financial goals and start investing. Track and manage your portfolio seamlessly on our web portal at <strong>mf.acecapitalenterprise.com</strong> or via the <strong>Dhan Setu</strong> investor mobile app.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://mf.acecapitalenterprise.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-white px-5 py-3 rounded text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity inline-flex items-center gap-1.5"
              >
                <span>Invest on Web Portal</span>
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
              <Link
                href="/mutual-funds-investments"
                className="border border-border text-foreground px-5 py-3 rounded text-xs font-bold uppercase tracking-widest hover:border-secondary transition-colors"
              >
                Mutual Fund Solutions
              </Link>
              <Link
                href="/contact"
                className="border border-border text-foreground px-5 py-3 rounded text-xs font-bold uppercase tracking-widest hover:border-secondary transition-colors"
              >
                Contact Our Desk
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="border-t border-border/50 pt-6 mt-12 text-xs text-muted-foreground leading-relaxed italic">
            Disclaimer: This article is for educational purposes only and should not be treated as personalised investment advice or a recommendation to buy or sell any security or mutual fund. Financial investments are subject to market risks. Read all scheme-related documents carefully before investing. Past performance does not guarantee future returns.
          </div>

          {/* Back button */}
          <div className="border-t border-border/50 pt-8">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-secondary font-section-label text-xs uppercase tracking-widest hover:underline"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Back to Catalog
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
