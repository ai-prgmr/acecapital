"use client"

import FAQSection from "@/components/FAQSection"
import MutualFundsCalculator from "@/components/MutualFundsCalculator"
import TopFundsTabbed from "@/components/TopFundsTabbed"
import ProductsGrid from "@/components/ProductsGrid"
import Link from "next/link"
import Image from "next/image"
import { TrendingUp, ArrowDownToLine, CheckCircle2 } from "lucide-react"
import InvestmentGoals from "@/components/InvestmentGoals"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
export default function MutualFundsContent() {
  const fundsFAQs = [
    {
      question: "What is the level of fund management expertise?",
      answer: "Our portfolios are managed by senior strategists with over 25 years of institutional experience, utilizing proprietary algorithmic frameworks and deep fundamental analysis.",
    },
    {
      question: "How often are the funds rebalanced?",
      answer: "We employ dynamic rebalancing triggered by quantitative signals and market volatility thresholds, ensuring capital is always optimized for current market conditions.",
    },
    {
      question: "How do I begin investing via the portal?",
      answer: "Existing clients can access the 'Portal Login' to allocate capital. New institutional partners should contact our desk to initiate the onboarding and compliance process.",
    },
    {
      question: "Are these funds available to retail investors?",
      answer: "ACE Capital Mutual Funds are primarily designed for institutional-grade wealth management, though select vehicles are available for high-net-worth individual portfolios.",
    },
  ]

  const funds = [
    { name: "Global Strategy Yield", type: "Multi-Asset", risk: "Low", nav: "₹156.90", ytd: "+12.40%" },
    { name: "Core Equity Growth", type: "Large Cap", risk: "High", nav: "₹342.10", ytd: "+18.70%" },
    { name: "Strategic Arbitrage Fund", type: "Market Neutral", risk: "Low", nav: "₹112.50", ytd: "+9.82%" },
    { name: "Global Multi-Asset Dynamic", type: "Balanced", risk: "Moderate", nav: "₹156.90", ytd: "+11.08%" },
    { name: "Emerging Markets Quant", type: "Intl Equity", risk: "High", nav: "₹94.22", ytd: "+14.30%" },
  ]

  return (
    <>
      {/* Hero Carousel section */}
      <section className="relative w-full overflow-hidden">
        <Carousel
          opts={{ loop: true, align: "start" }}
          plugins={[Autoplay({ delay: 3000 })]}
          className="w-full"
        >
          <CarouselContent>
            {/* Slide 3 - SIP Banner 1 */}
            <CarouselItem>
              <div className="relative w-full h-150 flex items-center justify-center bg-background px-4 md:px-12">
                <div className="relative overflow-hidden rounded-xl bg-card border border-border shadow-sm flex flex-col md:flex-row w-full max-w-7xl">
                  <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-muted text-secondary border border-border rounded-full font-bold text-xs tracking-widest uppercase w-fit">
                      Systematic Investment Plan · SIP
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight mb-4 tracking-tight">
                      Small steps today,<br />
                      <span className="text-primary">big futures</span> tomorrow.
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-xl">
                      Invest a fixed amount every month, automatically. Let steady, disciplined investing do the heavy lifting over time.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-10">
                      <span className="bg-muted text-foreground px-4 py-2 rounded-md font-semibold text-sm">Start at ₹500</span>
                      <span className="bg-muted text-foreground px-4 py-2 rounded-md font-semibold text-sm">Fully automatic</span>
                      <span className="bg-muted text-foreground px-4 py-2 rounded-md font-semibold text-sm">Pause or step up anytime</span>
                    </div>
                    <div>
                      <button className="button-primary px-8 py-3.5 rounded-full font-bold shadow-md hover:shadow-lg inline-flex items-center gap-2">
                        Start your SIP
                        <span className="text-xl leading-none">→</span>
                      </button>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-[45%] lg:w-[50%] relative">
                    <div className="absolute inset-0 bg-primary transform -skew-x-12 origin-top-right translate-x-16 z-0 border-l-[8px] border-white"></div>
                    <div className="absolute inset-0 z-10 flex flex-col items-start justify-center pl-16 pr-8 text-primary-foreground h-full" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}>
                      <div className="w-full h-full relative p-8 flex flex-col">
                        <h3 className="text-xl font-bold mb-1">The power of consistency</h3>
                        <p className="text-primary-foreground/70 text-sm mb-4">Illustrative concept, not indicative of returns</p>
                        <div className="relative flex-1 rounded-lg overflow-hidden border border-primary/20 shadow-2xl bg-white">
                          <Image src="/acecapital/images/sip-graph.jpg" alt="SIP Growth" fill className="object-cover" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* Slide 4 - SIP Banner 2 */}
            <CarouselItem>
              <div className="relative w-full h-150 flex items-center justify-center bg-background px-4 md:px-12">
                <div className="relative overflow-hidden rounded-xl bg-card border border-border shadow-sm flex flex-col md:flex-row w-full max-w-7xl">
                  <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-2 uppercase tracking-tight">
                      Creating better investors with <span className="text-primary">SIP</span>
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl font-bold mb-10">
                      (SYSTEMATIC INVESTMENT PLAN IN MUTUAL FUND)
                    </p>

                    <div className="flex flex-col sm:flex-row gap-8 lg:gap-16">
                      <div className="flex items-center gap-4">
                        <div className="text-secondary bg-secondary/10 p-4 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                        </div>
                        <div>
                          <div className="text-primary font-bold text-2xl">9 New SIPs</div>
                          <div className="text-muted-foreground font-medium">per minute</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="text-secondary bg-secondary/10 p-4 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>
                        </div>
                        <div>
                          <div className="text-primary font-bold text-2xl">2588 Cr</div>
                          <div className="text-muted-foreground font-medium">Monthly SIP book</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 min-h-[300px] relative mt-8 md:mt-0 opacity-90 mix-blend-multiply hidden md:block">
                    <Image src="/acecapital/images/crowd-arrow.jpg" alt="Crowd forming an upward arrow" fill className="object-cover md:object-contain object-right" />
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="absolute bottom-8 right-16 flex gap-2">
            {/* Custom styled Next/Prev buttons to override shadcn defaults */}
            <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 h-12 w-12 bg-white/10 text-white border-white/20 hover:bg-white/30" />
            <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 h-12 w-12 bg-white/10 text-white border-white/20 hover:bg-white/30" />
          </div>
        </Carousel>
      </section>

      {/* Investment Goals */}
      <InvestmentGoals />

      {/* SIP & SWP Section */}
      <section className="ace-section bg-surface-container-lowest border-t border-border py-16">
        <div className="ace-container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="font-headline-lg text-headline-lg uppercase text-foreground">
              Smart Ways to Invest & Withdraw
            </h2>
            <p className="font-body-lg text-on-surface-variant mt-4">
              Whether you are accumulating wealth or generating a steady income, we offer structured plans to meet your financial objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* SIP Card */}
            <div className="group relative bg-surface-container border border-outline-variant/30 rounded-2xl p-8 hover:border-secondary hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/10 transition-colors duration-300"></div>

              <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7" />
              </div>

              <h3 className="font-headline-md text-2xl uppercase text-foreground mb-3">Systematic Investment Plan (SIP)</h3>
              <p className="font-body-md text-on-surface-variant mb-6">
                A SIP lets you invest a fixed amount every month automatically, helping you harness the power of compounding and market-averaging without needing to time the market.
              </p>

              <ul className="space-y-3">
                {[
                  "Start with as little as ₹500 per month",
                  "Fully automatic debits from your linked account",
                  "Pause, increase, or stop anytime",
                  "Beneficial for long-term goals like retirement"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success-green shrink-0 mt-0.5" />
                    <span className="font-body-sm text-on-surface">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SWP Card */}
            <div className="group relative bg-surface-container border border-outline-variant/30 rounded-2xl p-8 hover:border-secondary hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-[100px] -z-10 group-hover:bg-secondary/10 transition-colors duration-300"></div>

              <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-6">
                <ArrowDownToLine className="w-7 h-7" />
              </div>

              <h3 className="font-headline-md text-2xl uppercase text-foreground mb-3">Systematic Withdrawal Plan (SWP)</h3>
              <p className="font-body-md text-on-surface-variant mb-6">
                A SWP allows you to receive a regular cash flow from your existing mutual fund holdings while the rest of your portfolio continues to stay invested and grow.
              </p>

              <ul className="space-y-3">
                {[
                  "Withdraw a chosen amount at regular intervals",
                  "Maintain the growth potential of the remaining corpus",
                  "Flexibility to adjust withdrawal amount or frequency",
                  "Ideal for generating regular income during retirement"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success-green shrink-0 mt-0.5" />
                    <span className="font-body-sm text-on-surface">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>




      {/* Fund Performance Index Table */}
      <section className="ace-section ace-container border-t border-border">
        <div className="mb-12 border-l-4 border-secondary pl-6">
          <h2 className="font-headline-lg text-headline-lg uppercase text-foreground">
            Fund Performance Index
          </h2>
          <p className="font-body-md text-on-surface-variant mt-2">
            Real-time performance metrics across our flagship portfolios.
          </p>
        </div>

        <div className="ace-card rounded overflow-hidden border border-outline-variant/20">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary-container text-muted-foreground uppercase font-section-label text-xs tracking-wider border-b border-border">
                  <th className="px-6 py-4">Fund Name</th>
                  <th className="px-6 py-4">Type</th>
                  <th className="px-6 py-4 text-center">Risk Profile</th>
                  <th className="px-6 py-4 text-right">NAV</th>
                  <th className="px-6 py-4 text-right">YTD Return</th>
                  <th className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="font-body-md text-sm">
                {funds.map((fund, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-border hover:bg-muted transition-colors"
                  >
                    <td className="px-6 py-5 font-bold text-foreground">{fund.name}</td>
                    <td className="px-6 py-5 text-on-surface-variant">{fund.type}</td>
                    <td className="px-6 py-5 text-center">
                      <span className={`px-2 py-1 text-[10px] uppercase font-bold rounded-sm ${fund.risk === "High"
                        ? "bg-error-container text-error"
                        : fund.risk === "Moderate"
                          ? "bg-secondary-container/20 text-secondary"
                          : "bg-primary-container text-primary"
                        }`}>
                        {fund.risk}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right font-data-point text-muted-foreground">{fund.nav}</td>
                    <td className="px-6 py-5 text-right font-data-point text-success-green">{fund.ytd}</td>
                    <td className="px-6 py-5 text-center">
                      <button className="text-secondary hover:underline font-section-label text-xs uppercase tracking-widest">
                        Explore
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Top Performing Funds Tabbed */}
      <section className="ace-section bg-background">
        <div className="ace-container">
          <TopFundsTabbed />
        </div>
      </section>

      {/* Interactive Growth Projection Tool */}
      <section className="ace-section bg-surface-container-lowest border-y border-border">
        <div className="ace-container">
          <MutualFundsCalculator />
        </div>
      </section>

      {/* Pillars / Features */}
      <section className="ace-section bg-background">
        <div className="ace-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 flex items-center justify-center bg-primary-container text-secondary rounded">
                <span className="material-symbols-outlined">analytics</span>
              </div>
              <h3 className="font-headline-lg text-2xl text-foreground uppercase">Expert Management</h3>
              <p className="text-on-surface-variant font-body-md leading-relaxed">
                Our portfolio managers leverage over 25 years of institutional experience, combining traditional fundamental analysis with ACE's proprietary quantitative signals.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 flex items-center justify-center bg-primary-container text-secondary rounded">
                <span className="material-symbols-outlined">pie_chart</span>
              </div>
              <h3 className="font-headline-lg text-2xl text-foreground uppercase">Asset Allocation</h3>
              <p className="text-on-surface-variant font-body-md leading-relaxed">
                Dynamic rebalancing ensures your capital is always positioned in the highest probability sectors while maintaining strict risk-adjusted volatility boundaries.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 flex items-center justify-center bg-primary-container text-secondary rounded">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <h3 className="font-headline-lg text-2xl text-foreground uppercase">Robust Performance</h3>
              <p className="text-on-surface-variant font-body-md leading-relaxed">
                ACE Capital funds have consistently outperformed benchmarks across market cycles, focusing on capital preservation during downturns and alpha capture in rallies.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Mutual Funds FAQ Accordion */}
      <FAQSection
        title="Mutual Fund FAQ"
        subtitle="Common inquiries regarding our institutional-grade investment vehicles."
        items={fundsFAQs}
      />
    </>
  )
}
