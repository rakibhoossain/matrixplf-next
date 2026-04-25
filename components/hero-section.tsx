"use client"

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    image: "/hero/Cover-1.jpg",
    title: "FROM FABRIC TO",
    titleHighlight: "FINISHED PRODUCT.",
    subtitle: "Three Countries. One Integrated Supply Chain.",
    description: "We bridge China's textile power with South Asia's manufacturing excellence.",
  },
  {
    id: 2,
    image: "/hero/Cover-2.jpg",
    title: "Quality Built",
    titleHighlight: "Through Controlled Manufacturing.",
    subtitle: "Integrated production systems ensuringconsistency at every stage.",
    description: "From fabric development to nal nishing, each process is monitored, standardized, and continuously optimized.",
  },
  {
    id: 3,
    image: "/hero/Cover-3.png",
    title: "PRODUCT DEVELOPMENT,",
    titleHighlight: "BACKED BY TECHNICAL EXPERTISE.",
    subtitle: "Design-led R&D and technical teams turning concepts into precise,production-ready garments.",
    description: "Fit engineering, cost efficiency, and quality control — built with a responsible and scalable approach.",
  },
  {
    id: 4,
    image: "/hero/Cover-4.jpg",
    title: "GLOBAL",
    titleHighlight: "PARTNERSHIPS.",
    subtitle: "Trusted by Leading Brands.",
    description: "Working with world-renowned fashion labels worldwide.",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentSlide) return
    setIsAnimating(true)
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 800)
  }, [isAnimating, currentSlide])

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length)
  }, [currentSlide, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length)
  }, [currentSlide, goToSlide])

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(interval)
  }, [nextSlide])

  const slide = slides[currentSlide]

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Ken Burns Effect */}
      {slides.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          <Image
            src={s.image}
            alt="Hero background"
            fill
            priority={index === 0}
            loading="eager"
            className={`object-cover transition-transform duration-[8000ms] ease-out ${index === currentSlide ? "scale-110" : "scale-100"
              }`}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            {/* Main Heading */}
            <h1
              className={`transition-all duration-1000 uppercase ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <span
                key={`title-${currentSlide}`}
                className="block text-4xl sm:text-4xl md:text-4xl lg:text-7xl font-bold text-white leading-tight tracking-tight animate-fade-in-up"
              >
                {slide.title}
              </span>
              <span
                key={`highlight-${currentSlide}`}
                className="block text-4xl sm:text-4xl md:text-4xl lg:text-7xl font-bold text-white leading-tight tracking-tight mt-2 animate-fade-in-up animation-delay-100"
              >
                {slide.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <div
              key={`subtitle-${currentSlide}`}
              className={`mt-8 space-y-3 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-medium animate-fade-in-up animation-delay-200">
                {slide.subtitle}
              </p>
              <p className="text-lg md:text-xl text-white/80 animate-fade-in-up animation-delay-300">
                {slide.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row flex-wrap gap-4 mt-10 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-white px-8 py-6 text-base font-medium rounded-full gap-2 group transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/25 min-h-[48px]"
              >
                <Download className="w-5 h-5" />
                Download Profile
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/60 text-slate-800 bg-white/90 hover:bg-white px-8 py-6 text-base font-medium rounded-full transition-all duration-300 min-h-[48px]"
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-8 w-full z-20 flex items-center justify-center gap-4">
        {/* Arrow Navigation */}
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors disabled:opacity-50"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Dot Indicators */}
        <div className="flex items-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                ? "bg-white scale-100"
                : "bg-white/40 hover:bg-white/60 scale-75"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrow Navigation */}
        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors disabled:opacity-50"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  )
}
