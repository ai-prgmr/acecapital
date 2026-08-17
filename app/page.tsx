import { Metadata } from "next"
import Link from "next/link"
import FAQSection from "@/components/FAQSection"

export const metadata: Metadata = {
  title: "ACE CAPITAL ENTERPRISE | Leading Proprietary Trading Firm",
  description: "Experience Institutional Alpha Through Precision. Ace Capital Enterprise is a leading proprietary trading firm utilizing HFT desks, quantitative research, and expert asset management.",
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  const homeFAQs = [
    {
      question: "What is the history of Ace Capital Enterprise?",
      answer: "Founded on the principles of mathematical rigor and market efficiency, Ace Capital Enterprise has evolved from a boutique quantitative desk into a global institutional powerhouse, delivering precision-engineered capital strategies for over a decade.",
    },
    {
      question: "What range of services do you offer?",
      answer: "We provide a comprehensive suite of financial instruments including proprietary trading desks, automated execution engines with ultra-low latency, tailored portfolio construction, and diversified mutual fund strategies.",
    },
    {
      question: "How can I get started with Ace Capital?",
      answer: "Institutional clients and high-net-worth individuals can begin by clicking 'Connect Now' or 'Contact Us' to schedule a consultation with our relationship management team. We follow a rigorous onboarding process to ensure alignment with your financial objectives.",
    },
    {
      question: "How do I start?",
      answer: "Just get in touch. We'll understand what you're saving for, help you finish a quick one-time sign-up, and you can start the same day — all online, no paperwork.",
    },
    {
      question: "What is this “KYC” I have to do?",
      answer: "It's a simple, one-time ID check that every investor does once. You'll just need your PAN card, an address proof and a bank account — and we'll help you finish it online in minutes.",
    },
    {
      question: "How much do I need to start?",
      answer: "Not much at all. You can begin with as little as ₹500 a month, or put in a larger amount whenever you like. Start small and grow it as you get comfortable.",
    },
    {
      question: "Can I take my money out whenever I want?",
      answer: "With most funds, yes — take out part or all of it whenever you need, and it reaches your bank in a few working days. A few funds ask you to stay invested for a fixed period, and we'll always tell you that before you invest.",
    },
    {
      question: "Is my money safe with you?",
      answer: "Your money never stays with us. It goes straight to the fund company, and your investment is recorded in your name with an official record-keeper. We help you invest and look after it — but it always belongs to you. Do keep in mind that funds move up and down with the market, so their value can change.",
    },
    {
      question: "Do you charge me anything?",
      answer: "No, you don't pay us a fee. We earn a small commission from the fund company when you invest — so our help and support cost you nothing extra.",
    },
    {
      question: "Which funds should I pick?",
      answer: "We'll help you shortlist funds that match what you're saving for, how long you can stay invested, and how much ups-and-downs you're okay with — explained in plain words. The final call is always yours.",
    },
    {
      question: "What returns will I get?",
      answer: "No one can promise a number — and it's wise to be careful of anyone who does. Your returns depend on the market and the funds you choose. What we promise is to help you invest sensibly and stay on track. (How a fund did in the past isn't a guarantee for the future.)",
    },
    {
      question: "How do I keep an eye on my investments?",
      answer: "You'll see everything in one simple view and get regular statements. And you can always call us for a quick, plain-English update on how things are going.",
    },
    {
      question: "What if I have a question or a complaint?",
      answer: "Just write to us at support@acecapital.com — we're always happy to help. If something stays unresolved, you can take it further to the fund company, and then to the regulators (AMFI and SEBI).",
    },
  ]

  // AEO/SEO Organization Schema
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://acecapitalenterprise.com/#organization",
        "name": "Ace Capital Enterprise",
        "url": "https://acecapitalenterprise.com",
        "logo": "https://acecapitalenterprise.com/logo.png",
        "description": "Leading proprietary trading company with a sharp focus on innovation and excellence in global financial markets.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
          "addressCountry": "India"
        },
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61566740426997",
          "https://x.com/acecapitalent",
          "https://www.linkedin.com/company/ace-capital-enterprise/"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://acecapitalenterprise.com/#website",
        "url": "https://acecapitalenterprise.com",
        "name": "Ace Capital Enterprise",
        "publisher": {
          "@id": "https://acecapitalenterprise.com/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://acecapitalenterprise.com/#webpage",
        "url": "https://acecapitalenterprise.com",
        "name": "ACE CAPITAL ENTERPRISE | Leading Proprietary Trading Firm",
        "description": "Experience Institutional Alpha Through Precision. Ace Capital Enterprise is a leading proprietary trading firm utilizing HFT desks, quantitative research, and expert asset management.",
        "isPartOf": {
          "@id": "https://acecapitalenterprise.com/#website"
        },
        "about": {
          "@id": "https://acecapitalenterprise.com/#organization"
        }
      }
    ]
  }

  return (
    <>
      {/* AEO Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
            style={{
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA-Ltn-GH1h9YRQht4CbsnepFyYMrnkpQNwiELBKYhp0n-tJLmXLGpSmACasxyD4akik_tet8JWpn50FMGXk8bysG2STeqmGpWF_RuxVzRQdWx1JKXl_ZcTrMfOxrgaP7lsXsYofbJyypvYTCHptSSCo9dPiAAihZoVYOcYD6e7q8YkEsI8LowmXK2OxX2BpjWAg2MCXCKrohRpWlNEV5ibFw-rsV364Iy5ukM13qwBxxZs87svxPo')",
            }}
          ></div>
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        <div className="relative z-10 ace-container text-center space-y-8">
          <div className="inline-block px-4 py-1 border-l-2 border-secondary bg-primary-container">
            <span className="font-section-label text-section-label uppercase tracking-[0.3em] text-secondary">
              Wealth Management
            </span>
          </div>
          <h1 className="font-display-hero text-5xl md:text-6xl lg:text-7xl uppercase leading-tight text-foreground max-w-5xl mx-auto">
            LEADING <span className="text-secondary italic">MUTUAL FUND</span> DISTRIBUTOR IN INDIA
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Empowering your financial journey with expert mutual fund distribution and personalized wealth strategies for modern market participants.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link
              href="https://mf.acecapitalenterprise.com" target="_blank"
              className="w-full sm:w-auto bg-secondary text-on-secondary-fixed px-6 py-3.5 md:px-8 md:py-4 font-section-label text-xs md:text-sm uppercase font-bold tracking-widest hover:brightness-110 active:scale-95 transition-all text-center rounded-sm"
            >
              Start Investing
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto border border-silver px-6 py-3.5 md:px-8 md:py-4 font-section-label text-xs md:text-sm uppercase font-bold tracking-widest text-silver hover:bg-silver hover:text-background transition-all active:scale-95 text-center rounded-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </header>

      {/* Statistics Section */}
      <section className="bg-surface-container-lowest border-y border-border py-12">
        <div className="ace-container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <h4 className="font-display-hero text-4xl text-secondary">150Cr+</h4>
            <p className="font-section-label text-xs uppercase tracking-widest text-on-surface-variant">Total AUM</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-display-hero text-4xl text-secondary">1000+</h4>
            <p className="font-section-label text-xs uppercase tracking-widest text-on-surface-variant">Happy Clients</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-display-hero text-4xl text-secondary">18%</h4>
            <p className="font-section-label text-xs uppercase tracking-widest text-on-surface-variant">Fund Growth Rate</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-display-hero text-4xl text-secondary">100%</h4>
            <p className="font-section-label text-xs uppercase tracking-widest text-on-surface-variant">Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Partnered AMCs Marquee */}
      <section className="border-b border-border py-8 bg-background overflow-hidden relative">
        <div className="text-center mb-6">
          <p className="font-section-label text-xs uppercase tracking-widest text-muted-foreground">
            Trusted by Top Asset Management Companies
          </p>
        </div>
        
        <div className="flex w-full overflow-hidden group">
          <div className="flex animate-marquee whitespace-nowrap items-center gap-16 px-8">
            {["SBI Mutual Fund", "HDFC Mutual Fund", "ICICI Prudential", "Nippon India", "Axis Mutual Fund", "Kotak Mutual Fund", "DSP Mutual Fund", "Tata Mutual Fund"].map((amc, idx) => (
              <span key={`amc1-${idx}`} className="font-headline-lg text-xl md:text-2xl text-outline-variant hover:text-secondary transition-colors cursor-default select-none uppercase">
                {amc}
              </span>
            ))}
          </div>
          <div className="flex animate-marquee whitespace-nowrap items-center gap-16 px-8" aria-hidden="true">
            {["SBI Mutual Fund", "HDFC Mutual Fund", "ICICI Prudential", "Nippon India", "Axis Mutual Fund", "Kotak Mutual Fund", "DSP Mutual Fund", "Tata Mutual Fund"].map((amc, idx) => (
              <span key={`amc2-${idx}`} className="font-headline-lg text-xl md:text-2xl text-outline-variant hover:text-secondary transition-colors cursor-default select-none uppercase">
                {amc}
              </span>
            ))}
          </div>
        </div>
        
        {/* Gradients for smooth fade on edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent z-10"></div>
        
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
          .group:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}} />
      </section>

      {/* The ACE Mandate - Bento Grid */}
      <section className="ace-section ace-container">
        <div className="mb-16">
          <span className="font-section-label text-section-label uppercase tracking-widest text-primary">
            01 / WHO ARE WE
          </span>
          <h2 className="font-headline-lg text-headline-lg mt-4 uppercase">The ACE Mandate</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Card */}
          <div className="md:col-span-2 ace-card p-12 relative overflow-hidden group">
            <div className="relative z-10 space-y-6">
              <h3 className="font-headline-lg text-headline-lg uppercase text-secondary">
                Wealth Management Legacy
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Founded on the principles of deep market research and disciplined asset allocation, Ace Capital Enterprise provides the foundation for investors to build and preserve wealth across market cycles.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-[12rem] text-secondary">
                shield_with_heart
              </span>
            </div>
          </div>

          {/* Core pillar: Precision */}
          <div className="ace-card p-8 flex flex-col justify-between border-secondary/20 hover:border-secondary transition-colors duration-300">
            <span className="material-symbols-outlined text-secondary text-5xl">
              monitoring
            </span>
            <div className="space-y-2 mt-6">
              <h4 className="font-headline-lg text-xl uppercase">Smart Asset Allocation</h4>
              <p className="font-body-md text-on-surface-variant">
                Data-driven fund selection and rebalancing to optimize long-term returns.
              </p>
            </div>
          </div>

          {/* Core pillar: Secure Desks */}
          <div className="ace-card p-8 flex flex-col justify-between border-outline-variant/30 hover:border-secondary transition-colors duration-300">
            <span className="material-symbols-outlined text-primary text-5xl">
              security
            </span>
            <div className="space-y-2 mt-6">
              <h4 className="font-headline-lg text-xl uppercase">Secure Investments</h4>
              <p className="font-body-md text-on-surface-variant">
                Regulated, transparent, and compliant investment frameworks for peace of mind.
              </p>
            </div>
          </div>

          {/* Core pillar: Global Reach */}
          <div className="md:col-span-2 ace-card p-12 bg-primary-container">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6">
                <h4 className="font-headline-lg text-headline-lg uppercase">Diversified Portfolio</h4>
                <p className="font-body-md text-on-surface-variant">
                  Building resilient portfolios across equity, debt, hybrid, and alternative mutual funds.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  {["Equity", "Debt", "Hybrid", "Index Funds"].map((market) => (
                    <span
                      key={market}
                      className="px-3 py-1 bg-surface-container-highest font-data-point text-data-point text-primary text-xs"
                    >
                      {market}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-outline-variant/30 flex items-center justify-center p-4">
                <span className="material-symbols-outlined text-6xl text-secondary animate-pulse">
                  pie_chart
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Solutions Services Section */}
      <section className="bg-surface-container-lowest ace-section">
        <div className="ace-container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="font-section-label text-section-label uppercase tracking-widest text-primary">
                02 / SERVICES
              </span>
              <h2 className="font-headline-lg text-headline-lg mt-4 uppercase">
                Specialized Solutions
              </h2>
            </div>
            <p className="font-body-md text-on-surface-variant max-w-md">
              We offer a comprehensive suite of financial instruments and platforms designed for the professional tier of capital management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1: Mutual Funds & Investments */}
            <Link
              href="/mutual-funds-investments"
              className="group relative h-96 overflow-hidden border border-outline-variant/30 hover:border-secondary transition-colors duration-500 block rounded"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDWjN5adXnTzNeNduCADSKX9qxmoDJW60Vcs5EdjvQv1nSkNaQk177KMXTk0ae8M-c9wDjuWdGv4ub5VDMbFHF-i2NQUMlsT2f2L0dURoiCA8aeWRdjnxuwm7iz8SP2MwasrAVGG5ip37ovSjZXBbyttCxnOB3-kCPREpBAsePX8CYxkoAP7xfKvz6cU00zJTSfLR4Ye0pbeStIrS8AVktkFUK7x4vjo4zD-lEj0TkoNfPfJ04ZzQs')",
                }}
              ></div>
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                <h5 className="font-headline-lg text-headline-lg-mobile uppercase text-white mb-4">
                  Mutual Funds & Investments
                </h5>
                <p className="font-body-md text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Diversified exposure and tailored portfolio construction across equity and debt markets with professional risk control.
                </p>
                <div className="h-1 w-0 bg-secondary mt-4 group-hover:w-full transition-all duration-700"></div>
              </div>
            </Link>

            {/* Service 2: Prop Trading & Automated */}
            <Link
              href="/prop-trading-automated"
              className="group relative h-96 overflow-hidden border border-outline-variant/30 hover:border-secondary transition-colors duration-500 block rounded"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBK0Idnd2zSyXrl390wnGakpUtRxug7HIHIQFjYAugO2QkHSLyKoV2Ghfki9GVL-wa88h1xUndU7rXybR6XGx8AYVrurdJB6xUBI8J4IBULBYlQ9rGu242dDFFSvLAJtUJKZhmx_qilkL4KmAgRyztfMhPjRIU5LNKZRWUA6neI0pbzb-3o0kMuvAgfTiF13PzQoUuCfnxfOQKhCj3KYWMEOmqSz8C-pFgigZgZRlCU4lGoWDceHLI')",
                }}
              ></div>
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                <h5 className="font-headline-lg text-headline-lg-mobile uppercase text-white mb-4">
                  Prop Trading & Auto Desks
                </h5>
                <p className="font-body-md text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Leverage our institutional capital and automated execution engines with ultra-low latency co-location.
                </p>
                <div className="h-1 w-0 bg-secondary mt-4 group-hover:w-full transition-all duration-700"></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="ace-section ace-container bg-background">
        <div className="text-center mb-16">
          <span className="font-section-label text-section-label uppercase tracking-widest text-primary">
            03 / TRUST
          </span>
          <h2 className="font-headline-lg text-headline-lg mt-4 uppercase">
            WHAT OUR CUSTOMERS SAY
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Testimonial 1 */}
          <div className="ace-card p-12 border-l-4 border-l-secondary rounded-r">
            <span className="material-symbols-outlined text-secondary text-4xl mb-6">
              format_quote
            </span>
            <p className="font-body-lg text-body-lg italic text-on-surface mb-8">
              "The execution speed and reliability of ACE's proprietary desks have fundamentally changed how our fund operates. Their institutional support is second to none."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-muted flex items-center justify-center font-bold text-primary uppercase rounded-sm">
                AM
              </div>
              <div>
                <div className="font-data-point text-data-point text-foreground uppercase text-sm">
                  Aria Montgomery
                </div>
                <div className="font-section-label text-section-label text-outline uppercase text-xs">
                  Managing Partner, Alpha Group
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="ace-card p-12 border-l-4 border-l-primary rounded-r">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">
              format_quote
            </span>
            <p className="font-body-lg text-body-lg italic text-on-surface mb-8">
              "Precision is the word that defines Ace Capital. From the onboarding to the daily reporting, every touchpoint exudes professional excellence."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-muted flex items-center justify-center font-bold text-primary uppercase rounded-sm">
                SK
              </div>
              <div>
                <div className="font-data-point text-data-point text-foreground uppercase text-sm">
                  Siddharth Kapoor
                </div>
                <div className="font-section-label text-section-label text-outline uppercase text-xs">
                  Private Wealth Client
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-muted-foreground text-xs tracking-widest hidden md:block select-none">
          ________________________________________________________________________________
        </div>
      </section>

      {/* Certifications & Licenses */}
      <section className="ace-section ace-container">
        <div className="text-center mb-12">
          <span className="font-section-label text-section-label uppercase tracking-widest text-primary">
            04 / COMPLIANCE
          </span>
          <h2 className="font-headline-lg text-headline-lg mt-4 uppercase">
            LICENSES & REGISTRATIONS
          </h2>
          <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto mt-4">
            We adhere to the highest standards of regulatory compliance, ensuring your investments are secure and transparently managed.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="ace-card p-8 flex flex-col items-center text-center border-t-4 border-t-primary">
            <span className="material-symbols-outlined text-4xl text-primary mb-4">gavel</span>
            <h3 className="font-headline-lg text-xl uppercase mb-2">AMFI Certified</h3>
            <p className="font-section-label text-xs text-on-surface-variant uppercase tracking-widest">Reg No: AMFI-XXXXX</p>
          </div>
          <div className="ace-card p-8 flex flex-col items-center text-center border-t-4 border-t-secondary">
            <span className="material-symbols-outlined text-4xl text-secondary mb-4">policy</span>
            <h3 className="font-headline-lg text-xl uppercase mb-2">ARN License</h3>
            <p className="font-section-label text-xs text-on-surface-variant uppercase tracking-widest">ARN: XXXXX</p>
          </div>
        </div>
      </section>

      {/* CTA Connect Section */}
      <section className="bg-primary-container ace-section relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-gutter text-center relative z-10 space-y-8">
          <h2 className="font-display-hero text-4xl md:text-5xl uppercase leading-tight text-foreground">
            Ready for Next-Tier <span className="text-secondary">Execution</span>?
          </h2>
          <p className="font-body-lg text-body-lg text-primary max-w-2xl mx-auto">
            Our support desk is operational 24/5 to match global market hours. Secure your institutional bridge today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              className="flex-grow bg-background border border-border text-foreground font-data-point px-4 py-3 focus:border-secondary outline-none rounded uppercase placeholder:text-muted-foreground text-sm"
              placeholder="ENTER WORK EMAIL"
              type="email"
            />
            <button className="bg-secondary text-on-secondary-fixed font-section-label font-bold uppercase tracking-widest px-6 py-3 md:px-8 md:py-4 text-xs md:text-sm hover:brightness-110 active:scale-95 transition-all rounded">
              CONNECT NOW
            </button>
          </div>
        </div>
      </section>

      {/* Home FAQs accordion (AEO Optimized) */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Founded on the principles of mathematical rigor and market efficiency."
        items={homeFAQs}
      />
    </>
  )
}
