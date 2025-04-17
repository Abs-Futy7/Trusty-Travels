import React from 'react';
import Image from 'next/image';
import map from '@/public/folded-map.svg';
import bg1 from '@/public/bg1.jpg';
import bg2 from '@/public/bg2.jpg';
import quote from '@/public/quote.svg';

interface CampProps {
  backgroundImage: string; // We'll pass the actual image URL as a string
  title: string;
  subtitle: string;
}

const CampSite = ({ backgroundImage, title, subtitle }: CampProps) => {
  return (
    <div
      className="relative flex h-full min-w-[800px] bg-cover bg-no-repeat rounded-3xl overflow-hidden "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Add animation for scrolling background */}
      <div
        className="absolute top-0 left-0 w-full h-full animate-bg-scroll"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'repeat-y',
        }}
      ></div>
      <div className="relative flex flex-col h-full items-start justify-between p-6 rounded-2xl z-10">
        {/* Add a transparent overlay for better text contrast */}
        <div className="flex justify-center gap-2">
          <div className="rounded-full bg-blue-600 p-4 shadow-lg">
            <Image src={map} alt="Folded map icon" width={20} height={20} />
          </div>
          <div className="flex flex-col">
            <h4 className="font-bold text-lg text-white">{title}</h4>
            <p className="text-sm text-white">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="relative p-4 flex flex-col gap-6 lg:py-20 xl:flex-row lg:ml-20">
      {/* Background scrolling section */}
      <div className="flex h-[340px] w-full items-start justify-start gap-8 overflow-hidden lg:h-[400px] relative">
        <CampSite
          backgroundImage={bg1.src} // Pass the actual image source
          title="Mount Everest"
          subtitle="Kathmandu, Nepal"
        />
        <CampSite
          backgroundImage={bg2.src} // Pass the actual image source
          title="Grand Canyon"
          subtitle="Arizona, USA"
        />
        
      </div>

      {/* Overlay section */}
      <div className="absolute top-1/2 left-1/4 transform translate-x-4 translate-y-4 w-[80%] lg:w-[60%] xl:w-[40%] z-20 pb-4">
        <div className="bg-blue-900 p-6 rounded-3xl shadow-lg lg:rounded-5xl xl:px-16 xl:py-10 relative">
          <h2 className="font-medium text-xl md:text-2xl 2xl:text-4xl capitalize text-gray-200">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="text-sm xl:text-base mt-2 text-gray-300">
            Starting from the anxiety of climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure.
          </p>
          <Image
            src={quote}
            alt="Inspirational quote about camping"
            width={186}
            height={219}
            className="absolute bottom-0 right-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;

