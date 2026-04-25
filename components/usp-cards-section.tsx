"use client"

import { useEffect, useRef, useState, useMemo } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { upsc } from "@/lib/data"

export function USPCardsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  // Internal card dimensions
  const cardWidth = 420
  const gap = 24
  const totalCardWidth = cardWidth + gap
  const totalSetWidth = totalCardWidth * upsc.length

  // Tripled array for seamless looping
  const infiniteCards = useMemo(() => [...upsc, ...upsc, ...upsc], [])

  // Starting position in the middle set
  const [scrollPosition, setScrollPosition] = useState(totalSetWidth)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Auto-scroll animation logic
  useEffect(() => {
    if (isPaused || isTransitioning) return

    const scrollInterval = setInterval(() => {
      setScrollPosition((prev) => {
        const nextPos = prev + 1.5 // Smooth continuous speed

        // Seamles reset: if we reach the start of the 3rd set, jump to start of 2nd set
        if (nextPos >= totalSetWidth * 2) {
          return nextPos - totalSetWidth
        }
        return nextPos
      })
    }, 20)

    return () => clearInterval(scrollInterval)
  }, [isPaused, isTransitioning, totalSetWidth])

  const handleManualScroll = (direction: 'next' | 'prev') => {
    if (isTransitioning) return

    setIsTransitioning(true)
    const jump = direction === 'next' ? totalCardWidth : -totalCardWidth

    setScrollPosition(prev => prev + jump)

    // Allow time for CSS transition
    setTimeout(() => {
      setIsTransitioning(false)
      // Check for bounds reset after transition
      setScrollPosition(prev => {
        if (prev >= totalSetWidth * 2) return prev - totalSetWidth
        if (prev < totalSetWidth) return prev + totalSetWidth
        return prev
      })
    }, 500)
  }

  return (
    <section
      ref={sectionRef}
      id="excellence"
      className="py-20 lg:py-32 bg-[#0d1420] overflow-hidden relative"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDJ2LTJoMzR6bTAtNHYySDJ2LTJoMzR6bTAtNHYySDJ2LTJoMzR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />

      <div className="container mx-auto px-6 lg:px-12 mb-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
              <span className="text-white/80 text-xs font-bold uppercase tracking-[0.2em]">Why Matrix Platform</span>
            </div>

            <h2
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              Built for
              <span className="text-sky-500"> Excellence</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Infinite Scroll Slider */}
      <div className="relative z-10">
        {/* Viewport container with 3.5 cards width on large screens */}
        <div className="w-full overflow-visible">
          <div
            className="flex gap-6 will-change-transform"
            style={{
              transform: `translateX(-${scrollPosition}px)`,
              transition: isTransitioning ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)" : "none"
            }}
          >
            {infiniteCards.map((card, index) => (
              <div
                key={`${card.title}-${index}`}
                className={`flex-shrink-0 w-[420px] rounded-3xl overflow-hidden border border-white/5 bg-slate-900/50 backdrop-blur-xl shadow-2xl transition-all duration-700 group cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                style={{ transitionDelay: `${(index % upsc.length) * 50}ms` }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <Link href={`/what-we-do#${card.title.toLowerCase().replace(/\s+/g, '-')}`} className="block w-full h-full">
                  {/* Image Section */}
                  <div className="relative h-[240px] overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1420] via-[#0d1420]/20 to-transparent" />

                    {/* Icon Overlay */}
                    <div className="absolute top-6 left-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-xl group-hover:rotate-6 transition-transform duration-500`}>
                        <card.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 pt-4">
                    <div className="mb-4">

                      <h3 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
                        {card.title}
                      </h3>
                      <span className="text-sky-500 font-bold uppercase tracking-[0.2em] text-[10px] block mt-2 opacity-80">
                        {card.subtitle}
                      </span>
                    </div>

                    <p className="text-slate-400 leading-relaxed text-sm font-medium line-clamp-3">
                      {card.description}
                    </p>

                    <div className={`mt-8 h-1 w-12 rounded-full bg-gradient-to-r ${card.gradient} opacity-50 group-hover:w-full group-hover:opacity-100 transition-all duration-700`} />
                  </div>
                </Link>
                l              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Manual Navigation and Progress */}
      <div className="container mx-auto px-6 lg:px-12 mt-4 relative z-10">
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => handleManualScroll('prev')}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-sky-500 hover:border-sky-500 transition-all group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
          </button>

          {/* Active indicator */}
          <div className="flex gap-3">
            {upsc.map((_, index) => {
              const isActive = Math.floor((scrollPosition % totalSetWidth) / totalCardWidth) === index
              return (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${isActive ? "w-10 bg-sky-500" : "w-2 bg-white/10"
                    }`}
                />
              )
            })}
          </div>

          <button
            onClick={() => handleManualScroll('next')}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-sky-500 hover:border-sky-500 transition-all group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}
