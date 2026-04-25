"use client"

import { useEffect, useRef, useState } from "react"

export function WhoWeAreExcellenceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-10 lg:py-10 bg-[#f3f4f6] relative overflow-hidden">
      {/* Dot Pattern Background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Manufacturing <span className="text-sky-500">Excellence</span>, Innovation at <span className="text-sky-500">Scale</span>
            <br />
            Fully Vertically Integrated.
          </h2>

          <p
            className={`text-lg md:text-xl text-slate-800 leading-relaxed max-w-5xl transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            We are a vertically integrated apparel manufacturing platform, managing everything from fabric development to finished garments across our global network.

            <br />  <br />
            With advanced production facilities, strong material sourcing, and continuous innovation, we deliver consistent quality, speed, and scalable solutions for international retail programs.
          </p>
        </div>
      </div>
    </section>
  )
}
