import React from 'react';
import { Link } from 'react-router-dom';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { developerData } from '../../data/developer';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="glass-card mt-20">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                            {developerData.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            {developerData.role}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                            Creating innovative mobile solutions that make a difference.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/projects"
                                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                            Get In Touch
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                                <HiMail className="w-5 h-5 text-primary-600" />
                                <a
                                    href={`mailto:${developerData.email}`}
                                    className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                >
                                    {developerData.email}
                                </a>
                            </li>
                            <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                                <HiPhone className="w-5 h-5 text-primary-600" />
                                <a
                                    href={`tel:${developerData.phone}`}
                                    className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                >
                                    {developerData.phone}
                                </a>
                            </li>
                            <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                                <HiLocationMarker className="w-5 h-5 text-primary-600" />
                                <span>{developerData.location}</span>
                            </li>
                        </ul>

                        {/* Social Links */}
                        <div className="flex items-center space-x-4 mt-4">
                            <a
                                href={developerData.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full glass hover:shadow-lg transition-all"
                                aria-label="GitHub"
                            >
                                <FaGithub className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                            </a>
                            <a
                                href={developerData.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full glass hover:shadow-lg transition-all"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        © {currentYear} {developerData.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
