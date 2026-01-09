import React from 'react';
import { motion } from 'framer-motion';

const SkillTag = ({ skill, index = 0 }) => {
    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.1 }}
            className="inline-block px-4 py-2 m-1 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-100 dark:bg-primary-900/30 rounded-full border border-primary-200 dark:border-primary-800 hover:shadow-md transition-all duration-200"
        >
            {skill}
        </motion.span>
    );
};

export default SkillTag;
