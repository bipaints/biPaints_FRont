import React from 'react';
import { ArrowRight, PaintBucket, ShieldCheck, Building2 } from 'lucide-react';

/**
 * FeatureCards Component ("Explore Our Solutions")
 * Senior UI/UX Redesign: Card elevation, subtle border glow,
 * category badges, and interactive hover feedback.
 */
function FeatureCards() {
  const cards = [
    {
      icon: PaintBucket,
      tag: 'Product Catalog',
      title: 'Explore Our Coatings',
      description:
        "Browse BI Group's comprehensive range of industrial, automotive, and architectural decorative coatings. Find the right protective formulation for your exact substrate.",
      linkText: 'Find the right coating',
      href: '#products',
      accentColor: 'from-blue-500/10 to-transparent',
    },
    {
      icon: ShieldCheck,
      tag: 'Expert Advisory',
      title: 'Custom Coating Solutions',
      description:
        'Get tailored high-performance coating systems built for severe chemical, thermal, and marine exposure. Our technical advisors match the optimal chemistry to your project.',
      linkText: 'Request a consultation',
      href: '#contact',
      accentColor: 'from-amber-500/10 to-transparent',
    },
    {
      icon: Building2,
      tag: 'Group Profile',
      title: 'Discover BI Group',
      description:
        'Your integrated multi-sector resource for coatings, modular lifestyle kitchens, HVAC appliances, and heavy structural engineering services across India.',
      linkText: 'Learn more about group',
      href: '#about',
      accentColor: 'from-emerald-500/10 to-transparent',
    },
  ];

  return (
    <section id="ecommerce" className="bg-slate-100/70 py-6 sm:py-7 lg:py-8 relative scroll-mt-14">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-5 sm:space-y-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-1.5">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#c8963e]">
            Explore Our Solutions
          </p>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0f1f3d] font-serif">
            From Products to Personalised Systems
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
            Tailored engineering systems and architectural coatings engineered for superior durability and visual brilliance.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-5 sm:p-5.5 lg:p-6 flex flex-col justify-between shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-200/80 group relative overflow-hidden"
              >
                {/* Subtle Top Gradient Accent */}
                <div
                  className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${card.accentColor} group-hover:h-2 transition-all duration-300`}
                />

                <div className="space-y-3.5">
                  {/* Tag & Icon Row */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-[#1a5276]/10 flex items-center justify-center text-[#1a5276] group-hover:bg-[#1a5276] group-hover:text-white transition-all duration-300 shadow-xs">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      {card.tag}
                    </span>
                  </div>

                  {/* Title & Body */}
                  <div className="space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0f1f3d] font-serif group-hover:text-[#1a5276] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed font-sans">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-3.5 border-t border-slate-100 mt-4">
                  <a
                    href={card.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1a5276] group-hover:text-[#c8963e] transition-colors"
                  >
                    <span>{card.linkText}</span>
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeatureCards;
