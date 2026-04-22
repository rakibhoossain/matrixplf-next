"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Reveal } from "@/components/Reveal"
import { ArrowRight } from "lucide-react"

interface ProductGalleryProps {
  category: {
    name: string
    description: string
    images: string[]
  }
}

export function ProductGallery({ category }: ProductGalleryProps) {
  return (
    <section className="py-24 bg-[#ece9e9]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-50 rounded-full mb-6 border border-sky-100">
              <div className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
              <span className="text-sky-600 text-[10px] font-bold uppercase tracking-widest">
                Why Matrix
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-none">
              <span className="text-white drop-shadow-sm opacity-90">Elevate Your </span>
              <span className="text-sky-500">Offerings</span>
            </h2>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Explore our premium range of {category.name.toLowerCase()} designed to meet the demands of wholesale buyers with top-notch comfort, style and quality.
            </p>
          </Reveal>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">

          {/* Card 1: Large Image */}
          <Reveal delay={0.1}>
            <div className="relative aspect-[3/4] lg:aspect-[2/3] rounded-2xl overflow-hidden shadow-xl shadow-slate-200">
              <Image
                src={category.images[0] || "https://images.unsplash.com/photo-1544441893-675973e31985"}
                alt="Product 1"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Column 2 */}
          <div className="space-y-8">
            {/* Card 2: Text Card */}
            <Reveal delay={0.2}>
              <div className="bg-[#3D4145] rounded-2xl p-10 lg:p-12 text-white h-full flex flex-col justify-between aspect-square lg:aspect-auto">
                <div>
                  <h3 className="text-3xl font-bold mb-1">Sustainable</h3>
                  <h4 className="text-3xl font-bold text-sky-400 mb-6">Fabrics</h4>
                  <div className="w-12 h-1 bg-sky-400/30 mb-8" />
                  <p className="text-slate-400 leading-relaxed text-[15px]">
                    We source eco-friendly bamboo, modal, organic cotton, and recycled polyesters to ensure incredibly soft and breathable comfort, naturally protecting the planet.
                  </p>
                </div>
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors mt-12 group">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </Reveal>

            {/* Card 3: Image Card */}
            <Reveal delay={0.3}>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl shadow-slate-200">
                <Image
                  src={category.images[1] || "https://images.unsplash.com/photo-1539109132384-361556960c95"}
                  alt="Product 2"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* Column 3 */}
          <div className="space-y-8">
            {/* Card 4: Image Card */}
            <Reveal delay={0.4}>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl shadow-slate-200">
                <Image
                  src={category.images[2] || "https://images.unsplash.com/photo-1483985988355-763728e1935b"}
                  alt="Product 3"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>

            {/* Card 5: Text Card */}
            <Reveal delay={0.5}>
              <div className="bg-[#3D4145] rounded-2xl p-10 lg:p-12 text-white h-full flex flex-col justify-between aspect-square lg:aspect-auto">
                <div>
                  <h3 className="text-3xl font-bold mb-1">Precision</h3>
                  <h4 className="text-3xl font-bold text-sky-400 mb-6">Craftsmanship</h4>
                  <div className="w-12 h-1 bg-sky-400/30 mb-8" />
                  <p className="text-slate-400 leading-relaxed text-[15px]">
                    Every seam, stitch, and cut is engineered by our state-of-the-art facilities across South Asia. We utilize advanced flatlock and ultrasonic welding techniques.
                  </p>
                </div>
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors mt-12 group">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  )
}
