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
      answer: "ACE CAPITAL ENTERPRISE was founded in 2008 during the global financial crisis with a singular focus on systematic risk management. Over the last 15 years, we have evolved from a boutique quant desk into a global multi-asset proprietary trading powerhouse.",
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

  const hubs = [
    {
      name: "MUMBAI",
      role: "Strategic Operations & Tech HQ",
      icon: "explore",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSwCqbh3TNssiIogz5TupcSKYXLCknDT699t1U6DIwskqB_CvDQ321nGGx1-lhW3sUJzqNelqwu0j4_9vmxrbd0HHCZ8Acw4zjQ91zNPFo4K6lagOYyyPIVlguBEQbfVcKkQ_oh_0P8I1xccGEyene_pXh1_8KoQdqjrjIdTFOJCjvmmqZ9Q2Sg3S8WXy72FL72pL3J9A7gGKjSpH9kYbpS8-YF5KbjGch-bNtyG6Xtf92IYilYOI",
    },
    {
      name: "LONDON",
      role: "Global Market Arbitrage Desk",
      icon: "explore",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtiMdI--4r_UhTigknPjf874dyRVisWzpQQEEYg5OQu4BYvNdMYwaLLAcB_51KPB6WGxtv1DADjkM9o5DNbM3R062bne05ihSAPEDf1a6uBJbDX6VAR3MX_Srx1FOiTJ12ae_U87IDeYR_RL5RM0Cy1m9cznkNmU_t5IlXBJQX_BK8ILqdtEyCH4e1uossSM_MHl9Ma-gATHzxdd2mqke-QeToWH0CtXkIqShRLeHQ1Msl90ImH3Q",
    },
    {
      name: "SINGAPORE",
      role: "APAC Regulatory & Compliance",
      icon: "explore",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAW4Khilx0iLMgXrdF_fXsmL8886K184oXpBN-JZ6frQz4ucNMmN-U7i1iaESsS_z55wIl9w4OPR20rReuiyl9KuqjDHoxX48HsXQTi_gNCWNt8mo6gn2sm7YC9Y12Elgo4_pv05aBRkbLidHpi69JVWYMl-Yofjnp0eGXZEbeQb6dm8rz4NTE1pO97GzZmPWDre_Ldxq7cjTPsfDrjn-C2GNgmyHksFeayByCxuAQJHENsrOQf34A",
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

      {/* Footprint / Hubs Section */}
      <section className="ace-section ace-container bg-surface-container-lowest border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="font-section-label text-section-label text-secondary uppercase tracking-[0.3em] block mb-4">
                Global Network
              </span>
              <h2 className="font-headline-lg text-headline-lg text-foreground mb-6 uppercase">
                Strategic Presence in Global Liquidity Hubs
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Our decentralized infrastructure allows for localized execution with global oversight. We maintain active desks in the world's most critical financial centers.
              </p>
            </div>

            <div className="space-y-4">
              {hubs.map((hub, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-6 border-l-2 border-border bg-surface-container-high rounded-r hover:border-secondary transition-all duration-300"
                >
                  <div>
                    <h4 className="font-headline-lg text-lg text-foreground uppercase tracking-wider">{hub.name}</h4>
                    <p className="text-on-surface-variant text-xs mt-1">{hub.role}</p>
                  </div>
                  <span className="material-symbols-outlined text-secondary text-2xl">
                    {hub.icon}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Pictures Grid */}
          <div className="grid grid-cols-2 gap-4 h-[500px]">
            <div className="h-full rounded overflow-hidden border border-outline-variant/30">
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="Mumbai Skyline"
                src={hubs[0].image}
              />
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div className="rounded overflow-hidden border border-outline-variant/30">
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  alt="London Skyline"
                  src={hubs[1].image}
                />
              </div>
              <div className="rounded overflow-hidden border border-outline-variant/30">
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  alt="Singapore Skyline"
                  src={hubs[2].image}
                />
              </div>
            </div>
          </div>
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
