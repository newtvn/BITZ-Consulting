import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, ChevronRight, Code, Database, Globe, Server, Shield, Brain, Cpu, Laptop, Cloud, LineChart, BarChart3, LayoutGrid, CheckCircle } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Services() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        {/* Hero */}
        <section className="w-full py-16 md:py-28 lg:py-32 bg-navy text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                  Our Services
                </h1>
                <p className="text-xl md:text-2xl text-gray-300">
                  Comprehensive IT solutions tailored to your business needs
                </p>
              </div>
              <div className="flex justify-center">
                <Carousel className="w-full max-w-[500px]">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="aspect-video bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-xl shadow-ios-lg flex items-center justify-center">
                        <Brain className="h-24 w-24 text-white/80" />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-video bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-xl shadow-ios-lg flex items-center justify-center">
                        <Cpu className="h-24 w-24 text-white/80" />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-video bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-xl shadow-ios-lg flex items-center justify-center">
                        <Cloud className="h-24 w-24 text-white/80" />
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

        {/* Comprehensive Solutions */}
        <section className="w-full py-16 md:py-28 bg-gray-50 animate-fade-in">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <Badge className="bg-navy hover:bg-navy/90 rounded-full px-4 py-1 text-sm">
                  Our Services
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                  Comprehensive Solutions
                </h2>
                <p className="text-lg text-gray-500">
                  End-to-end technology solutions powered by our expert teams
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-navy/10">
                      <Brain className="h-6 w-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">AI & Machine Learning</h3>
                      <p className="text-gray-500">Custom AI solutions and ML model development</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-navy/10">
                      <Laptop className="h-6 w-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Full-Stack Development</h3>
                      <p className="text-gray-500">End-to-end software development services</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-navy/10">
                      <Cloud className="h-6 w-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Cloud & Deployment</h3>
                      <p className="text-gray-500">CI/CD and cloud infrastructure management</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <Carousel className="w-full">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="aspect-square bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-xl shadow-ios-lg flex items-center justify-center">
                        <div className="text-white text-center space-y-4 p-8">
                          <h3 className="text-2xl font-bold">AI Solutions</h3>
                          <p className="text-lg text-gray-300">Cutting-edge artificial intelligence for your business</p>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-square bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-xl shadow-ios-lg flex items-center justify-center">
                        <div className="text-white text-center space-y-4 p-8">
                          <h3 className="text-2xl font-bold">Development Services</h3>
                          <p className="text-lg text-gray-300">Expert software development and deployment</p>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-square bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-xl shadow-ios-lg flex items-center justify-center">
                        <div className="text-white text-center space-y-4 p-8">
                          <h3 className="text-2xl font-bold">Digital Solutions</h3>
                          <p className="text-lg text-gray-300">Comprehensive digital transformation services</p>
                        </div>
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

        {/* Solutions Tabs (relocated from homepage) */}
        <section id="solutions" className="w-full py-16 md:py-28 bg-white animate-fade-in">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-navy hover:bg-navy/90 rounded-full px-4 py-1 text-sm">
                  Innovative Tech Solutions
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  Transformational Support to Technology Solutions
                </h2>
                <p className="text-lg md:text-xl text-gray-500 max-w-[900px]">
                  Explore our cutting-edge solutions designed to transform your business operations
                </p>
              </div>
            </div>

            <Tabs defaultValue="cloud" className="mt-12">
              <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex rounded-full p-1 bg-gray-100">
                <TabsTrigger
                  value="cloud"
                  className="rounded-full data-[state=active]:bg-white data-[state=active]:text-navy data-[state=active]:shadow-ios text-base"
                >
                  Cloud Solutions
                </TabsTrigger>
                <TabsTrigger
                  value="data"
                  className="rounded-full data-[state=active]:bg-white data-[state=active]:text-navy data-[state=active]:shadow-ios text-base"
                >
                  Data Analytics
                </TabsTrigger>
                <TabsTrigger
                  value="ai"
                  className="rounded-full data-[state=active]:bg-white data-[state=active]:text-navy data-[state=active]:shadow-ios text-base"
                >
                  AI & Automation
                </TabsTrigger>
              </TabsList>
              <TabsContent value="cloud" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold">Cloud Infrastructure Solutions</h3>
                    <p className="text-lg text-gray-500">
                      Our cloud infrastructure solutions provide scalable, secure, and reliable environments for your
                      applications and data.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                        <span className="text-lg">Scalable cloud architecture design</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                        <span className="text-lg">Migration services to cloud platforms</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                        <span className="text-lg">Managed cloud services and support</span>
                      </li>
                    </ul>
                    <Button className="bg-navy hover:bg-navy/90 text-white rounded-full text-base py-6 px-8 mt-4">
                      Learn More
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-[400px] aspect-square bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-xl shadow-ios-lg">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Database className="h-24 w-24 text-white/80" />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="data" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold">Data Analytics & Business Intelligence</h3>
                    <p className="text-lg text-gray-500">
                      Transform your data into actionable insights with our comprehensive analytics solutions.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                        <span className="text-lg">Advanced data visualization</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                        <span className="text-lg">Predictive analytics implementation</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                        <span className="text-lg">Custom reporting solutions</span>
                      </li>
                    </ul>
                    <Button className="bg-navy hover:bg-navy/90 text-white rounded-full text-base py-6 px-8 mt-4">
                      Learn More
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-[400px] aspect-square bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-xl shadow-ios-lg">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <BarChart3 className="h-24 w-24 text-white/80" />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="ai" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold">AI & Automation Solutions</h3>
                    <p className="text-lg text-gray-500">
                      Leverage the power of artificial intelligence and automation to streamline operations and drive
                      innovation.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                        <span className="text-lg">Process automation implementation</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                        <span className="text-lg">AI-powered decision support systems</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                        <span className="text-lg">Machine learning model development</span>
                      </li>
                    </ul>
                    <Button className="bg-navy hover:bg-navy/90 text-white rounded-full text-base py-6 px-8 mt-4">
                      Learn More
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-[400px] aspect-square bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-xl shadow-ios-lg">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Shield className="h-24 w-24 text-white/80" />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Products Section (relocated from homepage) */}
        <section id="products" className="w-full py-16 md:py-28 bg-gray-50 animate-fade-in">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-navy hover:bg-navy/90 rounded-full px-4 py-1 text-sm">Our Products</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  Explore Our Software Products
                </h2>
                <p className="text-lg md:text-xl text-gray-500 max-w-[900px]">
                  Discover our off-the-shelf and customizable software solutions.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <Card className="border-0 shadow-ios rounded-xl hover:shadow-ios-lg transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-lg bg-gray-100">
                    <LayoutGrid className="h-10 w-10 text-navy" />
                  </div>
                  <h3 className="text-2xl font-bold">Product Name 1</h3>
                  <p className="text-lg text-gray-500">
                    Brief description of the product and its benefits.
                  </p>
                  <Link href="#" className="text-navy flex items-center font-semibold text-lg">
                    Learn more <ChevronRight className="h-5 w-5 ml-1" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-ios rounded-xl hover:shadow-ios-lg transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-lg bg-gray-100">
                    <LayoutGrid className="h-10 w-10 text-navy" />
                  </div>
                  <h3 className="text-2xl font-bold">Product Name 2</h3>
                  <p className="text-lg text-gray-500">
                    Brief description of the product and its benefits.
                  </p>
                  <Link href="#" className="text-navy flex items-center font-semibold text-lg">
                    Learn more <ChevronRight className="h-5 w-5 ml-1" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-ios rounded-xl hover:shadow-ios-lg transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-lg bg-gray-100">
                    <LayoutGrid className="h-10 w-10 text-navy" />
                  </div>
                  <h3 className="text-2xl font-bold">Product Name 3</h3>
                  <p className="text-lg text-gray-500">
                    Brief description of the product and its benefits.
                  </p>
                  <Link href="#" className="text-navy flex items-center font-semibold text-lg">
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
                  <img
                    src="/placeholder.svg?height=300&width=600&text=Project Image"
                    alt="Project Image"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="mb-3">
                    <Badge className="bg-navy/10 text-navy hover:bg-navy/20 rounded-full px-4 py-1 text-sm">
                      Child Protection
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Transforming Child Protection with OpenCHS</h3>
                  <p className="text-lg text-gray-500 mb-6">
                    Developing a robust platform for streamlined case management and improved data accessibility.
                  </p>
                  <Link
                    href="/projects/openchs"
                    className="text-navy flex items-center font-semibold text-lg"
                  >
                    Read more <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-ios rounded-xl overflow-hidden hover:shadow-ios-lg transition-all duration-300">
                <div className="aspect-video relative bg-gray-100">
                  <img
                    src="/placeholder.svg?height=300&width=600&text=Project Image"
                    alt="Project Image"
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
                    href="/projects/manufacturing-digital-transformation"
                    className="text-navy flex items-center font-semibold text-lg"
                  >
                    Read more <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-10">
              <Link href="/projects">
                <Button className="bg-navy hover:bg-navy/90 text-white rounded-full text-base py-6 px-8">
                  View All Projects
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
