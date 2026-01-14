
import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen pb-24">
      <div className="bg-earth-brown text-white py-20 mb-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold font-serif mb-4">Terms of Service</h1>
          <p className="text-gray-300 font-light max-w-2xl mx-auto">
            The guidelines for ordering and our commitment to quality.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-brown">
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-warm-beige shadow-sm space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif font-bold text-earth-brown mb-4">1. Product Quality</h2>
            <p>
              All coffee beans sold by Delight Coffee and Spices are freshly roasted to order. Since coffee is an agricultural product, slight variations in flavor profile may occur between different harvests. We guarantee that all spices are single-estate and authentic.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-earth-brown mb-4">2. Ordering Process</h2>
            <p>
              Orders are initiated through this website and completed via WhatsApp. A "confirmed order" is only established once payment details are shared and payment is confirmed via our WhatsApp representative. We reserve the right to refuse service to anyone for any reason at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-earth-brown mb-4">3. Pricing and Payments</h2>
            <p>
              Prices for our products are subject to change without notice. We currently accept payments via UPI, bank transfer, or other methods as discussed during the WhatsApp checkout process. No payment is collected directly on this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-earth-brown mb-4">4. Shipping and Delivery</h2>
            <p>
              We ship across India. Delivery times may vary depending on your location and the roasting schedule. We are not responsible for delays caused by the shipping carrier, but we will assist you in tracking your package.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-earth-brown mb-4">5. Returns and Refunds</h2>
            <p>
              Due to the perishable nature of coffee and spices, we do not accept returns. If you receive a damaged product or the wrong item, please notify us within 24 hours of delivery with photographic evidence, and we will arrange for a replacement or store credit.
            </p>
          </section>

          <div className="pt-8 border-t border-warm-beige text-sm text-gray-500 italic">
            Last Updated: February 2025
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
