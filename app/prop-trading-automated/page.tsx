import { Metadata } from "next"
import PropTradingContent from "./PropTradingContent"
import AutomatedContent from "./AutomatedContent"

export const metadata: Metadata = {
  title: "Prop Trading & Automated Desks | ACE CAPITAL",
  description: "Gain access to Tier-1 institutional capital with high-leverage mandates and automated HFT execution.",
  alternates: {
    canonical: "/prop-trading-automated",
  },
}

export default function PropTradingAutomated() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://acecapitalenterprise.com/prop-trading-automated/#webpage",
        "url": "https://acecapitalenterprise.com/prop-trading-automated",
        "name": "Prop Trading & Automated Desks | ACE CAPITAL",
        "description": "Gain access to Tier-1 institutional capital with high-leverage mandates and automated HFT execution.",
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
      {/* Merged content stacking Prop Trading then Automated */}
      <PropTradingContent />
      <AutomatedContent />
    </>
  )
}
