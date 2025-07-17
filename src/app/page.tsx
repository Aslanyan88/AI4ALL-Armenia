'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Users, GraduationCap, Award, TrendingUp, Calendar, BookOpen } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const HomePage = () => {
  const { t } = useLanguage()
  const impactStats = [
    { label: t('participantsEmpowered'), value: '500+', icon: Users },
    { label: t('regionsReached'), value: '11', icon: TrendingUp },
    { label: t('programsCompleted'), value: '25+', icon: GraduationCap },
    { label: t('successRate'), value: '95%', icon: Award },
  ]

  const programs = [
    {
      title: t('aiForTeachers'),
      description: t('teachersDescription'),
      features: [t('aiPoweredLessons'), t('automatedAssessment'), t('classroomManagement'), t('ethicalAIEducation')],
      cta: t('learnMore'),
      href: '/programs/teachers',
      icon: GraduationCap,
    },
    {
      title: t('aiForYouth'),
      description: t('youthDescription'),
      features: [t('pythonDataScience'), t('machineLearningBasics'), t('deepLearningFundamentals'), t('handsOnProjects')],
      cta: t('learnMore'),
      href: '/programs/youth',
      icon: Users,
    },
  ]

  const testimonials = [
    {
      name: 'Karine Mayilyan',
      role: t('karineRole'),
      quote: t('karineTestimonial'),
      region: 'Yerevan',
    },
    {
      name: 'Armen Sargsyan',
      role: t('armenRole'),
      quote: t('armenTestimonial'),
      region: 'Gyumri',
    },
  ]

  const upcomingEvents = [
    {
      date: 'Jul 25, 2025',
      title: t('aiTeachersInfoSession'),
      location: 'Online',
      type: t('webinar'),
    },
    {
      date: 'Aug 1, 2025',
      title: t('youthApplicationsOpen'),
      location: 'Nationwide',
      type: t('application'),
    },
    {
      date: 'Aug 15, 2025',
      title: t('aiWorkshopVanadzor'),
      location: 'Vanadzor Tech Center',
      type: t('workshop'),
    },
  ]

  return (
    <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-800 via-blue-800 to-indigo-800 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 text-white overflow-hidden flex items-center transition-colors duration-300">
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
                  {t('heroFoundation')}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="block text-white">{t('heroTitle')}</span>
                <span className="block bg-gradient-to-r from-blue-200 via-cyan-200 to-teal-200 bg-clip-text text-transparent">
                  {t('heroSubtitle')}
                </span>
                <span className="block text-3xl md:text-4xl mt-2 text-blue-100">
                  {t('heroTagline')}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-blue-50 leading-relaxed font-medium">
                {t('heroDescription')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/programs"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                >
                  {t('explorePrograms')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/apply"
                  className="border-2 border-blue-200 text-blue-50 px-8 py-4 rounded-lg font-semibold hover:bg-blue-100 hover:text-blue-900 transition-all transform hover:scale-105 inline-flex items-center justify-center"
                >
                  {t('applyNow')}
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
            <span className="text-sm mb-2 font-medium">{t('scrollToExplore')}</span>
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
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 min-h-[4rem] flex items-center justify-center transition-colors duration-300">
              {t('whyAI4ALL')}
            </h2>
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto min-h-[6rem] flex items-center justify-center leading-relaxed transition-colors duration-300">
              {t('whyDescription')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-slate-700 rounded-xl p-8 shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all group border border-slate-200 dark:border-slate-600 min-h-[320px] flex flex-col"
            >
              <div className="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-10 h-10 text-blue-700 dark:text-blue-200" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 text-center min-h-[3rem] flex items-center justify-center transition-colors">{t('inclusiveAccess')}</h3>
              <p className="text-slate-700 dark:text-slate-300 text-center leading-relaxed flex-grow flex items-center transition-colors">
                {t('inclusiveDescription')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-slate-700 rounded-xl p-8 shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all group border border-slate-200 dark:border-slate-600 min-h-[320px] flex flex-col"
            >
              <div className="bg-gradient-to-r from-emerald-100 to-emerald-200 dark:from-emerald-800 dark:to-emerald-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-10 h-10 text-emerald-700 dark:text-emerald-200" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 text-center min-h-[3rem] flex items-center justify-center transition-colors">{t('practicalSkills')}</h3>
              <p className="text-slate-700 dark:text-slate-300 text-center leading-relaxed flex-grow flex items-center transition-colors">
                {t('practicalDescription')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white dark:bg-slate-700 rounded-xl p-8 shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all group border border-slate-200 dark:border-slate-600 min-h-[320px] flex flex-col"
            >
              <div className="bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-800 dark:to-orange-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-10 h-10 text-orange-700 dark:text-orange-200" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 text-center min-h-[3rem] flex items-center justify-center transition-colors">{t('ethicalFoundation')}</h3>
              <p className="text-slate-700 dark:text-slate-300 text-center leading-relaxed flex-grow flex items-center transition-colors">
                {t('ethicalDescription')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Highlights */}
      <section className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 min-h-[4rem] flex items-center justify-center transition-colors duration-300">
              {t('programsTitle')}
            </h2>
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto min-h-[3rem] flex items-center justify-center transition-colors duration-300">
              {t('programsSubtitle')}
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
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-600 group-hover:border-blue-300 dark:group-hover:border-blue-500 min-h-[420px] flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mr-4 ${
                      index === 0 ? 'bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600' : 'bg-gradient-to-r from-emerald-600 to-emerald-700 dark:from-emerald-500 dark:to-emerald-600'
                    }`}>
                      <program.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight transition-colors">{program.title}</h3>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-6 text-lg leading-relaxed min-h-[5rem] flex-grow transition-colors">{program.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-slate-700 dark:text-slate-300 transition-colors">
                        <div className={`w-3 h-3 rounded-full mr-3 flex-shrink-0 ${
                          index === 0 ? 'bg-blue-600 dark:bg-blue-500' : 'bg-emerald-600 dark:bg-emerald-500'
                        }`}></div>
                        <span className="text-sm leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={program.href}
                    className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 mt-auto ${
                      index === 0 
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white' 
                        : 'bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 dark:from-emerald-500 dark:to-emerald-600 dark:hover:from-emerald-600 dark:hover:to-emerald-700 text-white'
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 min-h-[4rem] flex items-center justify-center transition-colors duration-300">
              {t('testimonialsSectionTitle')}
            </h2>
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto min-h-[3rem] flex items-center justify-center leading-relaxed transition-colors duration-300">
              {t('testimonialsSectionSubtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 min-h-[360px] flex flex-col"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white text-lg transition-colors">{testimonial.name}</div>
                    <div className="text-slate-600 dark:text-slate-400 transition-colors">{testimonial.role}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 flex items-center mt-1 transition-colors">
                      <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
                      {testimonial.region}
                    </div>
                  </div>
                </div>
                <blockquote className="text-slate-700 dark:text-slate-300 text-lg mb-6 italic leading-relaxed flex-grow transition-colors">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center">
                    <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400 transition-colors">{t('participantStory')}</span>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-orange-400 dark:bg-orange-500 rounded-full"></div>
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
              {t('readAllStories')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 min-h-[4rem] flex items-center justify-center transition-colors duration-300">
              {t('upcomingEvents')}
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto min-h-[3rem] flex items-center justify-center leading-relaxed">
              {t('upcomingEventsSubtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-50 rounded-lg p-6 hover:shadow-lg transition-shadow border border-slate-200 min-h-[180px] flex flex-col"
              >
                <div className="flex items-center mb-3">
                  <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-blue-600 font-semibold">{event.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 leading-tight min-h-[3rem] flex items-start">{event.title}</h3>
                <p className="text-slate-700 text-sm mb-2 flex-grow">{event.location}</p>
                <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium mt-auto self-start">
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
              {t('viewAllNews')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
