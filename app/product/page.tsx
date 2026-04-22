"use client"

import CategorySection from "@/components/CategorySection"
import { motion } from "framer-motion"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CategoryLandingPage() {
    return (
        <main className="bg-zinc-950 min-h-screen">
            <Header />
            {/* Hero Section */}
            <section className="pt-40 pb-20 md:pt-48 md:pb-28">
                <div className="container mx-auto px-6">
                    <div className="max-w-full">
                        {/* Boxed Badge */}

                        <span className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
                            Our Products
                        </span>


                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-8"
                        >
                            Fashion-led product <br />
                            <span className="text-sky-400">categories.</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground"
                        >
                            Explore our core product categories across loungewear, nightwear, innerwear & essentials, activewear, sweatwear, denim, and swimwear  developed to combine trend relevance, technical capability, and scalable production.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Main Category Section */}
            <CategorySection />

            {/* Footer Space / Credits */}
            <Footer />
        </main>
    )
}
