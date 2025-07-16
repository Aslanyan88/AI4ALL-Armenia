'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, MapPin, Users, CheckCircle, ArrowLeft, User, Mail, Phone, GraduationCap, BookOpen, Award } from 'lucide-react'

export default function ICRAETRegistration() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    institution: '',
    position: '',
    expertise: '',
    presentation: '',
    projectTitle: '',
    projectDescription: '',
    dietaryRestrictions: '',
    accommodations: '',
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
            Thank you for registering for ICRAET 2025. You'll receive a confirmation email shortly with conference details and presentation guidelines.
          </p>
          <div className="space-y-2 text-sm text-gray-600 mb-6">
            <p><strong>Date:</strong> July 11, 2025</p>
            <p><strong>Time:</strong> 09:00 - 18:00</p>
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
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              International Conference on Recent Advances in Engineering and Technology
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl">
              AI4ALL Armenia participants present their innovative projects at this prestigious international conference, showcasing the latest developments in engineering and technology.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-blue-200 mr-3" />
                <div>
                  <p className="text-sm text-blue-200">Date</p>
                  <p className="font-semibold">July 11, 2025</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-blue-200 mr-3" />
                <div>
                  <p className="text-sm text-blue-200">Time</p>
                  <p className="font-semibold">09:00 - 18:00</p>
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
                <BookOpen className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Conference Themes</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Artificial Intelligence and Machine Learning</li>
                  <li>• Data Science and Analytics</li>
                  <li>• Sustainable Engineering Solutions</li>
                  <li>• Digital Transformation Technologies</li>
                  <li>• Innovation in Engineering Education</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Award className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Conference Benefits</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Present your research to international audience</li>
                  <li>• Network with industry professionals</li>
                  <li>• Publication opportunities</li>
                  <li>• Professional development certificates</li>
                  <li>• Access to cutting-edge research</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Conference Schedule</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">09:00 - 09:30 AM: Registration & Welcome</h4>
                  <p className="text-gray-600">Participant check-in and opening ceremony</p>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">09:30 - 10:30 AM: Keynote Presentation</h4>
                  <p className="text-gray-600">Opening keynote on "The Future of AI in Engineering"</p>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">10:30 - 12:00 PM: Technical Sessions I</h4>
                  <p className="text-gray-600">Parallel sessions on AI applications and engineering solutions</p>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">12:00 - 13:30 PM: Lunch & Networking</h4>
                  <p className="text-gray-600">Networking lunch with poster presentations</p>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">13:30 - 15:00 PM: Technical Sessions II</h4>
                  <p className="text-gray-600">AI4ALL Armenia participant presentations</p>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">15:00 - 16:30 PM: Panel Discussion</h4>
                  <p className="text-gray-600">Industry experts panel on emerging technologies</p>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">16:30 - 18:00 PM: Awards & Closing</h4>
                  <p className="text-gray-600">Best paper awards and closing ceremony</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Register for ICRAET 2025</h2>
            
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
                  Institution/Organization *
                </label>
                <input
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Position/Role *
                </label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select position</option>
                  <option value="student">Student</option>
                  <option value="researcher">Researcher</option>
                  <option value="faculty">Faculty/Professor</option>
                  <option value="engineer">Engineer</option>
                  <option value="manager">Manager</option>
                  <option value="consultant">Consultant</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Area of Expertise *
                </label>
                <select
                  name="expertise"
                  value={formData.expertise}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select area</option>
                  <option value="ai-ml">Artificial Intelligence & Machine Learning</option>
                  <option value="data-science">Data Science & Analytics</option>
                  <option value="software-engineering">Software Engineering</option>
                  <option value="computer-science">Computer Science</option>
                  <option value="electrical-engineering">Electrical Engineering</option>
                  <option value="mechanical-engineering">Mechanical Engineering</option>
                  <option value="civil-engineering">Civil Engineering</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Presentation Type
                </label>
                <select
                  name="presentation"
                  value={formData.presentation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select if presenting</option>
                  <option value="oral">Oral Presentation</option>
                  <option value="poster">Poster Presentation</option>
                  <option value="demo">Technical Demo</option>
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
                      Abstract/Description *
                    </label>
                    <textarea
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Please provide a detailed abstract of your presentation..."
                    />
                  </div>
                </>
              )}
              
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
                  Special Accommodations
                </label>
                <textarea
                  name="accommodations"
                  value={formData.accommodations}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Any special requirements or accommodations needed..."
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
                  <option value="university">University/Institution</option>
                  <option value="colleague">Colleague/Peer</option>
                  <option value="conference-website">Conference Website</option>
                  <option value="social-media">Social Media</option>
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
              src="/news/nternational Conference on Recent Advances in Engineering and.png"
              alt="International Conference on Recent Advances in Engineering and Technology"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
