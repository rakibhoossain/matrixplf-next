"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Download, User, Building2, Mail } from "lucide-react"

interface ProfileDownloadModalProps {
  isOpen: boolean
  onClose: () => void
  customPdf?: string
  customTitle?: string
}

export function ProfileDownloadModal({ isOpen, onClose, customPdf, customTitle }: ProfileDownloadModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.open(customPdf || "/assets/company/Matrixapparels-Ltd-a-unit-of-Matrix-platform.pdf", "_blank")
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-[#0d1420] border border-white/10 rounded-[2rem] shadow-2xl z-[101] overflow-hidden"
          >
            {/* Header */}
            <div className="p-8 pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Download className="w-6 h-6 text-sky-400" />
                  </div>
                  <div>
                    <p className="text-sky-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Download</p>
                    <h2 className="text-2xl font-bold text-white tracking-tight">
                      {customTitle || "Matrix Group Company Profile"}
                    </h2>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-8 pt-2">
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                Share a few details and we&apos;ll send the file straight to your browser.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">
                    Full Name
                  </label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-sky-400 transition-colors" />
                    <input
                      required
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500/50 transition-all"
                    />
                  </div>
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">
                    Company
                  </label>
                  <div className="relative group">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-sky-400 transition-colors" />
                    <input
                      required
                      type="text"
                      placeholder="Your company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500/50 transition-all"
                    />
                  </div>
                </div>

                {/* Work Email */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">
                    Work Email
                  </label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-sky-400 transition-colors" />
                    <input
                      required
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500/50 transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
                  <p className="text-[10px] text-slate-500 leading-relaxed max-w-[240px]">
                    By downloading, you agree to be contacted about Matrix Platform programs.
                  </p>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-4 py-4 bg-[#11b1e4] hover:bg-sky-400 text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-sky-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Download className="w-4 h-4" />
                    Get the Profile
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
