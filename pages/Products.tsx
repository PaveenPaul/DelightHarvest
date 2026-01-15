
import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const Products: React.FC = () => {
  return (
    <div className="min-h-screen pb-24">
      {/* Page Header */}
      <div className="bg-earth-brown text-white py-20 mb-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold font-serif mb-4">Our Artisan Collection</h1>
          <p className="text-gray-300 font-light max-w-2xl mx-auto">
            Explore our curated selection of Arabica, Robusta and Signature blends. All our coffee is freshly roasted to your preference.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Note Section */}
        <div className="bg-plantation-green/5 border-l-4 border-plantation-green p-6 rounded-r-xl mb-12 flex items-start gap-4">
          <span className="text-2xl">📌</span>
          <p className="text-plantation-green font-medium">
            <strong>Note:</strong> All coffee beans are available in <strong>Medium Roast</strong> and <strong>Dark Roast</strong>, freshly roasted to order based on your preference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        
        {/* Footer info */}
        <div className="mt-20 p-12 bg-white rounded-3xl border border-warm-beige text-center space-y-4">
          <h2 className="text-2xl font-serif font-bold">Bulk Orders & Cafés</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Looking for larger quantities for your cafe or office? We offer special bulk pricing and customized blends for our business partners.
          </p>
          <button 
             onClick={() => window.open(`https://wa.me/917676197913?text=Hi! I am interested in bulk ordering for my business.`, '_blank')}
             className="text-plantation-green font-bold hover:underline"
          >
            Inquire about Bulk Pricing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
