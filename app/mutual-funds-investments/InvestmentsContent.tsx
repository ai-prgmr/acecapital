import FAQSection from "@/components/FAQSection"

export default function InvestmentsContent() {
  const investFAQs = [
    {
      question: "What asset classes are covered?",
      answer: "Our primary focus remains on global equities, fixed-income instruments, and complex derivatives. We also maintain specialized desks for private equity and pre-IPO opportunities for accredited institutional partners.",
    },
    {
      question: "What is the research methodology?",
      answer: "We utilize a hybrid approach combining deep-dive fundamental analysis with proprietary quantitative models. This allows us to identify structural market inefficiencies and execute with mathematical precision.",
    },
    {
      question: "How are risk-adjusted returns profiled?",
      answer: "Portfolios are optimized for high Sharpe ratios, targeting consistent alpha while maintaining strict VaR (Value at Risk) limits. Our risk management layer dynamically adjusts position sizing based on real-time volatility indices.",
    },
    {
      question: "How is liquidity managed?",
      answer: "We operate 24/7 coverage across major global trading hubs. Our low-latency infrastructure ensures absolute liquidity and optimal execution even during periods of high market volatility.",
    },
  ]

  const pillars = [
    {
      title: "Thorough Research",
      icon: "biotech",
      tag: "Precision Analysis Model v.4.2",
      description: "Deep-dive fundamental analysis merged with proprietary quantitative models to identify market inefficiencies before they become mainstream.",
      themeColor: "group-hover:border-secondary border-t-charcoal",
    },
    {
      title: "Disciplined Execution",
      icon: "speed",
      tag: "Low-Latency Backbone: 4ms Avg.",
      description: "Low-latency algorithmic trading structures ensure we capture optimal entry and exit points across global equity, bond, and derivative markets.",
      themeColor: "group-hover:border-primary border-primary/20 bg-primary-container/20",
    },
    {
      title: "Risk Management",
      icon: "shield_locked",
      tag: "VaR Limit: 2.5% Monthly",
      description: "A multi-layered risk mitigation strategy that dynamically adjusts position sizing based on real-time volatility indices and liquidity shifts.",
      themeColor: "group-hover:border-error-red border-t-charcoal",
    },
  ]

  const sectors = [
    { num: "01", name: "Tech Growth", exposure: "24%" },
    { num: "02", name: "Fin-Tech", exposure: "18%" },
    { num: "03", name: "Clean Energy", exposure: "12%" },
    { num: "04", name: "Infrastructure", exposure: "15%" },
    { num: "05", name: "Real Estate", exposure: "9%" },
    { num: "06", name: "Agriculture", exposure: "7%" },
    { num: "07", name: "Metals", exposure: "10%" },
    { num: "08", name: "Emerging", exposure: "5%" },
  ]

  return (
    <>

      {/* Secure Legacy CTA */}
      <section className="ace-section bg-primary-container relative border-t border-border">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <span className="material-symbols-outlined text-secondary text-5xl">
            verified_user
          </span>
          <h2 className="font-headline-lg text-headline-lg uppercase text-foreground">SECURE YOUR LEGACY</h2>
          <p className="font-body-lg text-body-lg text-primary max-w-2xl mx-auto leading-relaxed">
            Institutional Alpha through precision. Partner with ACE CAPITAL to gain access to exclusive market desks and high-end proprietary trading infrastructure.
          </p>
          <button className="bg-secondary text-on-secondary-fixed px-8 py-4 md:px-12 md:py-5 font-bold tracking-widest uppercase text-xs md:text-sm hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-secondary/10 rounded">
            PORTAL LOGIN
          </button>
          <p className="font-section-label text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
            Past performance is not indicative of future results. Capital at risk.
          </p>
        </div>
      </section>

      {/* FAQ Accordion component */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common inquiries regarding asset management and strategy methodology."
        items={investFAQs}
      />
    </>
  )
}
