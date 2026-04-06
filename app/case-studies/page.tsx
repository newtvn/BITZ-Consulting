import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

const caseStudies = [
  {
    country: "Uganda",
    partner: "GIZ",
    title: "Labor & Immigrant Complaints System",
    featured: true,
    challenge:
      "Migrant workers from Uganda employed abroad faced exploitation and abuse with limited channels to report their cases or access government support.",
    solution:
      "BITZ implemented a GIZ-funded Labor & Immigrant Complaints system integrated with OpenCHS, enabling structured case intake, cross-border coordination, and secure tracking.",
    outcomes: [
      "Multi-channel reporting for migrants abroad",
      "Structured case intake with secure tracking",
      "Escalation workflows to relevant government units",
      "Survivor support pathway and follow-up",
      "Reporting and oversight dashboards",
    ],
  },
  {
    country: "Kenya",
    partner: "UNICEF",
    title: "National Child Helpline Integration",
    featured: false,
    challenge:
      "Kenya's national child helpline needed to modernize its case management system to handle increasing contact volumes across multiple channels.",
    solution:
      "OpenCHS was deployed to provide unified case management across multiple contact channels with real-time reporting and multi-agency coordination.",
    outcomes: [
      "30,000+ monthly contacts handled",
      "Multi-agency referral coordination",
      "Real-time dashboards for management",
      "Reduced case resolution time",
      "Improved reporting to government",
    ],
  },
  {
    country: "Tanzania",
    partner: "Government",
    title: "Social Welfare Case Management",
    featured: false,
    challenge:
      "Tanzania's social welfare department required a unified system to manage child protection and social welfare cases across districts.",
    solution:
      "OpenCHS was configured for social welfare workflows with district-level access controls and national reporting capabilities.",
    outcomes: [
      "Unified case tracking across districts",
      "Workflow automation for case processing",
      "Standardized reporting formats",
      "Improved inter-agency coordination",
      "Training and capacity building",
    ],
  },
  {
    country: "Somalia",
    partner: "UNFPA",
    title: "Federal Protection Systems",
    featured: false,
    challenge:
      "Somalia's federal protection programs needed a system to coordinate GBV response across partner organizations with multi-language support.",
    solution:
      "OpenCHS was deployed with multi-language support and partner network integration for coordinated protection response.",
    outcomes: [
      "GBV response coordination",
      "Multi-language interface support",
      "Partner network integration",
      "Federal-level reporting",
      "Capacity building for staff",
    ],
  },
  {
    country: "Lesotho",
    partner: "UNICEF",
    title: "Child Protection Services",
    featured: false,
    challenge:
      "Lesotho needed to strengthen its child protection case management with better tracking and referral pathway documentation.",
    solution:
      "OpenCHS was implemented for child protection services with integrated helpline and case management capabilities.",
    outcomes: [
      "Integrated helpline and case management",
      "Referral pathway tracking",
      "Case outcome monitoring",
      "Staff workload management",
      "Government reporting compliance",
    ],
  },
]

export default function CaseStudies() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 bg-mesh">
        {/* Hero */}
        <header className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-16 md:pt-28 pb-20 md:pb-32">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">
              Impact Stories
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-navy leading-[0.9]">
              Case Studies<span className="text-navy/40">.</span>
            </h1>
            <p className="mt-8 text-lg text-gray-500 max-w-xl leading-relaxed">
              Real implementations delivering measurable outcomes for
              governments and international partners across Africa.
            </p>
          </div>
        </header>

        {/* Case Studies — Editorial Alternating Layout */}
        <div className="space-y-20 md:space-y-32 max-w-7xl mx-auto px-6 pb-32">
          {caseStudies.map((study, index) => (
            <section key={study.title}>
              <div
                className={`flex flex-col gap-10 lg:gap-16 items-stretch ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div
                  className={`w-full ${
                    study.featured ? "lg:w-full" : "lg:w-1/2"
                  }`}
                >
                  <div
                    className={`group bg-white rounded-xl shadow-ios transition-all duration-500 hover:bg-navy ${
                      study.featured ? "p-10 md:p-14 lg:p-16" : "p-8 md:p-10"
                    }`}
                  >
                    {/* Badge */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-navy/5 text-xs font-semibold uppercase tracking-wider text-navy group-hover:bg-white/10 group-hover:text-white transition-colors duration-500">
                        {study.country} &bull; {study.partner}
                      </span>
                      {study.featured && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-navy text-xs font-semibold uppercase tracking-wider text-white group-hover:bg-white group-hover:text-navy transition-colors duration-500">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h2
                      className={`font-extrabold tracking-tighter text-navy group-hover:text-white transition-colors duration-500 mb-6 ${
                        study.featured
                          ? "text-3xl md:text-4xl lg:text-5xl"
                          : "text-2xl md:text-3xl"
                      }`}
                    >
                      {study.title}
                    </h2>

                    {/* Challenge */}
                    <div className="mb-6">
                      <h3 className="text-xs uppercase tracking-[0.2em] text-navy/40 group-hover:text-white/40 font-semibold mb-2 transition-colors duration-500">
                        Challenge
                      </h3>
                      <p className="text-gray-500 group-hover:text-gray-300 leading-relaxed transition-colors duration-500">
                        {study.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="mb-6">
                      <h3 className="text-xs uppercase tracking-[0.2em] text-navy/40 group-hover:text-white/40 font-semibold mb-2 transition-colors duration-500">
                        Solution
                      </h3>
                      <p className="text-gray-500 group-hover:text-gray-300 leading-relaxed transition-colors duration-500">
                        {study.solution}
                      </p>
                    </div>

                    {/* Outcomes */}
                    <div>
                      <h3 className="text-xs uppercase tracking-[0.2em] text-navy/40 group-hover:text-white/40 font-semibold mb-3 transition-colors duration-500">
                        Outcomes
                      </h3>
                      <ul className="space-y-2">
                        {study.outcomes.map((outcome) => (
                          <li
                            key={outcome}
                            className="flex items-start gap-2 text-gray-500 group-hover:text-gray-300 transition-colors duration-500"
                          >
                            <CheckCircle className="h-4 w-4 mt-1 flex-shrink-0 text-navy/30 group-hover:text-white/40 transition-colors duration-500" />
                            <span className="leading-relaxed">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Spacer / visual element for non-featured cards */}
                {!study.featured && (
                  <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center">
                    <div className="w-full h-full min-h-[320px] rounded-xl bg-gradient-to-br from-navy/5 to-navy/10 flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-6xl font-extrabold text-navy/10">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="text-sm uppercase tracking-[0.2em] text-navy/20 mt-2 font-medium">
                          {study.country}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-32">
          <div className="bg-mesh-navy p-12 md:p-20 lg:p-32 rounded-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white leading-none mb-8">
                Ready to Create Your Own Success Story?
              </h2>
              <p className="text-gray-300 text-lg mb-10 max-w-lg">
                Join the growing number of governments and organizations using
                OpenCHS to strengthen their protection systems.
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
