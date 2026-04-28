"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Download } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { ProfileDownloadModal } from "./ProfileDownloadModal"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

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
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header className="sticky-header">
        <div className="container mx-auto px-6 lg:px-12">
          <nav className="flex items-center justify-between">
            {/* Logo - MATRIX PLATFROM with underline */}
            <Link href="/" className="group flex items-center gap-3">
              <img
                src="/Matrix-Platform-Logo-2.png"
                alt="Logo"
                className="w-[300px] sm:w-[300px] lg:w-[300px] h-auto transition-all duration-300 object-contain max-h-12 md:max-h-14"
              />
            </Link>

            {/* Desktop Navigation - Glass Pill */}
            <div className={cn(
              "hidden xl:flex items-center gap-1 transition-all duration-1000",
              isScrolled ? "" : "rounded-full px-2 py-1.5 bg-white/50 backdrop-blur-md shadow-lg"
            )}>
              <NavigationMenu>
                <NavigationMenuList>
                  {navItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <NavigationMenuItem key={item.label}>
                        <Link href={item.href} legacyBehavior passHref>
                          <NavigationMenuLink
                            active={isActive}
                            className={cn(buttonVariants({
                              variant: "ghost",
                              size: "sm",
                              className: "rounded-full transition-all duration-1000"
                            }),
                              isScrolled
                                ? "text-background hover:text-sky-500 hover:bg-white/50"
                                : "text-slate-900 hover:text-sky-400 hover:bg-white/10",
                              isActive && (isScrolled ? "text-sky-400 bg-white/10" : "text-sky-500 bg-white/50")
                            )}
                          >
                            {item.label}
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    )
                  })}
                </NavigationMenuList>
              </NavigationMenu>

              <Button
                size="sm"
                onClick={() => setIsProfileModalOpen(true)}
                variant={"matrix"}
                className="rounded-full"
              >
                <Download className="w-4 h-4" />
                Download Profile
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 text-white transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>

          {/* Mobile Menu */}
          <div
            className={cn(
              "lg:hidden overflow-hidden transition-all duration-500",
              isMobileMenuOpen ? "max-h-[500px] opacity-100 mt-6" : "max-h-0 opacity-0"
            )}
          >
            <div className="backdrop-blur-md rounded-2xl shadow-xl p-6 space-y-2 border border-white/10 bg-[#0d1420]/95">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "block font-medium py-3 px-3 rounded-lg transition-colors min-h-[44px]",
                      isActive ? "text-sky-400 bg-white/5" : "text-white hover:text-sky-400 hover:bg-white/5"
                    )}
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
                variant={"matrix"}
                className="w-full"
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
