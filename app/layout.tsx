import type { Metadata } from "next"
import "@/app/globals.css"
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import Header from '@/components/header'
import Footer from '@/components/footer'
import SupportAssistant from "@/components/support-assistant"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "BITZ-itc - Innovative Tech Solutions",
  description: "Transforming businesses through innovative technology solutions.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter">
        <Header />
        {children}
        <Footer />
        <Toaster position="top-center" />
        <SupportAssistant />
      </body>
    </html>
  )
}
