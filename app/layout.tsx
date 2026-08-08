import { Libre_Bodoni, Public_Sans, JetBrains_Mono } from "next/font/google"
import { Metadata } from "next"
import "./globals.css"
import "./ace-capital-design-system.css"
import { cn } from "@/lib/utils"

import Header from "@/components/Header"
import Footer from "@/components/Footer"

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
  title: "ACE CAPITAL ENTERPRISE | Institutional Alpha Through Precision",
  description: "Precision-engineered capital strategies, automated trading desks, and institutional-grade wealth management for modern market participants.",
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
      </head>
      <body className="bg-background text-foreground font-sans min-h-screen">
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
      </body>
    </html>
  )
}
