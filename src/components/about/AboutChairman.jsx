import React from 'react';
import { Quote } from 'lucide-react';

/**
 * AboutChairman Component
 * Chairman's message, inspirational quote, and founder portrait
 * Matching bipaints.netlify.app/about (Section 3)
 */
function AboutChairman() {
  return (
    <section className="bg-[#f9fafb] py-6 sm:py-7 lg:py-8 scroll-mt-14">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[140px] flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-12">
        
        {/* Left Column: Quote & Founder Meta */}
        <div className="flex flex-col items-start flex-1 space-y-3 sm:space-y-4">
          <div>
            <Quote size={32} className="text-[#d97706]" strokeWidth={1.5} />
          </div>

          <p
            className="font-serif font-medium text-base sm:text-[18px] text-[#1b1b2f] m-0 leading-relaxed"
          >
            &quot;At BI Group, we believe that true growth comes from building with integrity, innovating with purpose, and serving with commitment. Our journey from a single paint company to a diversified industrial group reflects our unwavering dedication to India&apos;s progress.&quot;
          </p>

          <div className="flex flex-col gap-0.5 pt-0.5">
            <span className="font-bold text-base text-[#1b1b2f]">
              Bhikam Jain
            </span>
            <span className="font-inter uppercase font-semibold text-xs tracking-[1px] text-[#d97706]">
              Chairman &amp; Founder, BI Group
            </span>
          </div>
        </div>

        {/* Right Column: Founder Portrait */}
        <div className="relative w-full shrink-0 overflow-hidden max-w-[280px] h-[240px] sm:h-[280px] rounded-2xl border border-[#ede8df] shadow-md">
          <img
            src="/about-chairman.jpg"
            alt="Bhikam Jain, Chairman & Founder, BI Group"
            className="w-full h-full object-cover object-top"
          />
        </div>

      </div>
    </section>
  );
}

export default AboutChairman;
