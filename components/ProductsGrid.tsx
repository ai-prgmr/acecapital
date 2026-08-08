export default function ProductsGrid() {
  const products = [
    {
      title: "Mutual Funds",
      desc: "Institutional-grade portfolios built with algorithmic precision and multi-asset allocation.",
      icon: "donut_large",
    },
    {
      title: "Stocks",
      desc: "Direct equity investments backed by our proprietary quantitative signals and research.",
      icon: "trending_up",
    },
    {
      title: "Insurance",
      desc: "Comprehensive risk management tailored to protect your wealth and legacy.",
      icon: "shield",
    },
    {
      title: "Fixed Deposits",
      desc: "Stable, fixed-yield instruments optimized for absolute capital preservation.",
      icon: "account_balance",
    },
    {
      title: "PMS",
      desc: "Portfolio Management Services for customized, high-conviction wealth generation.",
      icon: "cases",
    },
    {
      title: "AIF",
      desc: "Alternative Investment Funds accessing private markets and complex strategies.",
      icon: "diamond",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="border-l-4 border-secondary pl-6 mb-8">
        <h2 className="font-headline-lg text-headline-lg uppercase text-foreground">
          Explore Our Products
        </h2>
        <p className="font-body-md text-on-surface-variant mt-2">
          Build a resilient, diversified portfolio across all major asset classes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((prod, idx) => (
          <div
            key={idx}
            className="ace-card p-8 rounded border border-outline-variant/20 hover:border-secondary transition-all group flex flex-col h-full cursor-pointer"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-primary-container text-secondary rounded mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">{prod.icon}</span>
            </div>
            <h3 className="font-headline-lg text-xl text-foreground uppercase mb-3 group-hover:text-secondary transition-colors">
              {prod.title}
            </h3>
            <p className="text-on-surface-variant font-body-md leading-relaxed mb-6 flex-grow">
              {prod.desc}
            </p>
            <div className="mt-auto flex items-center gap-2 text-muted-foreground group-hover:text-secondary transition-colors font-section-label text-xs uppercase tracking-widest">
              Learn More
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
