'use client'

import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleInputChange = (e:any) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e:any) => {
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

    return (
        <div className="bg-white dark:bg-gray-900">
            {/* Header Section */}
            <section className="relative py-20 md:py-12 bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.span
                        className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Mail className="w-4 h-4 mr-2" />
                        Get in Touch
                    </motion.span>
                    <motion.h1
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Let's <span className="text-green-600 dark:text-green-400">Connect</span>
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Whether you're a coffee lover, wholesale partner, or farmer, we'd love to hear from you.
                    </motion.p>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="relative py-12 md:py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Email */}
                        <motion.div
                            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            whileHover={{ y: -5 }}
                        >
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
                        </motion.div>

                        {/* Phone */}
                        <motion.div
                            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-4">
                                <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Call Us</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Speak directly with our customer care team.
                            </p>
                            <a
                                href="tel:+18005551234"
                                className="text-green-600 dark:text-green-400 font-medium hover:underline"
                            >
                                +1 (800) 555-1234
                            </a>
                        </motion.div>

                        {/* Visit */}
                        <motion.div
                            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-4">
                                <MapPin className="w-6 h-6 text-green-600 dark:text-green-400" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Visit Us</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-2">
                                123 Coffee Lane, Portland, OR 97204
                            </p>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                <Clock className="w-4 h-4 mr-2" />
                                Mon-Fri: 8AM - 6PM
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            {/* Combined Form and Map Section */}
            <section className="relative py-12 md:py-20 bg-gray-50 dark:bg-gray-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                        {/* Contact Form */}
                        <motion.div
                            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 md:p-10 border border-gray-200 dark:border-gray-800 h-full"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
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
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:text-white"
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
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:text-white"
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
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:text-white"
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
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:text-white resize-none"
                                        placeholder="Your message..."
                                    ></textarea>
                                </div>
                                <div>
                                    <button
                                        onClick={handleSubmit}
                                        className="w-full md:w-auto px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-lg hover:shadow-green-200/50 dark:hover:shadow-green-700/20 transition-all duration-300"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Map Embed */}
                        <motion.div
                            className="h-full"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-800 h-full flex flex-col">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                    Find Our Flagship Company
                                </h2>
                                <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 flex-grow">
                                    {/* Replace with your actual map embed (Google Maps, Mapbox, etc.) */}
                                    <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                                        <div className="text-center p-4">
                                            <MapPin className="w-12 h-12 mx-auto text-green-600 dark:text-green-400 mb-4" />
                                            <p className="text-gray-600 dark:text-gray-300 mb-2">
                                                123 Coffee Lane, Portland, OR 97204
                                            </p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                Mon-Fri: 8AM - 6PM
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                                    <p>Free parking available in the rear</p>
                                    <p>Wheelchair accessible</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}