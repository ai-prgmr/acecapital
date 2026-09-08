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

export const combinedMutualFundsFAQs = [
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

export default function MutualFundsContent() {


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
            {[
              "/acecapital/images/mf-carousel/Slide-1.png",
              "/acecapital/images/mf-carousel/slide-2.png",
              "/acecapital/images/mf-carousel/slide-3.png",
              "/acecapital/images/mf-carousel/slide-4.png"
            ].map((src, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full aspect-21/9 md:aspect-21/7 max-h-150">
                  <Image
                    src={src}
                    alt={`Mutual Funds Slide ${index + 1}`}
                    fill
                    className="object-contain"
                    priority={index === 0}
                    draggable={false}
                  />
                </div>
              </CarouselItem>
            ))}
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
      <section className="ace-section bg-surface-container-lowest border-t border-border">
        <div className="ace-container">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h2 className="font-headline-lg text-headline-lg uppercase text-foreground">
              Smart Ways to Invest & Withdraw
            </h2>
            <p className="font-body-lg text-on-surface-variant mt-4 mb-8">
              Whether you are accumulating wealth or generating a steady income, we offer structured plans to meet your financial objectives.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="inline-flex items-center gap-1.5 bg-primary/5 text-primary border border-primary/20 px-4 py-2 rounded-full font-medium text-sm">
                <CheckCircle2 className="w-4 h-4" /> Online Registration & KYC
              </span>
              <span className="inline-flex items-center gap-1.5 bg-primary/5 text-primary border border-primary/20 px-4 py-2 rounded-full font-medium text-sm">
                <CheckCircle2 className="w-4 h-4" /> No Paperwork
              </span>
              <span className="inline-flex items-center gap-1.5 bg-primary/5 text-primary border border-primary/20 px-4 py-2 rounded-full font-medium text-sm">
                <CheckCircle2 className="w-4 h-4" /> Seamless Investment
              </span>
              <span className="inline-flex items-center gap-1.5 bg-primary/5 text-primary border border-primary/20 px-4 py-2 rounded-full font-medium text-sm">
                <CheckCircle2 className="w-4 h-4" /> Hassle-free Redemption
              </span>
            </div>
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




      {/* Screener Promotional Section */}
      <section className="ace-section ace-container border-t border-border">
        <div className="bg-primary/5 rounded-3xl p-8 md:p-12 text-center border border-primary/20">
          <h2 className="font-headline-lg text-3xl md:text-4xl uppercase text-foreground mb-4">
            Discover Top Mutual Funds
          </h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8 text-lg">
            Explore our advanced screener to filter, analyze, and compare the best mutual funds tailored to your investment goals.
          </p>
          <Link href="/screener" className="button-secondary px-8 py-3.5 rounded-full font-bold shadow-sm hover:shadow-md inline-flex items-center gap-2 bg-white text-primary border border-primary transition-all hover:bg-primary hover:text-white">
            Explore Screener
            <span className="text-xl leading-none">→</span>
          </Link>
        </div>
      </section>

      {/* Interactive Growth Projection Tool */}
      <section className="ace-section bg-surface-container-lowest border-y border-border">
        <div className="ace-container">
          <MutualFundsCalculator />

          <div className="mt-16 text-center">
            <h3 className="font-headline-md text-2xl uppercase text-foreground mb-4">Ready to start your journey?</h3>
            <Link href="https://mf.acecapitalenterprise.com/" target="_blank" className="button-primary px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-xl inline-flex items-center gap-2 text-lg bg-primary text-primary-foreground transition-all">
              Start investing now
              <span className="text-2xl leading-none">→</span>
            </Link>
          </div>
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
        subtitle="Common inquiries regarding our institutional-grade investment vehicles and strategy methodology."
        items={combinedMutualFundsFAQs}
      />
    </>
  )
}
