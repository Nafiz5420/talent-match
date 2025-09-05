import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Branding & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TM</span>
              </div>
              <h3 className="text-xl font-bold text-white">TalentMatch</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Connecting SMEs with vetted remote talent worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="space-y-3">
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-300">Services</p>
                <div className="space-y-2 ml-4">
                  <Link
                    href="/services/qa-testers"
                    className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    QA Testers
                  </Link>
                  <Link
                    href="/services/virtual-assistants"
                    className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    Virtual Assistants
                  </Link>
                  <Link
                    href="/services/content-writers"
                    className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    Content Writers
                  </Link>
                </div>
              </div>
              <Link href="/how-it-works" className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                How It Works
              </Link>
              <Link href="/why-us" className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Why Us
              </Link>
              <Link href="/contact" className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact & Socials */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@talentmatch.com"
                className="flex items-center space-x-3 text-sm text-gray-400 hover:text-cyan-400 transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:text-cyan-400" />
                <span>contact@talentmatch.com</span>
              </a>
              <a
                href="tel:+15551234567"
                className="flex items-center space-x-3 text-sm text-gray-400 hover:text-cyan-400 transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:text-cyan-400" />
                <span>+1 (555) 123-4567</span>
              </a>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Business Avenue, San Francisco, CA</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-4">
              <p className="text-sm font-medium text-gray-300 mb-3">Follow Us</p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors group"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 text-gray-400 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center">
            <p className="text-sm text-gray-400">© 2024 TalentMatch. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
