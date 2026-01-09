import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiCheckCircle } from 'react-icons/hi';
import { developerData } from '../data/developer';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error for this field
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = validateForm();

        if (Object.keys(newErrors).length === 0) {
            // Form is valid - in a real app, you would send this data to a server
            console.log('Form submitted:', formData);
            setIsSubmitted(true);

            // Reset form after 3 seconds
            setTimeout(() => {
                setFormData({ name: '', email: '', subject: '', message: '' });
                setIsSubmitted(false);
            }, 3000);
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-6">
                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                        Get In <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Touch</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Have a project in mind or want to collaborate? I'd love to hear from you!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        <Card hover={false}>
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                                Contact Information
                            </h2>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl">
                                        <HiMail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Email</h3>
                                        <a
                                            href={`mailto:${developerData.email}`}
                                            className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                        >
                                            {developerData.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl">
                                        <HiPhone className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Phone</h3>
                                        <a
                                            href={`tel:${developerData.phone}`}
                                            className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                        >
                                            {developerData.phone}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl">
                                        <HiLocationMarker className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Location</h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            {developerData.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card hover={false} className="bg-gradient-to-br from-primary-600 to-accent-600 border-0">
                            <h3 className="text-xl font-bold text-white mb-3">
                                Availability
                            </h3>
                            <p className="text-white/90">
                                I'm currently available for freelance projects and full-time opportunities. Let's discuss how I can help bring your ideas to life!
                            </p>
                        </Card>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-2"
                    >
                        <Card hover={false}>
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                                Send Me a Message
                            </h2>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <HiCheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                                        Message Sent!
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Thank you for reaching out. I'll get back to you soon!
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Name Field */}
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-lg glass border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                                    } bg-white/50 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all`}
                                                placeholder="John Doe"
                                            />
                                            {errors.name && (
                                                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                                            )}
                                        </div>

                                        {/* Email Field */}
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Your Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-lg glass border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                                    } bg-white/50 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all`}
                                                placeholder="john@example.com"
                                            />
                                            {errors.email && (
                                                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Subject Field */}
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg glass border ${errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                                } bg-white/50 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all`}
                                            placeholder="Project Inquiry"
                                        />
                                        {errors.subject && (
                                            <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                                        )}
                                    </div>

                                    {/* Message Field */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="6"
                                            className={`w-full px-4 py-3 rounded-lg glass border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                                } bg-white/50 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none`}
                                            placeholder="Tell me about your project..."
                                        />
                                        {errors.message && (
                                            <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <Button type="submit" variant="primary" size="lg" className="w-full">
                                        Send Message
                                    </Button>
                                </form>
                            )}
                        </Card>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
