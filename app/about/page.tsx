import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Heart, ShieldCheck, GraduationCap } from 'lucide-react'

const stats = [
  { value: "10+", label: "Countries Deployments" },
  { value: "3mo", label: "Rapid Rollout" },
  { value: "30K+", label: "Monthly Contacts" },
]

const values = [
  {
    icon: Code2,
    title: "Open Source",
    description: "Built on open-source principles for transparency, adaptability, and sustainability.",
  },
  {
    icon: Heart,
    title: "Survivor-Centered",
    description: "Every design decision prioritizes the safety, dignity, and wellbeing of survivors.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible Tech",
    description: "Privacy-by-design with ethical AI that augments, never replaces, human judgment.",
  },
  {
    icon: GraduationCap,
    title: "Capacity Building",
    description: "We transfer knowledge and skills to ensure local ownership and long-term sustainability.",
  },
]

export default function About() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 bg-mesh">

        {/* Hero */}
        <header className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-16 md:pt-28 pb-20 md:pb-32">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">About Us</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-navy leading-[0.9]">
              About BITZ IT<br />Consulting<span className="text-navy/40">.</span>
            </h1>
            <p className="mt-8 text-lg text-gray-500 max-w-xl leading-relaxed">
              A responsible technology company building digital public infrastructure for governments, UN agencies, and development partners.
            </p>
          </div>
        </header>

        {/* Building Digital Infrastructure */}
        <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-navy/10"></div>

            <div className="pr-0 md:pr-16">
              <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-6 block font-medium">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy leading-tight">
                Building Digital Infrastructure for Social Impact
              </h2>
            </div>
            <div className="pl-0 md:pl-16 mt-8 md:mt-0">
              <p className="text-gray-500 leading-relaxed">
                BITZ IT Consulting specializes in digital public infrastructure that strengthens protection systems, helplines, and social welfare programs. Our work spans digital case management, systems integration, and capacity building across Africa and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="max-w-7xl mx-auto px-6 pb-16 md:pb-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-navy/5">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white p-10 text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-navy mb-2">{stat.value}</div>
                <p className="text-base text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-28">
          <div className="mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">What We Stand For</span>
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy">Our Values</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-navy/5">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="bg-white p-10 group hover:bg-navy transition-all duration-500">
                  <Icon className="h-8 w-8 text-navy group-hover:text-white mb-8 transition-colors duration-500" />
                  <h4 className="text-xl font-bold text-navy group-hover:text-white mb-3 transition-colors duration-500">{value.title}</h4>
                  <p className="text-gray-500 group-hover:text-gray-300 text-base leading-relaxed transition-colors duration-500">{value.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-32">
          <div className="bg-mesh-navy p-12 md:p-20 lg:p-32 rounded-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white leading-none mb-8">
                Let's Work Together<span className="text-white/40">.</span>
              </h2>
              <p className="text-gray-300 text-lg mb-10 max-w-lg">
                Whether you're building a new system or strengthening an existing one, we'd love to explore how we can support your goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact?demo=true">
                  <Button className="bg-white text-navy hover:bg-gray-100 rounded-full text-base py-6 px-10 font-bold">
                    Request Demo <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button className="bg-transparent border border-white/30 text-white hover:bg-white/10 rounded-full text-base py-6 px-10 font-bold">
                    View Our Work <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          </div>
        </section>

      </main>
    </div>
  )
}
