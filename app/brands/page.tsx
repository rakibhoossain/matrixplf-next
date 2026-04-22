import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BrandsSection } from "@/components/brands-section"

export default function BrandsPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />
            <BrandsSection />
            <Footer />
        </main>
    )
}