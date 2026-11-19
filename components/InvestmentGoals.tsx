"use client"
import Image from "next/image";
import { usePathname } from "next/navigation";

interface InvestmentGoalsProps {
  variant?: "default" | "compact";
  label?: string;
  title?: string;
  subtitle?: string;
}

const GOALS_DATA = [
  {
    id: "retirement",
    title: "Retirement Planning",
    tag: "15+ Yrs • Inflation Hedge",
    desc: "Build a resilient corpus over your working years for financial independence and steady post-retirement cashflow.",
    image: "/images/goals/retirement_planning_goal.png",
  },
  {
    id: "education",
    title: "Children's Education",
    tag: "10–15 Yrs • College Fund",
    desc: "Counter rising 10–12% education inflation with disciplined equity compounding for top-tier academic aspirations.",
    image: "/images/goals/children_education_goal.jpg",
  },
  {
    id: "wealth",
    title: "Wealth Creation",
    tag: "7+ Yrs • Long-Term Alpha",
    desc: "Grow your net worth systematically through diversified equity and flexi-cap schemes matched to your risk comfort.",
    image: "/images/goals/wealth_creation_goal.png",
  },
  {
    id: "marriage",
    title: "Child's Marriage",
    tag: "5–10 Yrs • Milestone",
    desc: "Accumulate capital for milestone celebrations with systematic de-risking into hybrid funds as the date approaches.",
    image: "/images/goals/child_marriage_goal.png",
  },
  {
    id: "diversification",
    title: "Portfolio Diversification",
    tag: "Ongoing • All-Weather",
    desc: "Shield family wealth from market volatility through structured multi-asset, debt, and arbitrage allocations.",
    image: "/images/goals/diversification_goal.jpg",
  },
];

export default function InvestmentGoals({
  variant = "default",
  label = "INVEST WITH PURPOSE",
  title = "GOALS THAT DRIVE YOU",
  subtitle = "Whatever your financial milestone, structured mutual fund investments help you achieve it with clarity and confidence.",
}: InvestmentGoalsProps) {
  const path = usePathname();

  if (variant === "compact") {
    return (
      <section className="ace-section ace-container space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="font-section-label text-xs text-secondary uppercase tracking-widest font-bold block">
            {label}
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl uppercase text-foreground">
            {title}
          </h2>
          <p className="font-body-md text-muted-foreground text-xs sm:text-sm leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {GOALS_DATA.map((goal) => (
            <div
              key={goal.id}
              className="bg-card border border-border hover:border-secondary/50 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div>
                <div className="relative w-full h-32 rounded-xl overflow-hidden mb-3 bg-muted">
                  <Image
                    src={goal.image}
                    alt={goal.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                  <span className="absolute bottom-2 left-2 bg-black/80 backdrop-blur-md text-[10px] text-white px-2 py-0.5 rounded-md font-semibold tracking-wide">
                    {goal.tag}
                  </span>
                </div>
                <h3 className="font-headline-lg text-base uppercase text-foreground mb-1.5 group-hover:text-secondary transition-colors">
                  {goal.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {goal.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="ace-section ace-container">
      <div className="text-center mb-12">
        {path == '/' ? <h2 className="font-section-label text-section-label uppercase tracking-widest text-secondary">
          {label}
        </h2> : <h2 className="font-section-label text-section-label uppercase tracking-widest text-secondary">
          {label}
        </h2>}
        <h2 className="font-headline-lg text-headline-lg mt-4 uppercase text-foreground">
          {title}
        </h2>
        <p className="font-body-md text-muted-foreground max-w-2xl mx-auto mt-4">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Goal 1: Retirement Planning (Spans 2 cols) */}
        <div className="md:col-span-2 bg-muted border border-border rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 overflow-hidden relative group hover:border-secondary transition-colors duration-500">
          <div className="relative w-full flex-1 h-48">
            <Image src="/images/goals/retirement_planning_goal.png" alt="Retirement Planning" fill className="object-cover rounded-lg" />
          </div>
          <div className="z-10 space-y-4 flex-1 max-w-md">
            <h3 className="font-headline-lg text-3xl uppercase text-foreground">Retirement Planning</h3>
            <p className="font-body-md text-muted-foreground">
              Build a resilient corpus over your working years to ensure a financially independent and comfortable retirement.
            </p>
          </div>
        </div>

        {/* Goal 2: Children Education */}
        <div className="bg-muted border border-border rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group hover:border-secondary transition-colors duration-500">
          <div className="z-10 space-y-4">
            <div className="relative w-full h-48 mb-4">
              <Image src="/images/goals/children_education_goal.jpg" alt="Children's Education" fill className="object-cover rounded-lg" />
            </div>
            <h3 className="font-headline-lg text-2xl uppercase">Children's Education</h3>
            <p className="font-body-sm ">
              Counter rising education inflation by starting early and securing their future academic aspirations.
            </p>
          </div>
          <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-8xl">local_library</span>
          </div>
        </div>

        {/* Goal 3: Child Marriage */}
        <div className="bg-muted border border-border rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group hover:border-secondary transition-colors duration-500">
          <div className="z-10 space-y-4">
            <div className="relative w-full h-48 mb-4">
              <Image src="/images/goals/child_marriage_goal.png" alt="Child's Marriage" fill className="object-cover rounded-lg" />
            </div>
            <h3 className="font-headline-lg text-2xl uppercase text-foreground">Child's Marriage</h3>
            <p className="font-body-sm text-muted-foreground">
              Systematically accumulate wealth to fund major life celebrations without compromising your core financial stability.
            </p>
          </div>
          <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <span className="material-symbols-outlined text-8xl">loyalty</span>
          </div>
        </div>

        {/* Goal 4: Portfolio Diversification */}
        <div className="bg-muted border border-border rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group hover:border-secondary transition-colors duration-500">
          <div className="z-10 space-y-4">
            <div className="relative w-full h-48 mb-4">
              <Image src="/images/goals/diversification_goal.jpg" alt="Portfolio Diversification" fill className="object-cover rounded-lg" />
            </div>
            <h3 className="font-headline-lg text-2xl uppercase text-foreground">Portfolio Diversification</h3>
            <p className="font-body-sm text-muted-foreground">
              Spread your risk across different asset classes, sectors, and geographies to create an all-weather investment portfolio.
            </p>
          </div>
          <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <span className="material-symbols-outlined text-8xl">donut_large</span>
          </div>
        </div>

        {/* Goal 5: Wealth Creation */}
        <div className="bg-muted border border-border rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group hover:border-secondary transition-colors duration-500">
          <div className="z-10 space-y-4">
            <div className="relative w-full h-48 mb-4">
              <Image src="/images/goals/wealth_creation_goal.png" alt="Wealth Creation" fill className="object-cover rounded-lg" />
            </div>
            <h3 className="font-headline-lg text-2xl uppercase text-foreground">Wealth Creation</h3>
            <p className="font-body-sm text-muted-foreground">
              Grow your money for the long run. Diversified equity and hybrid funds built for long-term growth, matched to your risk comfort.
            </p>
          </div>
          <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <span className="material-symbols-outlined text-8xl">account_balance_wallet</span>
          </div>
        </div>
      </div>
    </section >
  );
}
