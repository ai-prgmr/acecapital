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
    question: "What is a mutual fund, in simple terms?",
    answer: "A mutual fund pools money from many investors, and a professional fund manager invests it across stocks, bonds or other assets. You own units in proportion to what you put in, and their value moves with the market. It's one of the simplest ways to start investing without having to pick individual stocks yourself.",
  },
  {
    question: "SIP or lump sum — which is better for me?",
    answer: "Both work. A SIP invests a fixed amount every month — it builds discipline and averages out market ups and downs, which suits anyone earning monthly. A lump sum fits money you already have ready. Many investors do both, and you can start a SIP from just ₹500 a month.",
  },
  {
    question: "What is KYC, and what documents do I need?",
    answer: "KYC is a one-time ID check every mutual fund investor completes once. You'll just need your PAN, an address proof and a bank account — and we help you finish it online in minutes.",
  },
  {
    question: "Direct vs Regular plan — what's the difference, and why invest through you?",
    answer: "Direct plans carry no distributor commission, but you research, choose, monitor and rebalance entirely on your own. Regular plans include a small commission (paid by the fund house — never charged to you on top) and come with our help: choosing suitable funds, setting up SIPs, regular reviews and someone to call. If you value guidance over doing it all yourself, Regular through us is the better fit.",
  },
  {
    question: "Do you charge me any fees?",
    answer: "No fee from you. We're paid a small commission by the fund house on the Regular Plan you invest in — so our guidance and service cost you nothing extra.",
  },
  {
    question: "Can I save tax with mutual funds?",
    answer: "Yes — ELSS (Equity Linked Savings Scheme) funds qualify for deduction under Section 80C (up to ₹1.5 lakh a year), with a 3-year lock-in. We'll help you invest the right amount at the right time, rather than rushing it all in at year-end.",
  },
  {
    question: "How do I take my money out (redeem)?",
    answer: "For most open-ended funds you can redeem part or all anytime, and the money reaches your bank in a few working days. Some funds — like ELSS or close-ended schemes — have a lock-in, and we'll always flag that before you invest.",
  },
  {
    question: "Can NRIs invest through Ace Capital?",
    answer: "Yes. NRIs can invest in Indian mutual funds through an NRE/NRO account, subject to KYC and FEMA rules. A few fund houses restrict investors from certain countries (e.g. US/Canada) — we'll guide you on what's available for your situation.",
  },
  {
    question: "Which funds should I choose?",
    answer: "We'll help you shortlist funds that fit your goals, time horizon and comfort with risk — explained in plain words, with the reason behind each pick. The final call is always yours.",
  },
  {
    question: "Is my money safe, and where is it held?",
    answer: "Your money never sits with us. It goes straight to the fund house, and your units are held in your name with the registrar (CAMS/KFintech). We help you invest and look after it — but it always belongs to you. Do remember, mutual funds move with the market, so their value can rise and fall.",
  },
  {
    question: "How do I track my investments?",
    answer: "See your whole portfolio, start or pause SIPs, and download statements anytime on the DhanSetu app (iOS · Android) or the web portal. You can also call us for a plain-English update whenever you like.",
    answerNode: <>See your whole portfolio, start or pause SIPs, and download statements anytime on the DhanSetu app (<a href="https://apps.apple.com/in/app/dhan-setu/id6761404925" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">iOS</a> &middot; <a href="https://play.google.com/store/apps/details?id=com.dhan.app.setu" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Android</a>) or the <a href="https://mf.acecapitalenterprise.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">web portal</a>. You can also call us for a plain-English update whenever you like.</>
  },
  {
    question: "What if I have a complaint?",
    answer: "Write to us first at support@acecapitalenterprise.com · +91 9220556760. If it isn't resolved, you can escalate to the fund house, and then to the regulators — AMFI and SEBI via the SCORES portal or SMART ODR.",
    answerNode: <>Write to us first at <a href="mailto:support@acecapitalenterprise.com" className="text-secondary hover:underline">support@acecapitalenterprise.com</a> &middot; +91 9220556760. If it isn't resolved, you can escalate to the fund house, and then to the regulators &mdash; <a href="https://www.amfiindia.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">AMFI</a> and SEBI via the <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">SCORES portal</a> or <a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">SMART ODR</a>.</>
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
              "/images/mf-carousel/Slide-1.png",
              "/images/mf-carousel/slide-2.png",
              "/images/mf-carousel/slide-3.png",
              "/images/mf-carousel/slide-4.png"
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
