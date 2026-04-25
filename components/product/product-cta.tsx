"use client"

import { Reveal } from "@/components/Reveal"
import { ArrowRight, Download } from "lucide-react"

interface ProductCTAProps {
  categoryName: string
}

export function ProductCTA({ categoryName }: ProductCTAProps) {
  return (
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
              <button className="w-full sm:w-auto bg-[#4cb5e4] hover:bg-sky-400 text-[#0d1420] px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-sky-900/20">
                Start a conversation <ArrowRight className="w-5 h-5" />
              </button>
            </Reveal>

            <Reveal delay={0.4}>
              <button className="w-full sm:w-auto bg-transparent border border-slate-700 hover:border-slate-500 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all">
                <Download className="w-5 h-5" /> Company Profile
              </button>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  )
}
