"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { upsc } from "@/lib/data"

export function USPCardsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

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

  // Auto-scroll animation
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const cardWidth = 380 // card width + gap
        const totalWidth = cardWidth * upsc.length
        const newPos = prev + 1
        return newPos >= totalWidth ? 0 : newPos
      })
    }, 50) // Slow, smooth scroll

    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={sectionRef} id="sustainability" className="py-12 lg:py-16 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden relative">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDJ2LTJoMzR6bTAtNHYySDJ2LTJoMzR6bTAtNHYySDJ2LTJoMzR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
      <div className="container mx-auto px-6 lg:px-12 mb-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Why Choose Us</span>
          </div>

          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Built for
            <span className="text-sky-400"> Excellence</span>
          </h2>

          <p
            className={`text-lg text-slate-300 max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Every aspect of our operation is designed to deliver exceptional value,
            from seamless logistics to certified manufacturing excellence.
          </p>
        </div>
      </div>

      {/* Infinite Scroll Slider */}
      <div className="relative z-10">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

        <div
          ref={sliderRef}
          className="flex gap-6"
          style={{
            transform: `translateX(-${scrollPosition}px)`,
            transition: "transform 0.05s linear",
          }}
        >
          {/* Double the cards for infinite scroll effect */}
          {[...upsc, ...upsc, ...upsc].map((card, index) => (
            <div
              key={`${card.title}-${index}`}
              className={`flex-shrink-0 w-[350px] rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-2xl hover:shadow-black/30 transition-all duration-500 group ${isVisible ? "opacity-100" : "opacity-0"
                }`}
              style={{ transitionDelay: `${(index % upsc.length) * 100}ms` }}
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent`} />

                {/* Icon overlay */}
                <div className="absolute bottom-4 left-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <card.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-slate-800/90 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm">
                  {card.description}
                </p>

                {/* Decorative line */}
                <div className={`mt-5 h-1 w-12 rounded-full bg-gradient-to-r ${card.gradient} opacity-70 group-hover:w-full group-hover:opacity-100 transition-all duration-500`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress indicators */}
      <div className="container mx-auto px-6 lg:px-12 mt-12 relative z-10">
        <div className="flex justify-center gap-2">
          {upsc.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${Math.floor(scrollPosition / 380) % upsc.length === index
                  ? "w-8 bg-sky-400"
                  : "w-2 bg-slate-600"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
