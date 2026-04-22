"use client"

import { useParams, notFound } from "next/navigation"
import { categories } from "@/lib/data"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { Reveal } from "@/components/Reveal"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGallery } from "@/components/product/product-gallery"
import { ProductCTA } from "@/components/product/product-cta"
import { RelatedCategories } from "@/components/product/related-categories"

export default function CategoryPage() {
  const params = useParams()
  const slug = params.category as string
  const category = categories.find((c) => c.slug === slug)

  if (!category) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-slate-900 pt-24 pb-12">

      <Header />
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden mb-16">
        <div className={`absolute inset-0 ${category.bgColor} opacity-20`} />
        <div className="absolute inset-0">
          <Image
            src={category.images[0]}
            alt={category.name}
            fill
            className="object-cover object-center opacity-40"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

        <div className="container mx-auto px-6 h-full flex flex-col justify-end pb-12 relative z-10">
          <Link
            href="/product"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium tracking-wider uppercase">Back to Catalog</span>
          </Link>

          <Reveal>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 uppercase tracking-tighter">
              {category.name}
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
              <div className="max-w-xl">
                <p className="text-xl text-sky-400 font-bold mb-2 uppercase tracking-widest">{category.subtitle}</p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery / Detail Section */}
      <ProductGallery category={category} />

      {/* CTA Section */}
      <ProductCTA categoryName={category.name} />

      {/* Related Categories */}
      <RelatedCategories currentCategorySlug={category.slug} />
      <Footer />
    </main>
  )
}
