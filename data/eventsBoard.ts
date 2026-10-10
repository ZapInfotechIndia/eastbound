export type EventBoardDetail = {
  heading: string;
  description?: string;
  list?: string[];
  download?: {
    label: string;
    href: string;
  };
};

export const eventsExchangePdfBase = "/pdfs/events-exchange";

export type EventBoardCta = {
  label: string;
  href: string;
  responseTime?: string;
};

export type EventBoardFormField = {
  label: string;
  type?: "text" | "email" | "textarea" | "select";
  required?: boolean;
};

export type EventBoardSection = {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  intro: string;
  details?: EventBoardDetail[];
  closingLine: string;
  cta: EventBoardCta;
  form?: {
    title: string;
    description: string;
    fields: EventBoardFormField[];
    submitButton: string;
    confirmation: string;
    email: string;
  };
};

export const eventBoardSections: EventBoardSection[] = [
  {
    id: "explore-event-venues",
    number: "01",
    title: "Explore Event Venues",
    subtitle:
      "Discover exceptional venues for incentives, conferences, celebrations and private events.",
    intro:
      "The right setting shapes everything about an event: how guests arrive, how they gather, how they remember it. Our team knows the region's venues first-hand, and we match each one to your group, your purpose and the mood you want to create.",
    details: [
      {
        heading: "Venue styles",
        list: [
          "Heritage palaces and forts — Courtyards, durbar halls and ramparts that give galas, weddings and welcome dinners a real sense of occasion.",
          "Luxury resorts and retreats — Refined, private properties for incentive groups, leadership offsites and celebrations that unfold over several days.",
          "Conference and meeting hotels — Well-equipped spaces for larger gatherings, with the technical support and room capacity to match.",
          "Private estates and homes — Intimate, exclusive settings for small dinners, family celebrations and gatherings that call for privacy.",
          "Distinctive spaces — Gardens, riverfronts, tented camps and working estates: places that make an event feel unlike any other.",
        ],
      },
    ],
    closingLine:
      "Not sure which setting suits your plans? Tell us what you have in mind and we'll shortlist the right options.",
    cta: {
      label: "Request a Proposal",
      href: "#request-a-proposal",
      responseTime: "24-hours",
    },
  },
  {
    id: "browse-experiences",
    number: "02",
    title: "Browse Experiences",
    subtitle:
      "From private cultural encounters to culinary, wellness, wildlife and adventure experiences, discover ways to make an event memorable.",
    intro:
      "The moments guests talk about long afterwards are rarely the ones on the agenda. We build events around experiences that are personal, local and quietly extraordinary, arranged with the people who know these places best.",
    details: [
      {
        heading: "Cultural encounters",
        description:
          "Meet artisans in their studios, witness private ceremonies and performances, and spend time with the families and communities who keep traditions alive.",
      },
      {
        heading: "Culinary experiences",
        description:
          "From chef-led market walks to meals in a local family's home, the region's food tells its story best when it's shared.",
      },
      {
        heading: "Wellness experiences",
        description:
          "Sunrise yoga, Ayurvedic rituals and unhurried time in beautiful surroundings, so groups arrive at the next session rested and present.",
      },
      {
        heading: "Wildlife experiences",
        description:
          "Private safaris and guided nature walks led by naturalists who know the landscape and its wildlife intimately.",
      },
      {
        heading: "Adventure experiences",
        description:
          "Treks, rides and river journeys that bring a group together, from gentle outings to more active days.",
      },
    ],
    closingLine:
      "Every experience can be adapted to your group's size, pace and interests, or designed from scratch.",
    cta: {
      label: "Request Experiences",
      href: "#request-a-proposal",
      responseTime: "8 hours",
    },
  },
  {
    id: "request-a-proposal",
    number: "03",
    title: "Request a Proposal",
    subtitle: "Tell us what you are planning and our team will create a tailored proposal around your group, destination and objectives.",
    intro:
      "Whether you’re planning an incentive for two hundred or a private dinner for twenty, start by telling us what you have in mind. We'll take it from there and come back with a proposal designed around your group, not adapted from a template.",
    details: [
      {
        heading: "How it works",
        list: [
          "Tell us your plans. Share the basics in the proposal request form.",
          "We design. Our team shapes venues, experiences and logistics around your objectives.",
          "You review and refine. We adjust until every detail feels right.",
        ],
      },
    ],
    closingLine:
      "Tell us what you're planning and we’ll build a proposal around your priorities, destination and budget.",
    cta: {
      label: "Request a Proposal",
      href: "/events/events-board/request-a-proposal",
      responseTime: "8 hours",
    },
  },
  {
    id: "event-updates",
    number: "04",
    title: "Event Updates",
    subtitle: "The latest destinations, venues, openings, experiences and ideas from the Eastbound team.",
    intro:
      "A look at what's new and what we're excited about across the region: fresh venues, new experiences, and ideas from the team who plan and deliver these events on the ground.",
    details: [
      {
        heading: "What you'll find here",
        list: [
          "New venues — Properties and spaces recently added to our recommendations.",
          "Experience spotlights — One experience, and the story behind it.",
          "Destination notes — What's happening in the region and what to know when planning around it.",
          "From the team — Planning ideas, lessons learned and behind-the-scenes moments from our events.",
          "Openings and news — New hotels, restaurants and cultural spaces worth building an event around.",
        ],
      },
    ],
    closingLine:
      "Want these in your inbox? Subscribe below and we’ll share new updates as they’re published.",
    cta: {
      label: "Subscribe for Updates",
      href: "#event-updates",
      responseTime: "Newsletter",
    },
  },
  {
    id: "download-resources",
    number: "05",
    title: "Download Resources",
    subtitle: "Access useful destination guides, venue information, event resources and planning material.",
    intro:
      "Everything you need to start planning, in one place. Download what's useful and share it with your team.",
    details: [
      {
        heading: "Destination guides",
        description:
          "An overview of each destination, covering what it offers, when to visit and what to consider when planning a group event.",
        list: [
          "What's inside",
          "Destination snapshot: character, highlights and signature experiences",
          "Best suited for: incentive groups, conferences, celebrations, leadership retreats",
          "Best time to visit and what to plan around (weather, festivals, peak periods)",
          "Getting there: connectivity, transfer times and arrival considerations",
          "Group logistics: accommodation depth, ground transport and permits or entry requirements",
          "Cultural notes and responsible travel considerations",
          "Covers: India · UAE · Sri Lanka · Nepal · Bhutan",
        ],
        download: {
          label: "Download destination guides",
          href: `${eventsExchangePdfBase}/01_Destination_Guides.pdf`,
        },
      },
      {
        heading: "Venue information",
        description:
          "Venue types and event formats, to help you narrow down the right setting for your occasion.",
        list: [
          "What's inside",
          "Venue types: heritage palaces and havelis, luxury resorts, city hotels and convention centres, boutique properties, private estates, and unique outdoor or experiential settings",
          "Event formats: conferences and meetings, gala dinners, product launches, incentive programmes, offsites and celebrations",
          "Capacity guidance by venue type and format",
          "What each setting suits best, and what to weigh up (seasonality, access, exclusivity)",
          "Questions to ask when shortlisting a venue",
        ],
        download: {
          label: "Download venue information",
          href: `${eventsExchangePdfBase}/02_Venue_Information.pdf`,
        },
      },
      {
        heading: "Event planning checklist",
        description:
          "A practical checklist covering the key decisions, from first brief to final arrival.",
        list: [
          "What's inside",
          "Brief: objectives, audience, budget range, preferred dates and group size",
          "Destination and venue: shortlisting, site inspection and contracting",
          "Travel and accommodation: flights, transfers, room blocks and special requirements",
          "Programme: agenda, experiences, dining, entertainment and speakers",
          "Compliance and logistics: visas, permits, insurance and local regulations",
          "Guest experience: communications, welcome, on-ground support and contingency planning",
          "Final arrival: run sheets, briefings and post-event follow-up",
        ],
        download: {
          label: "Download event planning checklist",
          href: `${eventsExchangePdfBase}/03_Event_Planning_Checklist.pdf`,
        },
      },
      {
        heading: "Sample itineraries",
        description:
          "Example programmes for incentive groups, conferences and celebrations, shown as a starting point for your own.",
        list: [
          "Every programme we build is bespoke. These samples show how a plan can come together, and how the pace, experiences and moments of a programme can be shaped around your goals.",
          "What's inside",
          "Incentive group: a multi-day programme balancing signature experiences, free time and a standout gala evening",
          "Conference: working sessions paired with curated networking, dining and a cultural evening",
          "Celebration: a private, personalised programme built around a milestone, anniversary or family gathering",
          "Day-by-day flow, with notes on what can be adapted for group size, season and budget",
        ],
        download: {
          label: "Download sample itineraries",
          href: `${eventsExchangePdfBase}/04_Sample_Itineraries.pdf`,
        },
      },
      {
        heading: "Seasonality guide",
        description:
          "A month-by-month view of the best times to hold events across the region.",
        list: [
          "Timing can make or break an event. This at-a-glance guide shows when each destination is at its best, and when to plan around weather or peak periods.",
          "What's inside",
          "Month-by-month calendar for each destination",
          "Peak, shoulder and off-peak seasons, with what that means for availability and pricing",
          "Weather and climate notes by destination",
          "Festivals and cultural moments worth building into a programme",
          "Quick reference",
          "Destination — General guidance",
          "India — Roughly October to March is the most comfortable; monsoon runs from June to September.",
          "UAE — November to March is ideal; summer is very hot, though excellent for indoor events.",
          "Sri Lanka — West and south coasts are best from December to March; the east coast from April to September.",
          "Nepal — October-November and March-May are the clearest and most popular windows.",
          "Bhutan — March-May and September-November are the sweet spots.",
        ],
        download: {
          label: "Download seasonality guide",
          href: `${eventsExchangePdfBase}/05_Seasonality_Guide.pdf`,
        },
      },
    ],
    closingLine:
      "Useful planning tools, all in one place, ready to share with your team and stakeholders.",
    cta: {
      label: "Download Resources",
      href: "#download-resources",
      responseTime: "Downloads",
    },
  },
];
