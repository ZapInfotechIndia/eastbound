export type AgentResourceTab = {
  id: string;
  label: string;
};

export type AgentResourceItinerary = {
  id: string;
  number: string;
  title: string;
  image: string;
  duration: string;
  route: string;
  story: string;
  highlights: string[];
  cta: string;
};

export type AgentResourceExperience = {
  id: string;
  number: string;
  title: string;
  image: string;
  description: string;
  destination: string;
};

export type AgentResourceFestival = {
  id: string;
  number: string;
  title: string;
  image: string;
  location: string;
  description: string;
  bestFor: string;
  when: string;
  cta: string;
};

export type AgentResourceMapGuide = {
  id: string;
  title: string;
  image: string;
  intro: string;
  guideLabel: string;
  items: string[];
};

export type AgentResourceSection = {
  id: string;
  label: string;
  title: string;
  description: string;
  items?: Array<
    | AgentResourceItinerary
    | AgentResourceExperience
    | AgentResourceFestival
    | AgentResourceMapGuide
  >;
};

export const agentResourceHighlights = [
  {
    title: "Destination guides",
    description:
      "Expert-led briefs for key markets, including route ideas, cultural notes, and practical planning advice.",
    href: "https://www.travolgo.com/home",
  },
  {
    title: "Travel tools",
    description:
      "Quick access to itinerary frameworks, booking workflows, and client-ready planning materials.",
    href: "https://www.travolgo.com/home",
  },
  {
    title: "Marketing assets",
    description:
      "Campaign-ready visuals and narrative prompts to support sales conversations and client storytelling.",
    href: "https://www.travolgo.com/home",
  },
] as const;

export const agentResourceTabs: AgentResourceTab[] = [
  { id: "itineraries", label: "Itineraries" },
  { id: "signature-experiences", label: "Signature Experiences" },
  { id: "festival-calendar", label: "Festival Calendar" },
  {
    id: "maps-guidelines",
    label: "Maps, Guidelines & Everything You Need to Know",
  },
];

