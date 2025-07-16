'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, Facebook, Instagram, Youtube } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    inquiryType: 'general',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      inquiryType: 'general',
      message: '',
    })
    
    setIsSubmitting(false)
    alert('Thank you for your message! We will get back to you soon.')
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@eif.am',
      description: 'Send us an email and we\'ll respond within 24 hours',
      link: 'mailto:info@eif.am',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '011219797',
      description: 'Call us during business hours',
      link: 'tel:011219797',
    },
    {
      icon: MapPin,
      title: 'Office',
      value: 'Enterprise Incubator Foundation',
      description: '21/1 Bagrevand Street, Yerevan, Armenia 0062',
      link: 'https://maps.google.com/?q=21/1+Bagrevand+Street,+Yerevan,+Armenia+0062',
    },
    {
      icon: Clock,
      title: 'Hours',
      value: 'Mon - Fri: 9AM - 6PM',
      description: 'Armenia Time (GMT+4)',
      link: null,
    },
  ]

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/share/16wsrEXtcM/?mibextid=wwXIfr', icon: Facebook, color: 'text-blue-600' },
    { name: 'Instagram', href: 'https://www.instagram.com/ai4allbyeif?igsh=MXdqYmE0NjFzMGZxMA==', icon: Instagram, color: 'text-pink-600' },
    { name: 'YouTube', href: 'https://youtube.com/@enterpriseincubatorfoundat9443', icon: Youtube, color: 'text-red-600' },
  ]

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'programs', label: 'Program Information' },
    { value: 'application', label: 'Application Support' },
    { value: 'partnership', label: 'Partnership Opportunities' },
    { value: 'media', label: 'Media Inquiries' },
    { value: 'technical', label: 'Technical Support' },
  ]

  const faqs = [
    {
      question: 'How can I apply for AI4ALL Armenia programs?',
      answer: 'You can apply through our online application portal. Visit our Programs page to learn more about eligibility and application deadlines.',
    },
    {
      question: 'Are there any fees for the programs?',
      answer: 'No, all AI4ALL Armenia programs are completely free thanks to support from EIF and USAID.',
    },
    {
      question: 'Can I participate if I live outside Yerevan?',
      answer: 'Absolutely! Our programs are designed to reach all regions of Armenia with online delivery and regional workshops.',
    },
    {
      question: 'What technical requirements do I need?',
      answer: 'You need a computer with internet access and basic software that we\'ll help you install.',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with our team for questions, partnerships, or support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                {info.link ? (
                  <a 
                    href={info.link}
                    className="text-lg font-medium text-primary-600 hover:text-primary-700 transition-colors block mb-2"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-lg font-medium text-gray-900 mb-2">{info.value}</p>
                )}
                <p className="text-gray-600 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Have a question or want to learn more about AI4ALL Armenia? We'd love to hear from you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    {inquiryTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Brief subject line"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Additional Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Social Media */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h3>
                <p className="text-gray-600 mb-6">
                  Stay connected with AI4ALL Armenia on social media for the latest updates, 
                  success stories, and community highlights.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className={`p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h3>
                <div className="bg-gray-100 rounded-lg p-8 text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">
                    Enterprise Incubator Foundation<br />
                    Yerevan, Armenia
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Interactive map coming soon
                  </p>
                </div>
              </div>

              {/* Quick FAQs */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Answers</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-gray-50 rounded-lg p-4"
                    >
                      <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership & Media Section */}
      <section id="partnership" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Partnership Opportunities</h2>
              <p className="text-gray-600 mb-6">
                We're always looking for organizations that share our vision of democratizing 
                AI education in Armenia. Partner with us to expand our impact.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Corporate partnerships and sponsorships</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Educational institution collaborations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Technology provider partnerships</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Mentorship and speaker opportunities</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              id="media"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Media Inquiries</h2>
              <p className="text-gray-600 mb-6">
                Media professionals can contact us for interviews, press releases, 
                and access to program information and participant stories.
              </p>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="font-semibold text-gray-900 mb-4">Media Contact</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Email: info@eif.am</p>
                  <p>Phone: 011219797</p>
                  <p>Response time: Within 2 hours during business hours</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
