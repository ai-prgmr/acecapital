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
  return <ContactClient />
}
