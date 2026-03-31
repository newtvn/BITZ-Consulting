import Link from "next/link"
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"

const projects = [
  {
    slug: "icta-kdeap",
    title: "ICTA-KDEAP",
    subtitle: "World Bank — Government Digitization Consultancy",
    category: "IT Consultancy",
    description: "Lead consultants on the ICTA Kenya Digital Economy Acceleration Project (KDEAP) — a World Bank-funded initiative to accelerate Kenya's digital transformation. Developed a comprehensive digitization and automation matrix and conducted an evaluation of record management across all Ministries, Departments and Agencies (MDAs). Delivered across 5 milestones over 6 months.",
    image: "/ICTA-KDEAP.png",
    link: "https://kdeap.icta.go.ke/",
  },
  {
    slug: "openchs",
    title: "OPENCHS",
    subtitle: "A Child Helpline System",
    category: "Child Protection",
    description: "A comprehensive child helpline system that provides a safe and confidential environment for children. Streamlined case management from intake to resolution with configurable workflows, real-time updates, and secure data management.",
    image: "/projects/project1.png",
  },
  {
    slug: "case-management-legal",
    title: "Case Management",
    subtitle: "Legal",
    category: "Legal",
    description: "Designed to streamline the process of managing legal cases by providing a centralized platform for case management, secure user access, comprehensive case handling with detailed history, and profiling for legal professionals.",
    image: "/projects/placeholders/case-management-legal.svg",
  },
  {
    slug: "crm-saccos",
    title: "CRM for SACCOS",
    subtitle: "Member Management Platform",
    category: "Finance",
    description: "A comprehensive software platform that simplifies and automates the entire lifecycle of Sacco operations. Features for member management, interaction tracking, lead and campaign management to optimize engagement and growth.",
    image: "/projects/placeholders/crm-saccos.svg",
  },
  {
    slug: "edms",
    title: "EDMS",
    subtitle: "Electronic Document Management",
    category: "Document Management",
    description: "Designed to enhance document storage, retrieval, and security. Enables organizations to store, track, and manage electronic documents with advanced features for search, version control, organization, and workflow automation.",
    image: "/projects/placeholders/edms.svg",
  },
  {
    slug: "contract-management",
    title: "Contract Management",
    subtitle: "Lifecycle Platform",
    category: "Contract Management",
    description: "A comprehensive platform for managing contracts from creation through execution, compliance, renewal, and closeout. Streamlines contract creation, negotiation, review, and signing with collaboration tools and e-signature capabilities.",
    image: "/projects/placeholders/contract-management.svg",
  },
]

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 bg-mesh">
        {/* Header */}
        <header className="max-w-7xl mx-auto px-6 pt-16 md:pt-28 pb-20 md:pb-32">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Portfolio</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-navy leading-[0.9]">
              Past Projects<span className="text-navy/40">.</span>
            </h1>
            <p className="mt-8 text-lg text-gray-500 max-w-xl leading-relaxed">
              A curated selection of systems built with precision and intent. We transform complex problems into impactful technology solutions across East Africa.
            </p>
          </div>
        </header>

        {/* Project List */}
        <div className="space-y-32 md:space-y-48 max-w-7xl mx-auto px-6 pb-32">
          {projects.map((project, index) => (
            <section key={project.slug} className="group">
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-end`}>
                {/* Image */}
                <div className="w-full lg:w-2/3 overflow-hidden rounded-xl bg-gray-100">
                  <img
                    alt={project.title}
                    className="w-full h-[350px] md:h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                    src={project.image}
                  />
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/3 pb-4 lg:pb-8">
                  <div className="mb-6 flex items-center gap-4">
                    <span className="text-sm uppercase tracking-widest text-navy/60 font-medium">{project.category}</span>
                    <div className="h-[1px] w-12 bg-navy/10"></div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-2 text-navy">{project.title}</h2>
                  <p className="text-lg text-navy/40 font-medium mb-6">{project.subtitle}</p>
                  <p className="text-gray-500 leading-relaxed mb-8">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 text-base font-semibold text-navy border-b border-navy pb-1 hover:gap-4 transition-all duration-300"
                    >
                      View Case Study <ArrowRight className="h-4 w-4" />
                    </Link>
                    {'link' in project && project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-base font-semibold text-navy/60 hover:text-navy pb-1 transition-all duration-300"
                      >
                        Visit Site <ExternalLink className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-32">
          <div className="bg-mesh-navy p-12 md:p-20 lg:p-32 rounded-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white leading-none mb-8">
                Ready to start your next project?
              </h2>
              <p className="text-gray-300 text-lg mb-10 max-w-lg">
                Let's discuss how we can help transform your business with innovative technology solutions.
              </p>
              <Link href="/contact">
                <Button className="bg-white text-navy hover:bg-gray-100 rounded-full text-base py-6 px-10 font-bold">
                  Let's Talk
                </Button>
              </Link>
            </div>
            {/* Abstract design element */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          </div>
        </section>
      </main>
    </div>
  )
}
