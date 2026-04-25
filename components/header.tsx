"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProfileDownloadModal } from "./ProfileDownloadModal"

const navItems = [
  { label: "Who We Are", href: "/who-we-are" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Brands", href: "/brands" },
  { label: "Products", href: "/product" },
  { label: "Contact", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      if (isProfileModalOpen) {
        setIsProfileModalOpen(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isProfileModalOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-[#0d1420]/95 backdrop-blur-md py-2 shadow-2xl"
          : "bg-transparent py-4 lg:py-6"
          }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <nav className="flex items-center justify-between">
            {/* Logo - MATRIX PLATFROM with underline */}
            <Link href="/" className="group flex items-center gap-3">
              <img
                src="/Matrix-Platform-Logo-1.png"
                alt="Logo"
                className={`w-[210px] sm:w-[260px] lg:w-[300px] h-auto transition-all duration-300 object-contain ${isScrolled ? "max-h-14 md:max-h-14" : "max-h-14"
                  }`}
              />
            </Link>

            {/* Desktop Navigation - Glass Pill */}
            <div className={`hidden lg:flex items-center gap-1 transition-all duration-300 ${isScrolled ? "" : "rounded-full px-2 py-1.5 bg-white/50 backdrop-blur-md shadow-lg"
              }`}>
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`text-sm font-medium transition-colors duration-300 px-4 py-2 rounded-full min-h-[40px] flex items-center ${isScrolled
                      ? isActive ? "text-sky-400 bg-white/10" : "text-white/90 hover:text-sky-400 hover:bg-white/10"
                      : isActive ? "text-sky-500 bg-white/50" : "text-slate-700 hover:text-sky-500 hover:bg-white/50"
                      }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
              <Button
                size="sm"
                onClick={() => setIsProfileModalOpen(true)}
                className="ml-2 gap-2 bg-sky-500 hover:bg-sky-600 text-white rounded-full px-5 py-2 text-sm font-medium min-h-[40px]"
              >
                <Download className="w-4 h-4" />
                Download Profile
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center ${isScrolled ? "text-white" : "text-slate-900"
                }`}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? "max-h-[500px] opacity-100 mt-6" : "max-h-0 opacity-0"
              }`}
          >
            <div className={`backdrop-blur-md rounded-2xl shadow-xl p-6 space-y-2 border transition-colors ${isScrolled ? "bg-slate-900/90 border-white/10" : "bg-white/90 border-slate-200"
              }`}>
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`block font-medium py-3 px-3 rounded-lg transition-colors min-h-[44px] ${isScrolled
                      ? isActive ? "text-sky-400 bg-white/5" : "text-white hover:text-sky-400 hover:bg-white/5"
                      : isActive ? "text-sky-500 bg-slate-50" : "text-slate-700 hover:text-sky-500 hover:bg-slate-50"
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              })}
              <Button
                onClick={() => {
                  setIsProfileModalOpen(true)
                  setIsMobileMenuOpen(false)
                }}
                className="w-full gap-2 bg-sky-500 hover:bg-sky-600 text-white mt-4 rounded-full min-h-[48px]"
              >
                <Download className="w-4 h-4" />
                Download Profile
              </Button>
            </div>
          </div>
        </div>
      </header>

      <ProfileDownloadModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />
    </>
  )
}
