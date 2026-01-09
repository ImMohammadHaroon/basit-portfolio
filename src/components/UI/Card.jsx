import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, ...props }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={hover ? { y: -8, transition: { duration: 0.2 } } : {}}
            className={`glass-card rounded-2xl p-6 ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
