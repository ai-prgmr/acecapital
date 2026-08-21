import { Metadata } from "next"
import FAQSection from "@/components/FAQSection"

export const metadata: Metadata = {
  title: "Prop Trading & Auto Desk | ACE CAPITAL",
  description: "Ace Capital runs an in-house proprietary trading desk — trading the firm's own capital across equity, derivatives, cash and ETFs, driven by quantitative strategies and automated, low-latency execution.",
  alternates: {
    canonical: "/prop-trading-automated",
  },
}

export default function PropTradingAutomated() {
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

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://acecapitalenterprise.com/prop-trading-automated/#webpage",
        "url": "https://acecapitalenterprise.com/prop-trading-automated",
        "name": "Prop Trading & Auto Desk | ACE CAPITAL",
        "description": "Ace Capital runs an in-house proprietary trading desk...",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://acecapitalenterprise.com/#website",
          "url": "https://acecapitalenterprise.com",
          "name": "Ace Capital Enterprise"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://acecapitalenterprise.com/prop-trading-automated/#faq",
        "isPartOf": {
          "@id": "https://acecapitalenterprise.com/prop-trading-automated/#webpage"
        },
        "mainEntity": propFAQs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      
      <main className="min-h-screen pt-24 font-sans bg-background text-foreground">
        
        {/* 01 HERO */}
        <section className="relative px-gutter py-16 md:py-24 border-b border-border/40 hero-gradient">
          <div className="ace-container grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 z-10">
              <div className="inline-block px-3 py-1 border border-secondary/50 rounded-full font-section-label text-[10px] md:text-xs text-secondary tracking-widest uppercase bg-secondary/10">
                PROPRIETARY TRADING · AUTO DESK
              </div>
              <h1 className="text-display-hero text-foreground mb-4">
                Our own capital.<br />
                <span className="metallic-gradient">Our own edge.</span>
              </h1>
              <p className="text-body-lg text-muted-foreground max-w-xl">
                Ace Capital runs an in-house proprietary trading desk — trading the firm's own capital across equity, derivatives, cash and ETFs, driven by quantitative strategies and automated, low-latency execution.
              </p>
              <div className="border-l-4 border-secondary pl-4 py-3 pr-4 text-body-md text-foreground bg-muted/50 rounded-r-md max-w-xl">
                Ace Capital's proprietary trading arm is separate and distinct from its AMFI-registered mutual fund distribution business.
              </div>
              <div className="flex flex-wrap gap-4 pt-6">
                <button className="button-primary px-8 py-3 rounded-md">
                  Explore the Desk
                </button>
                <button className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-3 rounded-md font-semibold transition-colors">
                  How We Trade
                </button>
              </div>
            </div>
            
            {/* Minimalist Corporate Visualization */}
            <div className="hidden lg:flex items-center justify-center h-full">
              <div className="relative w-full max-w-md aspect-square glass-card rounded-2xl flex items-center justify-center overflow-hidden border border-border">
                {/* Abstract Data Visualization */}
                <div className="absolute inset-0 flex items-end justify-between px-8 pb-12">
                  {[...Array(12)].map((_, i) => {
                    const height = Math.random() * 60 + 20;
                    return (
                      <div 
                        key={i} 
                        className="w-4 bg-primary/20 rounded-t-sm relative group overflow-hidden" 
                        style={{ height: `${height}%`, transition: 'height 1s ease-in-out' }}
                      >
                         <div className="absolute bottom-0 left-0 w-full bg-primary/40" style={{ height: `${height * 0.7}%` }}></div>
                         <div className="absolute top-0 left-0 w-full h-1 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    )
                  })}
                </div>
                
                {/* Overlay Elements */}
                <div className="absolute top-8 left-8 right-8 glass-card rounded-lg p-4 flex justify-between items-center border border-white/40 shadow-sm">
                   <div>
                     <div className="text-xs text-muted-foreground font-mono font-bold uppercase tracking-wider mb-1">Algo Performance</div>
                     <div className="text-2xl font-bold text-primary">+14.2%</div>
                   </div>
                   <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 WHAT WE DO */}
        <section className="px-gutter py-16 md:py-24 border-b border-border/40 bg-surface-container-low">
          <div className="ace-container space-y-8 text-center max-w-4xl mx-auto">
             <h2 className="text-headline-lg">
               We trade <span className="text-primary">our own book.</span>
             </h2>
             <p className="text-body-lg text-muted-foreground">
               Ace Capital's proprietary desk puts the firm's own capital to work across equity, derivatives, cash and ETFs. Every strategy is researched, tested and run in-house, then executed by our own technology — no client money, no outside mandates. Just our capital, our strategies, our risk.
             </p>
             <div className="flex flex-wrap justify-center gap-4 pt-4">
               {['Equity', 'Derivatives (F&O)', 'Cash', 'ETFs'].map(asset => (
                 <span key={asset} className="px-6 py-2 rounded-full border border-secondary/30 bg-secondary/10 text-secondary font-medium tracking-wide">
                   {asset}
                 </span>
               ))}
             </div>
          </div>
        </section>

        {/* 03 HOW WE TRADE */}
        <section className="px-gutter py-16 md:py-24 border-b border-border/40 bg-muted/30">
          <div className="ace-container space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-headline-lg">Three pillars, one desk</h2>
              <p className="text-body-lg text-muted-foreground">Research, automation and risk — working as one.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { num: '01', title: 'Quantitative Research', desc: 'We turn market data into tested, rules-based strategies — researched, backtested and refined before a rupee is put at risk.' },
                { num: '02', title: 'The Auto Desk', desc: 'Our automated execution engine runs strategies systematically — fast, consistent and monitored around the clock.' },
                { num: '03', title: 'Trading & Risk', desc: 'Every position sits inside strict, real-time risk limits. Discipline over adrenaline, always.' }
              ].map(pillar => (
                <div key={pillar.num} className="glass-card p-8 rounded-xl space-y-4 hover:border-secondary/30 transition-all hover:-translate-y-1">
                  <span className="text-secondary font-mono text-sm font-bold bg-secondary/10 px-2 py-1 rounded inline-block">{pillar.num}</span>
                  <h3 className="text-xl font-bold text-foreground">{pillar.title}</h3>
                  <p className="text-body-md text-muted-foreground">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 04 THE AUTO DESK */}
        <section className="px-gutter py-16 md:py-24 border-b border-border/40">
          <div className="ace-container space-y-12">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-headline-lg">The Auto Desk — <span className="text-primary">automation at the core</span></h2>
              <p className="text-body-lg text-muted-foreground">Our automated execution engine turns researched strategies into consistent, monitored, rules-based trading.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Systematic execution', desc: 'Strategies run to rules, not emotion — the same logic, every time.' },
                { title: 'Low-latency infrastructure', desc: 'Built for speed and reliability across market hours.' },
                { title: 'Always-on monitoring', desc: 'The desk is watched in real time, with alerts on every strategy.' },
                { title: 'Hard risk guardrails', desc: 'Automated position limits and kill-switches on every book.' }
              ].map((feature, i) => (
                <div key={i} className="bg-card p-8 rounded-xl border border-border/50 shadow-sm space-y-3 hover:shadow-md transition-shadow group">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                     <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{feature.title}</h3>
                  <p className="text-body-md text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 05 OUR EDGE */}
        <section className="px-gutter py-16 md:py-24 border-b border-border/40 bg-muted/30">
          <div className="ace-container space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-headline-lg">What sets our desk apart</h2>
              <p className="text-body-lg text-muted-foreground">Right-sized advantages of a focused, in-house desk.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'In-house technology', desc: 'We build our own tools, end to end — research to execution.' },
                { title: 'Agile by design', desc: 'A boutique desk adapts faster than a giant.' },
                { title: 'Research-led', desc: 'Every strategy earns its place with evidence, not hunches.' },
                { title: 'Risk-first', desc: 'Capital preservation comes before profit — every single day.' }
              ].map((edge, i) => (
                <div key={i} className="glass-card p-8 rounded-xl border-l-4 border-l-secondary space-y-2">
                  <h3 className="text-lg font-bold text-foreground">{edge.title}</h3>
                  <p className="text-body-md text-muted-foreground">{edge.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 06 RISK MANAGEMENT */}
        <section className="px-gutter py-16 md:py-24 border-b border-border/40">
          <div className="ace-container space-y-12">
            <h2 className="text-headline-lg text-center">Risk comes <span className="text-secondary">first</span></h2>
            
            <div className="bg-primary/5 border border-primary/10 p-8 md:p-12 rounded-2xl flex flex-col md:flex-row gap-8 items-center shadow-sm">
              <div className="w-24 h-24 flex-shrink-0 bg-white border border-primary/20 rounded-2xl flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-primary text-5xl">
                  shield_locked
                </span>
              </div>
              <p className="text-body-lg text-foreground leading-relaxed">
                Proprietary trading is a discipline of risk, not a gamble. Position limits, automated stop-outs, real-time exposure monitoring and strict capital controls govern every strategy on the desk. Capital preservation is the first rule — profit is the second.
              </p>
            </div>
          </div>
        </section>

        {/* 07 FAQ SECTION */}
        <FAQSection
          title="Proprietary Trading FAQ"
          subtitle="Answers to common questions regarding capital allocation and risk."
          items={propFAQs}
        />

        {/* 08 DISCLAIMER */}
        <section className="px-gutter py-12 bg-muted/50 border-t border-border/40">
          <div className="ace-container text-xs text-muted-foreground leading-relaxed space-y-2">
            <p>
              <strong>Proprietary capital only.</strong> Ace Capital Enterprise's proprietary trading desk trades the firm's own capital. It is not a portfolio management, advisory or investment service; it does not accept, pool or manage public or client money; and it does not offer, solicit or guarantee any investment or returns. This activity is separate and distinct from Ace Capital Enterprise's AMFI-registered mutual fund distribution business (ARN-113576).
            </p>
            <p className="italic">
              This page showcases the firm's in-house trading capability for information only.
            </p>
          </div>
        </section>

      </main>
    </>
  )
}
