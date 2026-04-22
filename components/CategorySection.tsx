"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef, useMemo } from "react"
import CategoryCard from "./CategoryCard"
import categories from "@/lib/categories.json"

export default function CategorySection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
  })

  // Group categories into "Column Slots" to match the screenshot layout
  const columns = useMemo(() => {
    // Layout pattern: [Single, [Double], Single, [Double], [Double], Single]
    // index 0: Single
    // index 1-2: Double
    // index 3: Single
    // index 4-5: Double
    // index 6-7: Double
    // index 8: Single

    return [
      { type: 'single', items: [categories[0]] },
      { type: 'double', items: [categories[1], categories[2]] },
      { type: 'single', items: [categories[3]] },
      { type: 'double', items: [categories[4], categories[5]] },
      { type: 'double', items: [categories[6], categories[7]] },
      { type: 'single', items: [categories[8]] },
    ]
  }, [])

  const itemCount = columns.length
  // Adjust horizontal scroll to match the number of column-slots
  const targetX = `-${(itemCount - 1) * 20}%`
  const xMovement = useTransform(scrollYProgress, [0, 1], ["0%", targetX])
  const smoothX = useSpring(xMovement, { stiffness: 50, damping: 20 })

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-zinc-950">
      <section className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        {/* Background ambience */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-zinc-800 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-zinc-900 rounded-full blur-[150px]" />
        </div>

        <div className="w-full px-6 md:px-20 relative z-10 h-full flex items-center">
          {/* Horizontal Carousel Track */}
          <motion.div
            style={{ x: smoothX }}
            className="flex gap-4 md:gap-6 items-stretch h-[80vh] md:h-[70vh]"
          >
            {columns.map((col, slotIndex) => (
              <div key={slotIndex} className="flex-shrink-0 flex flex-col gap-4 md:gap-6 w-[280px] md:w-[320px] lg:w-[380px]">
                {col.type === 'single' ? (
                  // Single Tall Card
                  <CategoryCard
                    name={col.items[0].name}
                    image={col.items[0].image}
                    link={col.items[0].link}
                    className="w-full h-full"
                  />
                ) : (
                  // Double Stacked Cards
                  <>
                    <CategoryCard
                      name={col.items[0].name}
                      image={col.items[0].image}
                      link={col.items[0].link}
                      className="w-full h-[48%]"
                    />
                    <CategoryCard
                      name={col.items[1].name}
                      image={col.items[1].image}
                      link={col.items[1].link}
                      className="w-full h-[48%]"
                    />
                  </>
                )}
              </div>
            ))}

            {/* End Cap Spacer */}
            <div className="flex-shrink-0 w-[40vw]" />
          </motion.div>
        </div>

        {/* Dynamic Progress Bar */}
        <div className="absolute bottom-12 left-20 right-20 h-[1px] bg-white/10 hidden md:block">
          <motion.div
            className="h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
            style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
          />
          <div className="mt-4 flex justify-between text-[10px] font-mono text-white/30 uppercase tracking-[0.3em]">
            <span>Begin Discovery</span>

            <span>End of Gallery</span>
          </div>
        </div>
      </section>
    </div>
  )
}
