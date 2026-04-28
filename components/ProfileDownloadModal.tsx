"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Download, User, Building2, Mail, Loader2, AlertCircle } from "lucide-react"
import { submitLead } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

interface ProfileDownloadModalProps {
  isOpen: boolean
  onClose: () => void
  customPdf?: string
  customTitle?: string
}

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required" }),
  company: z.string().min(2, { message: "Company name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
})

type FormValues = z.infer<typeof formSchema>

export function ProfileDownloadModal({ isOpen, onClose, customPdf, customTitle }: ProfileDownloadModalProps) {
  const [error, setError] = useState<string | null>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
    },
  })

  const { isSubmitting } = form.formState

  async function onSubmit(values: FormValues) {
    setError(null)

    const pdfUrl = customPdf || "/assets/company/Matrixapparels-Ltd-a-unit-of-Matrix-platform.pdf"
    const fileName = pdfUrl.split('/').pop() || "profile.pdf"
    const profileName = customTitle || "Matrix Group Company Profile"

    try {
      const result = await submitLead({
        name: values.fullName,
        company_name: values.company,
        email: values.email,
        profile_name: profileName,
        note: "Downloaded Profile",
        file_name: fileName
      })

      if (result.success) {
        // Direct download using fetch and blob to avoid opening a new tab
        try {
          const response = await fetch(pdfUrl)
          const blob = await response.blob()
          const url = window.URL.createObjectURL(blob)
          const a = document.createElement("a")
          a.style.display = "none"
          a.href = url
          a.download = fileName
          document.body.appendChild(a)
          a.click()
          window.URL.revokeObjectURL(url)
          document.body.removeChild(a)
        } catch (err) {
          // Fallback if fetch fails (e.g. CORS or network issue)
          window.open(pdfUrl, "_blank")
        }

        form.reset()
        onClose()
      } else {
        setError(result.error || "Failed to submit. Please try again.")
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.")
    }
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
                      {customTitle || "Matrix Platform Ltd. - Profile"}
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

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {error && (
                    <div className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {error}
                    </div>
                  )}

                  {/* Full Name */}
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">
                          Full Name
                        </FormLabel>
                        <FormControl>
                          <div className="relative group">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-sky-400 transition-colors" />
                            <Input
                              placeholder="Jane Doe"
                              disabled={isSubmitting}
                              className="w-full bg-white/3 border border-white/10 rounded-xl py-4 pl-12 pr-4 h-12 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500/50 transition-all disabled:opacity-50"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-[10px] text-red-400 ml-1" />
                      </FormItem>
                    )}
                  />

                  {/* Company */}
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">
                          Company
                        </FormLabel>
                        <FormControl>
                          <div className="relative group">
                            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-sky-400 transition-colors" />
                            <Input
                              placeholder="Your company"
                              disabled={isSubmitting}
                              className="w-full bg-white/3 border border-white/10 rounded-xl py-4 pl-12 pr-4 h-12 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500/50 transition-all disabled:opacity-50"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-[10px] text-red-400 ml-1" />
                      </FormItem>
                    )}
                  />

                  {/* Work Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">
                          Work Email
                        </FormLabel>
                        <FormControl>
                          <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-sky-400 transition-colors" />
                            <Input
                              placeholder="you@company.com"
                              disabled={isSubmitting}
                              className="w-full bg-white/3 border border-white/10 rounded-xl py-4 pl-12 pr-4 h-12 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500/50 transition-all disabled:opacity-50"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-[10px] text-red-400 ml-1" />
                      </FormItem>
                    )}
                  />

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
                    <p className="text-[10px] text-slate-500 leading-relaxed max-w-[240px]">
                      By downloading, you agree to be contacted about Matrix Platform programs.
                    </p>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      variant="matrix"
                      size="lg"
                      className="w-full sm:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4" />
                          Get Profile
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
