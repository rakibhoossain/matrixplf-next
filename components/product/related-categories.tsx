"use client"

import Link from "next/link"
import Image from "next/image"
import { Reveal } from "@/components/Reveal"
import { ArrowRight } from "lucide-react"
import { categories } from "@/lib/data"

interface RelatedCategoriesProps {
  currentCategorySlug: string
}

export function RelatedCategories({ currentCategorySlug }: RelatedCategoriesProps) {
  // Filter out the current category and take 4 others
  const otherCategories = categories
    .filter(cat => cat.slug !== currentCategorySlug)
    .slice(0, 4)

  return (
    <section className="py-20 bg-[#0d1420]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <Reveal>
              <span className="text-sky-500 text-xs font-bold uppercase tracking-[0.2em] block mb-3">
                Explore More
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-sm">
                Other categories
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link
              href="/product"
              className="text-slate-500 hover:text-sky-500 transition-colors flex items-center gap-2 font-medium"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherCategories.map((category, idx) => (
            <Reveal key={category.id} delay={0.1 * idx}>
              <Link href={category.link} className="group block">
                <div className="relative aspect-[4/5] rounded-t-2xl overflow-hidden">
                  {/* Category Number Badge */}
                  <div className="absolute top-4 left-4 z-20 bg-[#1a1d21]/80 backdrop-blur-md text-white text-[10px] font-bold w-8 h-8 rounded-full flex items-center justify-center border border-white/10">
                    {String(idx + 2).padStart(2, '0')}
                  </div>

                  <Image
                    src={category.images[0]}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
                </div>

                {/* Footer Bar */}
                <div className="bg-[#1a1d21] p-5 flex items-center justify-between rounded-b-2xl transition-colors group-hover:bg-[#252a30]">
                  <span className="text-white font-bold text-sm uppercase tracking-wider">
                    {category.name}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-sky-500/50 group-hover:bg-sky-500/10 transition-all">
                    <ArrowRight className="w-4 h-4 text-white group-hover:text-sky-400" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
