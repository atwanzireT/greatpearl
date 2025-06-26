'use client'

import React from 'react'
import { Coffee, Leaf, Users, BarChart2, Award, Globe } from 'lucide-react'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'

const StrategySection = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    }

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    }

    const strategyPillars = [
        {
            icon: Coffee,
            title: "Direct Sourcing",
            description: "Partnering directly with Kasese farmers",
            stats: "100% Fair Trade",
            color: "green"
        },
        {
            icon: Leaf,
            title: "Sustainability",
            description: "Eco-friendly processing",
            stats: "Zero Waste Goal",
            color: "emerald"
        },
        {
            icon: Users,
            title: "Farmer Support",
            description: "Fair pricing, no middlemen",
            stats: "200+ Farmers",
            color: "teal"
        },
        {
            icon: BarChart2,
            title: "Quality Focus",
            description: "Premium milling process",
            stats: "Grade A Certified",
            color: "yellow"
        }
    ]

    const roadmap = [
        {
            year: "2015",
            title: "Founded",
            description: "Began farmer partnerships",
            icon: Coffee,
            completed: true
        },
        {
            year: "2017",
            title: "Certified",
            description: "Achieved Fair Trade status",
            icon: Award,
            completed: true
        },
        {
            year: "Now",
            title: "Expanding",
            description: "Scaling operations",
            icon: Globe,
            current: true
        },
        {
            year: "Next",
            title: "Regional Growth",
            description: "Expanding to new areas",
            icon: Leaf
        }
    ]

    // Gallery images data
    const galleryImages = [
        {
            src: "/images/img-1.jpeg",
            alt: "Coffee farm in Kasese",
            caption: "Coffee Farm in Kasese"
        },
        {
            src: "/images/factory-2.jpeg",
            alt: "Our Coffee Stores",
            caption: "Our Coffee Stores"
        },
        {
            src: "/images/factory-1.jpg",
            alt: "Coffee processing Facility",
            caption: "Quality processing facility"
        },
        {
            src: "/images/img-6.jpeg",
            alt: "Premium coffee beans",
            caption: "Premium coffee beans"
        }
    ]

    return (
        <section id="strategy" className="relative py-16 bg-gray-50 dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="text-center mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants}>
                        <span className="inline-block px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm mb-3">
                            Our Approach
                        </span>
                    </motion.div>
                    <motion.h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3" variants={itemVariants}>
                        Empowering Coffee <span className="text-green-600 dark:text-green-400">Communities</span>
                    </motion.h2>
                    <motion.p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto" variants={itemVariants}>
                        Ethical sourcing, fair pricing, and sustainable practices.
                    </motion.p>
                </motion.div>

                {/* Strategy Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    {strategyPillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-gray-900 rounded-lg p-5 shadow-sm border border-gray-100 dark:border-gray-800"
                            variants={itemVariants}
                            whileHover={{ y: -3 }}
                        >
                            <div className={`w-9 h-9 rounded-lg bg-${pillar.color}-100 dark:bg-${pillar.color}-900/20 text-${pillar.color}-600 dark:text-${pillar.color}-400 flex items-center justify-center mb-3`}>
                                <pillar.icon className="w-4 h-4" />
                            </div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{pillar.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{pillar.description}</p>
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                                {pillar.stats}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Photo Gallery */}
                <motion.div 
                    className="mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">Our Coffee Journey in Pictures</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {galleryImages.map((image, index) => (
                            <motion.div 
                                key={index}
                                className="group relative overflow-hidden rounded-lg shadow-md"
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="aspect-w-4 aspect-h-3">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={400}
                                        height={300}
                                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <p className="text-white text-sm">{image.caption}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Roadmap */}
                <motion.div
                    className="bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-800 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="p-6 bg-green-50 dark:bg-green-900/10 border-b border-green-100 dark:border-green-800/30">
                        <h3 className="font-bold text-gray-900 dark:text-white">Our Journey</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Sustainable growth timeline</p>
                    </div>
                    <div className="divide-y divide-gray-100 dark:divide-gray-800">
                        {roadmap.map((item, index) => (
                            <div key={index} className="p-5 hover:bg-gray-50 dark:hover:bg-gray-800/30">
                                <div className="flex gap-4 items-center">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${
                                        item.current ? 'bg-green-600 text-white' :
                                        item.completed ? 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400' :
                                        'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
                                    }`}>
                                        {item.year}
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex items-center gap-2">
                                            <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                                            {item.current && (
                                                <span className="px-2 py-0.5 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
                                                    Current
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                                    </div>
                                    <item.icon className="w-4 h-4 text-green-600 dark:text-green-400" />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Impact */}
                <motion.div
                    className="bg-gradient-to-br from-green-600 to-green-700 dark:from-green-700 dark:to-green-800 rounded-xl p-8 shadow-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-3">Making a Difference</h3>
                        <p className="text-green-100 mb-6">
                            Fair prices for farmers, exceptional quality for customers.
                        </p>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white/10 p-3 rounded-lg">
                                <div className="text-xl font-bold text-white">3200+</div>
                                <div className="text-xs text-green-100">Farmers</div>
                            </div>
                            <div className="bg-white/10 p-3 rounded-lg">
                                <div className="text-xl font-bold text-white">Fair</div>
                                <div className="text-xs text-green-100">Pricing</div>
                            </div>
                            <div className="bg-white/10 p-3 rounded-lg">
                                <div className="text-xl font-bold text-white">100%</div>
                                <div className="text-xs text-green-100">Grade A</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default StrategySection