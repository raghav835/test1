import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const NameNavigation = ({ currentIndex, setCurrentIndex, motorcycles }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const selectedButton = scrollRef.current.children[currentIndex];
      if (selectedButton) {
        selectedButton.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [currentIndex]);

  return (
    <div 
      ref={scrollRef}
      className="flex overflow-x-auto overflow-y-scroll no-scrollbar snap-x snap-mandatory scrollbar-hide px-4 w-full"
    >
      {motorcycles.map((motorcycle, index) => (
        <motion.button
          key={motorcycle.name}
          className={`px-3 py-2 mx-1 flex-shrink-0 transition-all duration-300 ease-in-out text-sm rounded-full snap-center ${
            currentIndex === index ? 'bg-yellow-400 text-black font-semibold' : 'bg-black text-white'
          }`}
          onClick={() => setCurrentIndex(index)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {motorcycle.name}
        </motion.button>
      ))}
    </div>
  );
};

export default NameNavigation;