import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from 'lucide-react'

const countries = [
  {
    name: "Kenya",
    status: "Active",
    description: "National child helpline integration with multi-agency referral coordination.",
  },
  {
    name: "Uganda",
    status: "Active",
    description: "GIZ-funded Labor & Immigrant Complaints System with cross-border case tracking.",
  },
  {
    name: "Tanzania",
    status: "Active",
    description: "Social welfare case management across districts with national reporting.",
  },
  {
    name: "Lesotho",
    status: "Active",
    description: "Child protection services with integrated helpline and case management.",
  },
  {
    name: "Somalia",
    status: "Active",
    description: "Federal protection systems with GBV response coordination and partner integration.",
  },
]

export default function Countries() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 bg-mesh">

        {/* Hero */}
        <header className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-16 md:pt-28 pb-20 md:pb-32">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Global Presence</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-navy leading-[0.9]">
              Where We<br />Work<span className="text-navy/40">.</span>
            </h1>
            <p className="mt-8 text-lg text-gray-500 max-w-xl leading-relaxed">
              OpenCHS is proven in multiple African contexts and designed for multi-country deployments and cross-border protection workflows.
            </p>
          </div>
        </header>

        {/* Active Deployments */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-28">
          <div className="mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Active Deployments</span>
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy">Countries with Live Systems</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-navy/5">
            {countries.map((country) => (
              <div key={country.name} className="bg-white p-10 group hover:bg-navy transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="h-6 w-6 text-navy group-hover:text-white transition-colors duration-500" />
                  <h4 className="text-2xl font-extrabold text-navy group-hover:text-white tracking-tight transition-colors duration-500">{country.name}</h4>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                  <span className="text-sm font-medium text-emerald-600 group-hover:text-emerald-400 transition-colors duration-500">{country.status}</span>
                </div>
                <p className="text-gray-500 group-hover:text-gray-300 text-base leading-relaxed transition-colors duration-500">{country.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Expanding to New Regions CTA */}
        <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-32">
          <div className="bg-mesh-navy p-12 md:p-20 lg:p-32 rounded-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs uppercase tracking-[0.3em] text-white/40 font-medium mb-6 block">Expanding to New Regions</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white leading-none mb-8">
                Ready to scale globally<span className="text-white/40">.</span>
              </h2>
              <p className="text-gray-300 text-lg mb-10 max-w-lg">
                With proven deployments across Africa, we're ready to scale OpenCHS to additional regions. Our 3-month rapid rollout model means you can have a live system quickly.
              </p>
              <Link href="/contact?demo=true">
                <Button className="bg-white text-navy hover:bg-gray-100 rounded-full text-base py-6 px-10 font-bold">
                  Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
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
