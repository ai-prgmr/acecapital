"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface Job {
  id: string
  title: string
  category: "Quant" | "Engineering"
  description: string
  requirements: string[]
}

export default function JobOpenings() {
  const [filter, setFilter] = useState<"All" | "Quant" | "Engineering">("All")
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [isApplied, setIsApplied] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [resumeText, setResumeText] = useState("")

  const jobs: Job[] = [
    {
      id: "quant-researcher",
      title: "Senior Quantitative Researcher",
      category: "Quant",
      description: "Optimize market-making alpha signals using deep learning and HFT methodologies. Work alongside execution teams to back-test and implement high-Sharpe strategies.",
      requirements: [
        "Ph.D. or M.S. in Mathematics, Physics, Computer Science or equivalent quantitative field.",
        "3+ years experience designing statistical arbitrage or HFT strategies.",
        "Expert level coding in Python, C++, or Julia."
      ]
    },
    {
      id: "systems-engineer",
      title: "L1 Systems Engineer (Rust/C++)",
      category: "Engineering",
      description: "Architecting ultra-low latency execution gateways with sub-microsecond determinism. Optimize network stacks, kernels, and memory models for high-frequency trading systems.",
      requirements: [
        "Strong experience in systems programming using Rust or C++.",
        "Deep understanding of Linux kernel optimizations, socket programming, and PCI express.",
        "Familiarity with FPGA acceleration is a strong plus."
      ]
    },
    {
      id: "derivatives-trader",
      title: "Proprietary Derivatives Trader",
      category: "Quant",
      description: "Execute macro and volatility arbitrage strategies on firm capital with zero personal liability. Leverage our low-latency infrastructure to trade commodities, FX, and equity derivatives.",
      requirements: [
        "Proven track record of profitability trading derivatives (1+ years verified statements).",
        "Deep knowledge of option pricing models and risk management protocols.",
        "Thrives under high-pressure, fast-paced decision making environments."
      ]
    }
  ]

  const filteredJobs = jobs.filter((job) => filter === "All" || job.category === filter)

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && email) {
      setIsApplied(true)
    }
  }

  const closeModal = () => {
    setSelectedJob(null)
    setIsApplied(false)
    setName("")
    setEmail("")
    setResumeText("")
  }

  return (
    <div className="space-y-12">
      {/* Filters Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-border/50 pb-6 gap-4">
        <div>
          <span className="font-section-label text-section-label text-primary uppercase tracking-[0.3em] block mb-2">
            Available Positions
          </span>
          <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface">
            Open Mandates
          </h2>
        </div>

        {/* Filter buttons */}
        <div className="flex bg-surface-container-low p-1 border border-border/30 rounded">
          {(["All", "Quant", "Engineering"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-6 py-2 font-section-label text-xs uppercase tracking-widest transition-all",
                filter === cat
                  ? "bg-secondary text-on-secondary-fixed font-bold rounded-sm"
                  : "text-on-surface-variant hover:text-on-surface"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="ace-card p-8 rounded border border-outline-variant/20 flex flex-col justify-between hover:border-secondary/50 transition-all duration-300 group"
          >
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <span className="px-3 py-1 bg-primary-container text-secondary font-section-label text-[10px] uppercase font-bold tracking-wider rounded-sm">
                  {job.category}
                </span>
                <span className="text-outline text-xs font-mono">ACE-{job.id.substring(0, 5).toUpperCase()}</span>
              </div>
              <div>
                <h3 className="font-headline-lg text-xl text-on-surface uppercase group-hover:text-secondary transition-colors duration-300">
                  {job.title}
                </h3>
                <p className="text-on-surface-variant font-body-md mt-4 leading-relaxed line-clamp-3">
                  {job.description}
                </p>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => setSelectedJob(job)}
                className="w-full border border-silver/30 text-muted-foreground font-section-label text-xs uppercase tracking-widest py-3 hover:bg-muted hover:text-background transition-all active:scale-95 duration-300"
              >
                Apply Mandate
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Application Dialog Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md p-4">
          <div className="bg-surface-container-low border border-secondary/30 max-w-2xl w-full p-8 md:p-10 rounded shadow-2xl relative animate-scale-up max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-on-surface-variant hover:text-secondary transition-colors"
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>

            {!isApplied ? (
              <form onSubmit={handleApplySubmit} className="space-y-6">
                <div>
                  <span className="font-section-label text-xs text-secondary uppercase tracking-[0.2em]">
                    Intake Application
                  </span>
                  <h3 className="font-headline-lg text-2xl uppercase mt-2 text-on-surface">
                    {selectedJob.title}
                  </h3>
                </div>

                <div className="space-y-4 font-body-md text-on-surface-variant">
                  <p>{selectedJob.description}</p>
                  <div>
                    <h4 className="font-headline-lg text-sm uppercase text-muted-foreground mb-2">Key Requirements:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {selectedJob.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Form fields */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="font-section-label text-xs text-muted-foreground uppercase">Full Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-background border border-border p-3 text-on-surface font-body-md focus:border-secondary outline-none rounded"
                        placeholder="e.g. Rahul Singhal"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-section-label text-xs text-muted-foreground uppercase">Email Address</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-background border border-border p-3 text-on-surface font-body-md focus:border-secondary outline-none rounded"
                        placeholder="e.g. rahul@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-section-label text-xs text-muted-foreground uppercase">Cover Note / Resume URL</label>
                    <textarea
                      required
                      rows={4}
                      value={resumeText}
                      onChange={(e) => setResumeText(e.target.value)}
                      className="w-full bg-background border border-border p-3 text-on-surface font-body-md focus:border-secondary outline-none rounded"
                      placeholder="Detail your background, links to GitHub/LinkedIn, or paste details of your quantitative portfolio..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary text-on-secondary-fixed py-4 font-bold uppercase tracking-widest hover:brightness-110 transition-all"
                >
                  SUBMIT APPLICATION
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-6">
                <span className="material-symbols-outlined text-secondary text-7xl animate-pulse">
                  verified
                </span>
                <h3 className="font-headline-lg text-2xl uppercase text-on-surface">
                  Application Submitted
                </h3>
                <p className="font-body-md text-on-surface-variant max-w-md mx-auto">
                  Thank you, <strong className="text-secondary">{name}</strong>. Your quantitative application for the position of <strong>{selectedJob.title}</strong> has been successfully registered. Our desk will review your credentials and contact you if there is an alignment.
                </p>
                <button
                  onClick={closeModal}
                  className="bg-secondary text-on-secondary-fixed px-8 py-3 font-bold uppercase tracking-widest hover:brightness-110 transition-all mt-4"
                >
                  CLOSE DIALOGUE
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
