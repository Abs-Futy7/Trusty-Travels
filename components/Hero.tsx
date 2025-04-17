import React from "react";
import star from "@/public/star.svg";
import Image from "next/image";
import Button from "./Button";
import close from "@/public/close.svg";

const Hero = () => {
  return (
    <section className="w-full p-4 flex flex-col gap-6 lg:py-20 xl:flex-row lg:ml-20">
      <div className="flex flex-col gap-6 lg:w-1/2 justify-center">
        <h1 className="text-5xl md:text-8xl font-bold text-gray-800">
          Trusty Travels
        </h1>
        <h4 className="text-2xl md:text-4xl font-semibold text-gray-800">
          Gateway To Unforgettable Adventures
        </h4>
        <p className="text-sm md:text-base text-gray-500">
          At <b>Trusty Travels,</b> we believe every journey is an opportunity
          to create lasting memories. Whether you’re seeking serene beaches,
          vibrant cityscapes, or thrilling adventures, our expert team is here
          to curate personalized travel experiences tailored just for you.
        </p>
        <div className="flex items-center flex-wrap gap-2 md:gap-4">
          {[...Array(5)].map((_, i) => (
            <Image key={i} src={star} alt="star" width={20} height={20} />
          ))}
          <p className="text-gray-800 mx-2 font-bold">178k</p>
          <span className="text-gray-800 underline underline-offset-1 cursor-pointer">
            Excellent Reviews
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
          <Button type="button" title="Download Now" variant="bg-blue-900 hover:bg-blue-800 text-white" />
          <Button type="button" title="How We Work?" variant="border border-blue-900 hover:bd-gray-200" />
        </div>
      </div>
      <div className="relative flex flex-1 items-center justify-center md:items-start">
        <div className="relative z-20 flex w-full max-w-[300px] md:w-[260px] flex-col gap-6 rounded-3xl bg-blue-900 px-5 md:px-7 py-6 md:py-8">
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <p className="text-gray-400">Location</p>
              <Image src={close} alt="close" width={24} height={24} className="cursor-pointer"/>
            </div>
            <p className="font-bold text-white">Aguas Calientes</p>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="text-gray-400">Distance</p>
              <p className="font-bold text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-400">Elevation</p>
              <p className="text-white font-bold">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

