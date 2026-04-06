'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MessageSquare, Clock } from 'lucide-react'
import { useState, useRef } from 'react'
import { toast } from 'sonner'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    country: '',
    interestArea: '',
    message: '',
  });

  const whatsappNumber = '254110952788';
  const phoneNumber = '0110952788';

  const handleWhatsAppChat = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  const handleCallSupport = () => {
    window.open(`tel:${phoneNumber}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill out all required fields.');
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
        setFormData({ name: '', email: '', organization: '', country: '', interestArea: '', message: '' });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const interestAreas = [
    'Helpline & Case Management',
    'PSEA Reporting',
    'Labor & Immigration Protection',
    'Complaints & Grievance',
    'OpenCHS / Product Demo',
    'Consulting / Assessment / Proposal',
    'Partnership',
    'General Inquiry',
  ];

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 bg-mesh">

        {/* Hero */}
        <header className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-16 md:pt-28 pb-20 md:pb-32">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Get In Touch</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-navy leading-[0.9]">
              Contact Us<span className="text-navy/40">.</span>
            </h1>
            <p className="mt-8 text-lg text-gray-500 max-w-xl leading-relaxed">
              Reach out for demos, partnerships, or general inquiries about BITZ and OpenCHS.
            </p>
          </div>
        </header>

        {/* Contact Grid */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-20 md:pb-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-start">

            {/* Form */}
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Send a Message</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy mb-2">Get in Touch</h2>
              <p className="text-gray-500 text-base mb-10">Reach out for demos, partnerships, or general inquiries.</p>

              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm font-medium text-gray-500">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 text-base border border-navy/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-navy bg-white"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm font-medium text-gray-500">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 text-base border border-navy/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-navy bg-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label htmlFor="organization" className="text-sm font-medium text-gray-500">Organization</label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full p-3 text-base border border-navy/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-navy bg-white"
                      placeholder="Your organization"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="country" className="text-sm font-medium text-gray-500">Country</label>
                    <input
                      id="country"
                      name="country"
                      type="text"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full p-3 text-base border border-navy/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-navy bg-white"
                      placeholder="Your country"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="interestArea" className="text-sm font-medium text-gray-500">Interest Area</label>
                  <select
                    id="interestArea"
                    name="interestArea"
                    value={formData.interestArea}
                    onChange={handleChange}
                    className="w-full p-3 text-base border border-navy/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-navy bg-white text-gray-600"
                  >
                    <option value="">Select an area of interest</option>
                    {interestAreas.map((area) => (
                      <option key={area} value={area}>{area}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1">
                  <label htmlFor="message" className="text-sm font-medium text-gray-500">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 text-base border border-navy/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-navy min-h-[140px] bg-white"
                    placeholder="How can we help you?"
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full bg-navy hover:bg-navy/90 text-white rounded-full text-base py-6 font-medium">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Contact Information</span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy mb-10">Reach Us</h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-medium text-base text-navy">General Inquiries</h3>
                      <p className="text-base text-gray-500">info@bitz-itc.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-medium text-base text-navy">OpenCHS / Product</h3>
                      <p className="text-base text-gray-500">openchs@bitz-itc.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-medium text-base text-navy">Response Time</h3>
                      <p className="text-base text-gray-500">We typically respond within 1–2 business days.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="border-t border-navy/10 pt-10">
                <h3 className="text-lg font-bold text-navy mb-6">Need Immediate Help?</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleCallSupport}
                    className="inline-flex items-center justify-center gap-2 text-base font-semibold text-navy border border-navy/10 rounded-full px-6 py-3 hover:bg-navy hover:text-white transition-all duration-300"
                  >
                    <Phone className="h-4 w-4" /> Call Support
                  </button>
                  <button
                    onClick={handleWhatsAppChat}
                    className="inline-flex items-center justify-center gap-2 text-base font-semibold text-navy border border-navy/10 rounded-full px-6 py-3 hover:bg-navy hover:text-white transition-all duration-300"
                  >
                    <MessageSquare className="h-4 w-4" /> WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
