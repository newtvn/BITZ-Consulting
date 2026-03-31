'use client'

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Mail, MessageSquare, Headphones, Globe, MapPin, Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CaseStudyCarousel } from "@/components/case-study-carousel"
import Image from "next/image"
import { useState, useRef } from 'react'
import { toast } from 'sonner'

import emailjs from '@emailjs/browser'

interface ProjectData {
  title: string;
  writtenBy?: string;
  publishedOn?: string;
  sections: {
    title: string;
    id: string;
    images: {
      src: string;
      alt: string;
      title: string;
      description: string;
    }[];
  }[];
  overview: string[];
  challenges: {
    image: string;
    content: string[];
  };
  solution: {
    image: string;
    content: string[];
  };
  results: {
    image: string;
    content: string[];
  };
}

const projectsData: { [key: string]: ProjectData } = {
  "openchs": {
    title: "OPENCHS - A Child Helpline System",
    writtenBy: "BITZ-itc Team",
    publishedOn: "4th July 2023", 
    sections: [
      {
        title: "Key Features",
        id: "features",
        images: [
          {
            src: "/projects/project1.png",
            alt: "Call Management Feature",
            title: "Call Management",
            description: "Inbound and Outbound Call Handling"
          },
           {
            src: "/projects/project1.png",
            alt: "Case Management Feature",
            title: "Case Management",
            description: "Case Creation and Tracking"
          },
           {
            src: "/placeholder.svg?height=300&width=600&text=Quality Assurance Image",
            alt: "Quality Assurance Feature",
            title: "Quality Assurance",
            description: "Call and Case Evaluation"
          },
           {
            src: "/placeholder.svg?height=300&width=600&text=Reporting Image",
            alt: "Reporting and Analytics Feature",
            title: "Reporting and Analytics",
            description: "Customizable Reports"
          }
        ],
      },
      {
        title: "Integration Capabilities",
        id: "integrations",
        images: [
          {
            src: "/projects/project1.png",
            alt: "Dashboards Feature",
            title: "Dashboards",
            description: "Real-Time Dashboards"
          },
          {
            src: "/projects/project1.png",
            alt: "CRM Integration Feature",
            title: "3rd Party Integrations",
            description: "CRM Integration"
          },
          {
            src: "/projects/project1.png",
            alt: "API Integration Feature",
            title: "Secure & Scalable API Integrations",
            description: "Securely exchange data with other key systems."
          },
           {
            src: "/projects/project1.png",
            alt: "Chatbot Integration Feature",
            title: "Mental Health Support & Chatbot Integration",
            description: "Integrates with mental health support systems, including AI-driven chatbots."
          }
        ],
      },
      {
        title: "System Capabilities",
        id: "system-capabilities",
        images: [
          {
            src: "/placeholder.svg?height=300&width=600&text=Security Image",
            alt: "Security Feature",
            title: "Enhanced Data Security & Confidentiality",
            description: "Protect sensitive case information with built-in security protocols.",
          },
           {
            src: "/placeholder.svg?height=300&width=600&text=Notifications Image",
            alt: "Notifications Feature",
            title: "Automated Notifications & Case Escalation",
            description: "Keep teams informed and responsive with automated notifications and alerts.",
          },
        ],
      },
    ],
    overview: [
      "OPENCHS is a comprehensive child helpline system that provides a safe and confidential environment for children. It offers a range of services including 24/7 availability, a toll-free hotline, multilingual support, anonymity and confidentiality, and immediate response.",
      "The system is designed to streamline case management from intake to resolution with configurable workflows, real-time updates, and secure data management. It also integrates seamlessly with call centers and various communication channels, ensuring efficient triage and escalation.",
    ],
    challenges: {
      image: "projects/project1.png",
      content: [
        "Integrating with varying levels of technological infrastructure in target regions.",
        "Providing extensive user training across diverse skill levels.",
        "Ensuring data security and privacy in sensitive contexts.",
      ]
    },
    solution: {
      image: "projects/project1.png",
      content: [
        "Developed a user-friendly interface accessible via a mobile application with offline capabilities.",
        "Provided hands-on training and designed a user-friendly interface tailored to diverse skill levels.",
        "Implemented robust security measures, encryption, role-based access control, and secure backup and recovery processes.",
      ]
    },
     results: {
      image: "projects/project1.png",
      content: [
        "Enhanced the efficiency and responsiveness of child protection services.",
        "Improved case handling, real-time monitoring, and data-driven decision-making.",
        "Increased capacity to handle child protection cases efficiently.",
        "Leading to faster case resolution and better outcomes for vulnerable children.",
      ]
    },
  },
  "case-management-legal": {
    title: "Case Management - Legal",
    writtenBy: "BITZ-itc Team",
    publishedOn: "", // Date can be added here
     sections: [
      {
        title: "Key Features",
        id: "features",
        images: [
          {
            src: "/placeholder.svg?height=300&width=600&text=Auth Image",
            alt: "Authentication & Authorization Feature",
            title: "Authentication & Authorization",
            description: "Secure User Access"
          },
           {
            src: "/placeholder.svg?height=300&width=600&text=Case Handling Image",
            alt: "Case Handling Feature",
            title: "Case Management & Profiling",
            description: "Comprehensive Case Handling"
          },
           {
            src: "/placeholder.svg?height=300&width=600&text=Parties Profiling Image",
            alt: "Case Parties Profiling Feature",
            title: "Case Parties Profiling",
            description: "Advocate & Magistrate Profiles"
          },
           {
            src: "/placeholder.svg?height=300&width=600&text=Court Profile Image",
            alt: "Court Profile Feature",
            title: "Court Profile",
            description: "Court Information Management"
          }
        ],
      },
       {
        title: "Tracking and Reporting",
        id: "tracking-reporting",
        images: [
          {
            src: "/placeholder.svg?height=300&width=600&text=File Tracking Image",
            alt: "File Tracking Feature",
            title: "Management Tracking of Files Movement",
            description: "Real-time Case File Tracking"
          },
           {
            src: "/placeholder.svg?height=300&width=600&text=Fees Management Image",
            alt: "Fees Management Feature",
            title: "Administration of Legal Fees",
            description: "Legal Fee Management"
          },
           {
            src: "/placeholder.svg?height=300&width=600&text=Legal Reports Image",
            alt: "Legal Reports Feature",
            title: "Reports",
            description: "Detailed Case Reporting"
          }
        ],
      },
    ],
    overview: [
      "The Case Management System is designed to streamline the process of managing legal cases by providing a centralized platform for case management and case-related data.",
      "It offers features for secure user access, comprehensive case handling with detailed history, and profiling for legal professionals and courts involved in cases.",
    ],
     challenges: {
      image: "projects/project1.png",
      content: [
        "Ensuring secure and authorized access to sensitive legal data.",
        "Managing and tracking a large volume of case files and their movement.",
        "Generating customized reports for various legal metrics.",
      ]
    },
    solution: {
      image: "projects/project1.png",
      content: [
        "Implemented robust authentication and authorization mechanisms.",
        "Developed a centralized platform with real-time tracking of case file movement.",
        "Provided customizable reporting tools for detailed case analysis.",
      ]
    },
    results: {
      image: "projects/project1.png",
      content: [
        "Improved efficiency in legal case management.",
        "Enhanced data security and access control.",
        "Streamlined tracking of case files and legal fees.",
        "Facilitated data-driven decision-making with comprehensive reporting.",
      ]
    },
  },
  "crm-saccos": {
    title: "CRM for SACCOS",
    writtenBy: "BITZ-itc Team",
    publishedOn: "", // Date can be added here
     sections: [
      {
        title: "Core CRM Features",
        id: "core-crm",
        images: [
          {
            src: "/placeholder.svg?height=300&width=600&text=Customer Management Image",
            alt: "Customer Management Feature",
            title: "Customer Management",
            description: "Comprehensive Member Database"
          },
           {
            src: "/placeholder.svg?height=300&width=600&text=Interaction Tracking Image",
            alt: "Interaction Tracking Feature",
            title: "Interaction Tracking",
            description: "Member Interaction History"
          },
           {
            src: "/placeholder.svg?height=300&width=600&text=Lead Management Image",
            alt: "Lead Management Feature",
            title: "Lead Management",
            description: "Lead Capture & Conversion"
          },
           {
            src: "/placeholder.svg?height=300&width=600&text=Campaign Management Image",
            alt: "Campaign Management Feature",
            title: "Campaign Management",
            description: "Marketing Campaign Automation"
          }
        ],
      },
       {
        title: "Support and Analytics",
        id: "support-analytics",
        images: [
          {
            src: "/placeholder.svg?height=300&width=600&text=Call Center Integration Image",
            alt: "Call Center Integration Feature",
            title: "Call Center Integration",
            description: "Seamless Call Center Integration"
          },
           {
            src: "/placeholder.svg?height=300&width=600&text=Ticketing System Image",
            alt: "Ticketing System Feature",
            title: "Ticketing System",
            description: "Member Support Ticketing"
          },
           {
            src: "/placeholder.svg?height=300&width=600&text=CRM Reporting Image",
            alt: "CRM Reporting and Analytics Feature",
            title: "Reporting and Analytics",
            description: "Data-Driven Insights"
          }
        ],
      },
    ],
    overview: [
      "CRM for SACCOS is a comprehensive software platform that simplifies and automates the entire lifecycle of Sacco operations.",
      "It provides features for comprehensive member management, interaction tracking, lead and campaign management to optimize member engagement and growth.",
    ],
     challenges: {
       image: "/placeholder.svg?height=400&width=600&text=CRM Challenges Image",
       content: [
        "Maintaining a detailed and organized database of Sacco members and their interactions.",
        "Tracking and converting potential leads effectively.",
        "Generating insightful reports on member behavior and campaign performance.",
      ]
    },
    solution: {
       image: "/placeholder.svg?height=400&width=600&text=CRM Solution Image",
       content: [
        "Implemented a centralized member database with detailed profiling and interaction history tracking.",
        "Developed automated lead nurturing and conversion processes.",
        "Provided comprehensive reporting and analytics tools for data-driven decision-making.",
      ]
    },
    results: {
      image: "/placeholder.svg?height=400&width=600&text=CRM Results Image",
      content: [
        "Improved member management and personalized service.",
        "Increased efficiency in lead capture and conversion.",
        "Enhanced marketing campaign effectiveness.",
        "Gained valuable insights into member behavior and Sacco performance.",
      ]
    },
  },
   "edms": {
    title: "Electronic Document Management System (EDMS)",
    writtenBy: "BITZ-itc Team",
    publishedOn: "", // Date can be added here
     sections: [
      {
        title: "Core Document Management Features",
        id: "core-features",
        images: [
          {
            src: "/placeholder.svg?height=300&width=600&text=Search Image",
            alt: "Search and Retrieval Feature",
            title: "Search and Retrieval",
            description: "Advanced Search Capabilities"
          },
           {
            src: "/placeholder.svg?height=300&width=600&text=Version Control Image",
            alt: "Version Control Feature",
            title: "Version Control",
            description: "Track Changes & Revisions"
          },
           {
            src: "/placeholder.svg?height=300&width=600&text=Storage Image",
            alt: "Storage and Organization Feature",
            title: "Storage and Organization",
            description: "Centralized Document Repository"
          },
           {
            src: "/placeholder.svg?height=300&width=600&text=Workflow Image",
            alt: "Workflow Automation Feature",
            title: "Workflow Automation",
            description: "Automated Document Workflows"
          }
        ],
      },
       {
        title: "Security and Compliance",
        id: "security-compliance",
        images: [
          {
            src: "/placeholder.svg?height=300&width=600&text=Document Capture Image",
            alt: "Document Capture Feature",
            title: "Document Capture",
            description: "Digitization & Electronic Import"
          },
           {
            src: "/placeholder.svg?height=300&width=600&text=Access Control Image",
            alt: "Access Control Feature",
            title: "Access Control",
            description: "Role-Based Permissions"
          },
           {
            src: "/placeholder.svg?height=300&width=600&text=Compliance Image",
            alt: "Compliance and Security Feature",
            title: "Compliance and Security",
            description: "Regulatory Compliance & Security"
          },
           {
            src: "/placeholder.svg?height=300&width=600&text=Audit Trails Image",
            alt: "Audit Trails Feature",
            title: "Audit Trails",
            description: "Detailed Document Access Logs"
          }
        ],
      },
    ],
    overview: [
      "The EDMS is designed to enhance document storage, retrieval, and security by providing an efficient platform for managing digital documents.",
      "It enables organizations to store, track, and manage electronic documents with advanced features for search, version control, organization, and workflow automation.",
    ],
     challenges: {
      image: "/placeholder.svg?height=400&width=600&text=EDMS Challenges Image",
      content: [
        "Ensuring efficient and secure storage and retrieval of digital documents.",
        "Maintaining version control and tracking changes to documents.",
        "Automating document workflows and ensuring compliance with regulations.",
      ]
    },
    solution: {
      image: "/placeholder.svg?height=400&width=600&text=EDMS Solution Image",
       content: [
        "Implemented a centralized document repository with advanced search and retrieval capabilities.",
        "Provided robust version control and audit trail features.",
        "Developed automated workflow and compliance monitoring tools.",
      ]
    },
    results: {
       image: "/placeholder.svg?height=400&width=600&text=EDMS Results Image",
       content: [
        "Improved efficiency in document management.",
        "Enhanced document security and compliance.",
        "Streamlined document workflows and collaboration.",
        "Gained better control and visibility over digital documents.",
      ]
    },
  },
    "contract-management": {
    title: "Contract Management System",
    writtenBy: "BITZ-itc Team",
    publishedOn: "", // Date can be added here
     sections: [
      {
        title: "Contract Lifecycle Stages",
        id: "lifecycle-stages",
        images: [
          {
            src: "/placeholder.svg?height=300&width=600&text=Contract Creation Image",
            alt: "Contract Creation Feature",
            title: "Contract Creation",
            description: "Request Initiation, Drafting, Collaboration Tools, Template Management"
          },
           {
            src: "/placeholder.svg?height=300&width=600&text=Contract Negotiation Image",
            alt: "Contract Negotiation Feature",
            title: "Contract Negotiation",
            description: "Term Negotiation, Commenting & Redlining, Version Control"
          },
           {
            src: "/placeholder.svg?height=300&width=600&text=Contract Review Image",
            alt: "Contract Review & Approval Feature",
            title: "Contract Review & Approval",
            description: "Approval Workflows, Automated Alerts, Audit Trails"
          },
           {
            src: "/placeholder.svg?height=300&width=600&text=Contract Signing Image",
            alt: "Contract Signing Feature",
            title: "Contract Signing",
            description: "E-signatures, Multi-party Signing, Signature Authentication"
          }
        ],
      },
       {
        title: "Management and Compliance",
        id: "management-compliance",
        images: [
          {
            src: "/placeholder.svg?height=300&width=600&text=Contract Storage Image",
            alt: "Contract Storage & Organization Feature",
            title: "Contract Storage & Organization",
            description: "Centralized Repository, Document Organization, Version Control"
          },
           {
            src: "/placeholder.svg?height=300&width=600&text=Compliance Monitoring Image",
            alt: "Contract Compliance Monitoring Feature",
            title: "Contract Compliance Monitoring",
            description: "Obligation Tracking, Automated Reminders, Risk Management"
          },
           {
            src: "/placeholder.svg?height=300&width=600&text=Contract Security Image",
            alt: "Contract Security Feature",
            title: "Document Security & Access Control",
            description: "Protect sensitive contract information with built-in security protocols."
          },
           {
            src: "/placeholder.svg?height=300&width=600&text=Contract Audit Image",
            alt: "Contract Audit Trails Feature",
            title: "Audit Trails & Tracking",
            description: "Maintain comprehensive audit logs to track contract access and history."
          }
        ],
      },
    ],
    overview: [
      "A comprehensive platform for managing contracts from creation through execution, compliance, renewal, and closeout, ensuring compliance and optimizing performance.",
      "It streamlines contract creation, negotiation, review, and signing with collaboration tools, version control, and e-signature capabilities.",
    ],
     challenges: {
      image: "/placeholder.svg?height=400&width=600&text=Contract Challenges Image",
      content: [
        "Managing the entire contract lifecycle efficiently from creation to closeout.",
        "Ensuring compliance with contractual obligations and regulatory requirements.",
        "Tracking contract performance and identifying potential risks.",
      ]
    },
    solution: {
      image: "/placeholder.svg?height=400&width=600&text=Contract Solution Image",
      content: [
        "Implemented a centralized platform with automated workflows for each stage of the contract lifecycle.",
        "Provided tools for obligation tracking, automated reminders, and risk management.",
        "Developed reporting and analytics capabilities to monitor contract performance.",
      ]
    },
    results: {
      image: "/placeholder.svg?height=400&width=600&text=Contract Results Image",
      content: [
        "Improved efficiency in contract management processes.",
        "Enhanced compliance with contractual obligations and regulations.",
        "Reduced risks associated with contracts.",
        "Gained better visibility and control over the contract portfolio.",
      ]
    },
  },
};

