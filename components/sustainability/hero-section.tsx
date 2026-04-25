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
      <section className="relative h-[65vh] min-h-[500px] w-full overflow-hidden bg-[#0A1622]">
        {/* Background Image with Ken Burns Effect */}
        <div className="absolute inset-0 ">
          <img
            src="/hero/sustainability.jpg"
            alt="Sustainability at Matrix"
            className="object-cover w-full h-full "
          />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 lg:px-12">
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
      <section className="w-full bg-white relative overflow-hidden flex flex-col lg:flex-row items-center">

        {/* Left Content */}
        <div className="container mx-auto px-6 lg:px-12 py-8 lg:py-18 relative z-20 flex-shrink-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#38bdf8] mb-8">Our Sustainability</h2>
          <p className="text-slate-800 text-[17px] leading-relaxed mb-6 font-semibold max-w-lg">
            Every manufacturing unit in the Matrix group is independently audited and certified to the standards that European and UK retailers require. We do not treat compliance as a checkbox. It is built into how we operate, how we source, and how we deliver.
          </p>
          <p className="text-slate-800 text-[17px] leading-relaxed font-semibold max-w-lg">
            The EU Supply Chain Due Diligence Directive (CSDDD) is raising the bar for every brand and retailer sourcing from Asia. Our certifications, traceability, and audit history mean that our customers can demonstrate due diligence from raw material to delivered garment.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[60%] lg:absolute lg:right-0 lg:top-0 lg:bottom-0 h-[400px] lg:h-auto relative">
          {/* Fade overlay mapping exactly to the design - horizontal fade on large screens, vertical fade on mobile */}
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white via-white/80 to-transparent z-10 hidden lg:block" />
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white via-white/80 to-transparent z-10 block lg:hidden" />

          <img
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop"
            alt="Sustainability concept"
            className="w-full h-full object-cover"
          />
        </div>

      </section>
    </div>
  )
}
