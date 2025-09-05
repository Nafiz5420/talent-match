"use client"

import { useState } from "react"
import Button from "@/components/Button"
import Modal from "@/components/Modal"
import TalentRequestForm from "@/components/TalentRequestForm"

export default function QATestersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openTalentRequestForm = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const features = [
    "Functional testing across all platforms",
    "Bug detection and detailed reporting",
    "Usability and performance testing",
    "Automated and manual testing expertise",
    "Cross-browser compatibility testing",
    "Mobile app testing (iOS & Android)",
    "API and backend testing",
    "Security vulnerability assessment",
  ]

  const benefits = [
    {
      icon: <span className="text-3xl">🎯</span>,
      title: "Catch Issues Early",
      description: "Identify and fix bugs before they reach your users, saving time and reputation.",
    },
    {
      icon: <span className="text-3xl">🛡️</span>,
      title: "Quality Assurance",
      description: "Ensure your software meets industry standards and user expectations.",
    },
    {
      icon: <span className="text-3xl">⚡</span>,
      title: "Faster Releases",
      description: "Streamlined testing processes that don't slow down your development cycle.",
    },
  ]

  return (
    <div className="min-h-screen vintage-background">
      {/* Hero Section */}
      <section className="vintage-background py-20">
        <div className="vintage-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🐛</span>
                </div>
                <span className="text-blue-600 font-semibold text-lg">QA Testing Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">
                Hire QA Testers Who Guarantee Software Quality
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed text-pretty">
                Experienced quality assurance professionals who ensure your software meets the highest standards before
                launch. Get comprehensive testing coverage that catches issues before your users do.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={openTalentRequestForm}>
                  Hire QA Testers Now
                  <span className="ml-2">→</span>
                </Button>
                <Button variant="secondary" size="lg">
                  View Sample Reports
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-gradient-to-br from-teal-800 to-teal-700 rounded-2xl shadow-xl p-8 border border-teal-600">
                <h3 className="text-2xl font-bold text-white mb-6">What Our QA Testers Do</h3>
                <div className="space-y-4">
                  {features.slice(0, 5).map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-green-400 text-lg">✓</span>
                      <span className="text-slate-200">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-teal-600">
                  <Button onClick={openTalentRequestForm} className="w-full">
                    Get Started Today
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 vintage-background">
        <div className="vintage-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-balance">
              Why QA Testing Matters for Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Professional QA testing isn't just about finding bugs—it's about delivering exceptional user experiences
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-teal-800 to-teal-700 rounded-xl p-8 shadow-sm border border-teal-600"
              >
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-slate-200 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Features Section */}
      <section className="py-20 vintage-background">
        <div className="vintage-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-balance">
              Comprehensive QA Testing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Our QA testers provide end-to-end testing coverage for all your software needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-gray-800 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 vintage-background">
        <div className="vintage-content max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
            Ready to Ensure Your Software Quality?
          </h2>
          <p className="text-xl text-blue-100 mb-8 text-pretty">
            Get matched with experienced QA testers who will help you deliver bug-free software to your users.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-50 hover:text-blue-700"
            onClick={openTalentRequestForm}
          >
            <span className="mr-2">🐛</span>
            Hire QA Testers Now
          </Button>
        </div>
      </section>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Request QA Testers">
        <TalentRequestForm talentType="QA Testers" onClose={closeModal} />
      </Modal>
    </div>
  )
}
