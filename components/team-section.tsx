"use client"

import { useEffect, useRef, useState } from "react"
import { Linkedin, Mail, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const teamMembers = [
  {
    id: 1,
    name: "James Chen",
    role: "Chief Executive Officer",
    bio: "25+ years in textile manufacturing with expertise in global supply chain management and strategic partnerships.",
    location: "Hong Kong",
    linkedin: "#",
    email: "james@matrixapparels.com",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Sarah Rahman",
    role: "Chief Operations Officer",
    bio: "Former VP at leading apparel manufacturer with deep expertise in lean manufacturing and quality systems.",
    location: "Dhaka",
    linkedin: "#",
    email: "sarah@matrixapparels.com",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "David Liu",
    role: "Head of Sourcing",
    bio: "15+ years managing textile sourcing across Asia with focus on sustainable and ethical supply chains.",
    location: "Shanghai",
    linkedin: "#",
    email: "david@matrixapparels.com",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Priya Fernando",
    role: "Design Director",
    bio: "Award-winning designer with experience at top European fashion houses, leading our in-house design team.",
    location: "Colombo",
    linkedin: "#",
    email: "priya@matrixapparels.com",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Michael Wong",
    role: "Head of Quality",
    bio: "Expert in international compliance standards with certifications from WRAP, BSCI, and OEKO-TEX.",
    location: "Shaoxing",
    linkedin: "#",
    email: "michael@matrixapparels.com",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 6,
    name: "Emma Taylor",
    role: "Business Development",
    bio: "10+ years building relationships with global retail brands across EU, UK, and North American markets.",
    location: "London",
    linkedin: "#",
    email: "emma@matrixapparels.com",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 7,
    name: "Raj Patel",
    role: "Finance Director",
    bio: "20+ years in corporate finance with expertise in international trade and manufacturing investments.",
    location: "Mumbai",
    linkedin: "#",
    email: "raj@matrixapparels.com",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 8,
    name: "Nina Schmidt",
    role: "Sustainability Lead",
    bio: "Expert in sustainable textile practices with focus on eco-friendly materials and ethical manufacturing.",
    location: "Berlin",
    linkedin: "#",
    email: "nina@matrixapparels.com",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 9,
    name: "Robert Kim",
    role: "Technology Director",
    bio: "Leading digital transformation initiatives across manufacturing operations with AI and automation.",
    location: "Seoul",
    linkedin: "#",
    email: "robert@matrixapparels.com",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 10,
    name: "Lisa Anderson",
    role: "HR Director",
    bio: "Building world-class teams with focus on talent development and organizational excellence.",
    location: "New York",
    linkedin: "#",
    email: "lisa@matrixapparels.com",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face",
  },
]

export function TeamSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null)
  const [showTeamModal, setShowTeamModal] = useState(false)
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

  return (
    <section ref={sectionRef} className="py-10 lg:py-14 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDJ2LTJoMzR6bTAtNHYySDJ2LTJoMzR6bTAtNHYySDJ2LTJoMzR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Compact Horizontal Layout */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Left: Title and Link */}
          <div
            className={`flex-shrink-0 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
              Meet The <span className="text-sky-400">Team</span>
            </h2>
            <button
              onClick={() => setShowTeamModal(true)}
              className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 text-sm font-medium underline underline-offset-4 transition-colors group"
            >
              More information on the core team
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right: Team Photos Grid */}
          <div
            className={`flex-1 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="grid grid-cols-5 gap-3 md:gap-4 max-w-2xl ml-auto">
              {teamMembers.slice(0, 10).map((member, index) => (
                <button
                  key={member.id}
                  onClick={() => setSelectedMember(member)}
                  className={`relative group transition-all duration-500 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                  style={{ transitionDelay: `${300 + index * 50}ms` }}
                  title={`${member.name} - ${member.role}`}
                >
                  <div className="relative w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden ring-2 ring-sky-500/70 ring-offset-2 ring-offset-slate-800 group-hover:ring-sky-400 group-hover:ring-4 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-black/30">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Individual Team Member Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl max-w-md w-full p-6 lg:p-8 animate-in zoom-in-95 duration-200 relative border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Avatar */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-sky-500 ring-offset-2 ring-offset-slate-800">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{selectedMember.name}</h3>
                <p className="text-sky-400 font-medium text-sm">{selectedMember.role}</p>
                <p className="text-slate-400 text-xs">{selectedMember.location}</p>
              </div>
            </div>

            {/* Bio */}
            <p className="text-slate-300 leading-relaxed mb-6 text-sm">{selectedMember.bio}</p>

            {/* Actions */}
            <div className="flex gap-3">
              <Button className="flex-1 bg-sky-600 hover:bg-sky-500 text-white gap-2 text-sm">
                <Mail className="w-4 h-4" />
                Contact
              </Button>
              <Button variant="outline" className="flex-1 border-white/20 text-white hover:bg-white/10 gap-2 text-sm">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Full Team Modal */}
      {showTeamModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setShowTeamModal(false)}
        >
          <div
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto p-6 lg:p-8 animate-in zoom-in-95 duration-200 relative border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowTeamModal(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-colors z-10"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-2xl font-bold text-white mb-6">Our <span className="text-sky-400">Core Team</span></h3>

            {/* Team Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-sky-500/10 border border-white/10 hover:border-sky-500/30 transition-colors cursor-pointer group"
                  onClick={() => {
                    setShowTeamModal(false)
                    setSelectedMember(member)
                  }}
                >
                  <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-sky-500/50 flex-shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-white text-sm truncate group-hover:text-sky-400 transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-xs text-slate-400 truncate">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
