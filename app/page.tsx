import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Database, Globe, MapPin, Mail, Phone, Users, ChevronDown } from 'lucide-react'
import { DirectionButtons } from "@/components/direction-buttons"
import { ContactButtons } from "@/components/contact-buttons"
import Image from 'next/image'

const projects = [
  {
    slug: "icta-kdeap",
    title: "ICTA-KDEAP",
    category: "IT Consultancy",
    image: "/ICTA-KDEAP.png",
  },
  {
    slug: "openchs",
    title: "OPENCHS",
    category: "Child Protection",
    image: "/projects/project1.png",
  },
  {
    slug: "case-management-legal",
    title: "Case Management",
    category: "Legal",
    image: "/projects/placeholders/case-management-legal.svg",
  },
  {
    slug: "crm-saccos",
    title: "CRM for SACCOS",
    category: "Finance",
    image: "/projects/placeholders/crm-saccos.svg",
  },
  {
    slug: "edms",
    title: "EDMS",
    category: "Document Management",
    image: "/projects/placeholders/edms.svg",
  },
  {
    slug: "contract-management",
    title: "Contract Management",
    category: "Contracts",
    image: "/projects/placeholders/contract-management.svg",
  },
]

const services = [
  { icon: Code, title: "AI & Machine Learning", description: "Advanced AI solutions and machine learning models for business automation." },
  { icon: Database, title: "Full-Stack Development", description: "Expert frontend and backend development for scalable applications." },
  { icon: Globe, title: "Digital Solutions", description: "Comprehensive digital services including social media and online presence." },
]

