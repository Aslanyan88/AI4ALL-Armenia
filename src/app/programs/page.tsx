'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { GraduationCap, Users, Clock, Calendar, CheckCircle, ArrowRight, Plus, Minus } from 'lucide-react'

const ProgramsPage = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const teacherProgram = {
    title: 'AI for Teachers',
    subtitle: 'Empowering Educators with AI Tools',
    description: 'Transform your teaching approach with cutting-edge AI tools designed for modern pedagogy.',
    icon: GraduationCap,
    modules: [
      'AI-Powered Lesson Planning',
      'Automated Test & Assessment Generation',
      'AI for Classroom Management & Efficiency',
      'Ethical AI in Education',
      'Data-Driven Student Progress Analysis',
      'AI Tools for Content Creation',
      'Personalized Learning with AI',
      'AI-Assisted Grading Systems',
    ],
    benefits: [
      'Enhanced professional development',
      'Increased classroom efficiency',
      'Modern pedagogical approaches',
      'Leadership in technology integration',
      'Improved student engagement',
      'Data-driven teaching decisions',
    ],
    eligibility: [
      'Age up to 29 years',
      'Current or future teacher in Armenia',
      'Basic computer literacy',
      'Commitment to complete the program',
      'Interest in educational technology',
    ],
    structure: {
      duration: '8-week intensive program',
      format: 'Blended learning: online modules + live virtual workshops',
      schedule: 'Evenings and weekends to accommodate teaching schedules',
      certification: 'AI4ALL Armenia Teacher Certificate',
    },
    applicationProcess: [
      'Complete online application form',
      'Submit teaching credentials or education background',
      'Provide motivation letter (500 words)',
      'Participate in virtual interview',
      'Complete basic AI readiness assessment',
    ],
  }

  const youthProgram = {
    title: 'AI for Youth',
    subtitle: 'Building Tomorrow\'s AI Leaders',
    description: 'Develop essential AI skills for future-ready careers in technology.',
    icon: Users,
    modules: [
      'Introduction to AI & Machine Learning',
      'Python for Data Science',
      'Fundamentals of Deep Learning',
      'Natural Language Processing Basics',
      'Computer Vision Essentials',
      'Ethical AI & Societal Impact',
      'Hands-on Project Development',
      'AI in Industry Applications',
    ],
    benefits: [
      'Highly sought-after technical skills',
      'Enhanced critical thinking abilities',
      'Problem-solving skill development',
      'Career pathways in diverse AI fields',
      'Access to professional networks',
      'Portfolio of real-world projects',
    ],
    eligibility: [
      'Age 15-29 years',
      'Residing in Armenia',
      'High school diploma or equivalent',
      'Basic programming knowledge (preferred)',
      'Commitment to complete the program',
    ],
    structure: {
      duration: '12-week foundational course + 6-month advanced track',
      format: 'Interactive lectures, coding labs, group projects',
      schedule: 'Weekend sessions and online modules',
      certification: 'AI4ALL Armenia Youth Certificate',
    },
    applicationProcess: [
      'Complete online application form',
      'Submit educational transcripts',
      'Provide personal statement (750 words)',
      'Complete coding assessment (basic)',
      'Participate in group interview session',
    ],
  }

  const faqs = [
    {
      question: 'What are the technical requirements for the programs?',
      answer: 'You need a computer with internet access, basic software that we\'ll help you install, and enthusiasm to learn. We provide all necessary learning materials and software licenses.',
    },
    {
      question: 'How much time commitment is required?',
      answer: 'Teachers program: 6-8 hours per week. Youth program: 10-12 hours per week. We understand participants have other commitments, so the schedule is flexible.',
    },
    {
      question: 'Are there any fees for the programs?',
      answer: 'No, all AI4ALL Armenia programs are completely free thanks to support from EIF. This includes all materials, software, and certification.',
    },
    {
      question: 'What certification do I receive upon completion?',
      answer: 'Graduates receive an AI4ALL Armenia certificate recognized by local tech companies and educational institutions. We also provide LinkedIn certificates and portfolio development support.',
    },
    {
      question: 'Can I participate if I live outside Yerevan?',
      answer: 'Absolutely! Our programs are designed to reach all regions of Armenia. Most content is delivered online, with some regional workshops and meetups.',
    },
    {
      question: 'What job opportunities are available after completion?',
      answer: 'Graduates find opportunities in AI development, data analysis, educational technology, and more. We provide career guidance and connections to our partner companies.',
    },
  ]

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Programs
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Choose the program that fits your goals and start your AI journey today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* AI for Teachers */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-slate-200 flex flex-col h-full"
            >
              <div className="bg-blue-600 text-white p-6">
                <div className="flex items-center mb-4">
                  <teacherProgram.icon className="w-8 h-8 mr-3" />
                  <h2 className="text-2xl font-bold">{teacherProgram.title}</h2>
                </div>
                <p className="text-xl text-blue-100 mb-4">{teacherProgram.subtitle}</p>
                <p className="text-blue-100">{teacherProgram.description}</p>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="space-y-6 flex-1">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Program Duration</h3>
                    <div className="flex items-center text-slate-700">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{teacherProgram.structure.duration}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Key Benefits</h3>
                    <ul className="space-y-2">
                      {teacherProgram.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-8 space-y-3">
                  <Link
                    href="/programs/teachers"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-semibold text-center block"
                  >
                    Learn More About Teachers Program
                  </Link>
                  <Link
                    href="/apply?program=teachers"
                    className="w-full border-2 border-blue-600 text-blue-600 py-3 px-4 rounded-md hover:bg-blue-50 transition-colors font-semibold text-center block"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* AI for Youth */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-slate-200 flex flex-col h-full"
            >
              <div className="bg-emerald-600 text-white p-6">
                <div className="flex items-center mb-4">
                  <youthProgram.icon className="w-8 h-8 mr-3" />
                  <h2 className="text-2xl font-bold">{youthProgram.title}</h2>
                </div>
                <p className="text-xl text-emerald-100 mb-4">{youthProgram.subtitle}</p>
                <p className="text-emerald-100">{youthProgram.description}</p>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="space-y-6 flex-1">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Program Duration</h3>
                    <div className="flex items-center text-slate-700">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{youthProgram.structure.duration}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Key Benefits</h3>
                    <ul className="space-y-2">
                      {youthProgram.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-8 space-y-3">
                  <Link
                    href="/programs/youth"
                    className="w-full bg-emerald-600 text-white py-3 px-4 rounded-md hover:bg-emerald-700 transition-colors font-semibold text-center block"
                  >
                    Learn More About Youth Program
                  </Link>
                  <Link
                    href="/apply?program=youth"
                    className="w-full border-2 border-emerald-600 text-emerald-600 py-3 px-4 rounded-md hover:bg-emerald-50 transition-colors font-semibold text-center block"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Choose Your Path
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Both programs are designed to provide comprehensive AI education tailored to your specific needs and career goals.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">AI for Teachers</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">AI for Youth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Duration</td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-center">8 weeks</td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-center">12 weeks + 6 months</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Age Range</td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-center">Up to 29</td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-center">15-29</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Schedule</td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-center">Evenings & Weekends</td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-center">Weekends & Online</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Focus</td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-center">Educational AI Tools</td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-center">Technical AI Skills</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Prerequisites</td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-center">Teaching Background</td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-center">High School Diploma</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our AI programs.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  {expandedFaq === index ? (
                    <Minus className="w-5 h-5 text-gray-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {expandedFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of Armenian youth and teachers who are already transforming their futures with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apply"
                className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center shadow-lg"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
              >
                Have Questions?
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ProgramsPage
