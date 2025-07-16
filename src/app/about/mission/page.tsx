'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Target, Users, Globe, Heart, ArrowRight } from 'lucide-react'

const MissionPage = () => {
  const missionPoints = [
    {
      icon: Target,
      title: 'Democratize AI Education',
      description: 'Make AI education accessible to all educators and students across Armenia, regardless of their location or background.'
    },
    {
      icon: Users,
      title: 'Empower Educators',
      description: 'Provide teachers with the tools and knowledge to integrate AI into their teaching practices effectively.'
    },
    {
      icon: Globe,
      title: 'Build Future-Ready Skills',
      description: 'Equip young learners with essential AI skills for the digital economy and future career opportunities.'
    },
    {
      icon: Heart,
      title: 'Promote Ethical AI',
      description: 'Emphasize human-centered, ethical AI development to ensure responsible innovation and societal benefit.'
    }
  ]

  const values = [
    {
      title: 'Inclusivity',
      description: 'We believe AI education should be accessible to everyone, regardless of their background or location.'
    },
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and methodologies to deliver the most effective learning experiences.'
    },
    {
      title: 'Ethics',
      description: 'We prioritize ethical considerations in AI development and ensure responsible use of artificial intelligence.'
    },
    {
      title: 'Community',
      description: 'We foster a supportive community of learners, educators, and professionals committed to AI advancement.'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in our educational programs and continuously strive for improvement.'
    },
    {
      title: 'Collaboration',
      description: 'We work closely with educational institutions, government bodies, and industry partners to maximize impact.'
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Mission
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-4xl mx-auto">
              To democratize AI education across Armenia by empowering educators and students with the knowledge, skills, and ethical foundation needed to thrive in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              AI4ALL Armenia is more than an educational initiative—it's a movement to transform how Armenia approaches artificial intelligence. We believe that AI education should be accessible, ethical, and empowering for all.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {missionPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center">
                  <point.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              We envision an Armenia where every educator and student has the knowledge and tools to harness the power of artificial intelligence for positive change. A future where AI serves humanity, enhances creativity, and drives innovation while preserving our values and cultural heritage.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">2025</h3>
                <p className="text-gray-600">Reach 1,000+ participants across all 11 regions of Armenia</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">2027</h3>
                <p className="text-gray-600">Establish AI4ALL Armenia as the leading AI education platform in the region</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">2030</h3>
                <p className="text-gray-600">Create a sustainable ecosystem of AI-literate educators and innovators</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we approach AI education in Armenia.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-4 group-hover:w-6 group-hover:h-6 transition-all"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Be part of the AI revolution in Armenia. Together, we can build a brighter, more innovative future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/apply"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Apply to Programs
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all inline-flex items-center justify-center"
              >
                Get Involved
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default MissionPage
