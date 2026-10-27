import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

/**
 * BusinessPortfolio Component ("One Group. Multiple Possibilities.")
 * Senior UI/UX Redesign: High-definition imagery, category pills,
 * refined hover card depth, and streamlined visual consistency.
 */
function BusinessPortfolio() {
  const businesses = [
    {
      category: 'Paints & Coatings',
      title: 'BI Painting Solution',
      description:
        'Comprehensive decorative and industrial paint systems, inspiring color palettes, and lasting protection for residential, commercial, and marine architecture.',
      image: '/vertical-paints-card.jpg',
      href: '#products',
    },
    {
      category: 'Modular Living',
      title: 'BI Modular Kitchen',
      description:
        'State-of-the-art modular kitchen and interior cabinetry combining European hardware, ergonomic utility, and bespoke finishes for dream homes.',
      image: '/kitchen-modern.jpg',
      href: '#kitchens',
    },
    {
      category: 'Smart Tech & HVAC',
      title: 'BI Electronics',
      description:
        'Advanced inverter air conditioning systems, energy-efficient home appliances, and smart industrial automation electronics.',
      image: '/category-air-conditioner.jpg',
      href: '#electronics',
    },
    {
      category: 'Holistic Wellness',
      title: 'BI Homeopathic',
      description:
        'Standardized homeopathic medicines, herbal wellness products, and preventive health solutions trusted by families nationwide.',
      image: '/vertical-wellness-card.jpg',
      href: '#wellness',
    },
    {
      category: 'Agri-Technology',
      title: 'BI Agriculture',
      description:
        'Sustainable crop nutrition, organic bio-fertilizers, and high-yield farming practices designed to empower Indian agriculture.',
      image: '/category-agriculture.jpg',
      href: '#agriculture',
    },
    {
      category: 'Heavy Infrastructure',
      title: 'BI Engineering',
      description:
        'Turnkey heavy steel fabrication, precision structural assemblies, and industrial infrastructure services engineered to highest tolerances.',
      image: '/division-fabrication.png',
      href: '#engineering',
    },
  ];

  return (
    <section id="businesses" className="bg-white py-6 sm:py-7 lg:py-8 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-5 sm:space-y-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-1.5">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#c8963e]" />
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#c8963e]">
              One Group. Multiple Possibilities.
            </p>
            <span className="w-6 h-[2px] bg-[#c8963e]" />
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0f1f3d] font-serif">
            Different Businesses. One Shared Purpose.
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans max-w-2xl mx-auto">
            BI Group brings together specialized business verticals that engineer, build, and safeguard spaces.
            Combining innovation, international certifications, and unwavering commitment.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {businesses.map((biz) => (
            <a
              key={biz.title}
              href={biz.href}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 relative"
            >
              {/* Photo Box with Smooth Scale on Hover */}
              <div className="relative h-36 sm:h-40 overflow-hidden bg-slate-100">
                <img
                  src={biz.image}
                  alt={biz.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                
                {/* Gradient vignette for badge readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

                {/* Category Pill Floating Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-white/95 backdrop-blur-md text-[#0f1f3d] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs">
                    {biz.category}
                  </span>
                </div>
              </div>

              {/* Text Description Box */}
              <div className="p-4 sm:p-4.5 flex flex-col justify-between flex-1 bg-white space-y-2">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-[#0f1f3d] font-serif group-hover:text-[#1a5276] transition-colors">
                      {biz.title}
                    </h3>
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-[#1a5276] group-hover:text-white transition-all duration-300 flex-shrink-0">
                      <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans line-clamp-2">
                    {biz.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#1a5276] group-hover:text-[#c8963e] transition-colors">
                  <span>Explore Vertical</span>
                  <ExternalLink size={12} />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All Businesses CTA Button */}
        <div className="flex justify-center pt-1">
          <a
            href="#businesses"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full border-2 border-[#1b1b2f] text-[#1b1b2f] hover:bg-[#1b1b2f] hover:text-white transition-all duration-300 text-xs sm:text-sm font-bold tracking-wider uppercase cursor-pointer"
          >
            <span>Explore All 7 Business Verticals</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default BusinessPortfolio;
