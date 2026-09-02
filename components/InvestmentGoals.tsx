import Image from "next/image";

export default function InvestmentGoals() {
  return (
    <section className="ace-section ace-container">
      <div className="text-center mb-12">
        <span className="font-section-label text-section-label uppercase tracking-widest text-secondary">
          INVEST WITH PURPOSE
        </span>
        <h2 className="font-headline-lg text-headline-lg mt-4 uppercase text-foreground">
          GOALS THAT DRIVE YOU
        </h2>
        <p className="font-body-md text-muted-foreground max-w-2xl mx-auto mt-4">
          Whatever your financial milestone, structured mutual fund investments help you achieve it with clarity and confidence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Goal 1: Retirement Planning (Spans 2 cols) */}
        <div className="md:col-span-2 bg-muted border border-border rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center overflow-hidden relative group hover:border-secondary transition-colors duration-500">
          <div className="relative w-full md:w-1/2 h-48 mb-4 md:mb-0">
            <Image src="/acecapital/images/goals/retirement_planning_goal.jpg" alt="Retirement Planning" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
          <div className="z-10 space-y-4 md:w-1/2 max-w-md">
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
              <Image src="/acecapital/images/goals/children_education_goal.jpg" alt="Children's Education" layout="fill" objectFit="cover" className="rounded-lg" />
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
              <Image src="/acecapital/images/goals/indian_marriage_goal.jpg" alt="Child's Marriage" layout="fill" objectFit="cover" className="rounded-lg" />
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
              <Image src="/acecapital/images/goals/diversification_goal.jpg" alt="Portfolio Diversification" layout="fill" objectFit="cover" className="rounded-lg" />
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
              <Image src="/acecapital/images/goals/wealth_creation_goal.jpg" alt="Wealth Creation" layout="fill" objectFit="cover" className="rounded-lg" />
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
