import SubHero from "@/components/SubHero";
import { Reveal } from "@/components/Reveal";
import { ChapterRail } from "@/components/experiences/ChapterRail";
import { ExperienceChapter } from "@/components/experiences/ExperienceChapter";

import { experiencePages } from "@/data/experiencePages";
import { CtaBand } from "@/components/CtaBand";

const ExperiencesPage = () => {
  const pillars = [
    {
      label: "Specialist leaders",
      detail: "Photographers, naturalists and historians who travel with you.",
    },
    {
      label: "Private access",
      detail: "Studios, reserves and homes opened through long relationships.",
    },
    {
      label: "Right season, right light",
      detail: "Departures timed to migration, festival and monsoon calendars.",
    },
    {
      label: "Small by design",
      detail:
        "Private or small-group only, with dedicated vehicles throughout.",
    },
  ];
  return (
    <div>
      <SubHero
        eyebrow="Curated Experiences"
        title="Experiences Designed Around You  "
        description="Travel becomes memorable when it’s built around shared interests. Whether it's photography, birding, walking trails or cultural immersion, we create specialist journeys that connect travellers with authentic experiences — led by experts who share the passion. "
        backgroundVideo="S2RRL3V75jl9QogjjtWZLcNpTJTVqy02laQa1FhLSixI"
      />
      <main className="bg-background text-foreground">
        {/* Numbered ledger strip */}
        <section className="bg-secondary/60 border-border/60 border-y">
          <div className="container grid sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal
                key={p.label}
                delay={i * 70}
                className="card-frame group border-border/60 py-10 first:border-l-0 sm:border-l sm:px-8 lg:first:pl-0"
              >
                <span className="text-blue-dark mb-4 block font-serif text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-primary group-hover:text-accent font-serif text-xl transition-colors">
                  {p.label}
                </h2>
                <p className="text-muted-foreground mt-3 max-w-xs text-sm leading-relaxed font-light">
                  {p.detail}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Sticky rail + chapters */}
        <section id="collection" className="scroll-mt-24 py-20 md:py-28">
          <div className="container grid gap-12 lg:grid-cols-[16rem_1fr] lg:gap-20">
            <ChapterRail
              items={experiencePages.map((e) => ({
                id: e.id,
                index: e.index,
                name: e.name,
              }))}
            />
            <div className="divide-border/60 divide-y">
              {experiencePages.map((e) => (
                <ExperienceChapter key={e.id} {...e} />
              ))}
            </div>
          </div>
        </section>

        <CtaBand
          eyebrow="Design yours"
          title="Have a passion we haven't listed? We'll build around it."
          copy="Tell us what the group cares about and we will find the specialists, the season and the access."
          cta="Talk to our experts"
        />
      </main>
    </div>
  );
};

export default ExperiencesPage;
