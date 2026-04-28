"use client"

import NextImage from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Shield, AlertTriangle, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Reveal } from "@/components/Reveal"
import { motion } from "framer-motion"
import Link from "next/link"

export default function CodeOfConductPage() {
  const employeeConduct = [
    { id: "01", text: "Bribery or corruption." },
    { id: "02", text: "Disclosure of confidential documents or information." },
    { id: "03", text: "Misappropriation of company assets in any form — intellectual or otherwise." },
    { id: "04", text: "Falsification or manipulation of records." },
    { id: "05", text: "Engaging in commercial or financial activities in competition with the Company's business interests." },
    { id: "06", text: "Sexual harassment by any individual." },
    { id: "07", text: "Violation of sourcing standards and Zero Tolerance policies." },
    { id: "08", text: "Any act that contradicts the policies, values, and principles of MATRIX Platform Ltd." },
  ]

  const vendorConduct = [
    "Child labor in any form.",
    "Forced or bonded labor, whether overt or covert.",
    "Discrimination of any kind.",
    "Harassment, abuse, or inhumane treatment.",
    "Unauthorized subcontracting, including tier-2 operations.",
    "Failure to provide proper access to records, workers, or workplaces for compliance audits.",
    "Use of non-approved shared buildings or unsafe factory premises.",
    "Health, safety, environmental, or fire safety violations.",
    "Structural safety risks in buildings or facilities.",
    "Any unethical or unlawful business practices.",
  ]

  return (
    <main className="min-h-screen bg-[#0d1420] text-white font-sans">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 overflow-hidden min-h-[50vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <NextImage
            src="/assets/pages/code-of-condact.png"
            alt="Code of Conduct"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1420] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Background Decorative Glows */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-sky-500/10 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-sky-500/5 blur-[100px] rounded-full -z-10" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <Reveal className="flex flex-col items-start gap-4 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
              <Shield className="w-3.5 h-3.5 text-sky-400" />
              <span className="text-white/80 text-[10px] font-bold uppercase tracking-wider">Matrix Platform Ltd</span>
            </div>
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
              Code of Conduct &
              <span className="text-sky-500"> Ethical Policy</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2} className="max-w-3xl mb-16">
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              The principles, standards and zero-tolerance policies that govern how every employee, vendor,
              factory and business partner of MATRIX Platform Ltd operates — every day, across every market.
            </p>
          </Reveal>

          {/* Report a Concern Card */}
          <Reveal delay={0.4}>
            <div className="p-4 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8 group hover:border-sky-500/30 transition-colors">
              <div className="flex gap-6 items-start">
                <div className="p-4 rounded-2xl bg-sky-500/10 border border-sky-500/20 group-hover:bg-sky-500/20 transition-colors">
                  <Mail className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Report a concern</h3>
                  <p className="text-slate-400 max-w-xl leading-relaxed">
                    Any individual may report a concern against any employee or business partner
                    through our official compliance and ethics communication channel.
                  </p>
                </div>
              </div>
              <Button
                asChild
                variant="matrix"
                size="lg"
              >
                <Link href="mailto:shohel@matrixapparels.com">
                  <Mail className="w-5 h-5 mr-2" />
                  shohel@matrixapparels.com
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 01: Employees */}
      <section className="py-8 bg-black/20 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <Reveal className="sticky top-32">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-6">
                <span className="text-sky-400 text-[10px] font-bold uppercase tracking-wider font-mono">Section 01</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                Code of Conduct <br />
                <span className="text-sky-500">for Employees</span>
              </h2>
              <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
                <p>
                  Any employee found engaging in any act, behavior, or conduct that does not align with the values of
                  MATRIX Platform Ltd or violates the Employees&apos; Compliance Code shall be subject to disciplinary action.
                </p>
                <p>
                  Such actions may be reported by any individual against any employee or business partner through
                  the official compliance and ethics communication channels.
                </p>
              </div>
              <div className="mt-10 p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-sm text-slate-400 mb-2 font-medium">Chief Ethics Officer Contact:</p>
                <a href="mailto:shohel@matrixapparels.com" className="text-xl font-bold text-sky-400 hover:text-sky-300 transition-colors">
                  shohel@matrixapparels.com
                </a>
              </div>
            </Reveal>

            <div className="grid gap-4">
              {employeeConduct.map((item, index) => (
                <Reveal key={item.id} delay={index * 0.05}>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-500/30 transition-all flex gap-6 items-center group hover:bg-white/[0.07]">
                    <span className="text-lg font-mono font-bold text-sky-500/40 group-hover:text-sky-500 transition-colors">
                      {item.id}
                    </span>
                    <p className="text-slate-300 group-hover:text-white transition-colors font-medium">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: Vendor Selection */}
      <section className="py-8 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-16">
            <Reveal className="sticky top-32">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-6">
                <span className="text-sky-400 text-[10px] font-bold uppercase tracking-wider font-mono">Section 02</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                Code of Conduct for <br />
                <span className="text-sky-500">Vendor Selection</span>
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                MATRIX Platform Ltd upholds the highest standards of honesty, transparency, integrity, and fair business practices.
                The Company will only engage with vendors, factories, and business partners who comply with its
                Buyers&apos; Code of Conduct and Zero Tolerance Vendor (ZTV) Policy.
              </p>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-red-500/10 rounded-full border border-red-500/20">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-red-500 font-bold uppercase tracking-[0.2em] text-[10px]">Zero Tolerance</span>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-4">
              {vendorConduct.map((item, index) => (
                <Reveal key={index} delay={index * 0.05}>
                  <div className="h-full p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4 items-start group hover:bg-white/[0.07] hover:border-red-500/30 transition-all">
                    <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 group-hover:bg-red-500/20 transition-colors">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                    </div>
                    <p className="text-slate-300 group-hover:text-white transition-colors text-[15px] font-semibold leading-snug">
                      {item}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Footer CTA */}
      <section className="py-8 px-6 lg:px-12">
        <div className="container mx-auto">
          <Reveal>
            <div className="p-6 rounded-[3.5rem] bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden text-center group">
              {/* Background decorative glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 blur-[150px] rounded-full -z-10 group-hover:bg-sky-500/15 transition-colors duration-700" />

              <div className="inline-flex p-5 rounded-[1.5rem] bg-sky-500/10 border border-sky-500/20 mb-5">
                <CheckCircle2 className="w-10 h-10 text-sky-400" />
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-5 tracking-tight">
                Compliance is built into  how we operate.
              </h2>

              <p className="text-slate-400  max-w-2xl mx-auto mb-2 leading-relaxed">
                These standards apply across every Matrix unit and partner factory.
                To report a concern or request our full policy document, contact our Chief Ethics Officer.
              </p>

              <Button
                asChild
                variant="matrix"
                size="lg"
              >
                <a href="mailto:shohel@matrixapparels.com">
                  <Mail className="w-6 h-6 mr-2" />
                  shohel@matrixapparels.com
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
