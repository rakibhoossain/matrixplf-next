"use client"

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProfileDownloadModal } from "./ProfileDownloadModal"
import Link from "next/link"

const slides = [
  {
    id: 1,
    image: "/hero/Cover1.jpg",
    mobileImage: "/hero/mobile/Cover-1.jpg",
    title: "FROM FABRIC",
    titleHighlight: "TO <br/><span class=\"whitespace-nowrap\">FINISHED PRODUCT</span>",
    subtitle: "Three Countries. One Integrated Supply Chain.",
    description: "We bridge China's textile power with South Asia's manufacturing excellence.",
  },
  {
    id: 2,
    image: "/hero/Cover-2.jpg",
    mobileImage: "/hero/mobile/Cover-2.jpg",
    title: "Quality Built",
    titleHighlight: "ON <br/><span class=\"whitespace-nowrap\">FULL CONTROL</span>",
    subtitle: "Integrated production systems ensuring consistency at every stage.",
    description: "From fabric development to nal nishing, each process is monitored, standardized, and continuously optimized.",
  },
  {
    id: 3,
    image: "/hero/Cover-3.png",
    mobileImage: "/hero/mobile/Cover-3.jpg",
    title: "TECHNICAL EDGE",
    titleHighlight: "IN <br> <span class=\"whitespace-nowrap\">EVERY PRODUCT</span>",
    subtitle: "Design-led R&D and technical teams shaping precise, production-ready garments.",
    description: "Fit engineering, cost efficiency, and quality control — built to scale responsibly.",
  },
  {
    id: 4,
    image: "/hero/Cover-4.jpg",
    mobileImage: "/hero/mobile/Cover-4.jpg",
    title: "Trusted ",
    titleHighlight: "by <br/> <span class=\"whitespace-nowrap\">Global Brands</span>",
    subtitle: "End-to-end manufacturing systems enabling global brands with consistency, reliability, and scale.",
    description: "From development to delivery, built for consistency and reliability. Ensuring performance at scale.",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)

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
    <section className="relative h-screen min-h-[500px] sm:min-h-[640px] w-full overflow-hidden">
      {/* Background Images with Ken Burns Effect */}
      {slides.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          {/* Desktop Image */}
          <Image
            src={s.image}
            alt="Hero background"
            fill
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            className={`hidden md:block object-cover transition-transform duration-8000 ease-out ${index === currentSlide ? "scale-110" : "scale-100"
              }`}
          />
          {/* Mobile Image */}
          <Image
            src={s.mobileImage}
            alt="Hero background mobile"
            fill
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            className={`block md:hidden object-cover transition-transform duration-8000 ease-out ${index === currentSlide ? "scale-110" : "scale-100"
              }`}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20" />
        </div>
      ))}

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Content Area */}
        <div className="flex-1 flex items-center pb-2 pt-6 sm:pt-12">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl pt-8 sm:pt-20">
              {/* Main Heading */}
              <h1
                className={`transition-all duration-1000 uppercase ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
              >
                <span
                  key={`title-${currentSlide}`}
                  className="block text-3xl min-[360px]:text-4xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight tracking-tight animate-fade-in-up"
                >
                  {slide.title}
                </span>
                <span
                  key={`highlight-${currentSlide}`}
                  className="block text-3xl min-[360px]:text-4xl sm:text-4xl md:text-4xl lg:text-7xl xl:text-8xl font-bold text-white leading-none tracking-tight animate-fade-in-up animation-delay-100"
                  dangerouslySetInnerHTML={{ __html: slide.titleHighlight }}
                />
              </h1>

              {/* Subtitle */}
              <div
                key={`subtitle-${currentSlide}`}
                className={`mt-6 sm:mt-8 space-y-2 sm:space-y-3 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
              >
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 font-medium animate-fade-in-up animation-delay-200 whitespace-nowrap">
                  {slide.subtitle}
                </p>
                <p className="text-base sm:text-lg md:text-xl text-white/80 animate-fade-in-up animation-delay-300">
                  {slide.description}
                </p>
              </div>

              {/* CTA Buttons */}
              <div
                className={`flex flex-row flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
              >
                <Button
                  onClick={() => setIsProfileModalOpen(true)}
                  variant="matrix"
                  className="flex-1 sm:flex-none"
                  size={"lg"}
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  Download Profile
                </Button>
                <Link href="/contact" className="flex-1 sm:flex-none">
                  <Button
                    size="lg"
                    variant="outline"
                  >
                    Contact Our Team
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="pb-5 flex items-center justify-center gap-4">
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
      </div>

      <ProfileDownloadModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />
    </section>
  )
}
