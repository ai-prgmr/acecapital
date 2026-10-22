import { Metadata } from "next"
import Link from "next/link"
import FAQSection from "@/components/FAQSection"
import { getAllBlogs } from "@/lib/blogs"

export const metadata: Metadata = {
  title: "Investment & Trading Insights | Ace Capital Enterprise",
  description: "Read expert insights, mutual fund guides, trading strategies, and stock analysis to make smarter financial decisions with Ace Capital Enterprise.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Investment & Trading Insights | Ace Capital Enterprise",
    description: "Read expert insights, mutual fund guides, trading strategies, and stock analysis to make smarter financial decisions with Ace Capital Enterprise.",
    url: "https://acecapitalenterprise.com/blogs",
    siteName: "Ace Capital Enterprise",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo-acecapital-enterprise.webp",
        width: 1200,
        height: 630,
        alt: "Ace Capital Enterprise Insights & Blogs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Investment & Trading Insights | Ace Capital Enterprise",
    description: "Read expert insights, mutual fund guides, trading strategies, and stock analysis to make smarter financial decisions with Ace Capital Enterprise.",
    images: ["/logo-acecapital-enterprise.webp"],
  },
}

export default function Blogs() {
  const blogs = getAllBlogs()

  const blogFAQs = [
    {
      question: "How frequently are research insights updated?",
      answer: "Market comments and educational articles are published regularly to help investors and traders stay ahead of evolving financial opportunities and mutual fund updates.",
    },
    {
      question: "Are these analyses financial advice?",
      answer: "No. All publications are for educational and institutional discussion purposes only and do not constitute direct trading recommendation or financial advice.",
    },
  ]

  const blogsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://acecapitalenterprise.com/blogs/#webpage",
        "url": "https://acecapitalenterprise.com/blogs",
        "name": "Investment & Trading Insights | Ace Capital Enterprise",
        "description": "Read expert insights, mutual fund guides, trading strategies, and stock analysis to make smarter financial decisions with Ace Capital Enterprise.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://acecapitalenterprise.com/#website",
          "url": "https://acecapitalenterprise.com",
          "name": "Ace Capital Enterprise"
        }
      },
      {
        "@type": "Blog",
        "@id": "https://acecapitalenterprise.com/blogs/#blog",
        "name": "Ace Capital Enterprise Insights & Blogs",
        "description": "Read expert insights, mutual fund guides, trading strategies, and stock analysis to make smarter financial decisions with Ace Capital Enterprise.",
        "publisher": {
          "@type": "Organization",
          "name": "Ace Capital Enterprise",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mumbai",
            "addressCountry": "India"
          }
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://acecapitalenterprise.com/blogs/#faq",
        "isPartOf": {
          "@id": "https://acecapitalenterprise.com/blogs/#webpage"
        },
        "mainEntity": blogFAQs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogsSchema) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center px-gutter bg-background pt-12">
        <div className="absolute inset-0 z-0 opacity-30 border border-border/30 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="ace-container w-full relative z-10 space-y-6">
          <span className="font-section-label text-section-label text-secondary uppercase tracking-[0.3em] block">
            Market Knowledge & Guides
          </span>
          <h1 className="font-display-hero text-4xl md:text-5xl lg:text-6xl text-foreground uppercase leading-tight">
            ACE <span className="text-secondary italic">INSIGHTS</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Practical guides on mutual funds, SIP investing, and disciplined investment strategies from Ace Capital Enterprise.
          </p>
        </div>
      </section>

      {/* Blogs list section */}
      <section className="ace-section ace-container border-t border-border">

        {/* Blogs list */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <Link
              key={idx}
              href={`/blogs/${blog.slug}`}
              className="ace-card rounded-lg border border-outline-variant/20 hover:border-secondary transition-all duration-300 flex flex-col group cursor-pointer overflow-hidden bg-surface-container-lowest"
            >
              {blog.image && (
                <div className="w-full h-56 overflow-hidden bg-muted border-b border-border/50">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              )}
              <div className="p-6 flex flex-col flex-grow space-y-4">
                <div className="flex justify-between items-center text-xs font-mono text-outline">
                  <span className="text-secondary uppercase tracking-widest font-section-label">
                    {blog.category}
                  </span>
                  <span>{blog.readTime}</span>
                </div>

                <div className="space-y-2 flex-grow">
                  <h3 className="font-headline-lg text-xl text-foreground group-hover:text-secondary transition-colors uppercase leading-tight line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="font-body-md text-on-surface-variant text-sm mt-2 line-clamp-3 leading-relaxed">
                    {blog.summary}
                  </p>
                </div>

                <div className="border-t border-border pt-4 flex justify-between items-center text-xs font-section-label mt-4">
                  <span className="text-muted-foreground uppercase">By {blog.author}</span>
                  <span className="text-outline uppercase tracking-wider">{blog.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
