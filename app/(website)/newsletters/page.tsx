"use client";

import { Reveal } from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import {
  newsletterHero,
  pressItems,
  newsletterIssues,
} from "@/data/newsletters";

const NewslettersPage = () => {
  return (
    <main className="bg-background text-foreground">
      <PageHero {...newsletterHero} image={"/images/newsletters.jpg"} />

      {/* Latest articles */}
      <section className="bg-background py-20 md:py-28">
        <div className="container">
          <Reveal className="mb-14 max-w-2xl">
            <p className="eyebrow text-blue-light mb-4">Latest articles</p>
            <h2 className="text-blue-dark font-serif text-3xl leading-[1.05] md:text-5xl">
              Coverage from the travel trade and{" "}
              <span className="text-accent">consumer press.</span>
            </h2>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            {pressItems.map((p, i) => (
              <Reveal
                key={p.id}
                variant="image"
                delay={i * 110}
                as="article"
                className="card-frame group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.headline}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                    loading="lazy"
                    width={1200}
                    height={900}
                  />
                </div>
                <div className="px-2 pt-6 pb-8">
                  <div className="text-muted-foreground mb-4 flex items-center gap-4 text-[0.68rem] tracking-[0.28em] uppercase">
                    <span className="text-accent">{p.publication}</span>
                    <span className="bg-border h-px w-3" />
                    <span>{p.date}</span>
                  </div>
                  <h3 className="text-primary group-hover:text-accent mb-3 font-serif text-2xl leading-snug transition-colors">
                    {p.headline}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">
                    {p.summary}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter archive */}
      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="container">
          <Reveal className="mb-12 max-w-2xl">
            <p className="eyebrow text-blue-light mb-4">Newsletter archive</p>
            <h2 className="text-primary font-serif text-3xl leading-[1.05] md:text-5xl">
              The Eastbound dispatch.
            </h2>
          </Reveal>
          <ul className="divide-border/70 border-border/70 divide-y border-y">
            {newsletterIssues.map((n, i) => (
              <Reveal
                as="div"
                key={n.id}
                delay={i * 60}
                className="card-frame group grid items-baseline gap-4 py-7 md:grid-cols-[100px_1fr_auto] md:gap-8"
              >
                <span className="text-accent font-serif text-lg">
                  {n.issue}
                </span>
                <div>
                  <h3 className="text-primary group-hover:text-accent font-serif text-xl transition-colors md:text-2xl">
                    {n.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 max-w-2xl text-sm leading-relaxed font-light">
                    {n.summary}
                  </p>
                </div>
                <span className="text-muted-foreground text-[0.68rem] tracking-[0.28em] uppercase md:text-right">
                  {n.date}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Subscribe */}
      <section className="bg-background py-20 md:py-24">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-4">Subscribe</p>
            <h2 className="text-primary font-serif text-3xl leading-tight md:text-4xl">
              Four issues a year. Nothing else, ever.
            </h2>
            <p className="text-muted-foreground mt-5 max-w-lg leading-relaxed font-light">
              Destination news, property inspections and seasonal planning
              notes, written by the teams on the ground.
            </p>
          </Reveal>
          <Reveal
            delay={100}
            className="card-frame border-border/60 bg-card border p-8"
          >
            <SubscribeForm />
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Press enquiries"
        title="Interviews, imagery and background information."
        copy="For media and press enquiries, our team is happy to help."
        cta="Contact our media team"
      />
    </main>
  );
};

function SubscribeForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col items-stretch gap-4 sm:flex-row"
    >
      <label className="flex-1">
        <span className="sr-only">Email address</span>
        <input
          required
          type="email"
          placeholder="you@company.com"
          className="border-border focus:border-accent w-full border-0 border-b bg-transparent py-3 text-sm font-light transition-colors outline-none"
        />
      </label>
      <button
        type="submit"
        className="group bg-accent text-accent-foreground inline-flex items-center justify-center gap-3 px-7 py-4 text-[0.72rem] tracking-[0.28em] uppercase transition-transform duration-300 hover:-translate-y-0.5"
      >
        Subscribe
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>
    </form>
  );
}
export default NewslettersPage;
