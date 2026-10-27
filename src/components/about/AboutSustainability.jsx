import React from 'react';
import { Leaf } from 'lucide-react';

/**
 * AboutSustainability Component
 * Eco-factory image and Green Future sustainability commitments
 * Matching bipaints.netlify.app/about (Section 6)
 */
function AboutSustainability() {
  const pillars = [
    {
      title: 'Eco-Friendly Manufacturing',
      description: 'Formulating low-VOC water-based protective finishes.',
    },
    {
      title: 'Energy Efficiency',
      description: 'Solar-powered plants cutting overall operational emissions.',
    },
    {
      title: 'Responsible Sourcing',
      description: '100% trace-monitored raw inputs from certified ethical farms.',
    },
  ];

  return (
    <section className="bg-white py-8 sm:py-10 lg:py-12">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[140px] flex flex-col lg:flex-row items-center gap-8 lg:gap-14">
        
        {/* Left Column: Sustainable Eco-Factory Image */}
        <div className="relative w-full lg:flex-1 overflow-hidden shrink-0 h-[260px] sm:h-[320px] max-w-[631px] rounded-3xl border border-[#ede8df] shadow-md">
          <img
            src="/about-eco-factory.jpg"
            alt="BI Group sustainable manufacturing"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column: Narrative & Key Green Highlights */}
        <div className="flex flex-col items-start flex-1 space-y-4 sm:space-y-5">
          
          {/* Header Block */}
          <div className="flex flex-col items-start w-full gap-2.5">
            <div className="flex items-center gap-2">
              <span className="w-4 h-[2px] bg-[#d97706]" />
              <span className="font-inter uppercase font-bold text-xs tracking-[2px] text-[#d97706]">
                Green Future
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-[28px] leading-tight text-[#1b1b2f] font-bold">
              Commitment to Sustainability
            </h2>

            <span className="w-8 h-1 rounded-[2px] bg-[#d97706]" />
          </div>

          {/* Description Paragraph */}
          <p className="font-normal text-sm leading-relaxed text-[#4b5563]">
            At BI Group, we actively design our processes to minimize footprint. Our manufacturing campuses employ advanced wastewater recycling and green-energy infrastructure to construct self-reliant ecosystem units.
          </p>

          {/* 3 Pillars List */}
          <div className="flex flex-col items-start w-full gap-5">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex items-start w-full gap-4">
                <span className="flex items-center justify-center shrink-0 w-11 h-11 rounded-xl bg-[#fef9e7]">
                  <Leaf size={20} className="text-[#d97706]" />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-base text-[#1b1b2f]">
                    {pillar.title}
                  </span>
                  <span className="font-normal text-sm leading-5 text-[#4b5563]">
                    {pillar.description}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutSustainability;
