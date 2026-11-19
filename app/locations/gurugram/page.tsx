import { Metadata } from "next"
import Link from "next/link"
import FAQSection from "@/components/FAQSection"
import MutualFundsCalculator from "@/components/MutualFundsCalculator"
import OpenContactModalButton from "@/components/OpenContactModalButton"
import InvestmentGoals from "@/components/InvestmentGoals"

export const metadata: Metadata = {
  title: "Mutual Fund Distributor in Gurugram & Delhi NCR | Ace Capital",
  description:
    "AMFI-registered mutual fund distributor in Gurugram & Delhi NCR at JMD Regent Square, MG Road. Personalised SIP planning, portfolio reviews & NRI wealth desk.",
  alternates: {
    canonical: "/locations/gurugram",
  },
  openGraph: {
    title: "Mutual Fund Distributor in Gurugram & Delhi NCR | Ace Capital",
    description:
      "AMFI-registered mutual fund distributor in Gurugram & Delhi NCR at JMD Regent Square, MG Road. Personalised SIP planning, portfolio reviews & NRI wealth desk.",
    url: "https://acecapitalenterprise.com/locations/gurugram",
    siteName: "Ace Capital Enterprise",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo-acecapital-enterprise.webp",
        width: 1200,
        height: 630,
        alt: "Ace Capital Enterprise - Mutual Fund Distributor in Gurugram & Delhi NCR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mutual Fund Distributor in Gurugram & Delhi NCR | Ace Capital",
    description:
      "AMFI-registered mutual fund distributor in Gurugram & Delhi NCR at JMD Regent Square, MG Road. Personalised SIP planning, portfolio reviews & NRI wealth desk.",
    images: ["/logo-acecapital-enterprise.webp"],
  },
}

export default function GurugramLocationPage() {
  const gbpMapUrl = "https://maps.app.goo.gl/vZMszKcxADBEVFzE7"

  const localSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["FinancialService", "LocalBusiness"],
        "@id": "https://acecapitalenterprise.com/locations/gurugram/#localbusiness",
        "name": "Ace Capital Enterprise - Mutual Fund Distributor Gurugram & Delhi NCR",
        "image": "https://acecapitalenterprise.com/logo-acecapital-enterprise.webp",
        "url": "https://acecapitalenterprise.com/locations/gurugram",
        "telephone": "+91-9220556760",
        "email": "support@acecapitalenterprise.com",
        "priceRange": "₹₹",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Bank Transfer, Net Banking, UPI",
        "description":
          "AMFI-registered Mutual Fund Distributor (ARN-113576) based at JMD Regent Square, MG Road, Gurugram. Serving investors across Gurugram, South Delhi, Noida, and Delhi NCR with goal-based SIPs, portfolio reviews, and dedicated NRI desk.",
        "hasMap": gbpMapUrl,
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 28.4810425,
          "longitude": 77.0850248,
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Unit-210, JMD REGENT SQUARE, MG Road",
          "addressLocality": "Gurugram",
          "addressRegion": "Haryana",
          "postalCode": "122002",
          "addressCountry": "IN",
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "17:00",
          },
        ],
        "areaServed": [
          { "@type": "City", "name": "Gurugram" },
          { "@type": "City", "name": "Delhi" },
          { "@type": "City", "name": "New Delhi" },
          { "@type": "City", "name": "Noida" },
          { "@type": "City", "name": "Faridabad" },
          { "@type": "AdministrativeArea", "name": "Delhi NCR" },
          { "@type": "Neighborhood", "name": "South Delhi" },
          { "@type": "Neighborhood", "name": "Cyber City" },
          { "@type": "Neighborhood", "name": "Golf Course Road" },
          { "@type": "Neighborhood", "name": "Golf Course Extension Road" },
          { "@type": "Neighborhood", "name": "DLF Phase 1-5" },
          { "@type": "Neighborhood", "name": "Sohna Road" },
        ],
        "sameAs": [
          gbpMapUrl,
          "https://www.linkedin.com/company/ace-capital-enterprise/",
          "https://x.com/acecapitalent",
          "https://youtube.com/@acecapitalenterprise?si=kxXjdN6WXwNZHzN7",
          "https://www.instagram.com/acecapitalent",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://acecapitalenterprise.com/locations/gurugram/#breadcrumbs",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://acecapitalenterprise.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Locations",
            "item": "https://acecapitalenterprise.com/locations/gurugram",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Gurugram & Delhi NCR",
            "item": "https://acecapitalenterprise.com/locations/gurugram",
          },
        ],
      },
    ],
  }

  const localFAQs = [
    {
      question: "Where is Ace Capital's office located in Gurugram?",
      answer:
        "Our office is centrally located at Unit-210, JMD Regent Square, MG Road, Gurugram, Haryana 122002. We are situated on the main MG Road arterial corridor, just a 5-minute walk from the Sikanderpur Metro Interchange (Yellow Line & Rapid Metro) and MG Road Metro Station, right opposite Sahara Mall.",
    },
    {
      question: "Do you cater to clients across South Delhi, Noida, and other parts of Delhi NCR?",
      answer:
        "Yes! While our physical office is on MG Road, Gurugram, we actively advise investors across the entire Delhi NCR region—including South Delhi (GK, Vasant Vihar, Defence Colony), Noida, and Central Delhi. Investors can choose between in-person meetings at our office, home/office visits by prior arrangement, or seamless digital consultations.",
    },
    {
      question: "Can I walk in or book an in-person meeting for mutual funds in Gurgaon?",
      answer:
        "Yes! We welcome clients and investors for in-person consultations at our JMD Regent Square office between 9:00 AM and 5:00 PM (Monday through Friday). We also arrange Saturday appointments by prior request. You can discuss fresh SIP allocations, lump-sum investments, or bring your existing portfolio for a detailed health check.",
    },
    {
      question: "What mutual fund services do you provide for corporate executives in Cyber City and Golf Course Road?",
      answer:
        "Many of our Gurgaon clients are corporate leaders, founders, and tech executives with high disposable income, RSUs, or ESOP liquidations. We help structure automated SIP strategies, multi-asset allocation (Equity, Hybrid, Debt, and Gold), and long-term tax optimization so your personal capital compounds seamlessly without eating up your daily work hours.",
    },
    {
      question: "Do you offer in-person portfolio review (Portfolio Doctor) services?",
      answer:
        "Yes. If you have built a scattered portfolio across multiple direct apps or bank portals and ended up with 15–25 overlapping funds, you can bring your Consolidated Account Statement (CAS from CAMS/KFintech) to our MG Road office. We conduct an institutional-grade overlap check, risk-reward audit, and expense ratio analysis at zero upfront fee.",
    },
    {
      question: "How does your desk assist NRI investors with ties to Delhi NCR?",
      answer:
        "Our specialized NRI desk handles complete cross-border onboarding. We guide you through NRE/NRO bank account linking, zero-paperwork KYC, FEMA regulations, and double taxation avoidance (DTAA). Whether you are located in the UAE, US, UK, Singapore, or Canada, you get dedicated Relationship Manager support matched to your time zone with a physical office touchpoint in Gurgaon for your local family.",
    },
    {
      question: "Which mutual fund houses (AMCs) can I invest in through Ace Capital?",
      answer:
        "As an AMFI-registered distributor (ARN-113576), Ace Capital provides access to schemes across all leading Indian Asset Management Companies, including SBI Mutual Fund, HDFC, ICICI Prudential, Kotak, Nippon India, Axis, Aditya Birla Sun Life, Mirae Asset, Tata, Parag Parikh, and DSP Mutual Fund.",
    },
  ]

  return (
    <>
      {/* Local Business JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      <article className="min-h-screen bg-background">
        {/* Breadcrumb Navigation */}
        <div className="bg-surface-container-lowest border-b border-border/40 py-3 px-gutter">
          <div className="ace-container">
            <nav
              aria-label="Breadcrumb"
              className="text-xs font-section-label text-outline flex items-center gap-2 uppercase tracking-widest"
            >
              <Link href="/" className="hover:text-secondary transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-muted-foreground">Locations</span>
              <span>/</span>
              <span className="text-foreground font-semibold">Gurugram &amp; Delhi NCR</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <header className="ace-section relative overflow-hidden bg-gradient-to-b from-surface-container-lowest via-background to-background">
          <div className="ace-container space-y-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-secondary/10 border border-secondary/30 text-secondary text-xs uppercase px-3.5 py-1 rounded-full font-bold font-section-label tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                AMFI Registered • ARN-113576
              </span>
              <span className="bg-card border border-border text-foreground text-xs uppercase px-3 py-1 rounded-full font-semibold font-section-label tracking-wider">
                Flagship Office • MG Road, Gurugram • Serving Delhi NCR
              </span>
            </div>

            <div className="space-y-4 max-w-4xl">
              <h1 className="font-display-hero text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground uppercase leading-tight tracking-tight">
                Mutual Fund Distributor <br className="hidden sm:block" />
                in <span className="text-secondary">Gurugram &amp; Delhi NCR</span>
              </h1>
              <p className="font-body-lg text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed">
                Institutional-grade mutual fund distribution with an old-fashioned personal touch. Based out of <strong>JMD Regent Square, MG Road, Gurugram</strong>, we help professionals, business families, and global NRIs across Gurugram, South Delhi, Noida, and Delhi NCR engineer disciplined, goal-driven investment portfolios.
              </p>
            </div>

            {/* Quick Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <OpenContactModalButton className="button-primary px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-xs md:text-sm text-center shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2">
                <span>Book Consultation</span>
                <span className="material-symbols-outlined text-sm">calendar_today</span>
              </OpenContactModalButton>

              <a
                href={gbpMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-border text-foreground hover:border-secondary hover:text-secondary px-6 py-4 rounded-xl font-bold uppercase tracking-wider text-xs md:text-sm text-center transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>View on Google Maps</span>
                <span className="material-symbols-outlined text-sm text-secondary">open_in_new</span>
              </a>
            </div>

            {/* Local Trust Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-border/40 max-w-4xl">
              <div className="space-y-1">
                <span className="font-display-hero text-2xl md:text-3xl font-bold text-foreground block">
                  150+
                </span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-section-label">
                  Trusted Families in NCR
                </span>
              </div>
              <div className="space-y-1">
                <span className="font-display-hero text-2xl md:text-3xl font-bold text-foreground block">
                  2016
                </span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-section-label">
                  Established in NCR
                </span>
              </div>
              <div className="space-y-1">
                <span className="font-display-hero text-2xl md:text-3xl font-bold text-secondary block">
                  100%
                </span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-section-label">
                  AMFI &amp; SEBI Compliant
                </span>
              </div>
              <div className="space-y-1">
                <span className="font-display-hero text-2xl md:text-3xl font-bold text-foreground block">
                  ₹0
                </span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-section-label">
                  Upfront Portfolio Review Fee
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Office Location & Transit Card */}
        <section className="ace-section bg-surface-container-lowest border-y border-border/40">
          <div className="ace-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {/* Location details */}
              <div className="lg:col-span-2 space-y-6">
                <div className="space-y-2">
                  <span className="font-section-label text-xs text-secondary uppercase tracking-widest block font-bold">
                    Physical Presence
                  </span>
                  <h2 className="font-headline-lg text-2xl md:text-3xl uppercase text-foreground">
                    Centrally Located on MG Road, Gurugram
                  </h2>
                  <p className="font-body-md text-muted-foreground text-sm leading-relaxed">
                    Conveniently accessible for investors across Gurugram, South Delhi, and the wider National Capital Region. Easy connectivity via Yellow Line Metro and Rapid Metro.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-card border border-border p-5 rounded-2xl space-y-2">
                    <div className="flex items-center gap-2 text-secondary">
                      <span className="material-symbols-outlined text-xl">location_on</span>
                      <h3 className="font-bold text-sm uppercase font-section-label text-foreground">
                        Office Address
                      </h3>
                    </div>
                    <a
                      href={gbpMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-secondary transition-colors"
                    >
                      <address className="not-italic text-xs leading-relaxed">
                        <strong>Ace Capital Enterprise</strong><br />
                        Unit-210, 2nd Floor, JMD Regent Square<br />
                        Main MG Road (Opposite Sahara Mall)<br />
                        Gurugram, Haryana &ndash; 122002
                      </address></a>
                  </div>

                  <div className="bg-card border border-border p-5 rounded-2xl space-y-2">
                    <div className="flex items-center gap-2 text-secondary">
                      <span className="material-symbols-outlined text-xl">train</span>
                      <h3 className="font-bold text-sm uppercase font-section-label text-foreground">
                        Metro Connectivity
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      • <strong>Sikanderpur Metro Station:</strong> 5-min walk (Yellow Line &amp; Rapid Metro interchange).<br />
                      • <strong>MG Road Metro:</strong> 600 meters away.<br />
                      • Dedicated visitor parking available inside the building complex.
                    </p>
                  </div>

                  <div className="bg-card border border-border p-5 rounded-2xl space-y-2">
                    <div className="flex items-center gap-2 text-secondary">
                      <span className="material-symbols-outlined text-xl">schedule</span>
                      <h3 className="font-bold text-sm uppercase font-section-label text-foreground">
                        Desk Hours
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      <strong>Monday &ndash; Friday:</strong> 9:00 AM &ndash; 5:00 PM (IST)<br />
                      <strong>Saturday:</strong> Prior appointment only<br />
                      <strong>Digital &amp; Phone Desk:</strong> Extended hours for NRIs
                    </p>
                  </div>

                  <div className="bg-card border border-border p-5 rounded-2xl space-y-2">
                    <div className="flex items-center gap-2 text-secondary">
                      <span className="material-symbols-outlined text-xl">call</span>
                      <h3 className="font-bold text-sm uppercase font-section-label text-foreground">
                        Direct Lines
                      </h3>
                    </div>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <p>Phone: <a href="tel:+919220556760" className="text-foreground hover:text-secondary font-semibold">+91 9220556760</a></p>
                      <p>Email: <a href="mailto:support@acecapitalenterprise.com" className="text-foreground hover:text-secondary font-semibold">support@acecapitalenterprise.com</a></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Maps & Directions Spotlight Card */}
              <div className="bg-card border border-secondary/30 rounded-2xl p-6 md:p-8 flex flex-col justify-between space-y-6 shadow-lg">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">map</span>
                  </div>
                  <h3 className="font-headline-lg text-xl uppercase text-foreground">
                    Verified Google Business Profile
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Check our real office location, client ratings, and get one-tap turn-by-turn directions directly to JMD Regent Square, MG Road.
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-border/50">
                  <a
                    href={gbpMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-secondary text-white py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    <span>Get Directions on Google Maps</span>
                    <span className="material-symbols-outlined text-sm">directions</span>
                  </a>

                  <a
                    href="tel:+919220556760"
                    className="w-full bg-surface-container-low hover:bg-muted border border-border py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-center text-foreground flex items-center justify-center gap-2 transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm text-secondary">phone_in_talk</span>
                    <span>Call Gurgaon Desk</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tailored Solutions for Gurugram & Delhi NCR */}
        <section className="ace-section bg-background">
          <div className="ace-container space-y-12">
            <div className="max-w-3xl space-y-3">
              <span className="font-section-label text-xs text-secondary uppercase tracking-widest block font-bold">
                Regional Coverage
              </span>
              <h2 className="font-headline-lg text-3xl md:text-4xl uppercase text-foreground">
                Tailored Wealth Solutions for Delhi NCR Investors
              </h2>
              <p className="font-body-md text-muted-foreground text-sm leading-relaxed">
                We understand the specific financial structures of NCR residents &mdash; from tech corporate equity grants to business treasury management and cross-border NRI remittances.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Pillar 1 */}
              <div className="bg-card border border-border hover:border-secondary/50 p-6 rounded-2xl space-y-4 transition-all group">
                <div className="w-12 h-12 bg-primary-container text-secondary rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">laptop_mac</span>
                </div>
                <h3 className="font-headline-lg text-lg uppercase text-foreground">
                  Cyber City &amp; Golf Course Tech Leaders
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  High-earning executives with substantial bonuses, RSUs, and stock grants. We set up automated SIP paths and multi-cap allocations that turn irregular high income into reliable compounding wealth.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-card border border-border hover:border-secondary/50 p-6 rounded-2xl space-y-4 transition-all group">
                <div className="w-12 h-12 bg-primary-container text-secondary rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">shield</span>
                </div>
                <h3 className="font-headline-lg text-lg uppercase text-foreground">
                  HNI Families (South Delhi &amp; DLF)
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Focus on capital preservation, multi-asset diversification (Debt, Equity, Gold, Arbitrage), and tax-efficient Systematic Withdrawal Plans (SWP) for steady post-retirement monthly cashflow.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-card border border-border hover:border-secondary/50 p-6 rounded-2xl space-y-4 transition-all group">
                <div className="w-12 h-12 bg-primary-container text-secondary rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">public</span>
                </div>
                <h3 className="font-headline-lg text-lg uppercase text-foreground">
                  NRI Desk for Gulf, US &amp; Global Indians
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Complete assistance with NRE/NRO KYC, FEMA compliance, repatriation, and tax documentation under DTAA. A physical desk in Gurgaon gives your family in India complete peace of mind.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="bg-card border border-border hover:border-secondary/50 p-6 rounded-2xl space-y-4 transition-all group">
                <div className="w-12 h-12 bg-primary-container text-secondary rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">account_balance</span>
                </div>
                <h3 className="font-headline-lg text-lg uppercase text-foreground">
                  Corporate Treasury &amp; Business Surplus
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Deploy short-term business surplus, GST reserves, and working capital in liquid, overnight, and arbitrage mutual funds to achieve better post-tax efficiency than standard current accounts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Concise Goal-Based Investing Section */}
        <section className="ace-section bg-surface-container-lowest border-t border-border/40">
          <InvestmentGoals
            variant="compact"
            label="Goal-Based Investing"
            title="Milestone-Driven Portfolios for NCR Families"
            subtitle="Every investment journey in Delhi NCR begins with a real-life milestone — structured systematically to protect capital and outpace inflation."
          />
        </section>

        {/* Free Portfolio Doctor / CAS Health Check Callout */}
        <section className="ace-section bg-background border-t border-border/40">
          <div className="ace-container">
            <div className="bg-card border border-secondary/40 rounded-3xl p-8 md:p-12 space-y-6">
              <div className="max-w-3xl space-y-3">
                <span className="font-section-label text-xs text-secondary uppercase tracking-widest font-bold block">
                  Complimentary Advisory Service
                </span>
                <h2 className="font-display-hero text-3xl md:text-4xl uppercase text-foreground">
                  Got a Cluttered Mutual Fund Portfolio? Bring Your CAS to MG Road
                </h2>
                <p className="font-body-md text-muted-foreground text-sm md:text-base leading-relaxed">
                  Many investors who started investing through direct apps or bank branch recommendations end up with 15–20 duplicate schemes across fund houses. This leads to hidden overlapping, inflated risk, and sub-par compounding.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="space-y-1">
                  <span className="font-bold text-sm text-foreground uppercase block font-section-label">
                    1. Overlap Audit
                  </span>
                  <p className="text-xs text-muted-foreground">
                    Discover how many of your 15 funds hold the exact same 30 stocks under different names.
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-sm text-foreground uppercase block font-section-label">
                    2. Expense &amp; Drag Check
                  </span>
                  <p className="text-xs text-muted-foreground">
                    Identify high-cost underperforming schemes dragging down your portfolio returns.
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-sm text-foreground uppercase block font-section-label">
                    3. Consolidation Roadmap
                  </span>
                  <p className="text-xs text-muted-foreground">
                    Get a clear, streamlined 4–6 fund portfolio roadmap matched to your actual life milestones.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <OpenContactModalButton className="button-primary px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2">
                  <span>Request a Free Portfolio Review</span>
                  <span className="material-symbols-outlined text-sm">analytics</span>
                </OpenContactModalButton>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Growth Projection Tool */}
        <section className="ace-section bg-surface-container-lowest border-t border-border/40">
          <div className="ace-container space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="font-section-label text-xs text-secondary uppercase tracking-widest font-bold block">
                Financial Planning Tool
              </span>
              <h2 className="font-headline-lg text-3xl uppercase text-foreground">
                Plan Your Compounding Wealth
              </h2>
              <p className="text-xs text-muted-foreground">
                Estimate how disciplined monthly SIPs or lumpsum deployments compound over 5, 10, or 20 years.
              </p>
            </div>

            <MutualFundsCalculator />
          </div>
        </section>

        {/* Local Gurugram & Delhi NCR FAQ Section */}
        <FAQSection
          title="Gurugram &amp; Delhi NCR FAQs"
          subtitle="Answers to common questions from Gurgaon and Delhi NCR investors."
          items={localFAQs}
        />

        {/* Final Desk Consultation Banner */}
        <section className="bg-surface-container-lowest border-t border-border/40 ace-section text-center">
          <div className="ace-container space-y-6 max-w-3xl mx-auto">
            <span className="font-section-label text-xs text-secondary uppercase tracking-widest font-bold block">
              Flagship Regional Desk • JMD Regent Square, MG Road
            </span>
            <h2 className="font-display-hero text-2xl sm:text-3xl md:text-4xl uppercase text-foreground leading-tight">
              Ready to Align Your Investments with Clarity?
            </h2>
            <p className="font-body-md text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Visit our team in person at MG Road, Gurugram or connect via virtual consultation to structure your mutual funds with discipline.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <OpenContactModalButton className="w-full sm:w-auto button-primary px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2">
                <span>Book In-Person Consultation</span>
                <span className="material-symbols-outlined text-sm">calendar_today</span>
              </OpenContactModalButton>

              <a
                href="tel:+919220556760"
                className="w-full sm:w-auto bg-card border border-border text-foreground hover:border-secondary hover:text-secondary px-7 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-sm text-secondary">phone_in_talk</span>
                <span>Call Desk: +91 9220556760</span>
              </a>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
