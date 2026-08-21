"use client"

import { useState, useEffect } from "react"

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    email: "",
    type: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const [clocks, setClocks] = useState({
    mumbai: "--:-- IST",
    london: "--:-- GMT",
    singapore: "--:-- SGT",
  })

  useEffect(() => {
    const updateClocks = () => {
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }

      try {
        const mumbaiTime = new Intl.DateTimeFormat("en-IN", {
          ...options,
          timeZone: "Asia/Kolkata",
        }).format(new Date())
        const londonTime = new Intl.DateTimeFormat("en-GB", {
          ...options,
          timeZone: "Europe/London",
        }).format(new Date())
        const singaporeTime = new Intl.DateTimeFormat("en-SG", {
          ...options,
          timeZone: "Asia/Singapore",
        }).format(new Date())

        setClocks({
          mumbai: `${mumbaiTime} IST`,
          london: `${londonTime} GMT`,
          singapore: `${singaporeTime} SGT`,
        })
      } catch (e) {
        // Fallback
      }
    }

    updateClocks()
    const interval = setInterval(updateClocks, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  // Schema for Contact Us Page
  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://acecapitalenterprise.com/contact/#webpage",
        "url": "https://acecapitalenterprise.com/contact",
        "name": "Contact Us | ACE CAPITAL ENTERPRISE",
        "description": "Connect with Ace Capital Enterprise. Get technical support for API integrations, general partnership inquiries, or visit our regional hubs in Mumbai, London, and Singapore.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://acecapitalenterprise.com/#website",
          "url": "https://acecapitalenterprise.com",
          "name": "Ace Capital Enterprise"
        },
        "mainEntity": {
          "@type": "Organization",
          "name": "Ace Capital Enterprise",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mumbai",
            "addressCountry": "India"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "contactType": "technical support",
              "email": "support@acecapital.com"
            },
            {
              "@type": "ContactPoint",
              "contactType": "general inquiries",
              "email": "info@acecapital.com"
            }
          ]
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <main className="pt-24 bg-background text-white min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[450px] flex items-center justify-center text-center px-gutter overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center opacity-15 grayscale"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBr2nmu-4E_6BGqRN4FskpYEuNXxMWBRXADIO6SZWkUnT2-4hnMXFaHFxtV_AVUab9TPoPLcniY_f_ol6y6CJyqSw9r33UOLmeKVJPp-rmdiq-Pwve9JfGQPTemdUW5KJw5l18CJP-SVGH_bjgGMEPCDmdKcEcuw4nUu10DyIJDiGKuYKH5aW4QXVXZF45RfaCdtkKbgKCyCsdUg4TepC01ciSqCFKKMSOJBAu29haAesn7MMNsITY')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          </div>
          <div className="relative z-10 max-w-4xl space-y-4">
            <span className="font-section-label text-xs text-secondary uppercase tracking-[0.3em] block">
              Strategic Presence
            </span>
            <h1 className="font-display-hero text-4xl md:text-5xl lg:text-6xl text-white uppercase leading-none">
              Connect with <br />
              <span className="text-secondary italic">Institutional Alpha</span>
            </h1>
            <div className="h-1 w-24 bg-secondary mx-auto mt-6"></div>
          </div>
        </section>

        {/* Direct Support Channels */}
        <section className="ace-container -mt-16 relative z-20 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tech Support */}
            <div className="ace-card p-8 group border border-outline-variant/20 hover:border-secondary transition-all rounded duration-300">
              <div className="flex justify-between items-start mb-4">
                <span className="material-symbols-outlined text-secondary text-4xl">terminal</span>
                <span className="font-data-point text-xs text-success-green flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-success-green animate-ping"></span>
                  Live Now
                </span>
              </div>
              <h3 className="font-headline-lg text-xl text-white uppercase mb-2">Technical Support</h3>
              <p className="text-on-surface-variant font-body-md mb-6">
                Dedicated assistance for algorithmic API integration and execution inquiries.
              </p>
              <div className="flex flex-col gap-1">
                <span className="font-section-label text-[10px] text-outline uppercase tracking-wider">Email</span>
                <a
                  className="font-data-point text-sm text-secondary hover:underline transition-colors"
                  href="mailto:support@acecapital.com"
                >
                  support@acecapital.com
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-charcoal/50 flex items-center gap-2">
                <span className="font-section-label text-xs text-outline uppercase">
                  Target response: <strong className="text-white">&lt; 2 hours</strong>
                </span>
              </div>
            </div>

            {/* General Inquiries */}
            <div className="ace-card p-8 group border border-outline-variant/20 hover:border-secondary transition-all rounded duration-300">
              <div className="flex justify-between items-start mb-4">
                <span className="material-symbols-outlined text-secondary text-4xl">corporate_fare</span>
                <span className="font-data-point text-xs text-outline">Business Hours</span>
              </div>
              <h3 className="font-headline-lg text-xl text-white uppercase mb-2">General Inquiries</h3>
              <p className="text-on-surface-variant font-body-md mb-6">
                For institutional partnerships, mutual fund allocations, and corporate relations.
              </p>
              <div className="flex flex-col gap-1">
                <span className="font-section-label text-[10px] text-outline uppercase tracking-wider">Email</span>
                <a
                  className="font-data-point text-sm text-secondary hover:underline transition-colors"
                  href="mailto:info@acecapital.com"
                >
                  info@acecapital.com
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-charcoal/50 flex items-center gap-2">
                <span className="font-section-label text-xs text-outline uppercase">
                  Target response: <strong className="text-white">Same business day</strong>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Institutional Inquiry Form */}
        <section className="py-20 bg-slate-gray/10 border-y border-charcoal/30">
          <div className="max-w-3xl mx-auto px-gutter">
            <div className="text-center mb-12">
              <h2 className="font-headline-lg text-3xl text-white uppercase mb-4">Institutional Inquiry</h2>
              <p className="text-on-surface-variant font-body-md max-w-xl mx-auto">
                Please complete the parameters below for a tailored response from our senior desk officers.
              </p>
            </div>

            {submitted ? (
              <div className="ace-card p-8 text-center rounded border border-secondary/50 space-y-4">
                <span className="material-symbols-outlined text-success-green text-5xl">check_circle</span>
                <h3 className="font-headline-lg text-xl text-white uppercase">Inquiry Logged</h3>
                <p className="text-on-surface-variant font-body-md">
                  Thank you for reaching out. A desk partner will verify details and connect shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      required
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Full Name"
                      className="w-full bg-slate-gray/20 border-t-0 border-x-0 border-b-2 border-charcoal/80 focus:border-secondary focus:ring-0 text-white py-4 px-0 transition-all font-body-md placeholder-transparent peer"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 -top-3.5 text-outline text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-outline peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-secondary peer-focus:text-xs font-section-label uppercase"
                    >
                      Full Name
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      required
                      type="text"
                      id="org"
                      value={formData.org}
                      onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                      placeholder="Organization"
                      className="w-full bg-slate-gray/20 border-t-0 border-x-0 border-b-2 border-charcoal/80 focus:border-secondary focus:ring-0 text-white py-4 px-0 transition-all font-body-md placeholder-transparent peer"
                    />
                    <label
                      htmlFor="org"
                      className="absolute left-0 -top-3.5 text-outline text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-outline peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-secondary peer-focus:text-xs font-section-label uppercase"
                    >
                      Organization
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      required
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Corporate Email"
                      className="w-full bg-slate-gray/20 border-t-0 border-x-0 border-b-2 border-charcoal/80 focus:border-secondary focus:ring-0 text-white py-4 px-0 transition-all font-body-md placeholder-transparent peer"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-outline text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-outline peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-secondary peer-focus:text-xs font-section-label uppercase"
                    >
                      Corporate Email
                    </label>
                  </div>

                  <div className="relative">
                    <select
                      required
                      id="type"
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full bg-slate-gray/20 border-t-0 border-x-0 border-b-2 border-charcoal/80 focus:border-secondary focus:ring-0 text-white py-4 px-0 transition-all font-section-label uppercase cursor-pointer"
                    >
                      <option value="" disabled className="bg-background">Inquiry Type</option>
                      <option value="nri" className="bg-background">NRI Enquiry</option>
                      <option value="prop" className="bg-background">Proprietary Trading</option>
                      <option value="mutual" className="bg-background">Mutual Funds</option>
                      <option value="careers" className="bg-background">Institutional Careers</option>
                      <option value="other" className="bg-background">General Partnership</option>
                    </select>
                    <label
                      htmlFor="type"
                      className="absolute left-0 -top-3.5 text-secondary text-xs font-section-label uppercase"
                    >
                      Inquiry Type
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    required
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Message"
                    className="w-full bg-slate-gray/20 border-t-0 border-x-0 border-b-2 border-charcoal/80 focus:border-secondary focus:ring-0 text-white py-4 px-0 transition-all font-body-md placeholder-transparent peer"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-0 -top-3.5 text-outline text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-outline peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-secondary peer-focus:text-xs font-section-label uppercase"
                  >
                    Message
                  </label>
                </div>

                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    className="px-12 py-4 bg-secondary text-on-secondary-fixed font-bold font-section-label tracking-widest text-xs hover:brightness-110 active:scale-95 transition-all uppercase rounded"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>


      </main>
    </>
  )
}
