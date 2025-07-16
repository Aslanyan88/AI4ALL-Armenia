'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 py-2">
          <Link href="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative h-16 w-auto max-w-[120px] flex items-center"
            >
              <Image
                src="/logo.jpg"
                alt="AI4ALL Armenia Logo"
                width={120}
                height={64}
                className="object-contain h-full w-auto"
                priority
              />
            </motion.div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              About
            </Link>
            <Link href="/programs" className="text-gray-700 hover:text-blue-600 font-medium">
              Programs
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
