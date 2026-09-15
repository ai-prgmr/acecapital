import { Libre_Bodoni, Public_Sans, JetBrains_Mono } from "next/font/google"
import { Metadata } from "next"
import "./globals.css"
import "./ace-capital-design-system.css"
import { cn } from "@/lib/utils"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FloatingButtons from "@/components/FloatingButtons"

const libreBodoni = Libre_Bodoni({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700"],
})

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "600"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://acecapitalenterprise.com"),
  title: "ACE CAPITAL ENTERPRISE | Leading Mutual Fund Distributor",
  description: "Ace Capital Enterprise is a leading AMFI-registered mutual fund distributor ARN-113576 We help you invest in mutual funds and staying with you for the long run.",
  openGraph: {
    title: "ACE CAPITAL ENTERPRISE | Leading Mutual Fund Distributor",
    description: "Ace Capital Enterprise is a leading AMFI-registered mutual fund distributor ARN-113576 We help you invest in mutual funds and staying with you for the long run.",
    url: "https://acecapitalenterprise.com",
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
    title: "ACE CAPITAL ENTERPRISE | Leading Mutual Fund Distributor",
    description: "Ace Capital Enterprise is a leading AMFI-registered mutual fund distributor ARN-113576 We help you invest in mutual funds and staying with you for the long run.",
    images: ["/logo-acecapital-enterprise.webp"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        libreBodoni.variable,
        publicSans.variable,
        jetbrainsMono.variable
      )}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://acecapitalenterprise.com/#organization",
              "name": "Ace Capital Enterprise",
              "description": "Ace Capital Enterprise is a leading AMFI-registered mutual fund distributor ARN-113576 We help you invest in mutual funds and staying with you for the long run.",
              "url": "https://acecapitalenterprise.com",
              "logo": "https://acecapitalenterprise.com/logo-acecapital-enterprise.webp",
              "foundingDate": "2016",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "India"
              },
              "founder": [
                {
                  "@type": "Person",
                  "name": "Rahul Singhal",
                  "jobTitle": "Founder & Managing Partner"
                },
                {
                  "@type": "Person",
                  "name": "Deepika Singhal",
                  "jobTitle": "Co-Founder & Partner, Legal & Marketing"
                }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "support@acecapitalenterprise.com",
                "telephone": "+91-9220556760",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61566740426997",
                "https://x.com/acecapitalent",
                "https://youtube.com/@acecapitalenterprise?si=kxXjdN6WXwNZHzN7",
                "https://www.linkedin.com/company/ace-capital-enterprise/"
              ]
            })
          }}
        />
      </head>
      <body className="bg-background text-foreground font-sans min-h-screen relative">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  )
}
