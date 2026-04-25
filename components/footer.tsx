"use client"

import Link from "next/link"
import { Download, Linkedin, Twitter, Instagram, Youtube, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = {
  company: [
    { label: "Who We Are", href: "/who-we-are" },
    { label: "What We Do", href: "/what-we-do" },
    { label: "Brand", href: "/brands" },
    { label: "Products", href: "/product" },

  ],
  services: [
    { label: "Manufacturing", href: "what-we-do" },
    { label: "Sourcing", href: "#sourcing" },
    { label: "Design", href: "#design" },
    { label: "Logistics", href: "#logistics" },
  ],
  resources: [
    { label: "Sustainability", href: "/sustainability" },
    { label: "Certifications", href: "#certifications" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Download Profile", href: "#download" },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-zinc-950 text-white border-t border-white/5">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-10 lg:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="group">
              <img src="/Matrix-Platform-Logo.png" alt="Logo" loading="lazy" className="h-20 w-auto object-contain" />
            </Link>

            <p className="text-slate-400 leading-relaxed mb-8 max-w-sm mt-4">
              From fabric to finished product. Three countries, one integrated supply chain
              bridging China&apos;s textile power with South Asia&apos;s manufacturing excellence.
            </p>

            <Button
              variant="outline"
              className="border-white/20 text-white bg-white/5 hover:bg-white/10 gap-2 min-h-[48px] px-6"
            >
              <Download className="w-4 h-4" />
              Download Company Profile
            </Button>
          </div>

          {/* Links Columns */}
          <div className="mt-8 lg:mt-0">
            <h4 className="font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-sky-400 transition-colors py-2 min-h-[40px] inline-block w-full"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 lg:mt-0">
            <h4 className="font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-sky-400 transition-colors py-2 min-h-[40px] inline-block w-full"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 lg:mt-0">
            <h4 className="font-semibold text-white mb-6">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-sky-400 transition-colors py-2 min-h-[40px] inline-block w-full"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-slate-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Matrix Platform. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-sky-600 hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors group"
            >
              <span className="text-sm">Back to top</span>
              <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-sky-600 transition-colors">
                <ArrowUp className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
