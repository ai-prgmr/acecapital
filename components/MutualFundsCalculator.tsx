"use client"

import { useState, useMemo } from "react"

export default function MutualFundsCalculator() {
  const [investmentType, setInvestmentType] = useState<"SIP" | "LUMPSUM">("SIP")

  const [monthlyInvestment, setMonthlyInvestment] = useState(23000)
  const [lumpsumInvestment, setLumpsumInvestment] = useState(100000)
  const [horizonYears, setHorizonYears] = useState(18)
  const [annualReturn, setAnnualReturn] = useState(6)

  const calculations = useMemo(() => {
    const r = annualReturn / 100
    const i = r / 12
    const N = horizonYears * 12

    let futureValue = 0
    let totalInvested = 0

    if (investmentType === "SIP") {
      totalInvested = monthlyInvestment * N
      if (i === 0) {
        futureValue = totalInvested
      } else {
        futureValue = monthlyInvestment * ((Math.pow(1 + i, N) - 1) / i) * (1 + i)
      }
    } else {
      totalInvested = lumpsumInvestment
      if (r === 0) {
        futureValue = totalInvested
      } else {
        futureValue = lumpsumInvestment * Math.pow(1 + r, horizonYears)
      }
    }

    const estimatedGains = Math.max(0, futureValue - totalInvested)
    const multiplier = totalInvested > 0 ? (futureValue / totalInvested).toFixed(1) : "0.0"

    const chartData = []
    const currentYear = new Date().getFullYear()

    const step = Math.max(1, Math.floor(horizonYears / 20))

    for (let y = 1; y <= horizonYears; y += step) {
      let yearFV = 0
      let yearInvested = 0

      if (investmentType === "SIP") {
        const months = y * 12
        yearInvested = monthlyInvestment * months
        if (i === 0) {
          yearFV = yearInvested
        } else {
          yearFV = monthlyInvestment * ((Math.pow(1 + i, months) - 1) / i) * (1 + i)
        }
      } else {
        yearInvested = lumpsumInvestment
        if (r === 0) {
          yearFV = yearInvested
        } else {
          yearFV = lumpsumInvestment * Math.pow(1 + r, y)
        }
      }

      chartData.push({
        yearLabel: "'" + ((currentYear + y) % 100).toString().padStart(2, '0'),
        invested: yearInvested,
        gains: Math.max(0, yearFV - yearInvested),
        total: yearFV
      })
    }

    return {
      futureValue,
      totalInvested,
      estimatedGains,
      multiplier,
      chartData
    }
  }, [investmentType, monthlyInvestment, lumpsumInvestment, horizonYears, annualReturn])

  const formatRupee = (value: number) => {
    return "₹" + Math.round(value).toLocaleString("en-IN")
  }

  const { futureValue, totalInvested, estimatedGains, multiplier, chartData } = calculations
  const maxTotal = chartData.length > 0 ? chartData[chartData.length - 1].total : 1
  const maxCr = maxTotal / 10000000

  return (
    <div className="bg-white p-6 md:p-10 rounded-xl border border-outline-variant/30 shadow-sm font-sans w-full max-w-6xl mx-auto my-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
        <h2 className="text-xl md:text-2xl font-semibold text-foreground">
          Calculate the future value of your investment
        </h2>

        <div className="flex bg-[#F3F4F6] p-1 rounded-full border border-outline-variant/10">
          <button
            onClick={() => setInvestmentType("SIP")}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${investmentType === "SIP"
              ? "bg-[#1E3A8A] text-white shadow"
              : "text-on-surface-variant hover:text-foreground"
              }`}
          >
            Monthly SIP
          </button>
          <button
            onClick={() => setInvestmentType("LUMPSUM")}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${investmentType === "LUMPSUM"
              ? "bg-[#1E3A8A] text-white shadow"
              : "text-on-surface-variant hover:text-foreground"
              }`}
          >
            Lump sum
          </button>
        </div>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="space-y-2">
          <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
            {investmentType === "SIP" ? "Monthly Investment" : "Total Investment"}
          </label>
          <input
            type="number"
            value={investmentType === "SIP" ? monthlyInvestment : lumpsumInvestment}
            onChange={(e) => {
              const val = Number(e.target.value)
              if (investmentType === "SIP") setMonthlyInvestment(val)
              else setLumpsumInvestment(val)
            }}
            className="w-full bg-white border border-outline-variant/50 p-4 text-xl font-bold text-foreground rounded-lg focus:border-[#1E3A8A] outline-none transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
            Investment Period (Years)
          </label>
          <input
            type="number"
            value={horizonYears}
            onChange={(e) => setHorizonYears(Number(e.target.value))}
            className="w-full bg-white border border-outline-variant/50 p-4 text-xl font-bold text-foreground rounded-lg focus:border-[#1E3A8A] outline-none transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
            Expected Returns (% P.A.)
          </label>
          <input
            type="number"
            value={annualReturn}
            onChange={(e) => setAnnualReturn(Number(e.target.value))}
            className="w-full bg-white border border-outline-variant/50 p-4 text-xl font-bold text-foreground rounded-lg focus:border-[#1E3A8A] outline-none transition-colors"
          />
        </div>
      </div>

      {/* Banner */}
      <div className="bg-surface-container-low border border-outline-variant/20 rounded-lg p-5 flex items-center gap-3 mb-12">
        <span className="text-yellow-500 material-symbols-outlined text-xl">bolt</span>
        <p className="font-bold text-[#1E3A8A] text-[15px]">
          Your money grows {multiplier}x in {horizonYears} years — the power of compounding!
        </p>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 border-t border-outline-variant/20 pt-10">
        {/* Left: Chart */}
        <div className="lg:col-span-3">
          <h3 className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-6">
            Growth Over Time (₹ CR)
          </h3>

          <div className="relative h-64 flex">
            {/* Y-axis Labels */}
            <div className="flex flex-col justify-between h-full pr-4 text-[11px] text-muted-foreground w-16 items-end pb-8">
              <span>₹{(maxCr).toFixed(1)}Cr</span>
              <span>₹{(maxCr * 0.75).toFixed(1)}Cr</span>
              <span>₹{(maxCr * 0.5).toFixed(1)}Cr</span>
              <span>₹{(maxCr * 0.25).toFixed(1)}Cr</span>
              <span>₹0Cr</span>
            </div>

            {/* Chart Area */}
            <div className="flex-1 relative flex items-end gap-1.5 sm:gap-2 lg:gap-3 pb-8">
              {/* Horizontal Grid Lines */}
              <div className="absolute inset-0 left-0 right-0 bottom-8 flex flex-col justify-between pointer-events-none z-0">
                <div className="w-full border-t border-outline-variant/20"></div>
                <div className="w-full border-t border-outline-variant/20"></div>
                <div className="w-full border-t border-outline-variant/20"></div>
                <div className="w-full border-t border-outline-variant/20"></div>
                <div className="w-full border-t border-outline-variant/50"></div>
              </div>

              {chartData.map((data, idx) => {
                const investedHeight = ((data.invested / maxTotal) * 100).toFixed(2);
                const gainsHeight = ((data.gains / maxTotal) * 100).toFixed(2);

                return (
                  <div key={idx} className="flex-1 flex flex-col justify-end items-center group relative h-full z-10">
                    <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-[10px] p-1.5 rounded pointer-events-none whitespace-nowrap transition-opacity shadow-lg">
                      {formatRupee(data.total)}
                    </div>

                    <div className="w-full max-w-5 flex flex-col justify-end h-full">
                      <div
                        style={{
                          height: `${gainsHeight}%`,
                          minHeight: "1px",
                          transition: "all 300ms ease-in-out"
                        }}
                        className="bg-[#0B214D] w-full rounded-t-sm"
                      ></div>
                      <div
                        style={{ height: `${investedHeight}%` }}
                        className="bg-[#DCE1ED] w-full transition-all duration-300"
                      ></div>
                    </div>
                    <span className="text-[10px] text-muted-foreground absolute -bottom-6">
                      {data.yearLabel}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Legend */}
          <div className="flex gap-6 mt-8 text-sm font-semibold text-foreground/80 pl-16">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-[#DCE1ED] border border-outline-variant/30"></div>
              Total invested
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#0B214D]"></div>
              Gains
            </div>
          </div>
        </div>

        {/* Right: Summary */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-surface-container-low border border-outline-variant/20 rounded-xl p-6 flex justify-between items-center shadow-sm">
            <span className="text-foreground/70 font-medium">Total invested</span>
            <span className="text-xl font-bold text-[#111827]">{formatRupee(totalInvested)}</span>
          </div>

          <div className="bg-surface-container-low border border-outline-variant/20 rounded-xl p-6 flex justify-between items-center shadow-sm">
            <span className="text-foreground/70 font-medium">Estimated gains</span>
            <span className="text-xl font-bold text-[#111827]">{formatRupee(estimatedGains)}</span>
          </div>

          <div className="bg-surface-container-low border border-[#1E3A8A]/30 rounded-xl p-6 flex justify-between items-center shadow-sm relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1E3A8A]"></div>
            <span className="text-[#1E3A8A] font-semibold">Future value</span>
            <span className="text-[22px] font-bold text-[#1E3A8A]">{formatRupee(futureValue)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

