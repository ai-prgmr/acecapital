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
              Institutional Alpha
            </span>
          </div>
          <h1 className="font-display-hero text-5xl md:text-6xl lg:text-7xl uppercase leading-tight text-foreground max-w-5xl mx-auto">
            LEADING A WAY IN <span className="text-secondary italic">PROPRIETARY</span> TRADING
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Precision-engineered capital strategies and institutional-grade infrastructure for modern market participants. Experience the edge of Ace Capital Enterprise.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link
              href="/mutual-funds"
              className="w-full sm:w-auto bg-secondary text-on-secondary-fixed px-6 py-3.5 md:px-8 md:py-4 font-section-label text-xs md:text-sm uppercase font-bold tracking-widest hover:brightness-110 active:scale-95 transition-all text-center rounded-sm"
            >
              Transact Online
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
                Institutional Legacy
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Founded on the principles of mathematical rigor and market efficiency, Ace Capital Enterprise provides the foundation for traders and investors to excel in volatile global environments.
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
              <h4 className="font-headline-lg text-xl uppercase">Alpha Precision</h4>
              <p className="font-body-md text-on-surface-variant">
                Real-time risk management and execution excellence across desks.
              </p>
            </div>
          </div>

          {/* Core pillar: Secure Desks */}
          <div className="ace-card p-8 flex flex-col justify-between border-outline-variant/30 hover:border-secondary transition-colors duration-300">
            <span className="material-symbols-outlined text-primary text-5xl">
              security
            </span>
            <div className="space-y-2 mt-6">
              <h4 className="font-headline-lg text-xl uppercase">Secure Desks</h4>
              <p className="font-body-md text-on-surface-variant">
                Redundant infrastructure for zero-downtime algorithmic trading.
              </p>
            </div>
          </div>

          {/* Core pillar: Global Reach */}
          <div className="md:col-span-2 ace-card p-12 bg-primary-container">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6">
                <h4 className="font-headline-lg text-headline-lg uppercase">Global Reach</h4>
                <p className="font-body-md text-on-surface-variant">
                  Connecting local expertise with global liquidity across **40+ international markets**.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  {["NYSE", "NSE", "LSE", "HKEX"].map((market) => (
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
                  language
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Service 1: Prop Trading */}
            <Link
              href="/proprietary"
              className="group relative h-96 overflow-hidden border border-outline-variant/30 hover:border-secondary transition-colors duration-500 block"
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
                  Prop Trading
                </h5>
                <p className="font-body-md text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Leverage our institutional capital for high-frequency and macro strategies.
                </p>
                <div className="h-1 w-0 bg-secondary mt-4 group-hover:w-full transition-all duration-700"></div>
              </div>
            </Link>

            {/* Service 2: Auto Desks */}
            <Link
              href="/automated"
              className="group relative h-96 overflow-hidden border border-outline-variant/30 hover:border-secondary transition-colors duration-500 block"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD3IkhtI0Uzj22IX8Hwb8_5WvOhyP1LLRmGqMpVEx47wWjvGoSPZMfZdAf_VwwkPJA5qVKfVQsW8kdm3gGCbSS8Jw0CzLytKG3mrA-E6CBE1txg60_8cmQCnDRa-wi8ijAElNhU3pIVHG28Q-Oyb__VkhK6cYMdpjIEomLmIWJTqwPhqSE5Le5tFbCzRXR9X7FKSdD1FHeA6X03krxGJBaafOhX3k2SGdqr0xx6DGOzMI6Gq7BZGek')",
                }}
              ></div>
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                <h5 className="font-headline-lg text-headline-lg-mobile uppercase text-white mb-4">
                  Auto Desks
                </h5>
                <p className="font-body-md text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Automated execution engines with ultra-low latency co-location.
                </p>
                <div className="h-1 w-0 bg-secondary mt-4 group-hover:w-full transition-all duration-700"></div>
              </div>
            </Link>

            {/* Service 3: Investments */}
            <Link
              href="/investments"
              className="group relative h-96 overflow-hidden border border-outline-variant/30 hover:border-secondary transition-colors duration-500 block"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAy6mUZlPCy_8_4b6IbDLLdxJFAiIvRKJnfSQpUcEG4FlH211m1oZ9ah62suZnoqBoPHc4BPpD-KpHz6-J05mt4QbL70hwxKbBEjr1dowTVktC7OVI1FXaUK5uCMnKeG4Qr5uOG0IUqUraZszCdGjT8Ep5ouckBs3NfmfF3-BiD8NNyziApff7aUhzGG3SObrO53TtWdI0dPMUKTLcc9jjr07ox76zN1pdSO-lxwcqyP1I8gB-WbBY')",
                }}
              ></div>
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                <h5 className="font-headline-lg text-headline-lg-mobile uppercase text-white mb-4">
                  Investments
                </h5>
                <p className="font-body-md text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Tailored portfolio construction across equity and debt markets.
                </p>
                <div className="h-1 w-0 bg-secondary mt-4 group-hover:w-full transition-all duration-700"></div>
              </div>
            </Link>

            {/* Service 4: Mutual Funds */}
            <Link
              href="/mutual-funds"
              className="group relative h-96 overflow-hidden border border-outline-variant/30 hover:border-secondary transition-colors duration-500 block"
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
                  Mutual Funds
                </h5>
                <p className="font-body-md text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Diversified exposure with professional oversight and risk control.
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
