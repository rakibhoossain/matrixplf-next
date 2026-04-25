"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  {
    value: 6,
    suffix: "+",
    label: "Manufacturing Units Across",
    sublabel: "6 Countries",
  },
  {
    value: 37,
    suffix: "",
    label: "Partner Factories",
    sublabel: "in Our Sourcing Network",
  },
  {
    value: 3,
    suffix: "M+",
    label: "Garments Produced",
    sublabel: "Per Month",
  },
  {
    value: 100,
    suffix: "+",
    label: "Professionals",
    sublabel: "Across 4 Regions",
  },
  {
    value: 15,
    suffix: "+",
    label: "International",
    sublabel: "Certifications",
  },
]

function AnimatedCounter({
  value,
  suffix,
  isVisible
}: {
  value: number
  suffix: string
  isVisible: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const stepValue = value / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += stepValue
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [value, isVisible])

  return (
    <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
      {count}{suffix}
    </span>
  )
}

// Interactive moving background with world map - auto scrolling
function MovingBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollOffset, setScrollOffset] = useState(0)

  // Auto-scroll animation
  useEffect(() => {
    let animationId: number
    let lastTime = performance.now()

    const animate = (currentTime: number) => {
      const delta = (currentTime - lastTime) / 1000
      lastTime = currentTime

      // Scroll speed: pixels per second (negative = scroll left)
      setScrollOffset(prev => {
        const newOffset = prev - delta * 30 // 30 pixels per second
        // Reset when scrolled too far (creates infinite loop effect)
        if (newOffset < -200) return 0
        return newOffset
      })

      animationId = requestAnimationFrame(animate)
    }

    animate(performance.now())
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden bg-[#0a1628]">
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0a1628 0%, #0f2847 50%, #0a1628 100%)',
        }}
      />

      {/* World map - auto scrolling horizontally */}
      <div
        className="absolute inset-[-100px] flex items-center justify-center"
        style={{
          transform: `translateX(${scrollOffset}px)`,
        }}
      >
        <img
          src="/images/world-map.png"
          alt=""
          className="w-[120%] h-full object-cover opacity-30"
          style={{
            filter: 'brightness(0.8) contrast(1.1)',
          }}
        />
      </div>


    </div>
  )
}

export function StatsSection() {
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
    <section
      ref={sectionRef}
      id="who-we-are"
      className="relative py-12 lg:py-16 overflow-hidden"
    >
      {/* Interactive Moving Background */}
      <MovingBackground />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            style={{ fontFamily: "'Arial Black', 'Helvetica Bold', sans-serif" }}
          >
            VERTICALLY INTEGRATED PARTNER
          </h2>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center items-start gap-8 lg:gap-12 xl:gap-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Number */}
              <div className="mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
              </div>

              {/* Label */}
              <div className="max-w-[140px] mx-auto">
                <p className="text-sm font-semibold text-sky-200">{stat.label}</p>
                <p className="text-sm text-sky-300/80">{stat.sublabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
