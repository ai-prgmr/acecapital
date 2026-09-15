import { Metadata } from "next";
import FullAMFIScreener from "@/components/FullAMFIScreener";
export const metadata: Metadata = {
  title: "Mutual Fund Screener | ACE Capital Enterprise",
  description: "Mutual funds across 14 fund houses, Live NAV data and screening tools for mutual funds available at Ace Capital Enterprise.",
  alternates: {
    canonical: "/screener",
  },
}

export default function ScreenerPage() {
  const screenerSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://acecapitalenterprise.com/screener/#webpage",
    "url": "https://acecapitalenterprise.com/screener",
    "name": "Mutual Fund Screener | ACE Capital Enterprise",
    "description": "Mutual funds across 14 fund houses, Live NAV data and screening tools for mutual funds available at Ace Capital Enterprise.",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://acecapitalenterprise.com/#website",
      "url": "https://acecapitalenterprise.com",
      "name": "Ace Capital Enterprise"
    },
    "mainEntity": {
      "@type": "WebApplication",
      "name": "Ace Capital Mutual Fund Screener",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "All",
      "description": "Live NAV data and screening tools for mutual funds across 14 fund houses.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(screenerSchema) }}
      />
      <main className="min-h-screen bg-background py-12 mt-12">
        <div className="ace-container">
          <FullAMFIScreener />
        </div>
      </main>
    </>
  )
}
