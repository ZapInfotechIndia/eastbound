import { awards } from "@/data/awards";
import { Reveal } from "../Reveal";

export function AwardsSection() {
  return (
    <section className="bg-secondary/60 py-24 md:py-32">
      <div className="container">
        <Reveal className="mb-16 max-w-2xl">
          <p className="eyebrow text-primary mb-6">Recognition</p>
          <h2 className="font-serif text-4xl leading-tight text-neutral-700 md:text-5xl">
            Quietly, we've been noticed.
          </h2>
        </Reveal>
        <ul className="divide-border/70 border-border/70 divide-y border-y">
          {awards.map((a, i) => (
            <Reveal
              as="div"
              key={a.title}
              delay={i * 60}
              className="grid grid-cols-[80px_1fr_auto] items-center gap-6 py-6 md:py-8"
            >
              <span className="text-accent font-serif text-xl">{a.year}</span>
              <span className="font-serif text-xl text-neutral-700 md:text-2xl">
                {a.title}
              </span>
              <span className="text-muted-foreground text-right text-[0.7rem] font-semibold tracking-[0.28em] uppercase">
                {a.source}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
