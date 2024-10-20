// components/MotorcycleCard.jsx
import { motion } from 'framer-motion';

const MotorcycleCard = ({ motorcycle, isActive }) => (
  <motion.div
    className={`relative w-full max-w-md mx-auto h-48 md:h-64  bg-black bg-opacity-50 rounded-lg overflow-hidden shadow-xl transition-transform duration-300 ${isActive ? 'scale-105' : 'scale-100'}`}
    layout
  >
    <div className="relative w-full h-full">
      <img
        src={motorcycle.img}
        alt={motorcycle.name}
        className="absolute top-0 left-0 w-full h-full object-contain"
      />
    </div>

     
  </motion.div>
);

export default MotorcycleCard;
