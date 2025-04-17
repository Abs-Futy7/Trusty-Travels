import React from "react";
import boat from "@/public/boat.jpg";
import Image from "next/image";

const Guide = () => {
  return (
    <div className="bg-[#DFE8FF] flex flex-col items-center justify-center mt-10">
      <div className="p-4 mt-8 flex flex-col gap-6 lg:py-20 xl:flex-row lg:mx-20">
      {/* Text Section */}
      <div className="flex flex-col gap-2 lg:w-[60%]">
        <p className="text-lg text-blue-950">WE ARE HERE FOR YOU</p>
        <h1 className="text-5xl md:text-8xl font-bold text-gray-800">
          Guide You To The Best
        </h1>
        <p className="text-sm md:text-base text-gray-500 mt-5">
        Discover the world with confidence and ease. At <b className="font-bold text-blue-950 text-xl">Trusty Travels</b>, we’re dedicated to crafting the perfect travel experiences — whether you're dreaming of relaxing on tropical beaches, exploring vibrant cities, or venturing into nature's wonders. Our expert team is here to help you every step of the way, ensuring seamless planning, personalized recommendations, and memories that last a lifetime. Let us take care of the details, so you can focus on the adventure.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative flex flex-col items-center justify-center lg:w-[60%] ">
        {/* Image */}
        <Image
          src={boat}
          alt="boat"
          width={800}
          height={300}
          className="w-full object-center rounded-3xl lg:rounded-5xl h-85% lg:h-[300px]"
        />

        {/* White Box */}
        <div className="absolute z-20 flex w-full max-w-[300px] lg:w-[260px] flex-col gap-6 rounded-3xl bg-white px-5 md:px-7 py-6 md:py-8">
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <p className="text-gray-400">Location</p>
            </div>
            <p className="font-bold text-gray-800">Aguas Calientes</p>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="text-gray-400">Distance</p>
              <p className="font-bold text-gray-800">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-400">Elevation</p>
              <p className="text-gray-800 font-bold">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Guide;
