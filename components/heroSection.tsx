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
            {/* Background Image with Blur */}
            <div className="absolute inset-0">
                <div className="absolute inset-0">
                    <Image
                        src="/images/hero-bg.jpg"
                        alt="Coffee farm background"
                        fill
                        className="object-cover"
                        quality={100}
                        priority
                    />
                    <div className="absolute inset-0"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 to-yellow-50/30 dark:from-gray-900/90 dark:to-gray-800/90"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.05),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(234,179,8,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(234,179,8,0.05),transparent_50%)]"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Content Section */}
                    <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}>

                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-green-200 dark:border-green-700/30 shadow-sm mb-8">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-green-700 dark:text-green-400">Trusted by 1000+ Farmers</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-5xl lg:text-4xl font-black mb-6 leading-[0.9]">
                            <span className="text-gray-900 dark:text-white">From Uganda’s </span>
                            <br />
                            <span className="bg-gradient-to-r from-green-600 to-yellow-600 dark:from-green-400 dark:to-yellow-400 bg-clip-text text-transparent">
                                Heart to the World&rsquo;s Cup
                            </span>
                        </h1>

                        {/* Value Proposition */}
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
                            At <strong className="text-green-700 dark:text-green-400">Great Pearl Coffee Factory </strong>
                            we specialize in premium Robusta and Arabica coffee—traceable, sustainable, and expertly processed to meet global standards. Trusted by farmers. Preferred by roasters.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Link
                                href="#contact"
                                className="group inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
                            >
                                Get Wholesale Quote
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                href="insterest"
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-200 dark:border-green-700 text-green-700 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 font-semibold rounded-xl transition-all duration-300"
                            >
                                Request Samples
                            </Link>
                        </div>

                        {/* Social Proof Stats */}
                        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">1000+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">10+ Years</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">100%</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Fair Trade</div>
                            </div>
                        </div>
                    </div>

                    {/* Visual Section */}
                    <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}>

                        {/* Main Image */}
                        <div className="relative">
                            <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-600/50 to-green-800/50">
                                {/* Actual image */}
                                <div className="w-full h-full relative">
                                    <Image
                                        src="/images/hero.jpg"
                                        alt="Premium Coffee Beans from Kasese"
                                        fill
                                        className="object-cover"
                                        quality={100}
                                        priority
                                    />
                                    <div className="absolute inset-0"></div>
                                </div>
                            </div>

                            {/* Quality Badge */}
                            <div className="absolute -top-4 -right-4 bg-yellow-500 text-white p-4 rounded-2xl shadow-xl transform rotate-12 hover:rotate-0 transition-transform duration-300">
                                <div className="text-center">
                                    <Star className="w-6 h-6 mx-auto mb-1" />
                                    <div className="text-xs font-bold">Premium</div>
                                    <div className="text-xs">Quality</div>
                                </div>
                            </div>

                            {/* Certification Badge */}
                            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-green-200 dark:border-green-700/30">
                                <div className="text-center">
                                    <Award className="w-6 h-6 mx-auto mb-1 text-green-600" />
                                    <div className="text-xs font-bold text-gray-900 dark:text-white">Fair Trade</div>
                                    <div className="text-xs text-gray-600 dark:text-gray-400">Certified</div>
                                </div>
                            </div>
                        </div>

                        {/* Key Features */}
                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-4 rounded-xl border border-green-100 dark:border-green-800/30">
                                <Users className="w-6 h-6 text-green-600 mb-2" />
                                <div className="text-sm font-semibold text-gray-900 dark:text-white">Direct Sourcing</div>
                                <div className="text-xs text-gray-600 dark:text-gray-400">From local farmers</div>
                            </div>

                            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-4 rounded-xl border border-yellow-100 dark:border-yellow-800/30">
                                <Leaf className="w-6 h-6 text-yellow-600 mb-2" />
                                <div className="text-sm font-semibold text-gray-900 dark:text-white">Sustainable</div>
                                <div className="text-xs text-gray-600 dark:text-gray-400">Ethical practices</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust Indicators */}
                {/* <div className={`mt-20 text-center transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Trusted by leading businesses across Uganda</p>
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 opacity-80 hover:opacity-100 transition-opacity duration-300">
                        {[
                            { name: "Volcafe", src: "/clients/vol.png" },
                            { name: "AgriEvolve", src: "/clients/Agri.png" },

                        ].map((client, index) => (
                            <div
                                key={index}
                                className="relative w-24 h-16 md:w-28 md:h-20 transition-all duration-300 hover:scale-105 hover:opacity-100"
                            >
                                <Image
                                    src={client.src}
                                    alt={client.name}
                                    fill
                                    className="object-contain object-center"
                                    quality={100}
                                    sizes="(max-width: 768px) 96px, 112px"
                                />
                            </div>
                        ))}
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default HeroSection