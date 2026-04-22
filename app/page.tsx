import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { FabricMillSection } from "@/components/fabric-mill-section"
import { ManufacturingSection } from "@/components/manufacturing-section"
import { USPCardsSection } from "@/components/usp-cards-section"
import { ProductsSection } from "@/components/products-section"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"
import { GlobalNetworkSection } from "@/components/global-network-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <StatsSection />
      <FabricMillSection />
      <ManufacturingSection />
      <USPCardsSection />
      <ProductsSection />
      <Footer />
    </main>
  )
}
