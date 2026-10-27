import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * AboutJourney Component
 * Recreates the split architectural showcase & timeline teaser (2012–2026)
 * Matching bipaints.netlify.app/about (Section 4)
 */
function AboutJourney() {
  return (
    <section id="journey" className="w-full py-6 lg:py-8 scroll-mt-14">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[140px]">
        <div className="flex flex-col lg:flex-row items-stretch rounded-2xl lg:rounded-none overflow-hidden min-h-[360px] lg:min-h-[420px] border border-gray-100 lg:border-none shadow-xs lg:shadow-none">
          
          {/* Left Column: Headquarters Photo */}
          <div className="relative w-full lg:flex-1 h-[240px] sm:h-[320px] lg:h-[420px] overflow-hidden">
            <img
              src="/about-journey-building.jpg"
              alt="BI Group headquarters building"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Journey Narrative & 2012-2026 Timeline Bar */}
          <div className="bg-white flex flex-1 flex-col justify-center px-6 sm:px-10 lg:px-14 py-6 sm:py-8 lg:py-10 space-y-5 sm:space-y-6">
            <div className="flex flex-col items-start w-full gap-3">
              <h2 className="uppercase font-serif text-xl sm:text-[24px] leading-tight tracking-[2px] text-[#0a1b3f] m-0 font-bold">
                Our Journey
              </h2>
              <p className="font-normal text-sm sm:text-[15px] leading-relaxed text-[#4b5563] m-0">
                Dive into the journey of how a commodity trading firm became one of the most dynamic industrial conglomerates in India.
              </p>
            </div>

            <div className="flex flex-col items-start w-full gap-4 pt-2">
              <div className="flex flex-col items-start w-full gap-2.5">
                {/* Timeline progress line with start and end points */}
                <div className="flex items-center w-full h-4">
                  <span className="shrink-0 w-3 h-3 rounded-full bg-[#d97706]" />
                  <span className="flex-1 h-[2px] bg-[#d97706]" />
                  <span className="shrink-0 w-3 h-3 rounded-full border-2 border-[#d97706] bg-white" />
                </div>
                {/* Timeline Year Labels */}
                <div className="flex items-center justify-between w-full">
                  <span className="font-bold text-sm text-[#d97706]">2012</span>
                  <span className="font-bold text-sm text-[#d97706]">2026</span>
                </div>
              </div>

              {/* View Timeline Action Button */}
              <div className="self-end pt-4">
                <a
                  href="#journey"
                  className="group inline-flex items-center rounded-full border-[1.5px] border-[#1b1b2f] hover:bg-[#1b1b2f] hover:text-white px-6 py-3 transition-all duration-300 gap-2.5 cursor-pointer shadow-xs hover:shadow-md"
                >
                  <span className="font-semibold text-sm text-[#1b1b2f] group-hover:text-white transition-colors">
                    View Timeline
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-[#1b1b2f] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white"
                  />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutJourney;
