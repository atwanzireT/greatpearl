'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('https://formsubmit.co/ajax/Greatpearlcoffee@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: `New Contact: ${formData.subject}`,
          _template: 'table'
        })
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      desc: "For general inquiries and partnerships",
      value: "Greatpearlcoffee@gmail.com",
      href: "mailto:Greatpearlcoffee@gmail.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      desc: "Speak with our customer care team",
      value: "+256 781 121 639",
      href: "tel:+256781121639"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      desc: "tibamwenda road, Kasese",
      value: "Mon-Sat: 8AM - 6PM",
      href: "https://maps.google.com?q=tibamwenda+road+Kasese"
    }
  ]

  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm mb-3">
            <Mail className="w-3 h-3 mr-1" />
            Contact Us
          </span>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Get in <span className="text-green-600 dark:text-green-400">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Reach out for wholesale inquiries, partnerships, or feedback.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-3">
                <method.icon className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">{method.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{method.desc}</p>
              <a 
                href={method.href} 
                className="text-green-600 dark:text-green-400 hover:underline text-sm"
              >
                {method.value}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Form + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Send a Message</h3>
            
            {status === 'success' && (
              <div className="mb-4 p-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-sm">
                Message sent successfully!
              </div>
            )}
            {status === 'error' && (
              <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded text-sm">
                Error sending message. Please try again.
              </div>
            )}

            <form method='POST' onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your email"
                    className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                  className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message"
                  className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-green-500"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded shadow hover:shadow-md transition-all"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <div className="h-full flex flex-col">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <h3 className="font-bold text-gray-900 dark:text-white">Our Location</h3>
                <button 
                  onClick={() => window.open('https://maps.google.com?q=tibamwenda+road+Kasese', '_blank')}
                  className="text-sm text-green-600 dark:text-green-400 hover:underline flex items-center"
                >
                  Open map <ExternalLink className="w-3 h-3 ml-1" />
                </button>
              </div>
              <div className="flex-grow">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7536223157963!2d30.07588931526341!3d0.16989842429377244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1761f72ab4f12e37%3A0x9a13f0190daea1af!2stibamwenda%20road%2C%20Kasese!5e0!3m2!1sen!2sug!4v1620000000000!5m2!1sen!2sug"
                  width="100%"
                  height="100%"
                  style={{ minHeight: '300px', border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="bg-gray-100 dark:bg-gray-700"
                />
              </div>
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 text-sm">
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                  <MapPin className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />
                  tibamwenda road, Kasese, Uganda
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Clock className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />
                  Mon-Sat: 8AM - 6PM (Closed Sundays)
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}