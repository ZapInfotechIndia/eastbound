export type HighlightPlace = {
  name: string;
  image: string;
  description: string;
};

export type DestinationFaq = {
  question: string;
  answer: string;
};

export type DestinationDetail = {
  id: string;
  name: string;
  about: string;
  image: string;
  highlightPlaces: HighlightPlace[];
  experiences: string[];
  faqs: DestinationFaq[];
};

export const allDestinations: DestinationDetail[] = [
  {
    id: "india",
    name: "India",
    about:
      "India is a realm of layered history, vibrant cities, sacred rivers, and deeply immersive cultural experiences. From royal Rajasthan to the misty hills of the Himalayas and the serene backwaters of Kerala, every journey can be shaped around heritage, food, wildlife, and local life.",
    image: "/images/destinations/india/1.jpg",
    highlightPlaces: [
      {
        name: "Delhi",
        image: "/images/destinations/india/cities/delhi.jpg",
        description:
          "India's capital, where Mughal monuments, grand boulevards and bustling bazaars meet modern life.",
      },
      {
        name: "Jaipur",
        image: "/images/destinations/india/cities/jaipur.jpg",
        description:
          "The Pink City brings palace courtyards, artisan bazaars, and slow luxury at every turn.",
      },
      {
        name: "Udaipur",
        image: "/images/destinations/india/cities/Udaipur.jpg",
        description:
          "Lakeside palaces, royal history and romantic boat rides define this 'City of Lakes'.",
      },
      {
        name: "Jodhpur",
        image: "/images/destinations/india/cities/jodhpur.jpg",
        description:
          "Known as the Blue City, with fort views, spice markets and desert gateway experiences.",
      },
      {
        name: "Agra",
        image: "/images/destinations/india/cities/agra.jpg",
        description:
          "Home to the Taj Mahal and Mughal-era masterpieces, a must-visit for history and architecture.",
      },
      {
        name: "Varanasi",
        image: "/images/destinations/india/cities/varanasi.jpg",
        description:
          "A sunrise on the ghats reveals the spiritual rhythm of the Ganges in one of India’s most unforgettable cities.",
      },
      {
        name: "Mumbai",
        image: "/images/destinations/india/cities/mumbai.jpg",
        description:
          "India's financial and cinematic capital — energetic waterfronts, colonial architecture and a thriving food scene.",
      },
      {
        name: "Kochi",
        image: "/images/destinations/india/cities/Kochi.jpg",
        description:
          "Kerala's historic port city with spice trade heritage, Chinese fishing nets and coastal charm.",
      },
      {
        name: "Kolkata",
        image: "/images/destinations/india/cities/kolkata.jpg",
        description:
          "A literary, cultural and culinary heartland with colonial-era institutions and vibrant street life.",
      },
      {
        name: "Amritsar",
        image: "/images/destinations/india/cities/amritsar.jpg",
        description:
          "Spiritual centre of the Sikhs, home to the Golden Temple and moving communal traditions.",
      },
    ],
    experiences: [
      "Private palace stays in Rajasthan",
      "Tiger safari in Central India",
      "Sunrise boat ride on the Ganges",
      "Ayurvedic wellness retreat",
      "Heritage walk through Old Delhi",
    ],
    faqs: [
      {
        question: "What kind of India trips does Eastbound design?",
        answer:
          "Heritage and royal India, wildlife and nature safaris, Ayurveda and wellness retreats, and culinary and cultural immersion journeys - built as luxury FIT, incentive or educational programmes.",
      },
      {
        question: "Which Indian cities does Eastbound cover?",
        answer:
          "All of India – but based on our client’s reviews and preferences we recommend Delhi, Jaipur, Udaipur, Jodhpur, Agra, Varanasi, Mumbai, Kochi, Kolkata and Amritsar, alongside specific regional circuits in Rajasthan, central India and South India.",
      },
    ],
  },
  {
    id: "uae",
    name: "UAE",
    about:
      "The UAE gives Eastbound a contemporary counterpoint to its sub-continent destinations: luxury city breaks in Dubai and Abu Dhabi, desert experiences (overnight camps, dune adventures, falconry), MICE-ready venues and logistics for meetings and incentive groups, and stopover programmes designed to connect with sub-continent itineraries.",
    image: "/images/destinations/uae/1.jpg",
    highlightPlaces: [
      {
        name: "Dubai",
        image: "/images/destinations/uae/2.jpg",
        description:
          "High-design hotels, waterfront experiences, and a blend of modern glamour and easy luxury.",
      },
      {
        name: "Abu Dhabi",
        image: "/images/destinations/uae/3.jpg",
        description:
          "Cultural landmarks, polished hospitality, and strong options for corporate or private group programmes.",
      },
      {
        name: "Al Marmoom Desert",
        image: "/images/destinations/uae/4.jpg",
        description:
          "Dune safaris, desert dining, overnight camps, and off-road experiences under the stars.",
      },
    ],
    experiences: [
      "Desert camp overnight",
      "Private city and waterfront escape",
      "Falconry and dune adventure",
      "Luxury stopover itinerary",
      "MICE and incentive-ready venue access",
    ],
    faqs: [
      {
        question: "Can a UAE stopover be combined with an India or Nepal trip?",
        answer:
          "Yes - Eastbound regularly designs stopover and layover programmes that connect Dubai or Abu Dhabi with sub-continent itineraries.",
      },
    ],
  },
  {
    id: "nepal",
    name: "Nepal",
    about:
      "Eastbound builds everything from gentle cultural circuits in the Kathmandu Valley to serious Himalayan trekking and mountain-flight experiences, plus jungle safaris in Chitwan and Bardia and adventure travel - white-water rafting, mountain flights, paragliding.",
    image: "/images/destinations/nepal/1.jpg",
    highlightPlaces: [
      {
        name: "Kathmandu Valley",
        image: "/images/destinations/nepal/2.jpg",
        description:
          "Ancient courtyards, UNESCO heritage sites, and temples that shape daily life across the valley.",
      },
      {
        name: "Pokhara",
        image: "/images/destinations/nepal/3.jpg",
        description:
          "Lakeside views, sunrise over the Annapurna range, and adventurous outdoor activities in a relaxed setting.",
      },
      {
        name: "Chitwan National Park",
        image: "/images/destinations/nepal/4.jpg",
        description:
          "A jungle safari destination for rhinos, elephants, and birdlife amid the Terai plains.",
      },
    ],
    experiences: [
      "Scenic Himalayan trekking",
      "Mountain flight over Everest",
      "White-water rafting in the Trishuli",
      "Monastery and heritage circuit",
      "Wildlife safari in Chitwan",
    ],
    faqs: [
      {
        question: "What does Eastbound offer in Nepal?",
        answer:
          "UNESCO heritage sites in the Kathmandu Valley, teahouse-to-premium-lodge trekking, jungle safaris in Chitwan and Bardia, and adventure travel including white-water rafting and paragliding. Download Nepal Destination Profile.",
      },
    ],
  },
  {
    id: "bhutan",
    name: "Bhutan",
    about:
      "Because Bhutan runs the world’s most sustainable, slow and considered tourism, Eastbound manages every permit and logistical detail so travellers can focus on cultural immersion (dzongs, monasteries, festivals), trekking from short scenic walks to multi-day Himalayan routes, traditional Bhutanese wellness, and green travel woven into every itinerary.",
    image: "/images/destinations/Bhutan/1.jpg",
    highlightPlaces: [
      {
        name: "Paro",
        image: "/images/destinations/Bhutan/2.jpg",
        description:
          "Home to the iconic Tiger’s Nest monastery and a striking valley framed by dramatic peaks.",
      },
      {
        name: "Thimphu",
        image: "/images/destinations/Bhutan/3.jpg",
        description:
          "The capital offers dzongs, craft heritage, and a refined cultural scene rooted in tradition.",
      },
      {
        name: "Punakha",
        image: "/images/destinations/Bhutan/4.jpg",
        description:
          "A scenic river valley with grand architecture, riverside landscapes, and peaceful hiking routes.",
      },
    ],
    experiences: [
      "Trekking in the eastern Himalaya",
      "Bhutanese hot stone bath and wellness ritual",
      "Festival and monastery visits",
      "Farmhouse dining in mountain villages",
      "River valley scenic walks",
    ],
    faqs: [
      {
        question: "Do travellers need a permit to visit Bhutan?",
        answer:
          "Yes - Bhutan requires visas and permits for foreign visitors; Eastbound manages this process end-to-end as part of every itinerary.",
      },
    ],
  },
  {
    id: "srilanka",
    name: "Sri Lanka",
    about:
      "Sri Lanka’s compact geography lets Eastbound move travellers from the cultural triangle&#39;s ancient cities and cave temples to leopard and elephant safaris in Yala and Wilpattu, highland tea estates and scenic rail journeys, and coastal escapes on the south and east coasts - often within a single itinerary.",
    image: "/images/destinations/srilanka/1.jpg",
    highlightPlaces: [
      {
        name: "Kandy",
        image: "/images/destinations/srilanka/2.jpg",
        description:
          "A cultural heartland with temples, lake views, and the legendary temple of the Tooth Relic.",
      },
      {
        name: "Ella",
        image: "/images/destinations/srilanka/3.jpg",
        description:
          "Tea country scenery, dramatic train rides, and panoramic viewpoints across the highlands.",
      },
      {
        name: "Galle",
        image: "/images/destinations/srilanka/1.jpg",
        description:
          "A colonial-era coastal town with forts, café culture, and a scenic shoreline setting.",
      },
    ],
    experiences: [
      "Cultural triangle discovery",
      "Leopard safari in Yala",
      "Tea estate stay in the highlands",
      "Beach break in the south coast",
      "Scenic rail journey through the hills",
    ],
    faqs: [
      {
        question:
          "What wildlife can travellers see in Sri Lanka with Eastbound?",
        answer:
          "Leopard and elephant safaris in Yala and Wilpattu national parks are core to Eastbound’s Sri Lanka itineraries.",
      },
    ],
  },

];
