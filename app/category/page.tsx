"use client"

import { useRef, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Helper config for the layout math
// Uses percentages relative to the visible container width to exactly fit 3 columns (accounting for 2 gaps of 24px = 48px)
const COL_WIDTH = "w-[85%] md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] shrink-0"
const HEIGHT_TOTAL = "h-[750px]"
const HEIGHT_HALF = "h-[323px]"
const HEIGHT_FULL = "h-[710px]"

const IMAGES = {
    leggings: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    jacket: "https://images.unsplash.com/photo-1520975954732-57dd22299614?q=80&w=800&auto=format&fit=crop",
    shorts: "https://images.unsplash.com/photo-1513373516557-010df04ddfc8?q=80&w=800&auto=format&fit=crop",
    dress: "https://images.unsplash.com/photo-1515347619362-e6741160352c?q=80&w=800&auto=format&fit=crop",
    men_plaid: "https://images.unsplash.com/photo-1610384104075-e05c8cf200c3?q=80&w=800&auto=format&fit=crop"
}

export default function CategoryPage() {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false)

    // Auto-scroll loop functionality
    useEffect(() => {
        let animationFrameId: number;
        let direction = 1; // 1 for right, -1 for left

        const autoScroll = () => {
            if (scrollRef.current && !isHovered) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

                // If hit right boundary, reverse
                if (scrollLeft + clientWidth >= scrollWidth - 1) {
                    direction = -1;
                }
                // If hit left boundary, reverse
                else if (scrollLeft <= 0) {
                    direction = 1;
                }

                scrollRef.current.scrollLeft += direction * 0.75; // Adjust speed (pixels per frame)
            }
            animationFrameId = requestAnimationFrame(autoScroll);
        };

        animationFrameId = requestAnimationFrame(autoScroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isHovered]);

    // Manual burst scroll functionality
    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const firstChild = scrollRef.current.firstElementChild as HTMLElement;
            // Use precise width of first column plus the 24px gap between items
            const scrollAmount = firstChild ? firstChild.offsetWidth + 24 : 400;
            scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
        }
    }

    return (
        <main className="min-h-screen bg-[#0d1420] font-sans flex flex-col overflow-x-hidden">
            <Header />

            {/* New Added Hero Section */}
            <section className="relative w-full h-[65vh] min-h-[500px] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2000&auto=format&fit=crop"
                        alt="Apparel Store Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#0d1420]/85 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0d1420]/95 via-[#0d1420]/60 to-[#0d1420]/10" />
                </div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20">
                    <div className="max-w-2xl">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
                            <span className="text-[#38bdf8]">Fashion-led</span> <span className="text-white">product</span><br />
                            <span className="text-white">Categories.</span>
                        </h1>
                        <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-medium drop-shadow-sm max-w-xl">
                            Explore our core product direction across fashion wear, activewear, bottomwear and category-driven apparel development.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Category Carousel Board */}
            <section className="relative w-full py-20 pb-32 pl-6 lg:pl-12 flex-1 flex flex-col items-start bg-[#0d1420]">

                {/* Custom Left/Right Controls manually override */}
                <div className="absolute right-6 lg:right-12 top-8 flex items-center gap-3 z-30">
                    <button onClick={() => scroll('left')} className="w-12 h-12 flex items-center justify-center rounded-full bg-[#162133] hover:bg-[#1ea1d7] text-white transition-colors shadow-lg shadow-black/40">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button onClick={() => scroll('right')} className="w-12 h-12 flex items-center justify-center rounded-full bg-[#162133] hover:bg-[#1ea1d7] text-white transition-colors shadow-lg shadow-black/40">
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Horizontal Scroll Track - Auto Pans on Mount */}
                <div
                    ref={scrollRef}
                    onMouseEnter={() => setIsHovered(true)}     // Pause auto scroll when user engages
                    onMouseLeave={() => setIsHovered(false)}
                    onTouchStart={() => setIsHovered(true)}
                    onTouchEnd={() => setIsHovered(false)}
                    className={`flex overflow-x-auto gap-6 mt-8 hide-scrollbar ${HEIGHT_TOTAL} w-full snap-x snap-mandatory relative z-20`}
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {/* ===== COLUMN 1: Giant Card (Replaces awkward text block wrapper) ===== */}
                    <div className={`${COL_WIDTH} shrink-0 flex flex-col h-full snap-start`}>
                        <div className="group cursor-pointer">
                            <div className={`${HEIGHT_FULL} w-full overflow-hidden bg-slate-200 shadow-xl border border-white/5`}>
                                <img src={IMAGES.leggings} alt="Lounge & Nightwear" className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700" />
                            </div>
                            <h3 className="text-center text-white font-bold h-[40px] flex items-center justify-center mt-3 text-lg group-hover:text-[#38bdf8] transition-colors">
                                Lounge & Nightwear
                            </h3>
                        </div>
                    </div>

                    {/* ===== COLUMN 2: Two Fast-Stacked Math-Aligned Cards ===== */}
                    <div className={`${COL_WIDTH} shrink-0 flex flex-col gap-6 h-full snap-start`}>
                        <div className="group cursor-pointer">
                            <div className={`${HEIGHT_HALF} w-full overflow-hidden bg-slate-200 shadow-xl border border-white/5`}>
                                <img src={IMAGES.jacket} alt="Innerwear & Essentials" className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700" />
                            </div>
                            <h3 className="text-center text-white font-bold h-[40px] flex items-center justify-center mt-3 text-lg group-hover:text-[#38bdf8] transition-colors">
                                Innerwear & Essentials
                            </h3>
                        </div>
                        <div className="group cursor-pointer">
                            <div className={`${HEIGHT_HALF} w-full overflow-hidden bg-slate-200 shadow-xl border border-white/5`}>
                                <img src={IMAGES.shorts} alt="Lingerie & Intimates" className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700" />
                            </div>
                            <h3 className="text-center text-white font-bold h-[40px] flex items-center justify-center mt-3 text-lg group-hover:text-[#38bdf8] transition-colors">
                                Lingerie & Intimates
                            </h3>
                        </div>
                    </div>

                    {/* ===== COLUMN 3: Giant Card ===== */}
                    <div className={`${COL_WIDTH} shrink-0 flex flex-col h-full snap-start`}>
                        <div className="group cursor-pointer">
                            <div className={`${HEIGHT_FULL} w-full overflow-hidden bg-slate-200 shadow-xl border border-white/5`}>
                                <img src={IMAGES.dress} alt="Activewear & Sportswear" className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700" />
                            </div>
                            <h3 className="text-center text-white font-bold h-[40px] flex items-center justify-center mt-3 text-lg group-hover:text-[#38bdf8] transition-colors">
                                Activewear & Sportswear
                            </h3>
                        </div>
                    </div>

                    {/* ===== COLUMN 4: Two Stacked Cards ===== */}
                    <div className={`${COL_WIDTH} shrink-0 flex flex-col gap-6 h-full snap-start`}>
                        <div className="group cursor-pointer">
                            <div className={`${HEIGHT_HALF} w-full overflow-hidden bg-slate-200 shadow-xl border border-white/5`}>
                                <img src={IMAGES.men_plaid} alt="Casualwear" className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700" />
                            </div>
                            <h3 className="text-center text-white font-bold h-[40px] flex items-center justify-center mt-3 text-lg group-hover:text-[#38bdf8] transition-colors">
                                Casualwear
                            </h3>
                        </div>
                        <div className="group cursor-pointer">
                            <div className={`${HEIGHT_HALF} w-full overflow-hidden bg-slate-200 shadow-xl border border-white/5`}>
                                <img src={IMAGES.leggings} alt="Denim" className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700" />
                            </div>
                            <h3 className="text-center text-white font-bold h-[40px] flex items-center justify-center mt-3 text-lg group-hover:text-[#38bdf8] transition-colors">
                                Denim
                            </h3>
                        </div>
                    </div>

                    {/* ===== COLUMN 5: Two Stacked Cards ===== */}
                    <div className={`${COL_WIDTH} shrink-0 flex flex-col gap-6 h-full snap-start`}>
                        <div className="group cursor-pointer">
                            <div className={`${HEIGHT_HALF} w-full overflow-hidden bg-slate-200 shadow-xl border border-white/5`}>
                                <img src={IMAGES.shorts} alt="Swimwear" className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700" />
                            </div>
                            <h3 className="text-center text-white font-bold h-[40px] flex items-center justify-center mt-3 text-lg group-hover:text-[#38bdf8] transition-colors">
                                Swimwear
                            </h3>
                        </div>
                        <div className="group cursor-pointer">
                            <div className={`${HEIGHT_HALF} w-full overflow-hidden bg-slate-200 shadow-xl border border-white/5`}>
                                <img src={IMAGES.jacket} alt="True Knitwear" className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700" />
                            </div>
                            <h3 className="text-center text-white font-bold h-[40px] flex items-center justify-center mt-3 text-lg group-hover:text-[#38bdf8] transition-colors">
                                True Knitwear
                            </h3>
                        </div>
                    </div>

                    {/* ===== COLUMN 6: Giant Card ===== */}
                    <div className={`${COL_WIDTH} shrink-0 flex flex-col h-full snap-start pr-12`}>
                        <div className="group cursor-pointer">
                            <div className={`${HEIGHT_FULL} w-full overflow-hidden bg-slate-200 shadow-xl border border-white/5`}>
                                <img src={IMAGES.leggings} alt="KIDS" className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700" />
                            </div>
                            <h3 className="text-center text-white font-bold h-[40px] flex items-center justify-center mt-3 text-lg group-hover:text-[#38bdf8] transition-colors">
                                KIDS
                            </h3>
                        </div>
                    </div>

                </div>
            </section>

            {/* Global style to aggressively hide scrollbars while retaining scroll mechanics */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}} />

            <Footer />
        </main>
    )
}