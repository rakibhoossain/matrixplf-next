"use client"

import CategorySection from "@/components/CategorySection"
import { motion } from "framer-motion"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CategoryLandingPage() {
    return (
        <main className="bg-zinc-950 min-h-screen">
            <Header />
            {/* Main Category Section */}
            <CategorySection />

            {/* Footer Space / Credits */}
            <Footer />
        </main>
    )
}
