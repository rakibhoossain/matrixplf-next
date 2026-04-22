"use client"

import { useEffect, useRef, useState } from "react"
import { Leaf, Droplet, Recycle, FlaskConical, Bot, Droplets } from "lucide-react"

const initiatives = [
  {
    id: "fabrics",
    title: "Fabrics",
    align: "left" as const,
    image: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=1200&auto=format&fit=crop",
    paragraphs: [
      {
        text: "We are producing and working with fabrics made with sustainable fibre that are better than conventional ones. Organic, fair trade, eco-friendly, non-toxic and low-impact dyes that use harmless chemicals reduce water waste and are safer for workers and better for the environment.",
        icon: <Leaf className="w-5 h-5 text-white" />,
        iconBg: "bg-[#3E8E41]"
      },
      {
        text: "We are investing in yarns including organic cotton, linen, and other available fibers that use less water than conventional growing methods.",
        icon: <Droplets className="w-5 h-5 text-white" />,
        iconBg: "bg-[#1ea1d7]"
      }
    ]
  },
  {
    id: "caustic",
    title: "CAUSTIC RECOVERY PLANT",
    align: "right" as const,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
    paragraphs: [
      {
        text: "Caustic soda (Sodium Hydroxide - NaOH) is one of the most commonly used and hazardous chemicals in the textile and garment industry.",
        icon: <FlaskConical className="w-5 h-5 text-white" />,
        iconBg: "bg-[#1ea1d7]"
      },
      {
        text: "We have installed a caustic recovery plant that enables us to recycle and reuse part of the caustic soda used in the process, helping to reduce the overall environmental footprint.",
        icon: <Recycle className="w-5 h-5 text-white" />,
        iconBg: "bg-[#3E8E41]"
      }
    ]
  },
  {
    id: "machines",
    title: "Machines",
    align: "left" as const,
    image: "https://images.unsplash.com/photo-1598532213005-027cefaeb593?q=80&w=1200&auto=format&fit=crop",
    paragraphs: [
      {
        text: "We have added laser machines for dry processes, replacing conventional methods such as PP spraying.",
        icon: <Bot className="w-5 h-5 text-white" />,
        iconBg: "bg-[#1ea1d7]"
      },
      {
        text: "The PP spray method is hazardous to the health and safety of workers and the environment in which they operate, due to the transformation of chemicals into easily absorbable micro-particles.",
        icon: null,
        iconBg: ""
      }
    ]
  },
  {
    id: "water",
    title: "WATER TREATMENT PLANT",
    align: "right" as const,
    image: "https://images.unsplash.com/photo-1518640059914-7226505ea5bf?q=80&w=1200&auto=format&fit=crop",
    paragraphs: [
      {
        text: "We treat 100% of the water used in our textile and garment processing, removing all hazardous chemicals and materials. The treated water can be reused for various purposes, except for drinking.",
        icon: <Droplet className="w-5 h-5 text-white" />,
        iconBg: "bg-[#1ea1d7]"
      }
    ]
  }
]

export function SustainabilityInitiativesSection() {
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
    <section ref={sectionRef} className="w-full bg-white flex flex-col font-sans">

      <style dangerouslySetInnerHTML={{
        __html: `
        @media (min-width: 1024px) {
          .slant-right { clip-path: polygon(0 0, 100% 0, 100% 100%, 15% 100%); }
          .slant-left { clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%); }
        }
      `}} />

      {initiatives.map((item, idx) => {
        const isLeftAlign = item.align === 'left'

        return (
          <div key={item.id} className="relative w-full min-h-[450px] my-5 bg-[#2B3136] border-b-[6px] border-white flex items-center overflow-hidden">

            {/* Image Container for Mobile (Top) and Desktop (Side) */}
            <div
              className={`absolute top-0 w-full h-[250px] lg:h-full lg:bottom-0 lg:w-[55%] z-10 ${isLeftAlign ? 'lg:right-0 slant-right' : 'lg:left-0 slant-left'
                }`}
            >
              {/* Add a dimming overlay so text handles well if it ever overlaps, though the split avoids it */}
              <div className="absolute inset-0 bg-black/10 mix-blend-overlay z-10" />
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Container */}
            <div className={`container mx-auto px-6 lg:px-12 relative z-20 flex mt-[250px] lg:mt-0 py-12 lg:py-20 ${isLeftAlign ? 'justify-start' : 'justify-end'
              }`}>

              <div className={`lg:w-[45%] text-white flex flex-col ${isLeftAlign ? 'lg:pr-16 text-left items-start' : 'lg:pl-16 text-right items-end'
                }`}>

                <h2 className={`text-4xl lg:text-5xl font-bold text-[#1ea1d7] mb-8 ${isLeftAlign ? '' : 'uppercase text-right'}`}>
                  {isLeftAlign ? item.title : item.title.split(' ').map((word, i) => <span key={i} className="block">{word}</span>)}
                </h2>

                <div className="flex flex-col gap-8 w-full">
                  {item.paragraphs.map((p, pIdx) => (
                    <div key={pIdx} className={`flex items-start gap-5 w-full ${isLeftAlign ? 'flex-row' : 'flex-row-reverse'}`}>

                      {p.icon && (
                        <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 shadow-lg ${p.iconBg}`}>
                          {p.icon}
                        </div>
                      )}

                      {!p.icon && !isLeftAlign && <div className="w-11 h-11 shrink-0" />} {/* Spacer for alignment if no icon on right */}
                      {!p.icon && isLeftAlign && <div className="w-11 h-11 shrink-0" />}

                      <p className={`text-[13px] lg:text-[14px] leading-relaxed font-semibold text-slate-300 ${isLeftAlign ? 'text-left' : 'text-right'}`}>
                        {p.text}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        )
      })}
    </section>
  )
}
