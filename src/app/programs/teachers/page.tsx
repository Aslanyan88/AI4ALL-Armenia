'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  Calendar, 
  Clock, 
  Users, 
  Award, 
  BookOpen,
  Video,
  Lightbulb,
  Target,
  CheckCircle,
  ArrowRight,
  MapPin,
  Filter,
  Brain,
  Zap,
  MessageSquare,
  Globe
} from 'lucide-react'

const TeacherProgramsPage = () => {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null)
  const [selectedLevel, setSelectedLevel] = useState<string>('all')
  const [selectedDuration, setSelectedDuration] = useState<string>('all')

  const programs = [
    {
      id: 'ai-classroom-basics',
      title: 'AI in the Classroom: Foundations',
      level: 'beginner',
      duration: '4-weeks',
      participants: '15-20',
      format: 'Hybrid',
      description: 'Introduction to AI tools and concepts specifically designed for educators to enhance teaching effectiveness.',
      objectives: [
        'Understand basic AI concepts and terminology',
        'Learn to integrate AI tools into lesson planning',
        'Develop ethical AI practices for education',
        'Create AI-enhanced learning materials'
      ],
      curriculum: [
        'Week 1: AI Fundamentals for Educators',
        'Week 2: AI Tools for Content Creation',
        'Week 3: Student Assessment with AI',
        'Week 4: Ethical AI in Education'
      ],
      requirements: [
        'Basic computer literacy',
        'Teaching experience (minimum 1 year)',
        'Access to computer/internet',
        'Willingness to experiment with new tools'
      ],
      outcomes: [
        'AI Education Certification',
        'Toolkit of AI resources for classroom use',
        'Lesson plan templates with AI integration',
        'Professional development hours'
      ],
      nextSessions: [
        { date: '2025-08-15', location: 'Yerevan', spots: 12 },
        { date: '2025-09-01', location: 'Gyumri', spots: 18 },
        { date: '2025-09-15', location: 'Online', spots: 20 }
      ]
    },
    {
      id: 'advanced-ai-pedagogy',
      title: 'Advanced AI Pedagogy',
      level: 'intermediate',
      duration: '6-weeks',
      participants: '10-15',
      format: 'In-person',
      description: 'Deep dive into AI-powered teaching methodologies and advanced classroom integration strategies.',
      objectives: [
        'Master advanced AI teaching tools',
        'Develop personalized learning paths with AI',
        'Create AI-driven assessment systems',
        'Build collaborative AI learning environments'
      ],
      curriculum: [
        'Week 1-2: Advanced AI Tools and Platforms',
        'Week 3: Personalized Learning with AI',
        'Week 4: AI-Powered Assessment Design',
        'Week 5: Collaborative AI Learning Environments',
        'Week 6: Implementation and Evaluation'
      ],
      requirements: [
        'Completion of AI Foundations course',
        'Intermediate technology skills',
        'Active classroom teaching position',
        'Commitment to implementation'
      ],
      outcomes: [
        'Advanced AI Education Certification',
        'Personalized AI teaching toolkit',
        'Portfolio of AI-enhanced lessons',
        'Mentorship opportunities'
      ],
      nextSessions: [
        { date: '2025-08-20', location: 'Yerevan', spots: 8 },
        { date: '2025-09-10', location: 'Vanadzor', spots: 12 },
        { date: '2025-10-01', location: 'Yerevan', spots: 10 }
      ]
    },
    {
      id: 'ai-curriculum-design',
      title: 'AI Curriculum Design & Development',
      level: 'advanced',
      duration: '8-weeks',
      participants: '8-12',
      format: 'Hybrid',
      description: 'Comprehensive program for developing AI literacy curricula and training materials for educational institutions.',
      objectives: [
        'Design comprehensive AI curricula',
        'Create age-appropriate AI learning modules',
        'Develop assessment frameworks for AI education',
        'Train other educators in AI integration'
      ],
      curriculum: [
        'Week 1-2: Curriculum Design Principles',
        'Week 3-4: Age-Appropriate AI Content Development',
        'Week 5-6: Assessment and Evaluation Methods',
        'Week 7: Train-the-Trainer Methodologies',
        'Week 8: Implementation and Scaling'
      ],
      requirements: [
        'Advanced teaching experience (5+ years)',
        'Curriculum development background',
        'Leadership role in educational institution',
        'Portfolio of educational materials'
      ],
      outcomes: [
        'AI Curriculum Design Certification',
        'Complete AI curriculum package',
        'Train-the-trainer certification',
        'Educational leadership network'
      ],
      nextSessions: [
        { date: '2025-09-01', location: 'Yerevan', spots: 5 },
        { date: '2025-10-15', location: 'Hybrid', spots: 10 }
      ]
    },
    {
      id: 'ai-special-needs',
      title: 'AI for Inclusive Education',
      level: 'intermediate',
      duration: '5-weeks',
      participants: '12-16',
      format: 'Online',
      description: 'Specialized training on using AI tools to support students with diverse learning needs and abilities.',
      objectives: [
        'Learn accessibility-focused AI tools',
        'Develop inclusive learning materials',
        'Create adaptive learning environments',
        'Support diverse learning styles with AI'
      ],
      curriculum: [
        'Week 1: Understanding Diverse Learning Needs',
        'Week 2: Accessibility-Focused AI Tools',
        'Week 3: Adaptive Content Creation',
        'Week 4: Assistive AI Technologies',
        'Week 5: Implementation and Support'
      ],
      requirements: [
        'Experience with special needs education',
        'Basic AI tools familiarity',
        'Reliable internet connection',
        'Commitment to inclusive practices'
      ],
      outcomes: [
        'Inclusive AI Education Certification',
        'Accessibility toolkit and resources',
        'Adaptive lesson plan templates',
        'Special needs support network'
      ],
      nextSessions: [
        { date: '2025-08-12', location: 'Online', spots: 14 },
        { date: '2025-09-05', location: 'Online', spots: 16 },
        { date: '2025-10-02', location: 'Online', spots: 12 }
      ]
    }
  ]

  const testimonials = [
    {
      name: 'Dr. Armine Khachaturyan',
      role: 'High School Principal',
      subject: 'Mathematics',
      location: 'Yerevan',
      quote: 'The AI tools I learned have revolutionized how I approach lesson planning. My students are more engaged than ever, and I can provide personalized feedback efficiently.',
      achievement: 'Increased student engagement by 40%'
    },
    {
      name: 'Hovhannes Sargsyan',
      role: 'Elementary Teacher',
      subject: 'General Education',
      location: 'Gyumri',
      quote: 'AI4ALL Armenia gave me the confidence to integrate technology into my teaching. The support network of fellow educators has been invaluable.',
      achievement: 'Became Regional AI Education Ambassador'
    },
    {
      name: 'Sona Danielyan',
      role: 'University Lecturer',
      subject: 'Computer Science',
      location: 'Vanadzor',
      quote: 'The advanced program helped me develop a comprehensive AI curriculum for our university. Now we\'re training the next generation of AI professionals.',
      achievement: 'Developed University AI Program'
    }
  ]

  const benefits = [
    {
      icon: Brain,
      title: 'Enhanced Teaching Methods',
      description: 'Learn innovative AI-powered teaching techniques that improve student engagement and learning outcomes.'
    },
    {
      icon: Zap,
      title: 'Increased Efficiency',
      description: 'Automate routine tasks like grading and feedback, freeing up time for meaningful student interaction.'
    },
    {
      icon: Target,
      title: 'Personalized Learning',
      description: 'Create customized learning experiences that adapt to each student\'s pace and learning style.'
    },
    {
      icon: Globe,
      title: 'Future-Ready Skills',
      description: 'Prepare students for an AI-driven world by integrating cutting-edge technology into your curriculum.'
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
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Programs for Teachers
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Empower your teaching with AI. Our comprehensive programs help educators integrate artificial intelligence into their classrooms, enhance student learning, and prepare for the future of education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/apply"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center shadow-lg"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#programs"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all inline-flex items-center justify-center"
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
              <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-slate-700">Teachers Trained</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 border border-slate-200"
            >
              <div className="text-3xl font-bold text-emerald-600 mb-2">15</div>
              <div className="text-slate-700">Program Modules</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6 border border-slate-200"
            >
              <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-slate-700">Satisfaction Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-6 border border-slate-200"
            >
              <div className="text-3xl font-bold text-teal-600 mb-2">50+</div>
              <div className="text-slate-700">Schools Impacted</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Why Choose AI4ALL Armenia for Teachers?
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Our teacher programs are designed by educators, for educators, with practical applications you can implement immediately.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-50 rounded-lg p-6 hover:shadow-lg transition-shadow text-center border border-slate-200"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section id="programs" className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">Available Programs</h2>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-slate-500" />
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-slate-900"
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
                  className="border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-slate-900"
                >
                  <option value="all">All Durations</option>
                  <option value="4-weeks">4 Weeks</option>
                  <option value="5-weeks">5 Weeks</option>
                  <option value="6-weeks">6 Weeks</option>
                  <option value="8-weeks">8 Weeks</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
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
                      <Users className="w-4 h-4 text-slate-500" />
                      <span className="text-slate-700">{program.participants} participants</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Video className="w-4 h-4 text-slate-500" />
                      <span className="text-slate-700">{program.format}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-slate-500" />
                      <span className="text-slate-700">Certified</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mb-4">
                    <button
                      onClick={() => setSelectedProgram(selectedProgram === program.id ? null : program.id)}
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      {selectedProgram === program.id ? 'Hide Details' : 'View Details'}
                    </button>
                    <a
                      href="/apply"
                      className="bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors"
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
                        <h4 className="font-semibold text-slate-900 mb-2">Requirements</h4>
                        <ul className="text-sm text-slate-700 space-y-1">
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
                      <h4 className="font-semibold text-slate-900 mb-2">Curriculum</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {program.curriculum.map((item, i) => (
                          <div key={i} className="text-sm text-slate-700 flex items-start gap-2">
                            <BookOpen className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="font-semibold text-slate-900 mb-2">Upcoming Sessions</h4>
                      <div className="space-y-2">
                        {program.nextSessions.map((session, i) => (
                          <div key={i} className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-200">
                            <div className="flex items-center gap-3">
                              <Calendar className="w-4 h-4 text-slate-500" />
                              <span className="text-sm font-medium">{session.date}</span>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4 text-slate-500" />
                                <span className="text-sm text-slate-700">{session.location}</span>
                              </div>
                            </div>
                            <span className="text-sm text-emerald-600 font-medium">
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
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Teacher Success Stories
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Hear from educators who have transformed their teaching with AI tools and methods.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-slate-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mr-4">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                    <div className="text-xs text-slate-500">{testimonial.subject} • {testimonial.location}</div>
                  </div>
                </div>
                <p className="text-slate-700 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm font-medium text-emerald-700">{testimonial.achievement}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Teaching?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join hundreds of Armenian educators who are already using AI to enhance their teaching effectiveness and student engagement. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/apply"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center shadow-lg"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all inline-flex items-center justify-center"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TeacherProgramsPage
