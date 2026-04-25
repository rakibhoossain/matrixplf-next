"use client"

import { useEffect, useRef, useState, useMemo } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Reveal } from "./Reveal"

export function ClientBrandsSection() {
  const brands = [
    "UNIQLO",
    "PULL&BEAR",
    "BERSHKA",
    "RIVER ISLAND",
    "ZARA",
    "H&M",
    "C&A",
    "PRIMARK",
  ]

  const [isPaused, setIsPaused] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  
  // Adjusted dimensions for brand items
  const itemWidth = 280 
  const gap = 40
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
        const nextPos = prev + 1 // Speed: 1px per ~30ms
        
        // Reset when reaching the third set to loop back to the second set
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
    const jump = direction === 'next' ? totalItemWidth : -totalItemWidth
    
    setScrollPosition(prev => prev + jump)
    
    // Allow CSS transition to complete, then handle infinite reset if needed
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
    <section className="w-full bg-[#0d1420] py-16 border-t border-white/5 border-b border-white/5 overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-12 mb-12">
        <Reveal className="flex items-center justify-between">
          <span className="text-[#38bdf8] text-[10px] md:text-xs font-black tracking-[0.4em] uppercase opacity-80">
            TRUSTED BY LEADING BRANDS
          </span>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleManualScroll('prev')}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-sky-500 hover:bg-sky-500/10 transition-all group"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
            </button>
            <button
              onClick={() => handleManualScroll('next')}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-sky-500 hover:bg-sky-500/10 transition-all group"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </Reveal>
      </div>

      {/* Marquee Wrapper */}
      <div 
        className="relative cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className="flex gap-10 items-center will-change-transform"
          style={{
            transform: `translateX(-${scrollPosition}px)`,
            transition: isTransitioning ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)" : "none"
          }}
        >
          {infiniteBrands.map((brand, index) => (
            <div
              key={`${brand}-${index}`}
              className="flex-shrink-0 w-[280px] text-center px-4"
            >
              <span className="text-white/20 text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter hover:text-white/60 transition-all duration-500 cursor-default uppercase whitespace-nowrap select-none">
                {brand}
              </span>
            </div>
          ))}
        </div>
        
        {/* Visual Polish: Side Gradients for seamless entry/exit */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#0d1420] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#0d1420] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  )
}
