import FAQSection from "@/components/FAQSection"
import MutualFundsCalculator from "@/components/MutualFundsCalculator"
import TopFundsTabbed from "@/components/TopFundsTabbed"
import ProductsGrid from "@/components/ProductsGrid"
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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

  const reports = [
    {
      tag: "Q3 PERFORMANCE",
      title: "Equity Alpha Report",
      desc: "Detailed breakdown of stock selection and sector weightings for the last quarter.",
    },
    {
      tag: "MACRO INSIGHTS",
      title: "Fixed Income Outlook",
      desc: "Projections on interest rates and credit spread volatility for the next 12 months.",
    },
    {
      tag: "RISK MGMT",
      title: "Volatility Framework",
      desc: "How ACE Capital shields wealth during extreme market stress events.",
    },
    {
      tag: "FUTURE TECH",
      title: "The Quant Desk",
      desc: "Deep dive into the algorithmic signals driving our flagship automated funds.",
    },
  ]

  return (
    <>
      {/* Hero Carousel section */}
      <section className="relative w-full overflow-hidden">
        <Carousel
          opts={{ loop: true, align: "start" }}
          className="w-full"
        >
          <CarouselContent>
            {/* Slide 1 */}
            <CarouselItem>
              <div className="relative w-full h-150 flex items-center">
                {/* Background Image Placeholder - Replace url() with your image path */}
                <div
                  className="absolute inset-0 bg-slate-900 bg-cover bg-center"
                  style={{ backgroundImage: "url('/placeholder-slide-1.jpg')" }}
                >
                  <div className="absolute inset-0 bg-black/60"></div>
                </div>
                {/* Content */}
                <div className="ace-container relative z-10 w-full text-white">
                  <div className="space-y-8 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm">
                      <span className="w-2 h-2 rounded-full bg-success-green animate-pulse"></span>
                      <span className="font-section-label text-xs uppercase tracking-widest text-white">
                        Managed Wealth Portfolios
                      </span>
                    </div>
                    <h1 className="font-display-hero text-4xl md:text-5xl lg:text-7xl leading-tight uppercase">
                      Institutional <span className="text-[#a88945] italic">Precision.</span>
                    </h1>
                    <p className="font-body-lg text-gray-200 max-w-xl leading-relaxed">
                      Leverage ACE Capital’s proprietary algorithmic frameworks and institutional-grade asset allocation for long-term wealth growth.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                      <Link
                        href="https://mf.acecapitalenterprise.com" target="_blank"
                        className="bg-secondary text-on-secondary-fixed px-6 py-3.5 md:px-8 md:py-4 font-section-label text-xs md:text-sm uppercase font-bold tracking-widest hover:brightness-110 active:scale-95 transition-all text-center rounded-sm"
                      >
                        Start Investing
                      </Link>
                      <button className="px-6 py-3 md:px-8 md:py-4 border border-white/30 text-white font-bold font-section-label tracking-widest text-xs md:text-sm hover:bg-white/10 active:scale-95 transition-all uppercase rounded">
                        View Market Insights
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* Slide 2 */}
            <CarouselItem>
              <div className="relative w-full h-150 flex items-center">
                {/* Background Image Placeholder - Replace url() with your image path */}
                <div
                  className="absolute inset-0 bg-[#1b365d] bg-cover bg-center"
                  style={{ backgroundImage: "url('/placeholder-slide-2.jpg')" }}
                >
                  <div className="absolute inset-0 bg-black/50"></div>
                </div>
                {/* Content */}
                <div className="ace-container relative z-10 w-full text-white">
                  <div className="space-y-8 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm">
                      <span className="font-section-label text-xs uppercase tracking-widest text-white">
                        Global Reach
                      </span>
                    </div>
                    <h1 className="font-display-hero text-4xl md:text-5xl lg:text-7xl leading-tight uppercase">
                      Expand Your <span className="text-[#329671] italic">Horizons.</span>
                    </h1>
                    <p className="font-body-lg text-gray-200 max-w-xl leading-relaxed">
                      Invest seamlessly across borders with our integrated NRI solutions and global market access platforms.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                      <button className="px-6 py-3 md:px-8 md:py-4 bg-[#329671] text-white font-bold font-section-label tracking-widest text-xs md:text-sm hover:brightness-110 active:scale-95 transition-all uppercase rounded">
                        Discover NRI Desk
                      </button>
                    </div>
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

      {/* What We Can Do For You Section */}
      <section className="ace-section bg-surface-container-lowest border-t border-border">
        <div className="ace-container">
          <div className="mb-12 border-l-4 border-secondary pl-6">
            <h2 className="font-headline-lg text-headline-lg uppercase text-foreground">
              What We Can Do For You
            </h2>
            <p className="font-body-md text-on-surface-variant mt-2">
              Simple, paperless mutual fund investing — with personal support at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Item 1 */}
            <div className="ace-card flex overflow-hidden border border-outline-variant/30 hover:border-secondary transition-colors duration-300">
              <div className="bg-primary text-on-primary w-16 md:w-20 flex items-center justify-center font-display-hero text-3xl shrink-0">
                1
              </div>
              <div className="p-6">
                <h3 className="font-headline-lg text-lg uppercase text-primary mb-1">
                  Goal-Based Investing
                </h3>
                <p className="font-section-label text-xs uppercase tracking-widest text-secondary mb-3">
                  Invest the way your goals demand.
                </p>
                <p className="font-body-md text-on-surface-variant">
                  We match mutual funds to your life goals and time horizon, then help you invest by SIP or lumpsum — fully paperless.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="ace-card flex overflow-hidden border border-outline-variant/30 hover:border-secondary transition-colors duration-300">
              <div className="bg-primary text-on-primary w-16 md:w-20 flex items-center justify-center font-display-hero text-3xl shrink-0">
                2
              </div>
              <div className="p-6">
                <h3 className="font-headline-lg text-lg uppercase text-primary mb-1">
                  Retirement Solutions
                </h3>
                <p className="font-section-label text-xs uppercase tracking-widest text-secondary mb-3">
                  Build the income you'll retire on.
                </p>
                <p className="font-body-md text-on-surface-variant">
                  Long-term, disciplined portfolios designed to grow your retirement corpus at your own pace.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="ace-card flex overflow-hidden border border-outline-variant/30 hover:border-secondary transition-colors duration-300">
              <div className="bg-primary text-on-primary w-16 md:w-20 flex items-center justify-center font-display-hero text-3xl shrink-0">
                3
              </div>
              <div className="p-6">
                <h3 className="font-headline-lg text-lg uppercase text-primary mb-1">
                  Wealth Creation
                </h3>
                <p className="font-section-label text-xs uppercase tracking-widest text-secondary mb-3">
                  Grow your money for the long run.
                </p>
                <p className="font-body-md text-on-surface-variant">
                  Diversified equity and hybrid funds built for long-term growth, matched to your risk comfort.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="ace-card flex overflow-hidden border border-outline-variant/30 hover:border-secondary transition-colors duration-300">
              <div className="bg-primary text-on-primary w-16 md:w-20 flex items-center justify-center font-display-hero text-3xl shrink-0">
                4
              </div>
              <div className="p-6">
                <h3 className="font-headline-lg text-lg uppercase text-primary mb-1">
                  Portfolio Review
                </h3>
                <p className="font-section-label text-xs uppercase tracking-widest text-secondary mb-3">
                  Know where you stand, always.
                </p>
                <p className="font-body-md text-on-surface-variant">
                  A single consolidated view of your holdings, with periodic reviews and rebalancing support to keep you on track.
                </p>
              </div>
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
