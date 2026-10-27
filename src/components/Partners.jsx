import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Building2 } from 'lucide-react';

/**
 * Partners Component ("Our Partners & Institutional Clients")
 * 
 * Simplified, Attractive & Modern Redesign:
 * 1. Clean, responsive 6-column logo grid displaying authentic brand logos.
 * 2. Intuitive category filters to easily explore Defence, Infrastructure, Energy & Manufacturing.
 * 3. Elevated, clean partner cards with subtle hover dynamics (no visual clutter or duplicate marquees).
 * 4. Crisp credibility markers providing institutional trust without overwhelming the page.
 */
function Partners() {
  const partners = [
    {
      id: 1,
      name: 'Ministry of Defence',
      logo: '/client-ministry-of-defence.png',
      sector: 'Defence & Marine',
      category: 'defence',
    },
    {
      id: 2,
      name: 'Larsen & Toubro',
      logo: '/client-lt.png',
      sector: 'Infrastructure & EPC',
      category: 'infrastructure',
    },
    {
      id: 3,
      name: 'AM/NS India',
      logo: '/client-amns-india.png',
      sector: 'Steel & Infrastructure',
      category: 'infrastructure',
    },
    {
      id: 4,
      name: 'Reliance Industries',
      logo: '/upcoming-reliance.png',
      sector: 'Energy & Petrochemicals',
      category: 'energy',
    },
    {
      id: 5,
      name: 'HPCL',
      logo: '/upcoming-hp.png',
      sector: 'Petroleum & Refineries',
      category: 'energy',
    },
    {
      id: 6,
      name: 'Pidilite',
      logo: '/upcoming-pidilite.png',
      sector: 'Specialty Chemicals',
      category: 'energy',
    },
    {
      id: 7,
      name: 'Godrej',
      logo: '/client-godrej.png',
      sector: 'Consumer & Engineering',
      category: 'manufacturing',
    },
    {
      id: 8,
      name: 'ElectroMech',
      logo: '/client-electromech.png',
      sector: 'Heavy Cranes & Rigging',
      category: 'infrastructure',
    },
    {
      id: 9,
      name: 'Suzlon Energy',
      logo: '/upcoming-suzlon.png',
      sector: 'Renewable Wind Energy',
      category: 'energy',
    },
    {
      id: 10,
      name: 'Coromandel',
      logo: '/upcoming-coromandel.png',
      sector: 'Agri-Nutrition & Industry',
      category: 'energy',
    },
    {
      id: 11,
      name: 'Lohr',
      logo: '/client-lohr.png',
      sector: 'Transport & Rail Systems',
      category: 'manufacturing',
    },
    {
      id: 12,
      name: 'Marini',
      logo: '/client-marini.png',
      sector: 'Road & Construction Plants',
      category: 'infrastructure',
    },
    {
      id: 13,
      name: 'AM/NS Ports',
      logo: '/client-amns-ports.png',
      sector: 'Marine Ports & Harbours',
      category: 'defence',
    },
    {
      id: 14,
      name: 'Chowgule',
      logo: '/client-chowgule.png',
      sector: 'Shipbuilding & Marine Fleets',
      category: 'defence',
    },
    {
      id: 15,
      name: 'KYB',
      logo: '/upcoming-kyb.png',
      sector: 'Hydraulics & Machinery',
      category: 'manufacturing',
    },
    {
      id: 16,
      name: 'SRF Limited',
      logo: '/upcoming-srf.png',
      sector: 'Technical Chemicals',
      category: 'energy',
    },
    {
      id: 17,
      name: 'Laxmipati',
      logo: '/client-laxmipati.png',
      sector: 'Industrial Manufacturing',
      category: 'manufacturing',
    },
    {
      id: 18,
      name: 'United Crane',
      logo: '/upcoming-united-crane.png',
      sector: 'Port & Girder Systems',
      category: 'infrastructure',
    },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Partners', count: partners.length },
    { id: 'defence', label: 'Defence & Marine', count: partners.filter((p) => p.category === 'defence').length },
    { id: 'infrastructure', label: 'Infrastructure & EPC', count: partners.filter((p) => p.category === 'infrastructure').length },
    { id: 'energy', label: 'Energy & Chemicals', count: partners.filter((p) => p.category === 'energy').length },
    { id: 'manufacturing', label: 'Manufacturing & Transport', count: partners.filter((p) => p.category === 'manufacturing').length },
  ];

  const filteredPartners = activeCategory === 'all'
    ? partners
    : partners.filter((p) => p.category === activeCategory);

  return (
    <section id="partners" className="bg-gradient-to-b from-white via-slate-50/60 to-white py-6 sm:py-7 lg:py-8 border-t border-slate-200/60 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-4 sm:space-y-5">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-1.5">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#c8963e]" />
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#c8963e]">
              Institutional Validation
            </p>
            <span className="w-6 h-[2px] bg-[#c8963e]" />
          </div>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0f1f3d] font-serif leading-tight">
            Trusted by India&apos;s Leading Enterprises
          </h2>

          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans max-w-2xl mx-auto">
            Delivering certified heavy-duty coatings and precision surface systems to India&apos;s foremost defence, infrastructure, energy, and manufacturing leaders.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-1.5 sm:gap-2 pt-1">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#1a5276] text-white shadow-xs ring-2 ring-[#1a5276]/20'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Clean, Modern Partner Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 pt-1">
          {filteredPartners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-xl border border-slate-200/80 p-3 sm:p-3.5 flex flex-col items-center justify-between h-28 sm:h-32 shadow-xs hover:shadow-md hover:border-[#1a5276]/30 hover:-translate-y-1 transition-all duration-300 group cursor-default"
            >
              {/* Logo Presentation Area */}
              <div className="w-full flex-1 flex items-center justify-center p-1.5">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-9 sm:max-h-10 max-w-[85%] object-contain filter group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Partner Name & Sector Label */}
              <div className="w-full pt-1.5 border-t border-slate-100 text-center">
                <h3 className="text-xs font-bold text-[#0f1f3d] group-hover:text-[#1a5276] transition-colors truncate">
                  {partner.name}
                </h3>
                <p className="text-[10.5px] text-slate-500 truncate mt-0.5">
                  {partner.sector}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Subdued Credibility Markers */}
        <div className="pt-4 border-t border-slate-200/70 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-slate-600 text-xs sm:text-sm font-medium">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 size={15} className="text-[#c8963e]" />
            <span>18+ Tier-1 Industrial Enterprises</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={15} className="text-[#1a5276]" />
            <span>ISO Certified High-Performance Formulations</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Building2 size={15} className="text-[#c8963e]" />
            <span>Pan-India Strategic Deployments</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Partners;
