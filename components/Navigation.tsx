"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useGlobalModal } from "./GlobalModalProvider"
import Image from "next/image"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { openTalentRequestModal } = useGlobalModal()

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/why-us", label: "Why Us" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <nav className="relative bg-gradient-to-br from-cyan-500 via-teal-600 to-blue-700 shadow-lg border-b border-cyan-400/30 sticky top-0 z-50 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-2 left-10 w-8 h-8 bg-white/30 rounded-full blur-sm"></div>
        <div className="absolute top-6 right-20 w-4 h-4 bg-white/40 rounded-full blur-sm"></div>
        <div className="absolute top-1 right-40 w-6 h-6 bg-white/25 rounded-full blur-sm"></div>
        <div className="absolute bottom-2 left-32 w-5 h-5 bg-white/35 rounded-full blur-sm"></div>
        <div className="absolute bottom-4 right-60 w-3 h-3 bg-white/45 rounded-full blur-sm"></div>
        <div className="absolute top-8 left-60 w-7 h-7 bg-white/20 rounded-full blur-sm"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image src="/images/logo-tm.png" alt="TalentMatch Logo" fill className="object-contain" />
            </div>
            <span className="text-xl md:text-2xl font-bold text-white">TalentMatch</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-cyan-300 ${
                  isActive(link.href) ? "text-cyan-300 border-b-2 border-cyan-300 pb-1" : "text-slate-200"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => openTalentRequestModal()}
              className="bg-[#0F828C] text-white hover:opacity-90 px-6 py-2 rounded-lg font-medium font-sans transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Request Talent
              <span className="ml-2">→</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-brand-cyan transition-colors p-2"
            >
              <span className="text-xl">{isMenuOpen ? "×" : "☰"}</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-cyan-600/30 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-cyan-300 ${
                    isActive(link.href) ? "text-cyan-300" : "text-slate-200"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => openTalentRequestModal()}
                className="w-full bg-[#0F828C] text-white hover:opacity-90 px-6 py-2 rounded-lg font-medium font-sans transition-all duration-300"
              >
                Request Talent
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
