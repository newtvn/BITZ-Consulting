'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ChevronRight, Globe, Mail, MessageSquare, Headphones, MapPin, Phone } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useState, useRef } from 'react'
import { toast } from 'sonner'
import emailjs from '@emailjs/browser'
import { DirectionButtons } from "@/components/direction-buttons"
import { ContactButtons } from "@/components/contact-buttons"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
    reason: [] as string[],
  });

  const whatsappNumber = '254110952788'; // WhatsApp number
  const phoneNumber = '0110952788'; // Phone number for direct call
  const emailAddress = 'newtonbryan12428@gmail.com'; // Email address
  const address = 'Prime Cartons, Mombasa Road, Kenya, next to Nice and Lovely (Dongpeng Building)'; // New address
  const encodedAddress = encodeURIComponent(address); // Encoded address for map links
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  const wazeUrl = `https://waze.com/ul?q=${encodedAddress}`;
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodedAddress}`; // Google Maps Embed URL

  const handleWhatsAppChat = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallSupport = () => {
    window.open(`tel:${phoneNumber}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message || formData.reason.length === 0) {
       toast.error('Please fill out all required fields and select a reason.');
       setIsSubmitting(false);
       return;
    }

    // EmailJS service details - REPLACE WITH YOUR ACTUAL IDs AND PUBLIC KEY
    const serviceId = 'service_fop0jwq'; // Replace with your EmailJS Service ID
    const templateId = 'template_ojykqwj'; // Replace with your EmailJS Template ID
    const publicKey = 'chyeh0dVMSnjhLRVq'; // Replace with your EmailJS Public Key

    if (form.current) {
      try {
        // Send email using EmailJS
        await emailjs.sendForm(serviceId, templateId, form.current, publicKey);

        toast.success('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
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
      const checkbox = target as HTMLInputElement; // Assert to HTMLInputElement
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
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-navy text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                  Get in Touch
                </h1>
                <p className="text-xl md:text-2xl text-gray-300">
                  Let's discuss how we can help transform your business
                </p>
              </div>
              <div className="flex justify-center">
                <Carousel className="w-full max-w-[500px]">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="relative w-full aspect-video bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-xl shadow-ios-lg flex items-center justify-center">
                        <MessageSquare className="h-24 w-24 text-white/80" />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="relative w-full aspect-video bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-xl shadow-ios-lg flex items-center justify-center">
                        <Mail className="h-24 w-24 text-white/80" />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="relative w-full aspect-video bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-xl shadow-ios-lg flex items-center justify-center">
                        <Phone className="h-24 w-24 text-white/80" />
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

        <section className="w-full py-16 md:py-28 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-navy hover:bg-navy/90 rounded-full px-4 py-1 text-sm">Contact Us</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                    Let's Start a Conversation
                  </h2>
                  <p className="text-lg text-gray-500">
                    Fill out the form and we'll get back to you within 24 hours
                  </p>
                </div>
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                      placeholder="Your Company"
                    />
                  </div>
                   {/* Reason for Connecting Checkboxes */}
                    <div className="space-y-2">
                      <label className="text-base font-medium">Reason for connecting</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div className="flex items-center">
                          <input
                            id="reason-enquiry"
                            name="reason"
                            type="checkbox"
                            value="Enquiry"
                            checked={formData.reason.includes('Enquiry')}
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
                            value="Partnership"
                            checked={formData.reason.includes('Partnership')}
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
                            value="Services Seeking"
                            checked={formData.reason.includes('Services Seeking')}
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
                            value="Consultancy"
                            checked={formData.reason.includes('Consultancy')}
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
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy min-h-[150px]"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-navy hover:bg-navy/90 text-white rounded-lg text-base py-6">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
              <div className="space-y-8">
                <Card className="border-0 shadow-ios rounded-xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-full bg-navy/10">
                          <MapPin className="h-6 w-6 text-navy" />
                        </div>
                        <div>
                          <h4 className="font-medium">Address</h4>
                          <p className="text-base text-gray-500">
                            {address}
                          </p>
                          <DirectionButtons address={address} />
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-full bg-navy/10">
                          <Phone className="h-6 w-6 text-navy" />
                        </div>
                        <div>
                          <h4 className="font-medium">Phone</h4>
                          <p className="text-gray-500">
                            {phoneNumber}
                          </p>
                          <ContactButtons email={emailAddress} phone={phoneNumber} />
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-full bg-navy/10">
                          <Mail className="h-6 w-6 text-navy" />
                        </div>
                        <div>
                          <h4 className="font-medium">Email</h4>
                          <p className="text-gray-500">
                            {emailAddress}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-ios rounded-xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Business Hours</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Monday - Friday</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Saturday</span>
                        <span className="font-medium">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Sunday</span>
                        <span className="font-medium">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-28 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-navy hover:bg-navy/90 rounded-full px-4 py-1 text-sm">Support</Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                  Need Immediate Assistance?
                </h2>
                <p className="text-lg text-gray-500 max-w-[900px]">
                  Our support team is available to help you with any questions or concerns
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button className="bg-navy hover:bg-navy/90 text-white rounded-full text-base py-6 px-8"
                  onClick={handleCallSupport}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Support
                </Button>
                <Button className="bg-white text-navy hover:bg-gray-100 rounded-full text-base py-6 px-8"
                  onClick={handleWhatsAppChat}
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Live Chat
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 