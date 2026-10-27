import React from 'react';
import { ArrowRight, Users, Briefcase, Sparkles } from 'lucide-react';

/**
 * CareerBanner Component ("Career at BI Group")
 * Senior UI/UX Redesign: High-contrast photo banner, career stats,
 * and clear employment call-to-action placed strategically before footer.
 */
function CareerBanner() {
  const perks = [
    { icon: Users, label: '500+ Team Members Nationwide' },
    { icon: Sparkles, label: 'Innovation-First Culture' },
    { icon: Briefcase, label: 'Multi-Industry Career Pathways' },
  ];

  return (
    <section id="careers" className="relative overflow-hidden w-full min-h-[290px] sm:min-h-[310px] lg:min-h-[330px] flex items-center scroll-mt-14">
      {/* Background Image */}
      <img
        src="/career-banner-2.jpg"
        alt="Career at BI Group"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(15, 31, 61, 0.92) 0%, rgba(15, 31, 61, 0.75) 45%, rgba(15, 31, 61, 0.2) 85%)',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full py-6 sm:py-7 lg:py-8">
        <div className="max-w-2xl text-white space-y-3 sm:space-y-3.5">
          
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10.5px] sm:text-xs font-bold uppercase tracking-widest text-amber-300">
            <Briefcase size={12} className="text-amber-400" />
            <span>Join Our Mission</span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif leading-[1.15]">
            Build Your Career at BI Group
          </h2>

          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans max-w-xl">
            We believe in people who are passionate, driven, and ready to make an enduring impact across India&apos;s
            fastest growing industrial and consumer sectors.
          </p>

          {/* Perks Row */}
          <div className="flex flex-wrap gap-2.5 pt-0.5">
            {perks.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-1.5 text-xs font-semibold text-slate-200 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
                  <Icon size={13} className="text-amber-300" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>

          <div className="pt-1 flex flex-wrap items-center gap-3">
            <a
              href="#careers"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-[#c8963e] hover:bg-[#b5832f] text-white transition-all duration-300 text-xs sm:text-sm font-bold tracking-wide shadow-md group cursor-pointer"
            >
              <span>Explore Current Openings</span>
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>

      {/* BI Paints Logo Watermark */}
      <div className="absolute hidden lg:block right-16 bottom-12 w-48 opacity-60 pointer-events-none filter brightness-200">
        <img
          src="/bi-paints-logo.svg"
          alt=""
          aria-hidden="true"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

export default CareerBanner;
