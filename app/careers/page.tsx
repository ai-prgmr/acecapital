import { Metadata } from "next"
import FAQSection from "@/components/FAQSection"
import JobOpenings from "@/components/JobOpenings"

export const metadata: Metadata = {
  title: "Careers | ACE CAPITAL ENTERPRISE",
  description: "Join the elite circle of quantitative researchers, high-frequency systems engineers, and derivatives traders at Ace Capital Enterprise.",
  alternates: {
    canonical: "/careers",
  },
}

export default function Careers() {
  const candidateFAQs = [
    {
      question: "How long is the standard recruitment timeline?",
      answer: "Our process is efficient but thorough. From initial application to final offer, the average cycle is 14-21 days for engineering roles and 21-30 days for research/trading roles.",
    },
    {
      question: "What technical requirements are non-negotiable?",
      answer: "Engineering roles require mastery of C++ (17/20) or Rust, with a deep understanding of Linux kernel internals. Research roles require PhD-level mathematics or physics and proficiency in Python/C++.",
    },
    {
      question: "Do you offer remote or hybrid work?",
      answer: "While we value the synergy of the trading floor, certain engineering and research hubs operate on a hybrid basis. Specific remote-first mandates are explicitly tagged in our open mandates list.",
    },
    {
      question: "How does the performance-linked bonus work?",
      answer: "Bonuses are calculated based on individual alpha generation (for traders), system uptime/latency improvements (for engineers), and strategy contribution (for researchers). We use a transparent, data-driven waterfall model.",
    },
  ]

  const stats = [
    { value: "₹3,400Cr+", label: "Daily Volume" },
    { value: "<5ms", label: "Execution Latency" },
    { value: "12+", label: "Global Hubs" },
    { value: "Top 1%", label: "Engineering Talent" },
  ]

  const evaluationSteps = [
    {
      num: "01",
      title: "Alpha Screening",
      desc: "Initial resume review and algorithmic coding challenge.",
      border: "border-secondary",
      textColor: "text-secondary",
    },
    {
      num: "02",
      title: "Deep Tech Dive",
      desc: "Technical peer review covering architecture and mathematical models.",
      border: "border-outline",
      textColor: "text-outline",
    },
    {
      num: "03",
      title: "The Trading Floor",
      desc: "Live evaluation on simulated capital to test risk control and behavior.",
      border: "border-outline",
      textColor: "text-outline",
    },
    {
      num: "04",
      title: "Partner Review",
      desc: "Final interview with desk partners to align on strategy and allocation.",
      border: "border-outline",
      textColor: "text-outline",
    },
  ]

  const careersSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://acecapitalenterprise.com/careers/#webpage",
        "url": "https://acecapitalenterprise.com/careers",
        "name": "Careers | ACE CAPITAL ENTERPRISE",
        "description": "Join the elite circle of quantitative researchers, high-frequency systems engineers, and derivatives traders at Ace Capital Enterprise.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://acecapitalenterprise.com/#website",
          "url": "https://acecapitalenterprise.com",
          "name": "Ace Capital Enterprise"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://acecapitalenterprise.com/careers/#faq",
        "isPartOf": {
          "@id": "https://acecapitalenterprise.com/careers/#webpage"
        },
        "mainEntity": candidateFAQs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(careersSchema) }}
      />

      {/* Hero section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden px-gutter bg-background pt-12">
        <div className="absolute inset-0 z-0 opacity-30 border border-border/30 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        <div className="ace-container w-full relative z-10">
          <div className="max-w-3xl space-y-8">
            <span className="font-section-label text-section-label text-secondary uppercase tracking-[0.3em] block">
              Institutional Excellence
            </span>
            <h1 className="font-display-hero text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight uppercase">
              JOIN THE <span className="text-secondary">ALPHA CIRCLE</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              We are seeking the world's most elite quantitative researchers, engineers, and traders to redefine the boundaries of liquidity and institutional precision.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <a
                className="bg-secondary text-on-secondary-fixed px-10 py-4 font-section-label text-section-label uppercase tracking-widest font-bold hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 rounded"
                href="#mandates"
              >
                View Open Mandates
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
              <a
                className="border border-outline text-muted-foreground px-10 py-4 font-section-label text-section-label uppercase tracking-widest font-bold hover:bg-muted transition-all rounded"
                href="#edge"
              >
                The Ace Edge
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Divider */}
      <section className="bg-surface-container-low py-16 border-y border-border">
        <div className="ace-container grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((st, idx) => (
            <div key={idx} className="text-center space-y-1">
              <div className="font-data-point text-3xl text-secondary">{st.value}</div>
              <div className="font-section-label text-xs text-outline uppercase tracking-widest">{st.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Job openings filterable list */}
      <section id="mandates" className="ace-section ace-container">
        <JobOpenings />
      </section>

      {/* The Ace Edge / Benefits */}
      <section className="bg-surface-container ace-section overflow-hidden border-t border-border" id="edge">
        <div className="ace-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-headline-lg text-headline-lg text-foreground uppercase">The Ace Edge</h2>
              <div className="space-y-12">
                {/* Benefit 1 */}
                <div className="flex gap-6">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-secondary/10 border border-secondary/30 rounded-sm">
                    <span className="material-symbols-outlined text-secondary">payments</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-headline-lg text-xl text-foreground uppercase">Performance-Linked Incentives</h4>
                    <p className="text-on-surface-variant font-body-md leading-relaxed">
                      Our compensation model is purely meritocratic. High-alpha contributions are met with industry-leading bonuses directly tied to performance benchmarks.
                    </p>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="flex gap-6">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-secondary/10 border border-secondary/30 rounded-sm">
                    <span className="material-symbols-outlined text-secondary">memory</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-headline-lg text-xl text-foreground uppercase">Cutting-Edge Tech Stack</h4>
                    <p className="text-on-surface-variant font-body-md leading-relaxed">
                      Work with private fiber networks, FPGA-accelerated execution, and massive-scale GPU clusters for research. We spare no expense on infrastructure.
                    </p>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="flex gap-6">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-secondary/10 border border-secondary/30 rounded-sm">
                    <span className="material-symbols-outlined text-secondary">public</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-headline-lg text-xl text-foreground uppercase">Global Mobility</h4>
                    <p className="text-on-surface-variant font-body-md leading-relaxed">
                      From the skyscrapers of London to the tech hubs of Singapore, we offer seamless internal transfers and support for elite global talent relocation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square ace-card overflow-hidden relative rounded border-none">
                <img
                  className="w-full h-full object-cover opacity-60 rounded"
                  alt="Workstations environment"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFTK-UKiMAvvZ_fQugzM3sGqgJ-MzQISfK2HTxJhSmf0GfLzx-o8zuitC2yxR_Q4ORBeapko4sji64YTBuz-Qnr_U5okYMDRWK4g5DTTXDnD84NZ8Rjndt2WK8bhTLtsNkO6MeXz5DM2yNSy2plptwUFbN9Q8F3i11xkv_7E7ibYFJPRV2-EgJ2nF5mHwg1aWdmCE5mT06MbXr_5kBvywMNRGlHyXhLTB7a_m-wBBX6JsIgEbuorI"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-background/90 backdrop-blur border-l-4 border-secondary rounded-r">
                  <p className="text-on-surface font-body-lg italic leading-relaxed">
                    "At Ace, we don't just trade markets. We build the architecture that defines them."
                  </p>
                  <p className="text-outline font-section-label text-xs uppercase mt-4">
                    — Head of Quantitative Strategy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Evaluation Process */}
      <section className="ace-section ace-container border-t border-border">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline-lg text-headline-lg text-foreground uppercase">The Evaluation Process</h2>
          <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto leading-relaxed">
            Our rigorous selection process ensures that we only onboard individuals capable of thriving in a high-stakes, high-frequency environment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Horizontal link line */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-border/50 z-0"></div>

          {evaluationSteps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center space-y-4">
              <div className={`w-16 h-16 rounded-full bg-background border-2 ${step.border} flex items-center justify-center font-data-point text-xl ${step.textColor}`}>
                {step.num}
              </div>
              <h5 className="font-headline-lg text-lg text-foreground uppercase">{step.title}</h5>
              <p className="text-outline text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Candidate FAQs Section */}
      <FAQSection
        title="Candidate FAQs"
        subtitle="Inquiries regarding recruitment stages, frameworks, and bonuses."
        items={candidateFAQs}
      />

      {/* General resume drop */}
      <section className="ace-section relative overflow-hidden bg-primary-container border-t border-border">
        <div className="ace-container text-center relative z-10 space-y-8">
          <h2 className="font-headline-lg text-4xl md:text-5xl text-foreground uppercase">
            Ready to scale the next frontier?
          </h2>
          <p className="text-primary font-body-lg max-w-xl mx-auto leading-relaxed">
            We are always looking for the exceptional. If you believe your talent belongs at the pinnacle of finance, let's talk.
          </p>
          <div>
            <button className="bg-secondary text-on-secondary-fixed px-8 py-4 md:px-12 md:py-5 font-section-label text-xs md:text-sm uppercase tracking-widest font-bold hover:brightness-110 active:scale-95 transition-all rounded">
              Submit General Resume
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
