'use client'

import React from 'react'
import { Target, BarChart2, Leaf, Globe, Coffee, Users, Award } from 'lucide-react'
import { motion } from 'framer-motion'

const StrategySection = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    const strategyPillars = [
        {
            icon: Coffee,
            title: "Direct Sourcing",
            description: "Partnering directly with farmers in Kasese for premium quality beans",
            stats: "100% Fair Trade",
            color: "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400"
        },
        {
            icon: Leaf,
            title: "Sustainable Practices",
            description: "Eco-friendly processing and ethical farming partnerships",
            stats: "Zero Waste Goal",
            color: "bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400"
        },
        {
            icon: Users,
            title: "Farmer Empowerment",
            description: "Fair pricing that eliminates exploitative middlemen",
            stats: "200+ Farmers Supported",
            color: "bg-teal-100 dark:bg-teal-900/20 text-teal-700 dark:text-teal-400"
        },
        {
            icon: BarChart2,
            title: "Quality Excellence",
            description: "Premium milling process preserving bean integrity",
            stats: "Grade A Certified",
            color: "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400"
        }
    ]

    const roadmap = [
        {
            year: "2023",
            title: "Foundation Built",
            description: "Established direct partnerships with Kasese coffee farmers",
            icon: Coffee,
            completed: true
        },
        {
            year: "2024",
            title: "Fair Trade Certified",
            description: "Achieved certification ensuring ethical sourcing standards",
            icon: Award,
            completed: true
        },
        {
            year: "2025",
            title: "Expansion Phase",
            description: "Scaling operations while maintaining quality and fairness",
            icon: Globe,
            current: true
        },
        {
            year: "2026",
            title: "Regional Impact",
            description: "Expanding to neighboring regions with same ethical model",
            icon: Leaf
        }
    ]

    return (
        <section id="strategy" className="relative py-16 md:py-24 bg-gray-50 dark:bg-gray-950">
            {/* Simplified decorative elements */}
            <div className="absolute inset-0 overflow-hidden opacity-5 dark:opacity-3">
                <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-green-400 blur-3xl"></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-yellow-400 blur-3xl"></div>
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Simplified Header */}
                <motion.div
                    className="text-center mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants}>
                        <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-3">
                            Our Approach
                        </span>
                    </motion.div>
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3"
                        variants={itemVariants}
                    >
                        Empowering Coffee <span className="text-green-600 dark:text-green-400">Communities</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                        variants={itemVariants}
                    >
                        Our strategy focuses on direct partnerships, fair pricing, and sustainable practices that benefit both farmers and coffee lovers.
                    </motion.p>
                </motion.div>

                {/* Cleaner Strategy Pillars */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                >
                    {strategyPillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all duration-300"
                            variants={itemVariants}
                            whileHover={{ y: -3, transition: { duration: 0.2 } }}
                        >
                            <div className={`w-10 h-10 rounded-lg ${pillar.color} flex items-center justify-center mb-4`}>
                                <pillar.icon className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{pillar.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 leading-relaxed">{pillar.description}</p>
                            <div className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 inline-block">
                                {pillar.stats}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Simplified Roadmap */}
                <motion.div
                    className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-800"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="p-6 md:p-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/10 border-b border-green-100 dark:border-green-800/30">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Our Journey</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Building sustainable coffee partnerships step by step</p>
                    </div>
                    <div className="divide-y divide-gray-100 dark:divide-gray-800">
                        {roadmap.map((item, index) => (
                            <div key={index} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors duration-200">
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold ${item.current
                                            ? 'bg-green-600 text-white'
                                            : item.completed
                                                ? 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400'
                                                : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
                                        }`}>
                                        {item.year}
                                    </div>
                                    <div className="flex-grow min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                                            {item.current && (
                                                <span className="px-2 py-0.5 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
                                                    Current
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                                    </div>
                                    <div className="w-8 h-8 rounded-lg bg-green-100/50 dark:bg-green-900/20 flex items-center justify-center">
                                        <item.icon className="w-4 h-4 text-green-600 dark:text-green-400" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Simplified Impact Section */}
                <motion.div
                    className="mt-16 bg-gradient-to-br from-green-600 to-green-700 dark:from-green-700 dark:to-green-800 rounded-2xl p-8 md:p-10 shadow-lg overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Making a Real Difference
                        </h3>
                        <p className="text-green-100 mb-8 text-lg max-w-2xl mx-auto">
                            By eliminating middlemen and ensuring fair prices, we're creating sustainable livelihoods for coffee farmers while delivering exceptional quality to our customers.
                        </p>
                        <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
                            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                                <div className="text-2xl font-bold text-white mb-1">200+</div>
                                <div className="text-xs text-green-100">Farmers Supported</div>
                            </div>
                            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                                <div className="text-2xl font-bold text-white mb-1">Fair</div>
                                <div className="text-xs text-green-100">Pricing Always</div>
                            </div>
                            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                                <div className="text-2xl font-bold text-white mb-1">100%</div>
                                <div className="text-xs text-green-100">Quality Grade A</div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-yellow-400/20 blur-2xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-green-400/20 blur-2xl"></div>
                </motion.div>
            </div>
        </section>
    )
}

export default StrategySection