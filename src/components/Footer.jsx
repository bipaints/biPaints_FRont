import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

/**
 * Footer Component
 * Includes the newsletter subscription section, four-column informational
 * links, corporate contact info, social icons, and legal footer.
 */
function Footer() {
  // State for newsletter form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    industry: '',
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.consent) {
      setSubmitted(true);
      // Reset form
      setFormData({ name: '', email: '', industry: '', consent: false });
    }
  };

  const industries = [
    'Paints & Coatings',
    'Wellness',
    'Fashion & Lifestyle',
    'Modular Kitchens',
    'Other',
  ];

  return (
    <footer id="contact" className="bg-white scroll-mt-14">
      
      {/* 1. Newsletter Subscription Bar */}
      <div className="bg-[#f4f7fb] border-t border-gray-200 py-6 sm:py-7 lg:py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
          
          <div className="lg:max-w-md">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0f1f3d] font-serif leading-snug">
              Subscribe to BI Insider and get the latest industry updates
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="w-full lg:max-w-2xl space-y-3">
            {submitted && (
              <div className="p-2.5 bg-green-100 text-green-800 text-xs sm:text-sm rounded-lg">
                Thank you for subscribing to BI Insider!
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <input
                type="text"
                placeholder="First and last name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-white px-3.5 py-2 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#0f1f3d] focus:outline-none focus:border-[#1a5276]"
              />
              <input
                type="email"
                placeholder="Your e-mail address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-white px-3.5 py-2 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#0f1f3d] focus:outline-none focus:border-[#1a5276]"
              />
              <select
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                className="bg-white px-3.5 py-2 rounded-lg border border-gray-300 text-xs sm:text-sm text-gray-700 focus:outline-none focus:border-[#1a5276]"
              >
                <option value="" disabled>
                  Choose your preferred…
                </option>
                {industries.map((ind) => (
                  <option key={ind} value={ind}>
                    {ind}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <label className="flex items-center gap-2 cursor-pointer select-none text-xs text-gray-600">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  required
                  className="rounded text-[#1a5276] focus:ring-[#1a5276]"
                />
                <span>
                  I consent to my e-mail address being used in accordance with our{' '}
                  <a href="#privacy" className="underline hover:text-[#1a5276]">
                    privacy policy
                  </a>
                  .
                </span>
              </label>

              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-[#1a5276] text-white hover:bg-[#124059] transition-colors text-xs sm:text-sm font-semibold tracking-wide flex-shrink-0 cursor-pointer"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* 2. Main 4-Column Footer */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-7 sm:py-8 lg:py-9">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-5">
            <a href="/" className="inline-block">
              <img src="/bi-logo.svg" alt="BI Group" className="h-8 w-auto" />
            </a>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
              BI Group is a leading manufacturer of paints, coatings &amp; engineering solutions, delivering innovative,
              high-performance products for industrial, infrastructure, and residential sectors across India.
            </p>

            {/* Social Icons */}
            <div className="space-y-2">
              <p className="text-xs font-bold text-[#0f1f3d] uppercase tracking-wider">Follow Us:</p>
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href="#facebook"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-[#0f1f3d] text-white hover:bg-[#1a5276] flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="#instagram"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-[#0f1f3d] text-white hover:bg-[#1a5276] flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="#linkedin"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-[#0f1f3d] text-white hover:bg-[#1a5276] flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v1.5A6 6 0 0 1 16 8zM2 9h4v12H2zm2-7a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Our Businesses */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-[#0f1f3d] font-serif border-b-2 border-[#c8963e] pb-1 w-fit">
              Our Businesses
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600">
              <li>
                <a href="#products" className="hover:text-[#1a5276] transition-colors">
                  Paints &amp; Coatings
                </a>
              </li>
              <li>
                <a href="#kitchens" className="hover:text-[#1a5276] transition-colors">
                  Modular Interiors
                </a>
              </li>
              <li>
                <a href="#engineering" className="hover:text-[#1a5276] transition-colors">
                  Engineering Services
                </a>
              </li>
              <li>
                <a href="#industrial" className="hover:text-[#1a5276] transition-colors">
                  Industrial Solutions
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-[#1a5276] transition-colors">
                  End to End Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-[#0f1f3d] font-serif border-b-2 border-[#c8963e] pb-1 w-fit">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600">
              <li>
                <a href="/about" className="hover:text-[#1a5276] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-[#1a5276] transition-colors">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#sustainability" className="hover:text-[#1a5276] transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#foundation" className="hover:text-[#1a5276] transition-colors">
                  BI Foundation
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-[#1a5276] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#news" className="hover:text-[#1a5276] transition-colors">
                  News &amp; Insights
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#1a5276] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-[#0f1f3d] font-serif border-b-2 border-[#c8963e] pb-1 w-fit">
              Get In Touch
            </h4>
            <div className="space-y-4 text-xs sm:text-sm text-gray-600">
              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-[#c8963e] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} />
                </span>
                <div>
                  <p className="font-bold text-[#0f1f3d]">Location</p>
                  <p className="text-xs text-gray-500">Plot No. G-505, Boranada, Jodhpur, Rajasthan, India</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-[#c8963e] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={14} />
                </span>
                <div>
                  <p className="font-bold text-[#0f1f3d]">Email</p>
                  <a href="mailto:info@bipaints.com" className="text-xs text-gray-500 hover:text-[#1a5276]">
                    info@bipaints.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-[#c8963e] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={14} />
                </span>
                <div>
                  <p className="font-bold text-[#0f1f3d]">Phone</p>
                  <a href="tel:+911234567890" className="text-xs text-gray-500 hover:text-[#1a5276]">
                    +91 1234 567890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Legal & Copyright Bar */}
      <div className="bg-[#f4f7fb] border-t border-gray-200 py-3.5 sm:py-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 BI Group of Companies. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#accessibility" className="hover:text-[#1a5276] transition-colors">
              Accessibility Statement
            </a>
            <a href="#cookie" className="hover:text-[#1a5276] transition-colors">
              Cookie Policy
            </a>
            <a href="#human-rights" className="text-[#1a5276] hover:underline">
              Human Rights Request
            </a>
            <a href="#privacy" className="hover:text-[#1a5276] transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
