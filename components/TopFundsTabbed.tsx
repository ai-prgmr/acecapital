"use client"

import { useState } from "react"

const topFunds = {
  All: [
    { name: "Axis Bluechip Fund", category: "Large Cap", risk: "Low", return1y: "+16.2%", cagr3y: "+19.4%" },
    { name: "SBI Small Cap Fund", category: "Small Cap", risk: "High", return1y: "+21.8%", cagr3y: "+24.1%" },
    { name: "Mirae Asset Tax Saver", category: "ELSS", risk: "Moderate", return1y: "+18.5%", cagr3y: "+20.2%" },
    { name: "HDFC Balanced Advantage", category: "Hybrid", risk: "Moderate", return1y: "+12.1%", cagr3y: "+15.3%" },
  ],
  Equity: [
    { name: "Axis Bluechip Fund", category: "Large Cap", risk: "Low", return1y: "+16.2%", cagr3y: "+19.4%" },
    { name: "SBI Small Cap Fund", category: "Small Cap", risk: "High", return1y: "+21.8%", cagr3y: "+24.1%" },
  ],
  Debt: [
    { name: "ICICI Pru Corporate Bond", category: "Corporate Bond", risk: "Low", return1y: "+7.5%", cagr3y: "+6.8%" },
    { name: "HDFC Short Term Debt", category: "Short Duration", risk: "Low", return1y: "+6.9%", cagr3y: "+6.5%" },
  ],
  Hybrid: [
    { name: "HDFC Balanced Advantage", category: "Hybrid", risk: "Moderate", return1y: "+12.1%", cagr3y: "+15.3%" },
    { name: "SBI Equity Hybrid Fund", category: "Aggressive Hybrid", risk: "High", return1y: "+14.2%", cagr3y: "+16.1%" },
  ],
  ELSS: [
    { name: "Mirae Asset Tax Saver", category: "ELSS", risk: "Moderate", return1y: "+18.5%", cagr3y: "+20.2%" },
    { name: "Quant Tax Plan", category: "ELSS", risk: "High", return1y: "+25.4%", cagr3y: "+28.1%" },
  ]
}

type TabType = keyof typeof topFunds;

export default function TopFundsTabbed() {
  const [activeTab, setActiveTab] = useState<TabType>("All")
  
  const tabs: TabType[] = ["All", "Equity", "Debt", "Hybrid", "ELSS"]

  return (
    <div className="space-y-8">
      <div className="border-l-4 border-secondary pl-6 mb-8">
        <h2 className="font-headline-lg text-headline-lg uppercase text-foreground">
          Top Performing Funds
        </h2>
        <p className="font-body-md text-on-surface-variant mt-2">
          Discover top-tier funds handpicked for consistent growth across categories.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto gap-4 border-b border-border/30 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-section-label text-xs uppercase tracking-widest whitespace-nowrap transition-colors ${
              activeTab === tab 
                ? "bg-secondary text-on-secondary-fixed" 
                : "bg-background border border-border text-muted-foreground hover:bg-muted"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Funds Grid / Table */}
      <div className="ace-card rounded overflow-hidden border border-outline-variant/20 mt-8">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-primary-container text-muted-foreground uppercase font-section-label text-xs tracking-wider border-b border-border">
                <th className="px-6 py-4">Fund Name</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4 text-center">Risk</th>
                <th className="px-6 py-4 text-right">1Y Return</th>
                <th className="px-6 py-4 text-right">3Y CAGR</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="font-body-md text-sm">
              {topFunds[activeTab].map((fund, idx) => (
                <tr
                  key={idx}
                  className="border-b border-border/30 hover:bg-muted transition-colors"
                >
                  <td className="px-6 py-5 font-bold text-foreground">{fund.name}</td>
                  <td className="px-6 py-5 text-on-surface-variant">{fund.category}</td>
                  <td className="px-6 py-5 text-center">
                    <span className={`px-2 py-1 text-[10px] uppercase font-bold rounded-sm ${
                      fund.risk === "High"
                        ? "bg-error-container text-error"
                        : fund.risk === "Moderate"
                        ? "bg-secondary-container/20 text-secondary"
                        : "bg-primary-container text-primary"
                    }`}>
                      {fund.risk}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right font-data-point text-success-green">{fund.return1y}</td>
                  <td className="px-6 py-5 text-right font-data-point text-success-green font-bold">{fund.cagr3y}</td>
                  <td className="px-6 py-5 text-center">
                    <button className="text-secondary hover:underline font-section-label text-xs uppercase tracking-widest bg-secondary/10 px-4 py-2 rounded">
                      Invest Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
