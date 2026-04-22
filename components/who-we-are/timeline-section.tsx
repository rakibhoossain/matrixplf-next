"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronUp, ChevronDown } from "lucide-react"

const timelineEvents = [
  {
    year: "2018",
    title: "Foundation",
    desc: "Matrix Apparels established with a vision to redefine manufacturing, starting with a core focus on quality and innovation.",
    image: "https://images.unsplash.com/photo-1558444458-5c455962cb63?w=800&q=80"
  },
  {
    year: "2019",
    title: "Expansion into Knitwear",
    desc: "Launched dedicated knit facilities with advanced European machinery, diversifying our production capabilities.",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80"
  },
  {
    year: "2020",
    title: "Vertical Integration",
    desc: "Acquired own fabric supply network to ensure complete product control and superior material quality.",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=800&q=80"
  },
  {
    year: "2021",
    title: "Sri Lanka Operations",
    desc: "Expanded manufacturing footprint into Sri Lanka, focusing on specialized technical garments for global markets.",
    image: "https://images.unsplash.com/photo-1605652613145-66236b92c422?w=800&q=80"
  },
  {
    year: "2022",
    title: "Sustainability 2.0",
    desc: "Implemented comprehensive eco-friendly production systems, reducing our carbon footprint across all facilities.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80"
  },
  {
    year: "2023",
    title: "Global Expansion",
    desc: "Opened strategic hubs in Hong Kong and Slovenia, enhancing our logistics and trade finance capabilities.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
  },
]

export function WhoWeAreTimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0) // 1 for down, -1 for up

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
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden min-h-[900px]">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900"
          >
            Explore our <span className="text-[#2EA3F2]">Growth</span>
          </motion.h2>
        </div>

        {/* Timeline Navigation */}
        <div className="relative max-w-5xl mx-auto">

          {/* Controls */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-12 z-30 flex flex-col gap-2">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className={`p-2 rounded-full border transition-all ${activeIndex === 0
                ? "border-slate-100 text-slate-200 cursor-not-allowed"
                : "border-slate-200 text-slate-400 hover:text-[#2EA3F2] hover:border-[#2EA3F2] hover:bg-sky-50 shadow-sm"
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
                ? "border-slate-100 text-slate-200 cursor-not-allowed animate-none"
                : "border-slate-200 text-slate-400 hover:text-[#2EA3F2] hover:border-[#2EA3F2] hover:bg-sky-50 shadow-sm"
                }`}
            >
              <ChevronDown className="w-6 h-6" />
            </button>
          </div>

          {/* Central Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-slate-100 hidden md:block" />
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
                className="space-y-24 pt-10"
              >
                {visibleEvents.map((event, idx) => {
                  // Determine if item is even/odd based on its actual index in timelineEvents
                  const actualIdx = activeIndex + idx
                  const isEven = actualIdx % 2 === 0

                  return (
                    <div key={event.year} className="relative">
                      {/* Timeline Point */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#2EA3F2] z-20 hidden md:block shadow-[0_0_10px_rgba(46,163,242,0.3)]" />

                      <div className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>

                        {/* Text Side */}
                        <div className="w-full md:w-1/2 relative">
                          <span className="absolute -top-12 left-0 text-8xl lg:text-9xl font-black text-slate-50 select-none -z-10 tracking-tighter">
                            {event.year}
                          </span>

                          <div className="relative z-10 pt-4">
                            <div className="flex items-center gap-4 mb-4">
                              <span className="text-[#2EA3F2] font-bold text-3xl">{event.year}</span>
                              <div className="h-px flex-1 bg-slate-100 md:hidden" />
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">{event.title}</h3>
                            <p className="text-slate-600 text-lg leading-relaxed line-clamp-3">
                              {event.desc}
                            </p>
                          </div>
                        </div>

                        {/* Image Side */}
                        <div className="w-full md:w-1/2">
                          <div className="relative h-[220px]  overflow-hidden shadow-2xl shadow-slate-200/50 group">
                            <Image
                              src={event.image}
                              alt={event.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