export const agentResourceItineraries: AgentResourceItinerary[] = [
  {
    id: "rajasthan-palaces-people-thar",
    number: "01",
    title: "Rajasthan - Palaces, People & the Thar",
    image: "/images/destinations/india/1.jpg",
    duration: "10 nights / 11 days",
    route: "Delhi - Agra - Jaipur - Jodhpur - Udaipur",
    story:
      "A journey through Rajasthan's grandest cities and quieter corners, moving from Mughal architecture and royal palaces to desert landscapes, intimate cultural encounters and some of India's finest hotels.",
    highlights: [
      "Sunrise at the Taj Mahal",
      "Private access to Jaipur's architectural treasures",
      "Exploring Jodhpur beyond the Blue City",
      "A desert experience in the Thar",
      "Lakeside Udaipur",
      "Private culinary and cultural experiences",
    ],
    cta: "View Itinerary",
  },
  {
    id: "kerala-art-of-slowing-down",
    number: "02",
    title: "Kerala - The Art of Slowing Down",
    image: "/images/destinations/india/2.jpg",
    duration: "8 nights / 9 days",
    route: "Cochin - Kumarakom - Marari - Thekkady - Cochin",
    story:
      "Kerala is best experienced slowly - through backwaters, spice gardens, ancient healing traditions, coastal villages and long afternoons where the only agenda is to do less.",
    highlights: [
      "Heritage Cochin",
      "Private backwater cruise",
      "Spice country",
      "Wildlife and nature experiences",
      "Ayurveda and wellness",
      "Kerala cuisine with local hosts",
    ],
    cta: "View Itinerary",
  },
  {
    id: "madhya-pradesh-tigers-temples-wild",
    number: "03",
    title: "Madhya Pradesh - Tigers, Temples & the Wild",
    image: "/images/destinations/india/3.jpg",
    duration: "9 nights / 10 days",
    route: "Delhi - Khajuraho - Panna - Bandhavgarh - Kanha",
    story:
      "A journey into one of India's most rewarding wildlife regions, combining extraordinary temples with some of the country's finest tiger country.",
    highlights: [
      "Khajuraho's extraordinary temples",
      "Panna National Park",
      "Private wildlife safaris",
      "Tiger tracking with expert naturalists",
      "Forest experiences",
      "Rural and cultural encounters",
    ],
    cta: "View Itinerary",
  },
  {
    id: "kashmir-valleys-lakes-himalayas",
    number: "04",
    title: "Kashmir - Valleys, Lakes & the Himalayas",
    image: "/images/destinations/nepal/4.jpg",
    duration: "7 nights / 8 days",
    route: "Srinagar - Pahalgam - Gulmarg - Srinagar",
    story:
      "Kashmir at its most beautiful - from houseboats and Mughal gardens to mountain valleys, alpine landscapes and the extraordinary hospitality of the region.",
    highlights: [
      "Stay on a traditional houseboat",
      "Shikara on Dal Lake",
      "Mughal gardens",
      "Pahalgam valley",
      "Gulmarg and the Himalayas",
      "Kashmiri cuisine and culture",
    ],
    cta: "View Itinerary",
  },
  {
    id: "ladakh-above-the-clouds",
    number: "05",
    title: "Ladakh - Above the Clouds",
    image: "/images/destinations/nepal/2.jpg",
    duration: "8 nights / 9 days",
    route: "Leh - Alchi - Nubra - Pangong - Leh",
    story:
      "A high-altitude journey through monasteries, stark Himalayan landscapes, ancient trade routes and remote villages.",
    highlights: [
      "Acclimatisation in Leh",
      "Ancient monasteries",
      "Alchi's remarkable art",
      "Nubra Valley",
      "Pangong Lake",
      "Conversations with local communities",
    ],
    cta: "View Itinerary",
  },
  {
    id: "bhutan-beyond-the-postcard",
    number: "06",
    title: "Bhutan - Beyond the Postcard",
    image: "/images/destinations/Bhutan/1.jpg",
    duration: "8 nights / 9 days",
    route: "Paro - Thimphu - Punakha - Gangtey - Paro",
    story:
      "Bhutan is not a destination to rush through. This journey explores its monasteries, forests, mountain valleys and distinctive philosophy of life at an unhurried pace.",
    highlights: [
      "Tiger's Nest",
      "Thimphu's cultural landmarks",
      "Punakha Valley",
      "Gangtey and the Phobjikha Valley",
      "Buddhist traditions",
      "Himalayan walks and local encounters",
    ],
    cta: "View Itinerary",
  },
  {
    id: "nepal-kathmandu-to-the-himalayas",
    number: "07",
    title: "Nepal - Kathmandu to the Himalayas",
    image: "/images/destinations/nepal/1.jpg",
    duration: "8 nights / 9 days",
    route: "Kathmandu - Pokhara - Himalayan foothills - Kathmandu",
    story:
      "Ancient cities, living temples, mountain views and the unmistakable energy of Kathmandu come together in a journey that moves from culture into the Himalayas.",
    highlights: [
      "Kathmandu's UNESCO heritage",
      "Private cultural walks",
      "Himalayan sunrise",
      "Pokhara",
      "Mountain villages",
      "Optional trekking experiences",
    ],
    cta: "View Itinerary",
  },
  {
    id: "sri-lanka-tea-wildlife-ocean",
    number: "08",
    title: "Sri Lanka - Tea, Wildlife & the Ocean",
    image: "/images/destinations/srilanka/1.jpg",
    duration: "9 nights / 10 days",
    route:
      "Colombo - Cultural Triangle - Kandy - Tea Country - Yala - South Coast",
    story:
      "A journey across Sri Lanka's extraordinary contrasts - ancient cities, tea country, wildlife reserves and the Indian Ocean.",
    highlights: [
      "Ancient heritage sites",
      "Kandy",
      "Tea country by train",
      "Wildlife safari",
      "Colonial and contemporary cuisine",
      "Beachside finale",
    ],
    cta: "View Itinerary",
  },
  {
    id: "india-grand-northern-journey",
    number: "09",
    title: "India - The Grand Northern Journey",
    image: "/images/destinations/india/4.jpg",
    duration: "12 nights / 13 days",
    route: "Delhi - Agra - Jaipur - Jodhpur - Udaipur - Mumbai",
    story:
      "India's north in one extraordinary sweep - imperial cities, royal Rajasthan, Mughal history, contemporary India and some of the country's most exceptional hotels.",
    highlights: [
      "Imperial heritage cities",
      "Royal Rajasthan",
      "Mughal history and architecture",
      "Contemporary India",
      "Exceptional hospitality",
      "Luxury city-to-city transitions",
    ],
    cta: "View Itinerary",
  },
];

