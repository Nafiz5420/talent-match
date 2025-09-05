"use client"

import type { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  disabled?: boolean
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 hover:transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/20"

  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl",
    secondary:
      "bg-teal-600 border-2 border-teal-500 hover:border-teal-400 text-white hover:text-white hover:bg-teal-500 shadow-sm hover:shadow-md",
  }

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
