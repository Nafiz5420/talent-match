"use client"

import { useState } from "react"
import Button from "@/components/Button"
import Modal from "@/components/Modal"
import TalentRequestForm from "@/components/TalentRequestForm"
import { useGlobalModal } from "@/components/GlobalModalProvider"

export default function ServicesPage() {
  const { openTalentRequestModal, openContactModal } = useGlobalModal()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTalentType, setSelectedTalentType] = useState<
    "QA Testers" | "Virtual Assistants" | "Content Writers" | "General"
  >("General")

  const openTalentRequestForm = (
    talentType: "QA Testers" | "Virtual Assistants" | "Content Writers" | "General" = "General",
  ) => {
    setSelectedTalentType(talentType)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const services = [
    {
      id: "qa-testers",
      icon: <span className="text-4xl">🐛</span>,
      title: "QA Testers",
      headline: "Hire QA Testers Who Guarantee Software Quality",
      description:
        "Experienced quality assurance professionals who ensure your software meets the highest standards before launch.",
      features: [
        "Functional testing across all platforms",
        "Bug detection and detailed reporting",
        "Usability and performance testing",
        "Automated and manual testing expertise",
        "Cross-browser compatibility testing",
      ],
      talentType: "QA Testers" as const,
    },
    {
      id: "virtual-assistants",
      icon: <span className="text-4xl">👥</span>,
      title: "Virtual Assistants",
      headline: "Get Virtual Assistants to Streamline Operations",
      description:
        "Skilled administrative professionals who handle your day-to-day tasks so you can focus on growing your business.",
      features: [
        "Calendar and email management",
        "Research and data entry",
        "Customer service support",
        "Social media management",
        "Administrative task coordination",
      ],
      talentType: "Virtual Assistants" as const,
    },
    {
      id: "content-writers",
      icon: <span className="text-4xl">✍️</span>,
      title: "Content Writers",
      headline: "Hire Content Writers Who Drive Engagement",
      description: "Talented writers who create compelling content that engages your audience and drives results.",
      features: [
        "Blog posts and articles",
        "Social media content",
        "Product descriptions and copy",
        "Email marketing campaigns",
        "SEO-optimized content",
      ],
      talentType: "Content Writers" as const,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-800 to-teal-700">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">Our Services</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto text-pretty">
            Professional remote talent across key business functions to help you scale efficiently
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    {service.icon}
                    <h2 className="text-3xl md:text-4xl font-bold text-white">{service.title}</h2>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-100 mb-4 text-balance">{service.headline}</h3>
                  <p className="text-lg text-slate-200 mb-8 leading-relaxed text-pretty">{service.description}</p>
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className="text-green-400 text-lg">✓</span>
                        <span className="text-slate-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button size="lg" onClick={() => openTalentRequestForm(service.talentType)}>
                    Hire {service.title}
                    <span className="ml-2">→</span>
                  </Button>
                </div>
                <div className="flex-1">
                  <div className="bg-[#0B192C] rounded-2xl p-8 lg:p-12 border border-cyan-900">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        {service.icon}
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-4">Ready to get started?</h4>
                      <p className="text-slate-200 mb-6">
                        Tell us about your project and we'll match you with the perfect {service.title.toLowerCase()}{" "}
                        within 72 hours.
                      </p>
                      <Button variant="secondary" onClick={() => openTalentRequestForm(service.talentType)}>
                        Request {service.title}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0B192C] border-t border-cyan-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
            Need Multiple Types of Talent?
          </h2>
          <p className="text-xl text-blue-100 mb-8 text-pretty">
            We can help you build a complete remote team across all our service areas.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-50 hover:text-blue-700"
            onClick={() => openTalentRequestForm()}
          >
            Request Multiple Services
            <span className="ml-2">→</span>
          </Button>
        </div>
      </section>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Request Talent">
        <TalentRequestForm talentType={selectedTalentType} onClose={closeModal} />
      </Modal>
    </div>
  )
}
