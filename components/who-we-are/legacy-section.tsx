"use client"

import { useEffect, useRef, useState } from "react"

export function WhoWeAreLegacySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="flex flex-col lg:block bg-white relative overflow-hidden">
      {/* Image Container: Relative on mobile (stacks top), Absolute on desktop (background) */}
      <div className="relative lg:absolute lg:inset-0 h-[280px] sm:h-[400px] lg:h-full z-0">
        <img
          src="/assets/pages/The-Matrix-Advantage.jpg"
          alt="Factory Background"
          className="w-full h-full object-cover object-center md:object-right"
        />

        {/* Deskstop Selective Blur Overlay */}
        <div
          className="absolute inset-y-0 left-0 w-full lg:w-[65%] bg-white/60 backdrop-blur-md z-10 hidden lg:block"
          style={{
            maskImage: 'linear-gradient(to right, black 70%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, black 70%, transparent 100%)'
          }}
        />

        {/* Desktop Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent z-0 hidden lg:block" />

        {/* Mobile Gradient Overlay (Fade bottom) */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:hidden" />
      </div>

      {/* Legacy Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-20 py-12 lg:py-24">
        <div className="max-w-2xl lg:max-w-[50%]">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-sky-500 mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            The Matrix Advantage
          </h2>

          <div className={`space-y-6 md:space-y-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
            <p className="text-lg md:text-xl text-slate-800 leading-relaxed opacity-80">
              Matrix Platform is a vertically integrated manufacturing ecosystem connecting fabric, production, and global retail.
            </p>

            <p className="text-lg md:text-xl text-slate-800 leading-relaxed opacity-80">
              We maintain a strategic stake in Zhejiang Monalisa Textile, producing over 3 million meters of fabric monthly, and deliver more than 3 million garments across knit, woven, and specialized categories.
            </p>
            <p className="text-lg md:text-xl text-slate-800 leading-relaxed opacity-80">
              Operating across Bangladesh, China, and Sri Lanka — supported by Hong Kong trade finance and EU logistics — we provide full DDP delivery, ensuring goods arrive retail-ready.
            </p>

            <p className="text-lg md:text-xl text-slate-800 leading-relaxed opacity-80">
              We also own and operate our retail brand across 16 European countries, giving us real market insight and a clear understanding of what sells — from concept and design through production to final distribution.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
