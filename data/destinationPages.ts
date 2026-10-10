// Use images from the public folder. If a specific destination image
// doesn't exist yet, fall back to a generic hero image.
const india = "/images/destinations/india.jpg";
const nepal = "/images/destinations/nepal/1.jpg"; // fallback
const bhutan = "/images/destinations/bhutan.jpg";
const srilanka = "/images/destinations/srilanka.jpg";
const uae = "/images/destinations/uae/1.jpg"; // fallback

export type DestinationPage = {
  id: string;
  index: string;
  name: string;
  tagline: string;
  intro: string;
  highlights: { label: string; detail: string }[];
  cta: string;
  image: string;
};

export const destinationHero = {
  eyebrow: "Destinations",
  title: "Discover India and the Sub-Continent Through Local Experts",
  copy: "Every destination tells a different story. From Himalayan kingdoms and ancient temples to wildlife, wellness retreats and vibrant cities, our teams know every region intimately - and design every journey around it.",
};

export const destinationPages: DestinationPage[] = [
  {
    id: "india",
    index: "01",
    name: "India",
    tagline:
      "A land of timeless heritage, luxury, wildlife and diverse cultures.",
    intro:
      "From the palaces of Rajasthan and the ghats of Varanasi to the tiger reserves of Central India and the backwaters of Kerala, India rewards travellers who go beyond the obvious. Our teams on the ground curate access most visitors never see.",
    highlights: [
      {
        label: "Heritage & royal India",
        detail: "Palace stays, private guides, living history",
      },
      {
        label: "Wildlife & nature",
        detail: "Tiger safaris, birding circuits, Himalayan trekking",
      },
      {
        label: "Wellness & Ayurveda",
        detail: "Retreats rooted in centuries-old tradition",
      },
      {
        label: "Culinary & cultural immersion",
        detail: "Artisans, chefs and local communities",
      },
    ],
    cta: "Plan an India Journey",
    image: india,
  },
  {
    id: "uae",
    index: "02",
    name: "UAE",
    tagline: "Modern luxury, desert adventures and world-class events.",
    intro:
      "The UAE pairs seamlessly with our sub-continent destinations, offering a contemporary counterpoint of five-star city stays, desert experiences and world-class events and incentive infrastructure.",
    highlights: [
      { label: "City breaks", detail: "Dubai and Abu Dhabi luxury stays" },
      {
        label: "Desert experiences",
        detail: "Overnight camps, dune adventures, falconry",
      },
      {
        label: "MICE-ready",
        detail: "Venues and logistics for meetings and incentive groups",
      },
      {
        label: "Stopover programmes",
        detail: "Designed to connect with sub-continent itineraries",
      },
    ],
    cta: "Plan a UAE Journey",
    image: uae,
  },
  {
    id: "nepal",
    index: "03",
    name: "Nepal",
    tagline: "Mountains, monasteries and unforgettable adventures.",
    intro:
      "Nepal offers some of the world's most dramatic landscapes alongside a deep spiritual heritage. We design everything from gentle cultural circuits in the Kathmandu Valley to serious Himalayan trekking and mountain-flight experiences.",
    highlights: [
      {
        label: "Kathmandu Valley",
        detail: "UNESCO heritage sites and living temple culture",
      },
      {
        label: "Trekking & mountain journeys",
        detail: "From teahouse trails to premium lodges",
      },
      { label: "Wildlife", detail: "Jungle safaris in Chitwan and Bardia" },
      {
        label: "Adventure",
        detail: "White-water rafting, mountain flights, paragliding",
      },
    ],
    cta: "Plan a Nepal Journey",
    image: nepal,
  },
  {
    id: "bhutan",
    index: "04",
    name: "Bhutan",
    tagline:
      "Authentic Himalayan experiences centred on happiness and sustainability.",
    intro:
      "The last Himalayan kingdom, Bhutan is a destination of controlled, considered tourism — and that suits the way we travel. We handle every permit and logistic detail so travellers can focus on a country unlike anywhere else on earth.",
    highlights: [
      {
        label: "Cultural immersion",
        detail: "Dzongs, monasteries and festivals",
      },
      {
        label: "Trekking",
        detail: "From short scenic walks to multi-day Himalayan routes",
      },
      {
        label: "Wellness",
        detail: "Traditional Bhutanese healing and hot stone baths",
      },
      {
        label: "Sustainable travel",
        detail: "Responsible tourism woven into every itinerary",
      },
    ],
    cta: "Plan a Bhutan Journey",
    image: bhutan,
  },
  {
    id: "srilanka",
    index: "05",
    name: "Sri Lanka",
    tagline: "Tea country, wildlife, beaches and rich cultural heritage.",
    intro:
      "Compact but extraordinarily diverse, Sri Lanka moves from ancient cities and misty tea estates to leopard-rich national parks and palm-fringed coastline within a few hours' drive. We build itineraries that make the most of that range.",
    highlights: [
      {
        label: "Cultural triangle",
        detail: "Ancient cities, cave temples, Kandy",
      },
      {
        label: "Wildlife",
        detail: "Leopard and elephant safaris in Yala and Wilpattu",
      },
      {
        label: "Tea country",
        detail: "Highland estates and scenic rail journeys",
      },
      {
        label: "Coastal escapes",
        detail: "Beach stays along the south and east coasts",
      },
    ],
    cta: "Plan a Sri Lanka Journey",
    image: srilanka,
  },

];

export type IndiaCity = { name: string; region: string; note: string };

export const indiaCities: IndiaCity[] = [
  {
    name: "Delhi",
    region: "North",
    note: "Mughal monuments, Lutyens' avenues and the gateway to the Golden Triangle.",
  },
  {
    name: "Jaipur",
    region: "Rajasthan",
    note: "Palace hotels, block printers and the amber forts above the city.",
  },
  {
    name: "Udaipur",
    region: "Rajasthan",
    note: "Lake palaces, miniature painters and evening boats on Pichola.",
  },
  {
    name: "Jodhpur",
    region: "Rajasthan",
    note: "The blue city beneath Mehrangarh, and the Thar beyond it.",
  },
  {
    name: "Agra",
    region: "Uttar Pradesh",
    note: "Sunrise at the Taj, plus the quieter marvels of Fatehpur Sikri.",
  },
  {
    name: "Varanasi",
    region: "Uttar Pradesh",
    note: "The ghats at first light and the slow theatre of the Ganges.",
  },
  {
    name: "Mumbai",
    region: "West",
    note: "Art deco waterfronts, gallery districts and a formidable food city.",
  },
  {
    name: "Kochi",
    region: "Kerala",
    note: "Spice-trade history, Fort Kochi galleries and the backwaters south.",
  },
  {
    name: "Kolkata",
    region: "East",
    note: "Colonial architecture, coffee houses and India's literary heart.",
  },
  {
    name: "Amritsar",
    region: "Punjab",
    note: "The Golden Temple, community kitchens and Punjabi hospitality.",
  },
];
