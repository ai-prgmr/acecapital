import { Metadata } from "next"
import Link from "next/link"
import FAQSection from "@/components/FAQSection"
import InvestmentGoals from "@/components/InvestmentGoals"
import { HomepageCarousel } from "@/components/HomepageCarousel"

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

      {/* Homepage Carousel */}
      <HomepageCarousel />

      {/* Hero Section */}
      <header className="relative flex items-center justify-center pt-12 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        <div className="relative z-10 ace-container text-left space-y-6 pt-8">
          <div className="inline-block px-4 py-1.5 border border-secondary/20 bg-secondary/5 rounded-full">
            <span className="font-section-label text-[10px] font-bold uppercase tracking-widest text-secondary">
              Systematic, Simple, Personal
            </span>
          </div>
          <h1 className="font-display-hero text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground font-bold">
            Invest with clarity — your <span className="text-primary">trusted</span><br className="hidden md:block" /> mutual fund distributor in India.
          </h1>
          <p className="font-body-lg text-base md:text-lg text-muted-foreground max-w-3xl">
            New-age mutual fund investing with an old-fashioned personal touch. We help you choose<br className="hidden md:block" /> funds that fit your goals and guide you, in plain language, at every step.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-4">
            <Link
              href="https://mf.acecapitalenterprise.com" target="_blank"
              className="w-full sm:w-auto button-primary px-8 py-3.5 text-sm text-center rounded-md hover:brightness-110 active:scale-95 transition-all"
            >
              Start Investing
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-card border border-border text-foreground px-8 py-3.5 font-semibold text-sm hover:bg-muted transition-all active:scale-95 text-center rounded-md shadow-sm"
            >
              Talk to Us
            </Link>
          </div>
          <div className="pt-4">
            <p className="text-xs text-muted-foreground font-medium">
              AMFI-registered Mutual Fund Distributor (ARN-113576) &bull; Trusted by 150+ families since 2016
            </p>
          </div>
        </div>
      </header>

      {/* Partnered AMCs Marquee */}
      <section className="border-b border-border py-8 bg-background overflow-hidden relative">
        <div className="text-center mb-6">
          <p className="font-section-label text-sm tracking-widest text-muted-foreground">
            Empanelled with Leading Mutual Fund Houses
          </p>
        </div>

        <div className="flex w-full overflow-hidden group">
          <div className="flex animate-marquee whitespace-nowrap items-center gap-6 px-4">
            {[
              { file: "uti.webp", alt: "UTI", full: "UTI Mutual Fund" },
              { file: "nippon.png", alt: "NIMF", full: "Nippon India Mutual Fund" },
              { file: "axis.svg", alt: "AXIS", full: "Axis Mutual Fund" },
              { file: "absl.png", alt: "ABSL", full: "Aditya Birla Sun Life Mutual Fund" },
              { file: "franklin.png", alt: "FT", full: "Franklin Templeton Mutual Fund" },
              { file: "kotak.svg", alt: "KOTAK", full: "Kotak Mahindra Mutual Fund" },
              { file: "dsp.svg", alt: "DSP", full: "DSP Mutual Fund" },
              { file: "tata.svg", alt: "TATA", full: "Tata Mutual Fund" },
              { file: "bandhan.svg", alt: "BANDHAN", full: "Bandhan Mutual Fund (formerly IDFC)" },
              { file: "hdfc.svg", alt: "HDFC", full: "HDFC Mutual Fund" },
              { file: "sbi.svg", alt: "SBI", full: "SBI Mutual Fund" },
              { file: "icici.jpeg", alt: "ICICI", full: "ICICI Prudential Mutual Fund" },
              { file: "hsbc.svg", alt: "HSBC", full: "HSBC Mutual Fund" },
              { file: "ppfas.svg", alt: "PPFAS", full: "PPFAS Mutual Fund (Parag Parikh)" },
            ].map((amc, idx) => (
              <div key={`amc1-${idx}`} className="flex flex-col items-center justify-center w-56 p-3  hover:border-secondary transition-colors select-none">
                <img src={`/acecapital/logo/${amc.file}`} alt={amc.alt} className="w-full h-12 object-contain mb-2" />
                {/* <div className="text-[10px] text-center text-foreground font-semibold whitespace-normal leading-tight">
                  {amc.full}
                </div> */}
              </div>
            ))}
          </div>
          <div className="flex animate-marquee whitespace-nowrap items-center gap-6 px-4" aria-hidden="true">
            {[
              { file: "uti.webp", alt: "UTI", full: "UTI Mutual Fund" },
              { file: "nippon.png", alt: "NIMF", full: "Nippon India Mutual Fund" },
              { file: "axis.svg", alt: "AXIS", full: "Axis Mutual Fund" },
              { file: "absl.png", alt: "ABSL", full: "Aditya Birla Sun Life Mutual Fund" },
              { file: "franklin.png", alt: "FT", full: "Franklin Templeton Mutual Fund" },
              { file: "kotak.svg", alt: "KOTAK", full: "Kotak Mahindra Mutual Fund" },
              { file: "dsp.svg", alt: "DSP", full: "DSP Mutual Fund" },
              { file: "tata.svg", alt: "TATA", full: "Tata Mutual Fund" },
              { file: "bandhan.svg", alt: "BANDHAN", full: "Bandhan Mutual Fund (formerly IDFC)" },
              { file: "hdfc.svg", alt: "HDFC", full: "HDFC Mutual Fund" },
              { file: "sbi.svg", alt: "SBI", full: "SBI Mutual Fund" },
              { file: "icici.jpeg", alt: "ICICI", full: "ICICI Prudential Mutual Fund" },
              { file: "hsbc.svg", alt: "HSBC", full: "HSBC Mutual Fund" },
              { file: "ppfas.svg", alt: "PPFAS", full: "PPFAS Mutual Fund (Parag Parikh)" },
            ].map((amc, idx) => (
              <div key={`amc2-${idx}`} className="flex flex-col items-center justify-center w-56  p-3 hover:border-secondary transition-colors select-none">
                <img src={`/acecapital/logo/${amc.file}`} alt={amc.alt} className="w-full h-12 object-contain mb-2" />
                {/* <div className="text-[10px] text-center text-foreground font-semibold whitespace-normal leading-tight">
                  {amc.full}
                </div> */}
              </div>
            ))}
          </div>
        </div>

        {/* Gradients for smooth fade on edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-linear-to-r from-background to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-linear-to-l from-background to-transparent z-10"></div>

        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 35s linear infinite;
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
              <h2 className="font-headline-lg text-headline-lg mt-4 uppercase text-foreground">
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
              className="group relative h-72 flex flex-col justify-between overflow-hidden border border-border bg-card hover:border-secondary transition-colors duration-500 rounded p-8 glass-card shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <span className="material-symbols-outlined text-2xl">monitoring</span>
              </div>
              <div>
                <h5 className="font-headline-lg text-headline-lg-mobile uppercase text-foreground mb-4">
                  Mutual Funds & Investments
                </h5>
                <p className="font-body-md text-muted-foreground">
                  Diversified exposure and tailored portfolio construction across equity and debt markets with professional risk control.
                </p>
                <div className="h-1 w-8 bg-secondary mt-6 group-hover:w-full transition-all duration-700"></div>
              </div>
            </Link>

            {/* Service 2: Prop Trading & Automated */}
            <Link
              href="/prop-trading-automated"
              className="group relative h-72 flex flex-col justify-between overflow-hidden border border-border bg-card hover:border-secondary transition-colors duration-500 rounded p-8 glass-card shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <span className="material-symbols-outlined text-2xl">memory</span>
              </div>
              <div>
                <h5 className="font-headline-lg text-headline-lg-mobile uppercase text-foreground mb-4">
                  Prop Trading & Auto Desks
                </h5>
                <p className="font-body-md text-muted-foreground">
                  Leverage our institutional capital and automated execution engines with ultra-low latency co-location.
                </p>
                <div className="h-1 w-8 bg-secondary mt-6 group-hover:w-full transition-all duration-700"></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* NRI Investors Section */}
      <section className="ace-section bg-primary text-primary-foreground">
        <div className="ace-container">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <div>
                <span className="font-section-label text-xs uppercase tracking-widest text-secondary font-bold">
                  NRI Desk
                </span>
                <h2 className="font-display-hero text-4xl md:text-5xl uppercase leading-tight mt-4">
                  Global Wealth, <br /><span className="text-secondary">Indian Roots</span>
                </h2>
              </div>
              <p className="font-body-lg text-primary-foreground/80 max-w-xl">
                Distance shouldn't distance you from India's growth story. Our specialized NRI desk simplifies mutual fund investing, ensuring your cross-border wealth grows with trust, simplicity, and absolute ease.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="space-y-3">
                  <span className="material-symbols-outlined text-3xl text-secondary">public</span>
                  <h4 className="font-headline-lg text-lg uppercase">100% Digital Onboarding</h4>
                  <p className="font-body-sm text-primary-foreground/70">Complete your KYC and start investing from anywhere in the world without a single physical document.</p>
                </div>
                <div className="space-y-3">
                  <span className="material-symbols-outlined text-3xl text-secondary">account_balance</span>
                  <h4 className="font-headline-lg text-lg uppercase">NRE & NRO Ready</h4>
                  <p className="font-body-sm text-primary-foreground/70">Seamless integration with your repatriable and non-repatriable bank accounts for smooth transfers.</p>
                </div>
                <div className="space-y-3">
                  <span className="material-symbols-outlined text-3xl text-secondary">support_agent</span>
                  <h4 className="font-headline-lg text-lg uppercase">Global Timezone Support</h4>
                  <p className="font-body-sm text-primary-foreground/70">Dedicated relationship managers available at times that work for you, not just IST.</p>
                </div>
                <div className="space-y-3">
                  <span className="material-symbols-outlined text-3xl text-secondary">security</span>
                  <h4 className="font-headline-lg text-lg uppercase">Tax-Optimized Guidance</h4>
                  <p className="font-body-sm text-primary-foreground/70">Navigate DTAA and cross-border taxation complexities with our expert advisory network.</p>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href="/contact"
                  className="inline-block bg-secondary text-primary-foreground px-8 py-4 font-semibold text-sm hover:brightness-110 active:scale-95 transition-all text-center rounded-md"
                >
                  Speak to an NRI Advisor
                </Link>
              </div>
            </div>

            <div className="flex-1 w-full relative">
              <div className="aspect-square max-w-md mx-auto relative group perspective-1000">
                {/* Visual Graphic */}
                <div className="absolute inset-0 bg-secondary rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                <div className="w-full h-full border border-white/10 rounded-[3rem] bg-white/5 backdrop-blur-sm p-8 flex flex-col items-center justify-center relative overflow-hidden transform group-hover:rotate-y-12 transition-transform duration-700 shadow-2xl">
                  <span className="material-symbols-outlined text-9xl text-white/50 mb-8 group-hover:-translate-y-4 transition-transform duration-700">flight_takeoff</span>
                  <div className="text-center space-y-2 relative z-10">
                    <div className="text-5xl font-display-hero text-white">15+</div>
                    <div className="text-sm uppercase tracking-widest text-primary-foreground/70">Countries Served</div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute top-10 left-10 w-24 h-24 border border-secondary/30 rounded-full"></div>
                  <div className="absolute bottom-10 right-10 w-40 h-40 border border-secondary/30 rounded-full"></div>
                  <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Goals Bento Box */}
      <InvestmentGoals />

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
            <p className="font-section-label text-xs text-on-surface-variant uppercase tracking-widest">Reg No: ARN-113576</p>
          </div>
          <div className="ace-card p-8 flex flex-col items-center text-center border-t-4 border-t-secondary">
            <span className="material-symbols-outlined text-4xl text-secondary mb-4">policy</span>
            <h3 className="font-headline-lg text-xl uppercase mb-2">EUIN Number(AMFI)</h3>
            <p className="font-section-label text-xs text-on-surface-variant uppercase tracking-widest">E199470</p>
          </div>
        </div>
      </section>

      {/* App Download - Bento Style */}
      <section className="ace-section ace-container">
        <div className="text-center mb-12">
          <span className="font-section-label text-section-label uppercase tracking-widest text-secondary">
            05 / PLATFORM
          </span>
          <h2 className="font-headline-lg text-headline-lg mt-4 uppercase text-foreground">
            THE ACE EXPERIENCE
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main App CTA Card */}
          <div className="md:col-span-2 bg-card border border-border rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between overflow-hidden relative group">
            {/* Text content */}
            <div className="z-10 flex-1 space-y-6">
              <h2 className="font-display-hero text-3xl md:text-5xl uppercase leading-tight text-foreground">
                Invest Anywhere,<br></br> <span className="text-primary">Anytime</span>
              </h2>
              <p className="font-body-md text-muted-foreground max-w-md">
                Download the Ace Capital app to track your mutual funds, automate SIPs, and access institutional-grade insights on the go.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="button-primary px-5 py-2.5 rounded-lg flex items-center gap-2">
                  <span className="material-symbols-outlined text-3xl">apple</span>
                  <div className="text-left flex flex-col">
                    <span className="text-[9px] leading-none uppercase tracking-wider">Download on the</span>
                    <span className="text-sm font-bold leading-none mt-1">App Store</span>
                  </div>
                </button>
                <button className="bg-foreground text-background px-5 py-2.5 rounded-lg flex items-center gap-2 hover:opacity-90 transition-colors">
                  <span className="material-symbols-outlined text-3xl">shop</span>
                  <div className="text-left flex flex-col">
                    <span className="text-[9px] leading-none uppercase tracking-wider">GET IT ON</span>
                    <span className="text-sm font-bold leading-none mt-1">Google Play</span>
                  </div>
                </button>
              </div>
            </div>
            {/* Mockup Placeholder */}
            <div className="w-full md:w-auto h-64 md:h-full relative mt-10 md:mt-0 flex justify-center md:justify-end">
              <div className="w-56 h-125 bg-background border-8 border-foreground/90 rounded-[2.5rem] shadow-2xl absolute -bottom-32 md:-bottom-48 md:right-0 group-hover:-translate-y-4 transition-transform duration-500 overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-6 bg-foreground/90 rounded-b-2xl opacity-10 mx-auto w-32 z-20"></div>
                <div className="p-4 bg-muted h-full flex flex-col gap-4 relative z-10">
                  <div className="h-32 bg-primary rounded-xl flex flex-col justify-end p-4 text-primary-foreground">
                    <span className="text-xs opacity-80 uppercase tracking-widest">Total Value</span>
                    <span className="text-2xl font-bold">₹12,45,000</span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-16 bg-card rounded-xl border border-border shadow-sm flex items-center p-3 gap-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-full"></div>
                      <div className="flex-1">
                        <div className="h-3 w-20 bg-muted-foreground/30 rounded mb-2"></div>
                        <div className="h-2 w-12 bg-muted-foreground/20 rounded"></div>
                      </div>
                    </div>
                    <div className="h-16 bg-card rounded-xl border border-border shadow-sm flex items-center p-3 gap-3">
                      <div className="w-10 h-10 bg-secondary/20 rounded-full"></div>
                      <div className="flex-1">
                        <div className="h-3 w-16 bg-muted-foreground/30 rounded mb-2"></div>
                        <div className="h-2 w-14 bg-muted-foreground/20 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Bento Card 1 */}
          <div className="bg-primary text-primary-foreground rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group">
            <div className="z-10 space-y-4">
              <span className="material-symbols-outlined text-4xl text-secondary group-hover:scale-110 transition-transform">insights</span>
              <h3 className="font-headline-lg text-2xl uppercase">Live Analytics</h3>
              <p className="font-body-sm text-primary-foreground/80">Monitor your investments with real-time data and advanced charting directly on your phone.</p>
            </div>
            <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-9xl">monitoring</span>
            </div>
          </div>

          {/* Side Bento Card 2 */}
          <div className="bg-card border border-border rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group">
            <div className="z-10 space-y-4">
              <span className="material-symbols-outlined text-4xl text-secondary group-hover:scale-110 transition-transform">verified_user</span>
              <h3 className="font-headline-lg text-2xl uppercase text-foreground">Bank-level Security</h3>
              <p className="font-body-sm text-muted-foreground">Biometric authentication and 256-bit encryption keep your wealth strictly confidential.</p>
            </div>
          </div>

          {/* Bottom Card */}
          <div className="md:col-span-2 bg-muted border border-border rounded-3xl p-8 flex items-center justify-between overflow-hidden relative group">
            <div className="z-10 space-y-4 max-w-lg">
              <span className="material-symbols-outlined text-4xl text-primary group-hover:rotate-180 transition-transform duration-700">sync</span>
              <h3 className="font-headline-lg text-2xl uppercase text-foreground">Smart SIP Automations</h3>
              <p className="font-body-sm text-muted-foreground">Set up and modify your systematic investment plans with just two taps. Never miss an investment cycle again.</p>
            </div>
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
              className="grow bg-background border border-border text-foreground font-data-point px-4 py-3 focus:border-secondary outline-none rounded uppercase placeholder:text-muted-foreground text-sm"
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
