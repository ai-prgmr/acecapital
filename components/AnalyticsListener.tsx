"use client"

import { useEffect } from "react"
import {
  trackAppDownload,
  trackContactClick,
  trackNriCtaClick,
  trackPortalLoginClick,
  trackStartInvesting,
} from "@/lib/analytics"

/**
 * Global delegated click listener for automatic and declarative tracking:
 * - Start Investing buttons (data-track="start_investing" or portal links with "start investing")
 * - Portal login buttons (data-track="portal_login" or portal links with "portal login")
 * - WhatsApp links (wa.me)
 * - Phone links (tel:)
 * - Email links (mailto:)
 * - App download buttons (App Store / Play Store)
 * - NRI desk buttons (data-track="nri_cta")
 */
export default function AnalyticsListener() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return

      // Find closest anchor or button
      const interactiveEl = target.closest("a, button") as HTMLAnchorElement | HTMLButtonElement | null
      if (!interactiveEl) return

      const href = interactiveEl instanceof HTMLAnchorElement ? interactiveEl.getAttribute("href") || "" : ""
      const text = (interactiveEl.textContent || "").trim().toLowerCase()
      const explicitTrack = interactiveEl.dataset.track
      const location =
        interactiveEl.dataset.location ||
        interactiveEl.closest("[data-section]")?.getAttribute("data-section") ||
        (interactiveEl.closest("header") ? "header" : "") ||
        (interactiveEl.closest("footer") ? "footer" : "") ||
        window.location.pathname

      // 1. Explicit data-track tags
      if (explicitTrack === "start_investing") {
        trackStartInvesting(location)
        return
      }
      if (explicitTrack === "portal_login") {
        trackPortalLoginClick(location)
        return
      }
      if (explicitTrack === "nri_cta") {
        trackNriCtaClick(location)
        return
      }
      if (explicitTrack === "app_store") {
        trackAppDownload("app_store", location)
        return
      }
      if (explicitTrack === "google_play") {
        trackAppDownload("google_play", location)
        return
      }

      // 2. NRI CTA detection
      if (text.includes("nri") && (text.includes("speak") || text.includes("advisor") || text.includes("desk"))) {
        trackNriCtaClick(location)
        return
      }

      // 3. Contact links: tel, mailto, whatsapp
      if (href.startsWith("tel:")) {
        trackContactClick("call", { location, destination: href })
        return
      }
      if (href.startsWith("mailto:")) {
        trackContactClick("email", { location, destination: href })
        return
      }
      if (href.includes("wa.me") || text.includes("whatsapp")) {
        trackContactClick("whatsapp", { location, destination: href })
        return
      }

      // 4. App Store & Google Play links
      if (href.includes("apps.apple.com")) {
        trackAppDownload("app_store", location)
        return
      }
      if (href.includes("play.google.com")) {
        trackAppDownload("google_play", location)
        return
      }

      // 5. Portal links (mf.acecapitalenterprise.com)
      if (href.includes("mf.acecapitalenterprise.com")) {
        if (text.includes("portal login") || text.includes("login")) {
          trackPortalLoginClick(location)
        } else {
          trackStartInvesting(location)
        }
      }
    }

    document.addEventListener("click", handleClick, { capture: true })
    return () => {
      document.removeEventListener("click", handleClick, { capture: true })
    }
  }, [])

  return null
}

