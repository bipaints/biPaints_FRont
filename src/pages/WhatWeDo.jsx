import React, { useEffect, useState } from "react";
import { ArrowRight, ChevronRight, FlaskConical, Palette, Workflow } from "lucide-react";

// ==========================================
// 1. HERO SECTION
// ==========================================
const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden pt-[70px]" style={{ minHeight: "640px" }}>
      {/* Background Hero Image */}
      <div className="absolute inset-0">
        <img
          src="/wwd2-hero.jpg"
          alt="BI Group coating application"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Dark Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,31,58,0.55) 0%, rgba(11,31,58,0.75) 100%), radial-gradient(60% 60% at 50% 50%, rgba(11,31,58,0.55) 0%, rgba(11,31,58,0.25) 100%)",
        }}
      />

      {/* Hero Content */}
      <div className="relative flex flex-col items-center justify-center text-center mx-auto px-6 py-24 sm:py-28 max-w-[680px] min-h-[560px] gap-7">
        <h2 className="font-bold text-4xl sm:text-[40px] leading-[1.1] m-0 text-[#F4F4F6]">
          What we do
        </h2>
        <p className="font-normal text-base leading-[1.6] text-white/85">
          BI Group brings together paints, coatings, and surface solutions that transform and protect homes, businesses and infrastructure.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-1">
          <a
            href="/products"
            className="inline-flex items-center gap-2 bg-[#eda633] hover:bg-[#d9952a] transition-colors py-[13px] px-7 rounded-[24px]"
          >
            <span className="font-medium text-sm text-white">Explore Our Businesses</span>
            <ArrowRight size={15} color="#ffffff" />
          </a>
          <a
            href="/about"
            className="inline-flex items-center gap-2 py-3 px-7 rounded-[24px] border-[1.5px] border-white hover:bg-white/10 transition-colors"
          >
            <span className="font-medium text-sm text-white">Discover BI Group</span>
            <ArrowRight size={15} color="#ffffff" />
          </a>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 2. BUSINESS VERTICALS / CATEGORIES
