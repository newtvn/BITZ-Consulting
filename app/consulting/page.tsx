import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from 'lucide-react'

const services = [
  { number: "01", title: "Digital Service Delivery Assessments", description: "Assess e-service maturity, gaps, user journeys, and operational bottlenecks to identify priority improvements." },
  { number: "02", title: "Manual Records & Digitization Strategy", description: "Records audits, digitization roadmap, retention policies, metadata standards, and transition planning." },
  { number: "03", title: "Governance, Policy & Institutional Strengthening", description: "Operating models, SOPs, accountability structures, and compliance frameworks for sustainable service delivery." },
  { number: "04", title: "Business Process Re-engineering", description: "Redesign workflows, reduce friction, define roles and controls, improve service turnaround times." },
  { number: "05", title: "Architecture, Interoperability & Integration", description: "Enterprise architecture, system integration strategy, data exchange standards, and multi-channel integration." },
  { number: "06", title: "Cybersecurity, Data Protection & Risk Management", description: "Security-by-design guidance, risk assessments, controls implementation, and ongoing advisory support." },
  { number: "07", title: "Implementation Support & PMO", description: "Program management, vendor oversight, delivery assurance, quality gates, and go-live support." },
  { number: "08", title: "Training & Change Management", description: "Capacity building programs, adoption plans, training content development, and support models." },
]

const approach = [
  { step: "01", title: "Discovery & Scoping", description: "Understand objectives, stakeholders, and constraints." },
  { step: "02", title: "Assessment & Diagnostics", description: "Analyze current state, gaps, and opportunities." },
  { step: "03", title: "Design & Recommendations", description: "Roadmap, architecture, and governance framework." },
  { step: "04", title: "Implementation Support", description: "Hands-on delivery, PMO, and quality assurance." },
  { step: "05", title: "Capacity Building & Handover", description: "Training, documentation, and knowledge transfer." },
]

const deliverables = [
  "Assessment report + prioritized recommendations",
  "Digitization roadmap + investment plan",
  "Governance framework (roles, SOPs, controls)",
  "Requirements specification + implementation plan",
  "Risk register + security/privacy recommendations",
  "Training plan + workshop outputs",
  "M&E / KPI framework for ongoing reporting",
]

const audiences = [
  { title: "Government Ministries & Agencies", description: "Digital transformation, e-services, and institutional strengthening for public sector organizations." },
  { title: "Development Partners (UN/INGO)", description: "Program design, implementation support, and M&E frameworks for international development initiatives." },
  { title: "National Programs", description: "Protection systems, health programs, labor initiatives, and complaints & grievance mechanisms." },
]

