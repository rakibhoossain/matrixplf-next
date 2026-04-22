import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { ConnectUs } from "@/components/connect-us"

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#101828]">
            <Header />
            <div className="pt-20">
                <ContactSection />
            </div>
            {/* Connect with Our Key Experts */}
            <ConnectUs />
            <Footer />
        </main>
    )
}
