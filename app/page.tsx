'use client'

import HeroSection from '@/components/heroSection';
import AboutSection from '@/components/storySection';
import StrategySection from '@/components/strategy';
import OurGreatPearlWays from '@/components/ourWaysSection';
import ContactUs from '@/components/contactus';
import { Coffee, Globe, Heart, Leaf } from 'lucide-react';
import { motion } from 'framer-motion'

const GreatPearlCoffee = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <HeroSection />
      <AboutSection />
      <StrategySection />
      <OurGreatPearlWays/>

      {/* Signature Approach Section */}
      <section id="ways" className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.span 
              className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Leaf className="w-3 h-3 mr-1" />
              The GreatPearl Way
            </motion.span>
            <motion.h2
              className="text-3xl font-bold text-gray-900 dark:text-white mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Our <span className="text-green-600 dark:text-green-400">Signature</span> Approach
            </motion.h2>
            <motion.p
              className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Time-tested principles for exceptional coffee.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Coffee,
                title: "Batch Quality",
                description: "Meticulous analysis for consistent flavor profiles"
              },
              {
                icon: Globe,
                title: "Direct Sourcing",
                description: "Fair pay and premium quality from farmers"
              },
              {
                icon: Heart,
                title: "Craftsmanship",
                description: "Attention to detail in every step"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow border border-gray-100 dark:border-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactUs/>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold mb-3 text-green-400">Great Pearl</h4>
              <p className="text-gray-400 text-sm">
                Exceptional coffee since 2015.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-green-400">Our Story</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400">Coffee Blends</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400">Sustainability</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-green-400">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400">Wholesale</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Great Pearl Coffee Company</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default GreatPearlCoffee