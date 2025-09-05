"use client"

import { useState } from "react"
import { Users, CheckCircle, ArrowRight, Clock, Zap, HeadphonesIcon } from "lucide-react"
import Button from "@/components/Button"
import Modal from "@/components/Modal"
import TalentRequestForm from "@/components/TalentRequestForm"

export default function VirtualAssistantsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openTalentRequestForm = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const features = [
    "Calendar and email management",
    "Research and data entry",
    "Customer service support",
    "Social media management",
    "Administrative task coordination",
    "Travel planning and booking",
    "Document preparation and formatting",
    "CRM management and lead tracking",
  ]

  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Save Time",
      description: "Focus on high-value activities while your VA handles routine administrative tasks.",
    },
    {
      icon: <Zap className="w-8 h-8 text-green-600" />,
      title: "Increase Productivity",
      description: "Streamline operations and get more done with dedicated administrative support.",
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8 text-purple-600" />,
      title: "24/7 Support",
      description: "Get assistance across different time zones to keep your business running smoothly.",
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
                  <Users className="w-8 h-8 text-white" />
                </div>
                <span className="text-blue-600 font-semibold text-lg">Virtual Assistant Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">
                Get Virtual Assistants to Streamline Operations
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed text-pretty">
                Skilled administrative professionals who handle your day-to-day tasks so you can focus on growing your
                business. From email management to customer support, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={openTalentRequestForm}>
                  Hire Virtual Assistants
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="secondary" size="lg">
                  See Success Stories
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-gradient-to-br from-teal-800 to-teal-700 rounded-2xl shadow-xl p-8 border border-teal-600">
                <h3 className="text-2xl font-bold text-white mb-6">What Our VAs Handle</h3>
                <div className="space-y-4">
                  {features.slice(0, 5).map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-200">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-teal-600">
                  <Button onClick={openTalentRequestForm} className="w-full">
                    Get Your VA Today
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
              Why Every Business Needs a Virtual Assistant
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Virtual assistants aren't just about delegation—they're about strategic growth and efficiency
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
              Complete Administrative Support Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Our virtual assistants provide comprehensive support across all your business operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 vintage-background">
        <div className="vintage-content max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">Ready to Reclaim Your Time?</h2>
          <p className="text-xl text-blue-100 mb-8 text-pretty">
            Get matched with skilled virtual assistants who will handle your administrative tasks efficiently.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-50 hover:text-blue-700"
            onClick={openTalentRequestForm}
          >
            <Users className="mr-2 w-5 h-5" />
            Hire Virtual Assistants
          </Button>
        </div>
      </section>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Request Virtual Assistants">
        <TalentRequestForm talentType="Virtual Assistants" onClose={closeModal} />
      </Modal>
    </div>
  )
}
