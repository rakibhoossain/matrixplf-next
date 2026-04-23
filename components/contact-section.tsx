"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react"
import { ConnectUs } from "./connect-us"
const offices = [
  {
    city: "Hong Kong",
    type: "Headquarters",
    address: "Suite 1205, Tower 2, Lippo Centre, 89 Queensway, Admiralty",
    phone: "+852 2123 4567",
    email: "hq@monalisa.com",
  },
  {
    city: "Dhaka",
    type: "Operations Center",
    address: "House 45, Road 12, Block C, Banani, Dhaka 1213",
    phone: "+880 2 8817 5678",
    email: "dhaka@monalisa.com",
  },
  {
    city: "Sri-Lanka",
    type: "Sourcing Hub",
    address: "No. 168, Textile Industry Zone, Keqiao District, Shaoxing",
    phone: "+86 575 8123 4567",
    email: "shaoxing@monalisa.com",
  },
  {
    city: "Shaoxing",
    type: "Fabric Mill",
    address: "No. 168, Textile Industry Zone, Keqiao District, Shaoxing",
    phone: "+86 575 8123 4567",
    email: "shaoxing@monalisa.com",
  },
]

const experts = [
  {
    name: "Shohel",
    title: "Managing Director",
    img: "/assets/bosses/shohel.png"
  },
  {
    name: "Tina Cocej",
    title: "Director",
    img: "/assets/bosses/tina.png"
  },
  {
    name: "Timo Karanko",
    title: "Buying Director",
    img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=300&auto=format&fit=crop"
  }
]

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <section ref={sectionRef} id="contact" className="py-20 lg:py-28 bg-[#101828] relative overflow-hidden font-sans">

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-5 py-2 bg-transparent rounded-full border border-slate-500 mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <Mail className="w-5 h-5 text-white" />
            <span className="text-white text-sm font-semibold">Get in Touch</span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Ready to <span className="text-[#38bdf8]">Partner?</span>
          </h2>

          <p
            className={`text-base text-slate-300 font-medium max-w-xl mx-auto transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Looking for a manufacturing partner? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-8 lg:gap-10 max-w-6xl mx-auto mb-20">

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
          >
            <div className="bg-[#1a2333] rounded-2xl p-8 border border-slate-800 h-full">
              <h3 className="text-xl font-bold text-white mb-1">Send us a message</h3>
              <p className="text-slate-400 text-sm mb-6">We&apos;ll get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-2">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 h-11 bg-transparent border border-slate-600 rounded-lg text-white placeholder:text-slate-500 focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 h-11 bg-transparent border border-slate-600 rounded-lg text-white placeholder:text-slate-500 focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-200 mb-2">Company</label>
                  <input
                    type="text"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 h-11 bg-transparent border border-slate-600 rounded-lg text-white placeholder:text-slate-500 focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-200 mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-transparent border border-slate-600 text-white placeholder:text-slate-500 rounded-lg focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] outline-none resize-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1ea1d7] hover:bg-[#1b91c1] text-white h-12 text-sm font-bold rounded-lg flex items-center justify-center gap-2 transition-colors mt-2"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Office Locations & Info */}
          <div
            className={`space-y-4 transition-all duration-1000 delay-500 flex flex-col justify-between ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
          >
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Our Offices</h3>

              <div className="space-y-4">
                {offices.map((office, index) => (
                  <div
                    key={office.city}
                    className="bg-transparent rounded-xl p-5 border border-slate-700 hover:border-slate-500 transition-all duration-300 flex items-center gap-4"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-10 h-10 border border-slate-600 rounded-md flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-[#38bdf8]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-white text-sm">{office.city}</h4>
                        <span className="text-slate-400 text-xs font-semibold">{office.type}</span>
                      </div>
                      <p className="text-slate-400 text-xs mb-1.5 truncate">{office.address}</p>
                      <div className="flex flex-wrap gap-4 text-[11px] font-semibold">
                        <a href={`tel:${office.phone}`} className="flex items-center gap-1.5 text-slate-500 hover:text-white transition-colors">
                          <Phone className="w-3 h-3" /> {office.phone}
                        </a>
                        <a href={`mailto:${office.email}`} className="flex items-center gap-1.5 text-slate-500 hover:text-white transition-colors">
                          <Mail className="w-3 h-3" /> {office.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business hours + Schedule call row */}

          </div>

        </div>

      </div>
    </section>
  )
}
