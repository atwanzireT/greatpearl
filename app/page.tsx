'use client'

import HeroSection from '@/components/heroSection';
import AboutSection from '@/components/storySection';
import StrategySection from '@/components/strategy';
import { Coffee, Star, Award, Users, ArrowRight, Sparkles, Leaf, Globe, Heart, ChevronRight } from 'lucide-react';
import React from 'react'
import { motion } from 'framer-motion'
import OurGreatPearlWays from '@/components/ourWaysSection';
import ContactUs from '@/components/contactus';

const GreatPearlCoffee = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Strategy Section */}
      <StrategySection />

      {/* Our Ways Section */}
      <OurGreatPearlWays/>

      {/* GreatPearl Ways (Additional Unique Section) */}
      <section id="ways" className="relative py-20 md:py-28 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span 
              className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Leaf className="w-4 h-4 mr-2" />
              The GreatPearl Way
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our <span className="text-green-600 dark:text-green-400">Signature</span> Approach
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Every Great Pearl coffee follows our time-tested principles for an unmatched experience.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
              icon: Coffee,
              title: "Batch Quality Analysis",
              description: "Every batch is meticulously analyzed to highlight unique flavor profiles and ensure consistency."
              },
              {
              icon: Globe,
              title: "Direct Farm Relationships",
              description: "We source directly from farmers, ensuring fair pay and premium quality."
              },
              {
              icon: Heart,
              title: "Craftsmanship in Every Cup",
              description: "From bean selection to brewing, we obsess over every detail."
              }
            ].map((item, index) => (
              <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              >
              <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <ContactUs/>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4 text-green-400">Great Pearl</h4>
              <p className="text-gray-400">
                Crafting exceptional coffee experiences since 1985.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Explore</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Our Story</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Coffee Blends</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Sustainability</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Wholesale</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Great Pearl Coffee Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default GreatPearlCoffee