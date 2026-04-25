"use client"

import { motion } from "framer-motion"

const leftNodes = [
  {
    id: "europe",
    title: "Matrix Design d.o.o.",
    location: "Ljubljana, Slovenia",
    desc: "EU-based design, compliance, and logistics coordination.",
    color: "#b59410", // Gold
    y: 100,
  },
  {
    id: "china",
    title: "Matrix Platform Limited",
    location: "Hong Kong",
    desc: "Trade finance, HSBC credit facility, LC operations, parent entity for all factory relationships",
    color: "#0ea5e9", // Sky Blue
    y: 310,
  },
  {
    id: "uk",
    title: "Zhejiang Monalisa Textile",
    location: "Shaoxing, China",
    desc: "30% owned. 3 million metres/month fabric capacity. Polyester, viscose, blended, knit fabrics.",
    color: "#a855f7", // Purple
    y: 520,
  },
  {
    id: "srilanka",
    title: "Sri Lanka Operations",
    location: "Colombo, Sri Lanka",
    desc: "Technical lingerie and specialized apparel with EU market access.",
    color: "#f97316", // Orange
    y: 730,
  }
];

const rightNodes = [
  {
    id: "bd1",
    title: "Matrix Apparels Ltd",
    location: "Dhaka, Bangladesh",
    desc: "Product development and flexible manufacturing hub.",
    color: "#a3e635", // Lime
    y: 100,
  },
  {
    id: "bd2",
    title: "IFS Texwear Ltd",
    location: "Dhaka, Bangladesh",
    desc: "Large-scale composite knit manufacturing with full integration.",
    color: "#10b981", // Emerald
    y: 310,
  },
  {
    id: "bd3",
    title: "MB Knit Fashion Ltd",
    location: "Dhaka, Bangladesh",
    desc: "Established high-volume knitwear production with strong reliability.",
    color: "#15803d", // Green
    y: 520,
  },
  {
    id: "bd4",
    title: "Westknit",
    location: "Bangladesh",
    desc: "Vertically integrated knitwear production across core categories.",
    color: "#2dd4bf", // Teal
    y: 730,
  },
  {
    id: "bd5",
    title: "Lithe Knitwear Ltd",
    location: "Gazipur, Bangladesh",
    desc: "High-volume integrated knit facility with advanced production systems.",
    color: "#ec55ecff", // Pink
    y: 945,
  }
];

const allNodes = [...leftNodes, ...rightNodes];

