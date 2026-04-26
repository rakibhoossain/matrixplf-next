import Image from "next/image"
import Link from "next/link"
import { Download, Factory, MapPin, Phone, Mail, ArrowRight } from "lucide-react"
import { notFound } from "next/navigation"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FactoryProfileDownload } from "@/components/FactoryProfileDownload"
import factoriesData from "@/lib/factories.json"

interface FactoryPageProps {
    params: {
        slug: string
    }
}

export default async function FactoryPage({ params }: FactoryPageProps) {
    const { slug } = await params;
    const factory = (factoriesData as any)[slug];

    // If factory not found, return Next.js 404
    if (!factory) {
        notFound();
    }

    const activeVideo = factory.bannerVideos?.find((v: any) => v.status === "active")?.video;
    const activeImage = factory.bannerImages?.find((img: any) => img.status === "active")?.image;

    return (
        <main className="min-h-screen bg-[#111823] font-sans flex flex-col overflow-x-hidden text-gray-200">

            <Header />
            {/* Hero Section */}
            <section className="relative w-full h-[600px] min-h-[560px] flex flex-col justify-end">
                {/* Background Media */}
                <div className="absolute inset-0 z-0">
                    {activeVideo ? (
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src={activeVideo} type="video/mp4" />
                        </video>
                    ) : (
                        <Image
                            src={activeImage || "/banners/factory.webp"}
                            alt={factory.namePart1}
                            fill
                            className="object-cover"
                            priority
                        />
                    )}
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111823] via-[#111823]/60 to-transparent" />
                </div>

                {/* Hero Content */}
                <div className="container mx-auto px-6 lg:px-12 relative z-10 pb-16">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                        {/* Custom SVG Logo */}
                        <div className="w-16 h-20 md:w-20 md:h-24 flex-shrink-0">
                            <svg width="100%" height="100%" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#f27435]">
                                <circle cx="30" cy="30" r="18" stroke="currentColor" strokeWidth="4" />
                                <path d="M 30 48 L 30 80" stroke="currentColor" strokeWidth="4" />
                                <path d="M 15 65 L 45 65" stroke="currentColor" strokeWidth="4" />
                                <path d="M 15 80 L 30 48 L 45 80" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2">
                                <span className="text-[#4cb5e4]">{factory.namePart1}</span> <span className="text-white">{factory.namePart2}</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-white font-semibold mb-6">
                                {factory.location}
                            </p>
                            <FactoryProfileDownload factory={factory} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Row */}
            <section className="container mx-auto px-6 lg:px-12 -mt-6 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-[#1e2632] border border-[#2b394b] rounded-xl p-8 text-center shadow-lg transition-transform hover:-translate-y-1">
                        <div className="text-4xl lg:text-5xl font-bold text-[#4cb5e4] mb-2 tracking-tight">{factory.stats.workers}</div>
                        <div className="text-sm font-semibold tracking-wider text-[#4cb5e4] uppercase">Skilled Workers</div>
                    </div>
                    <div className="bg-[#1e2632] border border-[#2b394b] rounded-xl p-8 text-center shadow-lg transition-transform hover:-translate-y-1">
                        <div className="text-4xl lg:text-5xl font-bold text-[#4cb5e4] mb-2 tracking-tight">{factory.stats.capacity}</div>
                        <div className="text-sm font-semibold tracking-wider text-[#4cb5e4] uppercase">Pieces / Month</div>
                    </div>
                    <div className="bg-[#1e2632] border border-[#2b394b] rounded-xl p-8 text-center shadow-lg transition-transform hover:-translate-y-1">
                        <div className="text-4xl lg:text-5xl font-bold text-[#4cb5e4] mb-2 tracking-tight">{factory.stats.lines}</div>
                        <div className="text-sm font-semibold tracking-wider text-[#4cb5e4] uppercase">Production Lines</div>
                    </div>
                    <div className="bg-[#1e2632] border border-[#2b394b] rounded-xl p-8 text-center shadow-lg transition-transform hover:-translate-y-1">
                        <div className="text-4xl lg:text-5xl font-bold text-[#4cb5e4] mb-2 tracking-tight">{factory.stats.area}</div>
                        <div className="text-sm font-semibold tracking-wider text-[#4cb5e4] uppercase">Sq. Ft. Facility</div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="container mx-auto px-6 lg:px-12 py-16">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Left Column - Product Strength */}
                    <div className="lg:w-7/12 bg-[#1e2632] border border-[#2b394b] rounded-xl p-6 sm:p-8 shadow-lg">
                        <div className="flex items-start sm:items-center gap-3 mb-6">
                            <Factory className="w-8 h-8 text-[#4cb5e4]" />
                            <h2 className="text-2xl md:text-3xl font-bold text-[#4cb5e4]">Product Strength & Capacity</h2>
                        </div>

                        <div className="space-y-6 text-gray-300 leading-relaxed text-sm lg:text-base">
                            {factory.description.map((para: string, idx: number) => (
                                <p key={idx}>{para}</p>
                            ))}
                        </div>

                        {/* Key Manufacturing Strengths */}
                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-[#4cb5e4] mb-4">Key Manufacturing Strengths</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {factory.strengths.map((strength: string, idx: number) => (
                                    <div key={idx} className="bg-[#24354a] hover:bg-[#2b4059] transition-colors border border-[#3b597c] text-center text-sm font-semibold py-3 rounded-lg text-white">
                                        {strength}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Category Pills */}
                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-[#4cb5e4] mb-4">Core Product Categories</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                                {factory.categories.map((cat: string, idx: number) => (
                                    <div key={idx} className="bg-[#24354a] hover:bg-[#2b4059] transition-colors border border-[#3b597c] text-center text-sm font-semibold py-3 rounded-lg text-white">
                                        {cat}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:w-5/12 flex flex-col gap-8">

                        {/* Certifications Block */}
                        <div className="bg-[#1e2632] border border-[#2b394b] rounded-xl p-6 sm:p-8 shadow-lg flex-1">
                            <h2 className="text-2xl font-bold text-[#4cb5e4] uppercase mb-6 tracking-wide">Our Certifications</h2>

                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 items-center">
                                {(factory.certifications && factory.certifications.length > 0
                                    ? factory.certifications
                                    : [
                                        "/certifications/1.png", "/certifications/2.png", "/certifications/3.png",
                                        "/certifications/4.png", "/certifications/5.png", "/certifications/6.png",
                                        "/certifications/7.png", "/certifications/8.png", "/certifications/9.png",
                                        "/certifications/10.png"
                                    ]
                                ).map((cert: string, idx: number) => (
                                    <div key={idx} className="relative aspect-square w-full h-full bg-white rounded-lg p-3 flex items-center justify-center border border-white/10 overflow-hidden hover:scale-105 transition-transform duration-300">
                                        <Image
                                            src={cert}
                                            alt={`Certification ${idx + 1}`}
                                            width={100}
                                            height={100}
                                            className="object-contain max-h-full"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Block */}
                        <div className="bg-[#1e2632] border border-[#2b394b] rounded-xl p-6 sm:p-8 shadow-lg">
                            <h2 className="text-2xl font-bold text-[#4cb5e4] uppercase mb-6 tracking-wide">Contact Us</h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-5 h-5 text-[#4cb5e4] mt-1 shrink-0" />
                                    <div>
                                        <h3 className="text-[#4cb5e4] font-semibold text-sm tracking-wider uppercase mb-1">Factory Address</h3>
                                        <p className="text-gray-300 text-sm">{factory.contact.hq}</p>
                                    </div>
                                </div>

                                {/* <div className="flex items-start gap-4">
                                    <Phone className="w-5 h-5 text-[#4cb5e4] mt-1 shrink-0" />
                                    <div>
                                        <h3 className="text-[#4cb5e4] font-semibold text-sm tracking-wider uppercase mb-1">Phone</h3>
                                        <p className="text-gray-300 text-sm">{factory.contact.phone}</p>
                                    </div>
                                </div> */}

                                <div className="flex items-start gap-4">
                                    <Mail className="w-5 h-5 text-[#4cb5e4] mt-1 shrink-0" />
                                    <div>
                                        <h3 className="text-[#4cb5e4] font-semibold text-sm tracking-wider uppercase mb-1">Email Inquiries</h3>
                                        <p className="text-gray-300 text-sm">{factory.contact.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Related Factories Section */}
            <section className="container mx-auto px-6 lg:px-12 py-20 border-t border-white/5">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="text-sky-400 text-[10px] font-bold uppercase tracking-[0.3em]">Explore More</span>
                            <div className="h-px w-12 bg-sky-500/30" />
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                            Related <span className="text-sky-500">Factories</span>
                        </h2>
                    </div>
                    <Link
                        href="/factory"
                        className="group flex items-center gap-2 text-sm font-bold text-sky-400 hover:text-white transition-colors"
                    >
                        View All Facilities
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(factoriesData)
                        .filter(([key]) => key !== slug)
                        .slice(0, 3)
                        .map(([key, f]: [string, any]) => (
                            <Link
                                key={key}
                                href={`/factory/${key}`}
                                className="group relative block overflow-hidden rounded-[2rem] bg-[#1e2632] border border-white/5 hover:border-sky-500/30 transition-all duration-500"
                            >
                                <div className="aspect-[16/10] relative overflow-hidden">
                                    <Image
                                        src={f.bannerImages?.find((img: any) => img.status === "active")?.image || "/banners/factory.webp"}
                                        alt={f.namePart1}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e2632] via-transparent to-transparent opacity-60" />

                                    <div className="absolute top-4 right-4">
                                        <div className="p-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <ArrowRight className="w-5 h-5 -rotate-45" />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8">
                                    <div className="flex items-center gap-2 text-sky-400 mb-3">
                                        <MapPin className="w-4 h-4" />
                                        <span className="text-[11px] font-bold uppercase tracking-wider">{f.location}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-sky-400 transition-colors">
                                        {f.namePart1} {f.namePart2}
                                    </h3>

                                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 text-sky-400/60">Capacity</p>
                                            <p className="text-sm font-bold text-slate-200">{f.stats.capacity}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 text-sky-400/60">Workers</p>
                                            <p className="text-sm font-bold text-slate-200">{f.stats.workers}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                </div>
            </section>
            <Footer />
        </main>
    )
}
