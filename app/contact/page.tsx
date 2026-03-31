'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Phone, Mail, MessageSquare } from 'lucide-react'
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

  const whatsappNumber = '254110952788';
  const phoneNumber = '0110952788';
  const emailAddress = 'info@bitz-itc.com';
  const address = 'Prime Cartons, Mombasa Road, Kenya, next to Nice and Lovely (Dongpeng Building)';

  const handleWhatsAppChat = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  const handleCallSupport = () => {
    window.open(`tel:${phoneNumber}`);
  };

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
        setFormData({ firstName: '', lastName: '', email: '', company: '', message: '', reason: [] });
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
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const reasons = ['Enquiry', 'Partnership', 'Services Seeking', 'Consultancy'];

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 bg-mesh">

        {/* Hero */}
        <header className="max-w-7xl mx-auto px-6 pt-16 md:pt-28 pb-20 md:pb-32">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Get In Touch</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-navy leading-[0.9]">
              Let's talk<span className="text-navy/40">.</span>
            </h1>
            <p className="mt-8 text-lg text-gray-500 max-w-xl leading-relaxed">
              Have questions or ready to start your next project? We'd love to hear from you.
            </p>
          </div>
        </header>

        {/* Contact Grid */}
        <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-start">

            {/* Form */}
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Send a Message</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy mb-2">Write to us</h2>
              <p className="text-gray-500 text-base mb-10">We'll get back to you within 24 hours.</p>

              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label htmlFor="firstName" className="text-sm font-medium text-gray-500">First name</label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full p-3 text-base border border-navy/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-navy bg-white"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="lastName" className="text-sm font-medium text-gray-500">Last name</label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full p-3 text-base border border-navy/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-navy bg-white"
                      placeholder="Doe"
                    />
                  </div>
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
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="company" className="text-sm font-medium text-gray-500">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-3 text-base border border-navy/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-navy bg-white"
                    placeholder="Your Company"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500">Reason for connecting</label>
                  <div className="flex flex-wrap gap-3">
                    {reasons.map((reason) => (
                      <label key={reason} className="flex items-center gap-2 cursor-pointer">
                        <input
                          name="reason"
                          type="checkbox"
                          value={reason}
                          checked={formData.reason.includes(reason)}
                          onChange={handleChange}
                          className="accent-navy"
                        />
                        <span className="text-base text-gray-600">{reason}</span>
                      </label>
                    ))}
                  </div>
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
                    placeholder="Tell us about your project..."
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
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy mb-10">Find us</h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-medium text-base text-navy">Address</h3>
                      <p className="text-base text-gray-500">{address}</p>
                      <DirectionButtons address={address} />
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-medium text-base text-navy">Phone</h3>
                      <p className="text-base text-gray-500">{phoneNumber}</p>
                      <ContactButtons email={emailAddress} phone={phoneNumber} />
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-medium text-base text-navy">Email</h3>
                      <p className="text-base text-gray-500">{emailAddress}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="border-t border-navy/10 pt-10">
                <h3 className="text-lg font-bold text-navy mb-6">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-base">
                    <span className="text-gray-500">Monday — Friday</span>
                    <span className="font-medium text-navy">9:00 AM — 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-base">
                    <span className="text-gray-500">Saturday</span>
                    <span className="font-medium text-navy">10:00 AM — 4:00 PM</span>
                  </div>
                  <div className="flex justify-between text-base">
                    <span className="text-gray-500">Sunday</span>
                    <span className="font-medium text-navy">Closed</span>
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
