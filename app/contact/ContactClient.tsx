"use client"

import { useState } from "react"

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch("https://script.google.com/macros/s/AKfycbx0KwN2YiGndA0opr1Xk9KCS-lvnHAqmpll7aVVQNhRWCJydbqZXK9-2GlbEb2ucrdV/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      setSubmitted(true)
    } catch (error) {
      console.error("Submission error:", error)
    } finally {
      setLoading(false)
    }
  }

  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://acecapitalenterprise.com/contact/#webpage",
        "url": "https://acecapitalenterprise.com/contact",
        "name": "Contact Us | ACE CAPITAL ENTERPRISE",
        "description": "Connect with Ace Capital Enterprise. Get technical support, general partnership inquiries, or institutional trading assistance.",
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
              "email": "support@acecapitalenterprise.com",
              "telephone": "9220556760"
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

      <main className="pt-24 font-sans bg-background text-foreground min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center text-center px-gutter overflow-hidden border-b border-border/40">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center opacity-10"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-4xl space-y-6 animate-fade-in-up">
            <span className="font-section-label text-xs md:text-sm text-secondary uppercase tracking-[0.3em] font-bold block">
              Contact Us
            </span>
            <h1 className="font-display-hero text-4xl md:text-6xl lg:text-7xl uppercase leading-tight">
              Connect with <br className="hidden md:block" />
              <span className="text-primary italic">Institutional Alpha</span>
            </h1>
            <p className="font-body-md text-muted-foreground max-w-2xl mx-auto">
              Our desk partners and technical support teams are on standby to assist with your portfolio, algorithmic integrations, and partnership inquiries.
            </p>
          </div>
        </section>

        {/* Direct Support Channels */}
        <section className="ace-section ace-container relative z-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border/60 hover:border-secondary/50 shadow-2xl shadow-black/50 transition-all rounded-3xl p-8 md:p-12 overflow-hidden relative group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-9xl text-secondary">headset_mic</span>
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/30">
                      <span className="material-symbols-outlined text-secondary text-2xl">support_agent</span>
                    </div>
                    <h3 className="font-headline-lg text-2xl md:text-3xl uppercase">Client & Tech Support</h3>
                  </div>
                  <span className="font-data-point text-[10px] md:text-xs text-[#00ff88] bg-[#00ff88]/10 border border-[#00ff88]/20 px-3 py-1 rounded-full flex items-center gap-2 font-bold uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-ping"></span>
                    Live Now
                  </span>
                </div>

                <p className="text-muted-foreground font-body-md mb-8 max-w-xl text-lg">
                  Dedicated assistance for algorithmic API integration, mutual fund queries, and general execution inquiries.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-border/40">
                  <div className="flex flex-col gap-2">
                    <span className="font-section-label text-xs text-outline uppercase tracking-wider font-bold">Email Us</span>
                    <a
                      className="font-body-md text-lg text-foreground hover:text-secondary transition-colors inline-flex items-center gap-2"
                      href="mailto:support@acecapitalenterprise.com"
                    >
                      <span className="material-symbols-outlined text-sm text-secondary">mail</span>
                      support@acecapitalenterprise.com
                    </a>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-section-label text-xs text-outline uppercase tracking-wider font-bold">Call Us</span>
                    <a
                      className="font-body-md text-lg text-foreground hover:text-secondary transition-colors inline-flex items-center gap-2"
                      href="tel:+919220556760"
                    >
                      <span className="material-symbols-outlined text-sm text-secondary">call</span>
                      +91 9220556760
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Institutional Inquiry Form */}
        <section className="ace-section bg-surface-container-lowest border-y border-border relative overflow-hidden">
          <div className="max-w-3xl mx-auto px-gutter relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-3xl md:text-4xl uppercase mb-4">Inquiry Form</h2>
              <p className="text-muted-foreground font-body-md max-w-xl mx-auto">
                Please complete the parameters below for a tailored response from our senior desk officers.
              </p>
            </div>

            {submitted ? (
              <div className="bg-[#00ff88]/10 border border-[#00ff88]/30 p-12 text-center rounded-2xl space-y-6 max-w-xl mx-auto backdrop-blur-sm">
                <div className="w-20 h-20 bg-[#00ff88]/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-[#00ff88] text-4xl">check_circle</span>
                </div>
                <h3 className="font-headline-lg text-2xl uppercase">Inquiry Logged</h3>
                <p className="text-muted-foreground font-body-md">
                  Thank you for reaching out. A desk partner will verify your details and connect with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 bg-card border border-border p-8 md:p-12 rounded-3xl shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input
                      required
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder=" "
                      className="block w-full px-0 py-3 text-foreground bg-transparent border-0 border-b-2 border-border/60 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer transition-colors font-body-md"
                    />
                    <label
                      htmlFor="name"
                      className="absolute text-sm text-outline duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase font-section-label tracking-wider font-bold pointer-events-none"
                    >
                      Full Name
                    </label>
                  </div>

                  <div className="relative group">
                    <input
                      required
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder=" "
                      className="block w-full px-0 py-3 text-foreground bg-transparent border-0 border-b-2 border-border/60 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer transition-colors font-body-md"
                    />
                    <label
                      htmlFor="email"
                      className="absolute text-sm text-outline duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase font-section-label tracking-wider font-bold pointer-events-none"
                    >
                      Email Address
                    </label>
                  </div>
                </div>

                <div className="relative group">
                  <select
                    required
                    id="type"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className={`block w-full px-0 py-3 bg-transparent border-0 border-b-2 border-border/60 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer transition-colors font-body-md cursor-pointer ${formData.type ? 'text-foreground' : 'text-transparent'}`}
                  >
                    <option value="" disabled className="bg-background text-muted-foreground">Select Inquiry Type</option>
                    <option value="nri" className="bg-background text-foreground">NRI Enquiry</option>
                    <option value="prop" className="bg-background text-foreground">Proprietary Trading</option>
                    <option value="mutual" className="bg-background text-foreground">Mutual Funds</option>
                    <option value="careers" className="bg-background text-foreground">Institutional Careers</option>
                    <option value="other" className="bg-background text-foreground">General Partnership</option>
                  </select>
                  {/* Custom dropdown arrow */}
                  <div className="absolute right-0 top-3 pointer-events-none text-outline peer-focus:text-secondary transition-colors">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                  <label
                    htmlFor="type"
                    className={`absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] uppercase font-section-label tracking-wider font-bold pointer-events-none ${formData.type ? 'text-outline scale-75 -translate-y-6' : 'text-outline peer-focus:text-secondary peer-focus:scale-75 peer-focus:-translate-y-6'}`}
                  >
                    {formData.type ? 'Inquiry Type' : 'Select Inquiry Type'}
                  </label>
                </div>

                <div className="relative group">
                  <textarea
                    required
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder=" "
                    className="block w-full px-0 py-3 text-foreground bg-transparent border-0 border-b-2 border-border/60 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer transition-colors font-body-md resize-none"
                  />
                  <label
                    htmlFor="message"
                    className="absolute text-sm text-outline duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase font-section-label tracking-wider font-bold pointer-events-none"
                  >
                    Message
                  </label>
                </div>

                <div className="flex justify-center pt-8">
                  <button
                    type="submit"
                    disabled={loading}
                    className="button-primary w-full md:w-auto px-16 py-4 uppercase font-bold tracking-widest text-sm rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {loading ? (
                      <>
                        <span className="material-symbols-outlined animate-spin">refresh</span>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Inquiry
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                      </>
                    )}
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
