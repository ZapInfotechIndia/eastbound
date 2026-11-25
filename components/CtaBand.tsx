import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Button } from "./ui/Button";
import { MoveRight } from "lucide-react";
type Props = {
  eyebrow?: string;
  title: string;
  copy?: string;
  cta?: string;
  imageUrl?: string;
};

export function CtaBand({
  eyebrow = "Let's begin",
  title,
  copy,
  cta = "Start a conversation",
  imageUrl = "/images/cta.jpg",
}: Props) {
  return (
    <section
      className="bg-blue-light text-primary-foreground relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      <div className="relative z-10 container py-20 md:py-28">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-blue-light mb-4">{eyebrow}</p>
          <h2 className="font-serif text-4xl leading-[1.05] text-white md:text-5xl">
            {title}
          </h2>
          {copy && (
            <p className="my-6 max-w-xl leading-relaxed font-light text-white">
              {copy}
            </p>
          )}

          <Link href="/contact" passHref>
            <Button size="lg" className="w-full sm:w-auto">
              {cta} <MoveRight />
            </Button>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
