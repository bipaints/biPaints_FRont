import React from 'react';
import { Eye, Target, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

/**
 * AboutValues Component
 * Vision, Mission & Values 3-pillar cards section
 * Matching bipaints.netlify.app/about (Section 5)
 */
function AboutValues() {
  const { t } = useLanguage();
  // Card text lives in src/locales (about.values.items), paired by index
  const foundation = [
    {
      icon: Eye,
      iconBg: '#fef9e7',
      iconColor: '#d97706',
    },
    {
      icon: Target,
      iconBg: '#fef3c7',
      iconColor: '#b45309',
    },
    {
      icon: ShieldCheck,
      iconBg: '#d1fae5',
      iconColor: '#047857',
    },
  ].map((item, i) => ({ ...item, ...t('about.values.items')[i] }));

  return (
    <section className="bg-[#f9fafb] py-8 sm:py-10 lg:py-12">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[140px] flex flex-col items-center gap-8 sm:gap-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2.5">
          <span className="font-inter uppercase font-semibold text-xs tracking-[3px] text-[#d97706]">
            {t('about.values.eyebrow')}
          </span>
          <h2 className="font-serif text-2xl sm:text-[28px] leading-tight text-[#1b1b2f] font-bold">
            {t('about.values.heading')}
          </h2>
          <span className="w-8 h-1 rounded-[2px] bg-[#d97706]" />
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-5">
          {foundation.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.iconBg}
                className="flex flex-col items-start bg-white h-full p-6 sm:p-7 rounded-2xl shadow-xs border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 gap-4"
                style={{
                  boxShadow: '0px 6px 12px rgba(15, 31, 61, 0.04)',
                }}
              >
                {/* Icon Badge */}
                <span
                  className="flex items-center justify-center shrink-0 w-11 h-11 rounded-xl"
                  style={{ background: item.iconBg }}
                >
                  <Icon size={24} color={item.iconColor} strokeWidth={2} />
                </span>

                {/* Pillar Title */}
                <h3 className="text-xl font-bold text-[#1b1b2f] font-serif m-0">
                  {item.title}
                </h3>

                {/* Pillar Description */}
                <p className="font-normal text-xs sm:text-sm leading-relaxed text-[#4b5563] m-0">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default AboutValues;
