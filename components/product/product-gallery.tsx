"use client"

import Image from "next/image"
import { Reveal } from "@/components/Reveal"

interface FeaturedCard {
  title: string
  subtitle: string
  body: string
}

interface ProductGalleryProps {
  category: {
    name: string
    description: string
    images: string[]
    featured_cards: FeaturedCard[]
  }
}

// ── Sub-components ────────────────────────────────────────────────────────────

function FeatureCard({ title, subtitle, body }: FeaturedCard) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-10 lg:p-12 text-white flex flex-col justify-start min-h-[350px] backdrop-blur-sm">
      <h3 className="text-3xl font-bold mb-1">{title}</h3>
      <h4 className="text-3xl font-bold text-sky-400 mb-6">{subtitle}</h4>
      <div className="w-12 h-1 bg-sky-400/30 mb-8" />
      <p className="text-slate-400 leading-relaxed text-[15px]">{body}</p>
    </div>
  )
}

function ImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-black/40 group border border-white/5">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>
  )
}

// ── Main Component ────────────────────────────────────────────────────────────

export function ProductGallery({ category }: ProductGalleryProps) {
  const { images, featured_cards, name } = category

  type ColItem =
    | { type: "image"; src: string; imgIndex: number }
    | { type: "card"; card: FeaturedCard }

  // Col 1: img[0] as seed
  const col1: ColItem[] = []
  if (images[0]) col1.push({ type: "image", src: images[0], imgIndex: 0 })

  // Col 2: card[0] → img[1]
  const col2: ColItem[] = []
  if (featured_cards[0]) col2.push({ type: "card", card: featured_cards[0] })
  if (images[1]) col2.push({ type: "image", src: images[1], imgIndex: 1 })

  // Col 3: img[2] → card[1]
  const col3: ColItem[] = []
  if (images[2]) col3.push({ type: "image", src: images[2], imgIndex: 2 })
  if (featured_cards[1]) col3.push({ type: "card", card: featured_cards[1] })

  // Distribute remaining images (index 3+) round-robin; attach leftover cards after each image
  let cardIdx = 2
  for (let i = 3; i < images.length; i++) {
    const target = i % 3
    const item: ColItem = { type: "image", src: images[i], imgIndex: i }
    if (target === 0) {
      col1.push(item)
      if (featured_cards[cardIdx]) col1.push({ type: "card", card: featured_cards[cardIdx++] })
    } else if (target === 1) {
      col2.push(item)
      if (featured_cards[cardIdx]) col2.push({ type: "card", card: featured_cards[cardIdx++] })
    } else {
      col3.push(item)
      if (featured_cards[cardIdx]) col3.push({ type: "card", card: featured_cards[cardIdx++] })
    }
  }

  // Append any remaining cards to col1
  while (cardIdx < featured_cards.length) {
    col1.push({ type: "card", card: featured_cards[cardIdx++] })
  }

  // Staggered Reveal delays across all columns
  let delay = 0
  const nextDelay = () => {
    delay = Math.round((delay + 0.1) * 10) / 10
    return delay
  }

  const renderItem = (item: ColItem, key: string) => {
    const d = nextDelay()
    return item.type === "image" ? (
      <Reveal key={key} delay={d}>
        <ImageCard src={item.src} alt={`${name} ${item.imgIndex + 1}`} />
      </Reveal>
    ) : (
      <Reveal key={key} delay={d}>
        <FeatureCard {...item.card} />
      </Reveal>
    )
  }

  return (
    <section className="py-24 bg-[#0d1420]">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full mb-6 border border-white/10">
              <div className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
              <span className="text-sky-400 text-[10px] font-bold uppercase tracking-widest">
                Why Matrix
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-none">
              <span className="text-white drop-shadow-sm opacity-90">ntegrated</span>
              <span className="text-sky-500">Systems</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              We source sustainable materials and utilize a vertically integrated production platform to ensure scalable manufacturing and high-volume quality control for global retail brands.
            </p>
          </Reveal>
        </div>

        {/* Dynamic Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          <div className="space-y-8">
            {col1.map((item, i) => renderItem(item, `col1-${i}`))}
          </div>
          <div className="space-y-8">
            {col2.map((item, i) => renderItem(item, `col2-${i}`))}
          </div>
          <div className="space-y-8">
            {col3.map((item, i) => renderItem(item, `col3-${i}`))}
          </div>
        </div>

      </div>
    </section>
  )
}
