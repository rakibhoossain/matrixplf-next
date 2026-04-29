"use client"

import { useEffect, useState } from "react"

export function SustainabilityHeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="w-full flex flex-col font-sans">

      {/* Top Banner */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden bg-[#0A1622]">
        {/* Background Image with Ken Burns Effect */}
        <div className="absolute inset-0 ">
          <img
            src="/hero/sustainability.jpg"
            alt="Sustainability at Matrix"
            className="object-cover w-full h-full "
          />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center md:text-center lg:text-center px-6 lg:px-12">
          <div className="max-w-5xl mt-12">
            <h1
              className={`transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight mb-5 drop-shadow-md">
                Certified. Transparent. Responsible
              </span>
            </h1>

            <p
              className={`text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium leading-relaxed transition-all duration-1000 delay-300 drop-shadow-sm ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              Compliance is not a checkbox. It is built into how we operate, how we source, and how we deliver.
            </p>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes kenBurns {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
          }
        `}} />
      </section>

      {/* Our Sustainability Section */}
      <section className="flex flex-col lg:block bg-[#0A1622] relative overflow-hidden">

        {/* Image Container: Relative on mobile (stacks top), Absolute on desktop (full background) */}
        <div className="relative lg:absolute lg:inset-0 h-[280px] sm:h-[400px] lg:h-full z-0">
          <img
            src="/assets/sustainability/sub-hero.avif"
            alt="Sustainability concept"
            className="w-full h-full object-cover object-center"
          />

          {/* Desktop Selective Overlay */}
          <div
            className="absolute inset-y-0 left-0 w-full lg:w-[65%] bg-[#0A1622]/30 z-10 hidden lg:block"
            style={{
              maskImage: 'linear-gradient(to right, black 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, black 70%, transparent 100%)'
            }}
          />

          {/* Desktop Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1622] via-[#0A1622]/40 to-transparent z-0 hidden lg:block" />

          {/* Mobile Gradient Overlay (Fade bottom) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1622] via-transparent to-transparent lg:hidden" />
        </div>

        {/* Content — transparent over full image */}
        <div className="container mx-auto px-6 lg:px-12 relative z-20 py-12 lg:py-24">
          <div className="max-w-2xl lg:max-w-[50%]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#38bdf8] mb-8">Our Sustainability</h2>
            <p className="text-white/80 text-[17px] leading-relaxed mb-6 font-semibold">
              Every manufacturing unit in the Matrix group is independently audited and certified to the standards that European and UK retailers require. We do not treat compliance as a checkbox. It is built into how we operate, how we source, and how we deliver.
            </p>
            <p className="text-white/80 text-[17px] leading-relaxed font-semibold">
              The EU Supply Chain Due Diligence Directive (CSDDD) is raising the bar for every brand and retailer sourcing from Asia. Our certifications, traceability, and audit history mean that our customers can demonstrate due diligence from raw material to delivered garment.
            </p>
          </div>
        </div>

      </section>
    </div>
  )
}
