"use client";

import { useState } from "react";
import Link from "next/link";
import { Award, Compass, Handshake, Leaf } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Button } from "@/components/ui/Button";
import {
  aboutUsHero,
  aboutUsStory,
  aboutUsValues,
  leaders,
  team,
} from "@/data/aboutUs";
import Sustainability from "@/components/Sustainability";

const valueIcons = {
  Authenticity: Compass,
  Excellence: Award,
  Partnership: Handshake,
  Responsibility: Leaf,
} as const;

const AboutUs = () => {
  const [expandedLeaders, setExpandedLeaders] = useState<
    Record<string, boolean>
  >({});

  const toggleLeader = (name: string) => {
    setExpandedLeaders((current) => ({
      ...current,
      [name]: !current[name],
    }));
  };

  return (
    <div>
      <main className="bg-background text-foreground overflow-hidden">
        {/* subhero */}
        <section className="bg-blue-dark pt-36 pb-20 text-white md:pt-44 md:pb-28">
          <div className="container grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <div className="mb-7 flex items-center gap-4">
                <span className="bg-accent h-px w-12" />
                <span className="text-primary-foreground/70 text-[0.72rem] tracking-[0.32em] uppercase">
                  {aboutUsHero.eyebrow}
                </span>
              </div>
              <h1 className="font-serif text-4xl leading-[1.04] tracking-tight md:text-5xl lg:text-[3.9rem]">
                {aboutUsHero.title}
              </h1>
              <p className="text-primary-foreground/70 mt-8 max-w-xl leading-relaxed font-light">
                {aboutUsHero.introduction}
              </p>
            </Reveal>

            {/* <Reveal
              delay={120}
              className="self-end lg:col-span-4 lg:col-start-9"
            >
              <dl className="space-y-8 border-l border-white/15 pl-8">
                <div>
                  <dt className="text-primary-foreground/50 text-[0.65rem] tracking-[0.3em] uppercase">
                    Email
                  </dt>
                  <dd className="mt-2 font-serif text-xl">
                    <a
                      href={`mailto:${site.email}`}
                      className="hover:text-accent transition-colors"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-primary-foreground/50 text-[0.65rem] tracking-[0.3em] uppercase">
                    Telephone
                  </dt>
                  <dd className="mt-2 font-serif text-xl">{site.phone}</dd>
                </div>
                <div>
                  <dt className="text-primary-foreground/50 text-[0.65rem] tracking-[0.3em] uppercase">
                    Reach
                  </dt>
                  <dd className="text-primary-foreground/70 mt-2 text-sm font-light">
                    India • Nepal • Bhutan • Sri Lanka • UAE
                  </dd>
                </div>
              </dl>
            </Reveal> */}
          </div>
        </section>

        <section className="bg-background py-24 md:py-36">
          <div className="container grid gap-14 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-4">
              <p className="eyebrow text-blue-light mb-4">
                {aboutUsStory.eyebrow}
              </p>
              <h2 className="text-primary font-serif text-4xl leading-[1.04] md:text-6xl">
                {aboutUsStory.title}
              </h2>
            </Reveal>
            <Reveal delay={100} className="lg:col-span-6 lg:col-start-7">
              <div className="text-muted-foreground space-y-7 text-base leading-relaxed font-light md:text-lg">
                {aboutUsStory.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
              <dl className="border-border/70 mt-14 grid grid-cols-3 border-y py-8">
                {aboutUsStory.milestones.map((milestone) => (
                  <div
                    key={milestone.label}
                    className="border-border/70 border-r px-4 first:pl-0 last:border-r-0"
                  >
                    <dt className="text-accent font-serif text-3xl md:text-4xl">
                      {milestone.value}
                    </dt>
                    <dd className="text-muted-foreground mt-2 text-[0.62rem] leading-relaxed tracking-[0.22em] uppercase">
                      {milestone.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        <section className="bg-background pb-24 md:pb-36">
          <div className="container">
            <Reveal className="mb-14">
              <p className="eyebrow text-blue-light mb-4">Our Values</p>
              <h2 className="text-blue-dark font-serif text-4xl leading-[1.04] md:text-5xl">
                What guides every journey we build.
              </h2>
            </Reveal>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
              {aboutUsValues.map((value, index) => {
                const Icon = valueIcons[value.title];

                return (
                  <Reveal key={value.title} delay={index * 80}>
                    <article>
                      <Icon
                        className="text-primary mb-5 h-7 w-7"
                        strokeWidth={1.5}
                        aria-hidden
                      />
                      <h3 className="text-blue-dark font-serif text-2xl leading-tight md:text-[1.65rem]">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground mt-3 text-sm leading-relaxed font-light md:text-base">
                        {value.description}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-secondary/60 py-24 md:py-36">
          <div className="container">
            <Reveal className="mb-20 grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="eyebrow text-blue-light mb-4">Leadership</p>
                <h2 className="text-primary font-serif text-4xl leading-[1.04] md:text-6xl">
                  The people who set Eastbound in motion.
                </h2>
              </div>
              <p className="text-muted-foreground self-end text-base leading-relaxed font-light lg:col-span-4 lg:col-start-8">
                Three founders, one shared conviction: remarkable journeys begin
                with deep local understanding.
              </p>
            </Reveal>

            <div className="space-y-24 md:space-y-36">
              {leaders.map((leader, index) => (
                <Reveal key={leader.name}>
                  <article className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
                    <div
                      className={`group aspect-[3/4] lg:col-span-4 ${index % 2 === 1 ? "lg:order-2 lg:col-start-9" : "lg:col-start-1"}`}
                    >
                      <Portrait name={leader.name} image={leader.image} />
                    </div>
                    <div
                      className={`pt-2 lg:col-span-6 lg:pt-10 ${index % 2 === 1 ? "lg:col-start-2 lg:row-start-1" : "lg:col-start-6"}`}
                    >
                      <div className="mb-7 flex items-center gap-4">
                        <span className="text-blue-light font-serif text-3xl italic">
                          0{index + 1}
                        </span>
                        <span className="bg-border h-px flex-1" />
                      </div>
                      <h3 className="text-primary font-serif text-4xl leading-none md:text-5xl">
                        {leader.name}
                      </h3>
                      <p className="text-blue-dark mt-3 text-[0.68rem] tracking-[0.28em] uppercase">
                        {leader.role}
                      </p>
                      <div className="text-muted-foreground mt-8 space-y-5 leading-relaxed font-light">
                        {leader.biography.map((paragraph, paragraphIndex) => {
                          const isExpanded = !!expandedLeaders[leader.name];

                          if (paragraphIndex === 0) {
                            return (
                              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                            );
                          }

                          if (!isExpanded) {
                            return null;
                          }

                          return (
                            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                          );
                        })}

                        {leader.biography.length > 1 && (
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => toggleLeader(leader.name)}
                            className="text-blue-dark mt-2 text-[0.62rem] tracking-[0.22em] hover:text-neutral-900"
                          >
                            {expandedLeaders[leader.name]
                              ? "Read less"
                              : "Read more"}
                          </Button>
                        )}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background pt-24 pb-12 md:pt-36 md:pb-16">
          <div className="container">
            <Reveal className="mb-16 grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="eyebrow text-blue-light mb-4">The Team</p>
                <h2 className="text-primary font-serif text-4xl leading-[1.04] md:text-6xl">
                  Expertise across every journey.
                </h2>
              </div>
              <p className="text-muted-foreground self-end text-base leading-relaxed font-light lg:col-span-4 lg:col-start-8">
                Destination specialists, relationship builders and storytellers
                united by care for the details.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-x-8 gap-y-16 xl:grid-cols-5">
              {team.map((member, index) => (
                <Reveal
                  key={member.name}
                  delay={(index % 3) * 90}
                  className="h-full"
                >
                  <article className="group h-full">
                    {member.image ? (
                      <div className="border-accent/80 bg-secondary overflow-hidden border-[3px]">
                        <div className="aspect-[4/5]">
                          <Portrait
                            name={member.name}
                            image={member.image}
                            teamMember={!member.image}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="aspect-[4/5] bg-[#f2f0ee]" />
                    )}

                    <div className="pt-5">
                      {member.location && (
                        <p className="text-blue-dark mb-2 text-[0.62rem] tracking-[0.24em] uppercase">
                          {member.location}
                        </p>
                      )}

                      <h3 className="text-primary font-serif text-3xl leading-[0.96] tracking-tight">
                        {member.name}
                      </h3>

                      <p className="text-blue-dark mt-5 text-[0.62rem] tracking-[0.22em] uppercase">
                        {member.role}
                      </p>

                      <div className="text-muted-foreground mt-5 space-y-4 text-sm leading-relaxed font-light">
                        {member.biography.map((paragraph) => (
                          <p key={paragraph.slice(0, 28)}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-16">
          <div className="container">
            <div className="ml-auto max-w-2xl">
              <p className="eyeborw text-blue-light ml-4">About Eastbound</p>
              <FaqAccordion compact alignRight />
            </div>
          </div>
        </section>

        <Sustainability />

        <section className="bg-blue-light text-primary-foreground py-20 md:py-28">
          <div className="container">
            <Reveal className="grid items-end gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="eyebrow text-blue-dark mb-4">
                  Work with Eastbound
                </p>
                <h2 className="font-serif text-4xl leading-[1.05] md:text-6xl">
                  Let’s create remarkable journeys together.
                </h2>
              </div>
              <div className="lg:col-span-3 lg:col-start-10">
                <Link
                  href="/contact"
                  className="group bg-accent inline-flex items-center gap-3 px-8 py-4 text-[0.72rem] tracking-[0.28em] text-white uppercase transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Talk to our team
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
};

function Portrait({
  name,
  image,
  teamMember = false,
}: {
  name: string;
  image?: string;
  teamMember?: boolean;
}) {
  if (!image) {
    return null;
  }

  return (
    <div className="bg-secondary relative h-full overflow-hidden">
      <img
        src={image}
        alt={`Portrait of ${name}`}
        className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.025]"
        loading="lazy"
        width={912}
        height={1200}
      />
      {teamMember && (
        <div className="bg-primary/80 text-primary-foreground/70 absolute inset-x-0 bottom-0 px-4 py-3 text-[0.62rem] tracking-[0.24em] uppercase backdrop-blur-sm">
          Portrait forthcoming
        </div>
      )}
    </div>
  );
}

export default AboutUs;
