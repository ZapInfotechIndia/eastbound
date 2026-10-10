import Link from "next/link";
import { Reveal } from "@/components/Reveal";

type Props = {
  id: string;
  index: string;
  name: string;
  tagline: string;
  intro: string;
  points?: string[];
  faqs?: { q: string; a: string }[];
  cta: string;
  image: string;
};

/**
 * Editorial chapter: oversized numeral, offset portrait image and a
 * numbered ledger of details. Alternates nothing — the rhythm comes from
 * the sticky rail beside it.
 */
export function ExperienceChapter({
  id,
  index,
  name,
  tagline,
  intro,
  points,
  faqs,
  cta,
  image,
}: Props) {
  return (
    <article
      id={id}
      className="relative scroll-mt-28 py-16 first:pt-0 md:py-24"
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Image column with offset frame */}
        <div className="relative">
          <span
            aria-hidden
            className="text-primary/8 pointer-events-none absolute -top-8 -left-3 font-serif text-[6rem] leading-none select-none md:text-[8rem]"
          >
            {index}
          </span>
          <Reveal variant="image" className="relative aspect-[4/5] w-full">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover"
              loading="lazy"
              width={1200}
              height={1500}
            />
          </Reveal>
          {/* <span className="bg-accent/40 absolute right-6 -bottom-4 left-6 hidden h-px lg:block" /> */}
        </div>

        {/* Copy column */}
        <Reveal delay={100} className="lg:pt-10">
          <p className="eyebrow text-blue-light mb-4">Chapter {index}</p>
          <h2 className="text-primary font-serif text-3xl leading-[1.05] md:text-5xl">
            {name}
          </h2>
          <p className="mt-5 max-w-xl font-serif text-lg leading-snug text-neutral-700 md:text-2xl">
            {tagline}
          </p>
          <p className="text-muted-foreground mt-6 max-w-xl leading-relaxed font-light">
            {intro}
          </p>

          {faqs && faqs.length > 0 && (
            <div className="mt-10 max-w-xl">
              {faqs.map((f) => (
                <div key={f.q} className="mb-6">
                  <p className="text-blue-dark font-medium">{f.q}</p>
                  <p className="text-muted-foreground mt-2 font-light">{f.a}</p>
                </div>
              ))}
            </div>
          )}

          <Link
            href="/contact"
            className="group border-primary/40 text-primary hover:border-accent hover:text-accent mt-10 inline-flex items-center gap-3 border-b pb-2 text-[0.72rem] tracking-[0.28em] uppercase transition-colors"
          >
            {cta}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </article>
  );
}
