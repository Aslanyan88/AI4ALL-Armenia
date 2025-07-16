'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Users, TrendingUp, Award, MapPin, Quote, Calendar, ExternalLink } from 'lucide-react'

const ImpactPage = () => {
  const overallStats = [
    {
      icon: Users,
      value: '500+',
      label: 'Lives Transformed',
      description: 'Participants empowered with AI skills',
    },
    {
      icon: MapPin,
      value: '11',
      label: 'Regions Reached',
      description: 'Complete coverage of Armenia',
    },
    {
      icon: TrendingUp,
      value: '85%',
      label: 'Employment Rate',
      description: 'Graduates in AI-related roles',
    },
    {
      icon: Award,
      value: '95%',
      label: 'Completion Rate',
      description: 'Program success rate',
    },
  ]

  const participantStories = [
    {
      name: 'Karine Mayilyan',
      role: 'High School Teacher',
      location: 'Yerevan',
      program: 'AI for Teachers',
      cohort: 'Spring 2025',
      image: '/participant-karine.jpg',
      quote: 'AI4ALL Armenia completely transformed my teaching approach. I now use AI tools to create personalized lessons, generate assessments, and track student progress more effectively than ever before.',
      fullStory: 'When I first heard about AI in education, I was skeptical. How could technology replace the human touch that teaching requires? But after joining the AI for Teachers program, I realized it wasn\'t about replacement—it was about enhancement. The program taught me to use AI as a powerful assistant that freed up time for what really mattered: connecting with my students. Now, I can create customized learning materials in minutes instead of hours, and my students are more engaged than ever.',
      impact: 'Increased lesson preparation efficiency by 60%, improved student engagement scores by 40%',
      currentRole: 'Lead Digital Learning Coordinator at her school, mentoring other teachers',
    },
    {
      name: 'Armen Sargsyan',
      role: 'Software Developer',
      location: 'Gyumri',
      program: 'AI for Youth',
      cohort: 'Fall 2024',
      image: '/participant-armen.jpg',
      quote: 'The AI for Youth program opened my eyes to possibilities I never knew existed. From a small town in Gyumri, I\'m now working with international companies on cutting-edge AI projects.',
      fullStory: 'Growing up in Gyumri, I always loved computers but never thought I could work in AI. The field seemed too advanced, too far from my reality. AI4ALL Armenia changed everything. The program not only taught me technical skills but also showed me that AI is about solving real-world problems. My final project was an AI system to help local farmers predict crop yields, and it caught the attention of an agricultural tech company. Now I\'m working remotely for a startup in Silicon Valley while living in my hometown.',
      impact: 'Secured remote position with 300% salary increase, developed award-winning agriculture AI solution',
      currentRole: 'AI Engineer at AgriTech startup, contributing to global food security',
    },
    {
      name: 'Sona Hakobyan',
      role: 'Elementary School Teacher',
      location: 'Vanadzor',
      program: 'AI for Teachers',
      cohort: 'Winter 2025',
      image: '/participant-sona.jpg',
      quote: 'AI tools have made my classroom more inclusive and effective. I can now provide personalized learning experiences for each of my 25 students, something I thought was impossible before.',
      fullStory: 'Teaching 25 young students with different learning styles and needs was overwhelming. Some students were advanced, others struggled with basic concepts, and I felt like I was failing them all. The AI for Teachers program introduced me to adaptive learning platforms and AI-powered assessment tools. Now I can identify each student\'s strengths and challenges in real-time, providing targeted support exactly when they need it. My classroom has become a place where every child can thrive.',
      impact: 'Improved student performance by 35%, reduced grading time by 50%',
      currentRole: 'Teacher Innovation Leader, implementing AI tools across her school district',
    },
    {
      name: 'Davit Grigoryan',
      role: 'Data Scientist',
      location: 'Kapan',
      program: 'AI for Youth',
      cohort: 'Spring 2025',
      image: '/participant-davit.jpg',
      quote: 'AI4ALL Armenia gave me the foundation to pursue my dream of using technology to solve Armenia\'s challenges. I\'m now working on AI solutions for our mining industry.',
      fullStory: 'Coming from Kapan, a mining town in southern Armenia, I witnessed firsthand how technology could transform traditional industries. But I didn\'t know where to start. The AI for Youth program provided the perfect foundation. I learned not just coding and machine learning, but how to think about problems systematically. My capstone project involved developing predictive models for mining equipment maintenance, which is now being tested by local mining companies. The program connected me with a network of mentors and peers who continue to support my journey.',
      impact: 'Developed AI solution adopted by 3 mining companies, founded local tech meetup',
      currentRole: 'Data Scientist at mining analytics firm, tech community leader in Kapan',
    },
  ]

  const projectShowcases = [
    {
      title: 'AI-Powered Language Learning Assistant',
      creator: 'Ani Petrosyan',
      program: 'AI for Youth',
      description: 'Developed an AI chatbot that helps students practice Armenian language skills through conversational interactions.',
      technologies: ['Python', 'Natural Language Processing', 'TensorFlow', 'React'],
      impact: 'Used by 200+ students across 5 schools',
      status: 'Expanding to support multiple languages',
    },
    {
      title: 'Smart Classroom Management System',
      creator: 'Tigran Mkrtchyan',
      program: 'AI for Teachers',
      description: 'Created an AI system that helps teachers track student attention and engagement during lessons.',
      technologies: ['Computer Vision', 'Machine Learning', 'Python', 'OpenCV'],
      impact: 'Improved classroom engagement by 45%',
      status: 'Piloting in 10 schools nationwide',
    },
    {
      title: 'Agricultural Yield Prediction Platform',
      creator: 'Nayiri Hovhannisyan',
      program: 'AI for Youth',
      description: 'Built an AI platform that predicts crop yields using satellite imagery and weather data.',
      technologies: ['Satellite Data', 'Deep Learning', 'Python', 'GIS'],
      impact: 'Helping 50+ farmers optimize their harvests',
      status: 'Received funding for further development',
    },
  ]

  const regionalImpact = [
    { region: 'Yerevan', participants: 120, placement: '92%' },
    { region: 'Gyumri', participants: 45, placement: '88%' },
    { region: 'Vanadzor', participants: 38, placement: '85%' },
    { region: 'Kapan', participants: 28, placement: '90%' },
    { region: 'Goris', participants: 32, placement: '87%' },
    { region: 'Gavar', participants: 25, placement: '83%' },
    { region: 'Ijevan', participants: 22, placement: '86%' },
    { region: 'Artashat', participants: 30, placement: '89%' },
    { region: 'Armavir', participants: 35, placement: '84%' },
    { region: 'Ashtarak', participants: 28, placement: '91%' },
    { region: 'Sisian', participants: 20, placement: '82%' },
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
              Our Impact
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Transforming lives, communities, and Armenia&apos;s future through AI education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overall Impact Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transforming Armenia&apos;s AI Landscape
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since our launch in November 2024, AI4ALL Armenia has made a significant impact 
              across the country, empowering individuals and strengthening communities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {overallStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-md text-center"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Participant Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Voices of AI4ALL Armenia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the inspiring individuals whose lives have been transformed by AI education.
            </p>
          </motion.div>

          <div className="space-y-16">
            {participantStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-gray-100 rounded-lg p-8 h-64 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-2xl">
                          {story.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{story.name}</h3>
                      <p className="text-gray-600">{story.role}</p>
                      <p className="text-sm text-gray-500 flex items-center justify-center mt-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        {story.location}
                      </p>
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="flex items-center mb-4">
                    <Quote className="w-6 h-6 text-primary-600 mr-2" />
                    <span className="text-sm text-gray-500">
                      {story.program} • {story.cohort}
                    </span>
                  </div>
                  <blockquote className="text-xl text-gray-700 font-medium mb-6">
                    &quot;{story.quote}&quot;
                  </blockquote>
                  <p className="text-gray-600 mb-6">{story.fullStory}</p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Impact:</h4>
                      <p className="text-gray-600">{story.impact}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Current Role:</h4>
                      <p className="text-gray-600">{story.currentRole}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Innovation in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the innovative projects created by our participants that are making 
              a real difference in Armenia.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectShowcases.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    by {project.creator} • {project.program}
                  </p>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-primary-100 text-primary-600 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Impact:</h4>
                    <p className="text-gray-600 text-sm">{project.impact}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Status:</h4>
                      <p className="text-green-600 text-sm">{project.status}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Reaching Every Corner of Armenia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to nationwide impact is reflected in our presence across 
              all 11 regions of Armenia.
            </p>
          </motion.div>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regionalImpact.map((region, index) => (
                <motion.div
                  key={region.region}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-white rounded-lg p-4 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{region.region}</h3>
                    <MapPin className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="text-2xl font-bold text-primary-600 mb-1">
                    {region.participants}
                  </div>
                  <div className="text-sm text-gray-600 mb-2">Participants</div>
                  <div className="flex items-center">
                    <div className="text-sm text-gray-600">Employment Rate: </div>
                    <div className="text-sm font-semibold text-green-600 ml-1">
                      {region.placement}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Success Story Starts Here
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join the growing community of AI4ALL Armenia graduates who are shaping 
              the future of technology in Armenia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                Become a Mentor
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ImpactPage
