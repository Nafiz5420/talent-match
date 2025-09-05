"use client"

import type React from "react"
import { useState } from "react"
import Button from "./Button"

interface ContactFormProps {
  onClose: () => void
}

export default function ContactForm({ onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitted(true)
    setIsSubmitting(false)
  }

  if (submitted) {
    return (
      <div className="text-center py-12 px-6">
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-primary animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-3 font-sans">Message Sent Successfully!</h3>
        <p className="text-muted-foreground mb-8 text-lg leading-relaxed max-w-md mx-auto">
          Thank you for reaching out. Our team will get back to you within 24 hours with a personalized response.
        </p>
        <Button onClick={onClose} className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground">
          Close
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Form Header */}
      <div className="text-center pb-2">
        <h2 className="text-2xl font-bold text-foreground mb-2 font-sans">Get in Touch</h2>
        <p className="text-muted-foreground text-balance">
          Ready to scale your team? Let's discuss how we can help you find the perfect talent.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-semibold text-foreground font-sans">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3.5 rounded-xl bg-input border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-200 text-foreground placeholder:text-muted-foreground/60 hover:border-primary/50"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-semibold text-foreground font-sans">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3.5 rounded-xl bg-input border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-200 text-foreground placeholder:text-muted-foreground/60 hover:border-primary/50"
              placeholder="john@company.com"
            />
          </div>
        </div>

        {/* Company Name */}
        <div className="space-y-2">
          <label htmlFor="company" className="block text-sm font-semibold text-foreground font-sans">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-3.5 rounded-xl bg-input border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-200 text-foreground placeholder:text-muted-foreground/60 hover:border-primary/50"
            placeholder="Your Company Inc."
          />
        </div>

        {/* Subject */}
        <div className="space-y-2">
          <label htmlFor="subject" className="block text-sm font-semibold text-foreground font-sans">
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full px-4 py-3.5 rounded-xl bg-input border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-200 text-foreground hover:border-primary/50 cursor-pointer"
          >
            <option value="">Select a subject</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Pricing Information">Pricing Information</option>
            <option value="Partnership Opportunities">Partnership Opportunities</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-semibold text-foreground font-sans">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-3.5 rounded-xl bg-input border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-200 text-foreground placeholder:text-muted-foreground/60 hover:border-primary/50 resize-none"
            placeholder="Tell us more about your talent needs and how we can help you scale your team..."
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <Button
            type="button"
            variant="secondary"
            onClick={onClose}
            className="flex-1 py-3.5 border-2 border-border hover:border-accent hover:text-accent transition-all duration-200"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 py-3.5 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