export default function Home() {
  const address = 'Prime Cartons, Mombasa Road, Kenya, next to Nice and Lovely (Dongpeng Building)'
  const phoneNumber = '0110952788'
  const emailAddress = 'info@bitz-itc.com'

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 bg-mesh">

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-16 md:pt-28 pb-20 md:pb-32">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-6 block font-medium">BITZ IT Consulting</span>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                <div className="lg:col-span-8">
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-navy leading-none">
                    Elevate your<br />technology<span className="text-navy/40">.</span>
                  </h1>
                </div>
                <div className="lg:col-span-4 pb-3">
                  <p className="text-lg leading-relaxed text-gray-500">
                    Since 2007, we have been engineering high-impact digital solutions across East Africa — for government, enterprise, and international organizations.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 pt-10">
                <Link href="/contact">
                  <Button className="bg-navy hover:bg-navy/90 text-white rounded-full text-base px-8 py-6 font-medium">
                    Get Started
                  </Button>
                </Link>
                <Link href="/projects" className="text-base text-navy/60 hover:text-navy flex items-center gap-2 font-medium transition-colors">
                  View Projects <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Full-width hero image */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-20 md:pb-32">
            <div className="overflow-hidden rounded-xl shadow-ios-lg">
              <Image
                src="/Gemini_Generated_Image_bejuz2bejuz2beju.png"
                alt="BITZ Team working on ERP & AI Systems"
                width={1400}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* About Us Section — Two Column with Divider */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-32">
          <h2 className="text-center text-sm uppercase tracking-[0.3em] text-gray-400 mb-3 font-medium">About Us</h2>
          <p className="text-center text-gray-300 text-base mb-16">Technology in its purest form.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative">
            {/* Vertical divider */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-navy/10"></div>

            <div className="pr-0 md:pr-12 mb-8 md:mb-0">
              <p className="text-gray-500 leading-relaxed">
                Founded in 2007 in Nairobi, BITZ IT Consulting has grown into a leading technology partner across East Africa, with a strong presence in Kenya, Uganda, Tanzania, Lesotho, and Rwanda. Our expertise spans custom software development, IT infrastructure, and digital transformation solutions.
              </p>
            </div>
            <div className="pl-0 md:pl-12">
              <p className="text-gray-500 leading-relaxed">
                We deliver impactful results for government agencies and international organizations, including UNICEF and the World Bank. As leaders in technology consulting, we continue to combine top-tier engineering with elegant design to create exceptional digital experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Services — Minimal Row */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-28">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy">Our Services</h3>
            <Link href="/services" className="text-base text-navy/50 hover:text-navy transition-colors flex items-center gap-1">
              View all <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-navy/5">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-white p-10 group hover:bg-navy transition-all duration-500">
                  <Icon className="h-8 w-8 text-navy group-hover:text-white mb-8 transition-colors duration-500" />
                  <h4 className="text-xl font-bold text-navy group-hover:text-white mb-3 transition-colors duration-500">{service.title}</h4>
                  <p className="text-gray-500 group-hover:text-gray-300 text-base leading-relaxed transition-colors duration-500">{service.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Featured Projects — Gallery Style */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-28">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
            <div>
              <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy">Projects</h3>
              <p className="text-gray-400 text-base mt-2">A selection of our recent work</p>
            </div>
            <Link href="/projects" className="text-base text-navy/50 hover:text-navy transition-colors flex items-center gap-1">
              View all <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          {/* Image Gallery Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {projects.slice(0, 3).map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <span className="text-xs uppercase tracking-widest text-white/60">{project.category}</span>
                  <h4 className="text-white font-bold text-lg">{project.title}</h4>
                </div>
              </Link>
            ))}
          </div>

          {/* Project Cards Row */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {projects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="group text-center">
                <div className="aspect-square rounded-xl bg-gray-50 overflow-hidden mb-3 border border-navy/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="text-sm font-medium text-navy">{project.title}</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">{project.category}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Client Success — Stats + Testimonial */}
        <section className="bg-mesh-navy text-white py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
              <div className="space-y-8">
                <span className="text-xs uppercase tracking-[0.3em] text-white/40 font-medium">Client Success</span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Discover the impact of our services</h2>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="border-t border-white/10 pt-6">
                    <div className="text-4xl md:text-5xl font-extrabold">75%</div>
                    <p className="text-base text-gray-400 mt-2">Increase in operational efficiency</p>
                  </div>
                  <div className="border-t border-white/10 pt-6">
                    <div className="text-4xl md:text-5xl font-extrabold">100%</div>
                    <p className="text-base text-gray-400 mt-2">Client satisfaction rate</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 p-8 md:p-10 rounded-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-white/60" />
                  </div>
                  <div>
                    <h3 className="font-bold">Client Testimonial</h3>
                    <p className="text-base text-gray-400">SAUTI — Child Helpline System, Uganda</p>
                  </div>
                </div>
                <p className="italic text-gray-300 leading-relaxed">"BITZ-itc delivered the SAUTI child helpline system that completely transformed how we handle cases. The platform streamlined our workflows from intake to resolution, giving us real-time visibility across all regions. Response times improved dramatically, and the system's reliability has been exceptional — even in areas with limited connectivity."</p>
                <div className="mt-6 text-base text-gray-500">— Tony, Uganda</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-start">
            <div className="space-y-8">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Get In Touch</span>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy">Contact Us</h2>
                <p className="text-gray-500 mt-4">Have questions or ready to start your next project?</p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-medium text-base text-navy">Address</h3>
                    <p className="text-base text-gray-500">{address}</p>
                    <DirectionButtons address={address} />
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-medium text-base text-navy">Email</h3>
                    <p className="text-base text-gray-500">{emailAddress}</p>
                    <ContactButtons email={emailAddress} phone={phoneNumber} />
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-medium text-base text-navy">Phone</h3>
                    <p className="text-base text-gray-500">{phoneNumber}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-ios">
              <h3 className="text-xl font-bold text-navy mb-1">Send us a message</h3>
              <p className="text-base text-gray-400 mb-8">We'll get back to you within 24 hours.</p>
              <div className="grid gap-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="first-name" className="text-sm font-medium text-gray-500">First name</label>
                    <input id="first-name" className="w-full p-3 text-base border border-navy/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-navy" placeholder="John" />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="last-name" className="text-sm font-medium text-gray-500">Last name</label>
                    <input id="last-name" className="w-full p-3 text-base border border-navy/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-navy" placeholder="Smith" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm font-medium text-gray-500">Email</label>
                  <input id="email" type="email" className="w-full p-3 text-base border border-navy/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-navy" placeholder="john@example.com" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="message" className="text-sm font-medium text-gray-500">Message</label>
                  <textarea id="message" className="w-full p-3 text-base border border-navy/10 rounded-xl min-h-[120px] focus:outline-none focus:ring-1 focus:ring-navy" placeholder="Tell us about your project..." />
                </div>
                <Button className="w-full bg-navy hover:bg-navy/90 text-white rounded-full text-base py-6">Send Message</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
