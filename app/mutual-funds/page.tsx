import { Metadata } from "next"
import FAQSection from "@/components/FAQSection"
import MutualFundsCalculator from "@/components/MutualFundsCalculator"
import TopFundsTabbed from "@/components/TopFundsTabbed"
import ProductsGrid from "@/components/ProductsGrid"

export const metadata: Metadata = {
  title: "Mutual Funds & Growth Projection | ACE CAPITAL",
  description: "Leverage ACE Capital's proprietary algorithmic frameworks and institutional-grade asset allocation for long-term wealth growth.",
  alternates: {
    canonical: "/mutual-funds",
  },
}

export default function MutualFunds() {
  const fundsFAQs = [
    {
      question: "What is the level of fund management expertise?",
      answer: "Our portfolios are managed by senior strategists with over 25 years of institutional experience, utilizing proprietary algorithmic frameworks and deep fundamental analysis.",
    },
    {
      question: "How often are the funds rebalanced?",
      answer: "We employ dynamic rebalancing triggered by quantitative signals and market volatility thresholds, ensuring capital is always optimized for current market conditions.",
    },
    {
      question: "How do I begin investing via the portal?",
      answer: "Existing clients can access the 'Portal Login' to allocate capital. New institutional partners should contact our desk to initiate the onboarding and compliance process.",
    },
    {
      question: "Are these funds available to retail investors?",
      answer: "ACE Capital Mutual Funds are primarily designed for institutional-grade wealth management, though select vehicles are available for high-net-worth individual portfolios.",
    },
  ]

  const funds = [
    { name: "Global Strategy Yield", type: "Multi-Asset", risk: "Low", nav: "₹156.90", ytd: "+12.40%" },
    { name: "Core Equity Growth", type: "Large Cap", risk: "High", nav: "₹342.10", ytd: "+18.70%" },
    { name: "Strategic Arbitrage Fund", type: "Market Neutral", risk: "Low", nav: "₹112.50", ytd: "+9.82%" },
    { name: "Global Multi-Asset Dynamic", type: "Balanced", risk: "Moderate", nav: "₹156.90", ytd: "+11.08%" },
    { name: "Emerging Markets Quant", type: "Intl Equity", risk: "High", nav: "₹94.22", ytd: "+14.30%" },
  ]

  const reports = [
    {
      tag: "Q3 PERFORMANCE",
      title: "Equity Alpha Report",
      desc: "Detailed breakdown of stock selection and sector weightings for the last quarter.",
    },
    {
      tag: "MACRO INSIGHTS",
      title: "Fixed Income Outlook",
      desc: "Projections on interest rates and credit spread volatility for the next 12 months.",
    },
    {
      tag: "RISK MGMT",
      title: "Volatility Framework",
      desc: "How ACE Capital shields wealth during extreme market stress events.",
    },
    {
      tag: "FUTURE TECH",
      title: "The Quant Desk",
      desc: "Deep dive into the algorithmic signals driving our flagship automated funds.",
    },
  ]

  const mutualSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://acecapitalenterprise.com/mutual-funds/#webpage",
        "url": "https://acecapitalenterprise.com/mutual-funds",
        "name": "Mutual Funds & Growth Projection | ACE CAPITAL",
        "description": "Leverage ACE Capital's proprietary algorithmic frameworks and institutional-grade asset allocation for long-term wealth growth.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://acecapitalenterprise.com/#website",
          "url": "https://acecapitalenterprise.com",
          "name": "Ace Capital Enterprise"
        }
      },
      {
        "@type": "FinancialProduct",
        "@id": "https://acecapitalenterprise.com/mutual-funds/#product",
        "name": "Mutual Funds & Growth Projection Solutions",
        "description": "Leverage ACE Capital's proprietary algorithmic frameworks and institutional-grade asset allocation for long-term wealth growth.",
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
        "@id": "https://acecapitalenterprise.com/mutual-funds/#faq",
        "isPartOf": {
          "@id": "https://acecapitalenterprise.com/mutual-funds/#webpage"
        },
        "mainEntity": fundsFAQs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mutualSchema) }}
      />

      {/* Hero section */}
      <section className="relative ace-section bg-background overflow-hidden pt-12">
        <div className="ace-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-container border border-primary/20 rounded-full">
              <span className="w-2 h-2 rounded-full bg-success-green animate-pulse"></span>
              <span className="font-section-label text-xs uppercase tracking-widest text-primary">
                Managed Wealth Portfolios
              </span>
            </div>
            <h1 className="font-display-hero text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground uppercase">
              Institutional <span className="text-secondary italic">Precision.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
              Leverage ACE Capital’s proprietary algorithmic frameworks and institutional-grade asset allocation for long-term wealth growth. Build your portfolio with absolute metrics.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-6 py-3 md:px-8 md:py-4 bg-secondary text-on-secondary-fixed font-bold font-section-label tracking-widest text-xs md:text-sm hover:brightness-110 active:scale-95 transition-all uppercase rounded">
                Start Investing
              </button>
              <button className="px-6 py-3 md:px-8 md:py-4 border border-outline text-muted-foreground font-bold font-section-label tracking-widest text-xs md:text-sm hover:bg-muted active:scale-95 transition-all uppercase rounded">
                View Market Insights
              </button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="aspect-video ace-card border border-border rounded flex items-center justify-center p-8 bg-[radial-gradient(ellipse_at_center,rgba(233,195,73,0.05),transparent)]">
              <div className="text-center space-y-4">
                <span className="material-symbols-outlined text-secondary text-7xl animate-bounce">
                  finance_mode
                </span>
                <p className="font-data-point text-xl text-foreground uppercase tracking-wider">
                  Global Strategy Yield
                </p>
                <div className="flex justify-center gap-8 font-mono text-xs text-outline">
                  <span>YTD: <strong className="text-success-green">+12.4%</strong></span>
                  <span>NAV: <strong className="text-foreground">₹156.90</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fund Performance Index Table */}
      <section className="ace-section ace-container border-t border-border">
        <div className="mb-12 border-l-4 border-secondary pl-6">
          <h2 className="font-headline-lg text-headline-lg uppercase text-foreground">
            Fund Performance Index
          </h2>
          <p className="font-body-md text-on-surface-variant mt-2">
            Real-time performance metrics across our flagship portfolios.
          </p>
        </div>

        <div className="ace-card rounded overflow-hidden border border-outline-variant/20">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary-container text-muted-foreground uppercase font-section-label text-xs tracking-wider border-b border-border">
                  <th className="px-6 py-4">Fund Name</th>
                  <th className="px-6 py-4">Type</th>
                  <th className="px-6 py-4 text-center">Risk Profile</th>
                  <th className="px-6 py-4 text-right">NAV</th>
                  <th className="px-6 py-4 text-right">YTD Return</th>
                  <th className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="font-body-md text-sm">
                {funds.map((fund, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-border hover:bg-muted transition-colors"
                  >
                    <td className="px-6 py-5 font-bold text-foreground">{fund.name}</td>
                    <td className="px-6 py-5 text-on-surface-variant">{fund.type}</td>
                    <td className="px-6 py-5 text-center">
                      <span className={`px-2 py-1 text-[10px] uppercase font-bold rounded-sm ${
                        fund.risk === "High"
                          ? "bg-error-container text-error"
                          : fund.risk === "Moderate"
                          ? "bg-secondary-container/20 text-secondary"
                          : "bg-primary-container text-primary"
                      }`}>
                        {fund.risk}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right font-data-point text-muted-foreground">{fund.nav}</td>
                    <td className="px-6 py-5 text-right font-data-point text-success-green">{fund.ytd}</td>
                    <td className="px-6 py-5 text-center">
                      <button className="text-secondary hover:underline font-section-label text-xs uppercase tracking-widest">
                        Explore
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Top Performing Funds Tabbed */}
      <section className="ace-section bg-background">
        <div className="ace-container">
          <TopFundsTabbed />
        </div>
      </section>

      {/* Interactive Growth Projection Tool */}
      <section className="ace-section bg-surface-container-lowest border-y border-border">
        <div className="ace-container">
          <MutualFundsCalculator />
        </div>
      </section>

      {/* Pillars / Features */}
      <section className="ace-section bg-background">
        <div className="ace-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 flex items-center justify-center bg-primary-container text-secondary rounded">
                <span className="material-symbols-outlined">analytics</span>
              </div>
              <h3 className="font-headline-lg text-2xl text-foreground uppercase">Expert Management</h3>
              <p className="text-on-surface-variant font-body-md leading-relaxed">
                Our portfolio managers leverage over 25 years of institutional experience, combining traditional fundamental analysis with ACE's proprietary quantitative signals.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 flex items-center justify-center bg-primary-container text-secondary rounded">
                <span className="material-symbols-outlined">pie_chart</span>
              </div>
              <h3 className="font-headline-lg text-2xl text-foreground uppercase">Asset Allocation</h3>
              <p className="text-on-surface-variant font-body-md leading-relaxed">
                Dynamic rebalancing ensures your capital is always positioned in the highest probability sectors while maintaining strict risk-adjusted volatility boundaries.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 flex items-center justify-center bg-primary-container text-secondary rounded">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <h3 className="font-headline-lg text-2xl text-foreground uppercase">Robust Performance</h3>
              <p className="text-on-surface-variant font-body-md leading-relaxed">
                ACE Capital funds have consistently outperformed benchmarks across market cycles, focusing on capital preservation during downturns and alpha capture in rallies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Market Research Section */}
      <section className="ace-section border-t border-border">
        <div className="ace-container bg-surface-container-low border border-border p-12 rounded relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 blur-[100px] pointer-events-none"></div>
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="max-w-xl space-y-4">
              <h2 className="font-headline-lg text-3xl uppercase text-foreground">Deep Market Views</h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Stay ahead of global shifts with our institutional-grade market commentary, updated daily by our chief investment strategists.
              </p>
            </div>
            <button className="inline-flex items-center gap-3 bg-secondary text-on-secondary-fixed px-6 py-3 md:px-8 md:py-4 font-bold uppercase tracking-widest text-xs md:text-sm hover:brightness-110 active:scale-95 transition-all rounded">
              Access Research
              <span className="material-symbols-outlined">description</span>
            </button>
          </div>
        </div>
      </section>

      {/* Document downloads */}
      <section className="ace-section bg-surface-container-lowest border-y border-border">
        <div className="ace-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reports.map((rep, idx) => (
              <div key={idx} className="ace-card p-8 group hover:border-secondary transition-all rounded cursor-pointer">
                <p className="font-section-label text-secondary mb-2 text-xs">{rep.tag}</p>
                <h4 className="font-headline-lg text-lg uppercase mb-4 text-foreground group-hover:text-secondary transition-colors">
                  {rep.title}
                </h4>
                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">{rep.desc}</p>
                <span className="text-muted-foreground group-hover:text-secondary transition-colors material-symbols-outlined">
                  download
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="ace-section bg-background border-t border-border">
        <div className="ace-container">
          <ProductsGrid />
        </div>
      </section>

      {/* Mutual Funds FAQ Accordion */}
      <FAQSection
        title="Mutual Fund FAQ"
        subtitle="Common inquiries regarding our institutional-grade investment vehicles."
        items={fundsFAQs}
      />
    </>
  )
}
