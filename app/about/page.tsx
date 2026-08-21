import { Metadata } from "next"
import FAQSection from "@/components/FAQSection"

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
      name: "Vikram Malhotra",
      role: "Chief Executive Officer",
      tag: "FORMER MD @ GLOBAL TIER-1 BANK",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAncflF-mNxtF2VpqFrIZJdD1_fThmjOcmpNIEpqMndZAsAF0osEUCv9lRiiAgmx_cT39ID1hm5Eu8hjzlnouRZ3ITxpgq8cB4EdtFF4IGYl7if_X3Ox65EaFxp2dnF7zi2lXIPDoOxsCGxQImUwO-YQ_WBL4LswpFW8G-oO6vsQahBn44qThM9YuzC4Bty51z5M7MCkYXyMhdQFogvM5l5gn6I5UNF9vBq9y813y7A0BFVrROPMLs",
    },
    {
      name: "Elena Rossi",
      role: "Chief Risk Officer",
      tag: "PhD IN MATHEMATICAL FINANCE",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAomYafepBwGNdOBw9YN_fYOhWBBdGf2-K05s4N0LARYzm-8HNUuT6vtORR9R1ifwoxLQNI2gNm252FJIeVhD3yqg-hBgbbHqJ03SD24CFwhX329zsytGn6y-qp4nGeki3fb4SoLMNGbBe6OU5EZWk279FskssTryZUQPDQ11YEcjEc32Rqd_2KRYYI-kFDOu3ZM-JS0jtPkmwjT5pqyephLzEUs9RR7lNG0-FPeIunEw9Ai1XdddU",
    },
    {
      name: "David Chen",
      role: "Head of Quant Strategies",
      tag: "20+ YEARS IN ALGORITHMIC TRADING",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGyO3sODz5mL8Xw-o4UkwIdFk3HD5LJ-ToWcNRW2btW3rambv4F1iInUQn-hOOA02CPpeBowSpqikC6M_f6IY_O5Mr7ceolVD4SMRiQwb04QrEuMhkCpssu9NVhnuY9nfJ2wbuSupd-W8umFWi6pHd_nQNazxPlBdnk0ldmrSsZECaE0u4EMdmOKh60loW9p2ZfBeoTAMxo2iwrOF9af8lurAvdZPXDcyNU8zyudSTkG6wUwfEPbk",
    },
    {
      name: "Sarah Jennings",
      role: "General Counsel",
      tag: "LEGAL COUNSEL & REGULATORY EXPERT",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBv_rQSk1QwbDb4zvAsBJnp8f8Zi0l1tWRg0omUveFuMuRptS6GIY8qSzJwq-FfcVaUBtuopO3H_OsQ1dX1QNy76gixsQeRArsWhV4zLfWh-AJ0ai0gIhr7AaIBG9R2NA9x4aw2aFv-vY3yOKC3sG6LjtVtlFbbgyAFRDWjowIMGiSjaKfB0MHV9s5zpEtDWJ6Q7l6oMxJZKbJvVj7TLyuFZKmlzYSyXDEZGbVPOyZbWWryXkmtbUE",
    },
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
      <section className="relative min-h-[500px] flex items-center ace-container ace-section bg-background">
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
          <div className="relative h-[400px] md:h-[500px] group">
            <div className="absolute -inset-4 border border-secondary/20 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 rounded"></div>
            <img
              className="w-full h-full object-cover rounded grayscale group-hover:grayscale-0 transition-all duration-700"
              alt="Ace Capital Boardroom"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD8wVwv_bjtJFrLPlBw4RkUNcdTLBrHxzeNLMwTl1NjHRvrGPvxy9b_SHsUqiJndDMBXiJ9eM7u9vKrG-fFdxlekJCQDD7QruHeCIo2QEwoQ9PhbttiEilz2DsXvjelZOIZEzKJk-uzMdaPtDMQtezWdXmpUl_66eNu1Y8-VJvTWI7qtFrdCNHIZCCsnUISB0sWERTFBhHNDDCxn9m-Zr-n5nzsjrwEeryH6hbOt-MKuySouqf5cY"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, idx) => (
            <div key={idx} className="group space-y-4">
              <div className="aspect-[3/4] overflow-hidden bg-muted relative rounded border border-outline-variant/20">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                  alt={leader.name}
                  src={leader.image}
                />
                <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-secondary text-on-secondary-fixed font-section-label text-[10px] tracking-tighter">
                  {leader.tag}
                </div>
              </div>
              <div>
                <h4 className="font-headline-lg text-lg text-foreground uppercase">{leader.name}</h4>
                <p className="font-section-label text-secondary uppercase text-xs tracking-widest mt-1">
                  {leader.role}
                </p>
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
