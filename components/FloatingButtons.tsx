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
    org: "",
    email: "",
    type: "",
    message: "",
  })

  // We leave a placeholder for WhatsApp number
  const WHATSAPP_NUMBER = "1234567890" // Replace with actual number
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch("/api/submit-ace-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setSubmitted(true)
      } else {
        console.error("Submission failed")
      }
    } catch (error) {
      console.error(error)
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
          {/* Subtle pulse ring behind the avatar */}
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
          <div className="bg-background border border-charcoal/30 w-full max-w-md rounded-lg shadow-2xl relative animate-in zoom-in-95 duration-200 overflow-hidden flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="p-6 pb-4 border-b border-charcoal/30 flex justify-between items-center bg-slate-gray/10 shrink-0">
              <h2 className="font-headline-lg text-xl text-white uppercase">ACE Form</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-outline hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <span className="material-symbols-outlined text-success-green text-5xl">check_circle</span>
                  <h3 className="font-headline-lg text-xl text-white uppercase">Inquiry Logged</h3>
                  <p className="text-on-surface-variant font-body-md">
                    Thank you. We will connect with you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setTimeout(() => setSubmitted(false), 300);
                    }}
                    className="mt-4 px-6 py-2 bg-secondary text-on-secondary-fixed font-bold font-section-label tracking-widest text-xs hover:brightness-110 uppercase rounded transition-all"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="relative">
                    <input
                      required
                      type="text"
                      id="ace-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Full Name"
                      className="w-full bg-slate-gray/10 border-t-0 border-x-0 border-b border-charcoal/80 focus:border-secondary focus:ring-0 text-white py-3 px-2 transition-all font-body-md placeholder-transparent peer text-sm rounded-t"
                    />
                    <label
                      htmlFor="ace-name"
                      className="absolute left-2 -top-3 text-outline text-[10px] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-outline peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-secondary peer-focus:text-[10px] font-section-label uppercase"
                    >
                      Full Name
                    </label>
                  </div>

                  {/* Organization */}
                  <div className="relative">
                    <input
                      required
                      type="text"
                      id="ace-org"
                      value={formData.org}
                      onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                      placeholder="Organization"
                      className="w-full bg-slate-gray/10 border-t-0 border-x-0 border-b border-charcoal/80 focus:border-secondary focus:ring-0 text-white py-3 px-2 transition-all font-body-md placeholder-transparent peer text-sm rounded-t"
                    />
                    <label
                      htmlFor="ace-org"
                      className="absolute left-2 -top-3 text-outline text-[10px] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-outline peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-secondary peer-focus:text-[10px] font-section-label uppercase"
                    >
                      Organization
                    </label>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <input
                      required
                      type="email"
                      id="ace-email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Corporate Email"
                      className="w-full bg-slate-gray/10 border-t-0 border-x-0 border-b border-charcoal/80 focus:border-secondary focus:ring-0 text-white py-3 px-2 transition-all font-body-md placeholder-transparent peer text-sm rounded-t"
                    />
                    <label
                      htmlFor="ace-email"
                      className="absolute left-2 -top-3 text-outline text-[10px] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-outline peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-secondary peer-focus:text-[10px] font-section-label uppercase"
                    >
                      Corporate Email
                    </label>
                  </div>

                  {/* Type */}
                  <div className="relative">
                    <select
                      required
                      id="ace-type"
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full bg-slate-gray/10 border-t-0 border-x-0 border-b border-charcoal/80 focus:border-secondary focus:ring-0 text-white py-3 px-2 transition-all font-section-label uppercase cursor-pointer text-sm rounded-t"
                    >
                      <option value="" disabled className="bg-background">Inquiry Type</option>
                      <option value="nri" className="bg-background">NRI Enquiry</option>
                      <option value="prop" className="bg-background">Proprietary Trading</option>
                      <option value="mutual" className="bg-background">Mutual Funds</option>
                      <option value="careers" className="bg-background">Institutional Careers</option>
                      <option value="other" className="bg-background">General Partnership</option>
                    </select>
                    <label
                      htmlFor="ace-type"
                      className="absolute left-2 -top-3 text-secondary text-[10px] font-section-label uppercase"
                    >
                      Inquiry Type
                    </label>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <textarea
                      required
                      id="ace-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Message"
                      className="w-full bg-slate-gray/10 border-t-0 border-x-0 border-b border-charcoal/80 focus:border-secondary focus:ring-0 text-white py-3 px-2 transition-all font-body-md placeholder-transparent peer text-sm rounded-t"
                    />
                    <label
                      htmlFor="ace-message"
                      className="absolute left-2 -top-3 text-outline text-[10px] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-outline peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-secondary peer-focus:text-[10px] font-section-label uppercase"
                    >
                      Message
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-secondary text-on-secondary-fixed font-bold font-section-label tracking-widest text-xs hover:brightness-110 active:scale-95 transition-all uppercase rounded disabled:opacity-50 disabled:cursor-not-allowed"
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
