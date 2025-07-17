'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, MapPin, Users, CheckCircle, ArrowLeft, User, Mail, Phone, GraduationCap, Book, Target } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function TeachersArmenianWorkshopRegistration() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    school: '',
    teachingExperience: '',
    subjects: '',
    aiExperience: '',
    expectations: '',
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
          className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 text-center"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('registrationSuccess')}</h2>
          <p className="text-gray-600 mb-6">
            {t('registrationSuccessMessage')}
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
          >
            {t('backToHome')}
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
              {t('backToEvents')}
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Արհեստական բանականության աշխատարան հայ մանկավարժների համար
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Գրանցվեք AI գործիքների ինտեգրման մասին հատուկ աշխատարանին
            </p>
          </motion.div>
        </div>
      </div>

      {/* Event Details */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Event Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-6 mb-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('workshopDetails')}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-primary-600 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">{t('workshopDate')}</p>
                      <p className="text-gray-600">{t('august10')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-primary-600 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">{t('workshopTime')}</p>
                      <p className="text-gray-600">{t('time10to16')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-primary-600 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">{t('workshopLocation')}</p>
                      <p className="text-gray-600">{t('eifTechCenter')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Users className="w-5 h-5 text-primary-600 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">{t('workshopParticipants')}</p>
                      <p className="text-gray-600">{t('upTo50Teachers')}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Կարևոր:</strong> Աշխատարանը անցկացվում է հայերենով և ամբողջովին անվճար է:
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ինչ կսովորեք</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">AI գործիքների ծանոթություն (ChatGPT, Google Bard)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Դասային պլանավորում AI-ի օգնությամբ</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Ինտերակտիվ բովանդակության ստեղծում</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Գնահատման ավտոմատացում</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Անհատականացված ուսուցման մեթոդներ</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Registration Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('registrationForm')}</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('regFirstName')} *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder={t('regFirstName')}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('regLastName')} *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder={t('regLastName')}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('regEmail')} *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('regPhone')} *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="+374 XX XXX XXX"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-2">
                      Դպրոց/Կրթական հաստատություն *
                    </label>
                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="school"
                        name="school"
                        required
                        value={formData.school}
                        onChange={handleInputChange}
                        className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Ձեր աշխատավայրը"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="teachingExperience" className="block text-sm font-medium text-gray-700 mb-2">
                      Ուսուցման փորձ *
                    </label>
                    <select
                      id="teachingExperience"
                      name="teachingExperience"
                      required
                      value={formData.teachingExperience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Ընտրեք Ձեր փորձը</option>
                      <option value="0-2">0-2 տարի</option>
                      <option value="3-5">3-5 տարի</option>
                      <option value="6-10">6-10 տարի</option>
                      <option value="11-20">11-20 տարի</option>
                      <option value="20+">20+ տարի</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subjects" className="block text-sm font-medium text-gray-700 mb-2">
                      Ինչ առարկաներ եք դասավանդում *
                    </label>
                    <div className="relative">
                      <Book className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="subjects"
                        name="subjects"
                        required
                        value={formData.subjects}
                        onChange={handleInputChange}
                        className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Օր․ մաթեմատիկա, ֆիզիկա, հայոց լեզու"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="aiExperience" className="block text-sm font-medium text-gray-700 mb-2">
                      AI-ի հետ նախկին փորձ
                    </label>
                    <select
                      id="aiExperience"
                      name="aiExperience"
                      value={formData.aiExperience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Ընտրեք Ձեր փորձը</option>
                      <option value="none">Փորձ չունեմ</option>
                      <option value="beginner">Սկսնակ մակարդակ</option>
                      <option value="intermediate">Միջին մակարդակ</option>
                      <option value="advanced">Առաջադեմ մակարդակ</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="expectations" className="block text-sm font-medium text-gray-700 mb-2">
                      Ինչ եք ակնկալում այս աշխատարանից
                    </label>
                    <div className="relative">
                      <Target className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <textarea
                        id="expectations"
                        name="expectations"
                        rows={4}
                        value={formData.expectations}
                        onChange={handleInputChange}
                        className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Նկարագրեք Ձեր ակնկալիքները և նպատակները..."
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="heardAbout" className="block text-sm font-medium text-gray-700 mb-2">
                      Որտեղի՞ց իմացաք այս աշխատարանի մասին
                    </label>
                    <select
                      id="heardAbout"
                      name="heardAbout"
                      value={formData.heardAbout}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Ընտրեք աղբյուրը</option>
                      <option value="website">AI4ALL Armenia կայք</option>
                      <option value="social-media">Սոցիալական ցանցեր</option>
                      <option value="email">Էլ․ փոստ</option>
                      <option value="colleague">Գործընկերոջ միջոցով</option>
                      <option value="school">Դպրոցի միջոցով</option>
                      <option value="other">Այլ</option>
                    </select>
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Ուղարկվում է...
                        </>
                      ) : (
                        'Գրանցվել աշխատարանին'
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
