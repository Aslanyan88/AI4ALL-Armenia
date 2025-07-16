'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Users, GraduationCap, Award, TrendingUp, Calendar, BookOpen } from 'lucide-react'

const HomePage = () => {
  const impactStats = [
    { label: 'Participants Empowered', value: '500+', icon: Users },
    { label: 'Regions Reached', value: '11', icon: TrendingUp },
    { label: 'Programs Completed', value: '25+', icon: GraduationCap },
    { label: 'Success Rate', value: '95%', icon: Award },
  ]

  const programs = [
    {
      title: 'AI for Teachers',
      description: 'Empower educators with AI tools for modern pedagogy and enhanced classroom efficiency.',
      features: ['AI-Powered Lesson Planning', 'Automated Assessment', 'Classroom Management', 'Ethical AI Education'],
      cta: 'Learn More',
      href: '/programs/teachers',
      icon: GraduationCap,
    },
    {
      title: 'AI for Youth',
      description: 'Equip young learners with essential AI skills for future-ready careers in technology.',
      features: ['Python for Data Science', 'Machine Learning Basics', 'Deep Learning Fundamentals', 'Hands-on Projects'],
      cta: 'Learn More',
      href: '/programs/youth',
      icon: Users,
    },
  ]

  const testimonials = [
    {
      name: 'Karine Mayilyan',
      role: 'Teacher, Yerevan',
      quote: 'AI4ALL Armenia transformed my teaching approach. I now use AI tools to create engaging lessons and assess student progress more efficiently.',
      region: 'Yerevan',
    },
    {
      name: 'Armen Sargsyan',
      role: 'Student, Gyumri',
      quote: 'The program opened my eyes to the possibilities of AI. I\'m now pursuing a career in machine learning thanks to AI4ALL Armenia.',
      region: 'Gyumri',
    },
  ]

  const upcomingEvents = [
    {
      date: 'Jul 25, 2025',
      title: 'AI for Teachers Info Session',
      location: 'Online',
      type: 'Webinar',
    },
    {
      date: 'Aug 1, 2025',
      title: 'Youth Program Applications Open',
      location: 'Nationwide',
      type: 'Application',
    },
    {
      date: 'Aug 15, 2025',
      title: 'AI Workshop - Vanadzor',
      location: 'Vanadzor Tech Center',
      type: 'Workshop',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-800 via-blue-800 to-indigo-800 text-white overflow-hidden flex items-center">
        {/* Enhanced background with multiple layers */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800/40 via-transparent to-indigo-800/40"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-40 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="inline-block bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent px-4 py-2 rounded-full text-sm font-bold border border-blue-300/50 bg-white/20 backdrop-blur-sm">
                  Enterprise Incubator Foundation
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="block text-white">AI4ALL Armenia:</span>
                <span className="block bg-gradient-to-r from-blue-200 via-cyan-200 to-teal-200 bg-clip-text text-transparent">
                  Empowering Our Nation's Future
                </span>
                <span className="block text-3xl md:text-4xl mt-2 text-blue-100">
                  with AI
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-blue-50 leading-relaxed font-medium">
                An initiative bringing cutting-edge, human-centered AI education to every region of Armenia.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/programs"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                >
                  Explore Programs
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/apply"
                  className="border-2 border-blue-200 text-blue-50 px-8 py-4 rounded-lg font-semibold hover:bg-blue-100 hover:text-blue-900 transition-all transform hover:scale-105 inline-flex items-center justify-center"
                >
                  Apply Now
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-2xl">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-300 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-300 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-4 left-4 w-4 h-4 bg-teal-300 rounded-full animate-pulse delay-500"></div>
                
                <div className="grid grid-cols-2 gap-6">
                  {impactStats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="text-center p-4 bg-white/15 rounded-lg border border-white/30 hover:bg-white/25 transition-all"
                    >
                      <stat.icon className="w-10 h-10 mx-auto mb-3 text-blue-200" />
                      <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-blue-100 font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Enhanced decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-300/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-300/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-300/8 to-teal-300/8 rounded-full blur-3xl"></div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-white">
            <span className="text-sm mb-2 font-medium">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
            >
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Why AI4ALL Armenia Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Why AI4ALL Armenia?
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Armenia's tech landscape is rapidly evolving, and AI literacy is crucial for future readiness. 
              Our program bridges skills gaps, fosters innovation, and promotes ethical AI development 
              across all regions of Armenia.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group border border-slate-200"
            >
              <div className="bg-gradient-to-r from-blue-100 to-blue-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-10 h-10 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4 text-center">Inclusive Access</h3>
              <p className="text-slate-700 text-center">
                Reaching youth and teachers across all 11 regions of Armenia, ensuring no one is left behind 
                in the AI revolution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group border border-slate-200"
            >
              <div className="bg-gradient-to-r from-emerald-100 to-emerald-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-10 h-10 text-emerald-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4 text-center">Practical Skills</h3>
              <p className="text-slate-700 text-center">
                Hands-on learning with real-world applications, preparing participants for immediate 
                impact in their careers and communities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group border border-slate-200"
            >
              <div className="bg-gradient-to-r from-orange-100 to-orange-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-10 h-10 text-orange-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4 text-center">Ethical Foundation</h3>
              <p className="text-slate-700 text-center">
                Emphasizing human-centered, ethical AI development to ensure responsible innovation 
                and societal benefit.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Our Programs
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Choose the program that fits your goals and start your AI journey today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-slate-200 group-hover:border-blue-300">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mr-4 ${
                      index === 0 ? 'bg-gradient-to-r from-blue-600 to-blue-700' : 'bg-gradient-to-r from-emerald-600 to-emerald-700'
                    }`}>
                      <program.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{program.title}</h3>
                  </div>
                  <p className="text-slate-700 mb-6 text-lg">{program.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-slate-700">
                        <div className={`w-3 h-3 rounded-full mr-3 ${
                          index === 0 ? 'bg-blue-600' : 'bg-emerald-600'
                        }`}></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={program.href}
                    className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                      index === 0 
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800' 
                        : 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800'
                    }`}
                  >
                    {program.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Voices of AI4ALL Armenia
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Hear from our participants about their transformative journey with AI4ALL Armenia.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-lg">{testimonial.name}</div>
                    <div className="text-slate-600">{testimonial.role}</div>
                    <div className="text-sm text-slate-500 flex items-center mt-1">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {testimonial.region}
                    </div>
                  </div>
                </div>
                <blockquote className="text-slate-700 text-lg mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-slate-500">Participant Story</span>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/impact"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Read All Stories
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Upcoming Events
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Stay updated with our latest events, workshops, and program announcements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-50 rounded-lg p-6 hover:shadow-lg transition-shadow border border-slate-200"
              >
                <div className="flex items-center mb-3">
                  <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-blue-600 font-semibold">{event.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{event.title}</h3>
                <p className="text-slate-700 text-sm mb-2">{event.location}</p>
                <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                  {event.type}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/news"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              View All News & Events
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
