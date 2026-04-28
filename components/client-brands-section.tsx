import { Reveal } from "./Reveal"
import Image from "next/image"
import {
  Marquee,
  MarqueeContent,
  MarqueeEdge,
  MarqueeItem,
} from "@/components/ui/marquee";

export function ClientBrandsSection() {
  const brands = [
    { name: "Tokmanni", logo: "/assets/client-brand/TOKMANNI.jpg" },
    { name: "Huel", logo: "/assets/client-brand/Huel.jpg" },
    { name: "Pantone", logo: "/assets/client-brand/PANTONECLO.jpg" },
    { name: "LPP", logo: "/assets/client-brand/LPP.jpg" },
    { name: "Lelosi", logo: "/assets/client-brand/LIDL.jpg" },
    { name: "Puma", logo: "/assets/client-brand/PUMA.jpg" },
    { name: "New Yorker", logo: "/assets/client-brand/New-yorker.jpg" },
    { name: "Champion", logo: "/assets/client-brand/CHAMPION.jpg" },
    { name: "Everlast", logo: "/assets/client-brand/EVERLAST.jpg" },
    { name: "Liu Jo", logo: "/assets/client-brand/LIU-JO.jpg" },
    { name: "Primark", logo: "/assets/client-brand/PRIMARK.jpg" },
    { name: "Next", logo: "/assets/client-brand/NEXT.jpg" },
    { name: "Amazon", logo: "/assets/client-brand/AMAZON.jpg" },
    { name: "About You", logo: "/assets/client-brand/ABOUT-YOU.jpg" },
    { name: "Asos", logo: "/assets/client-brand/ASOS.jpg" },
    { name: "Tommy Hilfiger", logo: "/assets/client-brand/TOMMY-HILFIGER.jpg" },
    { name: "Pepe Jeans", logo: "/assets/client-brand/PEPE-JEANS.jpg" },
  ]

  return (
    <section className="w-full bg-[#0d1420] py-8 lg:py-16 border-t border-white/5 overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-12 mb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <Reveal className="flex flex-col items-start gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-white/80 text-[10px] font-bold uppercase tracking-wider">Our Partners</span>
            </div>
            <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold text-white tracking-tight">
              Trusted By <span className="text-sky-500">Leading Brands</span>
            </h2>
          </Reveal>
        </div>
      </div>

      <Marquee autoFill pauseOnHover={true} pauseOnKeyboard={true}>
        <MarqueeContent>
          {brands.map((brand) => (
            <MarqueeItem key={brand.name}>
              <div className="relative flex w-40 h-13 items-center justify-center">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain transition-all duration-500 rounded-sm"
                />
                <span className="sr-only">{brand.name}</span>
              </div>
            </MarqueeItem>
          ))}
        </MarqueeContent>
        <MarqueeEdge side="left" />
        <MarqueeEdge side="right" />
      </Marquee>
    </section>
  )
}
