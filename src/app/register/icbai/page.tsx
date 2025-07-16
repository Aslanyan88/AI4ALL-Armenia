'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, MapPin, Users, CheckCircle, ArrowLeft, User, Mail, Phone, Building, TrendingUp, Briefcase } from 'lucide-react'

export default function ICBAIRegistration() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    industry: '',
    experience: '',
    interests: '',
    presentation: '',
    projectTitle: '',
    projectDescription: '',
    networkingGoals: '',
    dietaryRestrictions: '',
    heardAbout: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mx-4 text-center"
        >
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Registration Successful!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for registering for the International Conference on Business and AI. You'll receive a confirmation email shortly with conference details and networking opportunities.
          </p>
          <div className="space-y-2 text-sm text-gray-600 mb-6">
            <p><strong>Date:</strong> December 11, 2025</p>
            <p><strong>Time:</strong> 09:00 - 17:00</p>
            <p><strong>Location:</strong> Yerevan, Armenia</p>
          </div>
          <Link
            href="/news"
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors"
          >
            Back to News
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              href="/news" 
              className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to News
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              International Conference on Business and AI
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl">
              Annual conference exploring the intersection of AI and business, featuring keynotes from AI4ALL Armenia mentors and industry partners.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-blue-200 mr-3" />
                <div>
                  <p className="text-sm text-blue-200">Date</p>
                  <p className="font-semibold">December 11, 2025</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-blue-200 mr-3" />
                <div>
                  <p className="text-sm text-blue-200">Time</p>
                  <p className="font-semibold">09:00 - 17:00</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-200 mr-3" />
                <div>
                  <p className="text-sm text-blue-200">Location</p>
                  <p className="font-semibold">Yerevan, Armenia</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conference Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Conference Overview</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <TrendingUp className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Topics</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• AI-Driven Business Transformation</li>
                  <li>• Machine Learning in Finance</li>
                  <li>• Customer Experience Enhancement</li>
                  <li>• Automated Decision Making</li>
                  <li>• AI Ethics in Business</li>
                  <li>• Future of Work with AI</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Briefcase className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Who Should Attend</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Business Leaders and Executives</li>
                  <li>• Technology Managers</li>
                  <li>• Data Scientists and Analysts</li>
                  <li>• AI4ALL Armenia Alumni</li>
                  <li>• Entrepreneurs and Startups</li>
                  <li>• Investors and Venture Capitalists</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Conference Schedule</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">09:00 - 09:30 AM: Registration & Networking</h4>
                  <p className="text-gray-600">Welcome coffee and early networking opportunities</p>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">09:30 - 10:30 AM: Opening Keynote</h4>
                  <p className="text-gray-600">"The Future of AI in Global Business" by industry leader</p>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">10:30 - 12:00 PM: Panel Discussion</h4>
                  <p className="text-gray-600">AI4ALL Armenia mentors discuss real-world implementations</p>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">12:00 - 13:00 PM: Networking Lunch</h4>
                  <p className="text-gray-600">Structured networking with industry partners</p>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">13:00 - 14:30 PM: Case Studies</h4>
                  <p className="text-gray-600">Success stories from Armenian companies implementing AI</p>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">14:30 - 16:00 PM: Interactive Workshops</h4>
                  <p className="text-gray-600">Hands-on workshops on AI business applications</p>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">16:00 - 17:00 PM: Closing & Future Outlook</h4>
                  <p className="text-gray-600">Closing remarks and announcement of next year's conference</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Register for ICBAI 2025</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company/Organization *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Title/Position *
                </label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry *
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select industry</option>
                  <option value="technology">Technology</option>
                  <option value="finance">Finance & Banking</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="retail">Retail & E-commerce</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="education">Education</option>
                  <option value="consulting">Consulting</option>
                  <option value="government">Government</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience *
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select experience</option>
                  <option value="1-2">1-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="6-10">6-10 years</option>
                  <option value="11-20">11-20 years</option>
                  <option value="20+">20+ years</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Areas of Interest
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'AI Strategy',
                    'Machine Learning',
                    'Business Intelligence',
                    'Process Automation',
                    'Customer Analytics',
                    'AI Ethics',
                    'Digital Transformation',
                    'Innovation Management'
                  ].map((interest) => (
                    <label key={interest} className="flex items-center">
                      <input
                        type="checkbox"
                        value={interest}
                        onChange={(e) => {
                          const interests = formData.interests.split(',').filter(i => i.trim())
                          if (e.target.checked) {
                            interests.push(interest)
                          } else {
                            const index = interests.indexOf(interest)
                            if (index > -1) interests.splice(index, 1)
                          }
                          setFormData(prev => ({
                            ...prev,
                            interests: interests.join(', ')
                          }))
                        }}
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Presentation/Demo
                </label>
                <select
                  name="presentation"
                  value={formData.presentation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select if presenting</option>
                  <option value="case-study">Case Study Presentation</option>
                  <option value="product-demo">Product Demo</option>
                  <option value="research-findings">Research Findings</option>
                  <option value="panel-discussion">Panel Discussion</option>
                  <option value="none">Attending Only</option>
                </select>
              </div>
              
              {formData.presentation && formData.presentation !== 'none' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Presentation Title *
                    </label>
                    <input
                      type="text"
                      name="projectTitle"
                      value={formData.projectTitle}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Presentation Description *
                    </label>
                    <textarea
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Please describe your presentation topic and key points..."
                    />
                  </div>
                </>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Networking Goals
                </label>
                <textarea
                  name="networkingGoals"
                  value={formData.networkingGoals}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="What do you hope to achieve through networking at this conference?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dietary Restrictions
                </label>
                <input
                  type="text"
                  name="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="e.g., Vegetarian, Vegan, Allergies"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How did you hear about this conference?
                </label>
                <select
                  name="heardAbout"
                  value={formData.heardAbout}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Please select</option>
                  <option value="ai4all">AI4ALL Armenia</option>
                  <option value="company">Company/Organization</option>
                  <option value="colleague">Colleague/Peer</option>
                  <option value="social-media">Social Media</option>
                  <option value="professional-network">Professional Network</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 text-white py-3 px-6 rounded-md font-medium hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Registering...' : 'Register for Conference'}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Conference Image */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-64 md:h-96 rounded-lg overflow-hidden"
          >
            <Image
              src="/news/International Conference on Business and AI.png"
              alt="International Conference on Business and AI"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
