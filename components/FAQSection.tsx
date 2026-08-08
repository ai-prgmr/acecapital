"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  subtitle?: string
  items: FAQItem[]
}

export default function FAQSection({ title, subtitle, items }: FAQSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  // Generate FAQ JSON-LD Schema for AEO (Answer Engine Optimization)
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  }

  return (
    <section className="ace-section bg-background">
      {/* Inject AEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      <div className="ace-container">
        <div className="mb-12 border-l-4 border-secondary pl-6">
          <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface">
            {title || "Frequently Asked Questions"}
          </h2>
          {subtitle && (
            <p className="font-body-md text-on-surface-variant mt-2">
              {subtitle}
            </p>
          )}
        </div>

        <div className="space-y-4 max-w-4xl">
          {items.map((item, index) => {
            const isOpen = activeIndex === index
            return (
              <div
                key={index}
                className="border border-border/50 rounded overflow-hidden bg-surface-container-low/30 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-muted transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-headline-lg text-lg md:text-xl text-secondary uppercase tracking-wide">
                    {item.question}
                  </span>
                  <span className="material-symbols-outlined text-secondary transition-transform duration-300">
                    {isOpen ? "remove" : "add"}
                  </span>
                </button>
                <div
                  className={cn(
                    "transition-all duration-500 ease-in-out overflow-hidden",
                    isOpen ? "max-h-[500px] border-t border-border/50" : "max-h-0"
                  )}
                >
                  <div className="p-6 text-on-surface-variant font-body-md leading-relaxed whitespace-pre-line">
                    {item.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
