'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Users, Award, TrendingUp, MapPin, BookOpen, Target } from 'lucide-react'

const StoryPage = () => {
  const timeline = [
    {
      year: '2024',
      quarter: 'Q1',
      title: 'The Vision',
      description: 'AI4ALL Armenia was conceptualized as part of the Enterprise Incubator Foundation\'s mission to democratize AI education.',
      icon: Target,
      color: 'from-blue-500 to-blue-600'
    },
    {
      year: '2024',
      quarter: 'Q2',
      title: 'Foundation & Planning',
      description: 'Team formation, curriculum development, and partnership establishment with educational institutions across Armenia.',
      icon: Users,
      color: 'from-green-500 to-green-600'
    },
    {
      year: '2024',
      quarter: 'Q3',
      title: 'Pilot Launch',
      description: 'First pilot programs launched in Yerevan and Gyumri, training 50 teachers and 75 students in AI fundamentals.',
      icon: BookOpen,
      color: 'from-purple-500 to-purple-600'
    },
    {
      year: '2024',
      quarter: 'Q4',
      title: 'Regional Expansion',
      description: 'Extended programs to Vanadzor, Kapan, and Goris, reaching 200+ participants across 5 regions.',
      icon: MapPin,
      color: 'from-orange-500 to-orange-600'
    },
    {
      year: '2025',
      quarter: 'Q1',
      title: 'National Reach',
      description: 'Achieved presence in all 11 regions of Armenia, with 500+ participants and 25+ completed programs.',
      icon: TrendingUp,
      color: 'from-red-500 to-red-600'
    },
    {
      year: '2025',
      quarter: 'Q2',
      title: 'Recognition & Growth',
      description: 'Received national recognition and expanded to serve 1000+ participants with enhanced curriculum.',
      icon: Award,
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  const milestones = [
    {
      number: '500+',
      label: 'Participants Trained',
      description: 'Educators and students empowered with AI skills'
    },
    {
      number: '25+',
      label: 'Programs Completed',
      description: 'Successful training programs across Armenia'
    },
    {
      number: '11',
      label: 'Regions Reached',
      description: 'Coverage across all Armenian regions'
    },
    {
      number: '95%',
      label: 'Success Rate',
      description: 'Participants completing their programs'
    }
  ]

  const challenges = [
    {
      challenge: 'Geographic Dispersion',
      solution: 'Hybrid learning model combining online and in-person training',
      impact: 'Reached remote regions without compromising quality'
    },
    {
      challenge: 'Varying Technical Backgrounds',
      solution: 'Multi-level curriculum with personalized learning paths',
      impact: 'Accommodated beginners to advanced learners'
    },
    {
      challenge: 'Limited Resources',
      solution: 'Strategic partnerships with local institutions',
      impact: 'Maximized impact through collaborative approach'
    },
    {
      challenge: 'Language Barriers',
      solution: 'Multilingual content in Armenian, English, and Russian',
      impact: 'Ensured accessibility for all participants'
    }
  ]

  const impact = [
    {
      title: 'Educational Transformation',
      description: 'Teachers across Armenia are now integrating AI tools into their classrooms, improving student engagement and learning outcomes.',
      stats: '200+ teachers trained'
    },
    {
      title: 'Youth Empowerment',
      description: 'Young learners are gaining future-ready skills, with many pursuing AI-related career paths and higher education.',
      stats: '300+ students certified'
    },
    {
      title: 'Regional Development',
      description: 'Rural regions now have access to the same quality AI education as urban centers, bridging the digital divide.',
      stats: '11 regions covered'
    },
    {
      title: 'Community Building',
      description: 'A network of AI enthusiasts, educators, and professionals is growing across Armenia, fostering collaboration and innovation.',
      stats: '500+ community members'
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
              Our Story
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-4xl mx-auto">
              From vision to reality: How AI4ALL Armenia became the leading AI education initiative transforming learning across the country.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Impact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Impact Today
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In just over a year, AI4ALL Armenia has transformed AI education across the country.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">{milestone.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{milestone.label}</div>
                <div className="text-sm text-gray-600">{milestone.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow our progress from conception to becoming Armenia&apos;s leading AI education initiative.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={`${item.year}-${item.quarter}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center mr-4`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-500">{item.year} {item.quarter}</div>
                          <div className="text-lg font-bold text-gray-900">{item.title}</div>
                        </div>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Challenges We&apos;ve Overcome
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every challenge was an opportunity to innovate and improve our approach to AI education.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((item, index) => (
              <motion.div
                key={item.challenge}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Challenge: {item.challenge}
                </h3>
                <div className="mb-4">
                  <h4 className="font-medium text-primary-600 mb-2">Our Solution:</h4>
                  <p className="text-gray-600">{item.solution}</p>
                </div>
                <div>
                  <h4 className="font-medium text-secondary-600 mb-2">Impact:</h4>
                  <p className="text-gray-600">{item.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Impact Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Real Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how AI4ALL Armenia is transforming education and communities across the country.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impact.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <div className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                    {item.stats}
                  </div>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              The Story Continues
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              This is just the beginning. Our vision is to make Armenia a leader in AI education, creating a generation of ethically-minded AI practitioners who will shape the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/apply"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Join Our Story
              </a>
              <a
                href="/impact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all inline-flex items-center justify-center"
              >
                Read More Stories
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default StoryPage
