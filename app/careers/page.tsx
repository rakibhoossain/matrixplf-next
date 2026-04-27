"use client"

import { useState } from "react"
import NextImage from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Briefcase, MapPin, ArrowRight, Mail, Sparkles, X, Clock, GraduationCap, Building2, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Reveal } from "@/components/Reveal"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<any>(null)
  const [applyingJob, setApplyingJob] = useState<any>(null)

  const jobs = [
    {
      title: "Senior Merchandiser — Knit",
      location: "Dhaka, Bangladesh",
      department: "Merchandising",
      type: "Full-time",
      experience: "5–8 years",
      category: "MERCHANDISING",
      description: "Lead knit programs from costing to delivery. Coordinate between buyers, fabric mills and production units to ensure on-time, on-spec output.",
      summary: "We are looking for a Senior Merchandiser to lead end-to-end knit programs for our European and US retail accounts. You will be the bridge between buyers, fabric mills and production floors.",
      responsibilities: [
        "Manage costing, sampling and bulk production for assigned knit accounts.",
        "Coordinate fabric and trim development with our Shaoxing mill and external partners.",
        "Track critical paths and drive on-time delivery across multiple production units.",
        "Negotiate prices, lead times and quality benchmarks with buyers."
      ],
      requirements: [
        "Degree in Fashion Merchandising or related field.",
        "Proven experience in knitwear manufacturing.",
        "Excellent communication in English, Bangla a plus.",
        "Experience working with major European or US retailers."
      ]
    },
    {
      title: "Production Manager",
      location: "Gazipur, Bangladesh",
      department: "Manufacturing",
      type: "Full-time",
      experience: "10+ years",
      category: "MANUFACTURING",
      description: "Own daily floor performance across cutting, sewing and finishing lines. Drive efficiency, quality and worker welfare benchmarks.",
      summary: "We need an experienced Production Manager to oversee our large-scale manufacturing operations in Gazipur. You will be responsible for meeting production targets while maintaining high quality and safety standards.",
      responsibilities: [
        "Oversee daily production schedules across all departments.",
        "Optimize floor layout and workflow for maximum efficiency.",
        "Ensure compliance with international labor and safety standards.",
        "Manage and mentor production supervisors and staff."
      ],
      requirements: [
        "Strong leadership and organizational skills.",
        "In-depth knowledge of garment production processes.",
        "Experience with lean manufacturing principles.",
        "Proven track record of meeting production KPIs."
      ]
    },
    {
      title: "Fabric Sourcing Specialist",
      location: "Shaoxing, China",
      department: "Sourcing",
      type: "Full-time",
      experience: "5–7 years",
      category: "SOURCING",
      description: "Manage knit and woven fabric development with mill partners. Negotiate price, lead time and sustainable material substitutions.",
      summary: "As a Fabric Sourcing Specialist based in Shaoxing, you will manage our critical fabric supply chain, working closely with mills to develop and source high-quality materials.",
      responsibilities: [
        "Identify and audit new fabric mill partners.",
        "Manage the development of seasonal fabric collections.",
        "Negotiate pricing and capacity with key suppliers.",
        "Monitor fabric quality and delivery performance."
      ],
      requirements: [
        "Deep understanding of textile materials and manufacturing.",
        "Fluency in Mandarin and English.",
        "Strong negotiation and relationship management skills.",
        "Knowledge of sustainable fabric trends and certifications."
      ]
    },
    {
      title: "Quality Assurance Lead",
      location: "Colombo, Sri Lanka",
      department: "Quality",
      type: "Full-time",
      experience: "8+ years",
      category: "QUALITY",
      description: "Implement AQL and inline inspection systems. Partner with production to reduce defects and improve first-pass yield.",
      summary: "We are seeking a QA Lead to maintain our reputation for excellence in Sri Lanka. You will implement and oversee robust quality control systems across our facilities.",
      responsibilities: [
        "Develop and implement standardized QC procedures.",
        "Conduct regular factory audits and pre-shipment inspections.",
        "Analyze defect trends and implement corrective actions.",
        "Train production teams on quality standards."
      ],
      requirements: [
        "Expertise in AQL standards and QC methodologies.",
        "Experience with high-end apparel brands.",
        "Excellent analytical and problem-solving skills.",
        "Strong attention to detail."
      ]
    },
    {
      title: "Trade Finance Analyst",
      location: "Hong Kong",
      department: "Finance",
      type: "Full-time",
      experience: "3–5 years",
      category: "FINANCE",
      description: "Support LC, documentary collection and working-capital flows for cross-border shipments across our manufacturing group.",
      summary: "Based in our Hong Kong office, you will handle complex trade finance transactions, ensuring smooth financial operations for our global manufacturing network.",
      responsibilities: [
        "Manage Letter of Credit (LC) documentation and processing.",
        "Coordinate with banks on trade finance facilities.",
        "Analyze working capital requirements and cash flows.",
        "Ensure compliance with international trade regulations."
      ],
      requirements: [
        "Degree in Finance, Accounting, or related field.",
        "Experience in trade finance or banking.",
        "Strong knowledge of UCP 600 and Incoterms.",
        "Proficient in financial analysis and reporting."
      ]
    },
    {
      title: "Apparel Designer — Loungewear",
      location: "Dhaka, Bangladesh",
      department: "Design",
      type: "Full-time",
      experience: "4–6 years",
      category: "DESIGN",
      description: "Develop seasonal loungewear and nightwear concepts in partnership with brand customers. Build tech packs and proto samples.",
      summary: "Join our creative team in Dhaka to design innovative loungewear collections. You will work directly with global brands to bring their creative visions to life.",
      responsibilities: [
        "Research global trends in loungewear and nightwear.",
        "Create mood boards, sketches, and technical designs.",
        "Develop comprehensive tech packs for production.",
        "Oversee the development of proto samples."
      ],
      requirements: [
        "Degree in Fashion Design.",
        "Proficiency in Adobe Creative Suite and 3D design software.",
        "Strong understanding of garment construction and fabrics.",
        "Creative mindset with a keen eye for detail."
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1420] text-white font-sans">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 overflow-hidden min-h-[50vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <NextImage
            src="/assets/pages/carrier.png"
            alt="Careers at Matrix"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1420] via-transparent to-[#0d1420]" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-sky-500/10 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-sky-500/5 blur-[100px] rounded-full -z-10" />

        <div className="container mx-auto px-6 lg:px-12 text-left relative z-10">
          <Reveal className="flex flex-col items-start gap-4 mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-lg">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </div>
              <span className="text-white text-[11px] font-bold uppercase tracking-[0.2em]">Why Matrix Platform</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Careers at <span className="text-sky-500">Matrix Platform</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2} className="max-w-3xl">
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
              Join an integrated manufacturing group bridging China, Bangladesh and Sri Lanka.
              We hire people who care about craft, accountability and the long term.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-20 bg-black/20 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <Reveal className="flex flex-col items-start gap-4">
              <span className="text-sky-400 text-[10px] font-bold uppercase tracking-wider font-mono">Open Roles</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Find your <span className="text-sky-500">next role</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="max-w-md">
              <p className="text-slate-400 text-sm md:text-right">
                Don&apos;t see your role? <a href="mailto:careers@matrixapparels.com" className="text-sky-400 hover:underline">Send your CV</a> and we&apos;ll keep it for future opportunities.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <Reveal key={index} delay={index * 0.05}>
                <div className="group h-full p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-sky-500/30 transition-all flex flex-col justify-between hover:bg-white/[0.07]">
                  <div>
                    <div className="flex gap-2 mb-6">
                      <Badge variant="outline" className="py-1 px-3 text-[10px] font-bold border-white/10 bg-white/5 text-slate-400 rounded-full">
                        {job.category}
                      </Badge>
                      <Badge variant="outline" className="py-1 px-3 text-[10px] font-bold border-white/10 bg-white/5 text-slate-400 rounded-full">
                        {job.type}
                      </Badge>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-sky-400 transition-colors">
                      {job.title}
                    </h3>

                    <div className="flex items-center gap-2 text-slate-400 mb-6 text-sm font-medium">
                      <MapPin className="w-4 h-4 text-sky-500" />
                      {job.location}
                    </div>

                    <p className="text-slate-400 leading-relaxed text-sm mb-8 line-clamp-3 font-medium">
                      {job.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 mt-auto pt-6 border-t border-white/5">
                    <Button
                      variant="outline"
                      onClick={() => setSelectedJob(job)}
                      className="flex-1 rounded-full border-white/10 bg-white/5 hover:bg-white hover:text-black font-bold h-12 transition-all"
                    >
                      View Details
                    </Button>
                    <Button
                      onClick={() => setApplyingJob(job)}
                      className="flex-1 bg-sky-500/10 hover:bg-sky-500 hover:text-white border border-sky-500/20 text-sky-400 rounded-full font-bold h-12 transition-all"
                    >
                      Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* General Application Section */}
      <section className="py-20 px-6 lg:px-12">
        <div className="container mx-auto">
          <Reveal>
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 group">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 blur-[150px] rounded-full -z-10 group-hover:bg-sky-500/15 transition-colors duration-700" />

              <div className="flex gap-8 items-center text-left">
                <div className="p-5 rounded-2xl bg-sky-500/10 border border-sky-500/20 group-hover:bg-sky-500/20 transition-colors hidden sm:flex">
                  <Sparkles className="w-8 h-8 text-sky-400" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
                    General Application
                  </h2>
                  <p className="text-slate-400 max-w-xl leading-relaxed text-sm md:text-base">
                    Don&apos;t see a suitable role? Submit your CV and we&apos;ll keep it for future opportunities across our manufacturing group.
                  </p>
                </div >
              </div>

              <Button
                onClick={() => setApplyingJob({ title: "General Application", location: "Global / Remote" })}
                className="w-full md:w-auto bg-sky-500 hover:bg-sky-600 text-white rounded-full px-4 py-4 h-auto text-lg font-bold transition-all hover:scale-105 shadow-xl shadow-sky-500/20"
              >
                Submit General CV <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Job Details Modal */}
      <Dialog open={!!selectedJob} onOpenChange={() => setSelectedJob(null)}>
        <DialogContent
          showCloseButton={false}
          className="w-[94vw] max-w-4xl bg-[#111827] border-white/10 text-white p-0 overflow-hidden rounded-[2rem] shadow-2xl outline-none"
        >
          <div className="relative flex flex-col max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors z-50"
            >
              <X className="w-5 h-5 text-slate-400" />
            </button>

            {/* Scrollable Content */}
            <div className="p-8 md:p-12 overflow-y-auto scrollbar-hide">
              {/* Header */}
              <div className="mb-10">
                <span className="text-sky-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-3 block">Job Details</span>
                <DialogTitle className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  {selectedJob?.title}
                </DialogTitle>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
                {[
                  { label: "Location", value: selectedJob?.location, icon: MapPin },
                  { label: "Department", value: selectedJob?.department, icon: Building2 },
                  { label: "Type", value: selectedJob?.type, icon: Clock },
                  { label: "Experience", value: selectedJob?.experience, icon: GraduationCap },
                ].map((info, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <info.icon className="w-3.5 h-3.5 text-sky-400" />
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">{info.label}</span>
                    </div>
                    <p className="text-xs font-semibold text-white leading-tight">{info.value}</p>
                  </div>
                ))}
              </div>

              {/* Body Content */}
              <div className="space-y-10">
                {/* Summary */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase className="w-4 h-4 text-sky-400" />
                    <h4 className="text-[10px] font-bold text-sky-400 uppercase tracking-[0.2em]">Job Summary</h4>
                  </div>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    {selectedJob?.summary}
                  </p>
                </div>

                {/* Responsibilities */}
                <div>
                  <h4 className="text-[10px] font-bold text-sky-400 uppercase tracking-[0.2em] mb-6">Key Responsibilities</h4>
                  <ul className="space-y-4">
                    {selectedJob?.responsibilities.map((item: string, i: number) => (
                      <li key={i} className="flex gap-3 items-start text-slate-300 text-sm md:text-base">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div>
                  <h4 className="text-[10px] font-bold text-sky-400 uppercase tracking-[0.2em] mb-6">Requirements</h4>
                  <ul className="space-y-4">
                    {selectedJob?.requirements.map((item: string, i: number) => (
                      <li key={i} className="flex gap-3 items-start text-slate-300 text-sm md:text-base">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-white/5 bg-black/20 flex items-center justify-end gap-4">
              <Button
                variant="outline"
                onClick={() => setSelectedJob(null)}
                className="rounded-full border-white/10 bg-white/5 hover:bg-white hover:text-black font-bold px-8 h-12 transition-all"
              >
                Close
              </Button>
              <Button
                onClick={() => {
                  setApplyingJob(selectedJob);
                  setSelectedJob(null);
                }}
                className="bg-sky-500 hover:bg-sky-600 text-white rounded-full px-8 h-12 font-bold transition-all flex items-center gap-2 group shadow-lg shadow-sky-500/20"
              >
                Apply Now <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Application Form Modal */}
      <Dialog open={!!applyingJob} onOpenChange={() => setApplyingJob(null)}>
        <DialogContent
          showCloseButton={false}
          className="bg-[#0d1420] border-white/10 text-white p-0 overflow-hidden rounded-2xl md:rounded-[2rem] outline-none shadow-2xl fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          <div className="relative h-full flex flex-col">
            <button
              onClick={() => setApplyingJob(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-2 md:p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors z-50 group"
            >
              <X className="w-4 h-4 md:w-5 md:h-5 text-slate-400 group-hover:text-white transition-colors" />
            </button>

            <div className="p-6 md:p-12 overflow-y-auto max-h-[85vh] md:max-h-[90vh] scrollbar-hide">
              <DialogHeader className="mb-8">
                <span className="text-sky-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-3">Apply For</span>
                <DialogTitle className="text-2xl md:text-3xl font-bold tracking-tight text-left mb-2">
                  {applyingJob?.title}
                </DialogTitle>
                <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                  <MapPin className="w-4 h-4 text-sky-500" />
                  {applyingJob?.location}
                </div>
              </DialogHeader>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Full Name *</Label>
                    <Input
                      placeholder="Your full name"
                      className="bg-white/5 border-white/10 rounded-xl h-12 focus:border-sky-500/50 focus:ring-sky-500/20 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email *</Label>
                    <Input
                      type="email"
                      placeholder="you@email.com"
                      className="bg-white/5 border-white/10 rounded-xl h-12 focus:border-sky-500/50 focus:ring-sky-500/20 transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Phone Number *</Label>
                    <Input
                      placeholder="+880 1XXX XXXXXX"
                      className="bg-white/5 border-white/10 rounded-xl h-12 focus:border-sky-500/50 focus:ring-sky-500/20 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Subject *</Label>
                    <Input
                      defaultValue={`Application — ${applyingJob?.title}`}
                      className="bg-white/5 border-white/10 rounded-xl h-12 focus:border-sky-500/50 focus:ring-sky-500/20 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Message (optional)</Label>
                  <Textarea
                    placeholder="Tell us briefly about your experience..."
                    className="bg-white/5 border-white/10 rounded-xl min-h-[120px] focus:border-sky-500/50 focus:ring-sky-500/20 transition-all resize-none"
                  />
                </div>

                <div className="space-y-4">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Upload CV *</Label>
                  <div className="relative group cursor-pointer">
                    <div className="p-4 rounded-xl border border-dashed border-white/20 bg-white/5 group-hover:border-sky-500/50 group-hover:bg-sky-500/5 transition-all flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20">
                          <Upload className="w-5 h-5" />
                        </div>
                        <span className="text-sm text-slate-400 group-hover:text-slate-300">PDF, DOC or DOCX up to 5MB</span>
                      </div>
                      <Button type="button" variant="outline" className="rounded-full h-9 px-4 border-white/10 bg-white/5 hover:bg-white hover:text-black font-bold text-xs transition-all">
                        Choose file
                      </Button>
                    </div>
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept=".pdf,.doc,.docx" />
                  </div>
                </div>

                <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-6">
                  <p className="text-[11px] text-slate-500 max-w-[240px]">
                    By applying you agree to our recruitment privacy policy.
                  </p>
                  <Button className="w-full md:w-auto bg-sky-500 hover:bg-sky-600 text-white rounded-full px-10 py-6 h-auto text-base font-bold transition-all hover:scale-105 shadow-xl shadow-sky-500/20">
                    Submit Application <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </main>
  )
}
