import Link from "next/link"
import { Mail, MessageSquare, Headphones, Globe } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full pt-16 pb-10 bg-mesh-navy text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/Bitz logo.png"
                alt="BITZ-itc Logo"
                width={200}
                height={250}
                className="object-contain h-28 w-auto"
              />
            </Link>
            <p className="text-base text-gray-400">
              Transforming businesses through innovative technology solutions.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Services</h3>
            <ul className="space-y-3 text-base text-gray-400">
              <li><Link href="/services/infrastructure" className="hover:text-white">Infrastructure Management</Link></li>
              <li><Link href="/services/software" className="hover:text-white">Software Development</Link></li>
              <li><Link href="/services/cybersecurity" className="hover:text-white">Cybersecurity</Link></li>
              <li><Link href="/services/cloud" className="hover:text-white">Cloud Solutions</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Company</h3>
            <ul className="space-y-3 text-base text-gray-400">
              <li><Link href="/our-vision" className="hover:text-white">Our Vision</Link></li>
              <li><Link href="/team" className="hover:text-white">Our Team</Link></li>
              <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Connect</h3>
            <div className="flex space-x-4">
              <Link href="/" className="text-gray-400 hover:text-white"><Globe className="h-6 w-6" /><span className="sr-only">Website</span></Link>
              <Link href="mailto:info@bitz-itc.com" className="text-gray-400 hover:text-white"><Mail className="h-6 w-6" /><span className="sr-only">Email</span></Link>
              <Link href="https://wa.me/254110952788" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><MessageSquare className="h-6 w-6" /><span className="sr-only">WhatsApp</span></Link>
              <Link href="tel:0110952788" className="text-gray-400 hover:text-white"><Headphones className="h-6 w-6" /><span className="sr-only">Support</span></Link>
            </div>
            <div className="text-base text-gray-400">
              <p>&copy; 2025 BITZ-itc. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
