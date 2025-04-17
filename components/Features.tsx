import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Travel With Us?</h2>
    <p className="text-gray-600 mb-10 text-xl">Experience the difference with our expertly curated journeys and customer-first approach.</p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 cursor-pointer">
      {/* Feature 1 */}
      <div className="p-6 border rounded-lg shadow hover:shadow-md transition h-[250px] flex flex-col justify-center items-center text-center">
        <div className="text-blue-500 text-4xl mb-4">🌍</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Destinations</h3>
        <p className="text-gray-600">Explore hand-picked spots across continents—from hidden gems to iconic places.</p>
      </div>

      {/* Feature 2 */}
      <div className="p-6 border rounded-lg shadow hover:shadow-md transition  h-[250px] flex flex-col justify-center items-center text-center">
        <div className="text-green-500 text-4xl mb-4">🛎️</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Personalized Service</h3>
        <p className="text-gray-600">We tailor every trip to your preferences, from accommodations to daily adventures.</p>
      </div>

      {/* Feature 3 */}
      <div className="p-6 border rounded-lg shadow hover:shadow-md transition h-[250px] flex flex-col justify-center items-center text-center">
        <div className="text-yellow-500 text-4xl mb-4">📞</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Support</h3>
        <p className="text-gray-600">Travel stress-free with our around-the-clock customer care and emergency assistance.</p>
      </div>
    </div>
  </div>
</section>

  )
}


export default Features
