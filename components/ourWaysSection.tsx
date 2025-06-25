'use client'

import React from 'react'
import { Coffee, Users, Award, Globe, Handshake } from 'lucide-react'
import { motion } from 'framer-motion'

const OurGreatPearlWays = () => {
  return (
    <section id="ways" className="relative py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm mb-3">
            <Handshake className="w-3 h-3 mr-1" />
            The GreatPearl Difference
          </span>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            More Than Coffee – A <span className="text-green-600 dark:text-green-400">Movement</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Building relationships and redefining quality standards.
          </p>
        </motion.div>

        {/* Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1. Direct Partnerships */}
          <motion.div
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-3">
              <Users className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Direct Trade
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
              Farmers earn <strong>30-50% more</strong> through our direct partnerships.
            </p>
            <ul className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-1">•</span>
                <span>Personal farm visits</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-1">•</span>
                <span>Long-term contracts</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-1">•</span>
                <span>Profit-sharing</span>
              </li>
            </ul>
          </motion.div>

          {/* 2. Quality First */}
          <motion.div
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-3">
              <Award className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Top 1% Quality
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
              Only <strong>1% of harvests</strong> meet our strict standards.
            </p>
            <ul className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-1">•</span>
                <span>Hand-picked beans</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-1">•</span>
                <span>Triple-density sorting</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-1">•</span>
                <span>Rigorous cupping tests</span>
              </li>
            </ul>
          </motion.div>

          {/* 3. Community Impact */}
          <motion.div
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-3">
              <Globe className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Community Impact
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
              We reinvest in farming communities:
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-2 bg-yellow-50/50 dark:bg-yellow-900/10 rounded">
                <div className="text-green-600 dark:text-green-400 font-bold">5%</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Farmer Training</div>
              </div>
              <div className="p-2 bg-yellow-50/50 dark:bg-yellow-900/10 rounded">
                <div className="text-green-600 dark:text-green-400 font-bold">3%</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Local Programs</div>
              </div>
              <div className="p-2 bg-yellow-50/50 dark:bg-yellow-900/10 rounded">
                <div className="text-green-600 dark:text-green-400 font-bold">2%</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Initiatives</div>
              </div>
              <div className="p-2 bg-yellow-50/50 dark:bg-yellow-900/10 rounded">
                <div className="text-green-600 dark:text-green-400 font-bold">10+</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Communities</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Testimonial */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-green-600 to-green-800 dark:from-green-700 dark:to-green-900 rounded-xl p-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
              <Coffee className="w-6 h-6 text-white" />
            </div>
            <div>
              <blockquote className="text-white italic mb-3">
                "GreatPearl helps us protect our land and future with sustainable methods and fair treatment."
              </blockquote>
              <div className="text-yellow-200 text-sm">— Fauza Kusa</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurGreatPearlWays