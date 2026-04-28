import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhoWeAreHeroSection } from "@/components/who-we-are/hero-section"
import { WhoWeAreExcellenceSection } from "@/components/who-we-are/excellence-section"
import { WhoWeAreLegacySection } from "@/components/who-we-are/legacy-section"
import { WhoWeAreTimelineSection } from "@/components/who-we-are/timeline-section"
import { GlobalNetworkSection } from "@/components/global-network-section"
import { ConnectUs } from "@/components/connect-us"

export default function Page() {
    return (
        <main className="min-h-screen bg-background">
            <Header />
            <WhoWeAreHeroSection />
            <WhoWeAreExcellenceSection />
            <WhoWeAreLegacySection />
            <GlobalNetworkSection />
            {/* <WhoWeAreTimelineSection /> */}
            <ConnectUs />
            <Footer />
        </main>
    )
}
