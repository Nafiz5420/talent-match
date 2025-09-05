"use client"

import { type ReactNode, useEffect } from "react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title?: string
}

export default function Modal({ isOpen, onClose, children, title }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-all duration-300" onClick={onClose}></div>

        <div className="relative inline-block transform overflow-hidden rounded-2xl bg-card border border-border text-left align-bottom shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:align-middle">
          {/* Header */}
          {title && (
            <div className="flex items-center justify-between p-6 border-b border-border bg-gradient-to-r from-card to-muted/30 bg-black">
              <h3 className="text-2xl font-bold text-card-foreground font-sans">{title}</h3>
              <button
                onClick={onClose}
                className="rounded-xl p-2.5 text-muted-foreground hover:bg-accent/10 hover:text-accent transition-all duration-200 group"
              >
                <svg
                  className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}

          {/* Content */}
          <div className="p-6 bg-card">{children}</div>
        </div>
      </div>
    </div>
  )
}
