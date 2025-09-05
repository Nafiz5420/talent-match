"use client"

import { useState } from "react"
import { Edit3, CheckCircle, ArrowRight, TrendingUp, Target, Sparkles } from "lucide-react"
import Button from "@/components/Button"
import Modal from "@/components/Modal"
import TalentRequestForm from "@/components/TalentRequestForm"

export default function ContentWritersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openTalentRequestForm = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const features = [
    "Blog posts and articles",
    "Social media content",
    "Product descriptions and copy",
    "Email marketing campaigns",
    "SEO-optimized content",
    "Website copy and landing pages",
    "Press releases and PR content",
    "Technical documentation",
  ]

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Drive Engagement",
      description: "Create compelling content that resonates with your audience and drives action.",
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: "Boost SEO Rankings",
      description: "Get SEO-optimized content that helps your business rank higher in search results.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-purple-600" />,
      title: "Brand Consistency",
      description: "Maintain a consistent brand voice across all your content and marketing materials.",
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
                  <Edit3 className="w-8 h-8 text-white" />
                </div>
                <span className="text-blue-600 font-semibold text-lg">Content Writing Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">
                Hire Content Writers Who Drive Engagement
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed text-pretty">
                Talented writers who create compelling content that engages your audience and drives results. From blog
                posts to marketing copy, get content that converts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={openTalentRequestForm}>
                  Hire Content Writers
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="secondary" size="lg">
                  View Writing Samples
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-gradient-to-br from-teal-800 to-teal-700 rounded-2xl shadow-xl p-8 border border-teal-600">
                <h3 className="text-2xl font-bold text-white mb-6">Content We Create</h3>
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
                    Start Creating Content
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
              Why Quality Content Matters for Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Great content isn't just about words—it's about connecting with your audience and driving business growth
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
              Complete Content Writing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Our content writers deliver high-quality content across all formats and platforms
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
            Ready to Create Content That Converts?
          </h2>
          <p className="text-xl text-blue-100 mb-8 text-pretty">
            Get matched with skilled content writers who understand your brand and audience.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-50 hover:text-blue-700"
            onClick={openTalentRequestForm}
          >
            <Edit3 className="mr-2 w-5 h-5" />
            Hire Content Writers
          </Button>
        </div>
      </section>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Request Content Writers">
        <TalentRequestForm talentType="Content Writers" onClose={closeModal} />
      </Modal>
    </div>
  )
}
