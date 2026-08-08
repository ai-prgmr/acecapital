import { Metadata } from "next"
import FAQSection from "@/components/FAQSection"
import LatencyMonitor from "@/components/LatencyMonitor"

export const metadata: Metadata = {
  title: "Automated Trading Desks | ACE CAPITAL",
  description: "Deploy institutional-grade alpha via our proprietary HFT algorithmic ecosystem. Precision execution at sub-millisecond speeds.",
  alternates: {
    canonical: "/automated",
  },
}

export default function AutomatedTrading() {
  const techFAQs = [
    {
      question: "What is the average API execution latency?",
      answer: "Our proprietary execution engine maintains a sub-0.05ms internal latency. When combined with our direct exchange cross-connects in Equinix LD4 and NY4, total round-trip execution typically remains under 0.2ms for major liquidity pools.",
    },
    {
      question: "How does the neural analytics layer optimize trades?",
      answer: "The neural layer utilizes deep reinforcement learning to adjust execution parameters in real-time. It identifies shifting volatility regimes and liquidity imbalances, automatically tuning slippage tolerance and order slicing logic.",
    },
    {
      question: "Which exchanges are supported for automated routing?",
      answer: "We provide native connectivity to LSE, NYSE, CME, EUREX, and major dark pools. Our infrastructure supports FIX 4.2/4.4 and binary protocols for ultra-high-speed data ingestion and order entry.",
    },
    {
      question: "What redundancy measures are in place for the infrastructure?",
      answer: "Our architecture features triple-redundant hot-failover nodes. In the event of a primary gateway failure, the system migrates active state to a secondary node within 10 microseconds, ensuring zero-loss trade persistence.",
    },
  ]

  const tickerItems = [
    { pair: "BTC/INR", price: "₹54,24,500", diff: "+2.45%", isUp: true },
    { pair: "NIFTY 50", price: "₹24,350", diff: "+0.12%", isUp: true },
    { pair: "ETH/INR", price: "₹2,84,600", diff: "-1.04%", isUp: false },
    { pair: "GOLD 24K", price: "₹72,400", diff: "+0.89%", isUp: true },
    { pair: "SENSEX", price: "₹79,850", diff: "+1.56%", isUp: true },
  ]

  const automatedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://acecapitalenterprise.com/automated/#webpage",
        "url": "https://acecapitalenterprise.com/automated",
        "name": "Automated Trading Desks | ACE CAPITAL",
        "description": "Deploy institutional-grade alpha via our proprietary HFT algorithmic ecosystem. Precision execution at sub-millisecond speeds.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://acecapitalenterprise.com/#website",
          "url": "https://acecapitalenterprise.com",
          "name": "Ace Capital Enterprise"
        }
      },
      {
        "@type": "Service",
        "@id": "https://acecapitalenterprise.com/automated/#service",
        "name": "Automated Trading Desks",
        "description": "Deploy institutional-grade alpha via our proprietary HFT algorithmic ecosystem. Precision execution at sub-millisecond speeds.",
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
        "@id": "https://acecapitalenterprise.com/automated/#faq",
        "isPartOf": {
          "@id": "https://acecapitalenterprise.com/automated/#webpage"
        },
        "mainEntity": techFAQs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(automatedSchema) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center overflow-hidden bg-background">
        <div className="absolute inset-0 z-0 border-b border-border/30 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
        <div className="container mx-auto px-gutter relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-container border border-primary/20 rounded-full">
              <span className="w-2 h-2 rounded-full bg-success-green animate-pulse"></span>
              <span className="font-section-label text-xs uppercase tracking-widest text-primary">
                Live Institutional Access
              </span>
            </div>
            <h1 className="font-display-hero text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground uppercase">
              AUTOMATED <br />
              <span className="text-secondary glow-gold">TRADING DESKS</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Deploy institutional-grade alpha via our proprietary algorithmic ecosystem. Execution at sub-millisecond speeds, managed by neural-enhanced data analytics.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-6 py-3 md:px-8 md:py-4 bg-secondary text-on-secondary-fixed font-bold font-section-label tracking-widest text-xs md:text-sm hover:brightness-110 active:scale-95 transition-all uppercase rounded">
                Deploy Algorithm
              </button>
              <button className="px-6 py-3 md:px-8 md:py-4 border border-outline text-muted-foreground font-bold font-section-label tracking-widest text-xs md:text-sm hover:bg-muted active:scale-95 transition-all uppercase rounded">
                View Performance
              </button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 border border-outline-variant/30 rounded"></div>
            <div className="relative ace-card p-6 rounded overflow-hidden">
              <img
                className="w-full h-auto rounded"
                alt="Automated Trading Systems"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVU6D1GBMMuS5qm5oSP2uNIw2B9FQbQ_9hbyzRMi4GWeEenjVg7KVQCxP_5RLKUdfubJ7s7YZCnh5Wivva2jHz7pDk7cEWcUXfrdL6cTasWHT1izbkIt-5LNJMXgfzgtP0ZvlbJKnfBM42OdFJkPV8tFbVzRUJgs3IuOa3rT2SesylSM27afOSqEsHU7mZB5LhqLVtSy7jhst8wKUyW8KcwLZ19wkEnXjsFi-sqz-UfL-RBi1WjSs"
              />
              <LatencyMonitor />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Ticker */}
      <div className="w-full bg-surface-container-low border-y border-outline-variant/10 py-3 overflow-hidden select-none">
        <div className="flex whitespace-nowrap gap-12 items-center justify-center animate-pulse">
          <div className="flex items-center gap-8 font-data-point text-xs uppercase tracking-tighter">
            {tickerItems.map((item, idx) => (
              <span key={idx} className="text-on-surface-variant flex items-center gap-2">
                {item.pair}: <span className="text-foreground">{item.price}</span>{" "}
                <span className={item.isUp ? "text-success-green" : "text-error-red"}>
                  {item.diff}
                </span>
                {idx < tickerItems.length - 1 && <span className="text-border ml-6">|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bento Grid: The Core Architecture */}
      <section className="ace-section ace-container border-t border-border">
        <div className="mb-16">
          <p className="font-section-label text-secondary mb-2 tracking-[0.4em] uppercase">
            Architecture
          </p>
          <h2 className="font-headline-lg text-headline-lg text-foreground uppercase">
            PRECISION ENGINEERING FOR THE MARKETS
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-6">
          {/* High Frequency Execution */}
          <div className="md:col-span-8 ace-card p-8 flex flex-col justify-between group overflow-hidden rounded">
            <div className="space-y-6">
              <span className="material-symbols-outlined text-secondary text-4xl">
                bolt
              </span>
              <h3 className="font-headline-lg text-2xl uppercase">ULTRA-LOW LATENCY EXECUTION</h3>
              <p className="font-body-md text-on-surface-variant max-w-md leading-relaxed">
                Our direct exchange cross-connects ensure your orders are executed before the market reacts. Micro-second precision in every tick.
              </p>
            </div>
            <div className="mt-12 h-48 relative overflow-hidden rounded border border-border bg-primary-container">
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                alt="Liquid cooling hardware"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHBkV8-QRX7vd-98cPWgmY3tbATFsyPIATEp2Vgb7JyrIQ2mOCYtZNr4KLXXRtVu7A6BcDuiax6I2EF1OZAqthQOrFTCIa2twEAEJj0K2Oc2srotRksnT2ZCoaDMJB8SSsacgphE1BaJj0FoihZcixDMx43qGpYRXzZKZVXZUPZQ0pi_S6WDGqdVUJhezRbhaL1NSNPRPeFAIVbbBmmWE4lp8Na8OyAds0ybYSwahJU8ZYqAV8AtQ"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
            </div>
          </div>

          {/* AI Neural Models */}
          <div className="md:col-span-4 bg-surface-container p-8 border border-outline-variant/30 flex flex-col items-center justify-center text-center rounded">
            <span className="material-symbols-outlined text-primary text-6xl mb-6">
              neurology
            </span>
            <h3 className="font-headline-lg text-xl uppercase mb-4 text-foreground">NEURAL ANALYTICS</h3>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Self-optimizing models that adapt to changing volatility regimes in real-time.
            </p>
            <div className="mt-8 pt-8 border-t border-outline-variant/20 w-full">
              <p className="font-data-point text-secondary text-sm">99.8% Prediction Accuracy</p>
            </div>
          </div>

          {/* Risk Management */}
          <div className="md:col-span-4 bg-surface-container-low p-8 border border-outline-variant/30 group rounded flex flex-col justify-between">
            <div className="space-y-6">
              <span className="material-symbols-outlined text-secondary text-3xl">
                security
              </span>
              <h3 className="font-headline-lg text-xl uppercase text-foreground">INSTITUTIONAL RISK</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Tier-1 risk protocols with automated stop-losses and dynamic position sizing baked into the core kernel.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <div className="h-1 bg-outline-variant w-full overflow-hidden">
                <div className="h-full bg-secondary w-3/4 animate-pulse"></div>
              </div>
              <div className="flex justify-between font-data-point text-[10px] text-outline">
                <span>RISK CAP</span>
                <span>ACTIVE PROTECTION</span>
              </div>
            </div>
          </div>

          {/* Global Markets */}
          <div className="md:col-span-8 ace-card p-8 flex flex-col md:flex-row gap-8 items-center overflow-hidden group rounded">
            <div className="flex-1 space-y-6">
              <span className="material-symbols-outlined text-primary text-3xl">
                public
              </span>
              <h3 className="font-headline-lg text-xl uppercase text-foreground">GLOBAL ASSET COVERAGE</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                From Forex and Commodities to high-liquidity Equities, our desks operate across all major global exchanges 24/7.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Forex", "Indices", "Metals", "Energy"].map((asset) => (
                  <span
                    key={asset}
                    className="px-2 py-1 bg-muted text-primary font-section-label text-[10px] uppercase font-bold"
                  >
                    {asset}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-1 h-48 w-full rounded border border-outline-variant/20 overflow-hidden relative flex items-end p-6">
              <div className="absolute inset-0 bg-slate-900 opacity-60 z-0"></div>
              <div className="relative z-10 space-y-2">
                <p className="font-data-point text-xs text-secondary">ACTIVE CONNECTIONS</p>
                <p className="font-data-point text-xl text-foreground">LSE | NYSE | CME</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology consultation CTA */}
      <section className="relative ace-section overflow-hidden border-t border-border">
        <div className="absolute inset-0 bg-primary-container/30 z-0"></div>
        <div className="container mx-auto px-gutter relative z-10 text-center max-w-4xl space-y-8">
          <h2 className="font-headline-lg text-4xl md:text-5xl uppercase leading-tight text-foreground">
            READY TO ACHIEVE <br />{" "}
            <span className="text-secondary uppercase">Institutional Alpha?</span>
          </h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Request a consultation with our technology desk to see how ACE CAPITAL can optimize your trading performance through custom automated solutions.
          </p>
          <div className="pt-4">
            <button className="px-8 py-4 md:px-12 md:py-5 bg-secondary text-on-secondary-fixed font-bold font-section-label tracking-widest text-xs md:text-sm hover:scale-105 active:scale-95 transition-all uppercase rounded">
              Inquire Now
            </button>
          </div>
          <div className="pt-8 text-outline font-section-label tracking-[0.5em] opacity-40 text-xs">
            PRECISION . SPEED . SECURITY
          </div>
        </div>
      </section>

      {/* Tech FAQ component */}
      <FAQSection
        title="SYSTEM SPECIFICATIONS"
        subtitle="Technical details regarding execution latency, models, and exchanges."
        items={techFAQs}
      />
    </>
  )
}
