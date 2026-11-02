import React, { useState } from "react";
import {
  ChevronDown,
  Warehouse,
  Factory,
  Globe,
  CircleCheck,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

// ========================================================
// DATA: Global Footprint Locations and Routes
// ========================================================
const LOCATIONS = [
  {
    id: "surat",
    name: "Surat",
    country: "India",
    xPct: 61.2,
    yPct: 43.0,
    items: [
      {
        icon: "office",
        type: "Office",
        title: "Surat, India",
        description:
          "Our head office coordinates business operations, quality standards and growth across every BI Group market.",
      },
      {
        icon: "manufacturing",
        type: "Manufacturing",
        title: "Surat, India",
        description:
          "Our core manufacturing base, supporting consistent quality and reliable supply across markets we serve.",
      },
    ],
  },
  {
    id: "export-dubai",
    name: "Dubai",
    country: "UAE",
    xPct: 41.5,
    yPct: 23.2,
    curve: "M 856.8 332.39 Q 718.9 186.47 581 179.34",
    items: [
      {
        icon: "export",
        type: "Export Market",
        title: "Dubai, UAE",
        description:
          "Serving customers across the Middle East through our growing export network.",
      },
    ],
  },
  {
    id: "export-thailand",
    name: "Thailand",
    country: "Thailand",
    xPct: 76.6,
    yPct: 65.3,
    curve: "M 856.8 332.39 Q 964.6 357.85 1072.4 504.77",
    items: [
      {
        icon: "export",
        type: "Export Market",
        title: "Thailand, Thailand",
        description:
          "A growing export market for BI Paints solutions in Southeast Asia.",
      },
    ],
  },
  {
    id: "export-bangladesh",
    name: "Bangladesh",
    country: "Bangladesh",
    xPct: 79.1,
    yPct: 55.4,
    curve: "M 856.8 332.39 Q 982.1 321.29 1107.4 428.24",
    items: [
      {
        icon: "export",
        type: "Export Market",
        title: "Bangladesh, Bangladesh",
        description:
          "Serving customers in Bangladesh through our expanding distribution partnerships.",
      },
    ],
  },
  {
    id: "export-srilanka",
    name: "Sri Lanka",
    country: "Sri Lanka",
    xPct: 72.2,
    yPct: 70.2,
    curve: "M 856.8 332.39 Q 933.8 380.18 1010.8 542.65",
    items: [
      {
        icon: "export",
        type: "Export Market",
        title: "Sri Lanka, Sri Lanka",
        description:
          "Delivering trusted paint and coating solutions to customers across Sri Lanka.",
      },
    ],
  },
  {
    id: "export-maldives",
    name: "Maldives",
    country: "Maldives",
    xPct: 89.5,
    yPct: 35.2,
    curve: "M 856.8 332.39 Q 1054.9 214.08 1253 272.10",
    items: [
      {
        icon: "export",
        type: "Export Market",
        title: "Maldives, Maldives",
        description:
          "Extending our export network to customers across the Maldives.",
      },
    ],
  },
];

// ========================================================
// 1. HERO SECTION
// ========================================================
const Hero = () => {
  return (
    <section
      className="relative w-full overflow-hidden flex flex-col items-center justify-center"
      style={{ minHeight: "680px" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/wwa2-hero.jpg"
          alt="BI Group presence across markets"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(13, 20, 38, 0.55)" }}
      />

      {/* Hero Content */}
      <div
        className="relative flex flex-col items-center text-center px-6"
        style={{ gap: "20px", paddingTop: "140px", paddingBottom: "140px" }}
      >
        <h1
          className="m-0 text-white font-bold"
          style={{ fontSize: "40px", lineHeight: "1.15" }}
        >
          Where We Are
        </h1>

        <p
          className="font-light max-w-2xl text-white/90"
          style={{ fontSize: "18px", lineHeight: "1.35" }}
        >
          Growing our presence. Connecting markets. Delivering solutions.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap items-center justify-center"
          style={{ gap: "16px", paddingTop: "16px" }}
        >
          <a
            href="#global-footprint"
            className="inline-flex items-center justify-center font-inter uppercase transition-all duration-200 hover:opacity-90"
            style={{
              background: "rgb(237, 166, 51)",
              padding: "14px 28px",
              borderRadius: "24px",
              fontWeight: 400,
              fontSize: "12px",
              letterSpacing: "1px",
              color: "#ffffff",
            }}
          >
            Explore Our Presence
          </a>

          <a
            href="/contact"
            className="inline-flex items-center justify-center font-inter uppercase transition-all duration-200 hover:bg-white/10"
            style={{
              padding: "14px 28px",
              borderRadius: "24px",
              border: "1.5px solid #ffffff",
              fontWeight: 400,
              fontSize: "12px",
              letterSpacing: "1px",
              color: "#ffffff",
            }}
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none animate-bounce"
        style={{ bottom: "28px" }}
      >
        <ChevronDown size={22} color="rgba(255, 255, 255, 0.75)" />
      </div>
    </section>
  );
};

// ========================================================
// 2. GLOBAL FOOTPRINT SECTION
// ========================================================
const GlobalFootprint = () => {
  const [selectedKey, setSelectedKey] = useState("surat");

  const activeLocation =
    LOCATIONS.find((loc) => loc.id === selectedKey) || LOCATIONS[0];

  return (
    <section
      id="global-footprint"
      className="bg-white"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <div className="px-6 sm:px-10 lg:px-35 flex flex-col" style={{ gap: "56px" }}>
        {/* Section Heading */}
        <div
          className="flex flex-col items-center text-center mx-auto"
          style={{ gap: "20px", maxWidth: "720px" }}
        >
          <div className="flex items-center" style={{ gap: "8px" }}>
            <span style={{ width: "12px", height: "2px", background: "#d9a441" }} />
            <span
              className="font-inter uppercase"
              style={{
                fontWeight: 700,
                fontSize: "13px",
                letterSpacing: "3px",
                color: "#d9a441",
              }}
            >
              Global Footprint
            </span>
          </div>

          <h2
            className="m-0"
            style={{
              fontWeight: 800,
              fontSize: "36px",
              lineHeight: "1.15",
              color: "#0b1f3a",
            }}
          >
            Our Global Footprint
          </h2>

          <p
            style={{
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#555",
            }}
          >
            From our home in India to growing international markets, BI Group is
            building a connected network that brings quality products and solutions
            closer to customers.
          </p>
        </div>

        {/* Map and Info Card */}
        <div className="flex flex-col lg:flex-row" style={{ gap: "40px" }}>
          {/* Map Graphic Container */}
          <div
            className="relative w-full flex-1 overflow-hidden bg-white"
            style={{
              aspectRatio: "1400 / 773",
              borderRadius: "8px",
              border: "1px solid #eaeaea",
            }}
          >
            <img
              src="/global-footprint-map.png"
              alt="BI Group global footprint map"
              className="w-full h-full object-cover"
            />

            {/* Connecting Arc Curves */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 1400 773"
              aria-hidden="true"
            >
              {LOCATIONS.filter((loc) => loc.curve).map((loc) => {
                const isActive = loc.id === selectedKey;
                return (
                  <path
                    key={loc.id}
                    d={loc.curve}
                    fill="none"
                    stroke="#d9a441"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="8 8"
                    vectorEffect="non-scaling-stroke"
                    style={{
                      strokeOpacity: isActive ? 0.95 : 0.28,
                      filter: isActive
                        ? "drop-shadow(0 0 4px rgba(217,164,65,0.65))"
                        : "none",
                      transition: "stroke-opacity 0.4s ease, filter 0.4s ease",
                    }}
                  />
                );
              })}
            </svg>

            {/* Interactive Location Pins */}
            {LOCATIONS.map((loc) => {
              const isSelected = loc.id === selectedKey;
              return (
                <button
                  key={loc.id}
                  type="button"
                  aria-label={`Show details for ${loc.name}`}
                  onClick={() => setSelectedKey(loc.id)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-125"
                  style={{
                    left: `${loc.xPct}%`,
                    top: `${loc.yPct}%`,
                    width: "30px",
                    height: "30px",
                  }}
                >
                  <span
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: isSelected ? "18px" : "12px",
                      height: isSelected ? "18px" : "12px",
                      background: isSelected ? "#d9a441" : "#0b1f3a",
                      border: "2px solid #ffffff",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
                    }}
                  />
                </button>
              );
            })}
          </div>

          {/* Location Details Card */}
          <div
            className="flex flex-col w-full lg:w-[360px] shrink-0 transition-all duration-300"
            style={{
              gap: "20px",
              padding: "32px",
              borderRadius: "8px",
              background: "#0b1f3a",
            }}
          >
            {activeLocation.items.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col"
                style={{
                  gap: "12px",
                  paddingTop: idx > 0 ? "20px" : "0",
                  borderTop:
                    idx > 0 ? "1px solid rgba(255, 255, 255, 0.12)" : "none",
                }}
              >
                {/* Category Header */}
                <div className="flex items-center" style={{ gap: "10px" }}>
                  {item.icon === "office" && (
                    <Warehouse size={20} color="#d9a441" strokeWidth={1.75} />
                  )}
                  {item.icon === "manufacturing" && (
                    <Factory size={20} color="#d9a441" strokeWidth={1.75} />
                  )}
                  {item.icon === "export" && (
                    <Globe size={20} color="#d9a441" strokeWidth={1.75} />
                  )}
                  <span
                    className="font-inter uppercase"
                    style={{
                      fontWeight: 700,
                      fontSize: "11px",
                      letterSpacing: "1.5px",
                      color: "#d9a441",
                    }}
                  >
                    {item.type}
                  </span>
                </div>

                {/* Location Title */}
                <h3
                  className="m-0 text-white"
                  style={{ fontWeight: 800, fontSize: "22px" }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="m-0"
                  style={{
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: "rgba(255, 255, 255, 0.75)",
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ========================================================
// 3. INDIA PRESENCE SECTION
// ========================================================
const IndiaPresence = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <section
      style={{
        background: "#f4f7fb",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <div className="px-6 sm:px-10 lg:px-35 flex flex-col" style={{ gap: "56px" }}>
        {/* Section Heading */}
        <div
          className="flex flex-col items-start"
          style={{ gap: "20px", maxWidth: "720px" }}
        >
          <div className="flex items-center" style={{ gap: "8px" }}>
            <span style={{ width: "12px", height: "2px", background: "#d9a441" }} />
            <span
              className="font-inter uppercase"
              style={{
                fontWeight: 700,
                fontSize: "13px",
                letterSpacing: "3px",
                color: "#d9a441",
              }}
            >
              India Presence
            </span>
          </div>

          <h2
            className="m-0"
            style={{
              fontWeight: 800,
              fontSize: "36px",
              lineHeight: "1.15",
              color: "#0b1f3a",
            }}
          >
            Strong roots. Wider reach.
          </h2>

          <p
            style={{
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#555",
            }}
          >
            With a strong foundation in India, BI Group continues to expand its
            market presence through manufacturing capabilities, distribution
            networks and strategic partnerships.
          </p>
        </div>

        {/* Content Columns */}
        <div className="flex flex-col lg:flex-row items-center" style={{ gap: "40px" }}>
          {/* India Map Graphic */}
          <div
            className="relative w-full flex-1 overflow-hidden bg-white"
            style={{
              height: "440px",
              borderRadius: "8px",
              border: "1px solid #eaeaea",
            }}
          >
            <img
              src="/wwd-india-map.jpg"
              alt="BI Group presence across India"
              className="w-full h-full object-contain p-6"
            />

            {/* Surat Pin Marker */}
            <button
              type="button"
              aria-label="Surat, Gujarat — Head Office & Manufacturing"
              onClick={() => setShowTooltip((prev) => !prev)}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer"
              style={{
                left: "41.5%",
                top: "52.5%",
                width: "34px",
                height: "34px",
              }}
            >
              <span
                className="rounded-full animate-pulse"
                style={{
                  width: "16px",
                  height: "16px",
                  background: "#d9a441",
                  border: "2px solid #0b1f3a",
                }}
              />
            </button>

            {/* Tooltip Popup */}
            {showTooltip && (
              <div
                className="absolute bg-white shadow-lg pointer-events-none transition-opacity duration-200"
                style={{
                  left: "41.5%",
                  top: "52.5%",
                  transform: "translate(-50%, -140%)",
                  width: "220px",
                  padding: "14px",
                  borderRadius: "6px",
                  border: "1px solid #eaeaea",
                  boxShadow: "0 12px 24px -8px rgba(15, 31, 61, 0.25)",
                }}
              >
                <span
                  className="font-inter uppercase block"
                  style={{
                    fontWeight: 800,
                    fontSize: "12px",
                    letterSpacing: "1px",
                    color: "#0b1f3a",
                  }}
                >
                  Surat, Gujarat
                </span>
                <span
                  className="block"
                  style={{ fontSize: "12px", color: "#777", marginTop: "4px" }}
                >
                  Head Office & Manufacturing
                </span>
              </div>
            )}
          </div>

          {/* Regional Information Details */}
          <div
            className="flex flex-col items-start flex-1 w-full"
            style={{ gap: "28px" }}
          >
            {/* Manufacturing & Head Office List */}
            <div className="flex flex-col items-start" style={{ gap: "12px" }}>
              <span
                className="font-inter uppercase"
                style={{
                  fontWeight: 800,
                  fontSize: "13px",
                  letterSpacing: "1.5px",
                  color: "#0b1f3a",
                }}
              >
                Manufacturing & Head Office
              </span>

              <div className="flex items-center" style={{ gap: "10px" }}>
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "3px",
                    background: "#d9a441",
                  }}
                />
                <span style={{ fontSize: "15px", color: "#333" }}>
                  Surat, Gujarat — Head Office
                </span>
              </div>

              <div className="flex items-center" style={{ gap: "10px" }}>
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "3px",
                    background: "#d9a441",
                  }}
                />
                <span style={{ fontSize: "15px", color: "#333" }}>
                  Surat, Gujarat — Manufacturing Facility
                </span>
              </div>
            </div>

            {/* States Covered Badges */}
            <div className="flex flex-col items-start" style={{ gap: "12px" }}>
              <span
                className="font-inter uppercase"
                style={{
                  fontWeight: 800,
                  fontSize: "13px",
                  letterSpacing: "1.5px",
                  color: "#0b1f3a",
                }}
              >
                States Covered
              </span>

              <div className="flex flex-wrap" style={{ gap: "10px" }}>
                <span
                  className="font-inter uppercase"
                  style={{
                    fontWeight: 700,
                    fontSize: "12px",
                    letterSpacing: "0.5px",
                    color: "#0b1f3a",
                    padding: "8px 16px",
                    borderRadius: "4px",
                    background: "#ffffff",
                    border: "1px solid #e0dcd0",
                  }}
                >
                  Gujarat
                </span>

                <span
                  className="font-inter uppercase"
                  style={{
                    fontWeight: 700,
                    fontSize: "12px",
                    letterSpacing: "0.5px",
                    color: "#0b1f3a",
                    padding: "8px 16px",
                    borderRadius: "4px",
                    background: "#ffffff",
                    border: "1px solid #e0dcd0",
                  }}
                >
                  Maharashtra
                </span>

                <span
                  className="font-inter uppercase"
                  style={{
                    fontWeight: 700,
                    fontSize: "12px",
                    letterSpacing: "0.5px",
                    color: "#0b1f3a",
                    padding: "8px 16px",
                    borderRadius: "4px",
                    background: "#ffffff",
                    border: "1px solid #e0dcd0",
                  }}
                >
                  Rajasthan
                </span>

                <span
                  className="font-inter uppercase"
                  style={{
                    fontWeight: 700,
                    fontSize: "12px",
                    letterSpacing: "0.5px",
                    color: "#777",
                    padding: "8px 16px",
                    borderRadius: "4px",
                    border: "1px dashed #cfc9ba",
                  }}
                >
                  + More States
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ========================================================
// 4. MANUFACTURING INFRASTRUCTURE SECTION
// ========================================================
const Manufacturing = () => {
  const highlights = [
    "Modern manufacturing infrastructure",
    "Quality-focused production",
    "Scalable capacity",
    "Efficient supply network",
    "Consistent product standards",
  ];

  return (
    <section
      className="bg-white"
      style={{
        paddingTop: "100px",
        paddingBottom: "100px",
        borderBottom: "1px solid #eaeaea",
      }}
    >
      <div
        className="px-6 sm:px-10 lg:px-35 flex flex-col lg:flex-row items-center"
        style={{ gap: "80px" }}
      >
        {/* Facility Image */}
        <div
          className="relative w-full flex-1 overflow-hidden"
          style={{ height: "480px", borderRadius: "8px" }}
        >
          <img
            src="/about-warehouse.png"
            alt="BI Group manufacturing facility"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text and Checklist */}
        <div className="flex flex-col items-start flex-1 w-full" style={{ gap: "32px" }}>
          <div className="flex flex-col items-start" style={{ gap: "20px" }}>
            <div className="flex items-center" style={{ gap: "8px" }}>
              <span style={{ width: "12px", height: "2px", background: "#d9a441" }} />
              <span
                className="font-inter uppercase"
                style={{
                  fontWeight: 700,
                  fontSize: "13px",
                  letterSpacing: "3px",
                  color: "#d9a441",
                }}
              >
                Manufacturing
              </span>
            </div>

            <h2
              className="m-0"
              style={{
                fontWeight: 800,
                fontSize: "36px",
                lineHeight: "1.15",
                color: "#0b1f3a",
              }}
            >
              Built to deliver.
            </h2>

            <p
              style={{
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "1.6",
                color: "#555",
              }}
            >
              Our manufacturing infrastructure is designed to support consistent
              quality, efficient production and reliable supply across the markets
              we serve.
            </p>
          </div>

          {/* Checklist */}
          <div className="flex flex-col items-start w-full" style={{ gap: "14px" }}>
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-center" style={{ gap: "12px" }}>
                <CircleCheck size={18} color="#d9a441" strokeWidth={2} />
                <span style={{ fontSize: "15px", color: "#20252b" }}>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Link to About Page */}
          <div>
            <a
              href="/about"
              className="inline-flex items-center transition-colors duration-200 hover:opacity-90"
              style={{
                gap: "12px",
                background: "#0b1f3a",
                padding: "16px 32px",
                borderRadius: "4px",
              }}
            >
              <span
                className="font-inter uppercase"
                style={{
                  fontWeight: 700,
                  fontSize: "14px",
                  letterSpacing: "1px",
                  color: "#ffffff",
                }}
              >
                Explore Our Manufacturing
              </span>
              <ArrowRight size={16} color="#ffffff" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// ========================================================
// 5. FINAL PARTNER CTA SECTION
// ========================================================
const FinalCta = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{ paddingTop: "140px", paddingBottom: "140px" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/wwd2-final-cta.jpg"
          alt="BI Group collaboration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Navy Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(11, 31, 58, 0.9)" }}
      />

      {/* Content */}
      <div
        className="px-6 sm:px-10 lg:px-35 relative flex flex-col items-center text-center"
        style={{ gap: "32px" }}
      >
        <div className="flex items-center" style={{ gap: "8px" }}>
          <span style={{ width: "12px", height: "2px", background: "#ffffff" }} />
          <span
            className="font-inter uppercase"
            style={{
              fontWeight: 700,
              fontSize: "13px",
              letterSpacing: "3px",
              color: "#ffffff",
            }}
          >
            Partner With Us
          </span>
        </div>

        <h2
          className="m-0 text-white"
          style={{
            fontWeight: 800,
            fontSize: "56px",
            lineHeight: "1.15",
            maxWidth: "800px",
          }}
        >
          Let's build what's next.
        </h2>

        <p
          className="m-0 text-white/70"
          style={{
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "1.55",
            maxWidth: "700px",
          }}
        >
          Whether you're looking for the right solution, planning a project or
          exploring a partnership, BI Group is ready to work with you.
        </p>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center"
          style={{ gap: "24px" }}
        >
          <a
            href="/contact"
            className="inline-flex items-center transition-colors duration-200 hover:opacity-90"
            style={{
              gap: "12px",
              background: "#d9a441",
              padding: "16px 32px",
              borderRadius: "4px",
            }}
          >
            <span
              className="font-inter uppercase"
              style={{
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "1px",
                color: "#0b1f3a",
              }}
            >
              Talk to BI Group
            </span>
            <ChevronRight size={16} color="#0b1f3a" />
          </a>

          <a
            href="/products"
            className="inline-flex items-center transition-colors duration-200 hover:bg-white/10"
            style={{
              gap: "12px",
              background: "transparent",
              padding: "16px 32px",
              borderRadius: "4px",
              border: "1px solid #ffffff",
            }}
          >
            <span
              className="font-inter uppercase"
              style={{
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "1px",
                color: "#ffffff",
              }}
            >
              Explore Our Businesses
            </span>
            <ChevronRight size={16} color="#ffffff" />
          </a>
        </div>
      </div>
    </section>
  );
};

// ========================================================
// MAIN WHERE WE ARE PAGE
// ========================================================
const WhereWeAre = () => {
  return (
    <>
      {/* 1. Hero banner */}
      <Hero />

      {/* 2. Global footprint map and details */}
      <GlobalFootprint />

      {/* 3. India presence and regional coverage */}
      <IndiaPresence />

      {/* 4. Manufacturing infrastructure */}
      <Manufacturing />

      {/* 5. Final CTA to partner with BI Group */}
      <FinalCta />
    </>
  );
};

export default WhereWeAre;

