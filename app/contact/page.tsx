"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, ArrowRight, Linkedin, Twitter } from "lucide-react"
import Button from "@/components/Button"
import Modal from "@/components/Modal"
import TalentRequestForm from "@/components/TalentRequestForm"
import ContactForm from "@/components/ContactForm"

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState<"talent-request" | "contact">("contact")

  const openTalentRequestForm = () => {
    setModalContent("talent-request")
    setIsModalOpen(true)
  }

  const openContactForm = () => {
    setModalContent("contact")
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email Us",
     content: <span className="text-white">hello@talentmatch.com</span>,
      description: "Send us an email and we'll respond within 24 hours",
    },
    {
      icon: <Phone className="w-6 h-6 text-green-600" />,
      title: "Call Us",
      content: <span className="text-white">+1 (555) 123-4567</span>,
      description: "Speak with our team Monday to Friday, 9 AM - 6 PM EST",
    },
    {
      icon: <MapPin className="w-6 h-6 text-purple-600" />,
      title: "Visit Us",
      content: <span className="text-white">123 Business Ave, Suite 100, New York, NY 10001</span>,
      description: "Schedule an appointment to visit our office",
    },
  ]

  const faqs = [
    {
      question: "How quickly can I get matched with talent?",
      answer:
        "Our standard matching process takes 72 hours or less. For urgent requests, we offer expedited matching within 24 hours.",
    },
    {
      question: "What if I'm not satisfied with the match?",
      answer:
        "We offer a 30-day satisfaction guarantee. If you're not happy, we'll find a replacement at no extra cost or provide a full refund.",
    },
    {
      question: "How do you vet your talent?",
      answer:
        "All talent goes through skills assessment, portfolio review, reference checks, and background verification before joining our network.",
    },
    {
      question: "What are your pricing options?",
      answer:
        "Our pricing varies based on the type of talent and project requirements. Contact us for a custom quote tailored to your needs.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">Get in Touch</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-8 text-pretty">
            Have questions about our services? Ready to get started? We're here to help you find the perfect remote
            talent for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={openTalentRequestForm}>
              Request Talent
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="secondary" size="lg" onClick={openContactForm}>
              <MessageSquare className="mr-2 w-5 h-5" />
              Send Message
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">Contact Information</h2>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto text-pretty">
              Multiple ways to reach us - choose what works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-[#0B192C] rounded-xl p-8 shadow-sm border border-cyan-900 text-center hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-6">{info.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                <p className="text-lg font-medium text-slate-200 mb-3">{info.content}</p>
                <p className="text-slate-300 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">Send Us a Message</h2>
            <p className="text-xl text-slate-200 text-pretty">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <div className="bg-[#0B192C] rounded-2xl shadow-sm border border-cyan-900 p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-200">Response time: Within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span className="text-white">hello@talentmatch.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-200">+1 (555) 123-4567</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <Button onClick={openContactForm} className="w-full mb-4">
                  <Send className="mr-2 w-4 h-4" />
                  Open Contact Form
                </Button>
                <p className="text-sm text-gray-700 text-center">
                  Or if you're ready to hire talent, use our talent request form instead
                </p>
                <Button variant="secondary" onClick={openTalentRequestForm} className="w-full mt-2">
                  Request Talent Instead
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-200 text-pretty">Quick answers to common questions about our services</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#0B192C] rounded-xl p-6 shadow-sm border border-cyan-900"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-slate-200 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-200 mb-4">Still have questions?</p>
            <Button onClick={openContactForm}>
              Contact Our Team
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0B192C] border-t border-cyan-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 text-pretty">
            Skip the questions and jump straight into finding your perfect remote talent match.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-50 hover:text-blue-700"
            onClick={openTalentRequestForm}
          >
            <Send className="mr-2 w-5 h-5" />
            Request Talent Now
          </Button>
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalContent === "talent-request" ? "Request Talent" : "Contact Us"}
      >
        {modalContent === "talent-request" ? (
          <TalentRequestForm talentType="General" onClose={closeModal} />
        ) : (
          <ContactForm onClose={closeModal} />
        )}
      </Modal>
    </div>
  )
}
