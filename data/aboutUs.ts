export type PersonProfile = {
  name: string;
  role: string;
  location?: string;
  image?: string;
  biography: string[];
};

export const aboutUsHero = {
  eyebrow: "About Eastbound",
  title: "Local Knowledge. Global Standards.",
  introduction:
    "Founded in 2006, Eastbound is a specialist destination management company spanning India, Nepal, Bhutan, Sri Lanka and the UAE. Meet the founders and the philosophy behind two decades of bespoke travel design.",
};

export const aboutUsStory = {
  eyebrow: "Our Story",
  title: "Built here, shaped by two decades of travel.",
  paragraphs: [
    "Eastbound was founded in 2006 on a simple premise: that the best travel experiences are built from the ground up, by people who live in the destinations they design for, not by people looking at them from a head office overseas. What began as a specialist boutique has grown, over two decades, into a full destination management group spanning five countries — serving luxury tour operators, incentive houses and educational institutions worldwide.",
    "That founding philosophy — local intelligence, meticulous planning and hands-on execution — still shapes every itinerary Eastbound builds today, from a single-traveller birding expedition to a 200-delegate incentive programme.",
  ],
  milestones: [
    { value: "2006", label: "Eastbound founded" },
    { value: "05", label: "Countries" },
    { value: "20+", label: "Years of expertise" },
  ],
};

export const aboutUsValues = [
  {
    title: "Authenticity",
    description:
      "We design experiences that are genuine to the destination, not manufactured for tourists.",
  },
  {
    title: "Excellence",
    description:
      "Operational precision is non-negotiable, at any scale of programme.",
  },
  {
    title: "Partnership",
    description:
      "We see ourselves as an extension of our travel-trade partners' own teams.",
  },
  {
    title: "Responsibility",
    description:
      "Sustainable, respectful travel that benefits local communities.",
  },
] as const;

export const leaders: PersonProfile[] = [
  {
    name: "Prrithviraj Singh",
    role: "Founder & Director",
    image: "/images/leadership/prrithvi.jpg",
    biography: [
      "Prrithviraj Singh is a seasoned travel and tourism professional and entrepreneur with close to three decades of experience in the industry. He is a co-founder and Director of Eastbound, a travel group he helped establish in 2006 alongside Amit Kishore and Manish Pratik. Over the years, he has played an instrumental role in building and expanding the group’s diverse portfolio across inbound and outbound travel, destination management, corporate travel, MICE, travel representation and specialised luxury travel.",
      "Known for his deep understanding of the travel trade and evolving traveller preferences, Prrithviraj has been closely involved in shaping Eastbound’s growth strategy and developing new business verticals and specialist brands. He has also been a strong advocate of technology, product innovation, responsible tourism and highly personalised travel experiences.",
      "With extensive industry experience and a strong entrepreneurial approach, Prrithviraj continues to contribute to Eastbound’s growth and its evolution as a multi-dimensional travel enterprise.",
    ],
  },
  {
    name: "Amit Kishore",
    role: "Founder",
    image: "/images/leadership/Amit_Kishore_aligned.jpg",
    biography: [
      "Amit Kishore is a career entrepreneur, investor and travel industry leader with more than two decades of experience building businesses across travel, tourism and destination marketing. He is the Co-founder of Eastbound Group, established in 2006, and has played a pivotal role in shaping its evolution into a diversified travel enterprise spanning destination management, experiential travel, MICE, business travel, hospitality, technology and tourism representation.",
      "Amit’s entrepreneurial journey has extended beyond Eastbound. He is the Founder of Think Strawberries, a travel marketing and representation company, where he has focused on building global partnerships, developing digital-first strategies and creating innovative solutions for tourism boards, destinations and international travel brands. He currently leads Think Strawberries as Founder & Managing Director and is Head of MMGY APAC.",
      "Known for his strategic approach and strong relationship capital, Amit has developed partnerships with prominent global brands and tourism destinations, including Ferrari World, Warner Bros. theme parks and Dragone. He has also served as an advisor to tourism boards and destination organisations across international markets.",
      "Amit combines entrepreneurial vision with a strong understanding of emerging travel trends, technology and global tourism markets, and continues to champion innovation and collaboration across the industry.",
    ],
  },
  {
    name: "Manish Pratik",
    role: "Founder & Director",
    image: "/images/leadership/Manish_Pratik_aligned.jpg",
    biography: [
      "Manish Pratik is a co-founder and Director of Eastbound, with over two decades of experience in the travel and tourism industry. An innovator at heart, he has been instrumental in shaping Eastbound’s philosophy of creating journeys that go beyond the conventional, with a particular focus on discovering lesser-known destinations and developing distinctive travel experiences.",
      "Known for his forward-looking approach, Manish has consistently embraced technology and innovation to modernise travel and destination management. At Eastbound, he has championed the integration of technology across business processes, helping break silos and create more efficient, connected ways of delivering experiences to travellers and partners.",
      "His interests outside work — particularly his love for nature, photography and cycling — also inform his perspective on travel. He has a strong appreciation for experiences rooted in place, culture and the outdoors, and has been closely involved in developing products that take travellers beyond the familiar.",
      "With a reputation for innovation and an instinct for emerging travel trends, Manish continues to play a key role in Eastbound’s evolution as an experiential travel company.",
    ],
  },
];

