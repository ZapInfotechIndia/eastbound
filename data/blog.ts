export type Post = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  link: string;
};

export const posts: Post[] = [
  {
    id: "october-2026",
    category: "Eastnews",
    title: "October 2026",
    excerpt:
      "From Eye to Eye Eastbound - Narendra Bhawan, Bikaner - Kites, Chai & Calligraphy and more",
    date: "October 2026",
    readTime: "20 minutes",
    image: "/images/newsletters/October2026.png",
    link: "https://eastboundgroup.aflip.in/119b1c212e.html",
  },
  {
    id: "july-2026",
    category: "Eastnews",
    title: "July 2026",
    excerpt:
      "From Anopura Jaipur - The Living Fort of India - Kaav Safari Lodge, Kabini and more",
    date: "July 2026",
    readTime: "20 minutes",
    image: "/images/newsletters/July2026.png",
    link: "https://eastboundgroup.aflip.in/3ee6e0f3d4.html",
  },
  {
    id: "may-2026",
    category: "Eastnews",
    title: "May, 2026",
    excerpt:
      "From Ran Baas palace, Patiala - Chambal River Safari - Ganga Dussehra and more",
    date: "May 2026",
    readTime: "20 minutes",
    image: "/images/newsletters/May2026.png",
    link: "https://eastboundgroup.aflip.in/6e929abfd8.html#page/1",
  },
];
