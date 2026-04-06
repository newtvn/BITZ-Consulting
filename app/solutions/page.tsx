import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, ShieldAlert, MessageSquareWarning, Globe, Plug, Bot } from 'lucide-react'

const solutions = [
  {
    number: "01",
    icon: Phone,
    title: "OpenCHS Helpline & Case Management",
    subtitle: "VAC/GBV/Child Protection",
    description: "End-to-end case management for protection programs with multi-channel intake, case lifecycle tracking, and real-time reporting.",
    capabilities: [
      "Multi-channel intake (voice, SMS, chat, social, web)",
      "Structured case intake and triage",
      "Case assignment and workload management",
      "Follow-up scheduling and reminders",
      "Referral tracking and coordination",
      "Outcome documentation and closure",
    ],
  },
  {
    number: "02",
    icon: ShieldAlert,
    title: "PSEA Reporting & Case Handling",
    subtitle: "Protection Against Sexual Exploitation & Abuse",
    description: "Confidential, survivor-centered reporting mechanisms with secure case handling for PSEA complaints.",
    capabilities: [
      "Anonymous reporting options",
      "Secure case documentation",
      "Escalation workflows",
      "Confidentiality safeguards",
      "Investigation tracking",
      "Compliance reporting",
    ],
  },
  {
    number: "03",
    icon: MessageSquareWarning,
    title: "Complaints & Grievance Mechanisms",
    subtitle: "Organizational Accountability",
    description: "Structured intake and resolution workflows for organizational complaints and grievance handling.",
    capabilities: [
      "Multi-channel complaint submission",
      "Category-based routing",
      "Resolution tracking",
      "Escalation protocols",
      "Response time monitoring",
      "Analytics and trends",
    ],
  },
  {
    number: "04",
    icon: Globe,
    title: "Labor & Immigrant Protection",
    subtitle: "Cross-Border Case Management",
    description: "Connect migrants abroad with home government support through cross-border case tracking and coordination.",
    capabilities: [
      "Multi-channel reporting for migrants abroad",
      "Embassy and consular coordination",
      "Cross-agency case sharing",
      "Survivor support pathways",
      "Repatriation tracking",
      "Inter-country reporting",
    ],
  },
  {
    number: "05",
    icon: Plug,
    title: "Interoperability & Integrations",
    subtitle: "Connect Your Ecosystem",
    description: "Integrate OpenCHS with your existing infrastructure, communication channels, and partner systems.",
    capabilities: [
      "Telecom integration (SIP/E1/GSM)",
      "SMS gateway connectivity",
      "Email system integration",
      "Social media channels",
      "Analytics and BI tools",
      "API for custom integrations",
    ],
  },
  {
    number: "06",
    icon: Bot,
    title: "Responsible AI & Automation",
    subtitle: "Human-in-the-Loop",
    description: "AI-assisted triage, routing, and analytics\u2014always with human oversight. No automated decisions for high-risk outcomes.",
    capabilities: [
      "Intelligent case prioritization",
      "Suggested categorization",
      "Pattern detection for trends",
      "Workload optimization",
      "Human review for all decisions",
      "Ethical AI principles",
    ],
  },
]

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 bg-mesh">

        {/* Hero */}
        <header className="max-w-7xl mx-auto px-6 pt-16 md:pt-28 pb-20 md:pb-32">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Solutions</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-navy leading-[0.9]">
              Comprehensive Protection Solutions<span className="text-navy/40">.</span>
            </h1>
            <p className="mt-8 text-lg text-gray-500 max-w-xl leading-relaxed">
              Modular solutions designed for the specific needs of protection programs, helplines, and government agencies.
            </p>
          </div>
        </header>

        {/* Solutions — Editorial List */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-28">
          <div className="space-y-0">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <div key={solution.number} className="group border-t border-navy/10 py-12 md:py-16">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-start`}>
                    {/* Left: Number + Icon + Title */}
                    <div className="w-full lg:w-2/5">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-base text-navy/30 font-mono">{solution.number}</span>
                        <div className="h-[1px] w-12 bg-navy/10"></div>
                      </div>
                      <div className="flex items-center gap-4 mb-2">
                        <Icon className="h-8 w-8 text-navy" />
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-navy">{solution.title}</h2>
                      </div>
                      <p className="text-lg text-navy/40 font-medium mb-6">{solution.subtitle}</p>
                      <p className="text-gray-500 leading-relaxed mb-6">{solution.description}</p>
                      <Link href="/contact?demo=true">
                        <Button variant="outline" className="border-navy text-navy hover:bg-navy/5 rounded-full text-sm px-6 py-4 font-medium">
                          Learn More <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    </div>

                    {/* Right: Key Features */}
                    <div className="w-full lg:w-3/5">
                      <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Key Features</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-navy/5">
                        {solution.capabilities.map((cap) => (
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

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-32">
          <div className="bg-mesh-navy p-12 md:p-20 lg:p-32 rounded-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white leading-none mb-8">
                Need a Custom Solution?
              </h2>
              <p className="text-gray-300 text-lg mb-10 max-w-lg">
                Our team can work with you to adapt OpenCHS to your specific requirements and integrate with your existing systems.
              </p>
              <Link href="/contact">
                <Button className="bg-white text-navy hover:bg-gray-100 rounded-full text-base py-6 px-10 font-bold">
                  Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
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
