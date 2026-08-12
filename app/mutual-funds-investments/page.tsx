import { Metadata } from "next"
import MutualFundsContent from "./MutualFundsContent"
import InvestmentsContent from "./InvestmentsContent"

export const metadata: Metadata = {
  title: "Mutual Funds & Investments | ACE CAPITAL",
  description: "Mathematical precision-driven wealth accumulation and institutional-grade asset allocation.",
  alternates: {
    canonical: "/mutual-funds-investments",
  },
}

export default function MutualFundsInvestments() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://acecapitalenterprise.com/mutual-funds-investments/#webpage",
        "url": "https://acecapitalenterprise.com/mutual-funds-investments",
        "name": "Mutual Funds & Investments | ACE CAPITAL",
        "description": "Mathematical precision-driven wealth accumulation and institutional-grade asset allocation.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://acecapitalenterprise.com/#website",
          "url": "https://acecapitalenterprise.com",
          "name": "Ace Capital Enterprise"
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      {/* Merged content stacking Mutual Funds then Investments */}
      <MutualFundsContent />
      <InvestmentsContent />
    </>
  )
}
