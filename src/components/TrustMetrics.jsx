import React from 'react';
import { Award, Building, CheckCircle2, Shield } from 'lucide-react';

/**
 * TrustMetrics Component
 * Positioned directly below the hero section to build immediate
 * corporate credibility and trust with key operational statistics.
 */
function TrustMetrics() {
  const metrics = [
    {
      icon: Award,
      stat: '15+',
      label: 'Years of Excellence',
      description: 'Delivering trusted solutions across India',
    },
    {
      icon: Building,
      stat: '7+',
      label: 'Business Verticals',
      description: 'From paints to precision engineering',
    },
    {
      icon: Shield,
      stat: '1,000+',
      label: 'Projects Protected',
      description: 'Critical defence, marine & industrial assets',
    },
    {
      icon: CheckCircle2,
      stat: '100%',
      label: 'Quality Standards',
      description: 'Adhering to international ISO benchmarks',
    },
  ];

  return (
    <section id="investors" className="bg-slate-50 border-y border-slate-200/80 py-3 sm:py-3.5 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {metrics.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-2.5 sm:gap-3 p-1 transition-transform hover:-translate-y-0.5 duration-200"
              >
                <div className="w-10 h-10 sm:w-10.5 sm:h-10.5 rounded-lg bg-white border border-slate-200/60 shadow-xs flex items-center justify-center text-[#1a5276] flex-shrink-0">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-bold text-[#0f1f3d] font-serif tracking-tight">
                    {item.stat}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-gray-800">
                    {item.label}
                  </p>
                  <p className="hidden sm:block text-[11px] text-gray-500 leading-tight mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TrustMetrics;
