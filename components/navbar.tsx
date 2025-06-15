'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X, Coffee, Mail, ChevronRight, Briefcase, Target, Sun, Moon, Phone, MapPin } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [darkMode, setDarkMode] = useState(false)

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Ensure component is mounted
    useEffect(() => {
        setMounted(true)
    }, [])

    // Close mobile menu on window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Navigation items with icons
    const navItems = [
        { name: 'Home', href: '/', icon: Coffee },
        { name: 'About', href: '/#about', icon: Briefcase },
        { name: 'Our Strategy', href: '/#strategy', icon: Target },
        { name: 'Our GreatPearl Ways', href: '/#ways', icon: ChevronRight },
    ]

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    if (!mounted) {
        return (
            <nav className="fixed w-full z-50 bg-white shadow-lg">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
                    <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
                        <div className="flex-shrink-0">
                            <div className="flex items-center space-x-2 sm:space-x-3">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100"></div>
                                <div className="flex flex-col">
                                    <span className="text-lg sm:text-xl font-bold text-green-800">
                                        Great Pearl
                                    </span>
                                    <span className="text-xs sm:text-sm text-gray-600 font-medium -mt-1">
                                        Coffee Company
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }

    return (
        <div className={darkMode ? 'dark' : ''}>
            <nav className={`fixed w-full z-50 transition-all duration-500 ${
                scrolled 
                    ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl shadow-2xl border-b border-green-100 dark:border-green-800/30' 
                    : 'bg-white dark:bg-gray-900 shadow-xl'
            }`}>
                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
                        {/* Enhanced Responsive Premium Logo */}
                        <div className="flex-shrink-0">
                            <a href="/" className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 group">
                                <div className="relative">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl overflow-hidden ring-2 sm:ring-3 ring-green-200 dark:ring-green-700/50 group-hover:ring-yellow-400 dark:group-hover:ring-yellow-500 transition-all duration-300 shadow-lg sm:shadow-xl group-hover:shadow-2xl">
                                        <div className="w-full h-full bg-gradient-to-br from-green-600 via-green-700 to-green-800 dark:from-green-500 dark:to-green-700 flex items-center justify-center relative overflow-hidden">
                                            <Coffee className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white z-10 group-hover:scale-110 transition-transform duration-300" />
                                            {/* Animated background pattern */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>
                                    </div>
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-green-400/20 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 -z-10"></div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-lg sm:text-xl md:text-2xl font-black text-green-800 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors duration-300 tracking-tight">
                                        Great Pearl
                                    </span>
                                    <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-semibold -mt-0.5 sm:-mt-1 group-hover:text-yellow-600 dark:group-hover:text-yellow-500 transition-colors duration-300 tracking-wide">
                                        Coffee Company
                                    </span>
                                </div>
                            </a>
                        </div>

                        {/* Enhanced Desktop Navigation - Hidden on smaller screens */}
                        <div className="hidden lg:block">
                            <div className="ml-6 xl:ml-10 flex items-center space-x-1 xl:space-x-2">
                                {navItems.map((item) => {
                                    const Icon = item.icon
                                    return (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="relative px-3 xl:px-5 py-2 xl:py-3 rounded-lg xl:rounded-xl text-gray-700 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-400 font-semibold transition-all duration-300 group overflow-hidden text-sm xl:text-base"
                                        >
                                            <span className="relative z-10 flex items-center space-x-1 xl:space-x-2">
                                                <Icon className="w-3 h-3 xl:w-4 xl:h-4 opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
                                                <span className="tracking-wide">{item.name}</span>
                                            </span>
                                            {/* Enhanced hover background */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-yellow-50 dark:from-green-900/20 dark:to-yellow-900/20 rounded-lg xl:rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                                            {/* Animated underline */}
                                            <div className="absolute bottom-1 left-1/2 w-0 h-0.5 xl:h-1 bg-gradient-to-r from-green-600 to-yellow-500 dark:from-green-500 dark:to-yellow-400 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300 rounded-full"></div>
                                            {/* Subtle glow */}
                                            <div className="absolute inset-0 bg-green-400/10 rounded-lg xl:rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </a>
                                    )
                                })}

                                {/* Enhanced Premium CTA Button */}
                                <div className="ml-4 xl:ml-6">
                                    <a
                                        href="/#contact"
                                        className="inline-flex items-center px-4 xl:px-8 py-2 xl:py-4 bg-gradient-to-r from-green-700 to-green-800 dark:from-green-600 dark:to-green-700 hover:from-green-800 hover:to-green-900 dark:hover:from-green-700 dark:hover:to-green-800 text-white font-bold rounded-lg xl:rounded-2xl shadow-xl xl:shadow-2xl hover:shadow-green-500/30 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 group relative overflow-hidden text-sm xl:text-base"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <Mail className="w-4 h-4 xl:w-5 xl:h-5 mr-2 xl:mr-3 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                                        <span className="relative z-10 tracking-wide">Get Quote</span>
                                        <div className="absolute top-0 right-0 w-6 xl:w-8 h-6 xl:h-8 bg-yellow-400/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Tablet Navigation - Visible on medium screens */}
                        <div className="hidden md:flex lg:hidden items-center space-x-2">
                            {/* Condensed nav items for tablet */}
                            <div className="flex items-center space-x-1">
                                {navItems.slice(0, 2).map((item) => {
                                    const Icon = item.icon
                                    return (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-400 font-medium transition-all duration-300 group text-sm"
                                        >
                                            <Icon className="w-4 h-4 mr-1 opacity-70 group-hover:opacity-100" />
                                            <span>{item.name}</span>
                                        </a>
                                    )
                                })}
                            </div>
                            {/* Mobile menu button for remaining items */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300"
                            >
                                <Menu className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Enhanced Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 sm:p-3 rounded-lg sm:rounded-xl text-gray-700 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-400 hover:bg-gradient-to-r hover:from-green-50 hover:to-yellow-50 dark:hover:from-green-900/20 dark:hover:to-yellow-900/20 transition-all duration-300 group"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isOpen ? (
                                    <X className="block h-5 w-5 sm:h-6 sm:w-6 group-hover:rotate-90 transition-transform duration-300" />
                                ) : (
                                    <Menu className="block h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform duration-300" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Enhanced Mobile Navigation Menu */}
                    <div className={`lg:hidden transition-all duration-500 ease-in-out ${
                        isOpen 
                            ? 'max-h-[600px] opacity-100 pb-4 sm:pb-8' 
                            : 'max-h-0 opacity-0 pb-0'
                    } overflow-hidden`}>
                        <div className="px-3 sm:px-6 pt-4 sm:pt-6 space-y-2 sm:space-y-3 bg-gradient-to-br from-green-50/90 to-yellow-50/90 dark:from-gray-800/95 dark:to-gray-900/95 rounded-xl sm:rounded-2xl mt-4 sm:mt-6 border border-green-200 dark:border-green-700/30 shadow-xl sm:shadow-2xl backdrop-blur-xl">
                            {navItems.map((item, index) => {
                                const Icon = item.icon
                                return (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center px-3 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl text-gray-700 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-400 hover:bg-white/70 dark:hover:bg-gray-700/50 font-semibold transition-all duration-300 group transform hover:scale-105 text-sm sm:text-base"
                                        onClick={() => setIsOpen(false)}
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className="flex items-center space-x-3 sm:space-x-4 w-full">
                                            <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-100 to-yellow-100 dark:from-green-900/30 dark:to-yellow-900/30 group-hover:from-green-200 group-hover:to-yellow-200 dark:group-hover:from-green-800/40 dark:group-hover:to-yellow-800/40 transition-all duration-300 shadow-md sm:shadow-lg">
                                                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-green-700 dark:text-green-400 group-hover:scale-110 transition-transform duration-300" />
                                            </div>
                                            <span className="tracking-wide flex-1">{item.name}</span>
                                            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 dark:text-gray-500 group-hover:text-green-600 dark:group-hover:text-green-400 transform group-hover:translate-x-2 transition-all duration-300" />
                                        </div>
                                    </a>
                                )
                            })}

                            {/* Enhanced Mobile CTA */}
                            <div className="pt-3 sm:pt-4 pb-3 sm:pb-4">
                                <a
                                    href="/#contact"
                                    className="flex items-center justify-center w-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 text-white font-bold rounded-lg sm:rounded-2xl shadow-xl sm:shadow-2xl hover:shadow-green-500/30 transform hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden text-sm sm:text-base"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                                    <span className="relative z-10 tracking-wide">Get Quote</span>
                                </a>
                            </div>

                            {/* Additional mobile-only quick actions */}
                            <div className="pt-2 sm:pt-4 border-t border-green-200/50 dark:border-green-700/30">
                                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                                    <a
                                        href="tel:+1234567890"
                                        className="flex items-center justify-center px-3 py-2 sm:py-3 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg transition-all duration-300 text-xs sm:text-sm font-medium"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                                        Call Us
                                    </a>
                                    <a
                                        href="#location"
                                        className="flex items-center justify-center px-3 py-2 sm:py-3 bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-lg transition-all duration-300 text-xs sm:text-sm font-medium"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                                        Location
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar