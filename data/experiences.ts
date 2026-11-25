export type Experience = {
  id: string;
  title: string;
  location: string;
  duration: string;
  image: string;
  video: string;
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
    video: "/videos/experiences/photography.mp4",
    copy: "Capture extraordinary landscapes, wildlife and cultures with award-winning photographers, expert planning and local access. ",
    href: "/experiences#photography",
  },
  {
    id: "birding-tours",
    title: "Watch the birds in their little worlds, in harmony with nature",
    location: "Birding Tours",
    duration: "9 nights",
    image: "/images/experiences/birds.jpg",
     video: "/videos/experiences/birding.mp4",
    copy: "Explore some of Asia's richest biodiversity hotspots where stunning landscapes meet unique ecosystems.",
    href: "/experiences#birding",
  },
  {
    id: "walking-journeys",
    title: "Walk your way through the world’s most beautiful landscapes",
    location: "Walking Journeys",
    duration: "12 nights",
    image: "/images/experiences/walk.jpg",
    video: "/videos/experiences/walking.mp4",
    copy: "Slow travel through heritage towns, villages and natural landscapes. ",
    href: "/experiences#walking",
  },
];
