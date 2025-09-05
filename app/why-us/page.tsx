"use client"

import { useState } from "react"
import { Zap, CheckCircle, Shield, ArrowRight, Star, Users, Award, Globe, HeartHandshake } from "lucide-react"
import Button from "@/components/Button"
import Modal from "@/components/Modal"
import TalentRequestForm from "@/components/TalentRequestForm"

export default function WhyUsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openTalentRequestForm = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const mainBenefits = [
    {
      icon: <Zap className="w-12 h-12 text-green-500" />,
      title: "Fast",
      subtitle: "Get matched in 72 hours",
      description:
        "No lengthy hiring processes or delays. We understand that time is money, so we've streamlined our process to get you working with top talent in just 72 hours.",
      details: [
        "Pre-vetted talent pool ready to deploy",
        "Streamlined matching algorithm",
        "Dedicated account managers",
        "Same-day initial responses",
      ],
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-blue-500" />,
      title: "Vetted",
      subtitle: "All talent goes through rigorous screening",
      description:
        "Every professional in our network has been thoroughly vetted through our comprehensive screening process to ensure they meet our high standards.",
      details: [
        "Skills assessment and verification",
        "Portfolio and work sample review",
        "Professional reference checks",
        "Background verification process",
      ],
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-500" />,
      title: "Risk-free",
      subtitle: "Replacement or full refund guarantee",
      description:
        "We're so confident in our matching process that we offer a complete satisfaction guarantee. Not happy? We'll make it right.",
      details: [
        "30-day satisfaction guarantee",
        "Free replacement if not satisfied",
        "Full refund option available",
        "Ongoing support and mediation",
      ],
    },
  ]

  const additionalBenefits = [
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Global Talent Pool",
      description: "Access to skilled professionals from around the world, available across different time zones.",
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "Proven Track Record",
      description: "Over 500+ successful matches with a 95% client satisfaction rate and long-term partnerships.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-green-600" />,
      title: "Ongoing Support",
      description: "Dedicated account management and ongoing support to ensure successful long-term collaborations.",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechStart Solutions",
      role: "CEO",
      content:
        "TalentMatch connected us with an amazing QA tester who caught critical bugs before our product launch. The 72-hour promise was real - we were working together by day 3!",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      company: "Digital Marketing Pro",
      role: "Founder",
      content:
        "Our virtual assistant has been a game-changer. She handles all our admin tasks flawlessly, giving me time to focus on growing the business. Highly recommend TalentMatch!",
      rating: 5,
    },
    {
      name: "Emily Watson",
      company: "E-commerce Plus",
      role: "Marketing Director",
      content:
        "The content writer we hired through TalentMatch has transformed our blog. Our engagement rates have doubled, and the quality is consistently excellent.",
      rating: 5,
    },
  ]

  const stats = [
    { number: "500+", label: "Successful Matches" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "72hrs", label: "Average Match Time" },
    { number: "24/7", label: "Support Available" },
  ]

  return (
    <div className="min-h-screen vintage-background">
      {/* Hero Section */}
      <section className="vintage-background py-20">
        <div className="vintage-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 text-balance">
            Why Choose TalentMatch?
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 text-pretty">
            The advantages that set us apart from the competition and make us the trusted choice for SMEs worldwide
          </p>
          <Button size="lg" onClick={openTalentRequestForm}>
            Experience the Difference
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 vintage-background">
        <div className="vintage-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-slate-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Benefits Section */}
      <section className="py-20 vintage-background">
        <div className="vintage-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 text-balance">Our Core Advantages</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto text-pretty">
              Three key differentiators that make TalentMatch the smart choice for your business
            </p>
          </div>

          <div className="space-y-20">
            {mainBenefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    {benefit.icon}
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-black">{benefit.title}</h3>
                      <p className="text-lg text-black font-medium">{benefit.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">{benefit.description}</p>

                  <div className="space-y-3">
                    {benefit.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="bg-[#0B192C] rounded-2xl p-8 lg:p-12 border border-cyan-900">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-cyan-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        {benefit.icon}
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-4">{benefit.title}</h4>
                      <p className="text-slate-200 font-medium mb-6">{benefit.subtitle}</p>
                      {index === mainBenefits.length - 1 && (
                        <Button onClick={openTalentRequestForm}>
                          Get Started Today
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

      {/* Additional Benefits */}
      <section className="py-20 vintage-background">
        <div className="vintage-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 text-balance">
              Even More Reasons to Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#0B192C] rounded-xl p-8 shadow-sm border border-cyan-900 text-center"
              >
                <div className="flex justify-center mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="leading-relaxed font-extrabold text-slate-200">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 vintage-background">
        <div className="vintage-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 text-balance">What Our Clients Say</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto text-pretty">
              Real feedback from SMEs who have successfully scaled their teams with TalentMatch
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#0B192C] rounded-xl p-8 shadow-sm border border-cyan-900"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-200 mb-6 leading-relaxed font-bold">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-300">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0B192C] border-t border-cyan-900">
        <div className="vintage-content max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
            Ready to Experience the TalentMatch Advantage?
          </h2>
          <p className="text-xl text-blue-100 mb-8 text-pretty">
            Join hundreds of satisfied SMEs who have transformed their businesses with our vetted remote talent.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-50 hover:text-blue-700"
            onClick={openTalentRequestForm}
          >
            <Users className="mr-2 w-5 h-5" />
            Get Started Today
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
