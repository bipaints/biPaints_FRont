import React, { useState, useEffect, useRef } from 'react';
import { Award, Briefcase, Users, MapPin } from 'lucide-react';

/**
 * AnimatedCounter component
 * Increments number smoothly from 0 to target value upon entering viewport.
 */
function AnimatedCounter({ value, suffix = '', duration = 1.4, className = '', style = {} }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    let startTime;
    let animationFrame;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Ease-out cubic curve matching reference
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasAnimated, value, duration]);

  return (
    <span ref={ref} className={className} style={style}>
      {count}{suffix}
    </span>
  );
}

/**
 * AboutCompany Component
 * Recreates the "Who We Are" narrative, photo collage, floating badge,
 * and 4 operational metrics cards from bipaints.netlify.app/about.
 */
function AboutCompany() {
  const stats = [
    {
      icon: Award,
      value: 14,
      suffix: '+',
      label: 'Years of Excellence',
      description: 'Years of building trust and delivering results across industries.',
    },
    {
      icon: Briefcase,
      value: 10,
      suffix: '',
      label: 'Business Verticals',
      description: 'Diverse sectors served with balanced solutions and expertise.',
    },
    {
      icon: Users,
      value: 500,
      suffix: '+',
      label: 'Dealer Network',
      description: 'Strong partnerships that power distribution and local support.',
    },
    {
      icon: MapPin,
      value: 20,
      suffix: '+',
      label: 'States Presence',
      description: 'Nationwide reach with localized operations and consistent delivery.',
    },
  ];

  return (
    <section id="who-we-are" className="bg-white py-6 sm:py-7 lg:py-8 scroll-mt-14">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[140px] flex flex-col gap-6 sm:gap-8">
        
        {/* Top Row: Narrative Story & Overlapping Layered Image Collage */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-14">
          
          {/* Left Column: Who We Are Story */}
          <div className="flex flex-col items-start flex-1 space-y-4">
            {/* Section Tag */}
            <div className="flex items-center gap-2">
              <span className="w-4 h-[2px] bg-[#d97706]" />
              <span className="font-inter uppercase font-bold text-[13px] tracking-[3px] text-[#d97706]">
                Who We Are
              </span>
            </div>

            {/* Leading Heading Statement */}
            <p className="font-serif font-bold text-lg sm:text-[20px] leading-snug text-[#1b1b2f]">
              Founded in 2012, BI Group is a diversified Indian industrial conglomerate built on a legacy of trust, quality, and commitment.
            </p>

            {/* Paragraph 1 */}
            <p className="text-sm leading-relaxed text-[#4b5563]">
              What began as a pioneering protective coatings company has rapidly transformed into a multi-business enterprise spanning paints, home solutions, modular kitchens, sustainable agriculture, holistic homeopathy, electronics, and engineering divisions. Our core philosophy bridges deep industrial precision with consumer-centric innovation, ensuring every product delivers exceptional value across our e-commerce platforms and retail networks.
            </p>

            {/* Paragraph 2 */}
            <p className="text-sm leading-relaxed text-[#4b5563]">
              With our national footprint growing across 20+ states, we take pride in aligning our corporate milestones directly with India&apos;s infrastructure development and self-reliance goals.
            </p>
          </div>

          {/* Right Column: Rotated Photo Showcase with Floating 14+ Badge */}
          <div className="relative w-full shrink-0 max-w-[720px] h-[280px] sm:h-[360px]">
            {/* Main Primary Image */}
            <div
              className="absolute overflow-hidden shadow-xl transition-transform duration-500 hover:rotate-0"
              style={{
                left: 0,
                top: '24px',
                width: '63%',
                height: '82%',
                borderRadius: '16px',
                transform: 'rotate(-0.67deg)',
              }}
            >
              <img
                src="/about-overview-main.jpg"
                alt="BI Group logistics and operations"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Secondary Layered Photo (Hidden on narrow mobile, visible from sm) */}
            <div
              className="absolute overflow-hidden hidden sm:block shadow-xl transition-transform duration-500 hover:rotate-0"
              style={{
                left: '53%',
                top: '56%',
                width: '41%',
                height: '41%',
                borderRadius: '14px',
                transform: 'rotate(1.33deg)',
              }}
            >
              <img
                src="/about-overview-secondary.jpg"
                alt="BI Group leadership team in a meeting"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Central Stat Badge */}
            <div
              className="hidden sm:flex absolute flex-col items-center justify-center bg-white text-center z-10 transition-transform duration-300 hover:scale-105"
              style={{
                left: '47%',
                top: '53%',
                width: '160px',
                padding: '16px 20px',
                borderRadius: '12px',
                gap: '4px',
                boxShadow: '0px 8px 12px rgba(0,0,0,0.12)',
              }}
            >
              <AnimatedCounter
                value={14}
                suffix="+"
                duration={1.6}
                style={{
                  fontWeight: 700,
                  fontSize: '40px',
                  lineHeight: 1,
                  color: '#d97706',
                }}
              />
              <span style={{ fontWeight: 500, fontSize: '13px', color: '#6b7280' }}>
                Years Of Excellence
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Row: 4 Column Operational Metrics Cards */}
        <div id="achievements" className="flex flex-col sm:flex-row items-start w-full pt-4 scroll-mt-14 relative">
          <span id="states" className="absolute top-0 -mt-14 pointer-events-none" />
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex flex-col items-start flex-1 w-full py-6 sm:py-0 px-4 sm:px-6 lg:px-10 ${
                  idx > 0 ? 'sm:border-l border-amber-500/30' : ''
                }`}
              >
                <span className="inline-block mb-3">
                  <Icon size={36} className="text-[#1b1b2f]" strokeWidth={1.5} />
                </span>
                
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  duration={1.6}
                  style={{
                    fontFamily: 'var(--font-pt-serif), Georgia, serif',
                    fontWeight: 700,
                    fontSize: '48px',
                    color: '#1b1b2f',
                    lineHeight: 1.1,
                  }}
                />

                <div className="flex flex-col items-start mt-3 gap-2">
                  <span className="font-inter uppercase font-bold text-[15px] text-[#d97706]">
                    {stat.label}
                  </span>
                  <p className="text-[15px] leading-[1.6] text-[#4b5563] m-0">
                    {stat.description}
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

export default AboutCompany;
