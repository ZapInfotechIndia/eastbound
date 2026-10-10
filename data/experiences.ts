export type Experience = {
  id: string;
  title: string;
  location: string;
  duration: string;
  image: string;
  copy: string;
  href: string;
};

export const experiences: Experience[] = [
  {
    id: "photography-expeditions",
    title: "Capture the world with photography expeditions",
    location: "Photography Expeditions",
    duration: "7 nights",
    image: "/images/experiences/photo.jpg",
    copy: "Capture extraordinary landscapes, wildlife and cultures with award-winning photographers, expert planning and local access. ",
    href: "/experiences#photography",
  },
  {
    id: "birding-tours",
    title: "Watch the birds in their little worlds",
    location: "Birding Tours",
    duration: "9 nights",
    image: "/images/experiences/birds.jpg",
    copy: "Explore some of Asia's richest biodiversity hotspots.",
    href: "/experiences#birding",
  },
  {
    id: "walking-journeys",
    title: "Walk your way through the world’s most beautiful landscapes",
    location: "Walking Journeys",
    duration: "12 nights",
    image: "/images/experiences/walk.jpg",
    copy: "Slow travel through heritage towns, villages and natural landscapes. ",
    href: "/experiences#walking",
  },
];