export const team: PersonProfile[] = [
  {
    name: "Dishaa Siingh",
    role: "Vice President, Business Development",
    location: "India",
    image: "/images/team/Dishaa.jpg",
    biography: [
      "Dishaa Siingh is Vice President, Business Development at Eastbound Group, where she works with travel partners and clients to bring conferences, incentives and journeys to life across India, Sri Lanka, Nepal, Bhutan and the UAE. With 15 years in the travel industry, she brings a background in sales, operations and business development, and a careful understanding of what each client needs from a destination. Partners value her for her attention to detail, responsiveness and depth of destination knowledge.",
    ],
  },
  {
    name: "Reshma Naqvi",
    role: "Eastbound Group",
    location: "India",
    image: "/images/team/Reshma_circular.jpg",
    biography: [
      "Reshma Naqvi drives business development at Eastbound Group, working with partners around the world to bring discerning travellers to India. She first built Eastbound's luxury segment across Germany and the USA. Earlier in her career she held sales and operations roles at Cox &amp; Kings and TWX. Known for her drive and her love of exploring new places, Reshma is passionate about the experiential journeys today&#39;s travellers look for.",
    ],
  },
  {
    name: "Swati Chandra",
    role: "Eastbound Group",
    location: "Gurgaon, India",
    image: "/images/team/Swati_circular.jpg",
    biography: [
      "Swati Chandra is part of Eastbound Group’s team in Gurgaon, contributing to the company’s strategy in India and globally. An enthusiastic traveller herself, she brings that same spirit of discovery to her work, guided by a simple philosophy: smile, and spread smiles to others.",
    ],
  },
  {
    name: "Shantanu Mehta",
    role: "General Manager, Eastbound DMC",
    location: "UAE",
    image: "/images/team/Shantanu_circle_matched.jpg",
    biography: [
      "Shantanu Mehta is General Manager of the Eastbound Group DMC in Dubai, bringing over two decades of experience in tourism and hospitality. Before this role, he held senior positions at Arabian Oryx Travel & Tourism and Rotana across contracting, reservations, product development and group sales.",
    ],
  },
  {
    name: "Shikha Mishra",
    role: "Brand, PR and Communications",
    location: "India",
    image: "/images/team/Shikha_Mishra_circle_format.jpg",
    biography: [
      "Shikha Mishra shapes how Eastbound Group tells its story. A journalist turned communications strategist, she began her career writing and editing food, fashion, travel, arts and lifestyle coverage for publications including Hindustan Times, The Times of India, The Indian Express and Asian Age. She later worked with India West in California and with Gulf News and ITP in Dubai.",
      "A podcaster and social media influencer, she channels her content skills into public relations and has led media, influencer and marketing mandates for some of the world’s best-known tourism and technology brands. At Eastbound, she leads brand, PR, reputation and social media, and works closely with the founder’s office on thought leadership and building the Eastbound brand.",
    ],
  },
];
