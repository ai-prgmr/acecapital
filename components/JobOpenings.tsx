"use client"

export default function JobOpenings() {
  return (
    <div className="space-y-12">
      <div className="flex flex-col items-center text-center border-b border-border/50 pb-6 gap-4">
        <div>
          <span className="font-section-label text-section-label text-primary uppercase tracking-[0.3em] block mb-2">
            Available Positions
          </span>

        </div>
      </div>

      <div className="text-center py-12">
        <p className="text-on-surface-variant font-body-md mt-4 leading-relaxed">
          There are currently no open mandates. We are always looking for exceptional talent, so feel free to submit a general resume below.
        </p>
      </div>
    </div>
  )
}
