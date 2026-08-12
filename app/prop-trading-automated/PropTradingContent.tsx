import Link from "next/link"

export default function PropTradingContent() {
  const propFAQs = [
    {
      question: "How is capital allocated to new traders?",
      answer: "Initial allocation is based on the evaluation performance and historical track record. Successful candidates typically start with a Tier-1 mandate, which scales dynamically based on quarterly risk-adjusted returns.",
    },
    {
      question: "What are the leverage limits?",
      answer: "We provide institutional-grade leverage across FX and Equities. Mandates are tailored to the specific strategy's volatility profile, ensuring maximum capital efficiency while maintaining strict solvency buffers.",
    },
    {
      question: "What are the hard risk protocols?",
      answer: "Every desk operates under a hard daily stop-loss and maximum drawdown limit. Our automated risk engine monitors Delta, Gamma, and VaR in real-time, with automated liquidation triggers to protect firm capital.",
    },
    {
      question: "How long is the evaluation process?",
      answer: "The standard evaluation period is 30 to 60 trading days. We look for consistency, disciplined risk management, and the ability to generate alpha across different market regimes rather than raw PnL spikes.",
    },
  ]

  const heatmapExchanges = [
    { name: "NYSE", status: "HIGH", bg: "bg-secondary/40 border-secondary/30" },
    { name: "LSE", status: "LOW", bg: "bg-success-green/20 border-success-green/20" },
    { name: "TSE", status: "MED", bg: "bg-secondary/20 border-secondary/20" },
    { name: "HKEX", status: "CRIT", bg: "bg-secondary/60 border-secondary/50 animate-pulse" },
    { name: "ASX", status: "LOW", bg: "bg-success-green/10 border-success-green/10" },
    { name: "SGX", status: "MED", bg: "bg-secondary/30 border-secondary/20" },
    { name: "EUREX", status: "HIGH", bg: "bg-secondary/40 border-secondary/30" },
    { name: "CME", status: "LOW", bg: "bg-success-green/20 border-success-green/20" },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center px-gutter overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 pointer-events-none z-0"></div>
        <div className="ace-container w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-3 px-3 py-1 bg-primary-container border border-primary/20 rounded-full">
              <span className="w-2 h-2 bg-success-green rounded-full animate-pulse"></span>
              <span className="font-section-label text-xs uppercase tracking-widest text-primary">
                Live Institutional Liquidity
              </span>
            </div>
            <h1 className="font-display-hero text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground uppercase">
              Proprietary <span className="text-secondary italic">Precision.</span>
              <br />
              Institutional Alpha.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              At Ace Capital, we leverage high-performance firm capital to navigate global market complexities. Our seasoned traders utilize cutting-edge technology and rigorous risk management to generate consistent alpha in volatile environments.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/careers"
                className="px-6 py-3 md:px-8 md:py-4 bg-secondary text-on-secondary-fixed font-bold font-section-label uppercase tracking-widest text-xs md:text-sm hover:brightness-110 active:scale-95 transition-all text-center rounded-sm"
              >
                Apply to Trade
              </Link>
              <a
                href="#mandates"
                className="px-6 py-3 md:px-8 md:py-4 border border-outline text-on-surface font-section-label uppercase tracking-widest text-xs md:text-sm hover:bg-on-surface/5 transition-all text-center rounded-sm"
              >
                Review Mandates
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="ace-card p-2 rounded relative overflow-hidden group">
              <img
                className="w-full h-auto object-cover rounded border border-border group-hover:scale-105 transition-transform duration-700"
                alt="Proprietary Trading Desk"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5MsbPmx5KpxF5k0iYF14Hdlqc0JjUDe03vpDP2kMdYEvcst51as1XDVFPt1GlREY16Jv_vLdKcY_GzEqUw5RwuHYA-SvGqbFyOn0P59O1bMOSuUA_7It9dgIGyTm32XeAaJIVCx7sHz_j2n_LrvAdkMEj4ZSWINJvPdj6yUhzRae_n0dn8vV9sbnKouZsBaU-4XtGR52tlRQHxK78_Yct4q6AzopunHN1T6O2CWDAiVPzIeC0lAw"
              />
              <div className="absolute bottom-6 left-6 right-6 ace-card p-4 rounded flex justify-between items-center bg-background/80 backdrop-blur">
                <div>
                  <p className="font-section-label text-[10px] uppercase text-outline">Real-time Alpha</p>
                  <p className="font-data-point text-success-green">+24.8% YTD</p>
                </div>
                <div className="text-right">
                  <p className="font-section-label text-[10px] uppercase text-outline">Risk Ratio</p>
                  <p className="font-data-point text-secondary">3.4:1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bento Grid */}
      <section id="mandates" className="ace-section ace-container border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="font-section-label text-section-label text-secondary uppercase tracking-[0.2em]">
              Institutional Engine
            </span>
            <h2 className="font-headline-lg text-headline-lg mt-4 uppercase">
              Built for Execution, Hardened by the Markets.
            </h2>
          </div>
          <div className="font-section-label text-outline text-sm uppercase">
            _____ EST. 2018
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Large Feature */}
          <div className="md:col-span-2 md:row-span-2 ace-card p-10 flex flex-col justify-between group hover:border-secondary transition-all rounded">
            <div className="space-y-6">
              <span className="material-symbols-outlined text-secondary text-5xl">
                query_stats
              </span>
              <h3 className="font-headline-lg text-2xl uppercase">Global Market Navigation</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                We trade across **40+ international exchanges**, providing our desks with 24/7 exposure to FX, Commodities, and Equities. Our infrastructure is optimized for sub-millisecond execution.
              </p>
            </div>
            <div className="mt-12 space-y-4">
              <div className="h-px bg-border w-full"></div>
              <div className="flex justify-between font-data-point text-muted-foreground">
                <span>Exchanges Integrated</span>
                <span>42</span>
              </div>
            </div>
          </div>

          {/* Medium Feature */}
          <div className="md:col-span-2 ace-card p-8 flex items-center justify-between gap-8 group hover:border-primary transition-all rounded">
            <div className="flex-1 space-y-4">
              <h4 className="font-headline-lg text-2xl uppercase">Capital Deployment</h4>
              <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                Access tier-1 institutional capital with high-leverage mandates and zero personal liability for seasoned performers.
              </p>
            </div>
            <span className="material-symbols-outlined text-primary text-6xl">
              account_balance
            </span>
          </div>

          {/* Small Feature 1 */}
          <div className="ace-card p-8 flex flex-col justify-between hover:bg-primary-container/20 transition-all rounded">
            <span className="material-symbols-outlined text-secondary text-4xl">
              verified
            </span>
            <div className="mt-8">
              <p className="font-data-point text-3xl">99.9%</p>
              <p className="font-section-label text-[12px] uppercase text-outline mt-1">Uptime API</p>
            </div>
          </div>

          {/* Small Feature 2 */}
          <div className="ace-card p-8 flex flex-col justify-between hover:bg-primary-container/20 transition-all rounded">
            <span className="material-symbols-outlined text-secondary text-4xl">
              groups
            </span>
            <div className="mt-8">
              <p className="font-data-point text-3xl">150+</p>
              <p className="font-section-label text-[12px] uppercase text-outline mt-1">Elite Traders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Market Intelligence Section */}
      <section className="ace-section ace-container border-t border-border">
        <div className="mb-16">
          <span className="font-section-label text-section-label text-secondary uppercase tracking-[0.2em]">
            Real-Time Intelligence
          </span>
          <h2 className="font-headline-lg text-headline-lg mt-4 uppercase">
            Live Market Intelligence
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Intraday Liquidity Spikes Chart */}
          <div className="ace-card p-8 rounded space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="font-data-point text-muted-foreground uppercase tracking-wider text-sm">
                Intraday Liquidity Spikes
              </h3>
              <div className="flex space-x-4">
                <span className="flex items-center text-[10px] text-outline uppercase">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>FX
                </span>
                <span className="flex items-center text-[10px] text-outline uppercase">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>Equities
                </span>
                <span className="flex items-center text-[10px] text-outline uppercase">
                  <span className="w-2 h-2 bg-silver rounded-full mr-2"></span>Cmdty
                </span>
              </div>
            </div>

            <div className="h-64 relative flex items-end">
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-5 border border-border">
                {Array.from({ length: 24 }).map((_, idx) => (
                  <div key={idx} className="border-r border-b border-border/50"></div>
                ))}
              </div>
              <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 400 100">
                {/* FX Line */}
                <path
                  className="transition-all duration-500"
                  d="M0 80 Q 50 20, 100 70 T 200 40 T 300 85 T 400 30"
                  fill="none"
                  stroke="#6EC1E4"
                  strokeWidth="2"
                ></path>
                {/* Equities Line */}
                <path
                  className="opacity-70"
                  d="M0 60 Q 80 90, 150 30 T 250 60 T 350 20 T 400 50"
                  fill="none"
                  stroke="#b9c7e4"
                  strokeWidth="2"
                ></path>
                {/* Commodities Line */}
                <path
                  className="opacity-50"
                  d="M0 40 Q 120 10, 200 50 T 300 20 T 400 70"
                  fill="none"
                  stroke="#C0C0C0"
                  strokeWidth="1"
                ></path>
              </svg>
            </div>
            <div className="flex justify-between font-section-label text-[10px] text-outline">
              <span>08:00 UTC</span>
              <span>12:00 UTC</span>
              <span>16:00 UTC</span>
              <span>20:00 UTC</span>
            </div>
          </div>

          {/* Volatility Heatmap */}
          <div className="ace-card p-8 rounded space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="font-data-point text-muted-foreground uppercase tracking-wider text-sm">
                Volatility Heatmap
              </h3>
              <span className="material-symbols-outlined text-secondary animate-pulse">
                sensors
              </span>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {heatmapExchanges.map((ex, idx) => (
                <div
                  key={idx}
                  className={`h-16 border rounded flex items-center justify-center flex-col transition-all duration-300 hover:scale-105 cursor-pointer ${ex.bg}`}
                >
                  <span className="text-[10px] text-foreground uppercase font-bold">{ex.name}</span>
                  <span className="font-data-point text-xs mt-1">{ex.status}</span>
                </div>
              ))}
            </div>
            <p className="font-body-md text-xs text-on-surface-variant italic">
              * Aggregated volatility index across 128 global liquidity pools.
            </p>
          </div>
        </div>
      </section>

      {/* Advanced Risk Analytics Section */}
      <section className="ace-section bg-surface-container-lowest border-y border-border">
        <div className="ace-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-headline-lg text-headline-lg uppercase text-foreground">
              Advanced Risk Analytics & Real-Time Performance Tracking
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Our proprietary dashboard provides granular insights into every trade. From Delta-adjusted exposure to VaR calculations, our traders have the mathematical edge required to dominate.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 pb-4 border-b border-border">
                <span className="material-symbols-outlined text-secondary">
                  check_circle
                </span>
                <span className="font-body-md">Dynamic Risk Allocation based on Performance Metrics</span>
              </li>
              <li className="flex items-center gap-4 pb-4 border-b border-border">
                <span className="material-symbols-outlined text-secondary">
                  check_circle
                </span>
                <span className="font-body-md">Sub-millisecond data feed from global Tier-1 providers</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-secondary">
                  check_circle
                </span>
                <span className="font-body-md">Automated compliance and regulatory reporting engine</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="ace-card p-8 rounded space-y-6">
              <div className="flex justify-between items-center">
                <span className="font-section-label text-sm uppercase text-muted-foreground">NAV GROWTH MTD</span>
                <span className="font-data-point text-success-green">+4.22%</span>
              </div>

              {/* Mock Bar Chart Area */}
              <div className="h-64 flex items-end justify-between gap-4 px-2 relative border-b border-border">
                <div className="absolute inset-0 flex flex-col justify-between opacity-5 pointer-events-none">
                  <div className="h-px bg-border w-full"></div>
                  <div className="h-px bg-border w-full"></div>
                  <div className="h-px bg-border w-full"></div>
                  <div className="h-px bg-border w-full"></div>
                </div>
                <div className="w-full bg-success-green/20 border-t-2 border-success-green h-[40%] rounded-t-sm transition-all duration-500 hover:bg-success-green/30"></div>
                <div className="w-full bg-success-green/20 border-t-2 border-success-green h-[65%] rounded-t-sm transition-all duration-500 hover:bg-success-green/30"></div>
                <div className="w-full bg-success-green/20 border-t-2 border-success-green h-[55%] rounded-t-sm transition-all duration-500 hover:bg-success-green/30"></div>
                <div className="w-full bg-secondary/20 border-t-2 border-secondary h-[85%] rounded-t-sm transition-all duration-500 hover:bg-secondary/30 animate-pulse"></div>
                <div className="w-full bg-success-green/20 border-t-2 border-success-green h-[75%] rounded-t-sm transition-all duration-500 hover:bg-success-green/30"></div>
                <div className="w-full bg-success-green/20 border-t-2 border-success-green h-[95%] rounded-t-sm transition-all duration-500 hover:bg-success-green/30"></div>
              </div>

              {/* Stats values */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-slate-gray/30 rounded">
                  <p className="text-[10px] text-outline uppercase font-section-label">Sharpe</p>
                  <p className="font-data-point mt-1 text-foreground">2.84</p>
                </div>
                <div className="p-3 bg-slate-gray/30 rounded">
                  <p className="text-[10px] text-outline uppercase font-section-label">Sortino</p>
                  <p className="font-data-point mt-1 text-foreground">3.12</p>
                </div>
                <div className="p-3 bg-slate-gray/30 rounded">
                  <p className="text-[10px] text-outline uppercase font-section-label">Drawdown</p>
                  <p className="font-data-point text-error-red mt-1">-1.2%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation seat block */}
      <section className="ace-section">
        <div className="max-w-4xl mx-auto ace-card p-12 md:p-20 text-center border-secondary/30 relative rounded">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-on-secondary-fixed shadow-2xl">
            <span className="material-symbols-outlined text-4xl">
              trending_up
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg uppercase mb-6 text-foreground mt-4">
            Scale Your Performance with ACE CAPITAL
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 leading-relaxed">
            We are currently accepting applications for the Q3 Proprietary Intake. Review our trading mandates and technical requirements to begin the evaluation process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/careers"
              className="px-8 py-4 md:px-12 md:py-5 bg-secondary text-on-secondary-fixed font-bold font-section-label uppercase tracking-widest text-xs md:text-sm hover:brightness-110 transition-all rounded-sm text-center"
            >
              Start Evaluation
            </Link>
            <Link
              href="/careers#mandates"
              className="px-8 py-4 md:px-12 md:py-5 border border-outline text-on-surface font-section-label uppercase tracking-widest text-xs md:text-sm hover:bg-on-surface/5 transition-all rounded-sm text-center"
            >
              View Requirements
            </Link>
          </div>
          <p className="mt-8 text-secondary text-sm font-section-label uppercase tracking-widest animate-pulse">
            _____ 48 Seats Remaining _____
          </p>
        </div>
      </section>
    </>
  )
}
