"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import Button from "./Button"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  ctaText: string
  href: string
}

export default function ServiceCard({ icon, title, description, ctaText, href }: ServiceCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-white/20 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-2xl flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-white mb-4 text-center">{title}</h3>
      <p className="text-slate-100 mb-6 text-center leading-relaxed font-medium">{description}</p>
      <div className="flex justify-center">
        <Link href={href}>
          <Button
            variant="secondary"
            size="sm"
            className="bg-teal-600 border-teal-500 text-white hover:bg-teal-500 hover:text-white font-medium"
          >
            {ctaText}
          </Button>
        </Link>
      </div>
    </div>
  )
}
