import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from 'lucide-react'

export default function CaseStudies() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        {/* Hero */}
        <section className="w-full py-16 md:py-28 lg:py-32 bg-navy text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                  Case Studies
                </h1>
                <p className="text-xl md:text-2xl text-gray-300">
                  Discover how we've helped businesses achieve their technology goals
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-video bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-xl shadow-ios-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <h3 className="text-2xl font-bold">Success Stories</h3>
                      <p className="text-lg text-gray-300">Real results for real businesses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Cases */}
        <section className="w-full py-16 md:py-28 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-navy hover:bg-navy/90 rounded-full px-4 py-1 text-sm">Featured Cases</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  Our Success Stories
                </h2>
                <p className="text-lg md:text-xl text-gray-500 max-w-[900px]">
                  Explore how we've helped businesses across various industries achieve their technology goals
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <Card className="border-0 shadow-ios rounded-xl overflow-hidden hover:shadow-ios-lg transition-all duration-300">
                <div className="aspect-video relative bg-gray-100">
                  <img
                    src="/placeholder.svg?height=300&width=600&text=Financial Services"
                    alt="Financial Services Case Study"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="mb-3">
                    <Badge className="bg-navy/10 text-navy hover:bg-navy/20 rounded-full px-4 py-1 text-sm">
                      Financial Services
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Cloud Migration for Financial Services Firm</h3>
                  <p className="text-lg text-gray-500 mb-6">
                    Seamless transition to cloud infrastructure resulting in 30% cost reduction and improved security.
                  </p>
                  <Link
                    href="/case-studies/financial-services"
                    className="text-navy flex items-center font-semibold text-lg"
                  >
                    Read case study <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-ios rounded-xl overflow-hidden hover:shadow-ios-lg transition-all duration-300">
                <div className="aspect-video relative bg-gray-100">
                  <img
                    src="/placeholder.svg?height=300&width=600&text=Manufacturing"
                    alt="Manufacturing Case Study"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="mb-3">
                    <Badge className="bg-navy/10 text-navy hover:bg-navy/20 rounded-full px-4 py-1 text-sm">
                      Manufacturing
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Digital Transformation for Manufacturing Company</h3>
                  <p className="text-lg text-gray-500 mb-6">
                    How we helped a leading manufacturer streamline operations and increase efficiency by 40%.
                  </p>
                  <Link
                    href="/case-studies/manufacturing"
                    className="text-navy flex items-center font-semibold text-lg"
                  >
                    Read case study <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Client Success */}
        <section className="w-full py-16 md:py-28 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <Badge className="bg-navy hover:bg-navy/90 rounded-full px-4 py-1 text-sm">
                  Client Success
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                  The Impact of Our Solutions
                </h2>
                <p className="text-lg text-gray-500">
                  See how our technology solutions have transformed businesses across industries
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white p-6 rounded-xl">
                    <div className="text-3xl md:text-4xl font-bold text-navy">75%</div>
                    <p className="text-base md:text-lg text-gray-500">Increase in operational efficiency</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl">
                    <div className="text-3xl md:text-4xl font-bold text-navy">100%</div>
                    <p className="text-base md:text-lg text-gray-500">Client satisfaction rate</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-navy/10 flex items-center justify-center">
                      <div className="text-navy font-bold text-xl">JS</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">Client Testimonial</h3>
                      <p className="text-base text-gray-500">Financial Services Company</p>
                    </div>
                  </div>
                  <p className="italic text-lg text-gray-500">
                    "BITZ-itc transformed our IT infrastructure, resulting in a 40% reduction in downtime and
                    significant cost savings. Their team's expertise and dedication exceeded our expectations."
                  </p>
                  <div className="mt-4 text-base text-gray-500">- John Smith, CTO</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
