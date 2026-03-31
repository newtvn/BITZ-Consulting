import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

const values = [
  { number: "01", title: "Innovation", description: "We push boundaries relentlessly, exploring emerging technologies and creative approaches to solve the most complex challenges our clients face." },
  { number: "02", title: "Integrity", description: "Transparency and honesty form the foundation of every engagement. We deliver on our promises and communicate openly at every stage." },
  { number: "03", title: "Excellence", description: "We hold ourselves to the highest standards of quality in code, design, and delivery — because good enough never is." },
  { number: "04", title: "Impact", description: "Every solution we build is measured by its real-world effect. Technology for its own sake means nothing — transformation does." },
]

const methodology = [
  { step: "01", title: "Understanding", description: "Deep dive into your business needs, pain points, and objectives. We listen before we build." },
  { step: "02", title: "Strategy", description: "We architect tailored solutions grounded in research, best practices, and your unique constraints." },
  { step: "03", title: "Implementation", description: "Agile execution with precision engineering. Frequent checkpoints keep you in control throughout." },
  { step: "04", title: "Support", description: "Ongoing optimization, monitoring, and support ensure your systems evolve with your business." },
]

export default function OurVision() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 bg-mesh">

        {/* Hero */}
        <header className="max-w-7xl mx-auto px-6 pt-16 md:pt-28 pb-20 md:pb-32">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Our Vision</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-navy leading-[0.9]">
              Technology with<br />purpose<span className="text-navy/40">.</span>
            </h1>
            <p className="mt-8 text-lg text-gray-500 max-w-xl leading-relaxed">
              Empowering businesses through innovative technology solutions and digital transformation across East Africa and beyond.
            </p>
          </div>
        </header>

        {/* Mission Statement — Full Width Typography */}
        <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-navy/10"></div>

            <div className="pr-0 md:pr-16">
              <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-6 block font-medium">Mission</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy leading-tight">
                Transforming businesses through technology that matters.
              </h2>
            </div>
            <div className="pl-0 md:pl-16 mt-8 md:mt-0">
              <p className="text-gray-500 leading-relaxed mb-6">
                We are committed to delivering innovative solutions that drive growth and efficiency. Our mission goes beyond writing code — we build systems that reshape how organizations operate and serve their communities.
              </p>
              <p className="text-gray-500 leading-relaxed">
                From government agencies to international organizations like UNICEF and the World Bank, we partner with those who seek lasting, meaningful change through technology.
              </p>
            </div>
          </div>
        </section>

        {/* Values — Editorial List */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-28">
          <div className="mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">What We Stand For</span>
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy">Our Values</h3>
          </div>

          <div className="space-y-0">
            {values.map((value) => (
              <div key={value.number} className="group border-t border-navy/10 py-10 md:py-14">
                <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-start">
                  <span className="text-base text-navy/30 font-mono md:w-16 shrink-0">{value.number}</span>
                  <div className="flex-1">
                    <h4 className="text-2xl md:text-3xl font-extrabold text-navy mb-4 tracking-tight">{value.title}</h4>
                    <p className="text-gray-500 leading-relaxed max-w-2xl">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Goals — Large Statement */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-6 block font-medium">Our Goals</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-navy leading-tight">
              To be the leading technology partner for businesses seeking digital transformation.
            </h2>
            <p className="mt-8 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Creating lasting positive change in the businesses we serve — one system, one solution, one partnership at a time.
            </p>
          </div>
        </section>

        {/* Methodology — How We Work */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-28">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Our Approach</span>
              <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy">How We Work</h3>
            </div>
            <p className="text-gray-500 text-base max-w-sm">Our methodology combines technical expertise with a deep understanding of business needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-navy/5">
            {methodology.map((step) => (
              <div key={step.step} className="bg-white p-10 group hover:bg-navy transition-all duration-500">
                <span className="text-sm text-navy/30 group-hover:text-white/30 font-mono mb-6 block transition-colors duration-500">{step.step}</span>
                <h4 className="text-xl font-bold text-navy group-hover:text-white mb-3 transition-colors duration-500">{step.title}</h4>
                <p className="text-gray-500 group-hover:text-gray-300 text-base leading-relaxed transition-colors duration-500">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-32">
          <div className="bg-mesh-navy p-12 md:p-20 lg:p-32 rounded-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white leading-none mb-8">
                Ready to transform your business?
              </h2>
              <p className="text-gray-300 text-lg mb-10 max-w-lg">
                Let's discuss how we can help you achieve your goals with innovative technology solutions.
              </p>
              <Link href="/contact">
                <Button className="bg-white text-navy hover:bg-gray-100 rounded-full text-base py-6 px-10 font-bold">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
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
