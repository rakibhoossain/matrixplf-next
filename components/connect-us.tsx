"use client"

import { useEffect, useRef, useState } from "react"
import { Linkedin } from "lucide-react"
import Image from "next/image"
import { Reveal } from "@/components/Reveal"

const teamMembers = [
  {
    id: 1,
    name: "Shohel",
    role: "Managing Director",
    linkedin: "https://www.linkedin.com/in/md-al-amin-2a38b727/",
    image: "/assets/bosses/shohel.jpg",
  },
  {
    id: 2,
    name: "Tina Cocej",
    role: "Director",
    linkedin: "https://www.linkedin.com/in/tina-cocej-b78094214/",
    image: "/assets/bosses/tina.png",
  },
  {
    id: 3,
    name: "Michael Hayles",
    role: "Sourcing Director",
    linkedin: "https://www.linkedin.com/in/michael-hayles-60888722/",
    image: "/assets/bosses/michael.png",
  },
  {
    id: 4,
    name: "Timo Karanko",
    role: "Buying Director",
    linkedin: "https://www.linkedin.com/in/timo-karanko/",
    image: "/assets/bosses/timo.png",
  }
]

export function ConnectUs() {
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
    <section ref={sectionRef} className="py-8 bg-[#ece9e9]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <Reveal>
            <span className="text-sky-500 text-xs font-bold uppercase tracking-[0.2em] block mb-4">
              Our People
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Connect with our <span className="text-sky-500">key experts.</span>
            </h2>
          </Reveal>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6">
          {teamMembers.map((member, idx) => (
            <Reveal key={member.id} delay={0.1 * (idx + 1)}>
              <div className="group relative flex flex-col h-full rounded overflow-hidden shadow-xl shadow-slate-200">
                {/* Image Container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60" />
                </div>

                {/* Footer Bar */}
                <div className="bg-[#1a1d21] p-6 lg:p-8 flex items-center justify-between transition-colors group-hover:bg-[#252a30]">
                  <div className="min-w-0">
                    <h3 className="text-white font-bold text-xl mb-1 truncate">
                      {member.name}
                    </h3>
                    <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">
                      {member.role}
                    </p>
                  </div>

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:bg-slate-700 transition-all flex-shrink-0"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
