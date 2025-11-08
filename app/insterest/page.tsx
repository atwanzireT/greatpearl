'use client'

import React, { useState } from 'react'
import { motion, Variants, easeInOut } from 'framer-motion'
import { Coffee, Leaf, Package, Truck, ClipboardCheck, Phone, Mail } from 'lucide-react'

type FormData = {
  fullName: string
  companyName: string
  email: string
  phone: string
  coffeeType: string
  quantity: string
  address: string
  country: string
  interestType: string
  message: string
}

const RequestSamplesPage = () => {
  const [activeTab, setActiveTab] = useState<'samples' | 'interest'>('samples')
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    coffeeType: 'Arabica',
    quantity: '',
    address: '',
    country: '',
    interestType: 'Green Coffee Purchase',
    message: ''
  })
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const formVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeInOut
      }
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus('submitting')

    try {
      const response = await fetch('https://formsubmit.co/ajax/Greatpearlcoffee@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: activeTab === 'samples' 
            ? `New Sample Request - ${formData.fullName}` 
            : `New Interest Form - ${formData.fullName}`,
          _template: 'table'
        })
      })

      const data = await response.json()
      if (data.success === 'true') {
        setSubmitStatus('success')
        setFormData({
          fullName: '',
          companyName: '',
          email: '',
          phone: '',
          coffeeType: 'Arabica',
          quantity: '',
          address: '',
          country: '',
          interestType: 'Green Coffee Purchase',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-green-600 to-green-800 dark:from-green-400 dark:to-green-600 bg-clip-text text-transparent">
              Great Pearl Coffee
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience our premium coffee samples or express your business interest
          </p>
        </motion.div>

        {/* Form Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-1">
            <button
              onClick={() => setActiveTab('samples')}
              className={`px-4 py-2 font-medium text-sm flex items-center rounded transition-all ${
                activeTab === 'samples' 
                  ? 'bg-green-600 text-white shadow' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <Package className="mr-2 w-4 h-4" />
              Sample Request
            </button>
            <button
              onClick={() => setActiveTab('interest')}
              className={`px-4 py-2 font-medium text-sm flex items-center rounded transition-all ${
                activeTab === 'interest' 
                  ? 'bg-green-600 text-white shadow' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <ClipboardCheck className="mr-2 w-4 h-4" />
              Business Interest
            </button>
          </div>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg text-center"
          >
            Thank you! Your {activeTab === 'samples' ? 'sample request' : 'interest form'} has been submitted successfully.
          </motion.div>
        )}
        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg text-center"
          >
            Something went wrong. Please try again later.
          </motion.div>
        )}

        {/* Sample Request Form */}
        {activeTab === 'samples' && (
          <motion.form
            variants={formVariants}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-200 dark:border-gray-700 p-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center mr-3">
                <Coffee className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              Coffee Sample Request
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Coffee Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="coffeeType"
                  value={formData.coffeeType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700"
                >
                  <option value="Arabica">Arabica</option>
                  <option value="Robusta">Robusta</option>
                  <option value="Specialized Coffee">Specialized Coffee</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Quantity (kg) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="quantity"
                  min="0.25"
                  step="0.25"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Shipping Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="address"
                  rows={3}
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700"
                />
              </div>
            </div>
            
            <div className="mt-6">
              <button
                type="submit"
                disabled={submitStatus === 'submitting'}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center justify-center"
              >
                {submitStatus === 'submitting' ? (
                  'Submitting...'
                ) : (
                  <>
                    <Truck className="mr-2 w-4 h-4" />
                    Request Samples
                  </>
                )}
              </button>
            </div>
          </motion.form>
        )}

        {/* Expression of Interest Form */}
        {activeTab === 'interest' && (
          <motion.form
            variants={formVariants}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-200 dark:border-gray-700 p-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center mr-3">
                <Leaf className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              Business Interest
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Country <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Interest Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="interestType"
                  value={formData.interestType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700"
                >
                  <option value="Green Coffee Purchase">Green Coffee Purchase</option>
                  <option value="Long-Term Agreement">Long-Term Agreement</option>
                  <option value="Factory Visit">Factory Visit</option>
                  <option value="Investment">Investment</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700"
                />
              </div>
            </div>
            
            <div className="mt-6">
              <button
                type="submit"
                disabled={submitStatus === 'submitting'}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center justify-center"
              >
                {submitStatus === 'submitting' ? (
                  'Submitting...'
                ) : (
                  <>
                    <ClipboardCheck className="mr-2 w-4 h-4" />
                    Submit Interest
                  </>
                )}
              </button>
            </div>
          </motion.form>
        )}

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-green-600 dark:bg-green-700 text-white rounded-xl shadow p-6 text-center"
        >
          <h3 className="text-lg font-bold mb-3">Need immediate help?</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+256781121639" className="flex items-center justify-center">
              <Phone className="mr-2 w-4 h-4" /> +256 781 121 639
            </a>
            <a href="mailto:info@greatpearlcoffee.com" className="flex items-center justify-center">
              <Mail className="mr-2 w-4 h-4" /> info@greatpearlcoffee.com
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default RequestSamplesPage