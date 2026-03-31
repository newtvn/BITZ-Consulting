'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from 'lucide-react'
// import { CaseStudyCarousel } from "@/components/case-study-carousel"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Code, Server, Database } from "lucide-react"

export default function ProjectsPage() {
  // In a real application, you would fetch a list of projects here
  const projects = [
    {
      slug: "openchs",
      title: "OPENCHS - A Child Helpline System",
      category: "Child Protection",
      description: "OPENCHS is a comprehensive child helpline system that provides a safe and confidential environment for children.",
      image: "/projects/project1.png",
    },
    {
      slug: "case-management-legal",
      title: "Case Management - Legal",
      category: "Legal",
      description: "The Case Management System is designed to streamline the process of managing legal cases by providing a centralized platform for case management and case-related data.",
      image: "/placeholder.svg?height=300&width=600&text=Legal Case Management Image",
    },
     {
      slug: "crm-saccos",
      title: "CRM for SACCOS",
      category: "CRM, Finance",
      description: "CRM for SACCOS is a comprehensive software platform that simplifies and automates the entire lifecycle of Sacco operations.",
      image: "/placeholder.svg?height=300&width=600&text=CRM for SACCOS Image",
    },
     {
      slug: "edms",
      title: "Electronic Document Management System (EDMS)",
      category: "Document Management",
      description: "The EDMS is designed to enhance document storage, retrieval, and security by providing an efficient platform for managing digital documents.",
      image: "/placeholder.svg?height=300&width=600&text=EDMS Image",
    },
      {
      slug: "contract-management",
      title: "Contract Management System",
      category: "Contract Management",
      description: "A comprehensive platform for managing contracts from creation through execution, compliance, renewal, and closeout, ensuring compliance and optimizing performance.",
      image: "/placeholder.svg?height=300&width=600&text=Contract Management Image",
    },
    // Add more projects here
  ]

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-16 md:py-28 lg:py-32 bg-navy text-white">
          <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <Badge className="bg-white/20 hover:bg-white/30 text-white rounded-full px-4 py-1 text-sm">Our Projects</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mt-4">
                Explore Our Projects
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mt-4">
                Discover the impact of our work through our featured projects.
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
                      <Server className="h-24 w-24 text-white/80" />
                    </div>
                </CarouselItem>
                 <CarouselItem>
                   <div className="relative w-full aspect-video bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-xl shadow-ios-lg flex items-center justify-center">
                      <Database className="h-24 w-24 text-white/80" />
                    </div>
                </CarouselItem>
              </CarouselContent>
               <CarouselPrevious className="bg-white/20 hover:bg-white/30 text-white border-none" />
              <CarouselNext className="bg-white/20 hover:bg-white/30 text-white border-none" />
              </Carousel>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-28 bg-white animate-fade-in">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.slug} className="border-0 shadow-ios rounded-xl overflow-hidden hover:shadow-ios-lg transition-all duration-300">
                  {/* Use the CaseStudyCarousel component for project images */}
                  <div className="aspect-video relative bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardContent className="p-8">
                    <div className="mb-3">
                      <Badge className="bg-navy/10 text-navy hover:bg-navy/20 rounded-full px-4 py-1 text-sm">
                        {project.category}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-lg text-gray-500 mb-6">
                      {project.description}
                    </p>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-navy flex items-center font-semibold text-lg"
                    >
                      Read more <ArrowRight className="h-5 w-5 ml-2" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 