"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const destinations = [
  {
    name: "India",
    slug: "india",
    label: "01",
    region: "The Subcontinent",
    description:
      "From Rajasthan’s palace forts to Kerala’s lush backwaters, India reveals a different world at every turn.",
    image: "/images/destinations/india.jpg",
  },
  {
    name: "UAE",
    slug: "uae",
    label: "02",
    region: "The Gulf",
    description:
      "Desert horizons, design-forward cities and deeply rooted Arabian hospitality.",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Bhutan",
    slug: "bhutan",
    label: "03",
    region: "The Himalayas",
    description: "A kingdom that measures wealth in happiness.",
    image: "/images/destinations/bhutan.jpg",
  },
  {
    name: "Nepal",
    slug: "nepal",
    label: "04",
    region: "The Himalayas",
    description:
      "Ancient temples, mountain trails and warm hospitality beneath the world’s highest peaks.",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Sri Lanka",
    slug: "srilanka",
    label: "05",
    region: "The Indian Ocean",
    description:
      "Tea gardens, timeless temples and golden coastlines make every island journey feel distinct.",
    image: "/images/destinations/srilanka.jpg",
  },
];

const DestinationsSection = () => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      setActiveIndex(1);
    }
  }, []);

  const activeDestination = destinations[activeIndex];

  return (
    <section className="bg-[#fbf9f5] py-20 sm:py-28 lg:py-32">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow">Where we travel</p>
            <h2 className="text-blue-dark mt-6 font-serif text-[2.7rem] leading-[0.94] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Five countries.
              <span className="text-primary mt-2 block">
                A thousand doorways.
              </span>
            </h2>
          </div>

          <p className="text-blue-dark/70 max-w-md pb-1 text-sm leading-6 sm:text-base sm:leading-7">
            Every Eastbound journey begins with a conversation about place — and
            the specific way you would like to inhabit it.
          </p>
        </div>

        <div className="mt-14 lg:mt-16">
          <div className="border-blue-dark/10 border-y bg-[#f5f1ea]">
            <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-5">
              {destinations.map((destination, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={destination.name}
                    type="button"
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onClick={() => {
                      setActiveIndex(index);
                      router.push(`/destinations/${destination.slug}`);
                    }}
                    aria-pressed={isActive}
                    className={`group border-blue-dark/10 flex w-full items-center justify-between gap-3 border-b px-4 py-4 text-left transition-colors duration-300 hover:cursor-pointer sm:px-5 sm:py-5 lg:border-r lg:border-b-0 lg:last:border-r-0 ${
                      isActive ? "text-blue-dark bg-white" : "text-blue-dark/70"
                    }`}
                  >
                    <span className="text-[10px] font-medium tracking-[0.24em] text-current/80 uppercase">
                      {destination.label}
                    </span>
                    <span
                      className={`font-serif text-2xl leading-none tracking-[-0.04em] transition-all duration-300 sm:text-3xl ${
                        isActive
                          ? "text-primary italic"
                          : "group-hover:text-primary"
                      }`}
                    >
                      {destination.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-10 grid lg:grid-cols-[1.15fr_0.85fr] lg:gap-0">
            <article className="bg-blue-dark relative min-h-[360px] overflow-hidden sm:min-h-[480px]">
              <Image
                src={activeDestination.image}
                alt={`${activeDestination.name} landscape`}
                fill
                sizes="(max-width: 1023px) 100vw, 52vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#132436]/90 via-[#132436]/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9 lg:p-10">
                <p className="text-[10px] font-medium tracking-[0.32em] text-white/80 uppercase sm:text-xs">
                  {activeDestination.label} · {activeDestination.region}
                </p>
                <h3 className="mt-4 font-serif text-5xl leading-none tracking-[-0.04em] sm:text-6xl">
                  {activeDestination.name}
                </h3>
              </div>
            </article>

            <div className="bg-white p-7 shadow-[0_30px_60px_rgba(19,36,54,0.08)] sm:p-9 lg:flex lg:min-h-[480px] lg:flex-col lg:justify-between lg:p-10">
              <div>
                <p className="text-primary text-[10px] font-medium tracking-[0.32em] uppercase">
                  {activeDestination.label} · {activeDestination.region}
                </p>
                <h3 className="text-blue-dark mt-5 font-serif text-4xl leading-none tracking-[-0.04em] sm:text-5xl">
                  {activeDestination.name}
                </h3>
              </div>

              <div className="mt-auto pt-8">
                <p className="text-blue-dark/75 text-base leading-7">
                  {activeDestination.description}
                </p>

                <div className="border-blue-dark/10 mt-8 border-t pt-5">
                  <button
                    type="button"
                    onClick={() =>
                      router.push(`/destinations/${activeDestination.slug}`)
                    }
                    className="group text-blue-dark hover:text-primary inline-flex items-center gap-3 text-[10px] font-medium tracking-[0.32em] uppercase transition-colors"
                  >
                    Explore destination
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