export function GlobalNetworkSection() {
  return (
    <section
      className="bg-[#0b121f] py-20 lg:py-32 relative overflow-hidden"
      id="network"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[100px] -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] -ml-32 -mb-32" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mb-12 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6"
          >
            <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
            <span className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Global Footprint</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight"
          >
            Connected <span className="text-sky-500">Global Infrastructure</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl"
          >
            Our integrated supply chain bridges continents, from design labs in Europe
            to high-performance manufacturing hubs in South Asia.
          </motion.p>
        </div>

        {/* Desktop Map Visualization (LG and up) */}
        <div className="hidden lg:block relative w-full aspect-[1200/1050] mx-auto">
          {/* Map Image */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex items-center justify-center">
            <img
              alt="World Map"
              className="w-full h-auto object-contain scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwbZPaoZQbMyqHNyGuCMOMhHJsawb6979ZEE8MwQTRIgI1OFzGElghBG9S-Mkfh_jJigbtkN3riNOu3vwNAFi_mz6krXIELJA7bmm_ZKXF929ClbOyCx0gEc79d1t9W57HqnJP1wdZR0Vx6u__NVKZGgiJupf7j4NtNrJzTh6Hiv5bpwQO0vblb0KpDTAWsRdMo6QvSU2QPwmNr7ecF1Zbxs6AKZZ7aZ82qlw6NRWperCkj13Ru0qI7sFZlntYZX7rcTJ7_UgwxTgS"
            />
          </div>

          <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 1200 1050">
            <style>
              {`
                .network-line { stroke-dasharray: 10; animation: dash 30s linear infinite; stroke-opacity: 0.8; }
                @keyframes dash { to { stroke-dashoffset: 1000; } }
              `}
            </style>

            {/* Lines to Nodes */}
            {leftNodes.map(node => (
              <path
                key={node.id}
                className="network-line"
                d={`M 340 ${node.y} L ${node.id === 'europe' ? 515 : node.id === 'china' ? 415 : node.id === 'uk' ? 490 : 560} ${node.y} L ${node.id === 'europe' ? 515 : node.id === 'china' ? 415 : node.id === 'uk' ? 490 : 560} ${node.id === 'europe' ? 450 : node.id === 'china' ? 480 : node.id === 'uk' ? 515 : 540}`}
                fill="transparent"
                stroke={node.color}
                strokeWidth="2.5"
              />
            ))}

            {rightNodes.map(node => (
              <path
                key={node.id}
                className="network-line"
                d={`M 860 ${node.y} L ${node.id === 'bd1' ? 710 : node.id === 'bd2' ? 730 : node.id === 'bd3' ? 750 : node.id === 'bd4' ? 780 : 800} ${node.y} L ${node.id === 'bd1' ? 710 : node.id === 'bd2' ? 730 : node.id === 'bd3' ? 750 : node.id === 'bd4' ? 780 : 800} ${node.id === 'bd1' ? 495 : node.id === 'bd2' ? 515 : node.id === 'bd3' ? 530 : node.id === 'bd4' ? 545 : 560}`}
                fill="transparent"
                stroke={node.color}
                strokeWidth="2.5"
              />
            ))}

            {/* Ping Dots */}
            {[
              { cx: 515, cy: 450, c: '#b59410' }, { cx: 415, cy: 480, c: '#0ea5e9' }, { cx: 490, cy: 515, c: '#a855f7' }, { cx: 560, cy: 540, c: '#f97316' },
              { cx: 710, cy: 495, c: '#a3e635' }, { cx: 730, cy: 515, c: '#10b981' }, { cx: 750, cy: 530, c: '#15803d' }, { cx: 780, cy: 545, c: '#2dd4bf' }, { cx: 800, cy: 560, c: '#ec55ecff' }
            ].map((dot, i) => (
              <g key={i}>
                <circle cx={dot.cx} cy={dot.cy} fill={dot.c} r="8" />
                <circle cx={dot.cx} cy={dot.cy} fill={dot.c} r="16" className="animate-ping opacity-30" style={{ animationDelay: `${i * 0.2}s` }} />
              </g>
            ))}
          </svg>

          {/* Cards positioned absolutely to match SVG coords */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            {leftNodes.map((node) => (
              <div
                key={node.id}
                className="absolute right-[calc(100%-340px)] w-[340px] -translate-y-1/2 bg-black/40 backdrop-blur-md p-5 rounded-xl border-2 pointer-events-auto transition-all hover:-translate-y-[calc(50%+4px)] hover:shadow-2xl"
                style={{ top: `${(node.y / 1050) * 100}%`, borderColor: node.color }}
              >
                <h3 className="text-lg font-bold mb-0.5" style={{ color: node.color }}>{node.title}</h3>
                <p className="text-sm font-bold text-white mb-2">{node.location}</p>
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">{node.desc}</p>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1.5 w-3 h-3 rounded-full" style={{ backgroundColor: node.color }}></div>
              </div>
            ))}

            {rightNodes.map((node) => (
              <div
                key={node.id}
                className="absolute left-[860px] w-[340px] -translate-y-1/2 bg-black/40 backdrop-blur-md p-5 rounded-xl border-2 pointer-events-auto transition-all hover:-translate-y-[calc(50%+4px)] hover:shadow-2xl"
                style={{ top: `${(node.y / 1050) * 100}%`, borderColor: node.color }}
              >
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1.5 w-3 h-3 rounded-full" style={{ backgroundColor: node.color }}></div>
                <h3 className="text-lg font-bold mb-0.5" style={{ color: node.color }}>{node.title}</h3>
                <p className="text-sm font-bold text-white mb-2">{node.location}</p>
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">{node.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Responsive Mobile/Tablet Layout (Single Column / Spine) */}
        <div className="lg:hidden relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

          <div className="space-y-10 relative z-10">
            {allNodes.map((node, index) => {
              const isRight = index % 2 !== 0;
              return (
                <div key={node.id} className={`flex flex-col md:flex-row items-start md:items-center w-full ${isRight ? "md:flex-row-reverse" : ""}`}>
                  <div className={`w-full md:w-[46%] ${isRight ? "md:pl-10" : "md:pr-10"}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border-l-4 relative group"
                      style={{ borderLeftColor: node.color }}
                    >
                      {/* Connection Lines */}
                      <div className={`absolute top-1/2 -translate-y-1/2 w-6 h-px md:hidden left-0 -translate-x-full`} style={{ backgroundColor: node.color }} />
                      <div className={`absolute top-1/2 -translate-y-1/2 w-10 h-px hidden md:block ${isRight ? "left-0 -translate-x-full" : "right-0 translate-x-full"}`} style={{ backgroundColor: node.color }} />

                      {/* Spine Dot */}
                      <div
                        className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full ${isRight ? "-left-[calc(2.5rem+6px+0.5px)]" : "-right-[calc(2.5rem+6px+0.5px)]"
                          } hidden md:block`}
                        style={{ backgroundColor: node.color, boxShadow: `0 0 10px ${node.color}` }}
                      />

                      <h3 className="text-xl font-bold mb-1" style={{ color: node.color }}>{node.title}</h3>
                      <p className="text-sm font-bold text-white mb-2">{node.location}</p>
                      <p className="text-sm text-slate-400 leading-relaxed">{node.desc}</p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
