import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_EMAIL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-earth-brown text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="font-serif text-3xl font-bold">Delight <span className="text-plantation-green">Harvests</span></h2>
            <p className="text-gray-300 max-w-xs leading-relaxed">
              Freshly Roasted Coffee & Handpicked Spices from the Source. Bringing the essence of South Indian plantations to your doorstep.
            </p>
          </div>
          
          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-widest text-plantation-green">Quick Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/products" className="hover:text-white transition-colors">Coffee Collection</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Spice Selection</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Our Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Connect & Location Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-widest text-plantation-green">Connect</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 flex items-center justify-center bg-gray-700 rounded-full">
                   <svg className="w-3 h-3 text-white fill-current" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </span>
                {BUSINESS_EMAIL}
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 flex items-center justify-center bg-gray-700 rounded-full">
                  <svg className="w-3 h-3 text-white fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </span>
                WhatsApp Ordering
              </li>
              {/* Added Map Location Link */}
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 flex items-center justify-center bg-gray-700 rounded-full">
                  <svg className="w-3 h-3 text-white fill-current" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                </span>
                <a 
                  href="https://maps.app.goo.gl/7TLDa8MJ9wdrhQb26?g_st=iw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Find Us on Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Delight Coffee and Spices. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;