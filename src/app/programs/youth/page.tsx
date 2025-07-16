'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  User, 
  Calendar, 
  Clock, 
  Users, 
  Award, 
  BookOpen,
  Video,
  Coffee,
  Target,
  CheckCircle,
  ArrowRight,
  MapPin,
  Filter
} from 'lucide-react'

const YouthProgramsPage = () => {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null)
  const [selectedLevel, setSelectedLevel] = useState<string>('all')
  const [selectedDuration, setSelectedDuration] = useState<string>('all')

  const programs = [
    {
      id: 'ai-fundamentals',
      title: 'AI Fundamentals for Young Minds',
      level: 'beginner',
      duration: '4-weeks',
      age: '15-18',
      participants: '12-15',
      format: 'Hybrid',
      description: 'An introductory course that demystifies AI concepts and explores how artificial intelligence impacts daily life.',
      objectives: [
        'Understand basic AI concepts and terminology',
        'Explore AI applications in everyday life',
        'Learn ethical considerations in AI development',
        'Build simple AI projects using visual tools'
      ],
      curriculum: [
        'Week 1: What is AI? History and Evolution',
        'Week 2: Machine Learning Basics',
        'Week 3: AI in Daily Life - Applications & Impact',
        'Week 4: Building Your First AI Project'
      ],
      requirements: [
        'Basic computer literacy',
        'Interest in technology',
        'No prior programming experience needed'
      ],
      outcomes: [
        'AI literacy certificate',
        'Portfolio of 3 mini-projects',
        'Presentation skills development',
        'Peer collaboration experience'
      ],
      nextSessions: [
        { date: '2024-02-15', location: 'Yerevan', spots: 8 },
        { date: '2024-03-01', location: 'Gyumri', spots: 12 },
        { date: '2024-03-15', location: 'Online', spots: 15 }
      ]
    },
    {
      id: 'python-ai',
      title: 'Python for AI Development',
      level: 'intermediate',
      duration: '6-weeks',
      age: '16-22',
      participants: '10-12',
      format: 'In-person',
      description: 'Learn Python programming specifically for AI applications, including libraries like NumPy, Pandas, and scikit-learn.',
      objectives: [
        'Master Python fundamentals for AI',
        'Work with data manipulation libraries',
        'Build machine learning models',
        'Understand AI development workflows'
      ],
      curriculum: [
        'Week 1-2: Python Fundamentals & Data Types',
        'Week 3: NumPy and Pandas for Data Science',
        'Week 4: Data Visualization with Matplotlib',
        'Week 5: Introduction to Machine Learning',
        'Week 6: Building Your First ML Model'
      ],
      requirements: [
        'Basic programming knowledge helpful',
        'Own laptop required',
        'Commitment to attend all sessions'
      ],
      outcomes: [
        'Python AI programming certificate',
        'Complete ML project portfolio',
        'GitHub repository with code samples',
        'Mentorship network access'
      ],
      nextSessions: [
        { date: '2024-02-20', location: 'Yerevan', spots: 5 },
        { date: '2024-03-10', location: 'Vanadzor', spots: 10 },
        { date: '2024-04-01', location: 'Yerevan', spots: 8 }
      ]
    },
    {
      id: 'ai-innovation',
      title: 'AI Innovation Challenge',
      level: 'advanced',
      duration: '8-weeks',
      age: '18-25',
      participants: '8-10',
      format: 'Hybrid',
      description: 'An intensive program for developing AI solutions to real-world problems, with mentorship from industry experts.',
      objectives: [
        'Develop advanced AI solutions',
        'Work on real-world problem solving',
        'Learn project management skills',
        'Present to industry professionals'
      ],
      curriculum: [
        'Week 1-2: Advanced AI Concepts & Technologies',
        'Week 3-4: Problem Definition & Research',
        'Week 5-6: Solution Development & Testing',
        'Week 7: Refinement & Optimization',
        'Week 8: Final Presentation & Demo'
      ],
      requirements: [
        'Programming experience (Python/JavaScript)',
        'Previous AI/ML knowledge',
        'Portfolio of prior projects',
        'Interview selection process'
      ],
      outcomes: [
        'Advanced AI certification',
        'Industry mentor connections',
        'Potential internship opportunities',
        'Competition entry preparation'
      ],
      nextSessions: [
        { date: '2024-03-01', location: 'Yerevan', spots: 3 },
        { date: '2024-04-15', location: 'Hybrid', spots: 8 }
      ]
    },
    {
      id: 'ai-ethics',
      title: 'AI Ethics & Society',
      level: 'intermediate',
      duration: '3-weeks',
      age: '17-24',
      participants: '15-20',
      format: 'Online',
      description: 'Explore the ethical implications of AI technology and learn to develop responsible AI solutions.',
      objectives: [
        'Understand AI ethics frameworks',
        'Analyze bias in AI systems',
        'Learn responsible AI practices',
        'Develop ethical decision-making skills'
      ],
      curriculum: [
        'Week 1: Introduction to AI Ethics',
        'Week 2: Bias, Fairness, and Accountability',
        'Week 3: Privacy, Security, and Future Implications'
      ],
      requirements: [
        'Basic understanding of AI concepts',
        'Interest in social issues',
        'Reliable internet connection'
      ],
      outcomes: [
        'AI Ethics certification',
        'Ethical framework toolkit',
        'Case study analysis portfolio',
        'Policy recommendation skills'
      ],
      nextSessions: [
        { date: '2024-02-12', location: 'Online', spots: 18 },
        { date: '2024-03-05', location: 'Online', spots: 20 },
        { date: '2024-04-02', location: 'Online', spots: 15 }
      ]
    }
  ]

  const testimonials = [
    {
      name: 'Ani Sargsyan',
      age: 19,
      program: 'Python for AI Development',
      location: 'Yerevan',
      quote: 'This program opened my eyes to the possibilities of AI. Now I\'m pursuing computer science at university and working on my own AI projects.',
      achievement: 'Accepted to YSU Computer Science Program'
    },
    {
      name: 'Davit Hakobyan',
      age: 17,
      program: 'AI Fundamentals',
      location: 'Gyumri',
      quote: 'I never thought I could understand AI concepts, but the teachers made it so accessible. Now I\'m teaching my friends about machine learning!',
      achievement: 'Youth Tech Ambassador'
    },
    {
      name: 'Armine Petrosyan',
      age: 21,
      program: 'AI Innovation Challenge',
      location: 'Vanadzor',
      quote: 'The mentorship and real-world projects gave me the confidence to start my own AI startup. The network I built here is invaluable.',
      achievement: 'Founded AI Startup'
    }
  ]

  const filteredPrograms = programs.filter(program => {
    const levelMatch = selectedLevel === 'all' || program.level === selectedLevel
    const durationMatch = selectedDuration === 'all' || program.duration === selectedDuration
    return levelMatch && durationMatch
  })

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Youth AI Programs
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100 max-w-4xl mx-auto">
              Empower the next generation with AI skills. Our comprehensive programs are designed for young minds aged 15-29 to explore, learn, and innovate with artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/apply"
                className="bg-white text-emerald-900 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors inline-flex items-center justify-center shadow-lg"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#programs"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-900 transition-all inline-flex items-center justify-center"
              >
                Explore Programs
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Stats */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-6 border border-slate-200"
            >
              <div className="text-3xl font-bold text-emerald-600 mb-2">300+</div>
              <div className="text-slate-700">Youth Participants</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 border border-slate-200"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
              <div className="text-slate-700">Program Types</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6 border border-slate-200"
            >
              <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-slate-700">Completion Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-6 border border-slate-200"
            >
              <div className="text-3xl font-bold text-teal-600 mb-2">11</div>
              <div className="text-slate-700">Regions Served</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section id="programs" className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">Available Programs</h2>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-slate-500" />
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white text-slate-900"
                >
                  <option value="all">All Levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-slate-500" />
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white text-slate-900"
                >
                  <option value="all">All Durations</option>
                  <option value="3-weeks">3 Weeks</option>
                  <option value="4-weeks">4 Weeks</option>
                  <option value="6-weeks">6 Weeks</option>
                  <option value="8-weeks">8 Weeks</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-slate-200"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-900">{program.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      program.level === 'beginner' ? 'bg-emerald-100 text-emerald-800' :
                      program.level === 'intermediate' ? 'bg-orange-100 text-orange-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {program.level}
                    </span>
                  </div>
                  
                  <p className="text-slate-700 mb-4">{program.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-500" />
                      <span className="text-slate-700">{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-slate-500" />
                      <span className="text-slate-700">Age {program.age}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-slate-500" />
                      <span className="text-slate-700">{program.participants} participants</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Video className="w-4 h-4 text-slate-500" />
                      <span className="text-slate-700">{program.format}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mb-4">
                    <button
                      onClick={() => setSelectedProgram(selectedProgram === program.id ? null : program.id)}
                      className="flex-1 bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors"
                    >
                      {selectedProgram === program.id ? 'Hide Details' : 'View Details'}
                    </button>
                    <a
                      href="/apply"
                      className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Apply
                    </a>
                  </div>
                </div>
                
                {selectedProgram === program.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="bg-slate-50 p-6 border-t border-slate-200"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Learning Objectives</h4>
                        <ul className="text-sm text-slate-700 space-y-1">
                          {program.objectives.map((obj, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                              {obj}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {program.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Target className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Curriculum</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {program.curriculum.map((item, i) => (
                          <div key={i} className="text-sm text-gray-600 flex items-start gap-2">
                            <BookOpen className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Upcoming Sessions</h4>
                      <div className="space-y-2">
                        {program.nextSessions.map((session, i) => (
                          <div key={i} className="flex items-center justify-between bg-white p-3 rounded-lg">
                            <div className="flex items-center gap-3">
                              <Calendar className="w-4 h-4 text-gray-500" />
                              <span className="text-sm font-medium">{session.date}</span>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4 text-gray-500" />
                                <span className="text-sm text-gray-600">{session.location}</span>
                              </div>
                            </div>
                            <span className="text-sm text-green-600 font-medium">
                              {session.spots} spots left
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from young participants who have transformed their futures through our AI programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">Age {testimonial.age}, {testimonial.location}</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium text-green-700">{testimonial.achievement}</span>
                </div>
                <div className="mt-2 text-xs text-gray-500">{testimonial.program}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-xl mb-8 text-emerald-100">
              Join hundreds of young Armenians who are already building the future with AI. Apply today and be part of the next generation of AI innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/apply"
                className="bg-white text-emerald-900 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors inline-flex items-center justify-center shadow-lg"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/about/team"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-900 transition-all inline-flex items-center justify-center"
              >
                Meet Our Mentors
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default YouthProgramsPage
