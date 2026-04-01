import type { Metadata } from "next"
import "@/app/globals.css"
import { Space_Grotesk } from 'next/font/google'
import { Toaster } from 'sonner'
import Header from '@/components/header'
import Footer from '@/components/footer'
import SupportAssistant from "@/components/support-assistant"
import SocialSidebar from "@/components/social-sidebar"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "BITZ Consulting",
  description: "Transforming businesses through innovative technology solutions.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="font-grotesk">
        <Header />
        {children}
        <Footer />
        <Toaster position="top-center" />
        <SocialSidebar />
        <SupportAssistant />
      </body>
    </html>
  )
}
