'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Target, Heart, Users, Lightbulb, Shield, Building } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const AboutPage = () => {
  const { t, language } = useLanguage()
  
  const goals = [
    {
      icon: Target,
      title: t('skillDevelopment'),
      description: t('skillDevelopmentDesc'),
    },
    {
      icon: Users,
      title: t('educatorEmpowerment'),
      description: t('educatorEmpowermentDesc'),
    },
    {
      icon: Lightbulb,
      title: t('innovationEcosystem'),
      description: t('innovationEcosystemDesc'),
    },
    {
      icon: Building,
      title: t('industryBridge'),
      description: t('industryBridgeDesc'),
    },
    {
      icon: Shield,
      title: t('regionalLeadership'),
      description: t('regionalLeadershipDesc'),
    },
  ]

  const values = [
    {
      title: t('inclusivity'),
      description: t('inclusivityDesc'),
    },
    {
      title: t('innovation'),
      description: t('innovationDesc'),
    },
    {
      title: t('empowerment'),
      description: t('empowermentDesc'),
    },
    {
      title: t('collaboration'),
      description: t('collaborationDesc'),
    },
    {
      title: 'Excellence',
      description: 'Maintaining the highest standards in AI education and training.',
    },
    {
      title: 'Ethics',
      description: 'Promoting responsible, human-centered AI development and use.',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('aboutHeroTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              {t('aboutHeroSubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('ourStory')}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('storyParagraph1')}
              </p>
              <p className="text-lg text-gray-600 mb-6">
                {t('storyParagraph2')}
              </p>
              <p className="text-lg text-gray-600">
                {t('storyParagraph3')}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('ourMission')}</h3>
                  <p className="text-gray-600">
                    {t('missionText')}
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('ourVision')}</h3>
                  <p className="text-gray-600">
                    {t('visionText')}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Goals */}
      <section id="goals" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('goals')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re working towards specific, measurable objectives that will transform 
              Armenia&apos;s AI education landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {goals.map((goal, index) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <goal.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{goal.title}</h3>
                <p className="text-gray-600">{goal.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section id="values" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('values')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These guiding principles shape everything we do at AI4ALL Armenia.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-secondary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="partnership" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('eifPartnershipTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('eifPartnershipDescription')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg p-8 shadow-md"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('armeniaTechInitiativeTitle')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('armeniaTechInitiativeDescription')}
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong>ICT/High-Tech:</strong> {t('ictHighTech')}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong>Agriculture:</strong> {t('agriculture')}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong>Hospitality:</strong> {t('hospitality')}</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-lg p-8 shadow-md"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('ourRoleTitle')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('ourRoleDescription1')}
              </p>
              <p className="text-gray-600 mb-4">
                {t('ourRoleDescription2')}
              </p>
              <p className="text-gray-600">
                {t('ourRoleDescription3')}
              </p>
            </motion.div>
          </div>

          {/* Partner Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">{t('partnerships')}</h3>
            <div className="flex justify-center items-center space-x-12">
              <div className="bg-primary-100 px-8 py-4 rounded-lg">
                <span className="text-2xl font-bold text-primary-600">EIF</span>
                <p className="text-sm text-gray-600">Enterprise Incubator Foundation</p>
              </div>
              <div className="bg-green-100 px-8 py-4 rounded-lg">
                <span className="text-2xl font-bold text-green-600">AI4ALL</span>
                <p className="text-sm text-gray-600">Global AI Education Organization</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
