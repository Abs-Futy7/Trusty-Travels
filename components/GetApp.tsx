import React from 'react';
import Image from 'next/image';
import Button from './Button';
 // Add your app image here

const GetApp = () => {
  return (
    <section className="bg-[#DFE8FF] py-20">
      <div className="max-container flex flex-col items-center text-center mx-4">
        <h2 className="text-8xl font-light text-gray-900 mb-6">Get Our App</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Download our app now and enjoy all the features that make your experience smooth, efficient, and fun. 
          Stay connected and get started today!
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          <Button type="button" title="Get it on App Store" variant="bg-blue-900 hover:bg-blue-800 text-white text-xl font-normal w-full" />
          <Button type="button" title="Get it on Google Play" variant="bg-white hover:bg-gray-100 border border-black rounded-2xl text-gray-900 text-xl font-normal w-full" />
        </div>
      </div>
    </section>
  );
};

export default GetApp;

