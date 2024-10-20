import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import ConfigureButton from "../../mc/ConfigureButton";
import image1 from "../../assets/View Bike.png";

const MotorcycleCustomizer = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  return (
    <section className="relative bg-black text-white overflow-hidden flex flex-col justify-center py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-2 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold uppercase mb-2 text-white flex items-center">
              #MakeItYours <Sparkles className="ml-2 text-yellow-400" />
            </h2>
            <p className="max-w-xl mb-8 text-lg text-gray-300">
              From parts to paint, customize your motorcycle your way.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Full-width image with no left or right gaps */}
      <motion.div
        className="relative w-screen"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <img
          src={image1}
          alt="Background"
          className="w-screen h-auto object-cover"
        />
      </motion.div>

      <div className="container mt-5 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mt-8">
          <ConfigureButton isTouchDevice={isTouchDevice} />
        </div>
      </div>

      {/* Full-width background effect for modern look */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-transparent to-black opacity-30 pointer-events-none"></div>
    </section>
  );
};

export default MotorcycleCustomizer;
