"use client"

import { useEffect, useRef, useState } from "react"
import { Download, Factory, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function FabricMillSection() {
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
    <section ref={sectionRef} className="relative min-h-[60vh] lg:min-h-[70vh] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDJ2LTJoMzR6bTAtNHYySDJ2LTJoMzR6bTAtNHYySDJ2LTJoMzR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
      
      {/* World Map Background with Animation - Moving left to right */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className={`absolute inset-0 transition-all duration-[20s] ease-linear ${
            isVisible ? "translate-x-0" : "-translate-x-20"
          }`}
          style={{
            animation: isVisible ? "slideMap 30s linear infinite" : "none"
          }}
        >
          <Image
            src="/images/world-map.png"
            alt="Global network map"
            fill
            className="object-cover opacity-20 scale-110"
            style={{ filter: "invert(1)" }}
          />
        </div>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-sky-400/30 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-10 min-h-[50vh] lg:min-h-[60vh]">
        
        {/* Left Side - Fabric Mill Image with animation - LARGER */}
        <div
          className={`w-full lg:w-1/2 xl:w-[55%] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10 group">
            <div className="relative h-80 md:h-96 lg:h-[450px] xl:h-[500px]">
              <Image
                src="/images/fabric-mill.jpg"
                alt="Zhejiang Monalisa Textile Factory"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 55vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            </div>
            
            {/* Overlay badge */}
            <div className="absolute bottom-5 left-5 right-5">
              <div className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <Factory className="w-6 h-6 text-sky-400" />
                <div>
                  <span className="text-white text-base font-semibold block">Zhejiang Monalisa Textile</span>
                  <span className="text-slate-300 text-sm">Shaoxing, China</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Text Content */}
        <div 
          className={`w-full lg:w-1/2 xl:w-[45%] lg:text-right transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          {/* Highlighted "OUR OWN FABRIC MILL" badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-500/20 to-sky-600/20 border-2 border-sky-400/50 rounded-full mb-5 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0 animate-pulse" : "opacity-0 translate-y-4"
            }`}
          >
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span className="text-sky-300 text-sm font-bold tracking-widest uppercase">OUR OWN FABRIC MILL</span>
          </div>
          
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Flexibility in
            <br />
            <span className="text-sky-400">Every Thread</span>
          </h2>

          <p
            className={`text-base lg:text-lg text-slate-300 leading-relaxed mb-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            We own <span className="font-bold text-sky-400">30%</span> of <span className="font-bold text-white">Zhejiang Monalisa Textile</span> in 
            Shaoxing, China, producing over <span className="font-bold text-sky-400">3 million</span> metres 
            of fabric monthly seamlessly integrated with our 
            Bangladesh & Sri-Lanka manufacturing for faster, 
            more reliable production.
          </p>

          {/* Stats row */}
          <div className={`flex justify-end gap-6 mb-6 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            <div className="text-center lg:text-right">
              <p className="text-2xl font-bold text-sky-400">30%</p>
              <p className="text-xs text-slate-400">Ownership</p>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-2xl font-bold text-sky-400">3M+</p>
              <p className="text-xs text-slate-400">Metres/Month</p>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-2xl font-bold text-sky-400">3</p>
              <p className="text-xs text-slate-400">Countries</p>
            </div>
          </div>

          <div
            className={`flex lg:justify-end transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              size="lg"
              className="bg-sky-600 hover:bg-sky-500 text-white px-6 gap-2 rounded-lg shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Download Profile
            </Button>
          </div>
        </div>
      </div>

      {/* CSS Animation for map slide */}
      <style jsx>{`
        @keyframes slideMap {
          0% { transform: translateX(-5%); }
          50% { transform: translateX(5%); }
          100% { transform: translateX(-5%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-20px) scale(1.2); opacity: 0.6; }
        }
      `}</style>
    </section>
  )
}
