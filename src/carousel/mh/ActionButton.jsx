import React from 'react';
import { motion } from 'framer-motion';

const ActionButton = ({ children, variant = 'dark', onClick }) => {
  const baseClasses = "py-2 sm:py-3 px-3 sm:px-6 text-sm sm:text-lg border font-semibold transition-all duration-300 relative overflow-hidden whitespace-nowrap";
  const darkClasses = "bg-black text-white hover:bg-gray-800 border-white";
  const yellowClasses = "bg-yellow-400 text-black hover:bg-yellow-500";

  // Check if the button is "Configure Now" to apply the white border
  const isConfigureNow = children === 'Configure Now';
  const borderClasses = isConfigureNow ? "border border-white" : "";

  return (
    <motion.button
      className={`${baseClasses} ${borderClasses} ${variant === 'dark' ? darkClasses : yellowClasses}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default ActionButton;
