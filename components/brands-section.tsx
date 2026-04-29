"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, ArrowLeft } from "lucide-react"
import Image from "next/image"

const ownBrands = [
  {
    name: "PANTONECLO",
    logo: "/Pantoneclo_logo-New.png",
    category: "Men's Fashion",
    desc: "A European menswear brand developed and distributed across 16 EU countries, built on a strong understanding of market demand, product positioning, and consumer behavior. From concept and design to production and retail distribution, the brand reflects our ability to translate ideas into commercially successful products at scale.",
    linkText: "EXPLORE BRAND",
    link: "https://pantoneclo.si",
    image: "/assets/brand/Pantoneclo.png", // two men walking
    align: "right"
  },
  {
    name: "leafletic",
    logo: "/Leafletic-Logo.png",
    category: "Ladies’ Fashion",
    desc: "A European womenswear brand developed and distributed across EU markets, built on a strong understanding of consumer demand, product positioning, and market trends. From concept and design to production and retail distribution, the brand reflects our capability to develop and scale products across diverse categories with commercial relevance.",
    linkText: "EXPLORE BRAND",
    link: "https://pantoneclo.si",
    image: "/assets/brand/Leafletic.png", // two women active
    align: "left"
  },
  {
    name: "amanté",
    logo: "/New_logo_with_anagram_black.webp",
    category: "Lingerie",
    desc: "A specialized lingerie brand focused on technical construction, fit accuracy, and market relevance. It represents our capability to deliver complex, high-value product categories from development to retail scale.",
    linkText: "EXPLORE BRAND",
    link: "https://amante.lk/",
    image: "/assets/brand/Amanties.png", // mannequins/lingerie aesthetic
    align: "right"
  }
]

export function BrandsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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

  return (
    <section ref={sectionRef} id="brands" className="w-full bg-white font-sans overflow-hidden">

      {/* Hero Banner Area */}
      <div className="relative h-[70vh] min-h-[500px] w-full flex items-center bg-[#0a1122]">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop"
          alt="Gym context"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40" />

        <div className="container mx-auto relative z-10 px-6 lg:px-12 mt-12">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Our Own <span className="text-[#38bdf8]">Brands</span>
          </h1>
          <p
            className={`text-base lg:text-lg text-white/80 max-w-2xl font-medium leading-relaxed transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Proof that we do not just make garments — we understand what sells. Concept & design through production to retail distribution.
          </p>
        </div>
      </div>

      {/* Brand Blocks */}
      <div className="w-full flex flex-col bg-slate-50/30">
        {ownBrands.map((brand, idx) => {
          const isLeftImage = brand.align === 'left'

          return (
            <div key={idx} className="relative w-full border-b border-slate-100 last:border-none overflow-hidden group">
              {/* Image Block (Desktop Background) */}
              <div
                className={`hidden lg:block absolute inset-y-0 w-[45%] z-0 transition-transform duration-1000 group-hover:scale-105 ${isLeftImage ? "left-0" : "right-0"
                  }`}
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Content Container */}
              <div className="container mx-auto px-6 lg:px-12 relative z-10 py-16 lg:py-32">
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-24 items-center`}>

                  {/* Text Content Area */}
                  <div className={`flex flex-col ${isLeftImage ? "lg:col-start-2 items-start" : "lg:col-start-1 items-start"}`}>
                    <div className="relative h-12 w-40 mb-8">
                      <Image
                        src={brand.logo}
                        alt={`${brand.name} Logo`}
                        fill
                        className="object-contain object-left"
                      />
                    </div>

                    <h4 className="text-xl font-bold text-sky-500 mb-4 tracking-tight uppercase">
                      {brand.category}
                    </h4>

                    <p className="text-base lg:text-lg text-slate-600 font-medium leading-relaxed max-w-xl mb-10">
                      {brand.desc}
                    </p>

                    <div className="flex items-center">
                      <a
                        href={brand.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-slate-900 font-bold text-sm tracking-widest uppercase group/link"
                      >
                        <span className="border-b-2 border-slate-900/10 group-hover/link:border-sky-500 pb-1 transition-all">
                          {brand.linkText}
                        </span>
                        <ArrowRight className="w-5 h-5 text-sky-500 transition-transform group-hover/link:translate-x-2" />
                      </a>
                    </div>
                  </div>

                  {/* Mobile Image Area */}
                  <div className="lg:hidden relative h-[350px] rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

    </section>
  )
}
