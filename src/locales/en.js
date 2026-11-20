/**
 * English translations (default language).
 *
 * Keys are grouped by area: common, nav, footer, home, about, ... .
 * src/locales/hi.js must mirror this exact structure.
 * Lists are arrays — components pair them by index with non-text data
 * (icons, images, links) kept in the component.
 */
const en = {
  meta: {
    siteTitle: "BI Group Of Companies – Engineering Solutions Built To Last",
  },

  common: {
    readMore: "Read More",
    learnMore: "Learn more",
    backToHome: "Back to Home",
    discoverMore: "Discover more",
    home: "Home",
    biGroup: "BI Group",
    previousSlide: "Previous slide",
    nextSlide: "Next slide",
    goToSlide: "Go to slide {n}",
  },

  nav: {
    items: {
      about: "About Us",
      businesses: "Businesses",
      sustainability: "Sustainability",
      investors: "Investors",
      newsroom: "Newsroom",
      foundation: "BI Foundation",
      ecommerce: "E-Commerce",
      careers: "Careers",
    },
    aboutLinks: [
      "Overview",
      "What We Do",
      "Where We Are",
      "Group Profile",
      "Vision & Values",
      "History",
      "Achievements",
      "Awards",
      "Leadership",
      "Spotlight",
      "CSR",
    ],
    aboutMega: {
      links: ["Overview", "What We Do", "Where We Are", "Our Achievements", "Our Journey"],
      primaryLink: "About BiGroup",
      secondaryLinks: ["About BiGroup", "Media Centre", "Financial & Annual Reports"],
      featureTitle: "Where We Are",
      featureDescription:
        "From manufacturing hubs to distribution networks across India, BI Group's footprint spans the industries and regions that keep the country building, moving, and protected.",
      featureCta: "Discover more",
      bannerTitle: "Looking for paint and colour for your home?",
      bannerCta: "Go to the decorative website",
      bannerImageAlt: "Paint and colour for your home",
    },
    investorLinks: ["Financial Reports", "Annual Reports", "Investor Relations"],
    newsroomLinks: ["Press Releases", "Media Coverage", "Events"],
    language: "Language",
    searchPlaceholder: "Search…",
    toggleSearch: "Toggle search",
    toggleMenu: "Toggle menu",
  },

  footer: {
    newsletter: {
      heading: "Subscribe to BI Insider and get the latest industry updates",
      namePlaceholder: "First and last name",
      emailPlaceholder: "Your e-mail address",
      industryPlaceholder: "Choose your preferred…",
      industries: ["Paints & Coatings", "Wellness", "Fashion & Lifestyle", "Modular Kitchens", "Other"],
      consentBefore: "I consent to my e-mail address being used in accordance with our",
      consentLink: "privacy policy",
      consentAfter: ".",
      subscribe: "Subscribe",
      success: "Thank you for subscribing to BI Insider!",
      errors: {
        name: "Please enter your name.",
        email: "Please enter a valid e-mail address.",
        consent: "Please accept the privacy policy to continue.",
      },
    },
    about:
      "BI Group is a leading manufacturer of paints, coatings & engineering solutions, delivering innovative, high-performance products for industrial, infrastructure, and residential sectors across India.",
    followUs: "Follow Us:",
    social: { facebook: "Facebook", instagram: "Instagram", linkedin: "LinkedIn" },
    businessesHeading: "Our Businesses",
    businessLinks: [
      "Paints & Coatings",
      "Modular Interiors",
      "Engineering Services",
      "Industrial Solutions",
      "End to End Solutions",
    ],
    quickLinksHeading: "Quick Links",
    quickLinks: [
      "About Us",
      "Leadership",
      "Sustainability",
      "BI Foundation",
      "Careers",
      "News & Insights",
      "Partners",
      "Contact Us",
    ],
    contactHeading: "Get In Touch",
    contact: {
      location: "Location",
      locationValue: "Plot No. G-505, Boranada, Jodhpur, Rajasthan, India",
      email: "Email",
      phone: "Phone",
    },
    copyright: "2026 © BI Group of Companies. All rights reserved.",
    bottomLinks: ["Accessibility Statement", "Cookie Policy", "Human Rights Request", "Privacy Policy"],
  },

  home: {
    hero: {
      slides: [
        {
          title: "Transforming Spaces with Color",
          description:
            "A modern palette for architects, builders, and homeowners-crafted for performance, sustainability, and timeless beauty.",
        },
      ],
    },
    impact: {
      eyebrow: "Creating Excellence",
      heading: "From Paints to Engineering - Multiple Businesses, One Vision of Excellence",
      description:
        "Our mission is to develop world-class products and services that adhere to international quality standards.",
    },
    features: {
      eyebrow: "Explore Our Solutions",
      heading: "From products to personalised solutions",
      cards: [
        {
          title: "Explore Our Coatings",
          description:
            "Browse BI Group's comprehensive range of industrial and decorative coatings. Find the right product for your specific application needs.",
          linkText: "Find the right coating",
        },
        {
          title: "Custom Coating Solutions",
          description:
            "Get tailored coating systems designed for your unique requirements. Our experts match the optimal solution to your project specifications.",
          linkText: "Get a consultation",
        },
        {
          title: "Discover BI Group",
          description:
            "Your complete resource for coatings, modular interiors, and engineering services. Explore our integrated business verticals.",
          linkText: "Learn more",
        },
      ],
    },
    portfolio: {
      eyebrow: "One Group. Multiple Possibilities.",
      heading: "Different businesses. One shared purpose.",
      description:
        "BI Group brings together businesses that help people build, improve and protect the spaces around them. From paints and coatings to modular interiors and specialized services, we combine quality, innovation and customer-focused solutions.",
      viewAll: "View All Businesses",
      items: [
        {
          title: "BI Painting Solution",
          description:
            "BI Group has many different types of interior and exterior paint, creating colour combinations and design ideas for every home.",
        },
        {
          title: "BI Modular Kitchen",
          description:
            "Modern modular kitchen and interior solutions combining functionality, design, and everyday convenience for your dream home.",
        },
        {
          title: "BI Electronics",
          description:
            "Innovative electronic components, air conditioning systems, and smart technology solutions for modern living and industrial automation.",
        },
        {
          title: "BI Homeopathic",
          description:
            "Natural and holistic homeopathic healthcare products, remedies, and wellness solutions trusted by families across India.",
        },
        {
          title: "BI Agriculture",
          description:
            "Explore innovative agricultural solutions, advanced farming techniques, and sustainable practices—designed to boost productivity and nurture growth.",
        },
        {
          title: "BI Engineering",
          description:
            "Delivering precision engineering services, industrial solutions, and infrastructure development—built to power progress and drive innovation.",
        },
      ],
    },
    career: {
      heading: "Career at BI Group",
      imageAlt: "Career at BI Group",
      lines: [
        "We believe in people who are passionate,driven and ready ",
        "to make a difference. ",
        "Explore opportunities and grow with India's",
        " trusted paint company.",
      ],
      cta: "Learn more",
    },
    kitchen: {
      eyebrow: "Our Kitchens",
      heading: "BI Modular Kitchens for Modern Living",
      description:
        "Premium kitchen solutions designed for real homes - crafted with attention to detail and built to last.",
      subheading: "Personalise your kitchen",
      subtext: "Choose finishes, colours and details.",
      cta: "Customise now",
    },
    sustainability: {
      imageAlt: "BI Group sustainability",
      eyebrow: "At BI Group, we are driven by a purpose to build and protect India's future",
      headingLine1: "Protecting Surfaces,",
      headingLine2: "Preserving the Future",
      description:
        "Together with our partners and customers, we are committed to delivering world-class coatings and solutions that protect infrastructure, empower industries, and contribute to a sustainable tomorrow.",
      cta: "Read more about Sustainability",
    },
    news: {
      eyebrow: "News & Insights",
      heading: "Latest from BI Group",
      items: [
        {
          date: "March 2024",
          title: "ElectroMech Crane Coatings — Pune",
          description:
            "BI Paints delivers high-performance industrial coatings for ElectroMech's cranes, ensuring corrosion resistance in harsh environments.",
        },
        {
          date: "February 2024",
          title: "AM/NS India — Steel Plant Coatings",
          description:
            "Partnering with ArcelorMittal Nippon Steel India to provide advanced protective coating systems for steel plant infrastructure.",
        },
        {
          date: "January 2024",
          title: "Adani Logistics — Port Infrastructure",
          description:
            "BI Paints supplies marine-grade protective coatings for port infrastructure, withstanding saltwater and extreme weather.",
        },
      ],
    },
    partners: {
      eyebrow: "Our Partners",
      heading: "Trusted by India's Leading Industries",
      description: "Partnering with top organizations across defence, steel, energy, and engineering sectors",
      names: ["Ministry of Defence", "AM/NS India", "ElectroMech", "Lohr", "Godrej", "Marini", "Larsen & Toubro"],
    },
  },

  about: {
    pageTitle: "About BI Group – Engineering Solutions Built To Last",
    hero: {
      title: "About BI Group",
      imageAlt: "BI Group team on the factory floor",
    },
    company: {
      tag: "Who We Are",
      lead: "Founded in 2012, BI Group is a diversified Indian industrial conglomerate built on a legacy of trust, quality, and commitment.",
      paragraph1: "What began as a pioneering protective coatings company has rapidly transformed into a multi-business enterprise spanning paints, home solutions, modular kitchens, sustainable agriculture, holistic homeopathy, electronics, and engineering divisions. Our core philosophy bridges deep industrial precision with consumer-centric innovation, ensuring every product delivers exceptional value across our e-commerce platforms and retail networks.",
      paragraph2: "With our national footprint growing across 20+ states, we take pride in aligning our corporate milestones directly with India's infrastructure development and self-reliance goals.",
      mainImageAlt: "BI Group logistics and operations",
      secondaryImageAlt: "BI Group leadership team in a meeting",
      badgeLabel: "Years Of Excellence",
      stats: [
        {
          label: "Years of Excellence",
          description: "Years of building trust and delivering results across industries.",
        },
        {
          label: "Business Verticals",
          description: "Diverse sectors served with balanced solutions and expertise.",
        },
        {
          label: "Dealer Network",
          description: "Strong partnerships that power distribution and local support.",
        },
        {
          label: "States Presence",
          description: "Nationwide reach with localized operations and consistent delivery.",
        },
      ],
    },
    chairman: {
      quote: "\"At BI Group, we believe that true growth comes from building with integrity, innovating with purpose, and serving with commitment. Our journey from a single paint company to a diversified industrial group reflects our unwavering dedication to India's progress.\"",
      name: "Bhikam Jain",
      role: "Chairman & Founder, BI Group",
      imageAlt: "Bhikam Jain, Chairman & Founder, BI Group",
    },
    journey: {
      heading: "Our Journey",
      description: "Dive into the journey of how a commodity trading firm became one of the most dynamic industrial conglomerates in India.",
      cta: "View Timeline",
      imageAlt: "BI Group headquarters building",
    },
    values: {
      eyebrow: "Our Foundation",
      heading: "Vision, Mission & Values",
      items: [
        {
          title: "Vision",
          description: "To manufacture sustainable coating solutions by constantly investing in research and development for delivering products that create value for customers and accelerate growth and diversification across paints, modular kitchens, and electronics.",
        },
        {
          title: "Mission",
          description: "To become a market leading authority and inspire by providing high-quality, innovative, and competitive industrial and consumer products that meet their evolving needs.",
        },
        {
          title: "Values",
          description: "Innovation, Quality, Integrity, Sustainability, Customer First.",
        },
      ],
    },
    sustainability: {
      tag: "Green Future",
      heading: "Commitment to Sustainability",
      description: "At BI Group, we actively design our processes to minimize footprint. Our manufacturing campuses employ advanced wastewater recycling and green-energy infrastructure to construct self-reliant ecosystem units.",
      imageAlt: "BI Group sustainable manufacturing",
      pillars: [
        {
          title: "Eco-Friendly Manufacturing",
          description: "Formulating low-VOC water-based protective finishes.",
        },
        {
          title: "Energy Efficiency",
          description: "Solar-powered plants cutting overall operational emissions.",
        },
        {
          title: "Responsible Sourcing",
          description: "100% trace-monitored raw inputs from certified ethical farms.",
        },
      ],
    },
  },

  whatWeDo: {
    pageTitle: "What We Do | BI Group",
    hero: {
      imageAlt: "BI Group coating application",
      title: "What we do",
      description: "BI Group brings together paints, coatings, and surface solutions that transform and protect homes, businesses and infrastructure.",
      primaryCta: "Explore Our Businesses",
      secondaryCta: "Discover BI Group",
    },
    categories: {
      eyebrow: "One Group. Multiple Possibilities.",
      heading: "Different businesses. One shared purpose.",
      description: "BI Group brings together businesses that help people build, improve and protect the spaces around them. From paints and coatings to modular interiors and specialized services, we combine quality, innovation and customer-focused solutions.",
      items: [
        {
          title: "Beautiful homes",
          description: "BI Group has many different types of interior and exterior paint, creating colour combinations and design ideas for every home.",
        },
        {
          title: "Shipping",
          description: "We help to protect your vessels and increase your hull performance with our broad range of marine coatings.",
        },
        {
          title: "Energy",
          description: "Powder and protective coatings to keep your onshore and offshore oil, gas, petrochemical, and refining facilities in the best shape for a long time.",
        },
        {
          title: "Natural wellness",
          description: "Natural and holistic homeopathic healthcare products, remedies, and wellness solutions trusted by families across India.",
        },
        {
          title: "Dream kitchens",
          description: "Modern modular kitchen and interior solutions combining functionality, design, and everyday convenience for your dream home.",
        },
        {
          title: "Smart living",
          description: "Innovative electronic components, air conditioning systems, and smart technology solutions for modern living and industrial automation.",
        },
      ],
    },
    solutions: {
      eyebrow: "Our Solutions",
      heading: "From everyday spaces to demanding environments.",
      tabs: ["For Homes", "For Businesses", "For Industries", "For Projects"],
      items: [
        {
          title: "Interior Paints",
          description: "Vibrant, low-VOC finishes for luxury aesthetics and healthy home air quality.",
        },
        {
          title: "Exterior Paints",
          description: "All-weather extreme shield protection to prevent cracking and dampness.",
        },
        {
          title: "Waterproofing",
          description: "Multi-layered advanced dynamic protection systems for roof and concrete slabs.",
        },
        {
          title: "Modular Kitchens",
          description: "Bespoke high-end kitchen installations equipped with soft-close global hardware.",
        },
        {
          title: "Interior Solutions",
          description: "Integrated wardrobes, custom partitions, and modern architectural solutions.",
        },
      ],
    },
    process: {
      eyebrow: "From Colour To Complete Spaces",
      heading: "More than products. We create possibilities.",
      description: "From protecting surfaces to creating beautiful living spaces, BI Group connects products, design and services to deliver complete solutions.",
      steps: [
        {
          title: "Paint",
          description: "Premium architectural coatings and colour collections.",
        },
        {
          title: "Protect",
          description: "Engineered shielding for harsh weather and industrial corrosion.",
        },
        {
          title: "Design",
          description: "Bespoke modular interior systems crafted around your lifestyle.",
        },
        {
          title: "Build",
          description: "Precision components integrated seamlessly into modern spaces.",
        },
        {
          title: "Support",
          description: "End-to-end consulting and execution for projects of any scale.",
        },
      ],
    },
    innovation: {
      eyebrow: "Innovation",
      heading: "Better ideas create better solutions.",
      description: "We continuously explore new technologies, materials, designs and processes to meet the changing needs of our customers.",
      cards: [
        {
          title: "Product Innovation",
          description: "Improving formulations, durability and performance. We develop specialized coatings engineered to withstand extreme climates and everyday wear.",
        },
        {
          title: "Design Innovation",
          description: "Creating modern colours, tactile materials and smart living solutions. Our interior systems integrate global technology with intuitive ergonomics.",
        },
        {
          title: "Process Innovation",
          description: "Building smarter systems and more efficient ways of working. From computer-automated manufacturing to optimized supply chains.",
        },
      ],
    },
    people: {
      eyebrow: "Our People",
      heading: "People behind the progress.",
      description: "Our people bring together expertise, creativity and commitment across every part of the BI Group ecosystem — from engineering to interior design.",
      stats: ["Dealers & Partners", "Locations", "Years of Experience"],
      cta: "Life at BI Group",
      imageAlt: "BI Group team on site",
    },
    presence: {
      eyebrow: "Our Presence",
      heading: "Growing across India.",
      description: "From local markets to a growing national footprint, BI Group continues to expand its presence across India, bringing world-class products closer to you.",
      imageAlt: "BI Group presence across India",
      distributionHeading: "Our Distribution",
      distribution: [
        "Corporate Office",
        "Manufacturing",
        "Branches",
        "Dealers & Partners",
        "Distributors",
        "Service Network",
      ],
      national: "National",
      cta: "Explore Our Locations",
    },
    finalCta: {
      imageAlt: "BI Group modern project",
      eyebrow: "Partner With Us",
      heading: "Let's build what's next.",
      description: "Whether you're looking for the right solution, planning a project or exploring a partnership, BI Group is ready to work with you.",
      primaryCta: "Talk to BI Group",
      secondaryCta: "Explore Our Businesses",
    },
  },

  whereWeAre: {
    pageTitle: "Where We Are | BI Group",
    hero: {
      imageAlt: "BI Group presence across markets",
      title: "Where We Are",
      subtitle: "Growing our presence. Connecting markets. Delivering solutions.",
      primaryCta: "Explore Our Presence",
      secondaryCta: "Contact Us",
    },
    footprint: {
      eyebrow: "Global Footprint",
      heading: "Our Global Footprint",
      description: "From our home in India to growing international markets, BI Group is building a connected network that brings quality products and solutions closer to customers.",
      mapAlt: "BI Group global footprint map",
      showDetails: "Show details for {name}",
    },
    locations: {
      surat: {
        name: "Surat",
        items: [
          {
            type: "Office",
            title: "Surat, India",
            description: "Our head office coordinates business operations, quality standards and growth across every BI Group market.",
          },
          {
            type: "Manufacturing",
            title: "Surat, India",
            description: "Our core manufacturing base, supporting consistent quality and reliable supply across markets we serve.",
          },
        ],
      },
      "export-dubai": {
        name: "Dubai",
        items: [
          {
            type: "Export Market",
            title: "Dubai, UAE",
            description: "Serving customers across the Middle East through our growing export network.",
          },
        ],
      },
      "export-thailand": {
        name: "Thailand",
        items: [
          {
            type: "Export Market",
            title: "Thailand, Thailand",
            description: "A growing export market for BI Paints solutions in Southeast Asia.",
          },
        ],
      },
      "export-bangladesh": {
        name: "Bangladesh",
        items: [
          {
            type: "Export Market",
            title: "Bangladesh, Bangladesh",
            description: "Serving customers in Bangladesh through our expanding distribution partnerships.",
          },
        ],
      },
      "export-srilanka": {
        name: "Sri Lanka",
        items: [
          {
            type: "Export Market",
            title: "Sri Lanka, Sri Lanka",
            description: "Delivering trusted paint and coating solutions to customers across Sri Lanka.",
          },
        ],
      },
      "export-maldives": {
        name: "Maldives",
        items: [
          {
            type: "Export Market",
            title: "Maldives, Maldives",
            description: "Extending our export network to customers across the Maldives.",
          },
        ],
      },
    },
    india: {
      eyebrow: "India Presence",
      heading: "Strong roots. Wider reach.",
      description: "With a strong foundation in India, BI Group continues to expand its market presence through manufacturing capabilities, distribution networks and strategic partnerships.",
      mapAlt: "BI Group presence across India",
      pinLabel: "Surat, Gujarat — Head Office & Manufacturing",
      tooltipTitle: "Surat, Gujarat",
      tooltipText: "Head Office & Manufacturing",
      listHeading: "Manufacturing & Head Office",
      headOffice: "Surat, Gujarat — Head Office",
      facility: "Surat, Gujarat — Manufacturing Facility",
      statesHeading: "States Covered",
      states: ["Gujarat", "Maharashtra", "Rajasthan"],
      moreStates: "+ More States",
    },
    manufacturing: {
      imageAlt: "BI Group manufacturing facility",
      eyebrow: "Manufacturing",
      heading: "Built to deliver.",
      description: "Our manufacturing infrastructure is designed to support consistent quality, efficient production and reliable supply across the markets we serve.",
      highlights: [
        "Modern manufacturing infrastructure",
        "Quality-focused production",
        "Scalable capacity",
        "Efficient supply network",
        "Consistent product standards",
      ],
      cta: "Explore Our Manufacturing",
    },
    finalCta: {
      imageAlt: "BI Group collaboration",
      eyebrow: "Partner With Us",
      heading: "Let's build what's next.",
      description: "Whether you're looking for the right solution, planning a project or exploring a partnership, BI Group is ready to work with you.",
      primaryCta: "Talk to BI Group",
      secondaryCta: "Explore Our Businesses",
    },
  },

  achievements: {
    pageTitle: "Our Achievements – BI Group",
    hero: {
      imageAlt: "BI Group manufacturing facility",
      eyebrow: "Milestones of Trust",
      title: "Our Achievements",
      stats: ["Years Experience", "Dealer Network", "Litres Production", "Quality Commitment"],
    },
    leadership: {
      eyebrow: "Board of Directors",
      title: "Our Leadership",
      leaders: [
        {
          name: "B.I. Sharma",
          role: "Founder & Chairman",
          bio: "A visionary entrepreneur leading BI Group's diverse expansion from a single coatings startup to a national industrial conglomerate.",
        },
        {
          name: "Amit Sharma",
          role: "Managing Director",
          bio: "Directs technology and modern modular divisions, implementing automated European workflows across our heavy manufacturing bases.",
        },
        {
          name: "Priya Patel",
          role: "Executive Director",
          bio: "Manages nationwide logistics, institutional dealer relations, and leads the strategic roll-out of direct-to-consumer digital commerce.",
        },
      ],
    },
    certifications: {
      eyebrow: "Standards & Assurance",
      title: "Certifications & Quality",
      items: [
        {
          title: "ISO 9001:2015",
          subtitle: "Quality Management",
          desc: "Certified adherence to global manufacturing, rigorous inspection pipelines, and client feedback frameworks.",
        },
        {
          title: "BIS Compliant",
          subtitle: "National Assurance",
          desc: "Perfect alignment with Bureau of Indian Standards, ensuring trusted domestic products.",
        },
        {
          title: "OHSAS 18001",
          subtitle: "Safety Certified",
          desc: "Industry-leading protective standards for floor-workers and sustainable plant personnel welfare.",
        },
        {
          title: "ISO 14001:2015",
          subtitle: "Environmental System",
          desc: "Continuous environmental monitoring and strict emission safety benchmarks across facilities.",
        },
      ],
    },
    industries: {
      eyebrow: "Industry Alliances",
      title: "Trusted by Leading Industries",
      tiles: [
        "Tata Infrastructure",
        "Reliance Heavy",
        "L&T Construction",
        "Adani Ports",
        "Shapoorji Group",
        "JSW Steel",
        "GMR Aviation",
        "DLF Luxury",
        "Godrej Properties",
        "IRCTC Projects",
      ],
    },
  },

  sustainability: {
    pageTitle: "Sustainability – BI Group",
    hero: {
      imageAlt: "Wind turbines at sunset over green hills – BI Group Sustainability",
      badge: "BI Group Sustainability",
      title: "Building Today. Protecting Tomorrow.",
      description: "At BI Group, we believe sustainable growth is the only way forward. Across our paints, modular systems, and engineering businesses, we are committed to reducing environmental impact and empowering communities.",
      cta: "Discover our mission",
    },
    pillars: {
      eyebrow: "Our Core Pillars",
      heading: "Three pillars of our commitment",
      items: [
        {
          alt: "People First – BI Group Sustainability",
          title: "People First",
          description: "Our workforce, painters, partners and the communities we operate in define our success.",
          points: [
            "Employee safety & wellbeing",
            "Painter & dealer training academies",
            "Skill development programs",
            "Community empowerment initiatives",
          ],
        },
        {
          alt: "Planet Preservation – BI Group Sustainability",
          title: "Planet Preservation",
          description: "We actively reduce our environmental footprint across the production and supply chain.",
          points: [
            "Eco-friendly low-VOC products",
            "Carbon emission reduction targets",
            "Waste reduction & active recycling",
            "Responsible energy & water usage",
          ],
        },
        {
          alt: "Product Responsibility – BI Group Sustainability",
          title: "Product Responsibility",
          description: "Our portfolio is engineered to deliver excellence without compromising safety or quality.",
          points: [
            "Sustainable coating solutions",
            "Long-lasting protective formulations",
            "Environment-conscious manufacturing",
            "Rigorous product safety standards",
          ],
        },
      ],
    },
    vision: {
      imageAlt: "Hands holding soil with a young seedling – BI Group Long-Term Vision",
      eyebrow: "Our Long-Term Vision",
      heading: "Our Commitment to a Sustainable Future",
      paragraph1: "BI Group stands at the intersection of progress and protection. As we build spaces, modular kitchens, and paint applications across India, we adhere to strict international quality and sustainability parameters.",
      paragraph2: "We choose truth over quick claims. Every milestone we share is backed by scientific color laboratory audits, sustainable coating certifications, and empirical community metrics. Our drive is simple: creating lasting excellence that honors the environment.",
    },
    zed: {
      eyebrow: "Zed Certification",
      heading: "MSME Sustainable (ZED) Certification",
      tagline: "Committed to Zero Defect. Zero Effect.",
      description: "Our ZED certification reflects our commitment to quality manufacturing, environmentally responsible processes, social responsibility, and creating a positive impact on our people, community, and planet.",
      badges: ["Quality Manufacturing", "Zero Defect", "Zero Effect", "Social Responsibility"],
      imageAlt: "MSME Sustainable ZED Certification – BI Group",
    },
  },

  foundation: {
    pageTitle: "BI Foundation – BI Group",
    hero: {
      imageAlt: "Children learning in a classroom supported by BI Foundation",
      eyebrow: "BI Foundation",
      title: "Building a Better Tomorrow, Together.",
      description: "At BI Foundation, we believe growth is meaningful when it creates a positive impact on people, communities, and the environment.",
      cta: "Discover Our Impact →",
    },
    purpose: {
      heading: "Our Purpose",
      description: "We believe that meaningful growth goes beyond business. Through BI Foundation, we work towards creating opportunities, supporting communities, and contributing to a healthier and more sustainable future.",
      imageAlt: "Children in a classroom supported by BI Foundation's education initiatives",
    },
    focus: {
      heading: "Where We Focus",
      description: "Our initiatives are built around areas where we can create meaningful and lasting impact.",
      items: [
        {
          title: "Education",
          description: "Creating opportunities for learning, growth, and a brighter future.",
        },
        {
          title: "Environment",
          description: "Supporting greener communities and responsible environmental practices.",
        },
        {
          title: "Community",
          description: "Contributing towards stronger, more inclusive, and empowered communities.",
        },
        {
          title: "Well-being",
          description: "Supporting initiatives that contribute to healthier and better lives.",
        },
      ],
    },
    featured: {
      imageAlt: "Volunteers planting trees as part of a BI Foundation environmental initiative",
      eyebrow: "Featured Initiative",
      heading: "Creating Change Where It Matters",
      description: "From supporting education to contributing to greener communities, BI Foundation focuses on initiatives that create meaningful and lasting change. We partner with local schools and environmental agencies to ensure every contribution counts.",
    },
    closing: {
      heading: "Together, We Can Make a Difference.",
      description: "Every contribution, every initiative, and every small step can help build a better tomorrow. Join us in shaping a sustainable and inclusive future.",
    },
  },

  skeleton: {
    defaultDescription: "This page is currently being developed. Please check back soon.",
    comingSoon: "Coming Soon",
    comingSoonText: "We are working on this page. The sections below will be available shortly.",
    pages: {
      businesses: {
        pageTitle: "Our Businesses – BI Group",
        title: "Our Businesses",
        description: "A diversified portfolio spanning paints and coatings, modular interiors, engineering, and more.",
        sections: ["Paints & Coatings", "Modular Kitchens", "Engineering Services"],
      },
      paints: {
        pageTitle: "BI Paints & Color Coating – BI Group",
        eyebrow: "BI Paints",
        title: "BI Paints & Color Coating",
        description: "Interior, exterior, and industrial coatings engineered for lasting colour and protection.",
        sections: ["Interior Paints", "Exterior Paints", "Industrial Coatings"],
      },
      investors: {
        pageTitle: "Investors – BI Group",
        title: "Investors",
        description: "Financial performance, reports, and updates for our investors and stakeholders.",
        sections: ["Financial Reports", "Annual Reports", "Investor Relations"],
      },
      newsroom: {
        pageTitle: "Newsroom – BI Group",
        title: "Newsroom",
        description: "The latest news, press releases, and media coverage from across BI Group.",
        sections: ["Press Releases", "Media Coverage", "Events"],
      },
      ecommerce: {
        pageTitle: "E-Commerce – BI Group",
        title: "E-Commerce",
        description: "Shop BI Group products online through our marketplace and B2B portal.",
        sections: ["Online Marketplace", "B2B Portal", "Delivery Network"],
      },
    },
  },

  careers: {
    pageTitle: "Careers – BI Group",
    heroEyebrow: "Build What Matters",
    heroHeading: "Create impact. Grow with BI Group.",
    heroDesc: "Join a team that turns ambitious ideas into enduring products, spaces and infrastructure across India.",
    heroImageAlt: "BI Group team collaborating",
    lifeEyebrow: "Life at BI Group",
    lifeHeading: "A place to learn, contribute and thrive",
    lifeDesc: "Our people bring diverse expertise to one shared mission: creating excellence that lasts.",
    lifeCard1Title: "Grow with purpose",
    lifeCard1Desc: "Learn across businesses, build new skills and shape a career with real momentum.",
    lifeCard2Title: "Belong to one team",
    lifeCard2Desc: "Work with curious, grounded people who value trust, inclusion and shared success.",
    lifeCard3Title: "Make a visible impact",
    lifeCard3Desc: "Solve meaningful challenges for customers, communities and a more sustainable future.",
    jobsEyebrow: "Open Opportunities",
    jobsHeading: "Find your next role",
    filterLabel: "Filter by business",
    filterAll: "All businesses",
    filterPaints: "Paints & Coatings",
    filterEngineering: "Engineering Services",
    filterOperations: "Group Operations",
    job1Title: "Senior Product Development Chemist",
    job1Unit: "Paints & Coatings",
    job1Location: "Jodhpur, Rajasthan",
    job1Type: "Full-time",
    job2Title: "Project Engineer — Industrial Solutions",
    job2Unit: "Engineering Services",
    job2Location: "Pune, Maharashtra",
    job2Type: "Full-time",
    job3Title: "Management Trainee — Operations",
    job3Unit: "Group Operations",
    job3Location: "Jodhpur, Rajasthan",
    job3Type: "Graduate",
    viewRole: "View role",
    jobsFooter: "Don't see the right fit? Send us your profile",
    whyEyebrow: "Why BI Group",
    whyHeading: "Why build your career with us",
    whyDesc: "From learning across businesses to making a visible impact, here's what makes BI Group a rewarding place to grow.",
    whyCard1Title: "Diverse roles across businesses",
    whyCard1Desc: "Explore opportunities in paints, coatings, modular interiors, engineering services and more.",
    whyCard2Title: "Recognition for your impact",
    whyCard2Desc: "Your contributions are visible and valued across teams, customers and communities.",
    whyCard3Title: "A culture that cares",
    whyCard3Desc: "We support your well-being, learning and long-term growth with a people-first approach.",
  },
};

export default en;