export const agentResourceSignatureExperiences: AgentResourceExperience[] = [
  {
    id: "private-morning-at-the-taj",
    number: "01",
    title: "A Private Morning at the Taj",
    image: "/images/experiences/photo.jpg",
    description:
      "See the Taj Mahal before the crowds arrive, followed by a private breakfast experience and deeper exploration of Agra's Mughal heritage.",
    destination: "Agra, India",
  },
  {
    id: "dinner-in-maharajas-palace",
    number: "02",
    title: "Dinner in a Maharaja's Palace",
    image: "/images/destinations/india/1.jpg",
    description:
      "An evening of architecture, history and cuisine in one of Rajasthan's grand historic residences.",
    destination: "Jaipur, India",
  },
  {
    id: "into-the-wild-with-a-naturalist",
    number: "03",
    title: "Into the Wild with a Naturalist",
    image: "/images/experiences/birds.jpg",
    description:
      "Spend a day in India's tiger country with an experienced naturalist, learning to read the forest rather than simply looking for wildlife.",
    destination: "Central India",
  },
  {
    id: "the-spice-route",
    number: "04",
    title: "The Spice Route",
    image: "/images/experiences/walk.jpg",
    description:
      "Walk through Kerala's spice-growing country and discover the ingredients, traditions and stories behind one of India's most distinctive cuisines.",
    destination: "Kerala, India",
  },
  {
    id: "himalayan-monastery-at-dawn",
    number: "05",
    title: "A Himalayan Monastery at Dawn",
    image: "/images/destinations/Bhutan/1.jpg",
    description:
      "Experience the stillness of a Himalayan monastery as the day begins - bells, incense, mountain light and centuries-old Buddhist traditions.",
    destination: "Bhutan / Ladakh / Nepal",
  },
  {
    id: "tea-country-by-train",
    number: "06",
    title: "Tea Country by Train",
    image: "/images/destinations/srilanka/1.jpg",
    description:
      "Travel through Sri Lanka's spectacular highlands by train, moving through tea plantations, mountain villages and mist-covered landscapes.",
    destination: "Kandy, Sri Lanka",
  },
  {
    id: "day-with-a-local-artisan",
    number: "07",
    title: "A Day with a Local Artisan",
    image: "/images/agent/ag-bg-1.jpg",
    description:
      "Go behind the scenes with an artisan and understand the skill, history and community behind a traditional craft.",
    destination: "Delhi, India",
  },
  {
    id: "night-under-the-desert-sky",
    number: "08",
    title: "A Night Under the Desert Sky",
    image: "/images/destinations/india/2.jpg",
    description:
      "Leave the conventional desert camp behind for a more intimate experience of Rajasthan's Thar - sunset, local food, storytelling and an extraordinary night sky.",
    destination: "Jodhpur, India",
  },
  {
    id: "cooking-at-home-in-kathmandu",
    number: "09",
    title: "Cooking at Home in Kathmandu",
    image: "/images/destinations/nepal/1.jpg",
    description:
      "Spend time with a local family, explore the ingredients and traditions of Nepalese cooking, and sit down to a meal prepared together.",
    destination: "Kathmandu, Nepal",
  },
  {
    id: "bhutans-living-philosophy",
    number: "10",
    title: "Bhutan's Living Philosophy",
    image: "/images/destinations/Bhutan/2.jpg",
    description:
      "Go beyond temples and monuments to explore the ideas, rituals and traditions that shape everyday Bhutanese life.",
    destination: "Thimpu, Bhutan",
  },
  {
    id: "photography-at-first-light",
    number: "11",
    title: "Photography at First Light",
    image: "/images/experiences/photo.jpg",
    description:
      "A carefully timed photography experience designed around light, landscape, wildlife and access - with an expert photographer or local specialist.",
    destination: "India / Bhutan / Nepal / Sri Lanka",
  },
  {
    id: "slow-art-of-ayurveda",
    number: "12",
    title: "The Slow Art of Ayurveda",
    image: "/images/experiences/photo.jpg",
    description:
      "An immersive introduction to Ayurveda, combining consultation, traditional treatments, food and the philosophy behind Kerala's wellness traditions.",
    destination: "Kerala, India",
  },
];

export const agentResourceFestivals: AgentResourceFestival[] = [
  {
    id: "hornbill-festival",
    number: "01",
    title: "Hornbill Festival",
    image: "/images/destinations/nepal/3.jpg",
    location: "Nagaland, India",
    description:
      "A spectacular celebration of the culture, music, crafts, food and traditions of Nagaland, bringing together the state's many communities.",
    bestFor: "Culture, photography, music and immersive travel.",
    when: "December, dates vary annually.",
    cta: "Explore the Journey",
  },
  {
    id: "pushkar-camel-fair",
    number: "02",
    title: "Pushkar Camel Fair",
    image: "/images/destinations/india/1.jpg",
    location: "Rajasthan, India",
    description:
      "One of Rajasthan's most atmospheric gatherings, where pilgrimage, livestock trading, music, colour and desert life come together around the sacred town of Pushkar.",
    bestFor: "Photography, culture and Rajasthan journeys.",
    when: "October/November, dates vary annually.",
    cta: "Explore the Journey",
  },
  {
    id: "hemis-festival",
    number: "03",
    title: "Hemis Festival",
    image: "/images/destinations/Bhutan/1.jpg",
    location: "Ladakh, India",
    description:
      "A remarkable Buddhist festival held at Hemis Monastery, featuring traditional masked dances, music and centuries-old ritual.",
    bestFor: "Culture, spirituality and photography.",
    when: "Usually June/July, according to the lunar calendar.",
    cta: "Explore the Journey",
  },
  {
    id: "kandy-esala-perahera",
    number: "04",
    title: "Kandy Esala Perahera",
    image: "/images/destinations/srilanka/1.jpg",
    location: "Kandy, Sri Lanka",
    description:
      "One of Sri Lanka's most significant Buddhist celebrations, with processions, traditional dancers, drummers and ceremonial performances filling the streets of Kandy.",
    bestFor: "Culture, photography and Sri Lankan heritage.",
    when: "July/August, according to the lunar calendar.",
    cta: "Explore the Journey",
  },
];

