
import React from 'react';
import { GALLERY_ITEMS } from '../constants';

const Gallery: React.FC = () => {
  return (
    <div className="min-h-screen pb-24">
      <div className="bg-earth-brown text-white py-20 mb-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold font-serif mb-4">Visual Heritage</h1>
          <p className="text-gray-300 font-light max-w-2xl mx-auto">
            A glimpse into our process, from the plantation to the final roast. Pure authenticity in every bean.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div key={item.id} className="relative group overflow-hidden rounded-2xl aspect-[4/5] bg-gray-200">
              <img 
                src={item.url} 
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6">
                <p className="text-white text-lg font-medium text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