export default function ConsultingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 bg-mesh">

        {/* Hero */}
        <header className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-16 md:pt-28 pb-20 md:pb-32">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Advisors to Governments & International Partners</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-navy leading-[0.9]">
              Consulting for Digital Transformation & Social Impact Systems<span className="text-navy/40">.</span>
            </h1>
            <p className="mt-8 text-lg text-gray-500 max-w-2xl leading-relaxed">
              Advisors to Governments & International Partners. BITZ helps governments and development partners design, modernize, and scale digital services — covering strategy, architecture, governance, security, and implementation.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact?type=proposal">
                <Button className="bg-navy hover:bg-navy/90 text-white rounded-full text-base px-8 py-6 font-medium">
                  Request Proposal <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link href="/contact?type=consultation">
                <Button variant="outline" className="border-navy text-navy hover:bg-navy/5 rounded-full text-base px-8 py-6 font-medium">
                  Schedule a Consultation <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-navy/5">
            {[
              "Multi-country experience",
              "Government + UN/INGO programs",
              "Governance + security by design",
              "Delivery-focused, practical outputs",
            ].map((stat) => (
              <div key={stat} className="bg-white p-6">
                <p className="text-base font-semibold text-navy">{stat}</p>
              </div>
            ))}
          </div>
        </header>

        {/* What We Consult On */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-28">
          <div className="mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Services</span>
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy">What We Consult On</h3>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl leading-relaxed">Comprehensive consulting services designed to deliver practical, sustainable outcomes for government and development programs.</p>
          </div>

          <div className="space-y-0">
            {services.map((service) => (
              <div key={service.number} className="group border-t border-navy/10 py-10 md:py-14">
                <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-start">
                  <span className="text-base text-navy/30 font-mono md:w-16 shrink-0">{service.number}</span>
                  <div className="flex-1">
                    <h4 className="text-2xl md:text-3xl font-extrabold text-navy mb-4 tracking-tight">{service.title}</h4>
                    <p className="text-gray-500 leading-relaxed max-w-2xl mb-4">{service.description}</p>
                    <Link href="/contact?type=consultation" className="inline-flex items-center text-navy font-medium hover:text-navy/70 transition-colors">
                      Talk to an expert <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How We Work */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-28">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Our Approach</span>
              <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy">How We Work</h3>
            </div>
            <p className="text-gray-500 text-base max-w-sm">A structured, delivery-focused methodology adapted to every engagement.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-navy/5">
            {approach.map((step) => (
              <div key={step.step} className="bg-white p-10 group hover:bg-navy transition-all duration-500">
                <span className="text-sm text-navy/30 group-hover:text-white/30 font-mono mb-6 block transition-colors duration-500">{step.step}</span>
                <h4 className="text-xl font-bold text-navy group-hover:text-white mb-3 transition-colors duration-500">{step.title}</h4>
                <p className="text-gray-500 group-hover:text-gray-300 text-base leading-relaxed transition-colors duration-500">{step.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-400 italic">Typical timeline: 2-12 weeks depending on scope.</p>
        </section>

        {/* Typical Deliverables */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-28">
          <div className="mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Outputs</span>
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy">Typical Deliverables</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-navy/5">
            {deliverables.map((item) => (
              <div key={item} className="bg-white p-8">
                <p className="text-base text-navy font-medium">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Consulting Engagement */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-28">
          <div className="mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Featured Engagement</span>
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy">Featured Consulting Engagement</h3>
          </div>

          <div className="border border-navy/10 rounded-xl p-10 md:p-14 bg-white">
            <h4 className="text-2xl md:text-3xl font-extrabold text-navy mb-4 tracking-tight">
              Assessment Study for E-Service Delivery, Manual Records & Governance Requirements
            </h4>
            <p className="text-gray-500 leading-relaxed mb-6">
              Delivered for a national public-sector client under a major digital economy program (contracted consulting engagement).
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Mapped current-state processes and service readiness.",
                "Defined governance and operational requirements.",
                "Produced practical recommendations and a prioritized roadmap.",
                "Details available on request.",
              ].map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <ArrowRight className="h-4 w-4 text-navy/30 mt-1 shrink-0" />
                  <span className="text-gray-500 leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-28">
          <div className="mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Clients</span>
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy">Who We Serve</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-navy/5">
            {audiences.map((item) => (
              <div key={item.title} className="bg-white p-10 group hover:bg-navy transition-all duration-500">
                <h4 className="text-xl font-bold text-navy group-hover:text-white mb-3 transition-colors duration-500">{item.title}</h4>
                <p className="text-gray-500 group-hover:text-gray-300 text-base leading-relaxed transition-colors duration-500">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-32">
          <div className="bg-mesh-navy p-12 md:p-20 lg:p-32 rounded-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white leading-none mb-8">
                Need an assessment, roadmap, or implementation support?
              </h2>
              <p className="text-gray-300 text-lg mb-4 max-w-lg">
                Let's discuss how we can support your digital transformation goals.
              </p>
              <div className="space-y-2 mb-10">
                <p className="text-gray-300 text-base flex items-center gap-2">
                  <Mail className="h-4 w-4" /> General consulting: <a href="mailto:info@bitz-itc.com" className="underline text-white">info@bitz-itc.com</a>
                </p>
                <p className="text-gray-300 text-base flex items-center gap-2">
                  <Mail className="h-4 w-4" /> OpenCHS/product consulting: <a href="mailto:openchs@bitz-itc.com" className="underline text-white">openchs@bitz-itc.com</a>
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact?type=proposal">
                  <Button className="bg-white text-navy hover:bg-gray-100 rounded-full text-base py-6 px-10 font-bold">
                    Request Proposal <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="mailto:info@bitz-itc.com">
                  <Button className="bg-transparent border border-white/30 text-white hover:bg-white/10 rounded-full text-base py-6 px-10 font-bold">
                    Email Consulting Team <Mail className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          </div>
        </section>

      </main>
    </div>
  )
}
