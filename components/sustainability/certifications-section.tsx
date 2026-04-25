"use client"

import { useEffect, useRef, useState } from "react"

const certifications = [
  { name: "Certification 1", src: "/certifications/1.png" },
  { name: "Certification 2", src: "/certifications/2.png" },
  { name: "Certification 3", src: "/certifications/3.png" },
  { name: "Certification 4", src: "/certifications/4.png" },
  { name: "Certification 5", src: "/certifications/5.png" },
  { name: "Certification 6", src: "/certifications/6.png" },
  { name: "Certification 7", src: "/certifications/7.png" },
  { name: "Certification 8", src: "/certifications/8.png" },
  { name: "Certification 9", src: "/certifications/9.png" },
  { name: "Certification 10", src: "/certifications/10.png" },
  { name: "Certification 11", src: "/certifications/11.png" },
  { name: "Certification 12", src: "/certifications/12.png" },
  { name: "Certification 13", src: "/certifications/13.png" },
  { name: "Certification 14", src: "/certifications/14.png" },
  { name: "Certification 15", src: "/certifications/15.png" },
  { name: "Certification 16", src: "/certifications/16.png" },
  { name: "Certification 17", src: "/certifications/17.png" },
  { name: "Certification 18", src: "/certifications/18.png" },
  { name: "Certification 19", src: "/certifications/19.png" },
  { name: "Certification 20", src: "/certifications/20.png" },
  { name: "Certification 21", src: "/certifications/21.png" },
  { name: "Certification 22", src: "/certifications/22.png" },
]

export function SustainabilityCertificationsSection() {
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
    <section ref={sectionRef} className="py-8 lg:py-20 bg-white w-full overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-black text-[#38bdf8] uppercase tracking-wide transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Platform Certifications
          </h2>
        </div>

        {/* 4x4 Grid of Logos */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-center p-4 transition-all duration-700 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                style={{ transitionDelay: `${150 + (idx % 4) * 100}ms` }}
              >
                <img
                  src={cert.src}
                  alt={cert.name}
                  title={cert.name}
                  className="w-full max-w-[160px] h-auto object-contain mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
