import React from 'react';
import { ArrowRight, Calendar, ArrowUpRight } from 'lucide-react';

/**
 * NewsInsights Component ("News & Insights")
 * Senior UI/UX Redesign: Case study card format, category tags,
 * high-contrast photography, and hover elevation.
 */
function NewsInsights() {
  const newsList = [
    {
      category: 'Industrial Machinery',
      date: 'March 2024',
      title: 'ElectroMech Crane Coatings — Pune',
      description:
        'Delivering high-durability epoxy and polyurethane coating systems for ElectroMech industrial cranes, ensuring long-term corrosion resistance in harsh working environments.',
      image: '/news-electromech.jpg',
      link: '#news',
    },
    {
      category: 'Steel Infrastructure',
      date: 'February 2024',
      title: 'AM/NS India — Steel Plant Coatings',
      description:
        'Partnering with ArcelorMittal Nippon Steel India to provide specialized protective coating systems for extreme heat, acid fumes, and steel manufacturing infrastructure.',
      image: '/news-amns.jpg',
      link: '#news',
    },
    {
      category: 'Marine & Ports',
      date: 'January 2024',
      title: 'Adani Logistics — Port Infrastructure',
      description:
        'Supplying heavy-duty marine-grade barrier coatings for bulk handling port infrastructure, withstanding relentless saltwater spray, UV oxidation, and coastal weather.',
      image: '/news-adani.jpg',
      link: '#news',
    },
  ];

  return (
    <section id="news" className="bg-white py-6 sm:py-7 lg:py-8 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-5 sm:space-y-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-1.5">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#c8963e]" />
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#c8963e]">
              News &amp; Case Studies
            </p>
            <span className="w-6 h-[2px] bg-[#c8963e]" />
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0f1f3d] font-serif">
            Latest Project Milestones
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
            Real-world deployments of BI Paints protective systems across India&apos;s most demanding infrastructure.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {newsList.map((item) => (
            <article
              key={item.title}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* News Photo with Zoom */}
                <div className="relative h-36 sm:h-40 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />
                  
                  {/* Floating Category Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-[#0f1f3d]/90 backdrop-blur-md text-white text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-4.5 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#c8963e]">
                    <Calendar size={12} />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0f1f3d] font-serif group-hover:text-[#1a5276] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed font-sans line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="px-4 pb-4 pt-0.5">
                <a
                  href={item.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1a5276] group-hover:text-[#c8963e] transition-colors"
                >
                  <span>Read Full Case Study</span>
                  <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsInsights;
