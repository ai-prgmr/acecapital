import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Us | Ace Capital Enterprise",
  description: "Founded in 2016, Ace Capital Enterprise helps individuals and families invest in mutual funds toward their real-life goals with clarity, transparency, and discipline.",
  alternates: {
    canonical: "/about",
  },
}

export default function About() {
  const leaders = [
    {
      name: "Rahul Singhal",
      role: "Founder & Managing Partner",
      tag: "SYSTEMATIC, SIMPLE AND PERSONAL",
      description: "Mr. Rahul Singhal is the Founder of Ace Capital Enterprise, which he established in 2016. An MBA qualified, he built the firm around one idea — that investing should be done with clarity: systematic, simple and personal.\n\nUnder his leadership, Ace Capital blends new-age, data-driven fund selection with an old-fashioned personal touch — helping families invest in mutual funds toward real-life goals, while the firm's in-house desk trades its own capital across equity, derivatives, cash and ETFs with quantitative rigour. With 15+ years in India's markets, he has guided clients and the firm through multiple market cycles, always led by transparency and discipline.\n\nHis philosophy, and the firm's: invest with clarity.",
      image: "/acecapital/Rahul-Singhal-profile.jpeg",
      linkedin: "https://www.linkedin.com/in/rahul-singhal-73262217/",
      x: "https://x.com/rahulsinghal13"
    },
    {
      name: "Deepika Singhal",
      role: "Co-Founder & Partner — Legal & Marketing",
      tag: "COMPLIANCE & BRAND VOICE",
      description: "Ms. Deepika Singhal is a Co-Founder and Partner at Ace Capital Enterprise, and has helped build the firm from the ground up. She leads its legal and marketing functions — keeping Ace Capital compliant, transparent and trustworthy, while giving it a clear and consistent voice.\n\nOn the legal side, she oversees the firm's compliance and regulatory matters, so that every client relationship rests on transparency and trust. On the marketing side, she carries the firm's promise — investing that is systematic, simple and personal — into everything clients see and experience.",
      image: "/acecapital/Deepika-Singhal-profile.jpeg",
      linkedin: "https://www.linkedin.com/in/deepika-singhal-81a28313/",
      x: "https://x.com/dpka1985"
    }
  ]

  const values = [
    {
      title: "Systematic",
      icon: "account_tree",
      description: "We use technology-driven discipline and quantitative rigor in everything we do.",
    },
    {
      title: "Simple",
      icon: "task_alt",
      description: "We explain everything in plain language, making rigorous wealth management accessible.",
    },
    {
      title: "Personal",
      icon: "diversity_1",
      description: "We provide an old-fashioned personal touch, tailored to your time horizon and risk comfort.",
    },
  ]

  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://acecapitalenterprise.com/about/#webpage",
        "url": "https://acecapitalenterprise.com/about",
        "name": "About Us | Ace Capital Enterprise",
        "description": "Founded in 2016, Ace Capital Enterprise helps individuals and families invest in mutual funds toward their real-life goals with clarity, transparency, and discipline.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://acecapitalenterprise.com/#website",
          "url": "https://acecapitalenterprise.com",
          "name": "Ace Capital Enterprise"
        },
        "mainEntity": {
          "@type": "Organization",
          "name": "Ace Capital Enterprise",
          "foundingDate": "2016",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "India"
          }
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-125 flex items-center ace-container ace-section bg-background">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="font-section-label text-section-label text-secondary uppercase tracking-[0.3em] block">
              About Us
            </span>
            <h1 className="font-display-hero text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
              Invest with <span className="metallic-gradient">Clarity.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Founded in 2016, Ace Capital Enterprise is a partnership firm built on one promise — to help you invest with clarity. As an AMFI-registered mutual fund distributor (ARN-113576), we help individuals and families invest in mutual funds toward their real-life goals — matched to their time horizon and risk comfort, and explained in plain language at every step — while our in-house desk trades the firm's own capital across equity, derivatives, cash and ETFs with systematic, technology-driven discipline. 
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Pairing new-age, data-driven thinking with an old-fashioned personal touch, everything we do runs on three ideas: <strong className="text-foreground">systematic, simple and personal.</strong>
            </p>
            <div className="flex gap-6 items-center pt-4">
              <div className="h-px w-12 bg-secondary"></div>
              <span className="font-data-point text-data-point text-muted-foreground uppercase tracking-widest text-sm">
                Est. 2016
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

      {/* Vision Section */}
      <section className="ace-section ace-container border-t border-border bg-muted/10">
        <div className="text-center mb-12">
          <span className="font-section-label text-section-label text-primary uppercase tracking-[0.3em] block mb-4">
            Our Vision
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="ace-card p-10 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-secondary text-4xl mb-4 block">visibility</span>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              To become India's most trusted name for clear, honest and personal investing — helping every household move from confusion to confidence, and build lasting wealth with discipline, transparency and guidance they can count on for the long term.
            </p>
          </div>
          <div className="ace-card p-10 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
            <span className="material-symbols-outlined text-secondary text-4xl mb-4 block">trending_up</span>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              To empower investors across India with thoughtfully curated, data-driven mutual fund portfolios— making rigorous wealth management accessible to everyone, wherever they are.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="ace-section ace-container border-t border-border">
        <div className="text-center mb-20">
          <span className="font-section-label text-section-label text-primary uppercase tracking-[0.3em] block mb-4">
            Core Philosophy
          </span>
          <h2 className="font-headline-lg text-headline-lg text-foreground uppercase">
            Three Ideas We Run On
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => (
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
      <section className="ace-section ace-container border-t border-border">
        <div className="text-center mb-16">
          <span className="font-section-label text-section-label text-primary uppercase tracking-[0.3em] block mb-4">
            Leadership
          </span>
          <h2 className="font-headline-lg text-headline-lg text-foreground uppercase">
            Meet the Founders
          </h2>
        </div>

        <div className="space-y-24 max-w-5xl mx-auto">
          {leaders.map((leader, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-2/5 shrink-0">
                <div className="aspect-3/4 overflow-hidden bg-muted relative rounded-xl border border-outline-variant/20 shadow-sm group">
                  <Image
                    width={600}
                    height={800}
                    className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-105"
                    alt={leader.name}
                    src={leader.image}
                  />
                  <div className="absolute bottom-0 left-0 w-full p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-secondary/95 text-white font-section-label text-xs tracking-widest uppercase">
                    {leader.tag}
                  </div>
                </div>
              </div>
              <div className="w-full md:w-3/5 space-y-6">
                <div>
                  <h3 className="font-headline-lg text-3xl text-foreground uppercase">{leader.name}</h3>
                  <p className="font-section-label text-secondary uppercase text-sm tracking-widest mt-2">
                    {leader.role}
                  </p>
                </div>
                <div className="space-y-4">
                  {leader.description.split('\n\n').map((paragraph, pIdx) => (
                    <p key={pIdx} className="font-body-md text-on-surface-variant leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-2">
                  {leader.x && (
                    <a href={leader.x} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="X (Twitter)">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                    </a>
                  )}
                  {leader.linkedin && (
                    <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0A66C2] transition-colors" aria-label="LinkedIn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team Section */}
      <section className="ace-section ace-container border-t border-border bg-muted/10">
        <div className="text-center mb-16">
          <span className="font-section-label text-section-label text-primary uppercase tracking-[0.3em] block mb-4">
            Our Team
          </span>
          <h2 className="font-headline-lg text-headline-lg text-foreground uppercase">
            The Specialists Behind Ace Capital
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Mutual Fund Team */}
          <div className="ace-card p-10 rounded-xl bg-white space-y-8">
            <div>
              <h3 className="font-headline-lg text-2xl text-on-surface uppercase mb-4 border-b border-border pb-4">
                Our Mutual Fund Team
              </h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed mb-6">
                At the core of our wealth management division is a dedicated team of specialists who believe that geography should never limit your financial potential. Combining deep analytical rigor with personalized guidance, our team ensures your portfolio is built on pure logic and structured for long-term resilience.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">person</span>
                <div>
                  <h4 className="font-semibold text-foreground text-lg">Amit Singh</h4>
                  <p className="text-muted-foreground text-sm">Senior Mutual Fund Analyst and Consultant</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">person</span>
                <div>
                  <h4 className="font-semibold text-foreground text-lg">Rahul S.</h4>
                  <p className="text-muted-foreground text-sm">Mutual Fund Consultant & Client Relationship</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quant Trading Team */}
          <div className="ace-card p-10 rounded-xl bg-white space-y-8">
            <div>
              <h3 className="font-headline-lg text-2xl text-on-surface uppercase mb-4 border-b border-border pb-4">
                Our Quant Trading Team
              </h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed mb-6">
                At the heart of our firm's market expertise is our Proprietary Quant Trading Team. Operating entirely on data, algorithmic precision, and strict structural analysis, this team navigates the daily complexities of active trading. While this desk operates behind the scenes, their real-time insights and rigorous research provide the foundation of logic and discipline that runs through our entire firm.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">person</span>
                <div>
                  <h4 className="font-semibold text-foreground text-lg">Amit Singh</h4>
                  <p className="text-muted-foreground text-sm">Senior Trader & Strategist</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">person</span>
                <div>
                  <h4 className="font-semibold text-foreground text-lg">Sanjay Singh</h4>
                  <p className="text-muted-foreground text-sm">Quantitative Researcher</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">person</span>
                <div>
                  <h4 className="font-semibold text-foreground text-lg">Mohit Kumar</h4>
                  <p className="text-muted-foreground text-sm">Trader & Strategist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="ace-container py-12">
        <div className="max-w-4xl mx-auto p-6 bg-muted/50 rounded-lg text-center border border-border">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Our proprietary trading desk trades the firm's own capital only and is separate and distinct from our mutual fund distribution business; it is not an investment offering. Mutual Fund investments are subject to market risks — read all scheme related documents carefully.
          </p>
        </div>
      </section>
    </>
  )
}
