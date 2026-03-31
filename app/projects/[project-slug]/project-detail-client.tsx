'use client'

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Phone, ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CaseStudyCarousel } from "@/components/case-study-carousel"
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

export default function ProjectDetailClient({ projectData }: { projectData: ProjectData | null }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    reason: [] as string[],
  });

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
            <div className="flex items-center gap-4 mb-6">
              <Link href="/projects" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors">
                <ArrowLeft className="h-4 w-4" /> Projects
              </Link>
              <span className="text-white/20">/</span>
              <Badge className="bg-white/20 hover:bg-white/30 text-white rounded-full px-4 py-1 text-sm">Overview</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mt-4">
              {projectData.title}
            </h1>
            <div className="flex items-center space-x-4 mt-4 text-gray-300 text-sm">
              {projectData.writtenBy && <span>Written by {projectData.writtenBy}</span>}
              {projectData.publishedOn && <span>Published on {projectData.publishedOn}</span>}
            </div>

            {projectData.sections.map((section, index) => (
              <div key={index} className="mt-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">{section.title}</h2>
                <CaseStudyCarousel images={section.images} />
              </div>
            ))}

          </div>
        </section>

        <section id="overview" className="w-full py-16 md:py-28 bg-mesh">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">Overview</h2>
            <div className="space-y-6 text-lg text-gray-700">
              {projectData.overview.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {projectData.challenges && (
          <section id="challenges" className="w-full py-16 md:py-28 bg-mesh-gray">
            <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 text-lg text-gray-700">
                {projectData.challenges.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div className="flex justify-center">
                <div className="w-full aspect-[16/9] rounded-xl overflow-hidden">
                  <img src={projectData.challenges.image} alt="Challenges" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </section>
        )}

         {projectData.solution && (
          <section id="solution" className="w-full py-16 md:py-28 bg-mesh">
            <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-8 items-center">
               <div className="flex justify-center">
                 <div className="w-full aspect-[16/9] rounded-xl overflow-hidden">
                   <img src={projectData.solution.image} alt="Solution" className="w-full h-full object-cover" />
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

         {projectData.results && (
          <section id="results" className="w-full py-16 md:py-28 bg-mesh-gray">
            <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-8 items-center">
               <div className="space-y-6 text-lg text-gray-700">
                {projectData.results.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
               <div className="flex justify-center">
                 <div className="w-full aspect-[16/9] rounded-xl overflow-hidden">
                   <img src={projectData.results.image} alt="Results" className="w-full h-full object-cover" />
                 </div>
              </div>
            </div>
          </section>
         )}

        <section id="contact" className="w-full py-16 md:py-28 bg-mesh-gray">
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
                        Prime Cartons, Mombasa Road, Kenya, next to Nice and Lovely (Dongpeng Building)
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
                      <p className="text-base text-gray-500">0110952788</p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="border-0 shadow-ios rounded-xl bg-mesh-card">
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
                          <input id="reason-enquiry" name="reason" type="checkbox" value="enquiry" checked={formData.reason.includes('enquiry')} onChange={handleChange} className="mr-2" />
                          <label htmlFor="reason-enquiry" className="text-base font-medium">Enquiry</label>
                        </div>
                        <div className="flex items-center">
                          <input id="reason-partnership" name="reason" type="checkbox" value="partnership" checked={formData.reason.includes('partnership')} onChange={handleChange} className="mr-2" />
                          <label htmlFor="reason-partnership" className="text-base font-medium">Partnership</label>
                        </div>
                        <div className="flex items-center">
                          <input id="reason-services-seeking" name="reason" type="checkbox" value="services-seeking" checked={formData.reason.includes('services-seeking')} onChange={handleChange} className="mr-2" />
                          <label htmlFor="reason-services-seeking" className="text-base font-medium">Services Seeking</label>
                        </div>
                        <div className="flex items-center">
                          <input id="reason-consultancy" name="reason" type="checkbox" value="consultancy" checked={formData.reason.includes('consultancy')} onChange={handleChange} className="mr-2" />
                          <label htmlFor="reason-consultancy" className="text-base font-medium">Consultancy</label>
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
