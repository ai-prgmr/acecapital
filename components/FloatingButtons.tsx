"use client"

import { useState } from "react"
import Image from "next/image"
import { MessageCircle, X } from "lucide-react"

export default function FloatingButtons() {
  const [isOpen, setIsOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  })

  // We leave a placeholder for WhatsApp number
  const WHATSAPP_NUMBER = "+919220556760" // Replace with actual number
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      // With static exports, we must hit Google Apps Script directly bypassing Next.js API routes.
      // We use mode: 'no-cors' to avoid preflight OPTIONS issues.
      await fetch("https://script.google.com/macros/s/AKfycbx0KwN2YiGndA0opr1Xk9KCS-lvnHAqmpll7aVVQNhRWCJydbqZXK9-2GlbEb2ucrdV/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      // When mode is no-cors, we don't get an ok response, so we assume success if no network error
      setSubmitted(true)
    } catch (error) {
      console.error("Submission error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle size={28} />
        </a>

        {/* ACE Form Avatar Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="relative group transition-transform hover:scale-110 focus:outline-none"
          aria-label="Open ACE Form"
        >
          {/* Subtle ripple ring behind the avatar */}
          <div className="absolute inset-0 rounded-full bg-secondary/50 animate-ping opacity-75"></div>

          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-secondary shadow-[0_0_15px_rgba(var(--color-secondary),0.5)] bg-white z-10 flex items-center justify-center">
            <Image
              src="/acecapital/avatar.jpg"
              alt="Support Assistant"
              fill
              className="object-cover"
            />
          </div>

          {/* Active status dot */}
          <span className="absolute bottom-0 right-1 w-3.5 h-3.5 bg-success-green border-2 border-background rounded-full z-20"></span>
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-[#111315]/90 backdrop-blur-xl border border-white/10 w-full max-w-md rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative animate-in zoom-in-95 duration-200 overflow-hidden flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="p-6 pb-4 border-b border-white/10 flex justify-between items-center bg-white/5 shrink-0">
              <h2 className="font-headline-lg text-xl text-white uppercase tracking-wider">ACE Form</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-outline hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full p-1"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <span className="material-symbols-outlined text-success-green text-6xl drop-shadow-[0_0_15px_rgba(74,222,128,0.3)]">check_circle</span>
                  <h3 className="font-headline-lg text-2xl text-white uppercase">Inquiry Logged</h3>
                  <p className="text-outline font-body-md pb-4">
                    Thank you. We will connect with you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setTimeout(() => setSubmitted(false), 300);
                    }}
                    className="mt-4 px-8 py-3 bg-white/10 text-white border border-white/20 font-bold font-section-label tracking-widest text-xs hover:bg-white/20 uppercase rounded-xl transition-all"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div className="relative group">
                    <input
                      required
                      type="text"
                      id="ace-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder=" "
                      className="w-full bg-slate-gray/20 border-t-0 border-x-0 border-b-2 border-charcoal/80 rounded-t px-4 pt-6 pb-2 text-white font-body-md focus:outline-none focus:border-secondary focus:ring-0 transition-all peer"
                    />
                    <label
                      htmlFor="ace-name"
                      className="absolute left-4 top-1.5 text-[10px] text-outline transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-secondary font-section-label uppercase pointer-events-none"
                    >
                      Full Name
                    </label>
                  </div>

                  {/* Email */}
                  <div className="relative group">
                    <input
                      required
                      type="email"
                      id="ace-email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder=" "
                      className="w-full bg-slate-gray/20 border-t-0 border-x-0 border-b-2 border-charcoal/80 rounded-t px-4 pt-6 pb-2 text-white font-body-md focus:outline-none focus:border-secondary focus:ring-0 transition-all peer"
                    />
                    <label
                      htmlFor="ace-email"
                      className="absolute left-4 top-1.5 text-[10px] text-outline transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-secondary font-section-label uppercase pointer-events-none"
                    >
                      Email Address
                    </label>
                  </div>

                  {/* Type */}
                  <div className="relative group">
                    <select
                      required
                      id="ace-type"
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full bg-slate-gray/20 border-t-0 border-x-0 border-b-2 border-charcoal/80 rounded-t px-4 pt-6 pb-2 text-white font-section-label uppercase focus:outline-none focus:border-secondary focus:ring-0 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="bg-[#111315]">Select Inquiry Type</option>
                      <option value="nri" className="bg-[#111315]">NRI Enquiry</option>
                      <option value="prop" className="bg-[#111315]">Proprietary Trading</option>
                      <option value="mutual" className="bg-[#111315]">Mutual Funds</option>
                      <option value="careers" className="bg-[#111315]">Institutional Careers</option>
                      <option value="other" className="bg-[#111315]">General Partnership</option>
                    </select>
                    <label
                      htmlFor="ace-type"
                      className="absolute left-4 top-1.5 text-[10px] text-secondary font-section-label uppercase pointer-events-none"
                    >
                      Inquiry Type
                    </label>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-outline">
                      <span className="material-symbols-outlined text-sm">expand_more</span>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative group">
                    <textarea
                      required
                      id="ace-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder=" "
                      className="w-full bg-slate-gray/20 border-t-0 border-x-0 border-b-2 border-charcoal/80 rounded-t px-4 pt-6 pb-2 text-white font-body-md focus:outline-none focus:border-secondary focus:ring-0 transition-all peer resize-none"
                    />
                    <label
                      htmlFor="ace-message"
                      className="absolute left-4 top-1.5 text-[10px] text-outline transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-secondary font-section-label uppercase pointer-events-none"
                    >
                      Message
                    </label>
                  </div>

                  <div className="pt-4 flex justify-center">
                    <button
                      type="submit"
                      disabled={loading}
                      className="button-primary px-16 py-4 uppercase font-bold text-xs justify-center rounded-xl w-full"
                    >
                      {loading ? "Submitting..." : "Submit Inquiry"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
