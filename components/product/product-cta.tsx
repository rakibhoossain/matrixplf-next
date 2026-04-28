"use client"

import { Reveal } from "@/components/Reveal"
import { cn } from "@/lib/utils"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"
import { Button, buttonVariants } from "@/components/ui/button"
import { useState } from "react"
import { ProfileDownloadModal } from "../ProfileDownloadModal"

interface ProductCTAProps {
  categoryName: string
}

export function ProductCTA({ categoryName }: ProductCTAProps) {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)
  return (
    <>
      <section className="py-20 bg-[#111111] text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

            <div className="max-w-2xl">
              <Reveal>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Ready to develop a <span className="text-sky-400">{categoryName.toLowerCase()} program?</span>
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                  Our merchandising team will respond within one business day with fabric options, MOQs and indicative pricing.
                </p>
              </Reveal>
            </div>

            <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
              <Reveal delay={0.3}>
                <Link href="/contact" className={cn(buttonVariants({
                  variant: "matrix",
                  size: "lg",
                }), "shadow-xl shadow-sky-500/20 active:scale-95 w-fit")}>
                  Start a conversation <ArrowRight className="w-5 h-5" />
                </Link>
              </Reveal>

              <Reveal delay={0.4}>
                <Button variant="ghost" size={"lg"} onClick={() => setIsProfileModalOpen(true)} className="border border-slate-700 hover:border-slate-500">
                  <Download className="w-4 h-4" />
                  Company Profile
                </Button>
              </Reveal>
            </div>

          </div>
        </div>
      </section>
      <ProfileDownloadModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />
    </>
  )
}
