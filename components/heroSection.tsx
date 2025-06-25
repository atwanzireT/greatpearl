'use client'

import React, { useState, useEffect } from 'react'
import { Coffee, ArrowRight, Star, Users, Award, Leaf } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <section id="#" className="relative min-h-screen flex items-center pt-10 pb-10 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero-bg.jpg"
                    alt="Coffee farm background"
                    fill
                    className="object-cover"
                    quality={100}
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 to-yellow-50/30 dark:from-gray-900/90 dark:to-gray-800/90"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Content Section */}
                    <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-green-200 dark:border-green-700/30 shadow-sm mb-8">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-green-700 dark:text-green-400">1000+ Farmers Trust Us</span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl lg:text-5xl font-black mb-6">
                            <span className="text-gray-900 dark:text-white">Uganda's Finest </span>
                            <span className="bg-gradient-to-r from-green-600 to-yellow-600 dark:from-green-400 dark:to-yellow-400 bg-clip-text text-transparent">
                                Coffee Trader
                            </span>
                        </h1>

                        {/* Value Prop */}
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
                            Premium Robusta & Arabica beans, sustainably sourced and processed to global standards.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Link
                                href="#contact"
                                className="group flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg transition-all"
                            >
                                Get Wholesale Quote
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="interest"
                                className="flex items-center justify-center px-6 py-3 border-2 border-green-200 dark:border-green-700 text-green-700 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 font-semibold rounded-lg transition-all"
                            >
                                Request Samples
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200 dark:border-gray-700">
                            {[
                                { value: "1000+", label: "Happy Clients" },
                                { value: "10+ Years", label: "Experience" },
                                { value: "100%", label: "Fair Trade" }
                            ].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                                    <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual Section */}
                    <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        {/* Main Image */}
                        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/hero.jpg"
                                alt="Premium Coffee Beans"
                                fill
                                className="object-cover"
                                quality={100}
                                priority
                            />
                            
                            {/* Badges */}
                            <div className="absolute -top-3 -right-3 bg-yellow-500 text-white p-3 rounded-xl shadow-lg rotate-12">
                                <Star className="w-5 h-5" />
                            </div>
                            <div className="absolute -bottom-3 -left-3 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg border border-green-200">
                                <Award className="w-5 h-5 text-green-600" />
                            </div>
                        </div>

                        {/* Features */}
                        <div className="mt-6 grid grid-cols-2 gap-3">
                            {[
                                { icon: Users, color: "green", title: "Direct Sourcing", desc: "From local farmers" },
                                { icon: Leaf, color: "yellow", title: "Sustainable", desc: "Ethical practices" }
                            ].map((feat, i) => (
                                <div key={i} className={`bg-white/60 dark:bg-gray-800/60 p-3 rounded-lg border border-${feat.color}-100 dark:border-${feat.color}-800/30`}>
                                    <feat.icon className={`w-5 h-5 text-${feat.color}-600 mb-1`} />
                                    <div className="text-sm font-medium text-gray-900 dark:text-white">{feat.title}</div>
                                    <div className="text-xs text-gray-600 dark:text-gray-400">{feat.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection