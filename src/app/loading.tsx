'use client'

import React from 'react'

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex items-center justify-center transition-colors">
      <div className="text-center">
        {/* Animated AI4ALL Logo */}
        <div className="relative w-20 h-20 mx-auto mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl animate-pulse"></div>
          <div className="absolute inset-2 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center">
            <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              AI
            </span>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">
          Loading AI4ALL Armenia
        </h2>
        
        {/* Loading Bar */}
        <div className="w-64 h-2 bg-gray-200 dark:bg-slate-700 rounded-full mx-auto mb-4 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full animate-loading"></div>
        </div>

        {/* Loading Message */}
        <p className="text-slate-600 dark:text-slate-400 text-sm transition-colors">
          Empowering the future with AI education...
        </p>
      </div>
    </div>
  )
}
