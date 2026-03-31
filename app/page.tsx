import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ChevronRight, Code, Database, Globe, MapPin, Mail, Phone, Server, Users } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { DirectionButtons } from "@/components/direction-buttons"
import { ContactButtons } from "@/components/contact-buttons"

export default function Home() {
  const address = 'Prime Cartons, Mombasa Road, Kenya, next to Nice and Lovely (Dongpeng Building)'
  const phoneNumber = '0110952788'
  const emailAddress = 'newtonbryan12428@gmail.com'

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-28 lg:py-32 bg-navy text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                  About Us
                </h1>
                <p className="text-xl md:text-2xl text-gray-300">
                  Founded in 2007 in Nairobi, BITZ IT Consulting has grown into a leading technology partner across East Africa, with a strong presence in Kenya, Uganda, Tanzania, Lesotho, and Rwanda. Our expertise spans custom software development, IT infrastructure, and digital transformation solutions, delivering impactful results for government agencies and international organizations, including UNICEF and the World Bank.
                </p>
              </div>
              <div className="flex justify-center">
                <Carousel className="w-full max-w-[500px]">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="relative w-full aspect-video bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-xl shadow-ios-lg flex items-center justify-center">
                        <Code className="h-24 w-24 text-white/80" />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="relative w-full aspect-video bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-xl shadow-ios-lg flex items-center justify-center">
                        <Database className="h-24 w-24 text-white/80" />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="relative w-full aspect-video bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-xl shadow-ios-lg flex items-center justify-center">
                        <Server className="h-24 w-24 text-white/80" />
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

        {/* Services Section */}
        <section id="services" className="w-full py-16 md:py-28 bg-white animate-fade-in">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-navy hover:bg-navy/90 rounded-full px-4 py-1 text-sm">Our Services</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  Comprehensive Technology Solutions
                </h2>
                <p className="text-lg md:text-xl text-gray-500 max-w-[900px]">
                  From AI development to full-stack solutions, we deliver cutting-edge technology services
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card className="border-0 shadow-ios rounded-xl hover:shadow-ios-lg transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-lg bg-gray-100">
                    <Code className="h-10 w-10 text-navy" />
                  </div>
                  <h3 className="text-2xl font-bold">AI & Machine Learning</h3>
                  <p className="text-lg text-gray-500">
                    Advanced AI solutions and machine learning models for business automation and intelligence.
                  </p>
                  <Link href="/services/ai" className="text-navy flex items-center font-semibold text-lg">
                    Learn more <ChevronRight className="h-5 w-5 ml-1" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-ios rounded-xl hover:shadow-ios-lg transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-lg bg-gray-100">
                    <Database className="h-10 w-10 text-navy" />
                  </div>
                  <h3 className="text-2xl font-bold">Full-Stack Development</h3>
                  <p className="text-lg text-gray-500">
                    Expert frontend and backend development services for scalable applications.
                  </p>
                  <Link href="/services/development" className="text-navy flex items-center font-semibold text-lg">
                    Learn more <ChevronRight className="h-5 w-5 ml-1" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-ios rounded-xl hover:shadow-ios-lg transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-lg bg-gray-100">
                    <Globe className="h-10 w-10 text-navy" />
                  </div>
                  <h3 className="text-2xl font-bold">Digital Solutions</h3>
                  <p className="text-lg text-gray-500">
                    Comprehensive digital services including social media and online presence management.
                  </p>
                  <Link href="/services/digital" className="text-navy flex items-center font-semibold text-lg">
                    Learn more <ChevronRight className="h-5 w-5 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="w-full py-16 md:py-28 bg-white animate-fade-in">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-navy hover:bg-navy/90 rounded-full px-4 py-1 text-sm">Our Projects</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  Explore Our Projects
                </h2>
                <p className="text-lg md:text-xl text-gray-500 max-w-[900px]">
                  Discover how we've helped businesses across various industries achieve their technology goals
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <Card className="border-0 shadow-ios rounded-xl overflow-hidden hover:shadow-ios-lg transition-all duration-300">
                <div className="aspect-video relative bg-gray-100">
                  <img src="/placeholder.svg?height=300&width=600&text=OpenCHS Project" alt="OpenCHS Project" className="object-cover w-full h-full" />
                </div>
                <CardContent className="p-8">
                  <div className="mb-3">
                    <Badge className="bg-navy/10 text-navy hover:bg-navy/20 rounded-full px-4 py-1 text-sm">Child Protection</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Transforming Child Protection with OpenCHS</h3>
                  <p className="text-lg text-gray-500 mb-6">Seamless transition to cloud infrastructure resulting in 30% cost reduction and improved security.</p>
                  <Link href="/projects/openchs" className="text-navy flex items-center font-semibold text-lg">
                    Read more <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-ios rounded-xl overflow-hidden hover:shadow-ios-lg transition-all duration-300">
                <div className="aspect-video relative bg-gray-100">
                  <img src="/placeholder.svg?height=300&width=600&text=Manufacturing Project" alt="Manufacturing Project" className="object-cover w-full h-full" />
                </div>
                <CardContent className="p-8">
                  <div className="mb-3">
                    <Badge className="bg-navy/10 text-navy hover:bg-navy/20 rounded-full px-4 py-1 text-sm">Manufacturing</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Digital Transformation for Manufacturing Company</h3>
                  <p className="text-lg text-gray-500 mb-6">How we helped a leading manufacturer streamline operations and increase efficiency by 40%.</p>
                  <Link href="/projects/manufacturing-digital-transformation" className="text-navy flex items-center font-semibold text-lg">
                    Read more <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-10">
              <Link href="/projects">
                <Button className="bg-navy hover:bg-navy/90 text-white rounded-full text-base py-6 px-8">View All Projects</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Client Success Section */}
        <section className="w-full py-16 md:py-28 bg-navy text-white animate-fade-in">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <Badge className="bg-white/20 hover:bg-white/30 text-white rounded-full px-4 py-1 text-sm">Client Success</Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Discover the impact of our services on client businesses</h2>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/10 p-6 rounded-xl">
                    <div className="text-3xl md:text-4xl font-bold text-white">75%</div>
                    <p className="text-base md:text-lg text-gray-300">Increase in operational efficiency</p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-xl">
                    <div className="text-3xl md:text-4xl font-bold text-white">100%</div>
                    <p className="text-base md:text-lg text-gray-300">Client satisfaction rate</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 p-6 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                      <Users className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">Client Testimonial</h3>
                      <p className="text-base text-gray-300">Financial Services Company</p>
                    </div>
                  </div>
                  <p className="italic text-lg text-gray-300">"BITZ-itc transformed our IT infrastructure, resulting in a 40% reduction in downtime and significant cost savings. Their team's expertise and dedication exceeded our expectations."</p>
                  <div className="mt-4 text-base text-gray-400">- John Smith, CTO</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-16 md:py-28 bg-gray-50 animate-fade-in">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
              <div className="space-y-4">
                <Badge className="bg-navy hover:bg-navy/90 rounded-full px-4 py-1 text-sm">Get In Touch</Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Contact Us</h2>
                <p className="text-lg md:text-xl text-gray-500">Have questions or ready to start your next project? Reach out to our team.</p>
                <div className="grid gap-6 mt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Address</h3>
                      <p className="text-base text-gray-500">{address}</p>
                      <DirectionButtons address={address} />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Email</h3>
                      <p className="text-base text-gray-500">{emailAddress}</p>
                      <ContactButtons email={emailAddress} phone={phoneNumber} />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Phone</h3>
                      <p className="text-base text-gray-500">{phoneNumber}</p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="border-0 shadow-ios rounded-xl">
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Send us a message</h3>
                    <p className="text-base text-gray-500">Fill out the form below and we'll get back to you as soon as possible.</p>
                  </div>
                  <div className="grid gap-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-base font-medium">First name</label>
                        <input id="first-name" className="w-full p-3 text-base border rounded-lg" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-base font-medium">Last name</label>
                        <input id="last-name" className="w-full p-3 text-base border rounded-lg" placeholder="Smith" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-base font-medium">Email</label>
                      <input id="email" type="email" className="w-full p-3 text-base border rounded-lg" placeholder="john.smith@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-base font-medium">Message</label>
                      <textarea id="message" className="w-full p-4 text-base border rounded-xl min-h-[150px]" placeholder="Tell us about your project or inquiry..." />
                    </div>
                    <Button className="w-full bg-navy hover:bg-navy/90 text-white rounded-full text-base py-6">Send Message</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
