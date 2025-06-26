'use client'

import React from 'react'
import Image from 'next/image'
import { Coffee, Leaf, Trophy, Globe, Heart } from 'lucide-react'
import { motion, Variants } from 'framer-motion'

const AboutSection = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    }

    const itemVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
        }
    }

    const features = [
        {
            icon: Coffee,
            title: "Fair Pricing",
            description: "Honest prices for sustainable farming."
        },
        {
            icon: Leaf,
            title: "Quality Control",
            description: "Rigorous inspections for premium beans."
        },
        {
            icon: Trophy,
            title: "Farmer Support",
            description: "Training to improve coffee yields."
        }
    ]

    return (
        <section id="about" className="relative py-20 md:py-28 bg-white dark:bg-gray-900">
            {/* Decorative elements (unchanged) */}
            <div className="absolute top-0 left-0 w-full overflow-hidden opacity-10 dark:opacity-5">
                <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-green-300 blur-3xl"></div>
                <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-yellow-400 blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    {/* Image (unchanged) */}
                    <motion.div
                        className="relative h-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-xl"
                        variants={itemVariants}
                    >
                        <Image
                            src="/images/factory.jpeg"
                            alt="Great Pearl Coffee Farm"
                            fill
                            className="object-cover"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-green-700 to-green-900 opacity-20"></div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-green-500/10 backdrop-blur-sm border border-green-300/20 flex items-center justify-center">
                            <div className="w-24 h-24 rounded-full bg-green-400/20 backdrop-blur-sm border border-green-300/30 flex items-center justify-center">
                                <Globe className="w-8 h-8 text-green-100" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div className="space-y-6" variants={containerVariants}>
                        <motion.div variants={itemVariants}>
                            <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium">
                                Our Story
                            </span>
                        </motion.div>

                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
                            variants={itemVariants}
                        >
                            Crafting Excellence Since <span className="text-green-600 dark:text-green-400">2015</span>
                        </motion.h2>

                        <motion.p
                            className="text-lg text-gray-600 dark:text-gray-300"
                            variants={itemVariants}
                        >
                            We connect Ugandan coffee farmers to global markets with ethically sourced, high-quality Robusta & Arabica beans. Sustainable practices and modern milling ensure EUDR-compliant exports.
                        </motion.p>

                        {/* Features - Simplified */}
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
                            variants={containerVariants}
                        >
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="p-4 bg-green-50/50 dark:bg-green-900/10 rounded-xl border border-green-100 dark:border-green-800/30 text-center"
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="flex flex-col items-center space-y-2">
                                        <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-full">
                                            <feature.icon className="w-5 h-5 text-green-600 dark:text-green-400" />
                                        </div>
                                        <h3 className="font-medium text-gray-900 dark:text-white text-sm">{feature.title}</h3>
                                        <p className="text-xs text-gray-600 dark:text-gray-400">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Mission - Condensed */}
                <motion.div
                    className="mt-20 md:mt-28 bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-8 md:p-12 shadow-xl"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex p-2 rounded-full bg-yellow-500/20 mb-4">
                            <Heart className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Elevating Coffee Culture
                        </h3>
                        <p className="text-green-100 mb-6">
                            Empowering Ugandan farmers through ethical trade and premium coffee production.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <button className="px-4 py-2 bg-white text-green-700 font-medium rounded-lg shadow">
                                Farmers Support
                            </button>
                            <button className="px-4 py-2 border border-white text-white rounded-lg">
                                Sustainability
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default AboutSection