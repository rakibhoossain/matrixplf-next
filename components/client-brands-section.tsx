"use client"

import { useEffect, useState, useMemo } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Reveal } from "./Reveal"
import Image from "next/image"

export function ClientBrandsSection() {
  const brands = [
    { name: "CAT", logo: "/assets/client-brand/CAT.jpg" },
    { name: "Dollar Store", logo: "/assets/client-brand/Doller-Store.jpg" },
    { name: "Euro", logo: "/assets/client-brand/Euro.jpg" },
    { name: "J-Brand", logo: "/assets/client-brand/J-brand.jpg" },
    { name: "Lelosi", logo: "/assets/client-brand/Lelosi.jpg" },
    { name: "New", logo: "/assets/client-brand/New.jpg" },
    { name: "RAGNO", logo: "/assets/client-brand/RAGNO.jpg" },
    { name: "Amante", logo: "/assets/client-brand/amante.jpg" },
    { name: "Boux Avenue", logo: "/assets/client-brand/boux.jpg" },
    { name: "Outpost", logo: "/assets/client-brand/outpost.jpg" },
    { name: "Primark", logo: "/assets/client-brand/p.jpg" },
    { name: "Tookmani", logo: "/assets/client-brand/tookmani.jpg" },
  ]

  const [isPaused, setIsPaused] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Adjusted dimensions for brand cards
  const itemWidth = 240
  const gap = 20
  const totalItemWidth = itemWidth + gap
  const totalSetWidth = totalItemWidth * brands.length

  // Tripled array for seamless infinite looping
  const infiniteBrands = useMemo(() => [...brands, ...brands, ...brands], [brands])

  // Initialize position in the middle set
  useEffect(() => {
    setScrollPosition(totalSetWidth)
  }, [totalSetWidth])

  // Auto-slide animation logic (smooth continuous scroll)
  useEffect(() => {
    if (isPaused || isTransitioning) return

    const scrollInterval = setInterval(() => {
      setScrollPosition((prev) => {
        const nextPos = prev + 1 // Speed

        if (nextPos >= totalSetWidth * 2) {
          return nextPos - totalSetWidth
        }
        return nextPos
      })
    }, 30)

    return () => clearInterval(scrollInterval)
  }, [isPaused, isTransitioning, totalSetWidth])

  const handleManualScroll = (direction: 'next' | 'prev') => {
    if (isTransitioning) return

    setIsTransitioning(true)
    const jump = direction === 'next' ? totalItemWidth * 2 : -totalItemWidth * 2

    setScrollPosition(prev => prev + jump)

    setTimeout(() => {
      setIsTransitioning(false)
      setScrollPosition(prev => {
        if (prev >= totalSetWidth * 2) return prev - totalSetWidth
        if (prev < totalSetWidth) return prev + totalSetWidth
        return prev
      })
    }, 500)
  }

  return (
    <section className="w-full bg-[#0d1420] py-20 border-t border-white/5 overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-12 mb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <Reveal className="flex flex-col items-start gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-white/80 text-[10px] font-bold uppercase tracking-wider">Our Partners</span>
            </div>
            <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold text-white tracking-tight">
              Trusted By <span className="text-sky-500">Leading Brands</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2} className="max-w-md lg:text-right">
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              Partnering with the world&apos;s most recognized fashion brands.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Marquee Wrapper */}
      <div
        className="relative mt-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="flex gap-5 items-center will-change-transform py-4"
          style={{
            transform: `translateX(-${scrollPosition}px)`,
            transition: isTransitioning ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)" : "none"
          }}
        >
          {infiniteBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex-shrink-0 w-[240px] h-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center gap-4 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 group"
            >
              <div className="relative w-full h-full flex-shrink-0 bg-white rounded-lg overflow-hidden">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Visual Polish: Side Gradients */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#0d1420] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#0d1420] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  )
}
