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
    id: "september-2026",
    category: "Eastnews",
    title: "September 2026",
    excerpt:
      "From Eye to Eye Eastbound - Narendra Bhawan, Bikaner - Kites, Chai & Calligraphy and more",
    date: "September 2026",
    readTime: "20 minutes",
    image: "/images/newsletters/September2026.png",
    link: "https://eastboundgroup.aflip.in/63656de1f8.html#page/1",
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
