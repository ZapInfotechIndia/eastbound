import SubHero from "@/components/SubHero";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { FeatureSection } from "@/components/destinations/FeatureSection";
import { HorizontalServices } from "@/components/services/HorizontalServices";
import { awards } from "@/data/awards";
import { partnerQuotes, servicePages } from "@/data/servicePages";

const ServicesPage = () => {
  const memberships = [
    "IATO",
    "TAFI",
    "World Travel & Tourism Council",
    "Great Place To Work",
  ];

  return (
    <div>
      <SubHero
        eyebrow="Our Services"
        title="Solutions for Every Travel Programme "
        description="Whether you're designing a bespoke luxury holiday or managing a large-scale incentive group, our destination experts deliver end-to-end support - from first concept through to final departure. "
        backgroundVideo="pAYL00V01MkJKRbm68302t8LXpS1SQ1QgSiRXmVdxL1kHM"
      />
      <main className="bg-background text-foreground">
        <HorizontalServices items={servicePages} />

        {servicePages.map((s, i) => (
          <FeatureSection
            key={s.id}
            id={s.id}
            index={s.index}
            name={s.name}
            tagline={s.tagline}
            intro={s.intro}
            points={s.points}
            faqs={s.faqs}
            cta={s.cta}
            image={s.image}
            href="/contact"
            flip={i % 2 === 1}
            tinted={i % 2 === 1}
          />
        ))}

        {/* Success stories */}
        {/* <section
          className="py-20 md:py-28"
          style={{ backgroundColor: "#132436" }}
        >
          <div className="container">
            <Reveal className="mb-14 max-w-2xl">
              <p className="eyebrow mb-4">Success stories</p>
              <h2 className="font-serif text-3xl leading-[1.05] text-white md:text-5xl">
                Trusted relationships{" "}
                <em className="text-accent italic">that last.</em>
              </h2>
              <p
                className="mt-6 leading-relaxed font-light"
                style={{ color: "#97b4de" }}
              >
                For over twenty years, international travel companies have
                relied on Eastbound to consistently deliver exceptional
                experiences. Here's what a few of them have to say.
              </p>
            </Reveal>
            <div className="grid gap-8 md:grid-cols-2">
              {partnerQuotes.map((q, i) => (
                <Reveal
                  key={q.author}
                  delay={i * 90}
                  className="card-frame group border border-white/10 p-8 md:p-10"
                >
                  <p className="font-serif text-2xl leading-snug text-white/90 md:text-[1.7rem]">
                    “{q.quote}”
                  </p>
                  <p className="mt-8 text-sm" style={{ color: "#97b4de" }}>
                    {q.author}
                  </p>
                  <p
                    className="mt-1 text-[0.68rem] tracking-[0.28em] uppercase"
                    style={{ color: "#97b4de" }}
                  >
                    {q.role}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section> */}

        {/* Awards & memberships */}
        {/* <section className="bg-secondary/60 py-20 md:py-28">
          <div className="container">
            <Reveal className="mb-14 max-w-2xl">
              <p className="eyebrow mb-4">Awards & partnerships</p>
              <h2 className="text-primary font-serif text-3xl leading-[1.05] md:text-5xl">
                Recognised for excellence.
              </h2>
              <p className="text-muted-foreground mt-6 leading-relaxed font-light">
                Our commitment to quality has earned recognition from industry
                associations, tourism partners and global travel organisations.
              </p>
            </Reveal>

            <ul className="divide-border/70 border-border/70 mb-14 divide-y border-y">
              {awards.map((a, i) => (
                <Reveal
                  as="div"
                  key={a.title}
                  delay={i * 50}
                  className="grid grid-cols-[70px_1fr_auto] items-center gap-6 py-6"
                >
                  <span className="text-accent font-serif text-xl">
                    {a.year}
                  </span>
                  <span className="font-serif text-xl text-neutral-700 md:text-2xl">
                    {a.title}
                  </span>
                  <span className="text-muted-foreground text-right text-[0.7rem] font-semibold tracking-[0.28em] uppercase">
                    {a.source}
                  </span>
                </Reveal>
              ))}
            </ul>

            <Reveal>
              <p className="text-muted-foreground mb-6 text-[0.68rem] tracking-[0.3em] uppercase">
                Industry memberships
              </p>
              <div className="flex flex-wrap gap-4">
                {memberships.map((m) => (
                  <span
                    key={m}
                    className="card-frame border-border/60 bg-background text-primary border px-6 py-4 font-serif text-lg"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section> */}

        <CtaBand
          eyebrow="Work with us"
          title="Let's create remarkable journeys together."
          copy="Whether you're planning bespoke luxury travel, incentive programmes or specialist group tours, our experts are ready to help."
          cta="Start a conversation"
        />
      </main>
    </div>
  );
};

export default ServicesPage;
