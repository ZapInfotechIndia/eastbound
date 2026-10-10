import Link from "next/link";
import { Reveal } from "@/components/Reveal";

type Props = {
  id: string;
  index: string;
  name: string;
  tagline: string;
  intro: string;
  cta: string;
  image: string;
  /** Either simple bullet strings or label/detail pairs */
  points?: string[];
  highlights?: { label: string; detail: string }[];
  faqs?: { q: string; a: string }[];
  flip?: boolean;
  tinted?: boolean;
  /** Override CTA link; defaults to `/destinations/${id}` */
  href?: string;
};

export function FeatureSection({
  id,
  index,
  name,
  tagline,
  intro,
  cta,
  image,
  points,
  highlights,
  faqs,
  flip = false,
  tinted = false,
  href,
}: Props) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${tinted ? "bg-secondary/60" : "bg-background"}`}
    >
      <div className="container">
        <div
          className={`grid items-stretch gap-10 lg:grid-cols-2 lg:gap-20 ${
            flip ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <Reveal variant="image" className="relative h-full w-full">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover"
              loading="lazy"
              width={1200}
              height={1500}
            />
            <span className="absolute top-6 left-6 text-[0.7rem] tracking-[0.3em] text-white/80 uppercase">
              {index}
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="text-primary font-serif text-4xl leading-[1.05] md:text-5xl">
              {name}
            </h2>
            <p className="mt-5 max-w-lg font-serif text-xl leading-snug text-neutral-700 italic md:text-2xl">
              {tagline}
            </p>
            <p className="text-muted-foreground mt-6 max-w-lg leading-relaxed font-light">
              {intro}
            </p>

            <ul className="border-border/70 mt-10 border-t">
              {highlights?.map((h) => (
                <li
                  key={h.label}
                  className="card-frame group border-border/70 flex flex-col gap-1 border-b py-5 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <span className="text-primary group-hover:text-accent shrink-0 font-serif text-lg transition-colors sm:w-56">
                    {h.label}
                  </span>
                  <span className="text-muted-foreground text-sm font-light">
                    {h.detail}
                  </span>
                </li>
              ))}
              {points?.map((p) => (
                <li
                  key={p}
                  className="card-frame group border-border/70 flex items-baseline gap-5 border-b py-5"
                >
                  <span className="bg-accent h-px w-5 shrink-0 translate-y-[-0.35rem]" />
                  <span className="text-primary/85 group-hover:text-accent text-sm font-light transition-colors md:text-base">
                    {p}
                  </span>
                </li>
              ))}
            </ul>

            {faqs && faqs.length > 0 && (
              <div className="border-border/70 mt-12 max-w-2xl border-t pt-8">
                <p className="eyebrow text-blue-light mb-6">FAQ</p>
                <div className="space-y-6">
                  {faqs.map((item) => (
                    <div
                      key={item.q}
                      className="border-border/70 border-b pb-6 last:border-b-0 last:pb-0"
                    >
                      <p className="text-blue-dark font-serif text-lg md:text-xl">
                        {item.q}
                      </p>
                      <p className="text-muted-foreground mt-3 leading-relaxed font-light">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <Link
              href={href ?? `/destinations/${id}`}
              className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-10 inline-flex items-center gap-3 border px-7 py-4 text-[0.72rem] tracking-[0.28em] uppercase transition-colors"
            >
              {cta}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
