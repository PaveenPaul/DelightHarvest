
import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, TESTIMONIALS, BUSINESS_PHONE } from '../constants';
import { Category } from '../types';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const coffeeProducts = PRODUCTS.filter(p => p.category === Category.COFFEE || p.category === Category.BLENDS);
  const spiceProducts = PRODUCTS.filter(p => p.category === Category.SPICES);

  const features = [
    { title: 'Freshly Roasted', desc: 'Every batch is roasted only after you place your order to ensure peak aroma.', icon: '🔥' },
    { title: 'Single Estate', desc: 'Directly sourced from premium plantations in Coorg and Chikmagalur.', icon: '🌱' },
    { title: 'Artisanal Blends', desc: 'Masterfully balanced Arabica and Robusta blends for the perfect cup.', icon: '☕' },
    { title: 'WhatsApp Orders', desc: 'No complex checkout. Just message us and we handle the rest.', icon: '📱' },
  ];

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2000&auto=format&fit=crop" 
            alt="Coffee background" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="max-w-2xl text-white space-y-6 animate-in fade-in slide-in-from-left duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight font-serif">
              Freshly Roasted <br /> 
              <span className="text-plantation-green italic">from the Source</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 font-light max-w-lg">
              Experience the artisan quality of handpicked coffee beans and single-estate spices from South India's finest plantations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => window.open(`https://wa.me/${BUSINESS_PHONE}?text=Hello! I'm interested in ordering some coffee and spices.`, '_blank')}
                className="bg-plantation-green hover:bg-green-800 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-xl flex items-center justify-center gap-2"
              >
                Order on WhatsApp
              </button>
              <Link to="/products" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all text-center">
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-serif mb-4">The Delight Promise</h2>
          <div className="w-24 h-1 bg-plantation-green mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-cream p-8 rounded-2xl border border-warm-beige hover:border-plantation-green/30 transition-all text-center">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold mb-2 font-serif">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Coffee Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold font-serif mb-2">Premium Coffee Beans</h2>
            <p className="text-gray-600">Freshly roasted, single-estate Arabica and Robusta.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coffeeProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Spices Section */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold font-serif mb-2">Handpicked Spices</h2>
            <p className="text-gray-600">Aromatic treasures directly from our plantations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spiceProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-serif font-bold mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="p-8 bg-cream rounded-xl border border-warm-beige italic relative">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-4xl text-plantation-green opacity-30">“</span>
              <p className="text-gray-700 mb-4">{t.text}</p>
              <p className="font-bold text-earth-brown not-italic">— {t.name}, {t.city}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-earth-brown rounded-3xl p-12 text-center text-white space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-plantation-green rounded-full -translate-y-1/2 translate-x-1/2 opacity-20 blur-3xl"></div>
          <h2 className="text-4xl font-bold font-serif relative z-10">Taste the Freshness Today</h2>
          <p className="text-gray-300 max-w-xl mx-auto relative z-10 font-light">
            Ready to experience real artisan coffee? Message us on WhatsApp to place your order or ask any questions about our blends.
          </p>
          <button 
             onClick={() => window.open(`https://wa.me/${BUSINESS_PHONE}?text=Hello! I'm ready to place an order.`, '_blank')}
             className="relative z-10 inline-flex items-center gap-2 bg-plantation-green hover:bg-green-800 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-2xl active:scale-95"
          >
            Message us on WhatsApp
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
