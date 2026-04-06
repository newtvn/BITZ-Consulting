'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/openchs', label: 'OpenCHS' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/consulting', label: 'Consulting' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/partners', label: 'Partners' },
  { href: '/countries', label: 'Countries' },
  { href: '/about', label: 'About' },
  { href: '/team', label: 'Team' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="relative z-50 w-full bg-transparent px-4 md:px-6">
      <div className="container flex items-center justify-between h-24 mx-auto">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center overflow-visible">
          <Image
            src="/Bitz logo.png"
            alt="BITZ-itc Logo"
            width={400}
            height={500}
            className="object-contain h-40 w-auto translate-y-4"
            priority
          />
        </Link>

        {/* Center: Pill Navigation */}
        <nav className="hidden md:flex items-center bg-gray-100 rounded-full p-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-2.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200",
                isActive(link.href)
                  ? "bg-white text-navy shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Contact CTA + Mobile Menu */}
        <div className="flex items-center gap-3">
          <Link href="/contact?type=proposal" className="hidden md:block">
            <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white rounded-full text-sm px-5">
              Request Proposal
            </Button>
          </Link>
          <Link href="/contact?demo=true" className="hidden md:block">
            <Button className="bg-navy hover:bg-navy/90 text-white rounded-full text-sm px-5">
              Request Demo
            </Button>
          </Link>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn("md:hidden bg-white", isMobileMenuOpen ? 'block' : 'hidden')}>
        <nav className="flex flex-col items-center space-y-1 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "w-full text-center px-4 py-3 text-base font-medium transition-colors duration-200",
                isActive(link.href)
                  ? "text-navy bg-gray-50 font-semibold"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-2 w-full px-4">
            <Link
              href="/contact?type=proposal"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button variant="outline" className="w-full border-navy text-navy hover:bg-navy hover:text-white rounded-full text-base px-6">
                Request Proposal
              </Button>
            </Link>
            <Link
              href="/contact?demo=true"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button className="w-full bg-navy hover:bg-navy/90 text-white rounded-full text-base px-6">
                Request Demo
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
