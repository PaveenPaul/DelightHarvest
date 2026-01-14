
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen pb-24">
      <div className="bg-earth-brown text-white py-20 mb-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold font-serif mb-4">Privacy Policy</h1>
          <p className="text-gray-300 font-light max-w-2xl mx-auto">
            How we protect your data and respect your privacy.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-brown">
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-warm-beige shadow-sm space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif font-bold text-earth-brown mb-4">1. Information Collection</h2>
            <p>
              At Delight Coffee and Spices, we collect minimal personal information necessary to provide our services. This includes your name and email address when you use our contact form, and any information you voluntarily share during our WhatsApp conversations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-earth-brown mb-4">2. Use of Information</h2>
            <p>
              The information we collect is used exclusively to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Process your orders and provide delivery updates.</li>
              <li>Respond to your inquiries and feedback.</li>
              <li>Improve our products and customer experience.</li>
              <li>Notify you about special offers or new arrivals (only if you have opted in).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-earth-brown mb-4">3. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. However, please note that our ordering process involves third-party platforms like WhatsApp. While we ensure our practices are secure, the security of data transmitted over these platforms is subject to their respective privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-earth-brown mb-4">4. Third-Party Services</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website or conducting our business, such as delivery partners, so long as those parties agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-earth-brown mb-4">5. Your Consent</h2>
            <p>
              By using our site, you consent to our privacy policy. If you wish to have your data removed from our records, please contact us via the email provided on our contact page.
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

export default PrivacyPolicy;
