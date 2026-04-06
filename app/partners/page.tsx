import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

const devPartners = [
  { name: "UNICEF", type: "UN Agency" },
  { name: "UNFPA", type: "UN Agency" },
  { name: "UNICEF Venture Fund", type: "Investor" },
  { name: "GIZ", type: "Development Partner" },
  { name: "World Bank", type: "Development Partner" },
]

const govPartners = [
  { name: "Kenya" },
  { name: "Uganda" },
  { name: "Tanzania" },
  { name: "Lesotho" },
  { name: "Somalia" },
]

const engagementModels = [
  { number: "01", title: "Implementation", description: "Full deployment of OpenCHS with configuration, training, and go-live support." },
  { number: "02", title: "Integration", description: "Connect OpenCHS with your existing systems, telecom infrastructure, and data sources." },
  { number: "03", title: "Capacity Building", description: "Training programs for staff, administrators, and technical teams." },
  { number: "04", title: "Maintenance & Support", description: "Ongoing technical support, updates, and system optimization." },
  { number: "05", title: "Responsible AI", description: "Ethical AI integration with human-in-the-loop principles for enhanced workflows." },
]

export default function PartnersPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 bg-mesh">

        {/* Hero */}
        <header className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-16 md:pt-28 pb-20 md:pb-32">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Partnerships</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-navy leading-[0.9]">
              Partners & Implementations<span className="text-navy/40">.</span>
            </h1>
            <p className="mt-8 text-lg text-gray-500 max-w-xl leading-relaxed">
              Working alongside UN agencies, development partners, and governments to strengthen protection systems.
            </p>
          </div>
        </header>

        {/* Development & UN Partners */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-28">
          <div className="mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Collaborators</span>
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy">Development & UN Partners</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-navy/5">
            {devPartners.map((partner) => (
              <div key={partner.name} className="bg-white p-10 group hover:bg-navy transition-all duration-500">
                <h4 className="text-xl font-bold text-navy group-hover:text-white mb-2 transition-colors duration-500">{partner.name}</h4>
                <p className="text-gray-500 group-hover:text-gray-300 text-sm font-medium uppercase tracking-wider transition-colors duration-500">{partner.type}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Government Partners */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-28">
          <div className="mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Countries</span>
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy">Government Partners</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-navy/5">
            {govPartners.map((partner) => (
              <div key={partner.name} className="bg-white p-10 group hover:bg-navy transition-all duration-500">
                <h4 className="text-xl font-bold text-navy group-hover:text-white transition-colors duration-500">{partner.name}</h4>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-gray-400 italic">
            Partner names and marks shown for attribution; usage subject to partner brand guidelines.
          </p>
        </section>

        {/* How We Partner */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-28">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Engagement Models</span>
              <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy">How We Partner</h3>
            </div>
            <p className="text-gray-500 text-base max-w-sm">Flexible engagement models tailored to your context and objectives.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-navy/5">
            {engagementModels.map((model) => (
              <div key={model.number} className="bg-white p-10 group hover:bg-navy transition-all duration-500">
                <span className="text-sm text-navy/30 group-hover:text-white/30 font-mono mb-6 block transition-colors duration-500">{model.number}</span>
                <h4 className="text-xl font-bold text-navy group-hover:text-white mb-3 transition-colors duration-500">{model.title}</h4>
                <p className="text-gray-500 group-hover:text-gray-300 text-base leading-relaxed transition-colors duration-500">{model.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-32">
          <div className="bg-mesh-navy p-12 md:p-20 lg:p-32 rounded-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white leading-none mb-8">
                Interested in Partnering?
              </h2>
              <p className="text-gray-300 text-lg mb-10 max-w-lg">
                Whether you're a government, UN agency, or NGO, we'd love to discuss how we can support your protection programs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact?demo=true">
                  <Button className="bg-white text-navy hover:bg-gray-100 rounded-full text-base py-6 px-10 font-bold">
                    Request Demo <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button className="bg-transparent border border-white/30 text-white hover:bg-white/10 rounded-full text-base py-6 px-10 font-bold">
                    Explore Case Studies <ArrowRight className="ml-2 h-5 w-5" />
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
