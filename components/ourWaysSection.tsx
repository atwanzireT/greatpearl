'use client'

import React from 'react'
import { Coffee, Users, Leaf, Handshake, Award, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

const OurGreatPearlWays = () => {
  return (
    <section id="ways" className="relative py-20 md:py-28 bg-white dark:bg-gray-900">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 dark:opacity-[3%]">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-yellow-300 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-yellow-400 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-4">
            <Handshake className="w-4 h-4 mr-2" />
            The GreatPearl Difference
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            More Than Coffee – A <span className="text-green-600 dark:text-green-400">Movement</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We don't just source coffee—we build relationships, uplift communities, and redefine quality standards.
          </p>
        </motion.div>

        {/* Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 1. Direct Partnerships */}
          <motion.div
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Direct Trade, Not Just Fair Trade
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We work directly with small-scale farmers, cutting out middlemen to ensure they earn <strong>30-50% more</strong> than industry standards.
            </p>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                <span>Personal visits to every partner farm</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                <span>Long-term contracts for stability</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                <span>Profit-sharing initiatives</span>
              </li>
            </ul>
          </motion.div>

          {/* 2. Quality First */}
          <motion.div
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              The 1% Quality Standard
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Only <strong>1% of harvests</strong> meet our rigorous criteria for acidity, aroma, and flavor profile.
            </p>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-200">Our Process:</h4>
                <ul className="mt-2 space-y-1 text-sm text-gray-500 dark:text-gray-400">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Hand-picked at peak ripeness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Triple-density sorting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Rigorous sample cupping for every lot</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 3. Community Impact */}
          <motion.div
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Beyond Fair Wages – Real Change
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              For every bag sold, we invest back into farming communities through:
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-yellow-50/50 dark:bg-yellow-900/10 rounded-lg">
                <div className="text-green-600 dark:text-green-400 font-bold text-lg">5%</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">To Local Farmer Trainings</div>
              </div>
              <div className="p-3 bg-yellow-50/50 dark:bg-yellow-900/10 rounded-lg">
                <div className="text-green-600 dark:text-green-400 font-bold text-lg">3%</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">For Local Farmer programs</div>
              </div>
              <div className="p-3 bg-yellow-50/50 dark:bg-yellow-900/10 rounded-lg">
                <div className="text-green-600 dark:text-green-400 font-bold text-lg">2%</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">To Local Farmer Initiatives</div>
              </div>
              <div className="p-3 bg-yellow-50/50 dark:bg-yellow-900/10 rounded-lg">
                <div className="text-green-600 dark:text-green-400 font-bold text-lg">10+</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Communities impacted</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Testimonial */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-green-600 to-green-800 dark:from-green-700 dark:to-green-900 rounded-2xl p-8 md:p-12 shadow-xl overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
                  <Coffee className="w-10 h-10 text-white" />
                </div>
              </div>
              <div>
                <blockquote className="text-xl italic text-white mb-4">
                  GreatPearl doesn&rsquo;t just buy coffee—they help us protect our land and our future. Their support means we use sustainable methods that preserve our environment, and they stand by us to ensure fair treatment and lasting security for our families.
                </blockquote>
                <div className="text-yellow-200 font-medium">— Carlos Mendez, Coffee Farmer (Colombia)</div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-yellow-500/20 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-yellow-400/20 blur-2xl"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurGreatPearlWays