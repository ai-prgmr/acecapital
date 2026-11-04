// lib/analytics.ts

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export type AnalyticsEventParams = Record<string, string | number | boolean | undefined | null>;

/**
 * Dispatches an event to GA4 via window.gtag and pushes it to window.dataLayer
 * so it works with both direct GA4 and any current/future Google Tag Manager setup.
 */
export function trackEvent(eventName: string, params: AnalyticsEventParams = {}) {
  if (typeof window === "undefined") return;

  const page = params.page || window.location.pathname;
  const isLocal =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1" ||
    process.env.NODE_ENV === "development";

  const payload: Record<string, any> = {
    ...params,
    page,
    // Enables GA4 DebugView when testing on localhost
    ...(isLocal ? { debug_mode: true } : {}),
  };

  // 1. Google Analytics 4 via gtag.js
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, payload);
  }

  // 2. Google Tag Manager compatible dataLayer push
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...payload,
  });

  // Local console visibility
  if (isLocal) {
    console.log(`%c[GA4 Event] ${eventName}`, "color: #00ff88; font-weight: bold;", payload);
  }
}

/**
 * 1. generate_lead (Key Event)
 * Contact form and any lead form
 */
export function trackGenerateLead(params: { form_name: string; source_cta?: string; page?: string }) {
  trackEvent("generate_lead", {
    form_name: params.form_name,
    source_cta: params.source_cta || "submit",
    page: params.page,
  });
}

/**
 * 2. click_start_investing (Key Event)
 * Every Start Investing button (leads to the portal)
 */
export function trackStartInvesting(location: string = "general") {
  trackEvent("click_start_investing", {
    location,
  });
}

/**
 * 3. click_whatsapp / click_call / click_email (Key Event)
 * WhatsApp button, tel: and mailto: links
 */
export function trackContactClick(
  type: "whatsapp" | "call" | "email",
  details?: { location?: string; destination?: string }
) {
  trackEvent(`click_${type}`, {
    location: details?.location || "unknown",
    destination: details?.destination,
  });
}

/**
 * 4. app_download_click (Key Event)
 * App Store and Google Play buttons
 */
export function trackAppDownload(store: "app_store" | "google_play", location: string = "general") {
  trackEvent("app_download_click", {
    store,
    location,
  });
}

/**
 * Amount & Tenure band helpers (bands, not exact figures, per strategy doc)
 */
export function getAmountBand(amount: number): string {
  if (!amount || amount <= 0) return "< ₹10k";
  if (amount < 10000) return "< ₹10k";
  if (amount <= 25000) return "₹10k - ₹25k";
  if (amount <= 50000) return "₹25k - ₹50k";
  if (amount <= 100000) return "₹50k - ₹1L";
  if (amount <= 500000) return "₹1L - ₹5L";
  return "> ₹5L";
}

export function getTenureBand(years: number): string {
  if (!years || years < 5) return "< 5 yrs";
  if (years <= 10) return "5 - 10 yrs";
  if (years <= 15) return "10 - 15 yrs";
  return "15+ yrs";
}

/**
 * 5. calculator_start / calculator_complete (calculator_complete is Key Event)
 */
export function trackCalculatorStart(calculatorName: string, amount: number, tenureYears: number) {
  trackEvent("calculator_start", {
    calculator_name: calculatorName,
    amount_band: getAmountBand(amount),
    tenure_band: getTenureBand(tenureYears),
  });
}

export function trackCalculatorComplete(calculatorName: string, amount: number, tenureYears: number) {
  trackEvent("calculator_complete", {
    calculator_name: calculatorName,
    amount_band: getAmountBand(amount),
    tenure_band: getTenureBand(tenureYears),
  });
}

/**
 * 6. screener_use / screener_result_click (screener_result_click is Key Event)
 */
export function trackScreenerUse(params: { filter_type: string; filter_value: string; fund_category?: string }) {
  trackEvent("screener_use", {
    filter_type: params.filter_type,
    filter_value: params.filter_value,
    fund_category: params.fund_category || "All",
  });
}

export function trackScreenerResultClick(params: { scheme_name: string; fund_category: string; amc?: string }) {
  trackEvent("screener_result_click", {
    scheme_name: params.scheme_name,
    fund_category: params.fund_category,
    amc: params.amc,
  });
}

/**
 * 7. nri_cta_click (Key Event)
 * NRI desk buttons
 */
export function trackNriCtaClick(location: string = "nri_section") {
  trackEvent("nri_cta_click", {
    location,
  });
}

/**
 * 8. blog_read
 * 75% scroll or 60 seconds on a post
 */
export function trackBlogRead(post: string, category: string) {
  trackEvent("blog_read", {
    post,
    category,
  });
}

/**
 * 9. faq_expand / portal_login_click
 * FAQ accordions and Portal login
 */
export function trackFaqExpand(question: string) {
  trackEvent("faq_expand", {
    question,
  });
}

export function trackPortalLoginClick(location: string = "header_nav") {
  trackEvent("portal_login_click", {
    location,
  });
}

