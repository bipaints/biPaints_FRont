import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

/**
 * SLIDES_DATA: Master data-driven configuration for Homepage Hero Slider.
 * 
 * To add, edit, remove, or reorder slides in the future:
 * Simply modify this array. Each slide accepts:
 * - id: unique number or string
 * - tag: Category pill / business vertical name (e.g., 'Bi Painting Solution')
 * - title: Main hero heading
 * - description: Detailed supporting description
 * - image: Path to image in /public folder (e.g., '/slider-painting.png')
 * - primaryCta: Text for the primary golden button (optional)
 * - primaryLink: Target anchor or URL (e.g., '#businesses', '#kitchens')
 * - secondaryCta: Text for secondary glassmorphic button (optional)
 * - secondaryLink: Target anchor or URL (optional)
 */
export const SLIDES_DATA = [
  {
    id: 1,
    tag: 'Bi Painting Solution',
    title: 'Elevating Spaces Through Color',
    description:
      'BI Group offers a premium range of interior and exterior paints, inspiring stunning color combinations and tailored design concepts for every home.',
    image: '/slider-painting.png',
    link: '#businesses',
  },
  {
    id: 2,
    tag: 'Bi Modular Kitchen',
    title: 'Smarter Kitchens. Inspired Living.',
    description:
      'Seamlessly blending modern aesthetics, intelligent storage, and everyday convenience, BI Group crafts bespoke kitchen and interior solutions tailored to your dream home.',
    image: '/slider-kitchen.png',
    link: '#kitchens',
  },
  {
    id: 3,
    tag: 'Bi Electronics',
    title: 'Empowering Connectivity. Elevating Everyday Comfort.',
    description:
      'Delivering advanced electronic components, efficient climate control systems, and cutting-edge smart technology designed to seamlessly transform modern homes and drive industrial automation.',
    image: '/slider-electronics.png',
    link: '#businesses',
  },
  {
    id: 4,
    tag: 'Bi Homeopathic',
    title: 'Pure Healing. Everyday Family Wellness.',
    description:
      'Combining time-tested natural remedies with holistic care, BI Group delivers safe, gentle, and effective homeopathic solutions trusted by families nationwide for lifelong health.',
    image: '/slider-homeopathic.png',
    link: '#businesses',
  },
  {
    id: 5,
    tag: 'Bi Agriculture',
    title: 'Cultivating Innovation. Sustaining Future Harvests.',
    description:
      'Empowering farmers with advanced techniques, cutting-edge technology, and eco-friendly practices designed to maximize crop yield, protect soil health, and drive sustainable agricultural growth.',
    image: '/slider-agriculture.png',
    link: '#sustainability',
  },
  {
    id: 6,
    tag: 'Bi Engineering',
    title: 'Precision Engineering. Powering Industrial Progress.',
    description:
      'Delivering high-performance engineering solutions, advanced industrial capabilities, and resilient infrastructure development engineered to drive innovation, optimize performance, and shape sustainable progress.',
    image: '/slider-engineering.jpg',
    link: '#businesses',
  },
];

