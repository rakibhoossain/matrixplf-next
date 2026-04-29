"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"

interface CategoryCardProps {
  name: string
  image: string
  link: string
  className?: string
  priority?: boolean
}

export default function CategoryCard({ name, image, link, className = "", priority = false }: CategoryCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={`relative group bg-[#111111] flex flex-col overflow-hidden transition-all duration-500 ${className}`}
    >
      <Link href={link} className="flex flex-col w-full h-full">
        {/* Upper Image Section */}
        <div className="relative flex-grow overflow-hidden bg-[#f3f4f6]">
          <Image
            src={image}
            alt={name}
            fill
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            priority={priority}
          />
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
        </div>

        {/* Footer Bar - Matches the design in the image */}
        <div className="bg-[#0b121f] py-2 px-4 mt-3 flex items-center justify-between border rounded-lg border-white/20  relative z-10 transition-colors duration-300 group-hover:border-sky-400">
          <h3 className="truncate text-sm font-semibold tracking-tight text-white md:text-[15px]" >
            {name}
          </h3>
          <ArrowRight className="text-white transition-colors duration-300 group-hover:text-sky-400" />
        </div>
      </Link>
    </motion.div>
  )
}
