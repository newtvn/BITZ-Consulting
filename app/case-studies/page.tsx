import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users } from 'lucide-react'

const caseStudies = [
  {
    slug: "financial-services",
    title: "Cloud Migration for Financial Services Firm",
    category: "Financial Services",
    result: "30% cost reduction",
    description: "Seamless transition to cloud infrastructure resulting in 30% cost reduction and improved security posture across all business units.",
    image: "/projects/placeholders/case-financial-services.svg",
  },
  {
    slug: "manufacturing",
    title: "Digital Transformation for Manufacturing Company",
    category: "Manufacturing",
    result: "40% efficiency increase",
    description: "How we helped a leading manufacturer streamline operations and increase efficiency by 40% through integrated digital solutions.",
    image: "/projects/placeholders/case-manufacturing.svg",
  },
]

export default function CaseStudies() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 bg-mesh">

        {/* Hero */}
        <header className="max-w-7xl mx-auto px-6 pt-16 md:pt-28 pb-20 md:pb-32">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Success Stories</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-navy leading-[0.9]">
              Case Studies<span className="text-navy/40">.</span>
            </h1>
            <p className="mt-8 text-lg text-gray-500 max-w-xl leading-relaxed">
              Real results for real businesses. Discover how we've helped organizations achieve their technology goals across East Africa.
            </p>
          </div>
        </header>

        {/* Case Studies List — Alternating Editorial */}
        <div className="space-y-32 md:space-y-48 max-w-7xl mx-auto px-6 pb-32">
          {caseStudies.map((study, index) => (
            <section key={study.slug} className="group">
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-end`}>
                {/* Image */}
                <div className="w-full lg:w-2/3 overflow-hidden rounded-xl bg-gray-100">
                  <img
                    alt={study.title}
                    className="w-full h-[350px] md:h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                    src={study.image}
                  />
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/3 pb-4 lg:pb-8">
                  <div className="mb-6 flex items-center gap-4">
                    <span className="text-sm uppercase tracking-widest text-navy/60 font-medium">{study.category}</span>
                    <div className="h-[1px] w-12 bg-navy/10"></div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-2 text-navy">{study.title}</h2>
                  <div className="mb-6">
                    <span className="text-lg font-bold text-navy/60">{study.result}</span>
                  </div>
                  <p className="text-gray-500 leading-relaxed mb-8">
                    {study.description}
                  </p>
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-2 text-base font-semibold text-navy border-b border-navy pb-1 hover:gap-4 transition-all duration-300"
                  >
                    Read Case Study <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Impact Stats */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-navy/10"></div>

            <div className="pr-0 md:pr-16">
              <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-6 block font-medium">Client Success</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy leading-tight mb-8">
                Discover the impact of our solutions.
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-t border-navy/10 pt-6">
                  <div className="text-4xl md:text-5xl font-extrabold text-navy">75%</div>
                  <p className="text-base text-gray-400 mt-2">Increase in operational efficiency</p>
                </div>
                <div className="border-t border-navy/10 pt-6">
                  <div className="text-4xl md:text-5xl font-extrabold text-navy">100%</div>
                  <p className="text-base text-gray-400 mt-2">Client satisfaction rate</p>
                </div>
              </div>
            </div>
            <div className="pl-0 md:pl-16 mt-12 md:mt-0">
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-ios">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center">
                    <Users className="h-6 w-6 text-navy/60" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">Client Testimonial</h3>
                    <p className="text-base text-gray-400">Financial Services Company</p>
                  </div>
                </div>
                <p className="italic text-gray-500 leading-relaxed">"BITZ-itc transformed our IT infrastructure, resulting in a 40% reduction in downtime and significant cost savings. Their team's expertise and dedication exceeded our expectations."</p>
                <div className="mt-6 text-base text-gray-400">— John Smith, CTO</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-32">
          <div className="bg-mesh-navy p-12 md:p-20 lg:p-32 rounded-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white leading-none mb-8">
                Your success story starts here.
              </h2>
              <p className="text-gray-300 text-lg mb-10 max-w-lg">
                Let's discuss how we can help transform your business with innovative technology solutions.
              </p>
              <Link href="/contact">
                <Button className="bg-white text-navy hover:bg-gray-100 rounded-full text-base py-6 px-10 font-bold">
                  Let's Talk <ArrowRight className="ml-2 h-5 w-5" />
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
