import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { projectsData } from '../data/projects';
import Card from '../components/UI/Card';

const Projects = () => {
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
                        My <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Projects</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Explore my portfolio of mobile applications built with Flutter, Firebase, and modern development practices
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
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

                {/* Empty State (if no projects) */}
                {projectsData.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            No projects available at the moment. Check back soon!
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Projects;
