'use client'

import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, ExternalLink, Navigation } from 'lucide-react'

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleInputChange = (e: any) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
    }

    const openInMaps = () => {
        window.open('https://www.google.com/maps/search/?api=1&query=tibamwenda+road+Kasese', '_blank')
    }

    return (
        <div className="bg-white dark:bg-gray-900">
            {/* Header Section */}
            <section id='contact' className="relative py-20 md:py-12 bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-4">
                        <Mail className="w-4 h-4 mr-2" />
                        Get in Touch
                    </span>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Let's <span className="text-green-600 dark:text-green-400">Connect</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Whether you're a coffee lover, wholesale partner, or farmer, we'd love to hear from you.
                    </p>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="relative py-12 md:py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Email */}
                        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105">
                            <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-4">
                                <Mail className="w-6 h-6 text-green-600 dark:text-green-400" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Email Us</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                For general inquiries, partnerships, or feedback.
                            </p>
                            <a
                                href="mailto:contact@greatpearlcoffee.com"
                                className="text-green-600 dark:text-green-400 font-medium hover:underline"
                            >
                                contact@greatpearlcoffee.com
                            </a>
                        </div>

                        {/* Phone */}
                        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105">
                            <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-4">
                                <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Call Us</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Speak directly with our customer care team.
                            </p>
                            <a
                                href="tel:+256781121639"
                                className="text-green-600 dark:text-green-400 font-medium hover:underline"
                            >
                                +256781121639
                            </a>
                        </div>

                        {/* Visit */}
                        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105">
                            <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-4">
                                <MapPin className="w-6 h-6 text-green-600 dark:text-green-400" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Visit Us</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-2">
                                tibamwenda road, Kasese
                            </p>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                <Clock className="w-4 h-4 mr-2" />
                                Mon-Sat: 8AM - 6PM
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form and Map Section */}
            <section className="relative py-12 md:py-20 bg-gray-50 dark:bg-gray-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                        {/* Contact Form */}
                        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 md:p-10 border border-gray-200 dark:border-gray-800 h-full">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                Send Us a Message
                            </h2>
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:text-white transition-all duration-200"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:text-white transition-all duration-200"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:text-white transition-all duration-200"
                                        placeholder="How can we help?"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:text-white resize-none transition-all duration-200"
                                        placeholder="Your message..."
                                    ></textarea>
                                </div>
                                <div>
                                    <button
                                        onClick={handleSubmit}
                                        className="w-full md:w-auto px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-lg hover:shadow-green-200/50 dark:hover:shadow-green-700/20 transition-all duration-300 transform hover:scale-105"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Map Section */}
                        <div className="h-full">
                            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 h-full flex flex-col overflow-hidden">
                                {/* Map Header */}
                                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                            Find Our Location
                                        </h2>
                                        <button
                                            onClick={openInMaps}
                                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4 mr-1" />
                                            Open in Maps
                                        </button>
                                    </div>
                                </div>

                                {/* Enhanced Map Container */}
                                <div className="flex-grow relative">
                                    <div className="absolute inset-0 rounded-b-xl overflow-hidden">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d127673.6249365313!2d29.99567602478491!3d0.16989842429377244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x1761f72ab4f12e37%3A0x9a13f0190daea1af!2stibamwenda%20road%2C%20Kasese!3m2!1d0.16989859999999998!2d30.078077999999998!5e0!3m2!1sen!2sug!4v1750020480286!5m2!1sen!2sug"
                                            width="100%"
                                            height="100%"
                                            style={{ 
                                                border: 0,
                                                minHeight: '400px'
                                            }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            className="w-full h-full"
                                            title="Great Pearl Coffee Location"
                                        />
                                        
                                        {/* Overlay for interactive elements */}
                                        <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 border border-gray-200 dark:border-gray-700">
                                            <div className="flex items-center space-x-2">
                                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                                <span className="text-sm font-medium text-gray-900 dark:text-white">
                                                    Great Pearl Coffee
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Map Footer with Details */}
                                <div className="p-6 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="flex items-start space-x-3">
                                            <MapPin className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-medium text-gray-900 dark:text-white text-sm">
                                                    tibamwenda road, Kasese
                                                </p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                                    Uganda
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <Clock className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-medium text-gray-900 dark:text-white text-sm">
                                                    Mon-Sat: 8AM - 6PM
                                                </p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                                    Closed Sundays
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                                        <div className="flex flex-wrap gap-3 text-xs text-gray-600 dark:text-gray-300">
                                            <span className="flex items-center">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                                Free parking available
                                            </span>
                                            <span className="flex items-center">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                                Wheelchair accessible
                                            </span>
                                            <span className="flex items-center">
                                                <Navigation className="w-3 h-3 mr-1" />
                                                Get directions
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}