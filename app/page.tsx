"use client"

import Link from "next/link"
import Button from "@/components/Button"
import ServiceCard from "@/components/ServiceCard"
import { useGlobalModal } from "@/components/GlobalModalProvider"

export default function Home() {
  const { openTalentRequestModal, openContactModal } = useGlobalModal()

  return (
    <div className="min-h-screen">
      <div className="bg-gray-900 text-cyan-400 py-2 overflow-hidden relative">
        <div className="scroll-banner text-sm font-mono">
          QA • VA • CW • REMOTE • TALENT • VETTED • 72H • GLOBAL • QA • VA • CW • REMOTE • TALENT • VETTED • 72H •
          GLOBAL •
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 retro-grid opacity-30"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="vintage-content relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-20 md:pb-24">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight text-balance">
              <span className="typewriter inline-block text-white">Hire Vetted Remote Talent</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue vintage-glow">
                in 72 Hours
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-200 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed text-pretty px-4 sm:px-0">
              We connect SMEs with QA testers, virtual assistants, and content writers — fast and reliable.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
              <Button size="lg" onClick={() => openTalentRequestModal()} className="w-full sm:w-auto retro-pulse">
                Request Talent
                <span className="ml-2">→</span>
              </Button>
              <Link href="/how-it-works" className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto bg-teal-600/20 border-teal-300 text-white hover:bg-teal-500/30 hover:text-white"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-teal-800 to-teal-700">
        <div className="vintage-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 text-balance vintage-glow">
              Our Services
            </h2>
            <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto text-pretty px-4 sm:px-0">
              Professional remote talent across key business functions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="group">
              <ServiceCard
                icon={<span className="text-2xl sm:text-3xl">🐛</span>}
                title="QA Testers"
                description="Experienced quality assurance professionals who ensure your software meets the highest standards before launch."
                ctaText="Learn More"
                href="/services/qa-testers"
              />
              <div className="mt-4 flex flex-col sm:flex-row gap-2">
                <Link href="/services/qa-testers" className="flex-1">
                  <Button
                    variant="secondary"
                    className="w-full bg-teal-600 border-teal-500 text-white hover:bg-teal-500 hover:text-white font-medium"
                  >
                    Learn More
                  </Button>
                </Link>
                <Button onClick={() => openTalentRequestModal("QA Testers")} className="flex-1 w-full">
                  Hire Now
                </Button>
              </div>
            </div>

            <div className="group">
              <ServiceCard
                icon={<span className="text-2xl sm:text-3xl">👥</span>}
                title="Virtual Assistants"
                description="Skilled administrative professionals who handle your day-to-day tasks so you can focus on growing your business."
                ctaText="Learn More"
                href="/services/virtual-assistants"
              />
              <div className="mt-4 flex flex-col sm:flex-row gap-2">
                <Link href="/services/virtual-assistants" className="flex-1">
                  <Button
                    variant="secondary"
                    className="w-full bg-teal-600 border-teal-500 text-white hover:bg-teal-500 hover:text-white font-medium"
                  >
                    Learn More
                  </Button>
                </Link>
                <Button onClick={() => openTalentRequestModal("Virtual Assistants")} className="flex-1 w-full">
                  Hire Now
                </Button>
              </div>
            </div>

            <div className="group md:col-span-2 lg:col-span-1 md:mx-auto lg:mx-0 max-w-sm md:max-w-none">
              <ServiceCard
                icon={<span className="text-2xl sm:text-3xl">✍️</span>}
                title="Content Writers"
                description="Talented writers who create compelling content that engages your audience and drives results."
                ctaText="Learn More"
                href="/services/content-writers"
              />
              <div className="mt-4 flex flex-col sm:flex-row gap-2">
                <Link href="/services/content-writers" className="flex-1">
                  <Button
                    variant="secondary"
                    className="w-full bg-teal-600 border-teal-500 text-white hover:bg-teal-500 hover:text-white font-medium"
                  >
                    Learn More
                  </Button>
                </Link>
                <Button onClick={() => openTalentRequestModal("Content Writers")} className="flex-1 w-full">
                  Hire Now
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <Link href="/services">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto bg-teal-600 border-teal-500 text-white hover:bg-teal-500 hover:text-white font-medium"
              >
                View All Services
                <span className="ml-2">→</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-teal-800 to-teal-700">
        <div className="vintage-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 text-balance">
              How It Works
            </h2>
            <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto text-pretty px-4 sm:px-0">
              Simple process to get you the right talent quickly
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            <div className="text-center relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-cyan to-brand-blue rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                <span className="text-xl sm:text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#468A9A] mb-3 sm:mb-4">Tell Us Your Needs</h3>
              <p className="text-[#468A9A] leading-relaxed px-4 sm:px-0 font-medium">
                Submit your project requirements through our simple form. Tell us about your timeline, budget, and
                specific skills needed.
              </p>
              <div className="hidden md:block absolute top-8 sm:top-10 left-full w-full h-0.5 bg-gradient-to-r from-brand-teal to-transparent transform -translate-x-10"></div>
            </div>
            <div className="text-center relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                <span className="text-xl sm:text-2xl">⚡</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#468A9A] mb-3 sm:mb-4">Get Matched in 72 Hours</h3>
              <p className="text-[#468A9A] leading-relaxed px-4 sm:px-0 font-medium">
                Our team carefully selects and vets candidates from our talent pool to find the perfect match for your
                needs.
              </p>
              <div className="hidden md:block absolute top-8 sm:top-10 left-full w-full h-0.5 bg-gradient-to-r from-brand-teal to-transparent transform -translate-x-10"></div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-cyan to-brand-blue rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                <span className="text-xl sm:text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#468A9A] mb-3 sm:mb-4">Start Working</h3>
              <p className="text-[#468A9A] leading-relaxed px-4 sm:px-0 font-medium">
                Meet your new team member and start working together within 72 hours. It's that simple.
              </p>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <Link href="/how-it-works">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto bg-teal-600 border-teal-500 text-white hover:bg-teal-500 hover:text-white font-medium"
              >
                See Detailed Process
                <span className="ml-2">→</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-teal-800 to-teal-700">
        <div className="vintage-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 text-balance vintage-glow">
              Why Choose Us
            </h2>
            <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto text-pretty px-4 sm:px-0">
              The advantages that set us apart from the competition
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-teal to-brand-cyan rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                <span className="text-2xl sm:text-3xl">⚡</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#468A9A] mb-3 sm:mb-4">Fast</h3>
              <p className="text-[#468A9A] leading-relaxed px-4 sm:px-0 font-medium">
                Get matched with vetted talent in just 72 hours. No lengthy hiring processes or delays.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-cyan to-brand-blue rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                <span className="text-xl sm:text-2xl text-white font-bold">✓</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#468A9A] mb-3 sm:mb-4">Vetted</h3>
              <p className="text-[#468A9A] leading-relaxed px-4 sm:px-0 font-medium">
                All our talent goes through rigorous screening to ensure they meet our high standards.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-blue to-brand-purple rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                <span className="text-2xl sm:text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#468A9A] mb-3 sm:mb-4">Risk-free</h3>
              <p className="text-[#468A9A] leading-relaxed px-4 sm:px-0 font-medium">
                Not satisfied? We'll find you a replacement or provide a full refund. Your success is guaranteed.
              </p>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <Link href="/why-us">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto bg-teal-600 border-teal-500 text-white hover:bg-teal-500 hover:text-white font-medium"
              >
                Learn More About Us
                <span className="ml-2">→</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        id="contact"
        className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-brand-cyan to-brand-blue relative overflow-hidden"
      >
        <div className="absolute inset-0 retro-grid opacity-20"></div>
        <div className="vintage-content relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 text-balance vintage-glow">
            Ready to Scale Your Team?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 sm:mb-10 md:mb-12 leading-relaxed text-pretty px-4 sm:px-0">
            Join hundreds of SMEs who have successfully scaled their operations with our remote talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <Button
              size="lg"
              className="bg-white text-brand-blue hover:bg-gray-50 hover:text-brand-cyan shadow-xl hover:shadow-2xl w-full sm:w-auto retro-pulse"
              onClick={() => openTalentRequestModal()}
            >
              <span className="mr-2">🕐</span>
              Request Talent Now
            </Button>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-blue w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gray-900/90 text-cyan-400 py-1 overflow-hidden">
          <div className="scroll-banner text-xs font-mono opacity-70">
            GLOBAL TALENT • REMOTE WORK • QUALITY ASSURED • FAST DELIVERY • GLOBAL TALENT • REMOTE WORK • QUALITY
            ASSURED • FAST DELIVERY •
          </div>
        </div>
      </section>
    </div>
  )
}
