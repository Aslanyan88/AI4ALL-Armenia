'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, MapPin, Users, CheckCircle, ArrowLeft, User, Mail, Phone, GraduationCap, Book, Target } from 'lucide-react'

export default function VanadzorWorkshopRegistration() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    education: '',
    background: '',
    aiExperience: '',
    interests: '',
    expectations: '',
    transportation: '',
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
            Thank you for registering for the AI Workshop at Vanadzor Tech Center. You'll receive a confirmation email shortly with location details and preparation materials.
          </p>
          <div className="space-y-2 text-sm text-gray-600 mb-6">
            <p><strong>Date:</strong> August 15, 2025</p>
            <p><strong>Time:</strong> 10:00 - 16:00</p>
            <p><strong>Location:</strong> Vanadzor Tech Center, Vanadzor</p>
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
              AI Workshop - Vanadzor Tech Center
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl">
              Hands-on AI workshop for Lori region participants, covering practical applications of machine learning in agriculture and industry.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-blue-200 mr-3" />
                <div>
                  <p className="text-sm text-blue-200">Date</p>
                  <p className="font-semibold">August 15, 2025</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-blue-200 mr-3" />
                <div>
                  <p className="text-sm text-blue-200">Time</p>
                  <p className="font-semibold">10:00 - 16:00</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-200 mr-3" />
                <div>
                  <p className="text-sm text-blue-200">Location</p>
                  <p className="font-semibold">Vanadzor Tech Center</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center">
              <Users className="w-5 h-5 text-blue-200 mr-3" />
              <div>
                <p className="text-sm text-blue-200">Limited Spaces</p>
                <p className="font-semibold">25 participants maximum</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workshop Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Workshop Overview</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Target className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Learning Objectives</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Understand AI applications in agriculture</li>
                  <li>• Learn machine learning basics</li>
                  <li>• Build practical AI models</li>
                  <li>• Explore industrial AI use cases</li>
                  <li>• Network with regional professionals</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Book className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Workshop Topics</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• AI in precision agriculture</li>
                  <li>• Crop monitoring systems</li>
                  <li>• Industrial automation</li>
                  <li>• Data analysis techniques</li>
                  <li>• AI ethics and sustainability</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Detailed Schedule</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">10:00 - 10:30 AM: Registration & Welcome</h4>
                  <p className="text-gray-600">Check-in, networking, and introductory presentation</p>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">10:30 - 12:00 PM: AI Fundamentals</h4>
                  <p className="text-gray-600">Introduction to artificial intelligence and machine learning concepts</p>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">12:00 - 13:00 PM: Lunch Break</h4>
                  <p className="text-gray-600">Networking lunch with local refreshments</p>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">13:00 - 14:30 PM: AI in Agriculture</h4>
                  <p className="text-gray-600">Hands-on workshop on agricultural AI applications</p>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">14:30 - 15:45 PM: Industrial AI</h4>
                  <p className="text-gray-600">Practical exercises with industrial automation and monitoring</p>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">15:45 - 16:00 PM: Q&A & Closing</h4>
                  <p className="text-gray-600">Final questions, resources, and next steps</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Register for the Workshop</h2>
            
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
                  Age *
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                  min="15"
                  max="65"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Education Level *
                </label>
                <select
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select education level</option>
                  <option value="high-school">High School</option>
                  <option value="vocational">Vocational Training</option>
                  <option value="bachelor">Bachelor's Degree</option>
                  <option value="master">Master's Degree</option>
                  <option value="doctorate">Doctorate</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Professional Background *
                </label>
                <select
                  name="background"
                  value={formData.background}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select background</option>
                  <option value="agriculture">Agriculture/Farming</option>
                  <option value="engineering">Engineering</option>
                  <option value="technology">Technology/IT</option>
                  <option value="education">Education</option>
                  <option value="business">Business/Management</option>
                  <option value="student">Student</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  AI/Programming Experience
                </label>
                <select
                  name="aiExperience"
                  value={formData.aiExperience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select experience level</option>
                  <option value="none">No experience</option>
                  <option value="basic">Basic (some exposure)</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Specific Interest Areas
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Precision Agriculture',
                    'Crop Monitoring',
                    'Industrial Automation',
                    'Data Analysis',
                    'Sustainability',
                    'Machine Learning',
                    'IoT Applications',
                    'Business Intelligence'
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
                  What do you hope to achieve from this workshop?
                </label>
                <textarea
                  name="expectations"
                  value={formData.expectations}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell us about your goals and expectations..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Transportation
                </label>
                <select
                  name="transportation"
                  value={formData.transportation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select transportation</option>
                  <option value="own">Own transportation</option>
                  <option value="public">Public transportation</option>
                  <option value="need-assistance">Need assistance</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How did you hear about this workshop?
                </label>
                <select
                  name="heardAbout"
                  value={formData.heardAbout}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Please select</option>
                  <option value="website">AI4ALL Armenia Website</option>
                  <option value="social-media">Social Media</option>
                  <option value="colleague">Colleague/Friend</option>
                  <option value="local-organization">Local Organization</option>
                  <option value="newsletter">Newsletter</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 text-white py-3 px-6 rounded-md font-medium hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Registering...' : 'Register for Workshop'}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Workshop Image */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-64 md:h-96 rounded-lg overflow-hidden"
          >
            <Image
              src="/news/AI Workshop - Vanadzor Tech Center.png"
              alt="AI Workshop - Vanadzor Tech Center"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
