"use client"

import Image from "next/image"
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
    <section className="py-24 bg-[#0d1420]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full mb-6 border border-white/10">
              <div className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
              <span className="text-sky-400 text-[10px] font-bold uppercase tracking-widest">
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
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Explore our premium range of {category.name.toLowerCase()} designed to meet the demands of wholesale buyers with top-notch comfort, style and quality.
            </p>
          </Reveal>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">

          {/* Column 1 */}
          <div className="space-y-8">
            {/* Card 1: Image 0 */}
            <Reveal delay={0.1}>
              <div className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-2xl shadow-black/40 group border border-white/5">
                <Image
                  src={category.images[0] || "https://images.unsplash.com/photo-1544441893-675973e31985"}
                  alt={`${category.name} 1`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </Reveal>

            {/* Card 2: Image 3 (New addition to use all 4 images) */}
            {category.images[3] && (
              <Reveal delay={0.2}>
                <div className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-2xl shadow-black/40 group border border-white/5">
                  <Image
                    src={category.images[3]}
                    alt={`${category.name} 4`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </Reveal>
            )}
          </div>

          {/* Column 2 */}
          <div className="space-y-8">
            {/* Card 3: Text Card */}
            <Reveal delay={0.3}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-10 lg:p-12 text-white flex flex-col justify-between min-h-[350px] backdrop-blur-sm">
                <div>
                  <h3 className="text-3xl font-bold mb-1">Sustainable</h3>
                  <h4 className="text-3xl font-bold text-sky-400 mb-6">Fabrics</h4>
                  <div className="w-12 h-1 bg-sky-400/30 mb-8" />
                  <p className="text-slate-400 leading-relaxed text-[15px]">
                    We source eco-friendly bamboo, modal, organic cotton, and recycled polyesters to ensure incredibly soft and breathable comfort, naturally protecting the planet.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Card 4: Image 1 */}
            <Reveal delay={0.4}>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-black/40 group border border-white/5">
                <Image
                  src={category.images[1] || "https://images.unsplash.com/photo-1539109132384-361556960c95"}
                  alt={`${category.name} 2`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </Reveal>
          </div>

          {/* Column 3 */}
          <div className="space-y-8">
            {/* Card 5: Image 2 */}
            <Reveal delay={0.5}>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-black/40 group border border-white/5">
                <Image
                  src={category.images[2] || "https://images.unsplash.com/photo-1483985988355-763728e1935b"}
                  alt={`${category.name} 3`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </Reveal>

            {/* Card 6: Text Card */}
            <Reveal delay={0.6}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-10 lg:p-12 text-white flex flex-col justify-between min-h-[350px] backdrop-blur-sm">
                <div>
                  <h3 className="text-3xl font-bold mb-1">Precision</h3>
                  <h4 className="text-3xl font-bold text-sky-400 mb-6">Craftsmanship</h4>
                  <div className="w-12 h-1 bg-sky-400/30 mb-8" />
                  <p className="text-slate-400 leading-relaxed text-[15px]">
                    Every seam, stitch, and cut is engineered by our state-of-the-art facilities across South Asia. We utilize advanced flatlock and ultrasonic welding techniques.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
