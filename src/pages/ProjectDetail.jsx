import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowLeft, HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { getProjectBySlug } from '../data/projects';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

const ProjectDetail = () => {
    const { slug } = useParams();
    const project = getProjectBySlug(slug);

    // If project not found, redirect to projects page
    if (!project) {
        return <Navigate to="/projects" replace />;
    }

    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-6">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-8"
                >
                    <Link to="/projects">
                        <Button variant="outline" size="sm">
                            <HiArrowLeft className="inline mr-2" /> Back to Projects
                        </Button>
                    </Link>
                </motion.div>

                {/* Project Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-12"
                >
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200">
                            {project.title}
                        </h1>
                        <span className="px-4 py-2 glass rounded-full text-primary-700 dark:text-primary-300 font-medium">
                            {project.category}
                        </span>
                    </div>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl">
                        {project.shortDescription}
                    </p>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-16"
                >
                    <div className="glass-card rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30">
                        <img
                            src={project.images[0]}
                            alt={`${project.title} - Main`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* About Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Card hover={false}>
                                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                                    About This Project
                                </h2>
                                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {project.description}
                                </p>
                            </Card>
                        </motion.div>

                        {/* Key Features */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <Card hover={false}>
                                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                                    Key Features
                                </h2>
                                <div className="space-y-6">
                                    {project.features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5 + index * 0.1 }}
                                            className="flex items-start space-x-4"
                                        >
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 dark:bg-primary-500 flex items-center justify-center text-white font-bold">
                                                {index + 1}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                                    {feature.title}
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-400">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>

                        {/* Challenges & Solutions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <Card hover={false}>
                                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                                    Challenges & Solutions
                                </h2>
                                <div className="space-y-8">
                                    {project.challenges.map((item, index) => (
                                        <div key={index} className="border-l-4 border-primary-600 dark:border-primary-400 pl-6">
                                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                                                {item.title}
                                            </h3>
                                            <div className="space-y-3">
                                                <div>
                                                    <h4 className="text-sm font-semibold text-red-600 dark:text-red-400 mb-1">
                                                        Challenge:
                                                    </h4>
                                                    <p className="text-gray-700 dark:text-gray-300">
                                                        {item.challenge}
                                                    </p>
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-semibold text-green-600 dark:text-green-400 mb-1">
                                                        Solution:
                                                    </h4>
                                                    <p className="text-gray-700 dark:text-gray-300">
                                                        {item.solution}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>

                        {/* Project Screenshots */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                                Screenshots
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {project.images.slice(1).map((image, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.8 + index * 0.1 }}
                                        className="glass-card rounded-xl overflow-hidden aspect-video bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 hover:shadow-2xl transition-shadow"
                                    >
                                        <img
                                            src={image}
                                            alt={`${project.title} - Screenshot ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Technologies */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Card hover={false} className="sticky top-24">
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                                    Technologies Used
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-2 text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="mt-8 space-y-3">
                                    {project.githubLink && (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block"
                                        >
                                            <Button variant="outline" className="w-full">
                                                <FaGithub className="inline mr-2" /> View on GitHub
                                            </Button>
                                        </a>
                                    )}
                                    {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block"
                                        >
                                            <Button variant="primary" className="w-full">
                                                <HiExternalLink className="inline mr-2" /> Live Demo
                                            </Button>
                                        </a>
                                    )}
                                </div>
                            </Card>
                        </motion.div>
                    </div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <Card className="text-center bg-gradient-to-r from-primary-600 to-accent-600 border-0" hover={false}>
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Interested in working together?
                        </h2>
                        <p className="text-lg text-white/90 mb-6">
                            Let's discuss your next project
                        </p>
                        <Link to="/contact">
                            <Button variant="secondary" size="lg">
                                Get In Touch
                            </Button>
                        </Link>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectDetail;
