import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Laptop, Cloud, Shield, Database, LineChart, Code, Globe, Server } from 'lucide-react'

const coreServices = [
  {
    number: "01",
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Custom AI solutions, ML model development, and intelligent automation that transform raw data into actionable business intelligence.",
    capabilities: ["Process automation", "AI-powered decision support", "Machine learning models", "Natural language processing"],
  },
  {
    number: "02",
    icon: Laptop,
    title: "Full-Stack Development",
    description: "End-to-end software development services — from responsive frontends to robust backend architectures built for scale.",
    capabilities: ["Web & mobile applications", "API development", "Microservices architecture", "Database design"],
  },
  {
    number: "03",
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description: "Scalable cloud architecture design, seamless migrations, and managed services that keep your systems running at peak performance.",
    capabilities: ["Cloud architecture design", "Migration services", "CI/CD pipelines", "Infrastructure monitoring"],
  },
  {
    number: "04",
    icon: Globe,
    title: "Digital Solutions",
    description: "Comprehensive digital transformation services that modernize operations and create meaningful online presence for your organization.",
    capabilities: ["Digital strategy", "Social media solutions", "E-commerce platforms", "Content management"],
  },
  {
    number: "05",
    icon: Shield,
    title: "Cybersecurity",
    description: "Enterprise-grade security solutions that protect your data, infrastructure, and reputation from evolving threats.",
    capabilities: ["Security audits", "Threat detection", "Compliance management", "Data protection"],
  },
  {
    number: "06",
    icon: LineChart,
    title: "Data Analytics",
    description: "Transform your data into actionable insights with advanced visualization, predictive analytics, and custom reporting solutions.",
    capabilities: ["Advanced visualization", "Predictive analytics", "Custom reporting", "Business intelligence"],
  },
  {
    number: "07",
    icon: Server,
    title: "IT Consultancy",
    description: "Strategic technology consulting for government and enterprise clients. We are the lead consultants for the ICTA-KDEAP project, providing expert guidance on digital government infrastructure and e-services modernization across Kenya.",
    capabilities: ["ICTA-KDEAP Consultancy", "Digital government strategy", "Enterprise architecture", "Technology advisory"],
  },
]

const products = [
  { title: "OPENCHS", description: "Child helpline system with configurable workflows and secure case management.", category: "Child Protection" },
  { title: "Case Management", description: "Centralized legal case management with detailed history and professional profiling.", category: "Legal" },
  { title: "CRM for SACCOS", description: "Member management, interaction tracking, and campaign optimization platform.", category: "Finance" },
]

export default function Services() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 bg-mesh">

        {/* Hero */}
        <header className="max-w-7xl mx-auto px-6 pt-16 md:pt-28 pb-20 md:pb-32">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">What We Do</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-navy leading-[0.9]">
              Services<span className="text-navy/40">.</span>
            </h1>
            <p className="mt-8 text-lg text-gray-500 max-w-xl leading-relaxed">
              Comprehensive IT solutions tailored to your business needs. End-to-end technology powered by expert teams across East Africa.
            </p>
          </div>
        </header>

        {/* Core Services — Editorial List */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-28">
          <div className="space-y-0">
            {coreServices.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={service.number} className="group border-t border-navy/10 py-12 md:py-16">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-start`}>
                    {/* Left: Number + Icon + Title */}
                    <div className="w-full lg:w-2/5">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-base text-navy/30 font-mono">{service.number}</span>
                        <div className="h-[1px] w-12 bg-navy/10"></div>
                      </div>
                      <div className="flex items-center gap-4 mb-4">
                        <Icon className="h-8 w-8 text-navy" />
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-navy">{service.title}</h2>
                      </div>
                      <p className="text-gray-500 leading-relaxed">{service.description}</p>
                    </div>

                    {/* Right: Capabilities */}
                    <div className="w-full lg:w-3/5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-navy/5">
                        {service.capabilities.map((cap) => (
                          <div key={cap} className="bg-white p-6 group/cap hover:bg-navy transition-all duration-500">
                            <p className="text-base font-medium text-navy group-hover/cap:text-white transition-colors duration-500">{cap}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Products Section */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-28">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Our Products</span>
              <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy">Software Products</h3>
            </div>
            <Link href="/projects" className="text-base text-navy/50 hover:text-navy transition-colors flex items-center gap-1">
              View all projects <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-navy/5">
            {products.map((product) => (
              <div key={product.title} className="bg-white p-10 group hover:bg-navy transition-all duration-500">
                <div className="mb-6 flex items-center gap-4">
                  <span className="text-sm uppercase tracking-widest text-navy/60 group-hover:text-white/60 font-medium transition-colors duration-500">{product.category}</span>
                  <div className="h-[1px] w-8 bg-navy/10 group-hover:bg-white/10 transition-colors duration-500"></div>
                </div>
                <h4 className="text-xl font-bold text-navy group-hover:text-white mb-3 transition-colors duration-500">{product.title}</h4>
                <p className="text-gray-500 group-hover:text-gray-300 text-base leading-relaxed transition-colors duration-500">{product.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-32">
          <div className="bg-mesh-navy p-12 md:p-20 lg:p-32 rounded-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white leading-none mb-8">
                Let's build something extraordinary.
              </h2>
              <p className="text-gray-300 text-lg mb-10 max-w-lg">
                From AI-powered automation to full-stack development — we have the expertise to bring your vision to life.
              </p>
              <Link href="/contact">
                <Button className="bg-white text-navy hover:bg-gray-100 rounded-full text-base py-6 px-10 font-bold">
                  Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          </div>
        </section>

      </main>
    </div>
  )
}
