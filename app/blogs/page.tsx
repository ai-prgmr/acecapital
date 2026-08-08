import { Metadata } from "next"
import Link from "next/link"
import FAQSection from "@/components/FAQSection"

export const metadata: Metadata = {
  title: "Ace Insights & Blogs | ACE CAPITAL",
  description: "Explore market insights, quantitative research, latency optimizations, and macro trends analyzed by Ace Capital Enterprise desks.",
  alternates: {
    canonical: "/blogs",
  },
}

export default function Blogs() {
  const blogFAQs = [
    {
      question: "How frequently are research insights updated?",
      answer: "Macro comments are published daily, whereas deep-dive quantitative papers and tech briefings are uploaded bi-weekly to match volatile market events.",
    },
    {
      question: "Are these analyses financial advice?",
      answer: "No. All publications are for educational and institutional discussion purposes only and do not constitute direct trading recommendation or financial advice.",
    },
  ]

  const mockBlogs = [
    {
      title: "5 Easy Ways to Master Candlestick Patterns and Trade Smarter",
      category: "Trading Strategy",
      date: "December 5, 2024",
      readTime: "3 min read",
      summary: "Candlestick patterns are one of the most powerful tools in a trader’s arsenal, providing visual insights into market sentiment, trends, and potential reversals.",
      author: "Ace Capital",
      slug: "5-easy-way-to-master-candlestick-patterns",
      image: "/acecapital/blog-candlesticks.png",
    },
    {
      title: "How to Become a Profitable Trader in 180 Days (6 Months)",
      category: "Trading Strategy",
      date: "December 16, 2024",
      readTime: "8 min read",
      summary: "Trading can be a highly rewarding career, but achieving profitability within six months requires a clear roadmap, discipline, and consistent effort. Master the essentials in 180 days.",
      author: "Ace Capital",
      slug: "how-to-become-profitable-trader",
      image: "/acecapital/blog-profitable.png",
    },
    {
      title: "5 Best Railway Stocks in India 2025",
      category: "Market Analysis",
      date: "February 20, 2025",
      readTime: "6 min read",
      summary: "The Indian railway sector is set to witness substantial growth. If you’re considering tapping into this booming sector, here are the top five railway stocks in 2025.",
      author: "Ace Capital",
      slug: "5-best-railway-stocks-in-india-2025",
      image: "/acecapital/blog-railways.png",
    },
    {
      title: "Master the Market with Smart & Simple Trading Tactics",
      category: "Trading Strategy",
      date: "June 3, 2025",
      readTime: "7 min read",
      summary: "Intraday trading can be one of the most exciting and rewarding experiences in the stock market — but it’s also one of the riskiest. Learn 6 low-risk strategies.",
      author: "Ace Capital",
      slug: "master-the-market-with-smart-and-simple-trading-tactics",
      image: "/acecapital/blog-intraday.png",
    }
  ]

  const blogsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://acecapitalenterprise.com/blogs/#webpage",
        "url": "https://acecapitalenterprise.com/blogs",
        "name": "Ace Insights & Blogs | ACE CAPITAL",
        "description": "Explore market insights, quantitative research, latency optimizations, and macro trends analyzed by Ace Capital Enterprise desks.",
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
        "name": "Ace Insights & Blogs",
        "description": "Explore market insights, quantitative research, latency optimizations, and macro trends analyzed by Ace Capital Enterprise desks.",
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
            Institutional Research
          </span>
          <h1 className="font-display-hero text-4xl md:text-5xl lg:text-6xl text-foreground uppercase leading-tight">
            ACE <span className="text-secondary italic">INSIGHTS</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Factual market research, quantitative analysis, HFT technology blueprints, and macroeconomic forecasts directly from our trading floor.
          </p>
        </div>
      </section>

      {/* Blogs list section */}
      <section className="ace-section ace-container border-t border-border">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-border pb-6 mb-12 gap-4">
          <h2 className="font-headline-lg text-2xl uppercase text-foreground">Latest Commentary</h2>
          <div className="flex bg-surface-container-low p-1 border border-border rounded text-xs font-section-label">
            {["All", "Quant Strategy", "Market Analysis", "Infrastructure"].map((cat, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 uppercase tracking-widest ${idx === 0
                  ? "bg-secondary text-on-secondary-fixed font-bold rounded-sm"
                  : "text-on-surface-variant hover:text-on-surface"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blogs list */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockBlogs.map((blog, idx) => (
            <Link
              key={idx}
              href={`/blogs/${blog.slug}`}
              className="ace-card p-8 rounded border border-outline-variant/20 hover:border-secondary transition-all duration-300 flex flex-col justify-between group h-[400px] cursor-pointer"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-center text-xs font-mono text-outline">
                  <span className="text-secondary uppercase tracking-widest font-section-label">
                    {blog.category}
                  </span>
                  <span>{blog.readTime}</span>
                </div>
                {blog.image && (
                  <div className="w-full h-24 overflow-hidden rounded border border-border bg-muted">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="space-y-2">
                  <h3 className="font-headline-lg text-lg text-foreground group-hover:text-secondary transition-colors uppercase leading-tight line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="font-body-md text-on-surface-variant text-xs mt-2 line-clamp-3 leading-relaxed">
                    {blog.summary}
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-4 flex justify-between items-center text-xs font-section-label mt-auto">
                <span className="text-muted-foreground uppercase">By {blog.author}</span>
                <span className="text-outline uppercase tracking-wider">{blog.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Subscriptions */}
      <section className="ace-section px-gutter bg-surface-container-lowest border-y border-border">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="material-symbols-outlined text-secondary text-5xl">mail</span>
          <h2 className="font-headline-lg text-3xl uppercase text-foreground">Subscribe to Research</h2>
          <p className="font-body-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            Receive bi-weekly quantitative research insights and market commentary directly to your institutional mailbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              className="flex-grow bg-background border border-border px-4 py-3 text-foreground placeholder:text-outline text-sm font-data-point focus:border-secondary outline-none rounded uppercase"
              placeholder="e.g. rahul@example.com"
            />
            <button className="bg-secondary text-on-secondary-fixed font-bold font-section-label uppercase tracking-widest px-6 py-3 md:px-8 md:py-3.5 text-xs md:text-sm rounded hover:brightness-110 active:scale-95 transition-all">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>

      {/* Blogs FAQs */}
      <FAQSection
        title="Insights FAQs"
        subtitle="Common queries regarding our research material and publications desk."
        items={blogFAQs}
      />
    </>
  )
}
