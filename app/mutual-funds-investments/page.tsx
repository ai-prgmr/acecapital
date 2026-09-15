import { Metadata } from "next"
import MutualFundsContent from "./MutualFundsContent"
import { combinedMutualFundsFAQs } from "./data"

export const metadata: Metadata = {
  title: "Mutual Funds & Investments | ACE CAPITAL ENTERPRISE",
  description: "Ace Capital Enterprise is a leading AMFI-registered mutual fund distributor ARN-113576 We help you invest in mutual funds and staying with you for the long run.",
  alternates: {
    canonical: "/mutual-funds-investments",
  },
  openGraph: {
    title: "Mutual Funds & Investments | ACE CAPITAL",
    description: "Ace Capital Enterprise is a leading AMFI-registered mutual fund distributor ARN-113576 We help you invest in mutual funds and staying with you for the long run.",
    url: "https://acecapitalenterprise.com/mutual-funds-investments",
    siteName: "Ace Capital Enterprise",
    images: [
      {
        url: "/logo-acecapital-enterprise.webp",
        width: 1200,
        height: 630,
        alt: "Ace Capital Enterprise",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mutual Funds & Investments | ACE CAPITAL",
    description: "Ace Capital Enterprise is a leading AMFI-registered mutual fund distributor ARN-113576 We help you invest in mutual funds and staying with you for the long run.",
    images: ["/logo-acecapital-enterprise.webp"],
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
      },
      {
        "@type": "FAQPage",
        "mainEntity": combinedMutualFundsFAQs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      {/* Merged content for Mutual Funds & Investments */}
      <MutualFundsContent />
    </>
  )
}