const AUTOPLAY_INTERVAL_MS = 5000; // 5 seconds autoplay

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES_DATA.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES_DATA.length) % SLIDES_DATA.length);
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  // Autoplay timer with pause support and cleanup
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Keyboard navigation support (accessibility)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch gesture handlers for mobile devices
  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    setIsPaused(false);
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    // Minimum 50px delta to trigger swipe
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartXRef.current = null;
  };

  const active = SLIDES_DATA[currentSlide];

  return (
    <section
      id="home"
      role="region"
      aria-roledescription="carousel"
      aria-label="BI Group Business Verticals Showcase"
      className="relative w-full overflow-hidden pt-[70px] bg-slate-950 select-none h-[550px] sm:h-550px] md:h-[550px] lg:h-[550px] scroll-mt-[70px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 1. Background Image Carousel with Smooth Cross-Fade */}
      {SLIDES_DATA.map((slide, idx) => {
        const isCurrent = idx === currentSlide;
        return (
          <div
            key={slide.id}
            aria-hidden={!isCurrent}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover object-center transition-transform duration-7000 ease-out ${
                isCurrent ? 'scale-105' : 'scale-100'
              }`}
              loading={idx === 0 ? 'eager' : 'lazy'}
            />

            {/* Premium Dual-Gradient Overlay for Superior Contrast & Readability */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(90deg, rgba(15, 31, 61, 0.94) 0%, rgba(15, 31, 61, 0.82) 42%, rgba(15, 31, 61, 0.40) 78%, rgba(15, 31, 61, 0.20) 100%)',
              }}
            />

            {/* Mobile Vertical Gradient: Ensures optimal readability when stacked */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent sm:hidden" />

            {/* Bottom Vignette for seamless blend with TrustMetrics bar */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/70 to-transparent" />
          </div>
        );
      })}

      {/* 2. Slide Content Area (Synchronized with current slide) */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 flex items-center">
        <div className="max-w-xl lg:max-w-2xl text-white space-y-2.5 sm:space-y-3 pt-1 pb-8 sm:pb-0">
          
          {/* Business Vertical Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-amber-300 shadow-sm animate-fadeIn">
            <Sparkles size={13} className="text-amber-400" />
            <span>{active.tag}</span>
          </div>

          {/* Main Slide Heading with DM Serif Display (Shorter height and width) */}
          <h1
            key={`title-${active.id}`}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-normal leading-[1.2] tracking-tight font-dm-serif font-serif text-white drop-shadow-md max-w-lg lg:max-w-xl animate-fadeIn"
          >
            {active.title}
          </h1>

          {/* Slide Description Paragraph (Shorter height and width) */}
          <p
            key={`desc-${active.id}`}
            className="text-xs sm:text-sm md:text-[14.5px] text-slate-200/90 leading-normal sm:leading-relaxed font-sans max-w-md sm:max-w-lg lg:max-w-xl drop-shadow-sm animate-fadeIn"
          >
            {active.description}
          </p>

          {/* Call-To-Action Button: Single 'Read More' Button with Yellow Accent */}
          <div className="pt-1.5 sm:pt-2">
            <a
              href={active.link || '#businesses'}
              className="inline-flex items-center justify-center gap-2 px-[18px] py-[8px] h-[36px] rounded-full font-semibold text-[13px] sm:text-[14px] tracking-wider uppercase border border-[#c8963e] text-[#c8963e] hover:bg-[#c8963e] hover:text-[#0f1f3d] bg-black/25 backdrop-blur-sm shadow-md shadow-black/20 hover:shadow-lg hover:shadow-[#c8963e]/20 transition-all duration-300 ease-in-out group cursor-pointer hover:-translate-y-0.5 whitespace-nowrap text-center"
            >
              <span>Read More</span>
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1 text-[#c8963e] group-hover:text-[#0f1f3d]"
              />
            </a>
          </div>
        </div>
      </div>

      {/* 3. Previous Navigation Arrow Button */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#1a5276] text-white backdrop-blur-md border border-white/20 transition-all duration-200 shadow-xl cursor-pointer hover:scale-105 active:scale-95"
      >
        <ChevronLeft size={22} />
      </button>

      {/* 4. Next Navigation Arrow Button */}
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#1a5276] text-white backdrop-blur-md border border-white/20 transition-all duration-200 shadow-xl cursor-pointer hover:scale-105 active:scale-95"
      >
        <ChevronRight size={22} />
      </button>

      {/* 5. Pagination Indicators & Slide Progress */}
      <div className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 sm:gap-3 bg-black/40 backdrop-blur-md px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/15 shadow-lg">
        {SLIDES_DATA.map((s, idx) => {
          const isCurrent = idx === currentSlide;
          return (
            <button
              key={s.id}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}: ${s.tag}`}
              aria-current={isCurrent ? 'true' : 'false'}
              className="flex items-center cursor-pointer group py-1"
            >
              <span
                className={`block transition-all duration-300 rounded-full ${
                  isCurrent
                    ? 'w-6 sm:w-8 h-2 sm:h-2.5 bg-[#c8963e]'
                    : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/40 group-hover:bg-white/80'
                }`}
              />
            </button>
          );
        })}
        {/* Slide Counter (e.g., 01 / 06) */}
        <span className="text-[11px] sm:text-xs font-semibold text-white/80 pl-1.5 tabular-nums">
          0{currentSlide + 1} / 0{SLIDES_DATA.length}
        </span>
      </div>
    </section>
  );
}

export default Hero;
