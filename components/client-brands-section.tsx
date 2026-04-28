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
    { name: "CAT", logo: "/assets/client-brand/CAT.jpg" },
    { name: "Dollar Store", logo: "/assets/client-brand/Doller-Store.jpg" },
    { name: "Euro", logo: "/assets/client-brand/Euro.jpg" },
    { name: "J-Brand", logo: "/assets/client-brand/J-brand.jpg" },
    { name: "Lelosi", logo: "/assets/client-brand/Lelosi.jpg" },
    { name: "New", logo: "/assets/client-brand/New.jpg" },
    { name: "RAGNO", logo: "/assets/client-brand/RAGNO.jpg" },
    { name: "Amante", logo: "/assets/client-brand/amante.jpg" },
    { name: "Boux Avenue", logo: "/assets/client-brand/boux.jpg" },
    { name: "Outpost", logo: "/assets/client-brand/outpost.jpg" },
    { name: "Primark", logo: "/assets/client-brand/p.jpg" },
    { name: "Tookmani", logo: "/assets/client-brand/tookmani.jpg" },
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
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-500 rounded-sm"
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
