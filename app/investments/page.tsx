import { Metadata } from "next"
import FAQSection from "@/components/FAQSection"

export const metadata: Metadata = {
  title: "Asset Management & Investments | ACE CAPITAL",
  description: "Mathematical precision-driven wealth accumulation. Sourcing unique private equity, pre-IPO opportunities, and global market arbitrage strategies.",
  alternates: {
    canonical: "/investments",
  },
}

export default function Investments() {
  const investFAQs = [
    {
      question: "What asset classes are covered?",
      answer: "Our primary focus remains on global equities, fixed-income instruments, and complex derivatives. We also maintain specialized desks for private equity and pre-IPO opportunities for accredited institutional partners.",
    },
    {
      question: "What is the research methodology?",
      answer: "We utilize a hybrid approach combining deep-dive fundamental analysis with proprietary quantitative models. This allows us to identify structural market inefficiencies and execute with mathematical precision.",
    },
    {
      question: "How are risk-adjusted returns profiled?",
      answer: "Portfolios are optimized for high Sharpe ratios, targeting consistent alpha while maintaining strict VaR (Value at Risk) limits. Our risk management layer dynamically adjusts position sizing based on real-time volatility indices.",
    },
    {
      question: "How is liquidity managed?",
      answer: "We operate 24/7 coverage across major global trading hubs. Our low-latency infrastructure ensures absolute liquidity and optimal execution even during periods of high market volatility.",
    },
  ]

  const pillars = [
    {
      title: "Thorough Research",
      icon: "biotech",
      tag: "Precision Analysis Model v.4.2",
      description: "Deep-dive fundamental analysis merged with proprietary quantitative models to identify market inefficiencies before they become mainstream.",
      themeColor: "group-hover:border-secondary border-t-charcoal",
    },
    {
      title: "Disciplined Execution",
      icon: "speed",
      tag: "Low-Latency Backbone: 4ms Avg.",
      description: "Low-latency algorithmic trading structures ensure we capture optimal entry and exit points across global equity, bond, and derivative markets.",
      themeColor: "group-hover:border-primary border-primary/20 bg-primary-container/20",
    },
    {
      title: "Risk Management",
      icon: "shield_locked",
      tag: "VaR Limit: 2.5% Monthly",
      description: "A multi-layered risk mitigation strategy that dynamically adjusts position sizing based on real-time volatility indices and liquidity shifts.",
      themeColor: "group-hover:border-error-red border-t-charcoal",
    },
  ]

  const sectors = [
    { num: "01", name: "Tech Growth", exposure: "24%" },
    { num: "02", name: "Fin-Tech", exposure: "18%" },
    { num: "03", name: "Clean Energy", exposure: "12%" },
    { num: "04", name: "Infrastructure", exposure: "15%" },
    { num: "05", name: "Real Estate", exposure: "9%" },
    { num: "06", name: "Agriculture", exposure: "7%" },
    { num: "07", name: "Metals", exposure: "10%" },
    { num: "08", name: "Emerging", exposure: "5%" },
  ]

  const investmentSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://acecapitalenterprise.com/investments/#webpage",
        "url": "https://acecapitalenterprise.com/investments",
        "name": "Asset Management & Investments | ACE CAPITAL",
        "description": "Mathematical precision-driven wealth accumulation. Sourcing unique private equity, pre-IPO opportunities, and global market arbitrage strategies.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://acecapitalenterprise.com/#website",
          "url": "https://acecapitalenterprise.com",
          "name": "Ace Capital Enterprise"
        }
      },
      {
        "@type": "Service",
        "@id": "https://acecapitalenterprise.com/investments/#service",
        "name": "Asset Management & Investments",
        "description": "Mathematical precision-driven wealth accumulation. Sourcing unique private equity, pre-IPO opportunities, and global market arbitrage strategies.",
        "provider": {
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
        "@id": "https://acecapitalenterprise.com/investments/#faq",
        "isPartOf": {
          "@id": "https://acecapitalenterprise.com/investments/#webpage"
        },
        "mainEntity": investFAQs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(investmentSchema) }}
      />

      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] flex items-center px-gutter overflow-hidden bg-background pt-12">
        <div className="relative z-10 ace-container grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center w-full">
          <div className="lg:col-span-7 space-y-8">
            <span className="font-section-label text-section-label text-secondary uppercase tracking-[0.3em] block">
              Asset Management
            </span>
            <h1 className="font-display-hero text-4xl md:text-5xl lg:text-6xl leading-none text-foreground uppercase">
              PRECISION DRIVEN <br />
              <span className="text-secondary">GROWTH.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              At ACE CAPITAL, our investment philosophy is anchored in mathematical rigor and institutional-grade risk management. We transform global market volatility into structured opportunity through disciplined execution.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-secondary text-on-secondary-fixed px-6 py-3 md:px-8 md:py-4 font-bold tracking-widest uppercase text-xs md:text-sm hover:brightness-110 active:scale-95 transition-all rounded">
                ALLOCATE CAPITAL
              </button>
              <button className="border border-outline text-muted-foreground px-6 py-3 md:px-8 md:py-4 font-bold tracking-widest uppercase text-xs md:text-sm hover:bg-muted active:scale-95 transition-all rounded">
                QUARTERLY REPORT
              </button>
            </div>
          </div>

          {/* Performance side card */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="ace-card p-8 border-l-4 border-l-secondary relative overflow-hidden rounded-r">
              <div className="font-section-label text-section-label text-muted-foreground uppercase mb-4 text-xs">
                Real-time Performance
              </div>
              <div className="space-y-4 font-body-md text-sm">
                <div className="flex justify-between items-end border-b border-charcoal pb-2">
                  <span className="text-on-surface-variant uppercase text-xs">Annualized Alpha</span>
                  <span className="font-data-point text-success-green">+14.2%</span>
                </div>
                <div className="flex justify-between items-end border-b border-charcoal pb-2">
                  <span className="text-on-surface-variant uppercase text-xs">Sharpe Ratio</span>
                  <span className="font-data-point text-foreground">2.41</span>
                </div>
                <div className="flex justify-between items-end border-b border-charcoal pb-2">
                  <span className="text-on-surface-variant uppercase text-xs">Assets Under Mgmt</span>
                  <span className="font-data-point text-foreground">₹23,850 Cr</span>
                </div>
              </div>
              <div className="mt-8 overflow-hidden rounded">
                <img
                  className="w-full h-32 object-cover opacity-80"
                  alt="Performance graph"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQIFfvPRzoRX0L5dgZr9UXhoUffNT5Eieuq6Wr_YgGtITYjLeAqVK6BCL406mqrZcO5dmVD_qRoJbqpHB7rzWjMP4XQQ4Yjm02Ll08fVBSt_AUgKDWasyLQeKU2oqNVZDIo-KiXeTugHz5q9bQ2M4cywANWYYdxXm1OQ3bqX7lfM1jiSkN7S73I5OyySa7D7GH-z9s8AYzCLANgOgQ8A31CtHLmitwP0r_1i6nHhLFyK0TYm8WxUM"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="ace-section ace-container border-t border-border">
        <div className="text-center mb-16">
          <span className="font-section-label text-section-label text-primary uppercase tracking-widest mb-4 block">
            Our Methodology
          </span>
          <h2 className="font-headline-lg text-headline-lg uppercase text-foreground">
            Institutional Core Pillars
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pil, idx) => (
            <div
              key={idx}
              className={`ace-card p-10 flex flex-col justify-between group transition-colors rounded ${pil.themeColor}`}
            >
              <div className="space-y-6">
                <span className="material-symbols-outlined text-4xl text-secondary block">
                  {pil.icon}
                </span>
                <h3 className="font-headline-lg text-2xl uppercase">
                  {pil.title}
                </h3>
                <p className="text-on-surface-variant font-body-md leading-relaxed">
                  {pil.description}
                </p>
              </div>
              <div className="mt-12 text-outline text-xs uppercase tracking-tighter italic font-section-label">
                {pil.tag}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature section */}
      <section className="ace-section bg-surface-container-low border-y border-border">
        <div className="ace-container grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-secondary/40 z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-secondary/40 z-0"></div>
            <div className="relative z-10 w-full aspect-square overflow-hidden rounded grayscale hover:grayscale-0 transition-all duration-700">
              <img
                className="w-full h-full object-cover"
                alt="Wealth construction"
                src="https://lh3.googleusercontent.com/aida/AP1WRLsqDiXdZtnyLbunqr6DjbdbFmOroFtEDL9dllrgM9eVdUdM0QgRGs1Wr2tqQPttlEapsn8rHUVarRDWmJQ6Mghyel_S5x_H9TMvTvB_AaMq7l0SSDdfb2Vbx1b-dmq62iOOXEkhP1ay7IXfZu1atHsG4aUDRJOCyugxsohogMT9xDg_iff_xNcglWvpbFG1fE1Czw2yZDgh_vqm118ZcAtOXQcTgQ68r4drkwR_OpeFq2Q0UJk1_6DLGg"
              />
            </div>
          </div>
          <div className="lg:col-span-7 lg:pl-16 order-1 lg:order-2 mb-12 lg:mb-0 space-y-8">
            <span className="font-section-label text-section-label text-muted-foreground uppercase tracking-widest block">
              Sustainable Alpha
            </span>
            <h2 className="font-headline-lg text-headline-lg uppercase text-foreground">
              Nurturing Wealth Through <span className="text-secondary">Strategic Intelligence</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              True investment success is not found in the chaotic pursuit of trends, but in the grounded cultivation of value. Like the oak tree that withstands the storm, our portfolios are built on deep-rooted stability.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                <div>
                  <h4 className="font-data-point text-on-surface uppercase mb-1 text-foreground">
                    High-Potential Opportunities
                  </h4>
                  <p className="text-on-surface-variant font-body-md leading-relaxed text-sm">
                    Sourcing unique private equity and pre-IPO placements for accredited institutional partners.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                <div>
                  <h4 className="font-data-point text-on-surface uppercase mb-1 text-foreground">
                    Global Market Reach
                  </h4>
                  <p className="text-on-surface-variant font-body-md leading-relaxed text-sm">
                    24/7 coverage across Asian, European, and American trading desks for absolute liquidity.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <button className="bg-secondary text-on-secondary-fixed px-6 py-3 md:px-8 md:py-4 font-bold tracking-widest uppercase text-xs md:text-sm hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 rounded">
                EXPLORE THE PORTAL <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Sectors */}
      <section className="ace-section ace-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-border pb-8">
          <div>
            <h2 className="font-headline-lg text-headline-lg uppercase text-foreground">
              Global Sectors
            </h2>
            <p className="text-on-surface-variant mt-2">Active allocation strategies across diverse asset classes.</p>
          </div>
          <div className="mt-6 md:mt-0 flex gap-4">
            <div className="px-4 py-2 border border-border text-xs uppercase font-section-label text-muted-foreground hover:bg-muted cursor-pointer transition-all rounded-sm">
              Equities
            </div>
            <div className="px-4 py-2 border border-secondary text-xs uppercase font-section-label text-secondary bg-secondary/5 cursor-pointer transition-all rounded-sm">
              Fixed Income
            </div>
            <div className="px-4 py-2 border border-border text-xs uppercase font-section-label text-muted-foreground hover:bg-muted cursor-pointer transition-all rounded-sm">
              Derivatives
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
          {sectors.map((sec, idx) => (
            <div
              key={idx}
              className="bg-background p-8 hover:bg-surface-container-high transition-colors group cursor-default"
            >
              <div className="font-data-point text-secondary text-sm mb-2">{sec.num}</div>
              <h4 className="font-headline-lg text-lg uppercase mb-4 text-foreground">{sec.name}</h4>
              <div className="font-section-label text-xs text-on-surface-variant mb-6 uppercase">
                Exposure: {sec.exposure}
              </div>
              <div className="h-[1px] w-12 bg-secondary group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Secure Legacy CTA */}
      <section className="ace-section bg-primary-container relative border-t border-border">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <span className="material-symbols-outlined text-secondary text-5xl">
            verified_user
          </span>
          <h2 className="font-headline-lg text-headline-lg uppercase text-foreground">SECURE YOUR LEGACY</h2>
          <p className="font-body-lg text-body-lg text-primary max-w-2xl mx-auto leading-relaxed">
            Institutional Alpha through precision. Partner with ACE CAPITAL to gain access to exclusive market desks and high-end proprietary trading infrastructure.
          </p>
          <button className="bg-secondary text-on-secondary-fixed px-8 py-4 md:px-12 md:py-5 font-bold tracking-widest uppercase text-xs md:text-sm hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-secondary/10 rounded">
            REQUEST INSTITUTIONAL PORTAL ACCESS
          </button>
          <p className="font-section-label text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
            Past performance is not indicative of future results. Capital at risk.
          </p>
        </div>
      </section>

      {/* FAQ Accordion component */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common inquiries regarding asset management and strategy methodology."
        items={investFAQs}
      />
    </>
  )
}
