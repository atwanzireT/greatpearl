'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Menu, X, Coffee, Mail, ChevronRight, Briefcase, Target, Sun, Moon } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme, resolvedTheme } = useTheme()

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Ensure component is mounted before rendering theme-dependent content
    useEffect(() => {
        setMounted(true)
    }, [])

    // Navigation items with icons
    const navItems = [
        { name: 'Home', href: '/', icon: Coffee },
        { name: 'About', href: '/#about', icon: Briefcase },
        { name: 'Our Strategy', href: '/#strategy', icon: Target },
        { name: 'Our GreatPearl Ways', href: '/#ways', icon: ChevronRight },
    ]

    if (!mounted) {
        return (
            <nav className="fixed w-full z-50 bg-white dark:bg-gray-900 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex-shrink-0">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/20"></div>
                                <div className="flex flex-col">
                                    <span className="text-xl font-bold text-amber-800 dark:text-amber-400">
                                        Great Pearl
                                    </span>
                                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium -mt-1">
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
        <>
            <nav className={`fixed w-full z-50 transition-all duration-500 ${
                scrolled 
                    ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-xl border-b border-amber-100 dark:border-amber-700/30' 
                    : 'bg-white dark:bg-gray-900 shadow-lg'
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Premium Logo */}
                        <div className="flex-shrink-0">
                            <Link href="/" className="flex items-center space-x-3 group">
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-amber-200 dark:ring-amber-700/50 group-hover:ring-amber-400 dark:group-hover:ring-amber-500 transition-all duration-300 shadow-lg">
                                        <div className="w-full h-full bg-gradient-to-br from-amber-600 to-amber-800 dark:from-amber-500 dark:to-amber-700 flex items-center justify-center">
                                            <Coffee className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xl font-bold text-amber-800 dark:text-amber-400 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors duration-300">
                                        Great Pearl
                                    </span>
                                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium -mt-1 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors duration-300">
                                        Coffee Company
                                    </span>
                                </div>
                            </Link>
                        </div>

                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar