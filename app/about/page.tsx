import { Metadata } from "next"
import FAQSection from "@/components/FAQSection"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Us | ACE CAPITAL ENTERPRISE",
  description: "Learn about the legacy of Ace Capital Enterprise. Founded in 2008, we are a global institutional proprietary trading powerhouse operating in Mumbai, London, and Singapore.",
  alternates: {
    canonical: "/about",
  },
}

export default function About() {
  const aboutFAQs = [
    {
      question: "Firm History & Legacy",
      answer: "ACE CAPITAL ENTERPRISE was founded in 2016 during the global financial crisis with a singular focus on systematic risk management. Over the last 15 years, we have evolved from a boutique quant desk into a global multi-asset proprietary trading powerhouse.",
    },
    {
      question: "Regulatory Compliance Framework",
      answer: "We operate under the strictest regulatory oversight in every jurisdiction. Our compliance engine is integrated directly into our trading stack, ensuring every transaction meets MiFID II, SEC, and SEBI standards where applicable.",
    },
    {
      question: "Institutional Partnership Models",
      answer: "We offer structured partnership models for institutional liquidity providers and family offices looking for uncorrelated alpha. Our partnership terms are governed by institutional-grade LP agreements with clear performance-linked structures.",
    },
    {
      question: "Technology Infrastructure",
      answer: "Our core engine is built on a proprietary low-latency architecture, utilizing FPGA-accelerated execution and private fiber-optic cross-connects to all major global exchanges.",
    },
  ]

  const coreValues = [
    {
      title: "Precision",
      icon: "verified_user",
      description: "Every execution is backed by rigorous back-testing and real-time risk calibration. We leave nothing to chance in volatile environments.",
    },
    {
      title: "Integrity",
      icon: "account_balance",
      description: "Our fiduciary commitment is absolute. We operate with radical transparency and total regulatory adherence across all jurisdictions.",
    },
    {
      title: "Innovation",
      icon: "hub",
      description: "We pioneer algorithmic frameworks that anticipate market shifts before they manifest in standard historical data streams.",
    },
  ]



  const leaders = [
    {
      name: "Rahul Singhal",
      role: "Partner",
      tag: "VISIONARY LEADER & WEALTH MANAGEMENT EXPERT",
      image: "/acecapital/Rahul-Singhal-profile.jpeg",
      linkedin: "https://www.linkedin.com/in/rahul-singhal-73262217/"
    },
    {
      name: "Deepika Singhal",
      role: "Partner",
      tag: "LEGAL COUNSEL & STRATEGIC OPERATIONS",
      image: "/acecapital/Deepika-Singhal-profile.jpeg",
      linkedin: "https://www.linkedin.com/in/deepika-singhal-81a28313/"
    }
  ]

  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://acecapitalenterprise.com/about/#webpage",
        "url": "https://acecapitalenterprise.com/about",
        "name": "About Us | ACE CAPITAL ENTERPRISE",
        "description": "Learn about the legacy of Ace Capital Enterprise. Founded in 2008, we are a global institutional proprietary trading powerhouse operating in Mumbai, London, and Singapore.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://acecapitalenterprise.com/#website",
          "url": "https://acecapitalenterprise.com",
          "name": "Ace Capital Enterprise"
        },
        "mainEntity": {
          "@type": "Organization",
          "name": "Ace Capital Enterprise",
          "foundingDate": "2008",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mumbai",
            "addressCountry": "India"
          }
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://acecapitalenterprise.com/about/#faq",
        "isPartOf": {
          "@id": "https://acecapitalenterprise.com/about/#webpage"
        },
        "mainEntity": aboutFAQs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* Legacy/Hero Section */}
      <section className="relative min-h-125 flex items-center ace-container ace-section bg-background">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="font-section-label text-section-label text-secondary uppercase tracking-[0.3em] block">
              Our Mandate
            </span>
            <h1 className="font-display-hero text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
              Legacy of <span className="metallic-gradient">Institutional Alpha.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Since inception, ACE CAPITAL ENTERPRISE has operated at the intersection of mathematical precision and market intuition. Our vision is to provide unparalleled stability in an era of volatility, delivering consistent results through sophisticated proprietary strategies.
            </p>
            <div className="flex gap-6 items-center pt-4">
              <div className="h-px w-12 bg-secondary"></div>
              <span className="font-data-point text-data-point text-muted-foreground uppercase tracking-widest text-sm">
                Est. 2008
              </span>
            </div>
          </div>
          <div className="relative h-100 md:h-125 group">
            <Image
              width={800}
              height={600}
              alt="Ace Capital Office"
              src="/acecapital/Ace-Capital-Enterprise-office.jpeg"
              className="w-full h-full object-contain rounded transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="ace-section ace-container border-t border-border">
        <div className="text-center mb-20">
          <span className="font-section-label text-section-label text-primary uppercase tracking-[0.3em] block mb-4">
            Principles
          </span>
          <h2 className="font-headline-lg text-headline-lg text-foreground uppercase">
            Institutional Core Values
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((val, idx) => (
            <div
              key={idx}
              className="ace-card p-10 rounded group hover:border-secondary/50 transition-all duration-500 space-y-6"
            >
              <span className="material-symbols-outlined text-secondary text-5xl">
                {val.icon}
              </span>
              <h3 className="font-headline-lg text-2xl text-on-surface uppercase">
                {val.title}
              </h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </section>



      {/* Leadership Section */}
      <section className="ace-section ace-container">
        <div className="flex flex-col sm:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="font-section-label text-section-label text-primary uppercase tracking-[0.3em] block mb-4">
              The Helm
            </span>
            <h2 className="font-headline-lg text-headline-lg text-foreground uppercase">
              Executive Leadership
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {leaders.map((leader, idx) => (
            <div key={idx} className="group space-y-5">
              <div className="aspect-3/4 overflow-hidden bg-muted relative rounded border border-outline-variant/20 shadow-sm">
                <img
                  className="w-full h-full object-cover transition-all duration-500 scale-100 group-hover:scale-105"
                  alt={leader.name}
                  src={leader.image}
                />
                <div className="absolute bottom-0 left-0 w-full p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-secondary/95 text-white font-section-label text-xs tracking-widest uppercase">
                  {leader.tag}
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-headline-lg text-xl text-foreground uppercase">{leader.name}</h4>
                <p className="font-section-label text-secondary uppercase text-sm tracking-widest mt-1">
                  {leader.role}
                </p>
                {leader.linkedin && (
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 mt-4 text-muted-foreground hover:text-[#0a66c2] transition-colors text-sm font-semibold"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    Connect on LinkedIn
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section (AEO Optimized) */}
      <FAQSection
        title="Institutional FAQs"
        subtitle="Common inquiries regarding our compliance, tech, and corporate history."
        items={aboutFAQs}
      />
    </>
  )
}
