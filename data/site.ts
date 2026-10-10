export const site = {
  name: "Eastbound",
  tagline: "Journeys of quiet luxury across the East.",
  description:
    "Eastbound crafts private, luxurious travel experiences across Bhutan, Nepal, India, Sri Lanka and the UAE — designed for the world's most discerning travellers.",
  email: "info@eastboundgroup.com",
  phone: "+91 9650274785",
  address: "898 Udyog Vihar, Phase 1, Gurgaon, Haryana, India",
  social: {
    instagram: "https://instagram.com/eastboundgroup",
    linkedin: "https://www.linkedin.com/company/east-bound-official/home/",
    facebook: "https://www.facebook.com/eastboundtravels/",
  },
  nav: [
    { label: "Destinations", href: "/destinations" },
    { label: "Experiences", href: "/experiences" },
    { label: "Services", href: "/services" },
    { label: "Newsletters", href: "/newsletters" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact", href: "/contact" },
  ],
  offices: [
    {
      country: "India",
      label: "India Head Office",
      lines: ["898 Udyog Vihar, Phase 1", "Gurgaon, Haryana"],
      phone: "+91 9650274785",
      email: "disha@eastboundgroup.com",
    },
    {
      country: "UAE",
      label: "Dubai",
      lines: [
        "Office No. 1308, Burjuman Business Tower",
        "Al Mankhool, Sheikh Khalifa Bin Zayed Road",
        "PO Box 114551, Dubai, United Arab Emirates",
      ],
      phone: "+971 55 630 6185",
      email: "smehta@eastboundgroup.com",
    },
    {
      country: "Sri Lanka",
      label: "Eastbound Sri Lanka",
      lines: ["20 Center Road, Jayanthipura", "Battaramulla, Sri Lanka"],
      phone: "+94 71 04 22 534",
      email: "srilanka@eastboundgroup.com",
    },
    {
      country: "Bhutan",
      label: "Eastbound Bhutan",
      lines: ["P/O Box 848, Kewang Building,", "Norzin Lam Thimpu, Bhutan"],
      phone: "+124-421- 7800",
      email: "bhutan@eastboundgroup.com",
    },
    {
      country: "Nepal",
      label: "Eastbound Nepal",
      lines: ["525, Ranibari, Samakhushi", "Kathmandu-3, Nepal"],
      phone: "+977 1 4350108",
      email: "nepal@eastboundgroup.com",
    },
  ],
} as const;
