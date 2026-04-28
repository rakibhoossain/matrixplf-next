"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { submitLead } from "@/app/actions"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const offices = [
  {
    Name: "Matrix Platform Ltd",
    city1: "Hong Kong",
    city2: "Dhaka",
    type: "Headquarters",
    address1: "Unit 1606, 16/F Comweb Plaza12 Cheung Yue StreetLai Chi Kok, Kowloon Hong Kong",
    address2: "House 163, Lane 1, Baridhara DOHS, Dhaka, Bangladesh",
    phone1: "+386 30 796 092",
    email1: "shohel@matrixapparels.com"
  },
  {
    Name: "Matrix Design D.o.o.",
    city1: "Ljubljana,Slovenia",
    city2: "",
    type: "Headquarters",
    address1: "3000 Celje, Slovenia",
    address2: "",
    phone1: "+386 30 796 092",
    email1: "shohel@matrixapparels.com"
  },
  {
    Name: "Trinity Global enterprises (Pvt) Ltd",
    city1: "Sri Lanka",
    city2: "",
    type: "Headquarters",
    address1: "170/01, Bolgoda Gardens,Galkanuwa Road,Gorakana, Keselwaththa. Sri Lanka.",
    address2: "",
    phone1: "+94 382286287",
    email1: "shohel@matrixapparels.com"
  },
  {
    Name: "ZHEJIANG MONALISA TEXTILE CO., LTD.",
    city1: "China",
    city2: "",
    type: "Headquarters",
    address1: "Building 3, No 1423, Eastern Renmin Road,Shaoxing, Zhejiang, China",
    address2: "",
    phone1: "+386 30 796 092",
    email1: "shohel@matrixapparels.com"
  }
]

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  company: z.string().min(2, { message: "Company name is required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  })

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

  async function onSubmit(values: ContactFormValues) {
    try {
      const result = await submitLead({
        name: values.name,
        company_name: values.company,
        email: values.email,
        profile_name: "Contact Form Submission",
        note: values.message,
        file_name: "none"
      })

      if (result.success) {
        toast.success("Message sent successfully!")
        form.reset()
      } else {
        toast.error(result.error || "Failed to send message.")
      }
    } catch (err) {
      toast.error("An unexpected error occurred.")
    }
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
            className={`transition-all duration-1000 delay-300 self-start ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
          >
            <div className="bg-[#1a2333] rounded-2xl p-6 sm:p-8 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-1">Send us a message</h3>
              <p className="text-slate-400 text-sm mb-6">We&apos;ll get back to you within 24 hours.</p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="block text-xs font-bold text-slate-200 mb-2">Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              className="w-full px-4 h-11 bg-transparent border border-slate-600 rounded-lg text-white placeholder:text-slate-500 focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] outline-none transition-all"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-[10px] text-red-400" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="block text-xs font-bold text-slate-200 mb-2">Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="you@company.com"
                              className="w-full px-4 h-11 bg-transparent border border-slate-600 rounded-lg text-white placeholder:text-slate-500 focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] outline-none transition-all"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-[10px] text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-xs font-bold text-slate-200 mb-2">Company</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your company name"
                            className="w-full px-4 h-11 bg-transparent border border-slate-600 rounded-lg text-white placeholder:text-slate-500 focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] outline-none transition-all"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-[10px] text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-xs font-bold text-slate-200 mb-2">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={4}
                            placeholder="Tell us about your project..."
                            className="w-full px-4 py-3 bg-transparent border border-slate-600 text-white placeholder:text-slate-500 rounded-lg focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] outline-none resize-none transition-all"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-[10px] text-red-400" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    variant="matrix"
                    size={"lg"}
                    disabled={form.formState.isSubmitting}
                    className="w-full"
                  >
                    {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </Form>
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
                    key={office.Name}
                    className="bg-transparent rounded-xl p-5 border border-slate-700 hover:border-slate-500 transition-all duration-300 space-y-4"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 border border-slate-600 rounded-md flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4 text-[#38bdf8]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-bold text-white text-sm">{office.Name}</h4>
                          <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded border border-white/10">{office.type}</span>
                        </div>

                        {/* Location 1 */}
                        <div className="mb-4">
                          <p className="text-sky-500 text-[10px] font-bold uppercase tracking-widest mb-1">{office.city1}</p>
                          <p className="text-slate-400 text-xs leading-relaxed">{office.address1}</p>
                        </div>

                        {/* Location 2 */}
                        <div className="mb-4">
                          <p className="text-sky-500 text-[10px] font-bold uppercase tracking-widest mb-1">{office.city2}</p>
                          <p className="text-slate-400 text-xs leading-relaxed">{office.address2}</p>
                        </div>
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
