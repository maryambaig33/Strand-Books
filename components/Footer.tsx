import React from 'react';
import { Facebook, Twitter, Instagram, MapPin, Clock, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-strand-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-serif font-black mb-4 uppercase">Strand Book Store</h2>
            <p className="text-gray-400 text-sm mb-4">
              Home of 18 Miles of Books. Independent and family-owned since 1927.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-strand-red transition"><Instagram size={20} /></a>
              <a href="#" className="hover:text-strand-red transition"><Twitter size={20} /></a>
              <a href="#" className="hover:text-strand-red transition"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Visit */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4 border-b border-gray-700 pb-2 inline-block">Visit Us</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start">
                <MapPin size={16} className="mt-1 mr-2 text-strand-red shrink-0" />
                <span>828 Broadway at 12th Street<br/>New York, NY 10003</span>
              </li>
              <li className="flex items-start">
                <Clock size={16} className="mt-1 mr-2 text-strand-red shrink-0" />
                <span>Mon-Sun: 10AM - 8PM</span>
              </li>
              <li className="flex items-start">
                <Phone size={16} className="mt-1 mr-2 text-strand-red shrink-0" />
                <span>212-473-1452</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4 border-b border-gray-700 pb-2 inline-block">Explore</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-strand-red transition">Our Story</a></li>
              <li><a href="#" className="hover:text-strand-red transition">Careers</a></li>
              <li><a href="#" className="hover:text-strand-red transition">Sell Your Books</a></li>
              <li><a href="#" className="hover:text-strand-red transition">Strand Merch</a></li>
              <li><a href="#" className="hover:text-strand-red transition">Rare Book Room</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Strand Book Store. All rights reserved. Reimagined with Gemini.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;