export default function ProjectOverviewPage({
  params,
}: {params: { "project-slug": string }}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    reason: [] as string[],
  });

  const projectData = projectsData[params['project-slug']];

  if (!projectData) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center">
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-navy">Project Not Found</h1>
            <p className="text-lg text-gray-500 mt-4">The requested project could not be found.</p>
            <Link href="/projects" passHref>
              <Button className="mt-8 bg-navy hover:bg-navy/90 text-white rounded-full text-base py-6 px-8">
                Back to Projects
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message || formData.reason.length === 0) {
       toast.error('Please fill out all required fields and select a reason.');
       setIsSubmitting(false);
       return;
    }

    const serviceId = 'service_fop0jwq';
    const templateId = 'template_ojykqwj';
    const publicKey = 'chyeh0dVMSnjhLRVq';

    if (form.current) {
      try {
        await emailjs.sendForm(serviceId, templateId, form.current, publicKey);

        toast.success('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
          reason: [],
        });
      } catch (error) {
        console.error('Error sending email:', error);
        toast.error('Failed to send message. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
       toast.error('Form reference not found.');
       setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const { name, value, type } = target;

    if (name === 'reason' && type === 'checkbox') {
      const checkbox = target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        reason: checkbox.checked
          ? [...prev.reason, value]
          : prev.reason.filter(r => r !== value),
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-navy text-white">
          <div className="container px-4 md:px-6">
            <Badge className="bg-white/20 hover:bg-white/30 text-white rounded-full px-4 py-1 text-sm">Project Overview</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mt-4">
              {projectData.title}
            </h1>
            <div className="flex items-center space-x-4 mt-4 text-gray-300 text-sm">
              {projectData.writtenBy && <span>Written by {projectData.writtenBy}</span>}
              {projectData.publishedOn && <span>Published on {projectData.publishedOn}</span>}
            </div>

            {/* Render sections with carousels and read more buttons */}
            {projectData.sections.map((section, index) => (
              <div key={index} className="mt-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">{section.title}</h2>
                <CaseStudyCarousel images={section.images} />
                {/* <div className="flex justify-center mt-6">
                  <Link href={`#${section.id}`} passHref>
                    <Button className="bg-white/20 hover:bg-white/30 text-white rounded-full text-base py-6 px-8">
                      Read More <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div> */}
              </div>
            ))}

          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="w-full py-16 md:py-28 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">Overview</h2>
            <div className="space-y-6 text-lg text-gray-700">
              {projectData.overview.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        {projectData.challenges && (
          <section id="challenges" className="w-full py-16 md:py-28 bg-gray-50">
            <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 text-lg text-gray-700">
                {projectData.challenges.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div className="flex justify-center">
                <div className="w-full aspect-[16/9] bg-gray-100 rounded-xl flex items-center justify-center">
                  <p className="text-gray-500">Challenges Image Coming Soon</p>
                </div>
              </div>
            </div>
          </section>
        )}

         {/* Solution Section */}
         {projectData.solution && (
          <section id="solution" className="w-full py-16 md:py-28 bg-white">
            <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-8 items-center">
               <div className="flex justify-center">
                 <div className="w-full aspect-[16/9] bg-gray-100 rounded-xl flex items-center justify-center">
                   <p className="text-gray-500">Solution Image Coming Soon</p>
                 </div>
              </div>
              <div className="space-y-6 text-lg text-gray-700">
                {projectData.solution.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>
         )}

         {/* Results Section */}
         {projectData.results && (
          <section id="results" className="w-full py-16 md:py-28 bg-gray-50">
            <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-8 items-center">
               <div className="space-y-6 text-lg text-gray-700">
                {projectData.results.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
               <div className="flex justify-center">
                 <div className="w-full aspect-[16/9] bg-gray-100 rounded-xl flex items-center justify-center">
                   <p className="text-gray-500">Results Image Coming Soon</p>
                 </div>
              </div>
            </div>
          </section>
         )}


        {/* Contact Section */}
        <section id="contact" className="w-full py-16 md:py-28 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
              <div className="space-y-4">
                <Badge className="bg-navy hover:bg-navy/90 rounded-full px-4 py-1 text-sm">Get In Touch</Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Contact Us</h2>
                <p className="text-lg md:text-xl text-gray-500">
                  Have questions or ready to start your next project? Reach out to our team.
                </p>
                <div className="grid gap-6 mt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Address</h3>
                      <p className="text-base text-gray-500">
                        123 Tech Boulevard, Innovation City, 10001
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Email</h3>
                      <p className="text-base text-gray-500">info@bitz-itc.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Phone</h3>
                      <p className="text-base text-gray-500">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="border-0 shadow-ios rounded-xl">
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Send us a message</h3>
                    <p className="text-base text-gray-500">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </div>
                  <form ref={form} onSubmit={handleSubmit} className="grid gap-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-base font-medium">
                          First name
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full p-3 text-base border rounded-lg"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-base font-medium">
                          Last name
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full p-3 text-base border rounded-lg"
                          placeholder="Smith"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-base font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 text-base border rounded-lg"
                        placeholder="john.smith@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-base font-medium">Reason for connecting</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div className="flex items-center">
                          <input
                            id="reason-enquiry"
                            name="reason"
                            type="checkbox"
                            value="enquiry"
                            checked={formData.reason.includes('enquiry')}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <label htmlFor="reason-enquiry" className="text-base font-medium">
                            Enquiry
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="reason-partnership"
                            name="reason"
                            type="checkbox"
                            value="partnership"
                            checked={formData.reason.includes('partnership')}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <label htmlFor="reason-partnership" className="text-base font-medium">
                            Partnership
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="reason-services-seeking"
                            name="reason"
                            type="checkbox"
                            value="services-seeking"
                            checked={formData.reason.includes('services-seeking')}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <label htmlFor="reason-services-seeking" className="text-base font-medium">
                            Services Seeking
                          </label>
                        </div>
                         <div className="flex items-center">
                          <input
                            id="reason-consultancy"
                            name="reason"
                            type="checkbox"
                            value="consultancy"
                            checked={formData.reason.includes('consultancy')}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <label htmlFor="reason-consultancy" className="text-base font-medium">
                            Consultancy
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-base font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full p-4 text-base border rounded-xl min-h-[150px]"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-navy hover:bg-navy/90 text-white rounded-full text-base py-6"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 