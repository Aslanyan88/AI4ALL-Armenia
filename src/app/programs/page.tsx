'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { GraduationCap, Users, Clock, Calendar, CheckCircle, ArrowRight, Plus, Minus } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const ProgramsPage = () => {
  const { t } = useLanguage()
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const teacherProgram = {
    title: t('teacherProgramTitle'),
    subtitle: t('teacherProgramSubtitle'),
    description: t('teacherProgramDescription'),
    icon: GraduationCap,
    modules: [
      t('teacherModule1'),
      t('teacherModule2'),
      t('teacherModule3'),
      t('teacherModule4'),
      t('teacherModule5'),
      t('teacherModule6'),
      t('teacherModule7'),
      t('teacherModule8'),
    ],
    benefits: [
      t('teacherBenefit1'),
      t('teacherBenefit2'),
      t('teacherBenefit3'),
      t('teacherBenefit4'),
      t('teacherBenefit5'),
      t('teacherBenefit6'),
    ],
    eligibility: [
      t('teacherEligibility1'),
      t('teacherEligibility2'),
      t('teacherEligibility3'),
      t('teacherEligibility4'),
      t('teacherEligibility5'),
    ],
    structure: {
      duration: t('teacherDuration'),
      format: t('teacherFormat'),
      schedule: t('teacherSchedule'),
      certification: t('teacherCertification'),
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
    title: t('youthProgramTitle'),
    subtitle: t('youthProgramSubtitle'),
    description: t('youthProgramDesc'),
    icon: Users,
    modules: [
      t('youthModule1'),
      t('youthModule2'),
      t('youthModule3'),
      t('youthModule4'),
      t('youthModule5'),
      t('youthModule6'),
      t('youthModule7'),
      t('youthModule8'),
    ],
    benefits: [
      t('youthBenefit1'),
      t('youthBenefit2'),
      t('youthBenefit3'),
      t('youthBenefit4'),
      t('youthBenefit5'),
      t('youthBenefit6'),
    ],
    eligibility: [
      t('youthEligibility1'),
      t('youthEligibility2'),
      t('youthEligibility3'),
      t('youthEligibility4'),
      t('youthEligibility5'),
    ],
    structure: {
      duration: t('youthDuration'),
      format: t('youthFormat'),
      schedule: t('youthSchedule'),
      certification: t('youthCertification'),
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
      question: t('faqQuestion1'),
      answer: t('faqAnswer1'),
    },
    {
      question: t('faqQuestion2'),
      answer: t('faqAnswer2'),
    },
    {
      question: t('faqQuestion3'),
      answer: t('faqAnswer3'),
    },
    {
      question: t('faqQuestion4'),
      answer: t('faqAnswer4'),
    },
    {
      question: t('faqQuestion5'),
      answer: t('faqAnswer5'),
    },
    {
      question: t('faqQuestion6'),
      answer: t('faqAnswer6'),
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
              {t('programsHeroTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              {t('programsHeroSubtitle')}
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
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">{t('programDuration')}</h3>
                    <div className="flex items-center text-slate-700">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{teacherProgram.structure.duration}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">{t('keyBenefits')}</h3>
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
              {t('chooseYourPath')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('programComparisonDescription')}
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{t('feature')}</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">{t('aiForTeachers')}</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">{t('aiForYouth')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{t('duration')}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-center">{t('teacherDuration')}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-center">{t('youthDuration')}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{t('ageRange')}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-center">{t('teacherEligibility1')}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-center">{t('youthEligibility1')}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{t('schedule')}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-center">{t('eveningsWeekends')}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-center">{t('weekendsOnline')}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{t('focus')}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-center">{t('educationalAITools')}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-center">{t('technicalAISkills')}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{t('prerequisites')}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-center">{t('teachingBackground')}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-center">{t('highSchoolDiploma')}</td>
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
              {t('frequentlyAskedQuestions')}
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
              {t('readyToStart')}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {t('joinHundreds')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apply"
                className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center shadow-lg"
              >
                {t('applyNow')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
              >
                {t('haveQuestions')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ProgramsPage
