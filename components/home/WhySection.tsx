import { Reveal } from "../Reveal";

const reasons = [
  {
    id: "01",
    title: "Listen first",
    description:
      "Every programme starts with understanding the traveller, the brief and the brand it needs to reflect.",
  },
  {
    id: "02",
    title: "Design locally",
    description:
      "Our on-the-ground teams shape itineraries around real access, relationships and insider knowledge.",
  },
  {
    id: "03",
    title: "Execute relentlessly and meticulously",
    description:
      "Dedicated operations teams manage every detail from arrival to departure.",
  },
  {
    id: "04",
    title: "Stay accountable",
    description:
      "A single point of contact for our partners throughout, with 24/7 on-ground support.",
  },
];

const WhySection = () => {
  return (
    <section className="bg-blue-dark relative overflow-hidden py-24 text-white md:py-36">
      {/* subtle accent bar */}
      <div className="bg-accent absolute top-0 left-0 h-px w-40" />

      <div className="container">
        <Reveal className="mb-20 max-w-3xl">
          <p className="eyebrow text-blue-light mb-8 text-xs">Why Eastbound</p>
          <h2 className="font-serif text-4xl leading-[1.05] md:text-5xl">
            The difference is in the{" "}
            <span className="text-primary">detail</span> - and in the people who
            design it.
          </h2>
        </Reveal>

        <div className="grid gap-x-16 gap-y-16 md:grid-cols-2">
          {reasons.map((p, i) => (
            <Reveal key={p.id} delay={i * 100} className="flex gap-8">
              <span className="text-blue-light pt-1 font-serif text-3xl">
                {p.id}
              </span>
              <div>
                <h3 className="mb-3 font-serif text-2xl md:text-3xl">
                  {p.title}
                </h3>
                <p className="text-primary-foreground/70 max-w-md leading-relaxed font-light">
                  {p.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
