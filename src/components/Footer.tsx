'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    programs: [
      { name: 'AI for Teachers', href: '/programs/teachers' },
      { name: 'AI for Youth', href: '/programs/youth' },
      { name: 'Apply Now', href: '/apply' },
    ],
    about: [
      { name: 'Our Story', href: '/about' },
      { name: 'Our Goals', href: '/about#goals' },
      { name: 'Our Values', href: '/about#values' },
      { name: 'Partnership', href: '/about#partnership' },
    ],
    resources: [
      { name: 'Success Stories', href: '/impact' },
      { name: 'News & Events', href: '/news' },
      { name: 'FAQ', href: '/programs#faq' },
    ],
    support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Media Inquiries', href: '/contact#media' },
      { name: 'Partnership Opportunities', href: '/contact#partnership' },
    ],
  }

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/share/16wsrEXtcM/?mibextid=wwXIfr', icon: Facebook },
    { name: 'Instagram', href: 'https://www.instagram.com/ai4allbyeif?igsh=MXdqYmE0NjFzMGZxMA==', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/@enterpriseincubatorfoundat9443', icon: Youtube },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold text-white mb-4">AI4ALL Armenia</h3>
              <p className="text-gray-300 mb-4">
                Democratizing AI education in Armenia by empowering youth (15-29) and teachers 
                across all regions with essential AI skills. An initiative by the Enterprise 
                Incubator Foundation (EIF) and USAID.
              </p>
              
              {/* Partner Logos */}
              <div className="flex items-center space-x-6 mb-6">
                <div className="text-sm text-gray-400">
                  <p className="font-medium">In partnership with:</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-white">EIF</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-white">USAID</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-white">AI4ALL</span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary-400" />
                  <span className="text-gray-300">info@eif.am</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-primary-400" />
                  <span className="text-gray-300">011219797</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-primary-400" />
                  <span className="text-gray-300">21/1 Bagrevand Street, Yerevan, Armenia 0062</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold mb-4 mt-6">About</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold mb-4 mt-6">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {currentYear} AI4ALL Armenia. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Powered by EIF and USAID
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
