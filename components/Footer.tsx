import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-gray-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <div className="font-extrabold text-2xl italic mb-6">
              <span className="text-3xl text-white">SIP</span>
              <span className="text-sm block not-italic font-sans font-bold text-gray-400 mt-1">CV. Sumber Inti Prima</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Your professional partner in heavy equipment support. Providing quality, safety, and reliability for industrial operations across the nation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sip-red transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sip-red transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sip-red transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-sip-red transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-sip-red transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-sip-red transition-colors">Our Services</a></li>
              <li><a href="#products" className="hover:text-sip-red transition-colors">Product Catalog</a></li>
              <li><a href="#licenses" className="hover:text-sip-red transition-colors">Licenses</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sip-red shrink-0" />
                <span>
                  Jl. Industrial Park No. 88,<br/>
                  Jakarta, Indonesia 14000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sip-red shrink-0" />
                <span>+62 21 5555 8888</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sip-red shrink-0" />
                <span>info@sumberintiprima.co.id</span>
              </li>
            </ul>
          </div>

          {/* Map Placeholder */}
          <div>
            <h3 className="text-lg font-bold mb-6">Location</h3>
            <div className="w-full h-40 bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden relative group">
              {/* Simulated Map */}
              <img 
                src="https://placehold.co/600x400/1f2937/ffffff?text=Google+Maps+Location" 
                alt="Map" 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
              />
              <a 
                href="#" 
                className="absolute bg-white text-black px-4 py-2 rounded shadow-lg text-xs font-bold hover:bg-sip-red hover:text-white transition-colors"
              >
                Open Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} CV. Sumber Inti Prima. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;