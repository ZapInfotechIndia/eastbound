import type { FeatureBlock } from "./experiencePages";

export const serviceHero = {
  eyebrow: "Services",
  title: "Solutions for Every Travel Programme",
  copy: "Whether you're designing a bespoke luxury holiday or managing a large-scale incentive group, our destination experts deliver end-to-end support - from first concept through to final departure.",
};

export const servicePages: FeatureBlock[] = [
  {
    id: "luxury-fit",
    index: "01",
    name: "Luxury FIT Travel",
    tagline: "Highly personalised journeys crafted for discerning travellers.",
    intro:
      "Every luxury FIT itinerary we build starts from a blank page. Working closely with our travel-trade partners, we design bespoke journeys around each traveller's interests, pace and level of comfort, backed by hand-picked properties and private guides.",
    points: [
      "Fully tailored, private itineraries",
      "Curated luxury and boutique properties across all destinations",
      "Private guides, drivers and exclusive experiences",
      "Dedicated senior team members and concierge support throughout the journey",
    ],
    faqs: [
      {
        q: "What is a luxury FIT itinerary?",
        a: "A luxury FIT (Free Independent Traveller) itinerary is a fully tailored, private journey built around one traveller or party, rather than a fixed group tour.",
      },
    ],
    cta: "Enquire About Luxury FIT",
    image: "/images/services/luxury.jpg",
  },
  {
    id: "incentives",
    index: "02",
    name: "Incentives & Meetings",
    tagline:
      "Creative programmes that inspire teams and deliver unforgettable experiences.",
    intro:
      "We design and deliver incentive and meeting programmes that combine flawless logistics with genuinely memorable experiences - from gala dinners in heritage venues to team activities that couldn't happen anywhere else.",
    points: [
      "End-to-end MICE planning and on-site management",
      "Venue sourcing across hotels, palaces and unique spaces",
      "Creative theming, entertainment and gala events",
      "Dedicated on-ground teams for groups of any size",
    ],
    faqs: [
      {
        q: "Does Eastbound handle MICE programmes in the UAE as well as India?",
        a: "Yes - Eastbound's MICE-ready venues and logistics span both the sub-continent and the UAE, including Dubai and Abu Dhabi.",
      },
    ],
    cta: "Enquire About Incentives & Meetings",
    image: "/images/services/meetings.jpg",
  },
  {
    id: "educational",
    index: "03",
    name: "Educational Travel",
    tagline:
      "Meaningful learning experiences for schools, universities and academic institutions.",
    intro:
      "Our educational travel programmes are built around curriculum-relevant learning outcomes, combining expert-led sessions with immersive, hands-on experiences - all delivered with the safety and structure academic groups require.",
    points: [
      "Curriculum-aligned themes: history, ecology, art, architecture and more",
      "Vetted local experts, lecturers and guides",
      "Full duty-of-care planning and risk management",
      "Group logistics for schools, universities and academic institutions",
    ],
    faqs: [
      {
        q: "Does Eastbound handle duty-of-care planning for student groups?",
        a: "Yes - full duty-of-care planning and risk management is built into every educational travel programme.",
      },
    ],
    cta: "Enquire About Educational Travel",
    image: "/images/services/education.jpg",
  },
  {
    id: "special-interest",
    index: "04",
    name: "Special Interest & Affinity Groups",
    tagline:
      "From culinary journeys and photography adventures to heritage tours, wellness retreats and beyond.",
    intro:
      "For groups travelling around a shared passion, we design programmes led by genuine specialists - chefs, historians, wellness practitioners and more - so every day of the trip speaks directly to why the group came together.",
    points: [
      "Culinary journeys with chefs, markets and cooking classes",
      "Heritage and history-focused group tours",
      "Wellness and yoga retreats",
      "Custom themes built around any shared interest",
    ],
    faqs: [
      {
        q: "Can Eastbound build a custom group programme around a theme not listed on the site?",
        a: "Yes - special interest programmes are built around whatever the group's shared passion is, beyond the standard culinary, wellness and heritage themes. It could be textiles, fashion, Hyrox, Marathon, IronMan or just an extended marathon shopping expedition.",
      },
    ],
    cta: "Build a Special Interest Programme",
    image: "/images/services/camp.jpg",
  },
];

export const partnerQuotes = [
  {
    quote:
      "Working with Eastbound means peace of mind. Their local expertise and flawless execution make every programme effortless.",
    author: "Ruth York",
    role: "Senior Partner",
  },
  {
    quote:
      "An exceptional partner that understands our clients as well as we do.",
    author: "Suzie McLaren",
    role: "Travel Designer",
  },
];
