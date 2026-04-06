import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, FileText, Settings, Shield, BarChart3, ClipboardList, Languages, Share2 } from 'lucide-react'

const features = [
  {
    icon: Phone,
    title: "Multi-Channel Intake",
    description: "Receive reports through voice calls, SMS, WhatsApp, web forms, social media, and in-person referrals.",
  },
  {
    icon: FileText,
    title: "Case Lifecycle Management",
    description: "Standardized intake, assignments, follow-ups, referrals, and case closure with complete audit trails.",
  },
  {
    icon: Settings,
    title: "Configurable Workflows",
    description: "Adapt case flows, forms, and approval processes to match your organization's protocols.",
  },
  {
    icon: Shield,
    title: "Role-Based Access Control",
    description: "Granular permissions ensure staff only access data relevant to their role and location.",
  },
  {
    icon: BarChart3,
    title: "Dashboards & Reporting",
    description: "Real-time visibility with configurable reports for programs, management, and government oversight.",
  },
  {
    icon: ClipboardList,
    title: "Complete Audit Trail",
    description: "Every action is logged for accountability, compliance, and safeguarding requirements.",
  },
  {
    icon: Languages,
    title: "Multilingual Support",
    description: "Interface and content in multiple languages to serve diverse populations.",
  },
  {
    icon: Share2,
    title: "Referral Coordination",
    description: "Track referrals across partner organizations with accountability and reduced duplication.",
  },
]

export default function OpenCHSPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 bg-mesh">

        {/* Hero */}
        <header className="max-w-7xl mx-auto px-6 pt-16 md:pt-28 pb-20 md:pb-32">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Open Source Platform</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-navy leading-[0.9]">
              OpenCHS: Digital Case Management Platform<span className="text-navy/40">.</span>
            </h1>
            <p className="mt-8 text-lg text-gray-500 max-w-xl leading-relaxed">
              A modular, open-source platform built specifically for protection systems, helplines, and social welfare programs.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact?demo=true">
                <Button className="bg-navy hover:bg-navy/90 text-white rounded-full text-base px-8 py-6 font-medium">
                  Request Demo <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button variant="outline" className="border-navy text-navy hover:bg-navy/5 rounded-full text-base px-8 py-6 font-medium">
                  View Implementations <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Platform Features */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-28">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Platform Features</span>
              <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy">Everything You Need for End-to-End Case Management</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-navy/5">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="bg-white p-10 group hover:bg-navy transition-all duration-500">
                  <Icon className="h-8 w-8 text-navy group-hover:text-white mb-6 transition-colors duration-500" />
                  <h4 className="text-xl font-bold text-navy group-hover:text-white mb-3 transition-colors duration-500">{feature.title}</h4>
                  <p className="text-gray-500 group-hover:text-gray-300 text-base leading-relaxed transition-colors duration-500">{feature.description}</p>
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
                Ready to Transform Your Protection Systems?
              </h2>
              <p className="text-gray-300 text-lg mb-10 max-w-lg">
                Schedule a demo to see how OpenCHS can support your helpline, case management, and reporting needs.
              </p>
              <Link href="/contact?demo=true">
                <Button className="bg-white text-navy hover:bg-gray-100 rounded-full text-base py-6 px-10 font-bold">
                  Request Demo <ArrowRight className="ml-2 h-5 w-5" />
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
