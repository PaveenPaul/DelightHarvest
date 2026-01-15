import React, { useState } from 'react';
import { BUSINESS_PHONE } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the WhatsApp message
    const text = `Hello! My name is ${formData.name}. %0A` +
                 `Email: ${formData.email} %0A` +
                 `Enquiry: ${formData.message}`;
    
    // Open WhatsApp URL
    window.open(`https://wa.me/${BUSINESS_PHONE}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen pb-24">
      <div className="bg-earth-brown text-white py-20 mb-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold font-serif mb-4">Get in Touch</h1>
          <p className="text-gray-300 font-light max-w-2xl mx-auto">
            Have questions about our blends? We're just a WhatsApp message away.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-warm-beige shadow-sm">
            <h2 className="text-3xl font-serif font-bold mb-8">Send an Enquiry</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-plantation-green focus:ring-2 focus:ring-plantation-green/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-plantation-green focus:ring-2 focus:ring-plantation-green/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">How can we help?</label>
                <textarea 
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us what you're looking for..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-plantation-green focus:ring-2 focus:ring-plantation-green/20 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-plantation-green hover:bg-green-800 text-white py-4 rounded-lg font-bold transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2"
              >
                Continue to WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Info & WhatsApp */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Direct Contact</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our WhatsApp support is available for quick queries and orders during business hours.
              </p>
              
              <button 
                onClick={() => window.open(`https://wa.me/${BUSINESS_PHONE}`, '_blank')}
                className="inline-flex items-center gap-4 bg-plantation-green hover:bg-green-800 text-white px-8 py-6 rounded-2xl shadow-xl transition-all group w-full sm:w-auto"
              >
                <div className="bg-white/20 p-3 rounded-full group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-widest opacity-80">Order via</p>
                  <p className="text-xl font-bold">WhatsApp Messenger</p>
                </div>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-warm-beige">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-plantation-green mb-4">Hours</h3>
                <p className="text-gray-600">Mon – Sat: 9am – 6pm</p>
                <p className="text-gray-600 text-xs">Closed on Sundays</p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-plantation-green mb-4">Location</h3>
                <p className="text-gray-600">Main Estate Office, Chikmagalur, Karnataka, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;