export const agentResourceMaps: AgentResourceMapGuide[] = [
  {
    id: "india-guide",
    title: "India",
    image: "/images/destinations/india/1.jpg",
    intro:
      "India, in all its contradictions.\nA destination of extraordinary scale - from the Himalayas to the Indian Ocean, from ancient cities to contemporary metropolises.",
    guideLabel: "India Guide",
    items: [
      "Where to go",
      "When to go",
      "Getting there",
      "Visa & entry requirements",
      "Getting around",
      "Regions & destinations",
      "Weather",
      "What to pack",
      "Food & dining",
      "Culture & etiquette",
      "Health & safety",
      "Money & currency",
      "Useful information",
      "Downloadable maps",
    ],
  },
  {
    id: "bhutan-guide",
    title: "Bhutan",
    image: "/images/destinations/Bhutan/1.jpg",
    intro:
      "A kingdom with a different measure of time.\nBhutan is best approached slowly - through its monasteries, mountain valleys, forests and deeply rooted traditions.",
    guideLabel: "Bhutan Guide",
    items: [
      "When to go",
      "Visa & entry requirements",
      "Getting there",
      "Getting around",
      "Where to stay",
      "Festivals",
      "Culture & etiquette",
      "Trekking & outdoor experiences",
      "What to pack",
      "Currency",
      "Practical information",
      "Maps",
    ],
  },
  {
    id: "nepal-guide",
    title: "Nepal",
    image: "/images/destinations/nepal/1.jpg",
    intro:
      "Where ancient cities meet the Himalayas.\nFrom the temples and courtyards of Kathmandu to the foothills of the world's greatest mountains, Nepal rewards curiosity.",
    guideLabel: "Nepal Guide",
    items: [
      "Where to go",
      "When to go",
      "Visa & entry requirements",
      "Getting there",
      "Getting around",
      "Trekking information",
      "Weather",
      "What to pack",
      "Culture & etiquette",
      "Food",
      "Currency",
      "Health & safety",
      "Maps",
    ],
  },
  {
    id: "sri-lanka-guide",
    title: "Sri Lanka",
    image: "/images/destinations/srilanka/1.jpg",
    intro:
      "One island. Extraordinary variety.\nAncient cities, tea country, wildlife, beaches and some of South Asia's most compelling food and hospitality - all within one remarkably compact island.",
    guideLabel: "Sri Lanka Guide",
    items: [
      "Where to go",
      "When to go",
      "Visa & entry requirements",
      "Getting there",
      "Getting around",
      "Wildlife",
      "Beaches",
      "Tea country",
      "Culture & etiquette",
      "Food",
      "Weather",
      "Currency",
      "What to pack",
      "Maps",
    ],
  },
];

export const agentResourceSections: AgentResourceSection[] = [
  {
    id: "itineraries",
    label: "Itineraries",
    title: "Itineraries",
    description:
      "A curated collection of signature journeys across India and the subcontinent.",
    items: agentResourceItineraries,
  },
  {
    id: "signature-experiences",
    label: "Signature Experiences",
    title: "Signature Experiences",
    description:
      "A collection of private, immersive experiences designed to go beyond standard sightseeing.",
    items: agentResourceSignatureExperiences,
  },
  {
    id: "festival-calendar",
    label: "Festival Calendar",
    title: "Festival Calendar",
    description:
      "A seasonal guide to remarkable festivals across South Asia and the Himalayas.",
    items: agentResourceFestivals,
  },
  {
    id: "maps-guidelines",
    label: "Maps, Guidelines & Everything You Need to Know",
    title: "MAPS, GUIDELINES & EVERYTHING YOU NEED TO KNOW",
    description:
      "Country-specific planning guides and practical information for individual destinations.",
    items: agentResourceMaps,
  },
];
