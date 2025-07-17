'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, Clock, Tag, ArrowRight, Filter } from 'lucide-react'

const NewsEventsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All', count: 15 },
    { id: 'news', label: 'News', count: 10 },
    { id: 'events', label: 'Events', count: 5 },
    { id: 'announcements', label: 'Announcements', count: 0 },
  ]

  const newsEvents = [
    {
      id: 1,
      type: 'news',
      title: 'AI4ALL Armenia Launches Nationwide Initiative',
      date: '2024-11-15',
      category: 'Launch',
      excerpt: 'AI4ALL Armenia officially launches its comprehensive AI education program, bringing cutting-edge artificial intelligence training to youth and teachers across all regions of Armenia.',
      image: '/news/AI4ALL Armenia Launches Nationwide Initiative.png',
      author: 'EIF Communications',
      featured: true,
    },
    {
      id: 2,
      type: 'news',
      title: 'EIF\'s AI4ALL Initiative and Teachers: "What is left for us to do? Adapt and learn."',
      date: '2025-04-23',
      category: 'Teacher Stories',
      excerpt: 'Karine Mayilyan shares her transformative experience with ChatGPT and AI tools in education, highlighting the importance of adaptation in the digital age.',
      image: '/news/EIF\'s AI4ALL Initiative and Teachers Adapt.png',
      author: 'Karine Mayilyan',
      featured: true,
    },
    {
      id: 3,
      type: 'news',
      title: 'AI4ALL: How Artificial Intelligence is Changing Education and Work',
      date: '2025-06-02',
      category: 'Industry Impact',
      excerpt: 'A comprehensive look at how AI is transforming both educational methodologies and workplace dynamics, with insights from AI4ALL Armenia participants.',
      image: '/news/How Artificial Intelligence is Changing Education.png',
      author: 'AI4ALL Armenia Team',
      featured: false,
    },
    {
      id: 4,
      type: 'news',
      title: 'U.S. Company Plans 100MW AI Data Center in Armenia',
      date: '2025-07-11',
      category: 'Industry News',
      excerpt: 'Major AI infrastructure investment signals growing confidence in Armenia\'s tech ecosystem, creating new opportunities for AI4ALL Armenia graduates.',
      image: '/news/U.S. Company Plans 100MW AI Data Center in Armenia.png',
      author: 'Tech Armenia',
      featured: false,
    },
    {
      id: 5,
      type: 'news',
      title: 'AI4ALL Global Announces $2M Google.org Grant for Future of AI Education',
      date: '2025-06-09',
      category: 'Global Impact',
      excerpt: 'The global AI4ALL organization receives major funding to expand AI education initiatives, including support for programs like AI4ALL Armenia.',
      image: '/news/AI4ALL Global Announces $2M Google.org.png',
      author: 'AI4ALL Global',
      featured: false,
    },
    {
      id: 10,
      type: 'news',
      title: 'AI4ALL Armenia: Empowering Everyone with Artificial Intelligence',
      date: '2025-07-15',
      category: 'Program Overview',
      excerpt: 'Ձեռնարկությունների ինկուբատոր հիմնադրամի AI4ALL նախաձեռնությունը նպատակ ունի զինել մարդկանց AI գիտելիքներով և հմտություններով արդյունավետ կիրառման համար:',
      image: '/news/AI4ALL Armenia Launches Nationwide Initiative.png',
      author: 'EIF Armenia',
      featured: true,
    },
    {
      id: 6,
      type: 'event',
      title: 'AI for Teachers Info Session',
      date: '2025-07-25',
      time: '18:00 - 19:30',
      location: 'Online Webinar',
      category: 'Webinar',
      excerpt: 'Join us for an interactive session to learn about our AI for Teachers program, featuring live demonstrations and Q&A with program graduates.',
      image: '/news/AI for Teachers Info Session.png',
      registrationLink: '/register/teachers-info',
      featured: true,
    },
    {
      id: 11,
      type: 'event',
      title: 'Արհեստական բանականության աշխատարան հայ մանկավարժների համար',
      date: '2025-08-10',
      time: '10:00 - 16:00',
      location: 'EIF Technology Center, Yerevan',
      category: 'Workshop',
      excerpt: 'Մանկավարժների հատուկ աշխատարան՝ AI գործիքների ինտեգրման և դասարանում արդյունավետ կիրառման մասին: Հայերեն դասընթաց փորձառու մասնագետների հետ:',
      image: '/news/AI for Teachers Info Session.png',
      registrationLink: '/register/teachers-armenian-workshop',
      featured: true,
    },
    {
      id: 7,
      type: 'announcement',
      title: 'Youth Program Applications Now Open',
      date: '2025-08-01',
      category: 'Application',
      excerpt: 'Applications for the Fall 2025 AI for Youth program are now open. Early bird deadline is August 15th.',
      image: '/news/Youth Program Applications Now Open.png',
      deadline: '2025-08-15',
      featured: true,
    },
    {
      id: 8,
      type: 'announcement',
      title: 'New Partnership with Armenian Tech Companies',
      date: '2025-07-20',
      category: 'Partnership',
      excerpt: 'AI4ALL Armenia announces strategic partnerships with leading Armenian tech companies to provide internship opportunities.',
      image: '/news/New Partnership with Armenian Tech Companies.jpeg',
      deadline: '2025-08-01',
      featured: false,
    },
    {
      id: 9,
      type: 'announcement',
      title: 'Summer Break Schedule - Programs Resume September 1st',
      date: '2025-07-15',
      category: 'Schedule',
      excerpt: 'All regular programs will take a summer break from July 20th to August 31st. Special summer workshops continue.',
      image: '/news/Summer Break Schedule - Programs Resume September 1st.png',
      deadline: '2025-07-20',
      featured: false,
    },
    {
      id: 10,
      type: 'event',
      title: 'AI for Teachers Info Session',
      date: '2025-07-25',
      time: '18:00 - 19:30',
      location: 'Online Webinar',
      category: 'Webinar',
      excerpt: 'Join us for an interactive session to learn about our AI for Teachers program, featuring live demonstrations and Q&A with program graduates.',
      image: '/news/AI for Teachers Info Session.png',
      registrationLink: '/register/teachers-info',
      featured: true,
    },
    {
      id: 11,
      type: 'event',
      title: 'AI Workshop - Vanadzor Tech Center',
      date: '2025-08-15',
      time: '10:00 - 16:00',
      location: 'Vanadzor Tech Center, Vanadzor',
      category: 'Workshop',
      excerpt: 'Hands-on AI workshop for Lori region participants, covering practical applications of machine learning in agriculture and industry.',
      image: '/news/AI Workshop - Vanadzor Tech Center.png',
      registrationLink: '/register/vanadzor-workshop',
      featured: false,
    },
    {
      id: 12,
      type: 'event',
      title: 'International Conference on Recent Advances in Engineering and Technology',
      date: '2025-07-11',
      time: '09:00 - 18:00',
      location: 'Yerevan, Armenia',
      category: 'Conference',
      excerpt: 'AI4ALL Armenia participants present their projects at this prestigious international conference in Yerevan.',
      image: '/news/nternational Conference on Recent Advances in Engineering and.png',
      registrationLink: '/register/icraet',
      featured: false,
    },
    {
      id: 13,
      type: 'event',
      title: 'International Conference on Business and AI',
      date: '2025-12-11',
      time: '09:00 - 17:00',
      location: 'Yerevan, Armenia',
      category: 'Conference',
      excerpt: 'Annual conference exploring the intersection of AI and business, featuring keynotes from AI4ALL Armenia mentors and industry partners.',
      image: '/news/International Conference on Business and AI.png',
      registrationLink: '/register/icbai',
      featured: false,
    },
    {
      id: 14,
      type: 'news',
      title: 'Ուսուցիչները պատրաստ են թվային ապագայի համար',
      date: '2024-06-23',
      category: 'Կրթություն',
      excerpt: 'AI4ALL Armenia-ի ծրագրի շրջանակում 500-ից ավելի ուսուցիչ ստացավ արհեստական բանականության գիտելիքներ:',
      image: '/news/AI for Teachers Info Session.png',
      author: 'Մարիաննա Դանիելյան',
      featured: false,
    },
    {
      id: 15,
      type: 'news',
      title: 'ԱԲ-ի ինտեգրումը հայկական կրթական համակարգում',
      date: '2024-06-07',
      category: 'Տեխնոլոգիա',
      excerpt: 'Ձեռնարկությունների ինկուբատոր հիմնադրամի Վանաձորի տեխնոլոգիական կենտրոնը հաջողությամբ իրականացնում է մանկավարժների համար նախատեսված ԱԲ կրթական ծրագիրը:',
      image: '/news/AI Workshop - Vanadzor Tech Center.png',
      author: 'Եղիշե Սաֆարյան',
      featured: false,
    },
  ]

  const upcomingEvents = newsEvents
    .filter(item => item.type === 'event' && new Date(item.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3)

  const filteredItems = activeFilter === 'all' 
    ? newsEvents 
    : activeFilter === 'news' 
      ? newsEvents.filter(item => item.type === 'news')
      : activeFilter === 'events'
        ? newsEvents.filter(item => item.type === 'event')
        : activeFilter === 'announcements'
          ? newsEvents.filter(item => item.type === 'announcement')
          : newsEvents

  const featuredNews = newsEvents.filter(item => item.featured)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="bg-white">
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
              News & Events
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Stay updated with the latest developments, stories, and opportunities from AI4ALL Armenia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Featured Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
              Highlighting the most impactful stories from our AI education initiative.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredNews.slice(0, 2).map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                style={{ height: '600px' }}
              >
                <div className="h-56 bg-gray-200 relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 h-[calc(600px-14rem)] flex flex-col">
                  <div className="flex items-center mb-4">
                    <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                    <span className="text-gray-500 text-sm ml-4">{formatDate(item.date)}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2" style={{ height: '4rem' }}>
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 line-clamp-4 flex-1" style={{ height: '6rem' }}>
                    {item.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="truncate">{item.author}</span>
                    </div>
                    <Link
                      href={`/news/${item.id}`}
                      className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-md font-medium transition-colors inline-flex items-center flex-shrink-0"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>



      {/* All News & Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              All Updates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse all news, events, and announcements from AI4ALL Armenia.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg shadow-sm p-1 inline-flex">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${
                    activeFilter === filter.id
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {filter.label}
                  <span className="ml-2 text-sm opacity-75">({filter.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* News & Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                style={{ height: '500px' }}
              >
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 h-[calc(500px-12rem)] flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.type === 'news' ? 'bg-blue-100 text-blue-600' :
                      item.type === 'event' ? 'bg-green-100 text-green-600' :
                      'bg-purple-100 text-purple-600'
                    }`}>
                      {item.category}
                    </span>
                    <span className="text-gray-500 text-sm">{formatDate(item.date)}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2" style={{ height: '3.5rem' }}>
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3" style={{ height: '4.5rem' }}>
                    {item.excerpt}
                  </p>
                  
                  {item.type === 'event' && (
                    <div className="mb-4 space-y-2" style={{ height: '3rem' }}>
                      {item.time && (
                        <div className="flex items-center text-gray-600 text-sm">
                          <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="truncate">{item.time}</span>
                        </div>
                      )}
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="truncate">{item.location}</span>
                      </div>
                    </div>
                  )}
                  
                  {item.type !== 'event' && (
                    <div className="mb-4" style={{ height: '3rem' }}></div>
                  )}
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <div className="text-sm text-gray-500 flex-1 truncate">
                      {item.author && <span>{item.author}</span>}
                    </div>
                    <Link
                      href={item.registrationLink || `/news/${item.id}`}
                      className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center flex-shrink-0"
                    >
                      {item.type === 'event' ? 'Register' : 'Read More'}
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay In The Loop
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our newsletter for the latest updates on programs, events, and success stories.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-500"
                />
                <button className="bg-accent-500 text-gray-900 px-6 py-3 rounded-r-md font-semibold hover:bg-accent-400 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default NewsEventsPage
