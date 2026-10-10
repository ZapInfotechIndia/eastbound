import type { ReactNode } from "react";
import { CtaBand } from "./CtaBand";

type TextPageProps = {
  title: string;
  eyebrow?: string;
  children: ReactNode;
};

export default function TextPage({
  title,
  eyebrow = "Legal",
  children,
}: TextPageProps) {
  return (
    <main className="bg-background text-foreground">
      <section className="border-border/70 bg-blue-dark border-b">
        <div className="container py-20 md:py-36">
          <p className="eyebrow text-blue-light mb-5">{eyebrow}</p>
          <h1 className="font-serif text-4xl leading-[1.05] text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <article className="text-foreground/80 [&_h2]:text-blue-dark [&_a]:text-primary [&_a]:decoration-primary/60 mx-auto space-y-6 text-base leading-8 [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:font-serif [&_h2]:text-[1.9rem] [&_h2]:leading-tight [&_li]:leading-7 [&_ol]:ml-6 [&_ol]:list-decimal [&_ol]:space-y-2 [&_p]:leading-8 [&_ul]:ml-6 [&_ul]:list-disc [&_ul]:space-y-2">
          {children}
        </article>
      </section>
      <CtaBand
        title="Let's create remarkable journeys together."
        copy="Whether you're planning bespoke luxury travel, incentive programmes or specialist group tours, our experts are ready to help."
      />
    </main>
  );
}
