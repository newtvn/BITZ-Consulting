'use client'

import Link from 'next/link'
import { Linkedin, Twitter, Instagram } from 'lucide-react'

const socials = [
  {
    href: 'https://www.linkedin.com/company/bitz-it-consulting/posts/?feedView=all',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://x.com/Consulting41793',
    icon: Twitter,
    label: 'X / Twitter',
  },
  {
    href: 'https://www.instagram.com/bitz.itconsulting',
    icon: Instagram,
    label: 'Instagram',
  },
]

export default function SocialSidebar() {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
      {socials.map((social) => (
        <Link
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-xl bg-white/80 backdrop-blur-sm border border-navy/10 shadow-ios flex items-center justify-center text-navy/50 hover:text-navy hover:bg-white hover:shadow-ios-lg hover:scale-110 transition-all duration-300"
        >
          <social.icon className="h-5 w-5" />
          <span className="sr-only">{social.label}</span>
        </Link>
      ))}
    </div>
  )
}
