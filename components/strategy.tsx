'use client'

import React, { useState, useRef } from 'react'
import { Coffee, Leaf, Users, BarChart2, Award, Globe, X, ChevronLeft, ChevronRight, ZoomIn, Filter } from 'lucide-react'
import { motion, Variants, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const StrategySection = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null)
    const [activeFilter, setActiveFilter] = useState<string>('all')
    const [currentPage, setCurrentPage] = useState(1)
    const imagesPerPage = 8
    
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

    // Enhanced gallery images with categories
    const galleryImages = [
        {
            id: 1,
            src: "/images/img-1.jpeg",
            alt: "Coffee farm in Kasese",
            caption: "Coffee Farm in Kasese",
            category: "farms",
            featured: true
        },
        {
            id: 2,
            src: "/images/factory-2.jpeg",
            alt: "Our Coffee Stores",
            caption: "Our Coffee Stores",
            category: "facility",
            featured: true
        },
        {
            id: 3,
            src: "/images/factory-1.jpg",
            alt: "Coffee processing Facility",
            caption: "Quality processing facility",
            category: "facility",
            featured: true
        },
        {
            id: 4,
            src: "/images/img-6.jpeg",
            alt: "Premium coffee beans",
            caption: "Premium coffee beans",
            category: "products"
        },
        {
            id: 5,
            src: "/images/IMG_2427.JPG",
            alt: "Staff at work",
            caption: "Processing coffee beans",
            category: "team"
        },
        {
            id: 6,
            src: "/images/IMG_2428.JPG",
            alt: "Staff at work",
            caption: "Quality control team",
            category: "team"
        },
        {
            id: 7,
            src: "/images/IMG_2437.JPG",
            alt: "Our Supervisor and Field Officer",
            caption: "Field inspection team",
            category: "team",
            featured: true
        },
        {
            id: 8,
            src: "/images/IMG_2440.JPG",
            alt: "Our Managing Director",
            caption: "Managing Director",
            category: "leadership"
        },
        {
            id: 9,
            src: "/images/IMG_2441.JPG",
            alt: "Staff at work",
            caption: "Processing team",
            category: "team"
        },
        {
            id: 10,
            src: "/images/IMG_2464.JPG",
            alt: "Our Managing Director",
            caption: "Leadership team",
            category: "leadership"
        },
        {
            id: 11,
            src: "/images/IMG_2478.JPG",
            alt: "The Quality Officer",
            caption: "Quality officer at work",
            category: "team"
        },
        {
            id: 12,
            src: "/images/IMG_2516.JPG",
            alt: "The Hulking Machine Operator",
            caption: "Machine operation",
            category: "process"
        },
        {
            id: 13,
            src: "/images/IMG_2521.JPG",
            alt: "The Quality Head",
            caption: "Quality assurance",
            category: "team"
        },
        {
            id: 14,
            src: "/images/IMG_2531.JPG",
            alt: "The Quality Officer",
            caption: "Bean inspection",
            category: "process"
        },
        {
            id: 15,
            src: "/images/IMG_2538.JPG",
            alt: "The Hulking Machine Operator",
            caption: "Advanced processing",
            category: "process"
        },
    ]

    const categories = [
        { id: 'all', label: 'All Photos', count: galleryImages.length },
        { id: 'farms', label: 'Coffee Farms', count: galleryImages.filter(img => img.category === 'farms').length },
        { id: 'facility', label: 'Our Facility', count: galleryImages.filter(img => img.category === 'facility').length },
        { id: 'team', label: 'Our Team', count: galleryImages.filter(img => img.category === 'team').length },
        { id: 'process', label: 'Processing', count: galleryImages.filter(img => img.category === 'process').length },
        { id: 'leadership', label: 'Leadership', count: galleryImages.filter(img => img.category === 'leadership').length },
        { id: 'products', label: 'Products', count: galleryImages.filter(img => img.category === 'products').length },
    ]

    const filteredImages = galleryImages.filter(img => 
        activeFilter === 'all' || img.category === activeFilter
    )

    const featuredImages = galleryImages.filter(img => img.featured)
    const totalPages = Math.ceil(filteredImages.length / imagesPerPage)
    const paginatedImages = filteredImages.slice(
        (currentPage - 1) * imagesPerPage,
        currentPage * imagesPerPage
    )

    const handleNext = () => {
        if (selectedImage !== null && selectedImage < galleryImages.length - 1) {
            setSelectedImage(selectedImage + 1)
        }
    }

    const handlePrev = () => {
        if (selectedImage !== null && selectedImage > 0) {
            setSelectedImage(selectedImage - 1)
        }
    }

    const handleFilter = (category: string) => {
        setActiveFilter(category)
        setCurrentPage(1)
    }

    // Handle keyboard navigation
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedImage === null) return
            
            if (e.key === 'Escape') {
                setSelectedImage(null)
            } else if (e.key === 'ArrowRight') {
                handleNext()
            } else if (e.key === 'ArrowLeft') {
                handlePrev()
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [selectedImage])

    return (
        <section id="strategy" className="relative py-16 bg-gray-50 dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

                {/* Featured Gallery Section */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                        Featured Moments
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {featuredImages.slice(0, 3).map((image) => (
                            <motion.div
                                key={image.id}
                                className="group relative overflow-hidden rounded-xl shadow-lg"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="aspect-w-16 aspect-h-9">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={600}
                                        height={400}
                                        className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <p className="text-white text-lg font-semibold mb-2">{image.caption}</p>
                                    <span className="text-green-300 text-sm">Featured • {image.category}</span>
                                </div>
                                <button
                                    onClick={() => setSelectedImage(image.id - 1)}
                                    className="absolute top-4 right-4 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                >
                                    <ZoomIn className="w-5 h-5 text-white" />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Main Gallery Section */}
                <div className="mb-16">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                Our Coffee Journey Gallery
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Explore our journey through {galleryImages.length} photos
                            </p>
                        </div>
                        
                        {/* Filter Tabs */}
                        <div className="mt-4 md:mt-0">
                            <div className="flex flex-wrap gap-2">
                                <Filter className="w-5 h-5 text-gray-500 mt-2" />
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => handleFilter(category.id)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                            activeFilter === category.id
                                                ? 'bg-green-600 text-white'
                                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                        }`}
                                    >
                                        {category.label} ({category.count})
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        <AnimatePresence mode="wait">
                            {paginatedImages.map((image) => (
                                <motion.div
                                    key={image.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.2 }}
                                    className="group relative overflow-hidden rounded-lg shadow-md bg-white dark:bg-gray-900"
                                    whileHover={{ scale: 1.03 }}
                                >
                                    <div className="aspect-w-4 aspect-h-3">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            width={400}
                                            height={300}
                                            className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                                            onClick={() => setSelectedImage(image.id - 1)}
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                        <p className="text-white text-sm font-medium">{image.caption}</p>
                                        <span className="text-green-300 text-xs mt-1 capitalize">{image.category}</span>
                                    </div>
                                    <div className="absolute top-2 right-2">
                                        <span className="px-2 py-1 bg-black/60 text-white text-xs rounded-full">
                                            #{image.id.toString().padStart(2, '0')}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-4">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                disabled={currentPage === 1}
                                className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 disabled:opacity-50"
                            >
                                Previous
                            </button>
                            <span className="text-gray-600 dark:text-gray-300">
                                Page {currentPage} of {totalPages}
                            </span>
                            <button
                                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 disabled:opacity-50"
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {selectedImage !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                            onClick={() => setSelectedImage(null)}
                        >
                            <button
                                className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full"
                                onClick={() => setSelectedImage(null)}
                            >
                                <X className="w-8 h-8" />
                            </button>
                            
                            <button
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full disabled:opacity-50"
                                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                                disabled={selectedImage === 0}
                            >
                                <ChevronLeft className="w-8 h-8" />
                            </button>
                            
                            <button
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full disabled:opacity-50"
                                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                                disabled={selectedImage === galleryImages.length - 1}
                            >
                                <ChevronRight className="w-8 h-8" />
                            </button>

                            <div className="relative max-w-5xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                                <motion.div
                                    key={selectedImage}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="relative"
                                >
                                    <Image
                                        src={galleryImages[selectedImage].src}
                                        alt={galleryImages[selectedImage].alt}
                                        width={1200}
                                        height={800}
                                        className="max-h-[70vh] w-auto object-contain"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                        <h3 className="text-white text-xl font-bold mb-2">
                                            {galleryImages[selectedImage].caption}
                                        </h3>
                                        <p className="text-gray-300">
                                            {selectedImage + 1} of {galleryImages.length} • {galleryImages[selectedImage].category}
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

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
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${item.current ? 'bg-green-600 text-white' :
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