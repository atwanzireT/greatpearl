'use client'

import React from 'react'
import Image from 'next/image'
import { Coffee, Leaf, Mountain, Trophy, Globe, Heart } from 'lucide-react'
import { motion, Variants } from 'framer-motion'

const AboutSection = () => {
    // Animation variants with proper typing
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    }

    const itemVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1] // Using bezier curve instead of string
            }
        }
    }

    const features = [
        {
            icon: Coffee,
            title: " Fair and competitive pricing",
            description: "We offer farmers honest, competitive prices to support sustainable livelihoods."
        },
        {
            icon: Leaf,
            title: "Strict quality control",
            description: "Every batch is carefully inspected to ensure consistent, top-grade coffee."
        },
        {
            icon: Trophy,
            title: "Ongoing technical support",
            description: "We provide continuous training and advice to help farmers grow better, healthier coffee."
        }
    ]

    return (
        <section id="about" className="relative py-20 md:py-28 bg-white dark:bg-gray-900">
            {/* Decorative elements */}
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
                    {/* Image */}
                    <motion.div
                        className="relative h-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-xl"
                        variants={itemVariants}
                    >
                        <Image
                            src="/images/hero.jpg"
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
                            Great Pearl Coffee Factory specializes in high-quality Ugandan Robusta & Arabica coffee, serving as an ethical bridge between farmers and global markets. Through sustainable practices, farmer training, and fair pricing, we ensure traceable, premium beans while supporting agricultural communities.
                        </motion.p>

                        <motion.p
                            className="text-lg text-gray-600 dark:text-gray-300"
                            variants={itemVariants}
                        >
                            Utilizing modern milling technology and strict quality controls, we meet international standards (including EUDR compliance) for all coffee exports. Whether for bulk commercial orders or specialty micro-lots, we deliver Uganda&rsquo;s finest coffee with consistent excellence.
                        </motion.p>
                        {/* Features */}
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-4 pt-4"
                            variants={containerVariants}
                        >
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="p-6 bg-green-50/50 dark:bg-green-900/10 rounded-xl border border-green-100 dark:border-green-800/30 text-center"
                                    variants={itemVariants}
                                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                >
                                    <div className="flex flex-col items-center space-y-4">
                                        <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-full w-12 h-12 flex items-center justify-center">
                                            <feature.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900 dark:text-white text-sm">{feature.title}</h3>
                                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">{feature.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Mission section */}
                <motion.div
                    className="mt-20 md:mt-28 bg-gradient-to-r from-green-600 to-green-800 dark:from-green-700 dark:to-green-900 rounded-2xl p-8 md:p-12 shadow-xl overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center p-3 rounded-full bg-yellow-500/20 mb-6">
                            <Heart className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Our Mission: Elevating Coffee Culture
                        </h3>
                        <p className="text-lg text-green-100 mb-8">
                            To connect Uganda&rsquo;s coffee farmers to global markets by processing high-quality, traceable, and sustainable coffee—empowering communities, upholding ethical standards, and delivering excellence in every bean.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="px-6 py-3 bg-white text-green-700 font-medium rounded-lg shadow-md hover:bg-green-50 transition-colors">
                                Meet Our Farmers
                            </div>
                            <div className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                                Sustainability Report
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-yellow-500/20 blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-green-400/20 blur-2xl"></div>
                </motion.div>
            </div>
        </section>
    )
}

export default AboutSection