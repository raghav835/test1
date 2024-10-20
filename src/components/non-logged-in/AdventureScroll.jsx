import React, { useState, useEffect } from 'react';
import road from '../../assets/road.png';
import pngkit from '../../assets/pngkit.png';

const EndOfScrollComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate scale factor based on design width
  const scaleFactor = Math.min(windowWidth / 378, 1.3); // Reduced max scale to 1.3

  return (
    <div className="relative w-full h-[30vh] overflow-hidden bg-black">
      {/* Full-width Road image */}
      <img
        src={road}
        alt="Road"
        className="absolute bottom-0 w-full h-auto object-cover"
        style={{
          maxHeight: '70%', // Reduced max height to bring road higher
        }}
      />
     
      {/* Text content */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
          End of scroll. Beginning of an adventure.
        </h2>
        <h1 className="text-xl md:text-2xl lg:text-3xl text-yellow-300 font-semibold">
          Discover more
        </h1>
      </div>
     
      {/* PNG Kit image */}
      <img
        src={pngkit}
        alt="PNG Kit"
        className="absolute bottom-3 left-1/2 transform -translate-x-1/2"
        style={{
          width: `${130 * scaleFactor}px`,
          height: 'auto',
        }}
      />
    </div>
  );
};

export default EndOfScrollComponent;