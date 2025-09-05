"use client"

import type React from "react"
import { useState } from "react"
import Button from "./Button"

interface TalentRequestFormProps {
  talentType: "QA Testers" | "Virtual Assistants" | "Content Writers" | "General"
  onClose: () => void
}

export default function TalentRequestForm({ talentType, onClose }: TalentRequestFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    talentType: talentType === "General" ? "" : talentType,
    projectDescription: "",
    timeline: "",
    budget: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

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
          <div className="w-20 h-20 bg-gradient-to-br from-brand-teal to-brand-cyan rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-purple rounded-full animate-bounce"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-brand-blue rounded-full animate-bounce delay-150"></div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 bg-gradient-to-r from-brand-cyan to-brand-blue bg-clip-text text-transparent">
          Request Submitted Successfully!
        </h3>
        <p className="text-slate-200 mb-8 text-lg leading-relaxed">
          We'll review your requirements and get back to you within 24 hours with vetted talent matches.
        </p>
        <Button onClick={onClose} className="px-8 py-3 text-lg font-semibold">
          Awesome, Close
        </Button>
      </div>
    )
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-800 to-teal-700 rounded-2xl"></div>
      <div className="absolute top-4 right-4 w-20 h-20 bg-teal-600/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 bg-teal-500/20 rounded-full blur-xl"></div>

      <form onSubmit={handleSubmit} className="relative space-y-8 p-2">
        <div className="text-center pb-6 border-b border-teal-600/30">
          <h2 className="text-2xl font-bold text-white mb-2">
            Request {talentType !== "General" ? talentType : "Talent"}
          </h2>
          <p className="text-slate-200">Tell us about your project and we'll find the perfect match</p>
        </div>

        {/* Personal Information */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-white flex items-center">
            <span className="w-8 h-8 bg-gradient-to-br from-brand-cyan to-brand-blue rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
              1
            </span>
            Personal Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-semibold text-slate-200">
                Full Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-teal-700/50 backdrop-blur-sm text-white placeholder-slate-300 ${
                    focusedField === "name"
                      ? "border-brand-cyan shadow-lg shadow-brand-cyan/20 scale-[1.02]"
                      : "border-teal-600 hover:border-brand-teal"
                  }`}
                  placeholder="John Doe"
                />
                {focusedField === "name" && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-cyan rounded-full animate-ping"></div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-slate-200">
                Email Address *
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-teal-700/50 backdrop-blur-sm text-white placeholder-slate-300 ${
                    focusedField === "email"
                      ? "border-brand-cyan shadow-lg shadow-brand-cyan/20 scale-[1.02]"
                      : "border-teal-600 hover:border-brand-teal"
                  }`}
                  placeholder="john@company.com"
                />
                {focusedField === "email" && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-cyan rounded-full animate-ping"></div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="company" className="block text-sm font-semibold text-slate-200">
              Company Name *
            </label>
            <div className="relative">
              <input
                type="text"
                id="company"
                name="company"
                required
                value={formData.company}
                onChange={handleInputChange}
                onFocus={() => setFocusedField("company")}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-teal-700/50 backdrop-blur-sm text-white placeholder-slate-300 ${
                  focusedField === "company"
                    ? "border-brand-cyan shadow-lg shadow-brand-cyan/20 scale-[1.02]"
                    : "border-teal-600 hover:border-brand-teal"
                }`}
                placeholder="Your Company Inc."
              />
              {focusedField === "company" && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-cyan rounded-full animate-ping"></div>
              )}
            </div>
          </div>
        </div>

        {/* Project Requirements */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-white flex items-center">
            <span className="w-8 h-8 bg-gradient-to-br from-brand-cyan to-brand-blue rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
              2
            </span>
            Project Requirements
          </h3>

          <div className="space-y-2">
            <label htmlFor="talentType" className="block text-sm font-semibold text-slate-200">
              Talent Type *
            </label>
            <div className="relative">
              <select
                id="talentType"
                name="talentType"
                required
                value={formData.talentType}
                onChange={handleInputChange}
                onFocus={() => setFocusedField("talentType")}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-teal-700/50 backdrop-blur-sm text-white ${
                  focusedField === "talentType"
                    ? "border-brand-cyan shadow-lg shadow-brand-cyan/20 scale-[1.02]"
                    : "border-teal-600 hover:border-brand-teal"
                }`}
              >
                <option value="">Select talent type</option>
                <option value="QA Testers">🐛 QA Testers</option>
                <option value="Virtual Assistants">👥 Virtual Assistants</option>
                <option value="Content Writers">✍️ Content Writers</option>
                <option value="Multiple Types">🎯 Multiple Types</option>
              </select>
              {focusedField === "talentType" && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-cyan rounded-full animate-ping"></div>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="projectDescription" className="block text-sm font-semibold text-slate-200">
              Project Description *
            </label>
            <div className="relative">
              <textarea
                id="projectDescription"
                name="projectDescription"
                required
                rows={4}
                value={formData.projectDescription}
                onChange={handleInputChange}
                onFocus={() => setFocusedField("projectDescription")}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-teal-700/50 backdrop-blur-sm resize-none text-white placeholder-slate-300 ${
                  focusedField === "projectDescription"
                    ? "border-brand-cyan shadow-lg shadow-brand-cyan/20 scale-[1.02]"
                    : "border-teal-600 hover:border-brand-teal"
                }`}
                placeholder="Describe your project, required skills, and any specific requirements..."
              />
              {focusedField === "projectDescription" && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-cyan rounded-full animate-ping"></div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="timeline" className="block text-sm font-semibold text-slate-200">
                Timeline
              </label>
              <div className="relative">
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("timeline")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-teal-700/50 backdrop-blur-sm text-white ${
                    focusedField === "timeline"
                      ? "border-brand-cyan shadow-lg shadow-brand-cyan/20 scale-[1.02]"
                      : "border-teal-600 hover:border-brand-teal"
                  }`}
                >
                  <option value="">Select timeline</option>
                  <option value="ASAP">⚡ ASAP (within 72 hours)</option>
                  <option value="1-2 weeks">📅 1-2 weeks</option>
                  <option value="1 month">🗓️ 1 month</option>
                  <option value="Long-term">🎯 Long-term project</option>
                </select>
                {focusedField === "timeline" && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-cyan rounded-full animate-ping"></div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="budget" className="block text-sm font-semibold text-slate-200">
                Budget Range
              </label>
              <div className="relative">
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("budget")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-teal-700/50 backdrop-blur-sm text-white ${
                    focusedField === "budget"
                      ? "border-brand-cyan shadow-lg shadow-brand-cyan/20 scale-[1.02]"
                      : "border-teal-600 hover:border-brand-teal"
                  }`}
                >
                  <option value="">Select budget range</option>
                  <option value="$500-$1,000">💰 $500 - $1,000</option>
                  <option value="$1,000-$5,000">💵 $1,000 - $5,000</option>
                  <option value="$5,000-$10,000">💸 $5,000 - $10,000</option>
                  <option value="$10,000+">🏆 $10,000+</option>
                </select>
                {focusedField === "budget" && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-cyan rounded-full animate-ping"></div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-semibold text-slate-200">
              Additional Message
            </label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleInputChange}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-teal-700/50 backdrop-blur-sm resize-none text-white placeholder-slate-300 ${
                  focusedField === "message"
                    ? "border-brand-cyan shadow-lg shadow-brand-cyan/20 scale-[1.02]"
                    : "border-teal-600 hover:border-brand-teal"
                }`}
                placeholder="Any additional details or questions..."
              />
              {focusedField === "message" && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-cyan rounded-full animate-ping"></div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-teal-600/30">
          <Button
            type="button"
            variant="secondary"
            onClick={onClose}
            className="flex-1 py-4 text-lg font-semibold border-2 border-teal-600 hover:border-brand-teal transition-all duration-300"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className={`flex-1 py-4 text-lg font-semibold transition-all duration-300 ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-brand-cyan to-brand-blue hover:from-brand-blue hover:to-brand-purple shadow-lg hover:shadow-xl hover:scale-[1.02]"
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Submitting...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                Submit Request
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </span>
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
