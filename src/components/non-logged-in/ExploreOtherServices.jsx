import React from 'react';
import { ChevronRight } from 'lucide-react';
import Ride from '../../assets/ride.png';
import rental from '../../assets/rentals.png';
import experience from '../../assets/experience.png';
import rideacademy from '../../assets/rideacademy.png';

// Bridge function to communicate with native app
const callNativeBridge = (screenId, url) => {
  if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.navigateTo) {
    // iOS
    window.webkit.messageHandlers.navigateTo.postMessage({ screenId, url });
  } else if (window.Android && window.Android.navigateTo) {
    // Android
    window.Android.navigateTo(screenId, url);
  } else {
    console.log('Native bridge not available');
  }
};

const ServiceCard = ({ title, imageSrc, className, screenId, url }) => (
  <div 
    className={`relative group ${className} cursor-pointer`}
    onClick={() => callNativeBridge(screenId, url)}
  >
    <div className="w-full h-full overflow-hidden">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
      />
    </div>
    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white py-2 px-3 flex justify-between items-center">
      <span className="text-sm font-semibold">{title}</span>
      <ChevronRight size={18} />
    </div>
  </div>
);

const ExploreOtherServices = () => {
  const services = [
    { title: 'Rides', imageSrc: Ride, screenId: 'rides_screen', url: '/rides' },
    { title: 'Rentals', imageSrc: rental, screenId: 'rentals_screen', url: '/rentals' },
    { title: 'Experiences', imageSrc: experience, screenId: 'experiences_screen', url: '/experiences' },
    { title: 'Rider academy', imageSrc: rideacademy, screenId: 'academy_screen', url: '/academy' },
  ];

  return (
    <div className="bg-black text-white p-6">
      <h2 className="text-4xl font-bold mb-2">EXPLORE</h2>
      <h3 className="text-lg font-semibold mb-4">Other services</h3>
     
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex flex-col gap-4">
          <ServiceCard
            title={services[0].title}
            imageSrc={services[0].imageSrc}
            screenId={services[0].screenId}
            url={services[0].url}
            className="h-[208px] w-[163px] bg-[#181818] border-[#282828] border box-border"
          />
          <ServiceCard
            title={services[1].title}
            imageSrc={services[1].imageSrc}
            screenId={services[1].screenId}
            url={services[1].url}
            className="h-[160px] w-[163px] bg-[#282828] border-[#282828] border box-border"
          />
        </div>
        <div className="flex flex-col gap-4">
          <ServiceCard
            title={services[2].title}
            imageSrc={services[2].imageSrc}
            screenId={services[2].screenId}
            url={services[2].url}
            className="h-[160px] w-[163px] bg-[#282828] border-[#282828] border box-border"
          />
          <ServiceCard
            title={services[3].title}
            imageSrc={services[3].imageSrc}
            screenId={services[3].screenId}
            url={services[3].url}
            className="h-[208px] w-[163px] bg-[#181818] border-[#282828] border box-border"
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreOtherServices;