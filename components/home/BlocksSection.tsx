import Image from "next/image";

const blocks = [
  {
    title: "Experiences",
    description:
      "Our deep local expertise, trusted partnerships across every destination we operate in, and unwavering commitment to excellence enable us to create journeys that are seamless, safe, sustainable, and thoughtfully tailored to your vision. ",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Events",
    description:
      "Exceptional Meetings and Incentives begin with meticulous planning and end with memorable experiences. With deep destination expertise, innovative thinking, and uncompromising attention to detail, we deliver programmes that are executed flawlessly and tailored to your objectives - every step of the way.",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Educational Travel",
    description:
      "From classrooms to cultures, we design transformative educational journeys that inspire curiosity, build global perspectives, and turn every destination into a living classroom.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Cruises",
    description:
      "Elegant coastal passages and ocean journeys designed for relaxed, unforgettable luxury.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
];

const BlocksSection = () => {
  return (
    <section className="bg-[#f7f5f0] py-20 sm:py-24 lg:py-28">
      <div className="container">
        {/* <div className="mb-8 sm:mb-10 lg:mb-12">
          <p className="text-primary text-[10px] font-medium tracking-[0.42em] uppercase sm:text-xs">
            Signature journeys
          </p>
          <h2 className="text-blue-dark mt-5 font-serif text-[2.6rem] leading-[0.94] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Thoughtful travel,
            <span className="text-primary mt-2 block italic">
              made personal.
            </span>
          </h2>
        </div> */}

        <div className="grid md:grid-cols-2 xl:grid-cols-2">
          {blocks.map((block) => (
            <article
              key={block.title}
              className="group relative h-72 overflow-hidden sm:h-84"
            >
              <Image
                src={block.image}
                alt={block.title}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="from-blue-dark/80 absolute inset-0 bg-gradient-to-t via-black/40 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex p-4 sm:p-5">
                <div className="w-full text-white">
                  <h3 className="my-2 font-serif text-xl transition-transform duration-500 ease-out group-hover:-translate-y-0.5">
                    {block.title}
                  </h3>
                  <p className="max-h-0 w-4/5 translate-y-2 overflow-hidden text-xs leading-5 text-white/90 opacity-0 transition-all duration-300 ease-in group-hover:max-h-40 group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-95">
                    {block.description}
                  </p>
                </div>
                {/* <h3 className="] absolute bottom-12 left-4 mt-2 w-full font-serif text-xl leading-none tracking-[-0.04em] text-white">
                  {block.title}
                </h3>
                <p className="absolute bottom-12 left-1/2 w-full translate-[-50%] text-center text-xs text-white opacity-0 transition-all duration-500 ease-out group-hover:bottom-12 group-hover:opacity-100 sm:text-sm">
                  {block.description}
                </p> */}
                {/* <div className="pointer-events-none translate-y-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="bg-gradient-to-b from-black/70 via-black/50 to-transparent px-4 py-3 backdrop-blur-[1px] sm:px-5 sm:py-4">
                    <h3 className="mt-2 font-serif text-2xl leading-none tracking-[-0.04em] text-white sm:text-3xl">
                      {block.title}
                    </h3>
                    <p className="mt-2 max-w-[18rem] text-sm leading-5 text-white/85">
                      {block.description}
                    </p>
                  </div>
                </div> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlocksSection;
