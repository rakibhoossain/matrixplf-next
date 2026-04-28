"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef, useMemo, useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import CategoryCard from "./CategoryCard"
import { categories } from "@/lib/data"
import { Reveal } from "@/components/Reveal"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"

export default function CategorySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [scrollRange, setScrollRange] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Dynamically generate layout pattern based on categories length
  const columns = useMemo(() => {
    const cols = []
    let i = 0
    let isSingle = true

    while (i < categories.length) {
      if (isSingle || i === categories.length - 1) {
        // Single column
        cols.push({
          type: 'single',
          width: 'w-[75vw] sm:w-[300px] md:w-[350px] lg:w-[420px]',
          items: [categories[i]]
        })
        i += 1
      } else {
        // Double column
        cols.push({
          type: 'double',
          width: 'w-[38vw] sm:w-[150px] md:w-[150px] lg:w-[220px]',
          items: [categories[i], categories[i + 1]]
        })
        i += 2
      }
      isSingle = !isSingle
    }
    return cols
  }, [categories])

  useEffect(() => {
    const calculateScrollRange = () => {
      if (trackRef.current) {
        setScrollRange(trackRef.current.scrollWidth - window.innerWidth)
      }
    }

    calculateScrollRange()
    window.addEventListener("resize", calculateScrollRange)
    return () => window.removeEventListener("resize", calculateScrollRange)
  }, [columns])

  // Calculate horizontal movement based on viewport scroll progress of the sticky wrapper
  const xMovement = useTransform(scrollYProgress, [0, 1], [0, -scrollRange])
  const smoothX = useSpring(xMovement, { stiffness: 60, damping: 25 })

  // Touch handling for mobile finger slide
  const touchStart = useRef<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart.current === null) return

    const touchCurrent = e.touches[0].clientX
    const deltaX = touchStart.current - touchCurrent

    // Convert horizontal swipe into vertical scroll
    if (Math.abs(deltaX) > 10) {
      window.scrollBy(0, deltaX * 1.5)
      touchStart.current = touchCurrent
    }
  }

  const handleTouchEnd = () => {
    touchStart.current = null
  }

  return (
    <div className="relative bg-[#0d1420]">
      {/* Introduction Header - Scrolls Naturally with the page */}
      <div className="container mx-auto px-6 lg:px-12 pt-32 pb-24 relative z-20">
        <Reveal>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-500/10 rounded-full mb-6 border border-sky-500/20">
              <div className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-pulse" />
              <span className="text-sky-400 text-[10px] font-bold uppercase tracking-widest">
                Our Capabilities
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              <span className="text-sky-500">Fashion-led</span> product<br />
              Categories.
            </h2>
            <p className="text-base lg:text-lg text-slate-400 font-medium max-w-xl leading-relaxed">
              Explore our core product direction across fashion wear, outerwear,
              bottomwear and category-driven apparel development.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Sticky Gallery Section - Locks scroll to slide horizontally */}
      <div ref={containerRef} className="relative h-[450vh]">
        <section className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
          <div className="w-full relative z-10 flex items-center">
            {/* Horizontal Carousel Track */}
            <motion.div
              ref={trackRef}
              style={{ x: smoothX }}
              className="flex gap-2 md:gap-4 items-stretch h-[75vh] md:h-[80vh] lg:h-[85vh] pl-6 lg:pl-12 pr-6 lg:pr-12 touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {columns.map((col, idx) => (
                <div
                  key={idx}
                  className={` flex flex-col gap-2 md:gap-4 ${col.width}`}
                >
                  {col.type === 'single' ? (
                    <CategoryCard
                      name={col.items[0].name}
                      image={col.items[0].images[0]}
                      link={col.items[0].link}
                      className="w-full h-full  shadow-2xl"
                      priority={idx < 2}
                    />
                  ) : (
                    <>
                      <CategoryCard
                        name={col.items[0].name}
                        image={col.items[0].images[0]}
                        link={col.items[0].link}
                        className="w-full h-full  shadow-xl"
                        priority={idx < 2}
                      />
                      <CategoryCard
                        name={col.items[1].name}
                        image={col.items[1].images[0]}
                        link={col.items[1].link}
                        className="w-full h-full  shadow-xl"
                        priority={idx < 2}
                      />
                    </>
                  )}
                </div>
              ))}

              {/* Final CTA Card */}
              <div className="flex-shrink-0 w-[85vw] sm:w-[350px] md:w-[500px] lg:w-[600px] h-full rounded-[2.5rem] bg-[#111823] border border-white/10 p-4 md:p-10 flex flex-col justify-between relative overflow-hidden group">
                <div className="flex justify-between items-start relative z-10">
                  <span className="text-sky-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">
                    End of Categories
                  </span>
                </div>

                <div className="relative z-10 space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] tracking-tight">
                      Ready to develop your <span className="text-sky-500">next program?</span>
                    </h3>
                    <p className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed">
                      Our design and merchandising teams turn concepts into shippable styles across all nine categories.
                    </p>
                  </div>



                  <Link
                    href="/contact"
                    className={cn(buttonVariants({
                      variant: "matrix",
                      size: "lg",
                    }), "shadow-xl shadow-sky-500/20 active:scale-95 w-fit")}
                  >
                    Start a conversation
                    <ArrowRight className="w-6 h-6 transition-transform group-hover/btn:translate-x-2" />
                  </Link>
                </div>

                {/* Decorative background globs */}
                <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-sky-500/5 blur-[120px] rounded-full -z-0 group-hover:bg-sky-500/10 transition-colors duration-700" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-sky-500/10 blur-[150px] rounded-full -z-0" />
              </div>

            </motion.div>
          </div>

          {/* Dynamic Progress Indicator */}
          <div className="container mx-auto px-6 lg:px-12 relative z-20 mt-4">
            <div className="h-px bg-white/5 hidden md:block w-full">
              <motion.div
                className="h-full bg-sky-500 shadow-[0_0_15px_rgba(56,189,248,0.6)]"
                style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
              />
              <div className="mt-4 flex justify-between text-[9px] font-bold text-slate-600 uppercase tracking-[0.4em]">
                <span>01 / Start</span>
                <span className="text-sky-500/40">Scroll to Explore Categories</span>
                <span>0{columns.length} / Finish</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
