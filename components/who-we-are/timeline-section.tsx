"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronUp, ChevronDown } from "lucide-react"

const timelineEvents = [
  {
    year: "2018",
    title: "Company Foundation",
    desc: "Matrix Apparels was established with a vision to build a quality-driven, innovation-led manufacturing platform.",
    image: "/assets/company/2018.png"
  },
  {
    year: "2019",
    title: "Knitwear Expansion",
    desc: "Expanded into knitwear with advanced machinery, strengthening product capability and category diversification.",
    image: "/assets/company/2019.jpg"
  },
  {
    year: "2020",
    title: "Vertical Integration",
    desc: "Strengthened control over fabric supply, ensuring improved quality, consistency, and faster execution.",
    image: "/assets/company/2020.jpg"
  },
  {
    year: "2021",
    title: "Expansion into Sri Lanka",
    desc: "Extended operations into Sri Lanka, focusing on technical and specialized apparel for global markets.",
    image: "/assets/company/2021.jpg"
  },
  {
    year: "2022",
    title: "Sustainability & Process Advancement",
    desc: "Implemented responsible production practices, enhancing efficiency, reducing environmental impact, and reinforcing compliance standards.",
    image: "/assets/company/2022.jpg"
  },
  {
    year: "2023",
    title: "Global Infrastructure Development",
    desc: "Established presence in Hong Kong and Slovenia, strengthening trade finance, logistics, and international operations.",
    image: "/assets/company/2023.png"
  },
  {
    year: "2024",
    title: "Retail Expansion",
    desc: "Expanded into direct retail across European markets, building strong market insight and end-to-end product understanding.",
    image: "/assets/company/2024.jpg"
  },
  {
    year: "2025",
    title: "Integrated Platform Strengthening",
    desc: "Further aligned fabric, production, and logistics into a more efficient and scalable global supply chain.",
    image: "/assets/company/2025.png"
  },
  {
    year: "2026",
    title: "Platform Evolution",
    desc: "Evolved into a fully integrated global platform — connecting design, sourcing, manufacturing, and retail into one seamless ecosystem.",
    image: "/assets/company/2026.jpg"
  }
];

export function WhoWeAreTimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const handleNext = () => {
    if (activeIndex < timelineEvents.length - 2) {
      setDirection(1)
      setActiveIndex(prev => prev + 1)
    }
  }

  const handlePrev = () => {
    if (activeIndex > 0) {
      setDirection(-1)
      setActiveIndex(prev => prev - 1)
    }
  }

  const visibleEvents = timelineEvents.slice(activeIndex, activeIndex + 2)

  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      y: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      y: direction > 0 ? -100 : 100,
      opacity: 0
    })
  }

  return (
    <section className="py-24 lg:py-32 bg-[#0d1420] relative overflow-hidden min-h-[900px]">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-300"
          >
            Explore our <span className="text-[#2EA3F2]">Growth</span>
          </motion.h2>
        </div>

        {/* Timeline Navigation */}
        <div className="relative max-w-full mx-auto">

          {/* Controls */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-12 z-30 flex flex-col gap-2">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className={`p-2 rounded-full border transition-all ${activeIndex === 0
                ? "border-white/5 text-slate-700 cursor-not-allowed"
                : "border-white/10 text-slate-400 hover:text-[#2EA3F2] hover:border-[#2EA3F2] hover:bg-white/5 shadow-sm"
                }`}
            >
              <ChevronUp className="w-6 h-6" />
            </button>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 -bottom-20 z-30">
            <button
              onClick={handleNext}
              disabled={activeIndex >= timelineEvents.length - 2}
              className={`p-2 rounded-full border transition-all animate-bounce ${activeIndex >= timelineEvents.length - 2
                ? "border-white/5 text-slate-700 cursor-not-allowed animate-none"
                : "border-white/10 text-slate-400 hover:text-[#2EA3F2] hover:border-[#2EA3F2] hover:bg-white/5 shadow-sm"
                }`}
            >
              <ChevronDown className="w-6 h-6" />
            </button>
          </div>

          {/* Central Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/5 hidden md:block" />
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-[#2EA3F2]/20 hidden md:block" />

          {/* Items Container */}
          <div className="relative h-[650px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  y: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 }
                }}
                className="space-y-12 pt-10"
              >
                {visibleEvents.map((event, idx) => {
                  const actualIdx = activeIndex + idx
                  const isEven = actualIdx % 2 === 0

                  return (
                    <div key={event.year} className="relative">
                      {/* Timeline Point */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#2EA3F2] z-20 hidden md:block shadow-[0_0_10px_rgba(46,163,242,0.3)]" />

                      <div className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>

                        {/* Text Side */}
                        <div className="w-full md:w-1/2 relative">
                          <span className="absolute -top-12 left-0 text-8xl lg:text-9xl font-black text-white/5 select-none -z-10 tracking-tighter">
                            {event.year}
                          </span>

                          <div className="relative z-10 pt-4">
                            <div className="flex items-center gap-4 mb-4">
                              <span className="text-[#2EA3F2] font-bold text-3xl">{event.year}</span>
                              <div className="h-px flex-1 bg-white/5 md:hidden" />
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">{event.title}</h3>
                            <p className="text-slate-400 text-lg leading-relaxed line-clamp-3">
                              {event.desc}
                            </p>
                          </div>
                        </div>

                        <div className="w-full md:w-1/2">
                          <div className="relative h-[200px] md:h-[240px] lg:h-[260px] rounded-2xl overflow-hidden shadow-2xl group">
                            <Image
                              src={event.image}
                              alt={event.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1420]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>

                      </div>
                    </div>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  )
}
