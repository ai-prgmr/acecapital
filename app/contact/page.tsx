import { Metadata } from "next"
import ContactClient from "./ContactClient"

export const metadata: Metadata = {
  title: "Contact Us | ACE CAPITAL ENTERPRISE",
  description: "Connect with Ace Capital Enterprise. Get technical support for API integrations, general partnership inquiries, or visit our regional hubs in Mumbai, London, and Singapore.",
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us | ACE CAPITAL ENTERPRISE",
    "url": "https://acecapitalenterprise.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9220556760",
        "email": "support@acecapitalenterprise.com",
        "contactType": "customer service"
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactClient />
    </>
  )
}
