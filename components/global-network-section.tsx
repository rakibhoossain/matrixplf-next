"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps"
import { Search, MapPin } from "lucide-react"

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

const leftNodes = [
  {
    id: "europe",
    title: "Matrix Design d.o.o.",
    location: "Ljubljana, Slovenia",
    desc: "EU-based design, compliance, and logistics coordination.",
    color: "#b59410",
    coordinates: [14.5058, 46.0569] as [number, number],
  },
  {
    id: "uk",
    title: "Zhejiang Monalisa Textile",
    location: "Shaoxing, China",
    desc: "3 million metres/month fabric capacity. Polyester, viscose, knit fabrics.",
    color: "#a855f7",
    coordinates: [120.5821, 30.0503] as [number, number],
  },
  {
    id: "china",
    title: "Matrix Platform Limited",
    location: "Hong Kong",
    desc: "Trade finance, HSBC credit facility, LC operations for factory relationships",
    color: "#0ea5e9",
    coordinates: [114.1694, 22.3193] as [number, number],
  },
  {
    id: "srilanka",
    title: "Sri Lanka Operations",
    location: "Colombo, Sri Lanka",
    desc: "Technical lingerie and specialized apparel with EU market access.",
    color: "#f97316",
    coordinates: [79.8612, 6.9271] as [number, number],
  }
];

const rightNodes = [
  {
    id: "bd1",
    title: "Matrix Apparels Ltd",
    location: "Dhaka, Bangladesh",
    desc: "Product development and flexible manufacturing hub.",
    color: "#a3e635",
    coordinates: [90.41, 23.81] as [number, number],
  },
  {
    id: "bd2",
    title: "IFS Texwear Ltd",
    location: "Dhaka, Bangladesh",
    desc: "Large-scale composite knit manufacturing with full integration.",
    color: "#10b981",
    coordinates: [90.2, 23.7] as [number, number],
  },
  {
    id: "bd3",
    title: "MB Knit Fashion Ltd",
    location: "Dhaka, Bangladesh",
    desc: "Established high-volume knitwear production with strong reliability.",
    color: "#15803d", // Green
    coordinates: [90.5, 23.85] as [number, number],
  },
  {
    id: "bd4",
    title: "Westknit",
    location: "Bangladesh",
    desc: "Vertically integrated knitwear production across core categories.",
    color: "#2dd4bf", // Teal
    coordinates: [90.1, 23.9] as [number, number],
  },
  {
    id: "bd5",
    title: "Lithe Knitwear Ltd",
    location: "Gazipur, Bangladesh",
    desc: "High-volume integrated knit facility with advanced production.",
    color: "#ec55ec", // Pink
    coordinates: [90.45, 24.0] as [number, number],
  }
];

const allNodes = [...leftNodes, ...rightNodes];

// Calibration for scale 220, center [60, 35] on 1400x900 viewport
const MAP_SCALE = 220;
const CENTER_LON = 60;
const CENTER_LAT = 35;
const PX_PER_DEG = (MAP_SCALE * Math.PI) / 180;

const projectX = (lon: number) => 700 + (lon - CENTER_LON) * PX_PER_DEG;
const projectY = (lat: number) => {
  const centerLatRad = (CENTER_LAT * Math.PI) / 180;
  const latRad = (lat * Math.PI) / 180;
  const centerOffset = Math.log(Math.tan(Math.PI / 4 + centerLatRad / 2));
  const latOffset = Math.log(Math.tan(Math.PI / 4 + latRad / 2));
  return 450 - MAP_SCALE * (latOffset - centerOffset);
};

