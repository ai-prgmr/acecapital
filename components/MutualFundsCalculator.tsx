"use client"

import { useState, useEffect } from "react"

export default function MutualFundsCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(50000)
  const [monthlyContribution, setMonthlyContribution] = useState(2500)
  const [annualReturn, setAnnualReturn] = useState(12)
  const [horizonYears, setHorizonYears] = useState(10)

  const [portfolioValue, setPortfolioValue] = useState(0)
  const [totalInvested, setTotalInvested] = useState(0)
  const [estimatedGrowth, setEstimatedGrowth] = useState(0)

  useEffect(() => {
    // Convert annual return percentage to decimal monthly rate
    const r = annualReturn / 100
    const i = r / 12
    const N = horizonYears * 12

    let futureValue = 0
    if (i === 0) {
      futureValue = initialInvestment + monthlyContribution * N
    } else {
      // Compound interest formula with monthly additions:
      // FV = P * (1 + i)^N + PMT * [((1 + i)^N - 1) / i]
      const compoundFactor = Math.pow(1 + i, N)
      const initialTerm = initialInvestment * compoundFactor
      const contributionTerm = monthlyContribution * ((compoundFactor - 1) / i)
      futureValue = initialTerm + contributionTerm
    }

    const totalInvestedCapital = initialInvestment + monthlyContribution * N
    const growth = Math.max(0, futureValue - totalInvestedCapital)

    setPortfolioValue(futureValue)
    setTotalInvested(totalInvestedCapital)
    setEstimatedGrowth(growth)
  }, [initialInvestment, monthlyContribution, annualReturn, horizonYears])

  // Helper to format values in Indian Rupee format
  const formatRupee = (value: number) => {
    return "₹" + Math.round(value).toLocaleString("en-IN")
  }

  // Calculate percentages for the progress bar / chart
  const total = portfolioValue || 1
  const investedPercent = Math.min(100, (totalInvested / total) * 100)
  const growthPercent = 100 - investedPercent

  // Donut chart stroke dash array calculations
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const investedDash = (investedPercent / 100) * circumference;
  const growthDash = (growthPercent / 100) * circumference;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Inputs panel */}
      <div className="space-y-8">
        <div className="border-l-4 border-secondary pl-6">
          <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface">
            Growth Projection Tool
          </h2>
          <p className="font-body-md text-on-surface-variant">
            Simulate your institutional wealth trajectory with our precision calculator.
          </p>
        </div>

        <div className="space-y-6 ace-card p-8 rounded border border-outline-variant/20">
          {/* Initial Investment */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="font-section-label text-muted-foreground uppercase text-sm">
                Initial Investment
              </label>
              <div className="flex items-center gap-1 bg-background px-3 py-1 rounded border border-border focus-within:border-secondary">
                <span className="font-data-point text-secondary text-sm">₹</span>
                <input
                  type="number"
                  min="0"
                  value={initialInvestment}
                  onChange={(e) => setInitialInvestment(Number(e.target.value))}
                  className="bg-transparent text-secondary font-data-point outline-none w-24 text-right"
                />
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="1000000"
              step="1000"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(Number(e.target.value))}
              className="w-full h-1 bg-border rounded-lg appearance-none cursor-pointer accent-secondary"
            />
            <div className="flex justify-between text-xs text-outline font-mono">
              <span>₹0</span>
              <span>₹10L</span>
            </div>
          </div>

          {/* Monthly Contribution */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="font-section-label text-muted-foreground uppercase text-sm">
                Monthly Contribution
              </label>
              <div className="flex items-center gap-1 bg-background px-3 py-1 rounded border border-border focus-within:border-secondary">
                <span className="font-data-point text-secondary text-sm">₹</span>
                <input
                  type="number"
                  min="0"
                  value={monthlyContribution}
                  onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                  className="bg-transparent text-secondary font-data-point outline-none w-24 text-right"
                />
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="50000"
              step="500"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(Number(e.target.value))}
              className="w-full h-1 bg-border rounded-lg appearance-none cursor-pointer accent-secondary"
            />
            <div className="flex justify-between text-xs text-outline font-mono">
              <span>₹0</span>
              <span>₹50K</span>
            </div>
          </div>

          {/* Rates and Horizon */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <label className="font-section-label text-muted-foreground uppercase text-sm">
                Annual Return (%)
              </label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="50"
                value={annualReturn}
                onChange={(e) => setAnnualReturn(Number(e.target.value))}
                className="w-full bg-background border border-border p-3 text-on-surface font-data-point focus:border-secondary outline-none rounded"
              />
            </div>
            <div className="space-y-4">
              <label className="font-section-label text-muted-foreground uppercase text-sm">
                Horizon (Years)
              </label>
              <input
                type="number"
                min="1"
                max="50"
                value={horizonYears}
                onChange={(e) => setHorizonYears(Number(e.target.value))}
                className="w-full bg-background border border-border p-3 text-on-surface font-data-point focus:border-secondary outline-none rounded"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Outputs card */}
      <div className="ace-card p-8 lg:p-12 rounded border border-secondary/30 relative overflow-hidden flex flex-col justify-between h-full">
        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 blur-3xl pointer-events-none"></div>
        <div className="space-y-8 relative z-10 flex flex-col items-center">

          {/* Donut Chart Visualization */}
          <div className="relative w-48 h-48 flex items-center justify-center">
            <svg width="100%" height="100%" viewBox="0 0 160 160" className="transform -rotate-90">
              {/* Invested Background / Base */}
              <circle
                cx="80"
                cy="80"
                r={radius}
                fill="transparent"
                stroke="rgba(255,255,255,0.1)" // Silver/40 equivalent roughly
                strokeWidth="20"
              />
              {/* Invested Portion */}
              <circle
                cx="80"
                cy="80"
                r={radius}
                fill="transparent"
                stroke="#6c757d" // text-muted-foreground equivalent
                strokeWidth="20"
                strokeDasharray={`${investedDash} ${circumference}`}
                className="transition-all duration-500 ease-out"
              />
              {/* Growth Portion */}
              <circle
                cx="80"
                cy="80"
                r={radius}
                fill="transparent"
                stroke="#007bff" // text-secondary (assuming blue in this theme, check actual colors. I will use var(--secondary) if possible, but hex works. Wait, I can use CSS classes via stroke="currentColor"!)
                className="text-secondary transition-all duration-500 ease-out"
                strokeWidth="20"
                strokeDasharray={`${growthDash} ${circumference}`}
                strokeDashoffset={-investedDash}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-[10px] uppercase font-section-label text-muted-foreground tracking-widest">Total Value</span>
              <span className="font-display-hero text-lg text-foreground mt-1">{formatRupee(portfolioValue)}</span>
            </div>
          </div>

          <div className="w-full space-y-4 pt-4 border-t border-border/30">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-silver"></div>
                <span className="font-body-md text-on-surface-variant">Total Invested</span>
              </div>
              <span className="font-data-point text-muted-foreground">{formatRupee(totalInvested)}</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-secondary"></div>
                <span className="font-body-md text-on-surface-variant">Estimated Growth</span>
              </div>
              <span className="font-data-point text-secondary">+{formatRupee(estimatedGrowth)}</span>
            </div>
          </div>
        </div>

        <div className="pt-8 relative z-10 w-full mt-auto">
          <button className="w-full bg-secondary text-on-secondary-fixed py-4 font-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3">
            START INVESTING WITH ACE
            <span className="material-symbols-outlined">trending_up</span>
          </button>
        </div>
      </div>
    </div>
  )
}
