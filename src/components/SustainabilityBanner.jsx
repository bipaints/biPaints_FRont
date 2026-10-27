import React from 'react';
import { ArrowRight, Leaf, Shield, Award } from 'lucide-react';

/**
 * SustainabilityBanner Component
 * Senior UI/UX Redesign: Deep corporate ocean gradient, sustainable badges,
 * and high-contrast typography emphasizing environmental stewardship.
 */
function SustainabilityBanner() {
  const pillars = [
    { icon: Leaf, title: 'Low VOC & Waterborne', desc: 'Zero harmful emissions' },
    { icon: Shield, title: 'Non-Toxic Formulations', desc: 'Free of lead & heavy metals' },
    { icon: Award, title: 'Green Pro Certified', desc: 'Sustainable manufacturing' },
  ];

  return (
    <section id="sustainability" className="relative overflow-hidden w-full min-h-[290px] sm:min-h-[310px] lg:min-h-[330px] flex items-center scroll-mt-14">
      {/* Anchor for BI Foundation navbar link */}
      <span id="foundation" className="absolute top-0 -mt-14 pointer-events-none" />

      {/* Background Image */}
      <img
        src="/sustainability-banner-2.jpg"
        alt="BI Group Sustainability"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Deep Ocean Navy Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(11, 45, 91, 0.94) 0%, rgba(11, 45, 91, 0.85) 45%, rgba(11, 45, 91, 0.3) 85%)',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full py-6 sm:py-7 lg:py-8">
        <div className="max-w-2xl text-white space-y-3 sm:space-y-3.5">
          
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10.5px] sm:text-xs font-bold uppercase tracking-widest text-emerald-300">
            <Leaf size={12} className="text-emerald-400" />
            <span>Sustainable Future</span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif leading-[1.15]">
            Protecting Surfaces, Preserving the Future
          </h2>

          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans max-w-xl">
            Together with our partners, industrial clients, and communities, we are committed to engineering
            low-emission coatings and circular manufacturing processes that build sustainable infrastructure
            without compromising durability.
          </p>

          {/* 3 Pillar Micro Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-2.5 sm:p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                  <Icon size={16} className="text-emerald-300 mb-1" />
                  <p className="text-xs font-bold text-white">{item.title}</p>
                  <p className="text-[10.5px] text-slate-300">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="pt-1">
            <a
              href="#sustainability"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-white text-[#0b2d5b] hover:bg-[#c8963e] hover:text-white transition-all duration-300 text-xs sm:text-sm font-bold tracking-wide shadow-md group"
            >
              <span>Explore Sustainability Initiatives</span>
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SustainabilityBanner;
