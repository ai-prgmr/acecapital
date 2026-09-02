"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ArrowUpRight, Menu, X } from "lucide-react"
import Image from "next/image"
import Script from "next/script"
export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Mutual Funds & Investments", path: "/mutual-funds-investments" },
    { name: "Prop Trading & Auto Desks", path: "/prop-trading-automated" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact Us", path: "/contact" },
    { name: "About", path: "/about" },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="ace-container h-19 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all"
              aria-label="Ace Capital Enterprise Home"
            >
              <Image src="/acecapital/logo-acecapital-enterprise.webp" alt="" height={100} width={100} />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex gap-4 2xl:gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.path
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={cn(
                      "font-section-label text-sm  transition-colors duration-200 py-2 border-b-2",
                      isActive
                        ? "text-secondary border-secondary"
                        : "text-on-surface-variant border-transparent hover:text-foreground hover:border-border"
                    )}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden xl:flex items-center gap-3">
            <Link href="/screener" className="px-4 py-2.5 text-xs font-bold text-foreground border border-border rounded-full hover:bg-muted transition-colors">
              Fund Screener
            </Link>
            <a href="https://mf.acecapitalenterprise.com" target="_blank" rel="noreferrer" className="button-primary px-4 py-2.5 text-xs">
              Portal login <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>

          {/* Mobile Hamburg Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden inline-flex min-h-11 min-w-11 items-center justify-center border border-border text-foreground transition-colors hover:border-secondary hover:text-secondary"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Drawer Overlay inside the nav element */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-background/98 backdrop-blur-xl xl:hidden border-b border-border max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col p-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.path
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "font-section-label text-sm uppercase tracking-[0.16em] transition-colors duration-200 py-4 border-b border-border",
                      isActive ? "text-secondary font-bold" : "text-on-surface-variant hover:text-foreground"
                    )}
                  >
                    {link.name}
                  </Link>
                )
              })}
              <div className="flex flex-col gap-3 pt-5">
                <Link
                  href="/screener"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-3 border border-border text-foreground uppercase tracking-[0.16em] font-section-label text-sm font-bold hover:bg-muted transition-colors"
                >
                  FUND SCREENER
                </Link>
                <a
                  href="#footer-contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-3 border border-border text-primary uppercase tracking-[0.16em] font-section-label text-sm font-bold hover:bg-muted transition-colors"
                >
                  CONTACT US
                </a>
                <a href="https://mf.acecapitalenterprise.com" target="_blank" rel="noreferrer" className="button-primary w-full py-3 justify-center text-sm" onClick={() => setIsOpen(false)}>
                  PORTAL LOGIN
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* Spacer to push page content below fixed navbar */}
      <div className="h-30.5"></div>
    </>
  )
}
