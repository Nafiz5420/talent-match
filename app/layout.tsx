import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { GlobalModalProvider } from "@/components/GlobalModalProvider"
import ScrollToTop from "@/components/ScrollToTop"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "TalentMatch - Hire Vetted Remote Talent in 72 Hours",
  description:
    "Connect with QA testers, virtual assistants, and content writers. Fast, reliable, and vetted remote talent for SMEs.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans bg-[#0B192C]">
        <GlobalModalProvider>
          <ScrollToTop />
          <Navigation />
          <main className="min-h-screen">
            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          </main>
          <Footer />
        </GlobalModalProvider>
        <Analytics />
      </body>
    </html>
  )
}
