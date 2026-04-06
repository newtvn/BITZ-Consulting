import Link from "next/link"
import { Mail, MessageSquare, Headphones, Linkedin, Twitter, Instagram } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full pt-16 pb-10 bg-mesh-navy text-white">
      <div className="container px-4 md:px-6">
        {/* Main description */}
        <div className="mb-12">
          <p className="text-gray-400 text-base max-w-lg leading-relaxed">
            Building digital public infrastructure for governments and partners to strengthen protection systems.
          </p>
          <div className="mt-4 space-y-1 text-base text-gray-400">
            <p><Link href="mailto:info@bitz-itc.com" className="hover:text-white transition-colors">info@bitz-itc.com</Link></p>
            <p><Link href="mailto:openchs@bitz-itc.com" className="hover:text-white transition-colors">openchs@bitz-itc.com</Link></p>
          </div>
          <div className="flex space-x-4 mt-4">
            <Link href="https://www.linkedin.com/company/bitz-it-consulting/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Linkedin className="h-5 w-5" /><span className="sr-only">LinkedIn</span></Link>
            <Link href="https://x.com/Consulting41793" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Twitter className="h-5 w-5" /><span className="sr-only">X / Twitter</span></Link>
            <Link href="https://www.instagram.com/bitz.itconsulting" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Instagram className="h-5 w-5" /><span className="sr-only">Instagram</span></Link>
            <Link href="mailto:info@bitz-itc.com" className="text-gray-400 hover:text-white"><Mail className="h-5 w-5" /><span className="sr-only">Email</span></Link>
            <Link href="https://wa.me/254110952788" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><MessageSquare className="h-5 w-5" /><span className="sr-only">WhatsApp</span></Link>
            <Link href="tel:0110952788" className="text-gray-400 hover:text-white"><Headphones className="h-5 w-5" /><span className="sr-only">Support</span></Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Product</h3>
            <ul className="space-y-3 text-base text-gray-400">
              <li><Link href="/openchs" className="hover:text-white transition-colors">OpenCHS Platform</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/security" className="hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Company</h3>
            <ul className="space-y-3 text-base text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About BITZ</Link></li>
              <li><Link href="/partners" className="hover:text-white transition-colors">Partners</Link></li>
              <li><Link href="/countries" className="hover:text-white transition-colors">Countries</Link></li>
              <li><Link href="/team" className="hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Resources</h3>
            <ul className="space-y-3 text-base text-gray-400">
              <li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="/insights" className="hover:text-white transition-colors">Insights & Blog</Link></li>
              <li><Link href="/media" className="hover:text-white transition-colors">Media Kit</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Stay Updated */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Stay Updated</h3>
            <p className="text-base text-gray-400">Subscribe for insights on digital protection systems.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-white/30"
              />
              <button className="px-4 py-2 bg-white text-navy rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">&copy; 2026 BITZ IT Consulting Ltd. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-white transition-colors cursor-pointer">Responsible AI</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
