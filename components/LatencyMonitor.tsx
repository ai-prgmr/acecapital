"use client"

import { useState, useEffect } from "react"

export default function LatencyMonitor() {
  const [latency, setLatency] = useState(0.02)

  useEffect(() => {
    const interval = setInterval(() => {
      const nextLatency = Number((0.01 + Math.random() * 0.05).toFixed(2))
      setLatency(nextLatency)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute bottom-10 right-10 bg-background/90 p-4 border border-secondary/50 rounded shadow-lg backdrop-blur">
      <p className="font-section-label text-xs text-secondary mb-1">LATENCY MONITOR</p>
      <p className="font-data-point text-2xl text-on-surface font-mono">{latency}ms</p>
    </div>
  )
}
