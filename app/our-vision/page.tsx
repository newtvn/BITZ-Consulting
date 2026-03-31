import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Globe, Lightbulb, Target, Users } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function OurVision() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-16 md:py-28 lg:py-32 bg-navy text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                  Our Vision
                </h1>
                <p className="text-xl md:text-2xl text-gray-300">
                  Empowering businesses through innovative technology solutions and digital transformation.
                </p>
              </div>
              <div className="flex justify-center">
                <Carousel className="w-full max-w-[500px]">
                  <CarouselContent>
                    <CarouselItem>
                       <div className="relative w-full aspect-video bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-xl shadow-ios-lg flex items-center justify-center">
                          <Lightbulb className="h-24 w-24 text-white/80" />
                        </div>
                    </CarouselItem>
                     <CarouselItem>
                       <div className="relative w-full aspect-video bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-xl shadow-ios-lg flex items-center justify-center">
                          <Target className="h-24 w-24 text-white/80" />
                        </div>
                    </CarouselItem>
                     <CarouselItem>
                       <div className="relative w-full aspect-video bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-xl shadow-ios-lg flex items-center justify-center">
                          <Users className="h-24 w-24 text-white/80" />
                        </div>
                    </CarouselItem>
                  </CarouselContent>
                   <CarouselPrevious className="bg-white/20 hover:bg-white/30 text-white border-none" />
                  <CarouselNext className="bg-white/20 hover:bg-white/30 text-white border-none" />
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-28 bg-white animate-fade-in">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-navy hover:bg-navy/90 rounded-full px-4 py-1 text-sm">Our Mission</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  Transforming Businesses Through Technology
                </h2>
                <p className="text-lg md:text-xl text-gray-500 max-w-[900px]">
                  We are very committed to delivering innovative solutions that drive growth and efficiency
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="border-0 shadow-ios rounded-xl hover:shadow-ios-lg transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-lg bg-gray-100">
                    <Target className="h-10 w-10 text-navy" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Goals</h3>
                  <p className="text-lg text-gray-500">
                    To be the leading technology partner for businesses seeking digital transformation
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-ios rounded-xl hover:shadow-ios-lg transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-lg bg-gray-100">
                    <Users className="h-10 w-10 text-navy" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Values</h3>
                  <p className="text-lg text-gray-500">
                    Innovation, integrity, and excellence in everything we do
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-ios rounded-xl hover:shadow-ios-lg transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-lg bg-gray-100">
                    <Globe className="h-10 w-10 text-navy" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Impact</h3>
                  <p className="text-lg text-gray-500">
                    Creating lasting positive change in the businesses we serve
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-28 bg-gray-50 animate-fade-in">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <Badge className="bg-navy hover:bg-navy/90 rounded-full px-4 py-1 text-sm">
                  Our Approach
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                  How We Work
                </h2>
                <p className="text-lg text-gray-500">
                  Our methodology combines technical expertise with a deep understanding of business needs
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-navy/10">
                      <span className="text-navy font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Understanding</h3>
                      <p className="text-gray-500">Deep dive into your business needs and challenges</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-navy/10">
                      <span className="text-navy font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Strategy</h3>
                      <p className="text-gray-500">Develop tailored solutions to address your specific needs</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-navy/10">
                      <span className="text-navy font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Implementation</h3>
                      <p className="text-gray-500">Execute solutions with precision and attention to detail</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-navy/10">
                      <span className="text-navy font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Support</h3>
                      <p className="text-gray-500">Provide ongoing support and optimization</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-xl shadow-ios-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center space-y-4 p-8">
                      <h3 className="text-2xl font-bold">Ready to Transform Your Business?</h3>
                      <p className="text-lg text-gray-300">Let's discuss how we can help you achieve your goals</p>
                      <Button className="bg-white text-navy hover:bg-gray-100 rounded-full text-base py-6 px-8">
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
