"use client"

import Image from "next/image"
import { MapPin } from "lucide-react"

const leftNodes = [
  {
    id: "slovenia",
    title: "Matrix Design d.o.o.",
    location: "Slovenia",
    desc: "EU legal entity. EORI registration, EU VAT, logistics coordination, sample handling.",
    color: "#eab308", // Yellow
  },
  {
    id: "hongkong",
    title: "Matrix Platform Limited",
    location: "Hong Kong",
    desc: "Trade finance, HSBC credit facility, LC operations, parent entity for all factory relationships",
    color: "#38bdf8", // Light Blue
  },
  {
    id: "china",
    title: "Zhejiang Monalisa Textile",
    location: "Shaoxing, China",
    desc: "30% owned. 3 million metres/month fabric capacity. Polyester, viscose, blended, knit fabrics.",
    color: "#a855f7", // Purple
  },
  {
    id: "srilanka",
    title: "Sri Lanka Operations",
    location: "Colombo",
    desc: "Technical lingerie and polyamide products. BOI approved, amanté brand.",
    color: "#f97316", // Orange
  }
];

const rightNodes = [
  {
    id: "bd1",
    title: "Matrix Apparels Ltd",
    location: "Dhaka, Bangladesh",
    desc: "Built from scratch. Design centre, product development, multi-product flexibility.",
    color: "#4ade80", // Light Green
  },
  {
    id: "bd2",
    title: "IFS Texwear Ltd",
    location: "Dhaka, Bangladesh",
    desc: "80 sewing lines, 20 tons/day output. The volume engine.",
    color: "#4ade80",
  },
  {
    id: "bd3",
    title: "MB Knit Fashion Ltd",
    location: "Dhaka, Bangladesh",
    desc: "Est. 1992, 1.4 million pcs/month (peak 2.1M). LPP Rated A.",
    color: "#4ade80",
  },
  {
    id: "bd4",
    title: "Westknit",
    location: "Bangladesh",
    desc: "Knit specialist. Partner factory, same family ownership as Lithe and IFS.",
    color: "#4ade80",
  }
];

const pins = [
  { id: 'slovenia', color: '#eab308', top: '24%', left: '54%' },
  { id: 'china', color: '#a855f7', top: '33%', left: '83%' },
  { id: 'hongkong', color: '#38bdf8', top: '38%', left: '81%' },
  { id: 'bangladesh', color: '#4ade80', top: '37%', left: '75%' },
  { id: 'srilanka', color: '#f97316', top: '46%', left: '72%' },
]

export function GlobalNetworkSection() {
  return (
    <section className="bg-[#212429] text-white relative overflow-hidden min-h-screen flex items-center py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 relative z-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 tracking-tight text-[#4cb5e4] uppercase">
            One Integrated Group
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Our Infrastructure Was Built To Solve The Complexity Of Modern Apparel Sourcing
          </p>
        </div>

        <div className="relative">
          {/* Map Overlay for Desktop Container */}
          <div className="absolute inset-0 z-0 hidden lg:flex items-center justify-center opacity-70 pointer-events-none">
            <div className="relative w-full max-w-[900px] aspect-[2/1]">
              <Image
                src="/images/world-map.png"
                alt="World Map"
                fill
                className="object-contain"
                priority
              />

              {/* Blinking Map Pins */}
              {pins.map(pin => (
                <div
                  key={pin.id}
                  className="absolute"
                  style={{ top: pin.top, left: pin.left, transform: 'translate(-50%, -100%)' }}
                >
                  {/* Pin Pulse */}
                  <div
                    className="absolute top-[80%] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full animate-ping opacity-75"
                    style={{ backgroundColor: pin.color }}
                  />
                  {/* Core Pin */}
                  <MapPin
                    className="w-10 h-10 relative z-10"
                    style={{ color: pin.color, fill: `${pin.color}40`, strokeWidth: 1.5 }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr_1fr] xl:grid-cols-[1fr_3fr_1fr] relative z-10 gap-6 lg:gap-8 items-center">

            {/* Left Column */}
            <div className="space-y-4 md:space-y-6 lg:space-y-8 col-start-1">
              {leftNodes.map((node) => (
                <div
                  key={node.id}
                  className="relative group w-full max-w-sm mx-auto lg:ml-auto"
                >
                  <div
                    className="border-2 rounded-2xl p-4 lg:p-6 bg-[#2a2e33]/90 backdrop-blur-md shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl hover:bg-[#2a2e33]"
                    style={{ borderColor: node.color }}
                  >
                    <h3 className="text-lg lg:text-xl font-bold mb-1" style={{ color: node.color }}>{node.title}</h3>
                    <h4 className="text-xs lg:text-sm font-semibold mb-2 lg:mb-3 text-white">{node.location}</h4>
                    <p className="text-xs lg:text-sm text-gray-300 leading-relaxed font-light">{node.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Spacer for the Map on Desktop */}
            <div className="hidden lg:block col-start-2 self-stretch" />

            {/* Right Column */}
            <div className="space-y-4 md:space-y-6 lg:space-y-8 col-start-1 md:col-start-2 lg:col-start-3">
              {rightNodes.map((node) => (
                <div
                  key={node.id}
                  className="relative group w-full max-w-sm mx-auto lg:mr-auto"
                >
                  <div
                    className="border-2 rounded-2xl p-4 lg:p-6 bg-[#2a2e33]/90 backdrop-blur-md shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl hover:bg-[#2a2e33]"
                    style={{ borderColor: node.color }}
                  >
                    <h3 className="text-lg lg:text-xl font-bold mb-1" style={{ color: node.color }}>{node.title}</h3>
                    <h4 className="text-xs lg:text-sm font-semibold mb-2 lg:mb-3 text-white">{node.location}</h4>
                    <p className="text-xs lg:text-sm text-gray-300 leading-relaxed font-light">{node.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Map (shows below header, above cards on small screens) */}
        <div className="lg:hidden relative w-full aspect-[2/1] my-8 opacity-80 pointer-events-none">
          <Image
            src="/images/world-map.png"
            alt="World Map"
            fill
            className="object-contain"
          />
          {pins.map(pin => (
            <div
              key={pin.id}
              className="absolute"
              style={{ top: pin.top, left: pin.left, transform: 'translate(-50%, -100%)' }}
            >
              <div
                className="absolute top-[80%] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full animate-ping opacity-75"
                style={{ backgroundColor: pin.color }}
              />
              <MapPin
                className="w-8 h-8 relative z-10"
                style={{ color: pin.color, fill: `${pin.color}40`, strokeWidth: 1.5 }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
