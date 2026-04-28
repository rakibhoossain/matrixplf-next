"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { categories } from "@/lib/data"

export function ProductsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [imageIndices, setImageIndices] = useState<Record<number, number>>({})
  const [sliderPosition, setSliderPosition] = useState(0)
  const [viewportWidth, setViewportWidth] = useState(1440)
  const sectionRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const intervalRefs = useRef<Record<number, NodeJS.Timeout>>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const updateViewportWidth = () => setViewportWidth(window.innerWidth)
    updateViewportWidth()
    window.addEventListener("resize", updateViewportWidth)
    return () => window.removeEventListener("resize", updateViewportWidth)
  }, [])

  // Auto-slide images on hover
  useEffect(() => {
    if (hoveredId !== null) {
      const category = categories.find(c => c.id === hoveredId)
      if (category) {
        intervalRefs.current[hoveredId] = setInterval(() => {
          setImageIndices(prev => ({
            ...prev,
            [hoveredId]: ((prev[hoveredId] || 0) + 1) % category.images.length
          }))
        }, 800)
      }
    }

    return () => {
      Object.values(intervalRefs.current).forEach(clearInterval)
    }
  }, [hoveredId])

  const handleMouseEnter = (id: number) => {
    setHoveredId(id)
    setImageIndices(prev => ({ ...prev, [id]: 0 }))
  }

  const handleMouseLeave = (id: number) => {
    setHoveredId(null)
    if (intervalRefs.current[id]) {
      clearInterval(intervalRefs.current[id])
      delete intervalRefs.current[id]
    }
  }

  const cardWidth = useMemo(() => Math.min(320, Math.max(272, viewportWidth - 48)), [viewportWidth])
  const gap = 8
  const visibleCards = viewportWidth >= 1280 ? 4 : viewportWidth >= 1024 ? 3 : viewportWidth >= 640 ? 2 : 1
  const maxScroll = Math.max(0, (categories.length - visibleCards) * (cardWidth + gap))

  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const handlePrev = () => {
    setSliderPosition(prev => Math.max(0, prev - (cardWidth + gap)))
  }

  const handleNext = () => {
    setSliderPosition(prev => Math.min(maxScroll, prev + (cardWidth + gap)))
  }

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50
    if (isLeftSwipe) handleNext()
    if (isRightSwipe) handlePrev()
  }

  return (
    <section ref={sectionRef} className="py-12 lg:py-16 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden relative">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDJ2LTJoMzR6bTAtNHYySDJ2LTJoMzR6bTAtNHYySDJ2LTJoMzR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Product Categories</span>
            </div>

            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              What We
              <span className="text-sky-400"> Create</span>
            </h2>

            <p
              className={`text-lg text-slate-300 max-w-xl transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              From casual essentials to technical performance wear, we manufacture
              across diverse categories with consistent quality.
            </p>
          </div>
        </div>
      </div>

      {/* Product slider - Full width like Gokaldas */}
      <div className="relative">
        {/* Navigation arrows */}
        <button
          onClick={handlePrev}
          disabled={sliderPosition === 0}
          className={`absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed ${isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          disabled={sliderPosition >= maxScroll}
          className={`absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed ${isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Cards container */}
        <div
          className="overflow-hidden px-6 lg:px-16"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            ref={sliderRef}
            className="flex gap-2 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${sliderPosition}px)` }}
          >
            {categories.map((category, index) => {
              const currentImageIndex = imageIndices[category.id] || 0
              const isHovered = hoveredId === category.id

              return (
                <Link
                  href={"/product/" + category.slug}
                  key={category.id}
                  className={`flex-shrink-0 relative overflow-hidden cursor-pointer group transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    }`}
                  style={{
                    transitionDelay: `${200 + index * 100}ms`,
                    width: `${cardWidth}px`,
                    height: "550px",
                    minHeight: "550px"
                  }}
                  onMouseEnter={() => handleMouseEnter(category.id)}
                  onMouseLeave={() => handleMouseLeave(category.id)}
                >
                  {/* Background color */}
                  <div className={`absolute inset-0 ${category.bgColor} transition-all duration-500`} style={{ width: `${cardWidth}px`, height: "550px" }} />

                  {/* Images with slide effect */}
                  {category.images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className={`absolute top-0 left-0 transition-all duration-500 ${imgIndex === currentImageIndex
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                        }`}
                      style={{ width: `${cardWidth}px`, height: "550px" }}
                    >
                      <Image
                        src={image}
                        alt={category.name}
                        fill
                        sizes={`${cardWidth}px`}
                        className={`object-cover object-top transition-all duration-700 ${isHovered ? "grayscale-0" : "grayscale-[30%]"
                          }`}
                      />
                    </div>
                  ))}

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Category name - bottom left */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <h3 className={`text-xl lg:text-2xl font-bold text-white tracking-wider transition-all duration-300 ${isHovered ? "translate-y-0" : "translate-y-0"
                      }`}>
                      {category.name}
                    </h3>

                    {/* Image indicators */}
                    <div className={`flex gap-1.5 mt-4 transition-all duration-300 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                      }`}>
                      {category.images.map((_, imgIndex) => (
                        <div
                          key={imgIndex}
                          className={`h-1 rounded-full transition-all duration-300 ${imgIndex === currentImageIndex
                            ? "w-6 bg-white"
                            : "w-2 bg-white/40"
                            }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Hover border effect */}
                  <div className={`absolute inset-0 border-2 transition-all duration-300 ${isHovered ? "border-white/30" : "border-transparent"
                    }`} />
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="container mx-auto px-6 lg:px-12 mt-12 relative z-10 flex items-center gap-6 md:gap-12">
        <div className="flex-grow h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-sky-400 rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
            style={{ width: `${((sliderPosition / maxScroll) * 100) + (100 / categories.length)}%` }}
          />
        </div>
        <Link
          href="/product"
          className={`shrink-0 inline-flex items-center gap-2 px-6 py-2 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-full border border-white/10 hover:border-sky-400 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
        >
          <span className="text-white/90 text-xs font-bold uppercase tracking-widest">View all</span>
          <ArrowRight className="w-4 h-4 text-white/90 hover:text-sky-400" />
        </Link>
      </div>
    </section>
  )
}
