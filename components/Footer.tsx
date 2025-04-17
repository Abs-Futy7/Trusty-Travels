import React from 'react'

const Footer = () => {
  return (
    <footer className="text-gray-800 px-6 py-10">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pr-7">
    {/* Brand Section */}
    <div>
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <span className="text-3xl">Trusty Travels</span> 
      </h2>
      <p className="text-sm mt-2 text-gray-700">
        Explore the world’s hidden treasures, waiting to be discovered with us.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="font-semibold mb-3">Quick Links</h3>
      <ul className="space-y-2 text-sm text-gray-600">
        <li><a href="#">Home</a></li>
        <li><a href="#">Packages</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Plan Your Trip</a></li>
      </ul>
    </div>

    {/* Destinations */}
    <div>
      <h3 className="font-semibold mb-3">Destinations</h3>
      <ul className="space-y-2 text-sm text-gray-600">
        <li><a href="#">Exotic Beaches</a></li>
        <li><a href="#">Cultural Capitals</a></li>
        <li><a href="#">Adventure Escapes</a></li>
        <li><a href="#">Family Vacations</a></li>
        <li><a href="#">Luxury Travel</a></li>
      </ul>
    </div>

    {/* Support */}
    <div>
      <h3 className="font-semibold mb-3">Support</h3>
      <ul className="space-y-2 text-sm text-gray-600">
        <li><a href="#">Help Center</a></li>
        <li><a href="#">Anti-discrimination</a></li>
        <li><a href="#">Disability Support</a></li>
        <li><a href="#">Cancellation Options</a></li>
        <li><a href="#">Report Neighborhood Concern</a></li>
      </ul>
    </div>
  </div>

  <hr className="my-6 border-gray-700" />

  {/* Footer Bottom */}
  <div className="text-center text-sm text-gray-400">
    © 2025 Trusty Travels. All Rights Reserved &nbsp;|&nbsp; 
    <a href="#" className="hover:underline">Privacy Policy</a> &nbsp;|&nbsp; 
    <a href="#" className="hover:underline">Terms of Service</a> &nbsp;|&nbsp; 
    <a href="#" className="hover:underline">Manage Cookies</a>
  </div>
</footer>

  )
}

export default Footer