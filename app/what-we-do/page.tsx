import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function WhatWeDoPage() {
    return (
        <main className="min-h-screen bg-[#0d1420] text-white font-sans flex flex-col overflow-x-hidden">
            <Header />
            {/* Hero Section */}
            <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/corporate-office.png"
                        alt="Corporate Office"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0d1420] via-black/50 to-transparent" />
                </div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full">
                    <div className="max-w-3xl">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 tracking-tight leading-tight">
                            <span className="text-[#4cb5e4]">One Group</span><br />
                            Full Vertical Capability
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 mt-6 max-w-2xl leading-relaxed">
                            From raw yarn in China to finished garments delivered DDP in Europe, Matrix controls every stage of the supply chain.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services We Provide Section */}
            <section className="w-full bg-[#f4f4f4] text-[#1a1a1a] py-24 px-6 lg:px-12">
                <div className="container mx-auto px-6 lg:px-12 space-y-32">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">
                        <span className="text-[#4cb5e4]">Services</span> We Provide
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 max-w-4xl leading-relaxed">
                        Matrix Apparels is a full-service private label custom clothing and textile goods manufacturer from concept to the final product. We provide a range of manufacturing options including CPT, CMPT, OTM, ODM, and one-stop-shop solutions to meet customers' diverse requirements.
                    </p>
                </div>
            </section>

            <div className="bg-white">
                {/* Seamless Logistics */}
                <section className="w-full bg-[#1a1d21] py-4 lg:py-8 border-b-[18px] border-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
                            <div className="w-full md:w-1/2 space-y-6">
                                <div className="inline-block bg-[#4cb5e4] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                                    ● Our Delivery
                                </div>
                                <h3 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-none">
                                    Seamless<br />
                                    <span className="text-[#4cb5e4]">Logistics</span>
                                </h3>
                                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-md">
                                    Full door-to-door delivery across EU, UK, and USA. We handle the complexity so you can focus on growth.
                                </p>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1558770147-d2a384e1ad85?q=80&w=2070&auto=format&fit=crop"
                                        alt="Fashion Design & Logistics"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Audit Ready */}
                <section className="w-full bg-[#1a1d21] py-4 lg:py-8 border-b-[18px] border-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 lg:gap-20">
                            <div className="w-full md:w-1/2 space-y-6 flex flex-col items-start md:items-end text-left md:text-right">
                                <div className="inline-block bg-[#4cb5e4] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                                    Compliance goal ●
                                </div>
                                <h3 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-none">
                                    <span className="text-[#4cb5e4]">Audit</span><br />
                                    Ready
                                </h3>
                                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-md text-left md:text-right">
                                    Compliance isn't a goal, it's our foundation. Ethical sourcing and safety standards ready from day one.
                                </p>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1542060717-d7ef84a8603d?q=80&w=2070&auto=format&fit=crop"
                                        alt="Fabric Quality Control"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Brand Owners Mindset */}
                <section className="w-full bg-[#1a1d21] py-4 lg:py-8 border-b-[18px] border-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
                            <div className="w-full md:w-1/2 space-y-6">
                                <div className="inline-block bg-[#4cb5e4] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                                    ● Our Brand
                                </div>
                                <h3 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-none">
                                    Brand Owners<br />
                                    <span className="text-[#4cb5e4]">Mindset</span>
                                </h3>
                                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-md">
                                    We think like brand owners because we are brand owners. Proven expertise through our flagship labels.
                                </p>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1556905200-279565513a2d?q=80&w=2070&auto=format&fit=crop"
                                        alt="Manufacturing Process"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Design to Reality */}
                <section className="w-full bg-[#1a1d21] py-4 lg:py-8">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 lg:gap-20">
                            <div className="w-full md:w-1/2 space-y-6 flex flex-col items-start md:items-end text-left md:text-right">
                                <div className="inline-block bg-[#4cb5e4] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                                    Our Final Product ●
                                </div>
                                <h3 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-none">
                                    <span className="text-[#4cb5e4]">Design to</span><br />
                                    Reality
                                </h3>
                                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-md text-left md:text-right">
                                    From initial mood boards to the final product. Our in-house design team bridges the gap between vision and reality.
                                </p>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
                                        alt="Warehouse Logistics"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    )
}