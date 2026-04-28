import { notFound } from "next/navigation"
import { categories } from "@/lib/data"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Reveal } from "@/components/Reveal"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGallery } from "@/components/product/product-gallery"
import { ProductCTA } from "@/components/product/product-cta"
import { RelatedCategories } from "@/components/product/related-categories"

interface CategoryPageProps {
  params: Promise<{
    category: string
  }>
}

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }))
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params
  const category = categories.find((c) => c.slug === slug)

  if (!category) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#0d1420]">

      <Header />
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-[#0d1420]">
        <div className="relative w-full">
          <Image
            src={category.bannerImage}
            alt={category.name}
            width={1920}
            height={800}
            className="w-full h-auto object-cover min-h-[400px]"
            priority
          />
          {/* Refined Overlays */}
          <div className="absolute inset-0 bg-slate-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1420] via-[#0d1420]/20 to-transparent" />
        </div>

        <div className="absolute inset-0 z-10 container mx-auto px-6 lg:px-12 h-full flex flex-col justify-end pb-20">
          <Link
            href="/product"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-all mb-8 group w-fit"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Back to Catalog</span>
          </Link>

          <Reveal>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 uppercase tracking-tighter leading-[0.9]">
              {category.name}
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="max-w-2xl">
              <p className="text-lg md:text-xl text-sky-400 font-bold mb-4 uppercase tracking-[0.2em]">{category.subtitle}</p>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed font-medium">
                {category.description}
              </p>
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
