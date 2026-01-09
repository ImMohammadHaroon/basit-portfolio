import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight, HiMail } from 'react-icons/hi';
import { developerData } from '../data/developer';
import { projectsData } from '../data/projects';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import SkillTag from '../components/UI/SkillTag';

const Home = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="container mx-auto px-6 pt-32 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.h1
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="text-gray-800 dark:text-gray-200">Hi, I'm </span>
                            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                                {developerData.name}
                            </span>
                        </motion.h1>

                        <motion.h2
                            className="text-2xl md:text-3xl text-primary-600 dark:text-primary-400 font-semibold mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            {developerData.role}
                        </motion.h2>

                        <motion.p
                            className="text-lg text-gray-600 dark:text-gray-400 mb-4 flex items-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <span className="mr-2">📍</span> {developerData.location}
                        </motion.p>

                        <motion.p
                            className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            {developerData.bio}
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <Link to="/projects">
                                <Button variant="primary" size="lg">
                                    View Projects <HiArrowRight className="inline ml-2" />
                                </Button>
                            </Link>
                            <Link to="/contact">
                                <Button variant="outline" size="lg">
                                    <HiMail className="inline mr-2" /> Contact Me
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Developer Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="glass-card rounded-3xl overflow-hidden shadow-2xl w-80 h-80 md:w-96 md:h-96"
                            >
                                <img
                                    src="/images/about.png"
                                    alt={developerData.name}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl animate-pulse" />
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-500/20 rounded-full blur-2xl animate-pulse" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="container mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-gray-200">
                        Technical Skills
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                        Specialized in mobile app development with a focus on Flutter and Firebase ecosystem
                    </p>

                    <Card className="max-w-5xl mx-auto" hover={false}>
                        <div className="flex flex-wrap justify-center">
                            {developerData.skills.map((skill, index) => (
                                <SkillTag key={skill} skill={skill} index={index} />
                            ))}
                        </div>
                    </Card>
                </motion.div>
            </section>

            {/* Education Section */}
            <section className="container mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
                        Education
                    </h2>

                    <Card className="max-w-3xl mx-auto">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl">
                                <svg
                                    className="w-8 h-8 text-primary-600 dark:text-primary-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 14l9-5-9-5-9 5 9 5z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                    />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                                    {developerData.education.degree}
                                </h3>
                                <p className="text-lg text-primary-600 dark:text-primary-400 mb-1">
                                    {developerData.education.institution}
                                </p>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {developerData.education.location}
                                </p>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </section>

            {/* Featured Projects Section */}
            <section className="container mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-gray-200">
                        Featured Projects
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                        Explore some of my recent mobile application projects built with Flutter and Firebase
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
                        {projectsData.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                            >
                                <Link to={`/projects/${project.slug}`}>
                                    <Card className="h-full group">
                                        {/* Project Image */}
                                        <div className="relative overflow-hidden rounded-xl mb-6 aspect-video bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30">
                                            <img
                                                src={project.thumbnail}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute top-4 right-4 px-3 py-1 glass rounded-full">
                                                <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                                                    {project.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Project Info */}
                                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                            {project.title}
                                        </h2>

                                        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                                            {project.shortDescription}
                                        </p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.slice(0, 4).map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 4 && (
                                                <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
                                                    +{project.technologies.length - 4} more
                                                </span>
                                            )}
                                        </div>

                                        {/* Read More Link */}
                                        <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium group-hover:translate-x-2 transition-transform">
                                            View Details <HiArrowRight className="ml-2" />
                                        </div>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* View More Button */}
                    <div className="text-center">
                        <Link to="/projects">
                            <Button variant="outline" size="lg">
                                View All Projects <HiArrowRight className="inline ml-2" />
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Card className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary-600 to-accent-600 border-0" hover={false}>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Let's Work Together
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            Have a project in mind? Let's create something amazing together.
                        </p>
                        <Link to="/contact">
                            <Button variant="secondary" size="lg">
                                Get In Touch <HiArrowRight className="inline ml-2" />
                            </Button>
                        </Link>
                    </Card>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
