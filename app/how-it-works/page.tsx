"use client"

import { useState } from "react"
import { ArrowRight, Clock, Users, CheckCircle, MessageSquare, Search, Handshake, Star, Shield } from "lucide-react"
import Button from "@/components/Button"
import Modal from "@/components/Modal"
import TalentRequestForm from "@/components/TalentRequestForm"

export default function HowItWorksPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openTalentRequestForm = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const steps = [
    {
      number: 1,
      title: "Tell Us Your Needs",
      subtitle: "Share Your Requirements",
      description:
        "Submit your project requirements through our simple form. Tell us about your timeline, budget, and specific skills needed.",
      details: [
        "Fill out our detailed project form",
        "Specify your timeline and budget",
        "Describe the skills and experience needed",
        "Choose your preferred communication style",
      ],
      icon: <MessageSquare className="w-8 h-8 text-white" />,
      timeframe: "5 minutes",
    },
    {
      number: 2,
      title: "We Match & Vet",
      subtitle: "Expert Talent Selection",
      description:
        "Our team reviews your requirements and carefully selects candidates from our pre-vetted talent pool who match your specific needs.",
      details: [
        "Review of your project requirements",
        "Candidate matching from our talent pool",
        "Skills assessment and verification",
        "Background and reference checks",
      ],
      icon: <Search className="w-8 h-8 text-white" />,
      timeframe: "24-48 hours",
    },
    {
      number: 3,
      title: "Start Working",
      subtitle: "Begin Collaboration",
      description:
        "Meet your matched talent and start working together. We provide ongoing support to ensure a successful partnership.",
      details: [
        "Introduction call with your matched talent",
        "Project kickoff and goal setting",
        "Establish communication channels",
        "Ongoing support and check-ins",
      ],
      icon: <Handshake className="w-8 h-8 text-white" />,
      timeframe: "Within 72 hours",
    },
  ]

  const timeline = [
    { day: "Day 1", activity: "Submit Requirements", status: "You tell us what you need" },
    { day: "Day 2", activity: "Talent Matching", status: "We find and vet candidates" },
    { day: "Day 3", activity: "Start Working", status: "Meet your talent and begin" },
  ]

  const guarantees = [
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "72-Hour Guarantee",
      description: "Get matched with talent within 72 hours or we'll expedite your search at no extra cost.",
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: "Quality Assurance",
      description: "All talent is pre-vetted with verified skills, experience, and professional references.",
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Satisfaction Promise",
      description: "Not satisfied with your match? We'll find a replacement or provide a full refund.",
    },
  ]

  return (
    <div className="min-h-screen vintage-background">
      {/* Hero Section */}
      <section className="vintage-background py-20">
        <div className="vintage-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">How It Works</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 text-pretty">
            Our simple 3-step process gets you connected with vetted remote talent in just 72 hours
          </p>
          <Button size="lg" onClick={openTalentRequestForm}>
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-20 vintage-background">
        <div className="vintage-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-balance">
              From Request to Working in 72 Hours
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              Here's exactly what happens from the moment you submit your request
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-cyan-700 hidden md:block"></div>

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
                      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.day}</h3>
                        <h4 className="text-lg font-medium text-blue-600 mb-2">{item.activity}</h4>
                        <p className="text-gray-600">{item.status}</p>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden md:flex w-12 h-12 bg-cyan-700 rounded-full items-center justify-center mx-4 shadow-lg z-10">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>

                    <div className="flex-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-20 vintage-background">
        <div className="vintage-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-balance">
              Detailed Process Breakdown
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              A closer look at each step of our talent matching process
            </p>
          </div>

          <div className="space-y-20">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-cyan-700 rounded-full flex items-center justify-center shadow-lg">
                      {step.icon}
                    </div>
                    <div>
                      <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                        Step {step.number}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-black">{step.title}</h3>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold text-black mb-4">{step.subtitle}</h4>
                  <p className="text-lg text-black mb-6 leading-relaxed">{step.description}</p>

                  <div className="space-y-3 mb-6">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium border-black text-transparent">{step.timeframe}</span>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="bg-[#0B192C] rounded-2xl p-8 lg:p-12 border border-cyan-900">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-cyan-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <span className="text-3xl font-bold text-white">{step.number}</span>
                      </div>
                      <h4 className="text-xl font-semibold text-black mb-4">{step.title}</h4>
                      <p className="text-black mb-6">{step.description}</p>
                      {index === steps.length - 1 && (
                        <Button onClick={openTalentRequestForm}>
                          Start Your Project
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-20 vintage-background">
        <div className="vintage-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-balance">Our Guarantees to You</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              We stand behind our process with these commitments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-6">{guarantee.icon}</div>
                <h3 className="text-xl font-semibold text-black mb-4">{guarantee.title}</h3>
                <p className="text-gray-600 leading-relaxed font-extrabold">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0B192C] border-t border-cyan-900">
        <div className="vintage-content max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 text-pretty">
            Join hundreds of SMEs who have successfully scaled their teams with our simple 3-step process.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-50 hover:text-blue-700"
            onClick={openTalentRequestForm}
          >
            <Users className="mr-2 w-5 h-5" />
            Request Talent Now
          </Button>
        </div>
      </section>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Request Talent">
        <TalentRequestForm talentType="General" onClose={closeModal} />
      </Modal>
    </div>
  )
}
