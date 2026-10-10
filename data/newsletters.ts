export const newsletterHero = {
  eyebrow: "Press Room & Newsletters",
  title: "What the Press Says",
  copy: "Find out why Eastbound is a brand name to be reckoned with - coverage, features and mentions from across the travel trade and consumer press, alongside our own destination newsletters.",
};

export type PressItem = {
  id: string;
  headline: string;
  publication: string;
  date: string;
  summary: string;
  image: string;
};

export const pressItems: PressItem[] = [
  {
    id: "palace-hotels",
    headline: "The last of the great palace hotels",
    publication: "Travel Trade Journal",
    date: "July 2026",
    summary:
      "Eastbound's heritage specialists on how a new generation of hoteliers is quietly rewriting Rajasthani hospitality.",
    image: "/images/newsletters/n1.jpg",
  },
  {
    id: "bhutan-slow",
    headline: "A slow week in the Paro Valley",
    publication: "Voyager Weekly",
    date: "June 2026",
    summary:
      "A fortnight walking in Bhutan with Eastbound's Himalayan team — tea, silence and Gross National Happiness.",
    image: "/images/newsletters/n2.jpg",
  },
  {
    id: "maldives-atolls",
    headline: "The atolls only a charter will show you",
    publication: "Luxury Travel Review",
    date: "May 2026",
    summary:
      "Beyond the well-known resorts lies a quieter Indian Ocean, reached only by private yacht.",
    image: "/images/newsletters/n3.jpg",
  },
  {
    id: "palace-hotels",
    headline: "The last of the great palace hotels",
    publication: "Travel Trade Journal",
    date: "July 2026",
    summary:
      "Eastbound's heritage specialists on how a new generation of hoteliers is quietly rewriting Rajasthani hospitality.",
    image: "/images/newsletters/n1.jpg",
  },
  {
    id: "bhutan-slow",
    headline: "A slow week in the Paro Valley",
    publication: "Voyager Weekly",
    date: "June 2026",
    summary:
      "A fortnight walking in Bhutan with Eastbound's Himalayan team — tea, silence and Gross National Happiness.",
    image: "/images/newsletters/n2.jpg",
  },
  {
    id: "maldives-atolls",
    headline: "The atolls only a charter will show you",
    publication: "Luxury Travel Review",
    date: "May 2026",
    summary:
      "Beyond the well-known resorts lies a quieter Indian Ocean, reached only by private yacht.",
    image: "/images/newsletters/n3.jpg",
  },
];

export type NewsletterIssue = {
  id: string;
  issue: string;
  title: string;
  date: string;
  summary: string;
};

export const newsletterIssues: NewsletterIssue[] = [
  {
    id: "issue-14",
    issue: "Issue 14",
    title: "Festival season across the Himalayas",
    date: "August 2026",
    summary:
      "Tsechu dates in Bhutan, monsoon-clear mountain flights in Nepal and where to stay in between.",
  },
  {
    id: "issue-13",
    issue: "Issue 13",
    title: "New properties on our radar",
    date: "June 2026",
    summary:
      "Twelve openings across India, Sri Lanka and the UAE that our inspectors have signed off on.",
  },
  {
    id: "issue-12",
    issue: "Issue 12",
    title: "Designing incentives that travel well",
    date: "April 2026",
    summary:
      "What worked for 400 delegates in Dubai and Jaipur — and what we would do differently.",
  },
  {
    id: "issue-11",
    issue: "Issue 11",
    title: "Wildlife calendar 2026-27",
    date: "February 2026",
    summary:
      "Tiger, leopard and birding seasons mapped park by park across the sub-continent.",
  },
];
