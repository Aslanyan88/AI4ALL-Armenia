'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Target, Heart, Users, Lightbulb, Shield, Building } from 'lucide-react'

const AboutPage = () => {
  const goals = [
    {
      icon: Target,
      title: 'Skill Development',
      description: 'Equip youth and teachers with future-ready AI skills to meet workforce demands in the ICT/high-tech sector.',
    },
    {
      icon: Users,
      title: 'Educator Empowerment',
      description: 'Enable teachers to integrate AI tools into their pedagogy for enhanced classroom efficiency and modern teaching approaches.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Ecosystem',
      description: 'Foster a vibrant, inclusive AI innovation ecosystem across all Armenian regions.',
    },
    {
      icon: Building,
      title: 'Industry Bridge',
      description: 'Bridge the gap between academic knowledge and industry needs for practical, applicable skills.',
    },
    {
      icon: Shield,
      title: 'Regional Leadership',
      description: 'Contribute to Armenia\'s reputation as a regional tech leader through AI education excellence.',
    },
  ]

  const values = [
    {
      title: 'Inclusivity',
      description: 'Ensuring AI education reaches every region and community in Armenia.',
    },
    {
      title: 'Innovation',
      description: 'Fostering creative problem-solving and cutting-edge AI applications.',
    },
    {
      title: 'Empowerment',
      description: 'Giving individuals the tools and knowledge to shape their futures.',
    },
    {
      title: 'Collaboration',
      description: 'Building strong partnerships between educators, students, and industry.',
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
              About AI4ALL Armenia
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Democratizing AI education to cultivate a new generation of AI changemakers in Armenia.
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
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                AI4ALL Armenia was born from a vision to democratize AI education across Armenia. 
                Through the strategic collaboration between the Enterprise Incubator Foundation (EIF) 
                and the global AI4ALL movement, we&apos;re creating unprecedented opportunities for 
                Armenian youth and educators.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Launched in November 2024, our initiative recognizes that Armenia&apos;s rapidly evolving 
                tech landscape demands AI literacy. We&apos;re not just teaching technology—we&apos;re fostering 
                a human-centered, ethical approach to AI that positions Armenia as a regional leader 
                in responsible innovation.
              </p>
              <p className="text-lg text-gray-600">
                Our commitment extends beyond urban centers to reach every region of Armenia, 
                ensuring that geography doesn&apos;t determine access to world-class AI education. 
                We believe that the future of Armenia depends on empowering its people with 
                the skills and knowledge to thrive in an AI-driven world.
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600">
                    To democratize AI education in Armenia by empowering youth (15-29) and teachers 
                    across all regions with essential AI skills, addressing workforce demands and 
                    fostering ethical innovation.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-600">
                    To cultivate a new generation of AI changemakers in Armenia, promoting diversity, 
                    ethical innovation, and contributing to the nation&apos;s digital transformation.
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
              Our Goals
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
              Our Values
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
              The EIF Partnership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI4ALL Armenia is powered by the Enterprise Incubator Foundation&apos;s commitment to advancing Armenia&apos;s technological future.
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
                Armenia Tech Development Initiative
              </h3>
              <p className="text-gray-600 mb-4">
                Through EIF&apos;s comprehensive approach, this initiative aims to equip 
                thousands of youth aged 15-29 with in-demand skills across key sectors:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong>ICT/High-Tech:</strong> Including AI, software development, and digital skills</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong>Agriculture:</strong> Modern farming techniques and agtech innovation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong>Hospitality:</strong> Tourism and service industry skills</span>
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
                Our Role in the Ecosystem
              </h3>
              <p className="text-gray-600 mb-4">
                AI4ALL Armenia specifically addresses the growing demand for AI literacy within 
                the ICT/high-tech sector focus of the broader workforce development initiative.
              </p>
              <p className="text-gray-600 mb-4">
                By partnering with the global AI4ALL organization, we bring world-class AI education 
                methodologies to Armenia while ensuring they&apos;re adapted to local needs and contexts.
              </p>
              <p className="text-gray-600">
                This strategic alignment ensures that our AI education efforts contribute directly 
                to Armenia&apos;s economic development goals and regional competitiveness in the 
                technology sector.
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
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Partners</h3>
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
