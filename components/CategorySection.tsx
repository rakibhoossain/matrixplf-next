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

  // Layout pattern: [Single, Double, Single, Double]
  const columns = useMemo(() => {
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
  // Adjusted movement to feel more fluid with the full-height cards
  const targetX = `-${(itemCount - 1) * 22}%`
  const xMovement = useTransform(scrollYProgress, [0, 1], ["0%", targetX])
  const smoothX = useSpring(xMovement, { stiffness: 50, damping: 20 })

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-zinc-950">
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        
        {/* Header - Styled to match the provided image */}
        <div className="container mx-auto px-6 md:px-20 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              <span className="text-[#4cb5e4]">Fashion-led</span> product<br />
              Categories.
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-zinc-400 font-medium max-w-2xl leading-relaxed">
              Explore our core product direction across fashion wear, outerwear,<br className="hidden md:block" /> 
              bottomwear and category-driven apparel development.
            </p>
          </motion.div>
        </div>

        <div className="w-full px-6 md:px-20 relative z-10 flex items-center">
          {/* Horizontal Carousel Track */}
          <motion.div
            style={{ x: smoothX }}
            className="flex gap-4 md:gap-6 items-stretch h-[60vh] md:h-[65vh]"
          >
            {columns.map((col, slotIndex) => (
              <div key={slotIndex} className="flex-shrink-0 flex flex-col gap-4 md:gap-6 w-[320px] md:w-[400px] lg:w-[480px]">
                {col.type === 'single' ? (
                  <CategoryCard
                    name={col.items[0].name}
                    image={col.items[0].image}
                    link={col.items[0].link}
                    className="w-full h-full"
                    priority={slotIndex < 2}
                  />
                ) : (
                  <>
                    <CategoryCard
                      name={col.items[0].name}
                      image={col.items[0].image}
                      link={col.items[0].link}
                      className="w-full h-[48%]"
                      priority={slotIndex < 2}
                    />
                    <CategoryCard
                      name={col.items[1].name}
                      image={col.items[1].image}
                      link={col.items[1].link}
                      className="w-full h-[48%]"
                      priority={slotIndex < 2}
                    />
                  </>
                )}
              </div>
            ))}

            {/* End Cap Spacer */}
            <div className="flex-shrink-0 w-[30vw]" />
          </motion.div>
        </div>

        {/* Dynamic Progress Bar */}
        <div className="absolute bottom-10 left-20 right-20 h-[1px] bg-white/10 hidden md:block">
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
