import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { upsc } from "@/lib/data"

export default function WhatWeDoPage() {
    return (
        <main className="min-h-screen bg-[#0d1420] text-white font-sans flex flex-col overflow-x-hidden">
            <Header />
            {/* Hero Section */}
            <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero/what-we-do-hero.png"
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
                {upsc.map((service, index) => {
                    const isEven = index % 2 === 0;
                    // Split title for dual-color effect
                    const titleWords = service.title.split(' ');
                    const firstPart = titleWords.slice(0, titleWords.length - 1).join(' ');
                    const lastPart = titleWords[titleWords.length - 1];

                    return (
                        <section
                            key={service.title}
                            id={service.title.toLowerCase().replace(/\s+/g, '-')}
                            className={`w-full bg-[#1a1d21] py-4 lg:py-8 border-b-[18px] border-white ${index === upsc.length - 1 ? 'border-b-0' : ''}`}
                        >
                            <div className="container mx-auto">
                                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between gap-12 lg:gap-20`}>
                                    <div className={`w-full md:w-1/2 space-y-6 ${!isEven ? 'flex flex-col items-start md:items-end text-left md:text-right' : ''}`}>
                                        <div className="inline-block bg-[#4cb5e4] text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                                            {isEven ? `● ${service.subtitle}` : `${service.subtitle} ●`}
                                        </div>
                                        <h3 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
                                            {isEven ? (
                                                <>
                                                    {firstPart}<br />
                                                    <span className="text-[#4cb5e4]">{lastPart}</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span className="text-[#4cb5e4]">{firstPart}</span><br />
                                                    {lastPart}
                                                </>
                                            )}
                                        </h3>
                                        <p className={`text-lg md:text-xl text-gray-300 leading-relaxed max-w-md ${!isEven ? 'text-left md:text-right' : ''}`}>
                                            {service.description}
                                        </p>
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover transition-transform duration-700 hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    );
                })}
            </div>
            <Footer />
        </main>
    )
}