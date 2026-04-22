"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

interface CategoryCardProps {
  name: string
  image: string
  link: string
  className?: string
}

export default function CategoryCard({ name, image, link, className = "" }: CategoryCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  })

  // Parallax effect for the image
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])
  const springY = useSpring(y, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={`relative group bg-zinc-900 border border-white/5 flex flex-col ${className}`}
    >
      <Link href={link} className="flex flex-col w-full h-full">
        {/* Upper Image Section */}
        <div className="relative flex-grow overflow-hidden">
          <motion.div 
            style={{ y: springY }} 
            className="absolute inset-x-0 -top-[10%] h-[120%]"
          >
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
            />
          </motion.div>
          {/* Subtle Studio Overlay */}
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
        </div>

        {/* Studio Style Footer Bar */}
        <div className="bg-[#0b121f] py-4 px-3 flex items-center justify-center border-t border-white/10 relative z-10 transition-colors duration-300 group-hover:bg-[#0f172a]">
          <h3 className="text-sm md:text-base font-bold text-white text-center uppercase tracking-[0.1em]">
            {name}
          </h3>
        </div>
      </Link>
    </motion.div>
  )
}
