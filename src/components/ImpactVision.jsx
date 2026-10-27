import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

/**
 * ImpactVision Component ("Creating Excellence")
 * Senior UI/UX Polish: Enhanced typography, feature badges, and the original
 * skyline artwork illustrating the group's engineering reach.
 */
function ImpactVision() {
  const highlights = [
    'International Quality Standards',
    'R&D Driven Product Engineering',
    'Pan-India Distribution Network',
  ];

  return (
    <section id="about" className="bg-gradient-to-b from-white via-slate-50/60 to-white py-6 sm:py-7 lg:py-8 overflow-hidden relative scroll-mt-14">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-0 sm:min-h-[220px]">
          
          {/* Left Text Column */}
          <div className="flex flex-col items-start space-y-3 sm:space-y-3.5 max-w-2xl z-10">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[#c8963e]" />
                <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#c8963e]">
                  Creating Excellence
                </p>
              </div>
              <h2 className="text-xl sm:text-3xl lg:text-[32px] font-bold text-[#172645] leading-snug font-serif">
                From Paints to Engineering — Multiple Businesses, One Vision of Excellence
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans max-w-xl">
              At BI Group, our mission is to develop world-class protective coatings, modular living interiors,
              and precision engineering services that adhere rigorously to global quality benchmarks.
            </p>

            {/* Value Highlights */}
            <div className="flex flex-wrap gap-3 pt-0.5">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                  <CheckCircle2 size={15} className="text-[#1a5276] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-1">
              <a
                href="/about"
                className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full border border-[#1b1b2f] text-[#1b1b2f] hover:bg-[#1a5276] hover:border-[#1a5276] hover:text-white transition-all duration-300 text-xs sm:text-sm font-semibold tracking-wider uppercase cursor-pointer"
              >
                <span>Read More About Us</span>
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* Right Skyline Graphic (Original Asset) */}
          <div className="hidden lg:block absolute right-0 -bottom-4 w-[44vw] max-w-[720px] pointer-events-none opacity-85">
            <img
              src="/impact-vision-skyline.png"
              alt="Engineering and Infrastructure Skyline"
              className="w-full h-auto object-contain object-right"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImpactVision;
