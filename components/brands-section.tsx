"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, ArrowLeft } from "lucide-react"
import Image from "next/image"

const ownBrands = [
  {
    name: "PANTONECLO",
    logo: "/Pantoneclo_logo-New.png",
    category: "Men's Fashion",
    desc: "A European menswear brand registered and distributed across 16 EU countries. The range covers casual knitwear, outerwear, and accessories at accessible price points.",
    linkText: "EXPLORE BRAND",
    link: "https://pantoneclo.si",
    image: "/assets/brand/Pantoneclo.jpg", // two men walking
    align: "right"
  },
  {
    name: "leafletic",
    logo: "/Leafletic-logo-New-3.png",
    category: "Ladies’ Fashion",
    desc: "A European womenswear brand developed and distributed across EU markets, built on a strong understanding of consumer demand, product positioning, and market trends. From concept and design to production and retail distribution, the brand reflects our capability to develop and scale products across diverse categories with commercial relevance.",
    linkText: "EXPLORE BRAND",
    link: "https://pantoneclo.si",
    image: "/assets/brand/Leafletic.jpg", // two women active
    align: "left"
  },
  {
    name: "amanté",
    logo: "/New_logo_with_anagram_black.webp",
    category: "Lingerie",
    desc: "A specialized lingerie brand focused on technical construction, fit accuracy, and market relevance. It represents our capability to deliver complex, high-value product categories from development to retail scale.",
    linkText: "EXPLORE BRAND",
    link: "https://www.amantelingerie.in/",
    image: "/assets/brand/amantais.jpg", // mannequins/lingerie aesthetic
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
      <div className="relative h-[55vh] min-h-[450px] w-full flex items-center bg-[#0a1122]">
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
      <div className="w-full flex flex-col">
        {ownBrands.map((brand, idx) => {
          const isLeftImage = brand.align === 'left'

          return (
            <div key={idx} className="w-full grid lg:grid-cols-2 min-h-[500px]">

              {/* Image Block */}
              <div
                className={`relative h-[400px] lg:h-auto overflow-hidden ${isLeftImage ? "lg:order-1" : "lg:order-2"
                  }`}
              >
                <div className="absolute inset-0 bg-slate-900/5 mix-blend-overlay z-10" />
                {/* Create a glowing edge mask to blend images seamlessly on large screens like in the mockup */}
                <div className={`hidden lg:block absolute inset-y-0 ${isLeftImage ? 'right-0' : 'left-0'} w-32 bg-gradient-to-${isLeftImage ? 'l' : 'r'} from-white to-transparent z-20`} />

                <img
                  src={brand.image}
                  alt={brand.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    objectPosition: isLeftImage ? 'center right' : 'center left'
                  }}
                />
              </div>

              {/* Text Block */}
              <div
                className={`flex flex-col justify-center p-12 lg:p-24 bg-white z-30 ${isLeftImage ? "lg:order-2 text-left lg:text-right items-start lg:items-end" : "lg:order-1 text-left lg:text-left items-start"
                  }`}
              >
                <div className={`relative h-16 w-48 ${isLeftImage ? "lg:ml-auto" : "right-3"}`}>
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} Logo`}
                    fill
                    className="object-contain"
                    style={{
                      objectPosition: isLeftImage ? 'right' : 'left'
                    }}
                  />
                </div>

                <h4 className={`text-xl font-bold text-slate-800 mb-6 tracking-tight ${isLeftImage ? "lg:text-right" : ""
                  }`}>
                  {brand.category}
                </h4>

                <p className={`text-sm lg:text-base text-slate-600 font-medium leading-relaxed max-w-md ${isLeftImage ? "lg:ml-auto text-left lg:text-right" : ""
                  } mb-8`}>
                  {brand.desc}
                </p>

                <div className={`flex items-center ${isLeftImage ? 'lg:justify-end' : ''}`}>
                  {isLeftImage ? (
                    <a href={brand.link} className="inline-flex items-center gap-2 text-[#38bdf8] font-bold text-xs tracking-wider uppercase group">
                      <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                      <span className="border-b-2 border-transparent group-hover:border-[#38bdf8] pb-0.5 transition-colors">{brand.linkText}</span>
                    </a>
                  ) : (
                    <a href={brand.link} className="inline-flex items-center gap-2 text-[#38bdf8] font-bold text-xs tracking-wider uppercase group">
                      <span className="border-b-2 border-transparent group-hover:border-[#38bdf8] pb-0.5 transition-colors">{brand.linkText}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          )
        })}
      </div>

    </section>
  )
}
