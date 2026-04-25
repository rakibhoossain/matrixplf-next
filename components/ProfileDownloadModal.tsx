"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Download, FileText } from "lucide-react"
import factoriesData from "@/lib/factories.json"

interface ProfileDownloadModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ProfileDownloadModal({ isOpen, onClose }: ProfileDownloadModalProps) {
  // Filter companies that have a profilePdf
  const companies = Object.entries(factoriesData).filter(([_, data]) => 
    (data as any).profilePdf
  ) as [string, any][]

  return (
    <AnimatePresence>
      {isOpen && (
        /* Backdrop and Modal Container */
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative w-full max-w-md bg-[#0d1420] border border-white/10 rounded-3xl shadow-[0_0_40px_-12px_rgba(56,189,248,0.2)] z-[101] overflow-hidden"
          >
            {/* Header */}
            <div className="relative p-6 pb-4 border-b border-white/5 bg-gradient-to-r from-sky-500/5 to-transparent">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white tracking-tight">
                    Company <span className="text-sky-500">Profiles</span>
                  </h2>
                  <p className="text-slate-400 text-[11px] mt-0.5">Select a facility to download its technical profile</p>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-all duration-300"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 max-h-[50vh] overflow-y-auto scrollbar-hide">
              <div className="grid gap-3">
                {companies.map(([id, company], index) => (
                  <motion.a
                    key={id}
                    href={company.profilePdf}
                    download
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    className="group flex items-center justify-between p-3.5 bg-white/[0.02] rounded-2xl border border-white/5 hover:border-sky-500/30 hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center group-hover:bg-sky-500 transition-all duration-300">
                        <FileText className="w-5 h-5 text-sky-400 group-hover:text-white transition-all duration-300" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white group-hover:text-sky-400 transition-colors duration-200">
                          {company.namePart1} {company.namePart2}
                        </h3>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="w-1 h-1 rounded-full bg-sky-500/30" />
                          <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">
                            {company.location}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="hidden sm:block text-[9px] font-bold text-sky-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                        Download
                      </span>
                      <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/30 group-hover:text-white group-hover:border-sky-500 group-hover:bg-sky-500/10 transition-all duration-300">
                        <Download className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-5 bg-slate-900/30 text-center border-t border-white/5">
              <p className="text-slate-500 text-[9px] font-bold tracking-widest uppercase opacity-40">
                Matrix Platform • Excellence in Manufacturing
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
