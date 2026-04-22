"use client"

import { useEffect, useRef, useState } from "react"
import { Map, ArrowRight } from "lucide-react"

const networkLocations = [
  { country: "Slovenia", role: "Design & Development Hub", desc: "European design sensibility and rapid prototyping." },
  { country: "Hong Kong", role: "Financial & Logistics Headquarter", desc: "Global trade financing and distribution management." },
  { country: "China", role: "Raw Material Sourcing", desc: "Deep textile integration and fabric engineering." },
  { country: "Bangladesh", role: "Volume Manufacturing", desc: "Large scale knit and woven production." },
  { country: "Sri Lanka", role: "Technical Garment Capability", desc: "Advanced performance wear and intimate apparel." },
]

export function WhoWeAreNetworkSection() {
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

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-zinc-950 relative overflow-hidden">
      
      {/* Abstract Map Background Grid */}
      <div 
         className="absolute inset-0 opacity-[0.03] animate-pulse"
         style={{
           backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
           backgroundSize: '40px 40px',
         }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Map className="w-4 h-4 text-sky-400" />
            <span className="text-sky-400 text-sm font-bold tracking-wide uppercase">Global Network</span>
          </div>

          <h2 
            className={`text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-700 delay-100 ${
               isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            One Integrated Group
          </h2>
          <p 
            className={`text-xl text-zinc-400 transition-all duration-700 delay-200 ${
               isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Strategically positioned across five international hubs to leverage regional strengths in design, finance, materials, and production.
          </p>
        </div>

        {/* Network Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {networkLocations.map((loc, idx) => (
             <div 
               key={idx}
               className={`group bg-zinc-900/50 border border-zinc-800 hover:border-sky-500/50 rounded-3xl p-8 hover:bg-zinc-900 transition-all duration-500 cursor-pointer relative overflow-hidden ${
                 isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
               }`}
               style={{ transitionDelay: `${300 + (idx * 100)}ms` }}
             >
               {/* Hover Glow */}
               <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500/0 to-sky-500/0 group-hover:from-sky-500/20 group-hover:to-cyan-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />
               
               <div className="relative z-10">
                 <div className="text-sm font-semibold text-sky-500 uppercase tracking-widest mb-2">
                   {loc.role}
                 </div>
                 <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-sky-50 transition-colors">
                   {loc.country}
                 </h3>
                 <p className="text-zinc-400 leading-relaxed mb-8">
                   {loc.desc}
                 </p>
                 
                 <div className="mt-auto flex items-center text-zinc-500 group-hover:text-sky-400 transition-colors text-sm font-bold">
                   Explore capability
                   <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                 </div>
               </div>
             </div>
          ))}
          
          {/* Aesthetic Filler Card */}
          <div 
             className={`bg-zinc-800/20 border border-zinc-800/50 rounded-3xl p-8 flex items-center justify-center relative overflow-hidden ${
               isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
             }`}
             style={{ transitionDelay: '800ms' }}
          >
             <div className="text-center">
                <h3 className="text-4xl font-black text-white/10 mb-2">1 GROUP.</h3>
                <h3 className="text-4xl font-black text-white/5">INFINITE POTENTIAL.</h3>
             </div>
          </div>
        </div>

      </div>
    </section>
  )
}
