import React, { useState } from 'react';
import { ArrowRight, Check, Palette, Sparkles, LayoutGrid } from 'lucide-react';

/**
 * KitchenShowcase Component ("Our Kitchens & Interiors")
 * Senior UI/UX Redesign: Interactive layout switcher showcasing multiple
 * high-definition architectural kitchen styles (Bespoke Modern, Island Concept,
 * Contemporary L-Shape) with feature callouts and warranty highlights.
 */
function KitchenShowcase() {
  const styles = [
    {
      id: 'bespoke',
      title: 'Bespoke Modern',
      tag: 'Signature Finish',
      image: '/kitchen-personalise.jpg',
      caption: 'Scratch-resistant acrylic & matte PU lacquers',
      description: 'Handcrafted custom cabinetry with integrated soft ambient lighting and seamless handleless profiles.',
    },
    {
      id: 'island',
      title: 'Island Concept',
      tag: 'Grand Entertaining',
      image: '/kitchen-island.jpg',
      caption: 'Central quartz waterfall island with built-in hob',
      description: 'Expansive open-plan layout uniting culinary prep and family entertaining with German hardware.',
    },
    {
      id: 'lshape',
      title: 'Ergonomic L-Shape',
      tag: 'Space Optimizer',
      image: '/kitchen-lshape.jpg',
      caption: 'Anti-fingerprint nano-coatings & corner carousels',
      description: 'Maximum utility and smooth culinary workflows tailored for contemporary apartments and villas.',
    },
  ];

  const [activeStyle, setActiveStyle] = useState(styles[0]);

  const features = [
    '200+ Contemporary Colors & Textures',
    'High-Moisture & Anti-Scratch Protective Finishes',
    'German Soft-Close Precision Fittings',
    '10-Year Craftsmanship Warranty',
  ];

  return (
    <section id="kitchens" className="bg-slate-50/70 py-6 sm:py-7 lg:py-8 border-t border-slate-200/60 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-5 sm:space-y-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-1.5">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#c8963e]" />
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#c8963e]">
              Our Kitchens &amp; Interiors
            </p>
            <span className="w-6 h-[2px] bg-[#c8963e]" />
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1b1b2f] font-serif">
            BI Modular Kitchens for Modern Living
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans">
            Architecturally designed modular kitchen solutions crafted with precision detail,
            ergonomic intelligence, and built to last a lifetime.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
          
          {/* Left Details */}
          <div className="w-full lg:w-5/12 space-y-3.5 sm:space-y-4">
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1a5276] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                Custom Craftsmanship
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1b1b2f] font-serif leading-tight">
                Personalise your kitchen space
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Choose finishes, textures, storage layouts, and color themes tailored precisely to your home&apos;s
                architectural personality and daily cooking rituals.
              </p>
            </div>

            {/* Interactive Layout Switcher Pills */}
            <div className="space-y-1.5 pt-0.5">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <LayoutGrid size={12} className="text-[#1a5276]" />
                <span>Select Kitchen Layout:</span>
              </p>
              <div className="flex flex-wrap gap-1.5">
                {styles.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setActiveStyle(style)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                      activeStyle.id === style.id
                        ? 'bg-[#1a5276] text-white shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-700 hover:border-[#1a5276]/40 hover:bg-slate-100'
                    }`}
                  >
                    {style.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Checklist */}
            <div className="space-y-2 pt-1">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#1a5276]/10 text-[#1a5276] flex items-center justify-center flex-shrink-0">
                    <Check size={12} strokeWidth={2.5} />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-1.5 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-[#1b1b2f] text-white hover:bg-[#1a5276] transition-all duration-300 text-xs sm:text-sm font-bold tracking-wide shadow-xs cursor-pointer"
              >
                <span>Customise now</span>
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#products"
                className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-full border border-gray-300 text-gray-700 hover:border-gray-900 transition-colors text-xs sm:text-sm font-semibold"
              >
                <Palette size={14} className="text-[#c8963e]" />
                <span>View Finishes</span>
              </a>
            </div>
          </div>

          {/* Right Image Container with Floating Feature Badge */}
          <div className="w-full lg:w-7/12 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/10] bg-slate-200 border border-slate-200 group">
              <img
                key={activeStyle.id}
                src={activeStyle.image}
                alt={activeStyle.title}
                className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-103"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* In-Image Tag Pill */}
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-[#0f1f3d]/90 backdrop-blur-md text-white text-[10.5px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
                  {activeStyle.tag}
                </span>
              </div>
            </div>

            {/* Floating Glassmorphic Pill */}
            <div className="absolute -bottom-3 right-4 sm:right-6 bg-white/95 backdrop-blur-md border border-slate-200/80 p-3 rounded-xl shadow-lg max-w-xs flex items-center gap-3 transition-all duration-300">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-[#c8963e] flex items-center justify-center flex-shrink-0">
                <Sparkles size={16} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">{activeStyle.title}</p>
                <p className="text-[10.5px] text-gray-500">{activeStyle.caption}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KitchenShowcase;
