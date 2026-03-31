'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LayoutGrid } from 'lucide-react';
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from 'next/image';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur-lg bg-white/50 px-4 md:px-6">
      <div className="container flex items-center justify-between h-16 mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <Image
              src="/Bitz logo.png"
              alt="BITZ-itc Logo"
              width={60}
              height={60}
              className="object-contain"
              priority
            />
          </div>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-base font-medium hover:text-navy transition-colors duration-200">
            Home
          </Link>
          <Link href="/our-vision" className="text-base font-medium hover:text-navy transition-colors duration-200">
            Our Vision
          </Link>
          <Link href="/services" className="text-base font-medium hover:text-navy transition-colors duration-200">
            Services
          </Link>
          <Link href="/projects" className="text-base font-medium hover:text-navy transition-colors duration-200">
            Projects
          </Link>
          <Link href="/team" className="text-base font-medium hover:text-navy transition-colors duration-200">
            Our Team
          </Link>
          <Link href="/contact" className="text-base font-medium hover:text-navy transition-colors duration-200">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="md:hidden rounded-full" onClick={toggleMobileMenu}>
            <LayoutGrid className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn("md:hidden bg-white", isMobileMenuOpen ? 'block' : 'hidden')}>
        <nav className="flex flex-col items-center space-y-4 py-4">
          <Link href="/" className="text-base font-medium hover:text-navy transition-colors duration-200" onClick={toggleMobileMenu}>
            Home
          </Link>
          <Link href="/our-vision" className="text-base font-medium hover:text-navy transition-colors duration-200" onClick={toggleMobileMenu}>
            Our Vision
          </Link>
          <Link href="/services" className="text-base font-medium hover:text-navy transition-colors duration-200" onClick={toggleMobileMenu}>
            Services
          </Link>
          <Link href="/projects" className="text-base font-medium hover:text-navy transition-colors duration-200" onClick={toggleMobileMenu}>
            Projects
          </Link>
          <Link href="/team" className="text-base font-medium hover:text-navy transition-colors duration-200" onClick={toggleMobileMenu}>
            Our Team
          </Link>
          <Link href="/contact" className="text-base font-medium hover:text-navy transition-colors duration-200" onClick={toggleMobileMenu}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
