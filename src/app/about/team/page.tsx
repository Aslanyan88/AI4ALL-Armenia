'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award, MapPin } from 'lucide-react'

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Dr. Armen Sarkissian',
      role: 'Program Director',
      bio: 'AI researcher and educator with 15+ years of experience in machine learning and educational technology.',
      image: '/api/placeholder/300/300',
      location: 'Yerevan',
      expertise: ['Machine Learning', 'Educational Technology', 'AI Ethics']
    },
    {
      name: 'Maria Hakobyan',
      role: 'Teacher Training Lead',
      bio: 'Former high school teacher turned AI education specialist, passionate about integrating technology in classrooms.',
      image: '/api/placeholder/300/300',
      location: 'Gyumri',
      expertise: ['Teacher Training', 'Curriculum Development', 'Classroom Technology']
    },
    {
      name: 'Tigran Abrahamyan',
      role: 'Technical Lead',
      bio: 'Software engineer and AI specialist focused on developing accessible AI tools for educational use.',
      image: '/api/placeholder/300/300',
      location: 'Yerevan',
      expertise: ['Software Development', 'AI Tools', 'Technical Training']
    },
    {
      name: 'Sona Grigoryan',
      role: 'Youth Program Coordinator',
      bio: 'Young professional dedicated to empowering the next generation with AI skills and ethical understanding.',
      image: '/api/placeholder/300/300',
      location: 'Vanadzor',
      expertise: ['Youth Development', 'Program Management', 'AI Communication']
    },
    {
      name: 'Narek Hovhannisyan',
      role: 'Regional Coordinator',
      bio: 'Community organizer ensuring AI4ALL Armenia reaches every corner of the country.',
      image: '/api/placeholder/300/300',
      location: 'Kapan',
      expertise: ['Community Outreach', 'Regional Development', 'Event Management']
    },
    {
      name: 'Anna Petrosyan',
      role: 'Curriculum Designer',
      bio: 'Educational content creator with expertise in designing engaging and effective AI learning materials.',
      image: '/api/placeholder/300/300',
      location: 'Yerevan',
      expertise: ['Curriculum Design', 'Educational Content', 'Learning Assessment']
    }
  ]

  const advisors = [
    {
      name: 'Dr. Vahram Papazian',
      role: 'AI Ethics Advisor',
      organization: 'American University of Armenia',
      bio: 'Leading expert in AI ethics and responsible AI development in Armenia.',
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Armine Kocharyan',
      role: 'Education Policy Advisor',
      organization: 'Ministry of Education',
      bio: 'Senior policy advisor helping integrate AI education into national curriculum.',
      image: '/api/placeholder/200/200'
    },
    {
      name: 'David Sandukhchyan',
      role: 'Industry Advisor',
      organization: 'ARCA (Armenian Research Center for Arts)',
      bio: 'Technology industry veteran providing insights on AI career opportunities.',
      image: '/api/placeholder/200/200'
    }
  ]

  const stats = [
    { number: '15+', label: 'Team Members' },
    { number: '25+', label: 'Expert Instructors' },
    { number: '50+', label: 'Partner Educators' },
    { number: '11', label: 'Regional Coordinators' }
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
              Meet Our Team
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Passionate educators, researchers, and innovators working together to democratize AI education across Armenia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Core Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated team of professionals bringing diverse expertise to AI education in Armenia.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="h-64 bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-600">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{member.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Advisory Board
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Distinguished experts providing strategic guidance and industry insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{advisor.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{advisor.role}</p>
                <p className="text-gray-600 text-sm mb-3">{advisor.organization}</p>
                <p className="text-gray-600 text-sm">{advisor.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
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
              Are you passionate about AI education and want to make a difference in Armenia? We're always looking for talented individuals to join our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Get In Touch
              </a>
              <a
                href="/apply"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all inline-flex items-center justify-center"
              >
                Apply as Instructor
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TeamPage
