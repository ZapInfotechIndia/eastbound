export type Service = {
  id: string;
  name: string;
  description: string;
  numeral: string;
};

export const services: Service[] = [
  {
    id: "discovery",
    numeral: "I",
    name: "Discovery Trips",
    description:
      "Bespoke itineraries into the East's oldest cultures — designed around what genuinely moves you.",
  },
  {
    id: "outdoor",
    numeral: "II",
    name: "Outdoor Experiences",
    description:
      "Private treks, wildlife safaris and river expeditions led by the region's most respected naturalists.",
  },
  {
    id: "cruises",
    numeral: "III",
    name: "Luxury Cruises",
    description:
      "Chartered yachts and river vessels along the Ganges, the Mekong and the Indian Ocean.",
  },
  {
    id: "photo",
    numeral: "IV",
    name: "Photography Tours",
    description:
      "Small-group journeys with award-winning photographers, staged around light, ritual and season.",
  },
  {
    id: "education",
    numeral: "V",
    name: "Educational Travel",
    description:
      "Immersive learning residencies — from Vedic philosophy in Varanasi to Buddhist thought in Thimphu.",
  },
  {
    id: "voluntourism",
    numeral: "VI",
    name: "Voluntourism",
    description:
      "Meaningful engagement with the communities we visit, in partnership with vetted local foundations.",
  },
];
