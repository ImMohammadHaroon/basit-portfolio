import React from 'react';
import { motion } from 'framer-motion';
import { HiMoon, HiSun } from 'react-icons/hi';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-3 rounded-full glass hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{ rotate: isDark ? 180 : 0 }}
                transition={{ duration: 0.3 }}
            >
                {isDark ? (
                    <HiSun className="w-6 h-6 text-yellow-400" />
                ) : (
                    <HiMoon className="w-6 h-6 text-primary-600" />
                )}
            </motion.div>
        </motion.button>
    );
};

export default ThemeToggle;