// ==========================================
const BusinessCategories = () => {
  const categories = [
    {
      title: "Beautiful homes",
      image: "/wwd2-cat-homes.jpg",
      description:
        "BI Group has many different types of interior and exterior paint, creating colour combinations and design ideas for every home.",
    },
    {
      title: "Shipping",
      image: "/wwd2-cat-shipping.jpg",
      description:
        "We help to protect your vessels and increase your hull performance with our broad range of marine coatings.",
    },
    {
      title: "Energy",
      image: "/wwd2-cat-energy.jpg",
      description:
        "Powder and protective coatings to keep your onshore and offshore oil, gas, petrochemical, and refining facilities in the best shape for a long time.",
    },
    {
      title: "Natural wellness",
      image: "/wwd2-cat-wellness.jpg",
      description:
        "Natural and holistic homeopathic healthcare products, remedies, and wellness solutions trusted by families across India.",
    },
    {
      title: "Dream kitchens",
      image: "/wwd2-cat-kitchens.jpg",
      description:
        "Modern modular kitchen and interior solutions combining functionality, design, and everyday convenience for your dream home.",
    },
    {
      title: "Smart living",
      image: "/wwd2-cat-smartliving.jpg",
      description:
        "Innovative electronic components, air conditioning systems, and smart technology solutions for modern living and industrial automation.",
    },
  ];

  return (
    <section className="bg-white py-[100px]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-[140px] flex flex-col gap-14">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mx-auto gap-5 max-w-[910px]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-[2px] bg-[#c8963e]" />
            <span className="font-inter uppercase font-bold text-[13px] tracking-[3px] text-[#c8963e]">
              One Group. Multiple Possibilities.
            </span>
          </div>
          <h2 className="font-extrabold text-3xl sm:text-[40px] leading-[1.15] text-[#0a1b3f] m-0">
            Different businesses. One shared purpose.
          </h2>
          <p className="font-normal text-base leading-[1.6] text-[#20252b]">
            BI Group brings together businesses that help people build, improve and protect the spaces around them. From paints and coatings to modular interiors and specialized services, we combine quality, innovation and customer-focused solutions.
          </p>
        </div>

        {/* 6 Business Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col items-start bg-white overflow-hidden rounded-[16px] h-[380px] border border-[#e5e7eb] hover:shadow-lg transition-shadow"
            >
              {/* Card Image */}
              <div className="relative w-full shrink-0 overflow-hidden h-[240px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-col items-start w-full flex-1 p-5 gap-2.5">
                <div className="flex items-center justify-between w-full">
                  <h3 className="font-bold text-[18px] text-[#F4F4F6] m-0">{item.title}</h3>
                  <ArrowRight
                    size={16}
                    className="text-[#0b1f3a] transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
                <p className="font-normal text-[14px] leading-[1.5] text-[#20252b]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 3. OUR SOLUTIONS SECTION
// ==========================================
const OurSolutions = () => {
  const [activeTab, setActiveTab] = useState("For Homes");

  const tabs = ["For Homes", "For Businesses", "For Industries", "For Projects"];

  const solutions = [
    {
      title: "Interior Paints",
      description: "Vibrant, low-VOC finishes for luxury aesthetics and healthy home air quality.",
      image: "/wwd2-solution-0.jpg",
    },
    {
      title: "Exterior Paints",
      description: "All-weather extreme shield protection to prevent cracking and dampness.",
      image: "/wwd2-solution-1.jpg",
    },
    {
      title: "Waterproofing",
      description: "Multi-layered advanced dynamic protection systems for roof and concrete slabs.",
      image: "/wwd2-solution-2.jpg",
    },
    {
      title: "Modular Kitchens",
      description: "Bespoke high-end kitchen installations equipped with soft-close global hardware.",
      image: "/wwd2-solution-3.jpg",
    },
    {
      title: "Interior Solutions",
      description: "Integrated wardrobes, custom partitions, and modern architectural solutions.",
      image: "/wwd2-solution-4.jpg",
    },
  ];

  return (
    <section className="bg-[#f4f7fb] py-[100px]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-[140px] flex flex-col items-center gap-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center gap-5">
          <div className="flex items-center gap-2">
            <span className="w-3 h-[2px] bg-[#d9a441]" />
            <span className="font-inter uppercase font-bold text-[13px] tracking-[3px] text-[#d9a441]">
              Our Solutions
            </span>
          </div>
          <h2 className="font-bold text-3xl sm:text-[36px] leading-[1.15] tracking-[-1px] text-[#0b1f3a] m-0">
            From everyday spaces to demanding environments.
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center w-full gap-8 border-b border-[#eaeaea] pb-4">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className="flex flex-col items-center gap-3 pb-3 cursor-pointer outline-none transition-colors"
              >
                <span
                  className={`font-inter uppercase font-bold text-sm tracking-[2px] ${
                    isActive ? "text-[#d9a441]" : "text-[#20252b] hover:text-[#0b1f3a]"
                  }`}
                >
                  {tab}
                </span>
                {isActive && <span className="w-10 h-[2px] bg-[#d9a441]" />}
              </button>
            );
          })}
        </div>

        {/* 5 Solutions Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 w-full gap-6">
          {solutions.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col items-start bg-white overflow-hidden border border-[#eaeaea]"
            >
              <div className="relative w-full overflow-hidden h-[180px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col items-start w-full gap-2 p-5">
                <h3 className="font-bold text-[18px] text-[#0b1f3a] m-0">{item.title}</h3>
                <p className="font-normal text-[13px] leading-[1.5] text-[#20252b]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 4. FROM COLOUR TO COMPLETE SPACES (PROCESS)
// ==========================================
const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Paint",
      description: "Premium architectural coatings and colour collections.",
    },
    {
      number: "02",
      title: "Protect",
      description: "Engineered shielding for harsh weather and industrial corrosion.",
    },
    {
      number: "03",
      title: "Design",
      description: "Bespoke modular interior systems crafted around your lifestyle.",
    },
    {
      number: "04",
      title: "Build",
      description: "Precision components integrated seamlessly into modern spaces.",
    },
    {
      number: "05",
      title: "Support",
      description: "End-to-end consulting and execution for projects of any scale.",
    },
  ];

  return (
    <section className="bg-white py-[100px] border-b border-[#eaeaea]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-[140px] flex flex-col gap-16">
        {/* Section Heading & Subtitle */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end gap-6 lg:gap-16">
          <div className="flex flex-col items-start flex-1 gap-5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-[2px] bg-[#d9a441]" />
              <span className="font-inter uppercase font-bold text-[13px] tracking-[3px] text-[#d9a441]">
                From Colour To Complete Spaces
              </span>
            </div>
            <h2 className="font-extrabold text-2xl sm:text-[32px] leading-[1.15] text-[#0b1f3a] m-0">
              More than products. We create possibilities.
            </h2>
          </div>
          <p className="flex-1 font-normal text-base sm:text-[18px] leading-[1.6] text-[#555]">
            From protecting surfaces to creating beautiful living spaces, BI Group connects products, design and services to deliver complete solutions.
          </p>
        </div>

        {/* 5-Step Process with Connecting Dashed Line */}
        <div className="relative flex flex-col sm:flex-row items-center sm:items-start justify-between w-full gap-8">
          <span
            className="hidden sm:block absolute left-[10%] right-[10%] top-[52px] h-[1px]"
            style={{
              background: "repeating-linear-gradient(90deg, #d9a441 0 6px, transparent 6px 12px)",
            }}
          />
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center gap-6 flex-1"
            >
              {/* Circular Number Badge */}
              <span className="flex items-center justify-center shrink-0 bg-white w-[104px] h-[104px] rounded-full border-2 border-[#d9a441]">
                <span className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-[#0b1f3a]">
                  <span className="font-extrabold text-[20px] text-[#d9a441]">{step.number}</span>
                </span>
              </span>

              {/* Step Info */}
              <div className="flex flex-col items-center gap-2">
                <span className="font-inter uppercase font-extrabold text-[14px] tracking-[2px] text-[#0b1f3a]">
                  {step.title}
                </span>
                <p className="font-normal text-[14px] leading-[1.4] text-[#555] max-w-[220px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 5. INNOVATION SECTION
// ==========================================
const Innovation = () => {
  const cards = [
    {
      title: "Product Innovation",
      description:
        "Improving formulations, durability and performance. We develop specialized coatings engineered to withstand extreme climates and everyday wear.",
      icon: FlaskConical,
    },
    {
      title: "Design Innovation",
      description:
        "Creating modern colours, tactile materials and smart living solutions. Our interior systems integrate global technology with intuitive ergonomics.",
      icon: Palette,
    },
    {
      title: "Process Innovation",
      description:
        "Building smarter systems and more efficient ways of working. From computer-automated manufacturing to optimized supply chains.",
      icon: Workflow,
    },
  ];

  return (
    <section className="bg-[#0f1a2e] py-[100px]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-[140px] flex flex-col gap-16">
        {/* Section Heading */}
        <div className="flex flex-col items-start gap-5">
          <div className="flex items-center gap-2">
            <span className="w-3 h-[2px] bg-white" />
            <span className="font-inter uppercase font-bold text-[13px] tracking-[3px] text-white">
              Innovation
            </span>
          </div>
          <h2 className="font-extrabold text-3xl sm:text-[36px] leading-[1.15] text-white m-0">
            Better ideas create better solutions.
          </h2>
          <p className="font-normal text-base sm:text-[18px] leading-[1.6] text-white/70 max-w-[800px]">
            We continuously explore new technologies, materials, designs and processes to meet the changing needs of our customers.
          </p>
        </div>

        {/* 3 Innovation Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="flex flex-col items-start gap-7 p-8 sm:p-12 rounded-[8px] bg-[#122b4a] hover:bg-[#153459] transition-colors"
              >
                <div>
                  <Icon size={40} color="#d9a441" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col items-start gap-4">
                  <span className="font-inter uppercase font-extrabold text-[18px] tracking-[1px] text-[#d9a441]">
                    {card.title}
                  </span>
                  <p className="font-normal text-[15px] leading-[1.6] text-white/70">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 6. OUR PEOPLE SECTION
// ==========================================
const OurPeople = () => {
  return (
    <section className="bg-white py-[100px] border-b border-[#eaeaea]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-[140px] flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Column: Heading, Stats & Career Link */}
        <div className="flex flex-col items-start flex-1 gap-12">
          <div className="flex flex-col items-start gap-5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-[2px] bg-[#d9a441]" />
              <span className="font-inter uppercase font-semibold text-[13px] tracking-[3px] text-[#d9a441]">
                Our People
              </span>
            </div>
            <h2 className="font-extrabold text-3xl sm:text-[40px] leading-[1.15] text-[#0b1f3a] m-0">
              People behind the progress.
            </h2>
            <p className="font-normal text-[15px] leading-[1.6] text-[#555] max-w-[760px]">
              Our people bring together expertise, creativity and commitment across every part of the BI Group ecosystem — from engineering to interior design.
            </p>
          </div>

          {/* Key People Metrics */}
          <div className="flex flex-wrap w-full gap-8 sm:gap-10">
            <div className="flex flex-col items-start gap-2">
              <span className="font-extrabold text-[36px] sm:text-[40px] text-[#d19e33] leading-none">
                1,200+
              </span>
              <span className="font-inter uppercase font-semibold text-[12px] tracking-[1px] text-[#1a1f2e]">
                Dealers &amp; Partners
              </span>
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="font-extrabold text-[36px] sm:text-[40px] text-[#d19e33] leading-none">
                25+
              </span>
              <span className="font-inter uppercase font-semibold text-[12px] tracking-[1px] text-[#1a1f2e]">
                Locations
              </span>
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="font-extrabold text-[36px] sm:text-[40px] text-[#d19e33] leading-none">
                35+
              </span>
              <span className="font-inter uppercase font-semibold text-[12px] tracking-[1px] text-[#1a1f2e]">
                Years of Experience
              </span>
            </div>
          </div>

          {/* CTA Link */}
          <a
            href="/careers"
            className="inline-flex items-center gap-3 bg-[#0b1f3a] hover:bg-[#122b4a] transition-colors py-4 px-8 rounded-[4px]"
          >
            <span className="font-inter uppercase font-semibold text-[14px] tracking-[1px] text-white">
              Life at BI Group
            </span>
            <ArrowRight size={16} color="#ffffff" />
          </a>
        </div>

        {/* Right Column: Workplace Photography */}
        <div className="group relative w-full flex-1 overflow-hidden h-[400px] sm:h-[560px] rounded-[8px]">
          <img
            src="/wwd2-workplace.jpg"
            alt="BI Group team on site"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 7. OUR PRESENCE (INDIA DISTRIBUTION)
// ==========================================
const OurPresence = () => {
  const distributionStats = [
    { label: "Corporate Office", count: "1" },
    { label: "Manufacturing", count: "4" },
    { label: "Branches", count: "25+" },
    { label: "Dealers & Partners", count: "1,200+" },
    { label: "Distributors", count: "80+" },
    { label: "Service Network", count: "National" },
  ];

  return (
    <section className="bg-[#f4f7fb] py-[100px]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-[140px] flex flex-col gap-16">
        {/* Section Heading & Subtitle */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end gap-8 lg:gap-20">
          <div className="flex flex-col items-start flex-1 gap-5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-[2px] bg-[#d9a441]" />
              <span className="font-inter uppercase font-bold text-[13px] tracking-[3px] text-[#d9a441]">
                Our Presence
              </span>
            </div>
            <h2 className="font-extrabold text-3xl sm:text-[36px] leading-[1.15] text-[#0b1f3a] m-0">
              Growing across India.
            </h2>
          </div>
          <p className="flex-1 font-normal text-base sm:text-[18px] leading-[1.6] text-[#555]">
            From local markets to a growing national footprint, BI Group continues to expand its presence across India, bringing world-class products closer to you.
          </p>
        </div>

        {/* Two-Column Presence Layout: India Map & Distribution Numbers */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* India Presence Map */}
          <div className="relative w-full flex-1 overflow-hidden bg-white h-[400px] sm:h-[500px] rounded-[8px] border border-[#eaeaea] flex items-center justify-center p-8">
            <img
              src="/wwd-india-map.jpg"
              alt="BI Group presence across India"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Distribution Stats Card */}
          <div className="flex flex-col items-start w-full lg:w-[420px] shrink-0 gap-6 p-8 sm:p-10 rounded-[8px] bg-[#0b1f3a]">
            <span className="font-inter uppercase font-extrabold text-[18px] text-[#d9a441]">
              Our Distribution
            </span>
            <div className="flex flex-col w-full">
              {distributionStats.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between w-full py-3 border-b border-white/10"
                >
                  <span className="font-inter uppercase font-bold text-[13px] tracking-[1px] text-white">
                    {item.label}
                  </span>
                  <span className="font-extrabold text-[18px] text-[#d9a441]">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Locations CTA Link */}
        <div className="flex justify-center w-full">
          <a
            href="/investors"
            className="inline-flex items-center gap-3 bg-[#d9a441] hover:bg-[#c8963e] transition-colors py-4 px-8 rounded-[4px]"
          >
            <span className="font-inter uppercase font-bold text-[14px] tracking-[1px] text-[#0b1f3a]">
              Explore Our Locations
            </span>
            <ChevronRight size={16} color="#0b1f3a" />
          </a>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 8. FINAL CTA SECTION
// ==========================================
const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden py-[100px] sm:py-[140px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/wwd2-final-cta.jpg"
          alt="BI Group modern project"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0b1f3a]/90" />

      {/* CTA Box Content */}
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-[140px] flex flex-col items-center text-center gap-8">
        <div className="flex items-center gap-2">
          <span className="w-3 h-[2px] bg-white" />
          <span className="font-inter uppercase font-bold text-[13px] tracking-[3px] text-white">
            Partner With Us
          </span>
        </div>
        <h2 className="font-extrabold text-3xl sm:text-[56px] leading-[1.15] text-white m-0 max-w-[800px]">
          Let&apos;s build what&apos;s next.
        </h2>
        <p className="font-normal text-base sm:text-[18px] leading-[1.55] text-white/70 max-w-[700px]">
          Whether you&apos;re looking for the right solution, planning a project or exploring a partnership, BI Group is ready to work with you.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-2">
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#d9a441] hover:bg-[#c8963e] transition-colors py-4 px-8 rounded-[4px]"
          >
            <span className="font-inter uppercase font-bold text-[14px] tracking-[1px] text-[#0b1f3a]">
              Talk to BI Group
            </span>
            <ChevronRight size={16} color="#0b1f3a" />
          </a>
          <a
            href="/products"
            className="inline-flex items-center gap-3 bg-transparent hover:bg-white/10 transition-colors py-4 px-8 rounded-[4px] border border-white"
          >
            <span className="font-inter uppercase font-bold text-[14px] tracking-[1px] text-white">
              Explore Our Businesses
            </span>
            <ChevronRight size={16} color="#ffffff" />
          </a>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// MAIN WHAT WE DO PAGE COMPONENT
// ==========================================
const WhatWeDo = () => {
  useEffect(() => {
    // Set page title matching reference site
    document.title = "What We Do | BI Group";
    // Ensure smooth scroll to top on page load
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full bg-white text-[#F4F4F6]">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Business Categories */}
      <BusinessCategories />

      {/* 3. Solutions */}
      <OurSolutions />

      {/* 4. Process (From Colour to Complete Spaces) */}
      <ProcessSection />

      {/* 5. Innovation */}
      <Innovation />

      {/* 6. People behind progress */}
      <OurPeople />

      {/* 7. Growing across India (Presence) */}
      <OurPresence />

      {/* 8. Final CTA Banner */}
      <FinalCTA />
    </div>
  );
};

export default WhatWeDo;

