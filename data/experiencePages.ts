// Use images from the public folder (served from /images/...)

export type FeatureBlock = {
  id: string;
  index: string;
  name: string;
  tagline: string;
  intro: string;
  points?: string[];
  faqs?: { q: string; a: string }[];
  cta: string;
  image: string;
};

export const experienceHero = {
  eyebrow: "Signature Experiences",
  title: "Experiences Designed Around You",
  copy: "Travel becomes memorable when it's built around shared interests. Whether it's photography, birding, walking trails or cultural immersion, we create specialist journeys that connect travellers with authentic experiences — led by experts who share the passion.",
};

export const experiencePages: FeatureBlock[] = [
  {
    id: "photography",
    index: "01",
    name: "Photography Expeditions",
    tagline:
      "Capture extraordinary landscapes, wildlife and cultures with award-winning photographers.",
    intro:
      "Designed with working photographers, Eastbound’s photography expeditions build in the access, timing and patience a great image demands - private vehicles, extended time at key locations, and guides who understand light as well as logistics.",
    // points: [
    //   "Small-group and private departures with dedicated vehicles",
    //   "Golden-hour access to wildlife reserves and heritage sites",
    //   "Expert photography escorts, guides and local liaisoning",
    //   "Itineraries built around light, season and subject",
    // ],
    faqs: [
      {
        q: "Are Eastbound’s photography tours private or group departures?",
        a: "Both - small-group and private departures are available, each with dedicated vehicles and expert photography escorts.",
      },
    ],
    cta: "Plan a Photography Expedition",
    image: "/images/experiences/photo.jpg",
  },
  {
    id: "birding",
    index: "02",
    name: "Birding Tours",
    tagline: "Explore some of Asia's richest biodiversity hotspots.",
    intro:
      "From the wetlands of Keoladeo to the cloud forests of Sri Lanka and the Himalayan foothills of Bhutan and Nepal, our birding tours are led by specialist naturalist guides who know the calls, the seasons and the sites.",
    // points: [
    //   "Specialist naturalist and birding guides",
    //   "Access to premier reserves and lesser-known sites alike",
    //   "Itineraries timed to migration and breeding seasons",
    //   "Options from relaxed lodge-based tours to serious listing trips",
    // ],
    faqs: [
      {
        q: "Are Eastbound’s birding tours suitable for serious listers as well as casual travellers?",
        a: "Yes - options range from relaxed, lodge-based birding to serious listing trips, all timed to migration and breeding seasons.",
      },
    ],
    cta: "Plan a Birding Tour",
    image: "/images/experiences/birds.jpg",
  },
  {
    id: "walking",
    index: "03",
    name: "Walking Journeys",
    tagline:
      "Slow travel through heritage towns, villages and natural landscapes.",
    intro:
      "Eastbound's walking journeys trade the coach window for footpaths - moving through landscapes and communities at a pace that allows for genuine connection, with comfortable accommodation and support vehicles never far away.",
    // points: [
    //   "Village-to-village routes through heritage regions",
    //   "Gentle to moderate difficulty, graded for the traveller",
    //   "Local guides sharing history, culture and cuisine along the way",
    //   "Comfortable stays and luggage transfers built in",
    // ],
    faqs: [
      {
        q: "How difficult are Eastbound’s walking journeys?",
        a: "Routes are graded from gentle to moderate difficulty to suit the traveller, with comfortable stays and luggage transfers included.",
      },
    ],
    cta: "Plan a Walking Journey",
    image: "/images/experiences/walk.jpg",
  },
  {
    id: "cultural",
    index: "04",
    name: "Cultural Immersions",
    tagline: "Meet artisans, chefs, historians and local communities.",
    intro:
      "These are journeys built around people, not just places - private studio visits with artisans, cooking sessions with home chefs, and conversations with historians and community leaders that go far beyond a standard guided tour.",
    // points: [
    //   "Private access to artisans, chefs and craftspeople",
    //   "Home-hosted meals and community-based experiences",
    //   "Curated by local experts with long-standing relationships",
    //   "Adaptable for individual travellers or small groups",
    // ],
    faqs: [
      {
        q: "Are cultural immersion trips available for individual travellers?",
        a: "Yes - these journeys are adaptable for individual travellers as well as small groups.",
      },
    ],
    cta: "Plan a Cultural Immersion",
    image: "/images/experiences/photo.jpg",
  },
];
