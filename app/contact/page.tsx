import { Metadata } from "next"
import ContactClient from "./ContactClient"

export const metadata: Metadata = {
  title: "Contact Us | ACE CAPITAL ENTERPRISE",
  description: "Connect with Ace Capital Enterprise. Connect with us support@acecapitalenterprise.com or +91-9220556760",
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
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Unit-210, JMD REGENT SQUARE, MG Road",
        "addressLocality": "Gurugram",
        "addressRegion": "Haryana",
        "postalCode": "122002",
        "addressCountry": "IN"
      },
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
