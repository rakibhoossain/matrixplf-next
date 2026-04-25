"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Factory, Users, Award, ChevronRight, ArrowUpRight } from "lucide-react"
import Image from "next/image"

const bangladeshCompanies = [
  { name: "Matrix Apparels Ltd", url: "/factory/matrix-apparels" },
  { name: "IFS Texwear Ltd", url: "/factory/ifs-texwear" },
  { name: "MB Knit Fashion", url: "/factory/mb-knit" },
  { name: "Lithe Group", url: "/factory/lithe-group" },
  { name: "Westknit", url: "/factory/westknit" },
]

const sriLankaCompanies = [
  // { name: "Amanté Brand", url: "/factory/amante-brand" },
  { name: "Aitken Spence Apparel", url: "/factory/aitken-spence-apparel" }
]

export function ManufacturingSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCountry, setActiveCountry] = useState<"bangladesh" | "srilanka">("bangladesh")
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
    <section ref={sectionRef} id="what-we-do" className="relative min-h-[750px] lg:min-h-[850px] overflow-hidden">
      {/* Background Image with Ken Burns effect */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=2070&auto=format&fit=crop"
          alt="Garment factory workers"
          fill
          className={`object-cover transition-transform duration-[15s] ease-out ${isVisible ? "scale-110" : "scale-100"
            }`}
          priority
        />
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40" />

        {/* Animated grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Floating accent elements */}
      <div className={`absolute top-20 right-20 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
        }`} />
      <div className={`absolute bottom-20 left-20 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl transition-all duration-1000 delay-300 ${isVisible ? "opacity-100" : "opacity-0"
        }`} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-12 lg:py-16">
        {/* Section Badge - Highlighted */}
        <div
          className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-sky-600/40 to-sky-500/30 border-2 border-sky-400/60 rounded-full mb-6 transition-all duration-700 shadow-lg shadow-sky-500/20 ${isVisible ? "opacity-100 translate-y-0 animate-pulse" : "opacity-0 translate-y-4"
            }`}
        >
          <Factory className="w-5 h-5 text-sky-300" />
          <span className="text-white text-base font-bold tracking-wider uppercase">Own Manufacturing Unit</span>
        </div>

        {/* Section Header */}
        <div className="mb-12 lg:mb-16 max-w-3xl">
          <h2
            className={`text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Backed by real
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600">Production</span> strength
          </h2>

          <p
            className={`text-white/70 text-lg lg:text-xl max-w-2xl transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Strategic manufacturing facilities across South Asia delivering quality, capacity, and reliability.
          </p>
        </div>

        {/* Stats Row */}
        <div
          className={`flex flex-wrap gap-8 lg:gap-12 mb-12 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">6</p>
              <p className="text-white/60 text-sm">Countries</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center">
              <Factory className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">6</p>
              <p className="text-white/60 text-sm">Facilities</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center">
              <Users className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">5000+</p>
              <p className="text-white/60 text-sm">Workers</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center">
              <Award className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">15+</p>
              <p className="text-white/60 text-sm">Certifications</p>
            </div>
          </div>
        </div>

        {/* Country Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 w-full">
          {/* Bangladesh Card */}
          <div
            className={`group relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/20 hover:border-sky-400/40 transition-all duration-500 delay-400 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            onMouseEnter={() => setActiveCountry("bangladesh")}
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-400/40 flex items-center justify-center">
                    <span className="text-lg">🇧🇩</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">
                    Bangladesh
                  </h3>
                </div>
                <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-sky-400 group-hover:translate-x-1 transition-all duration-300" />
              </div>

              <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed">
                High-volume manufacturing across knit and woven programs with state-of-the-art facilities.
              </p>

              <div className="flex flex-wrap gap-3">
                {bangladeshCompanies.map((company, index) => (
                  <a
                    key={company.name}
                    href={company.url}
                    className={`group/link inline-flex items-center gap-2 px-6 py-3 bg-slate-900/40 hover:bg-slate-900/60 text-white hover:text-sky-300 text-sm font-medium rounded-lg transition-all duration-150 cursor-pointer border border-white/10 hover:border-sky-500/50 hover:shadow-[0_0_15px_rgba(14,165,233,0.3)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                    style={{ transitionDelay: `${500 + index * 50}ms` }}
                  >
                    {company.name}
                    <ArrowUpRight className="w-4 h-4 text-sky-400 opacity-0 group-hover/link:opacity-100 transition-all duration-150" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Sri Lanka Card */}
          <div
            className={`group relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/20 hover:border-sky-400/40 transition-all duration-500 delay-500 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            onMouseEnter={() => setActiveCountry("srilanka")}
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-500/20 border border-yellow-400/40 flex items-center justify-center">
                    <span className="text-lg">🇱🇰</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">
                    Sri Lanka
                  </h3>
                </div>
                <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-sky-400 group-hover:translate-x-1 transition-all duration-300" />
              </div>

              <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed">
                Technical lingerie and polyamide product capability with BOI-approved manufacturing strength.
              </p>

              {/* Company Tags - Clickable Links */}
              <div className="flex flex-wrap gap-3">
                {sriLankaCompanies.map((company, index) => (
                  <a
                    key={company.name}
                    href={company.url}
                    className={`group/link inline-flex items-center gap-2 px-6 py-3 bg-slate-900/40 hover:bg-slate-900/60 text-white hover:text-sky-300 text-sm font-medium rounded-lg transition-all duration-150 cursor-pointer border border-white/10 hover:border-sky-500/50 hover:shadow-[0_0_15px_rgba(14,165,233,0.3)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                    style={{ transitionDelay: `${600 + index * 50}ms` }}
                  >
                    {company.name}
                    <ArrowUpRight className="w-4 h-4 text-sky-400 opacity-0 group-hover/link:opacity-100 transition-all duration-150" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
