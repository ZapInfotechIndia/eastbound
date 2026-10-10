import Link from "next/link";

import { posts } from "@/data/blog";
import { Reveal } from "../Reveal";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button, buttonVariants } from "../ui/Button";
import { cn } from "@/lib/utils";

export function NewslettersSection() {
  return (
    <section id="journal" className="bg-background py-24 md:py-36">
      <div className="container">
        <Reveal className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-blue-light mb-6">Eastnews</p>
            <h2 className="max-w-xl font-serif text-4xl leading-[1.05] text-neutral-700 md:text-6xl">
              From the <span className="text-accent">Eastbound</span> journal.
            </h2>
          </div>
          <Link
            href="/newsletters"
            className={cn(buttonVariants({ variant: "link", size: "link" }))}
          >
            View all <span className="btn-link-icon">→</span>
          </Link>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((p, i) => (
            <Link
              key={p.id}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full text-inherit no-underline"
            >
              <Reveal
                variant="image"
                delay={i * 120}
                as="article"
                className="card-frame h-full cursor-pointer"
              >
                <div className="overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    className="h-auto w-full transition-transform duration-[1400ms] group-hover:scale-105"
                    loading="lazy"
                    width={586}
                    height={740}
                  />
                </div>
                <div className="px-2 pt-6 pb-8">
                  <div className="text-muted-foreground mb-4 flex items-center gap-4 text-[0.68rem] tracking-[0.28em] uppercase">
                    <span className="text-blue-light font-semibold">
                      {p.category}
                    </span>
                    <span className="h-px w-3 bg-neutral-400" />
                    <span className="text-blue-light font-semibold">
                      {p.date}
                    </span>
                    <span className="h-px w-3 bg-neutral-400" />
                    <span className="text-blue-light font-semibold">
                      {p.readTime}
                    </span>
                  </div>
                  <h3 className="group-hover:text-accent mb-3 font-serif text-2xl leading-snug text-neutral-700 transition-colors md:text-[1.7rem]">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground mb-8 text-sm leading-relaxed font-light">
                    {p.excerpt}
                  </p>
                  <Link
                    href={p.link}
                    className={cn(
                      buttonVariants({ variant: "link", size: "link" }),
                    )}
                  >
                    Read this{" "}
                    <span className="btn-link-icon">
                      <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </Link>
                </div>
              </Reveal>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
