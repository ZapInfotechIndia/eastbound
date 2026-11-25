import Image from "next/image";
import Link from "next/link";
import { servicePages } from "@/data/servicePages";
import { Reveal } from "../Reveal";
import { Button } from "../ui/Button";

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden py-24 md:py-36">
      <Image
        src="/images/services-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover opacity-100"
      />
      {/* <div className="absolute inset-0 -z-10 bg-[#f5efe7]/85" /> */}

      <div className="relative container">
        <Reveal className="container mb-16 grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-20">
          <div>
            <p className="eyebrow mb-4 text-white">Our services</p>
            <h2 className="font-serif text-4xl leading-[1.05] text-white md:text-6xl">
              Four ways to travel with{" "}
              <span className="text-primary">Eastbound.</span>
            </h2>
          </div>
          {/* <p className="max-w-lg leading-relaxed font-light text-neutral-100 md:pt-8">
            Every journey we design draws on one or more of these disciplines —
            layered together into an itinerary that could only ever be yours.
          </p> */}
        </Reveal>

        <div className="border-border/60 relative grid border-t border-l sm:grid-cols-2">
          {servicePages.map((s, i) => (
            <Reveal
              key={s.id}
              delay={i * 80}
              className="card-frame group border-border/60 bg-background relative flex min-h-[280px] flex-col items-start border-r border-b p-8 backdrop-blur-[2px] md:p-10"
            >
              <span className="text-blue-dark mb-6 font-serif text-xl italic">
                {s.index}
              </span>
              <h3 className="text-primary mb-4 font-serif text-2xl md:text-3xl">
                {s.name}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed font-light">
                {s.tagline}
              </p>
              <Button asChild variant="link" size="link">
                <Link href={`/services#${s.id}`}>
                  Enquire
                  <span className="btn-link-icon">→</span>
                </Link>
              </Button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