export function GlobalNetworkSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="bg-[#0b121f] py-8 lg:py-16 relative overflow-hidden" id="network">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 lg:mb-20 px-6 lg:px-12">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-3 px-6 py-2.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-lg mb-6">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </div>
              <span className="text-white text-[11px] font-bold uppercase tracking-[0.2em]">Global Network Dashboard</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Integrated <span className="text-sky-500">Global Hubs</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              Our integrated design and manufacturing infrastructure spanning across continents.
            </p>
          </div>
        </div>

        {/* Desktop Dashboard Area - Static Layout */}
        <div className="hidden lg:block relative w-full aspect-[1400/900] mx-auto bg-[#0d1420] rounded-[3.5rem] border border-white/5 overflow-hidden shadow-2xl">

          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: MAP_SCALE, center: [CENTER_LON, CENTER_LAT] }}
            width={1400}
            height={900}
            className="w-full h-full outline-none select-none opacity-40 focus:outline-none"
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography key={geo.rsmKey} geography={geo} fill="#151d29" stroke="#2d3a4b" strokeWidth={0.5} style={{ default: { outline: "none" }, hover: { outline: "none" }, pressed: { outline: "none" } }} />
                ))
              }
            </Geographies>

            {allNodes.map((node) => (
              <Marker key={`dot-${node.id}`} coordinates={node.coordinates}>
                <g className="outline-none focus:outline-none">
                  <circle r={5} fill={node.color} className="outline-none" />
                  <circle r={14} fill={node.color} className="animate-ping opacity-20 outline-none" />
                </g>
              </Marker>
            ))}
          </ComposableMap>

          {/* SVG Overlay for Accurately Staggered Lines */}
          <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 1400 900">
            {leftNodes.map((node, i) => {
              const mx = projectX(node.coordinates[0]);
              const my = projectY(node.coordinates[1]);
              const cy = (900 / leftNodes.length) * (i + 0.5);
              const spineOffset = [60, 110, 80, 140][i % 4];
              const spineX = 350 + spineOffset;
              const cardEdgeX = 350;

              return (
                <motion.path
                  key={`line-l-${node.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeId && activeId !== node.id ? 0.1 : 0.6 }}
                  d={`M ${mx} ${my} L ${spineX} ${my} L ${spineX} ${cy} L ${cardEdgeX} ${cy}`}
                  fill="none"
                  stroke={node.color}
                  strokeWidth="1.8"
                  strokeDasharray="6,4"
                />
              );
            })}

            {rightNodes.map((node, i) => {
              const mx = projectX(node.coordinates[0]);
              const my = projectY(node.coordinates[1]);
              const cy = (900 / rightNodes.length) * (i + 0.5);
              const spineOffset = [70, 130, 90, 150, 110][i % 5];
              const spineX = 1050 - spineOffset;
              const cardEdgeX = 1050;

              return (
                <motion.path
                  key={`line-r-${node.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeId && activeId !== node.id ? 0.1 : 0.6 }}
                  d={`M ${mx} ${my} L ${spineX} ${my} L ${spineX} ${cy} L ${cardEdgeX} ${cy}`}
                  fill="none"
                  stroke={node.color}
                  strokeWidth="1.8"
                  strokeDasharray="6,4"
                />
              );
            })}
          </svg>

          {/* Address Boxes Layer */}
          <div className="absolute inset-0 z-20 pointer-events-none p-10">
            {leftNodes.map((node, i) => (
              <div
                key={`card-l-${node.id}`}
                onMouseEnter={() => setActiveId(node.id)}
                onMouseLeave={() => setActiveId(null)}
                className={`absolute -translate-y-1/2 left-10 w-[310px] h-[130px] bg-[#0b121f]/80 backdrop-blur-xl p-6 rounded-2xl border-2 pointer-events-auto transition-all shadow-2xl flex flex-col justify-center ${activeId === node.id ? "scale-105 border-white/40 shadow-sky-500/10" : ""}`}
                style={{
                  top: `${((i + 0.5) / leftNodes.length) * 100}%`,
                  borderColor: activeId === node.id ? node.color : `${node.color}50`,
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-3.5 h-3.5" style={{ color: node.color }} />
                  <h3 className="text-base font-bold tracking-tight" style={{ color: node.color }}>{node.title}</h3>
                </div>
                <p className="text-[11px] font-bold text-white mb-2 uppercase tracking-wider">{node.location}</p>
                <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2">{node.desc}</p>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 rounded-full" style={{ backgroundColor: node.color, boxShadow: `0 0 15px ${node.color}` }} />
              </div>
            ))}

            {rightNodes.map((node, i) => (
              <div
                key={`card-r-${node.id}`}
                onMouseEnter={() => setActiveId(node.id)}
                onMouseLeave={() => setActiveId(null)}
                className={`absolute -translate-y-1/2 right-10 w-[310px] h-[130px] bg-[#0b121f]/80 backdrop-blur-xl p-6 rounded-2xl border-2 pointer-events-auto transition-all shadow-2xl text-right flex flex-col justify-center ${activeId === node.id ? "scale-105 border-white/40 shadow-sky-500/10" : ""}`}
                style={{
                  top: `${((i + 0.5) / rightNodes.length) * 100}%`,
                  borderColor: activeId === node.id ? node.color : `${node.color}50`,
                }}
              >
                <div className="flex items-center justify-end gap-3 mb-2">
                  <h3 className="text-base font-bold tracking-tight" style={{ color: node.color }}>{node.title}</h3>
                  <MapPin className="w-3.5 h-3.5" style={{ color: node.color }} />
                </div>
                <p className="text-[11px] font-bold text-white mb-2 uppercase tracking-wider">{node.location}</p>
                <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2">{node.desc}</p>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full" style={{ backgroundColor: node.color, boxShadow: `0 0 15px ${node.color}` }} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden relative px-6 md:px-12">
          <div className="absolute left-10 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />
          <div className="space-y-10 relative z-10">
            {allNodes.map((node, index) => {
              const isRight = index % 2 !== 0;
              return (
                <div key={`${node.id}-${index}`} className={`flex flex-col md:flex-row items-start md:items-center w-full ${isRight ? "md:flex-row-reverse" : ""}`}>
                  <div className={`w-full pl-12 md:pl-0 md:w-[46%]`}>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border-l-4 relative" style={{ borderLeftColor: node.color }}>
                      <div className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full hidden md:block ${isRight ? "-left-[8.69%] -translate-x-1/2" : "-right-[8.69%] translate-x-1/2"}`} style={{ backgroundColor: node.color, boxShadow: `0 0 15px ${node.color}` }} />
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
