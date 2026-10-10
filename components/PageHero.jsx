import Link from "next/link";

const PageHero = ({ eyebrow, title, copy, image }) => {
  return (
    <section className="relative flex min-h-[78svh] w-full items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          width={1600}
          height={1000}
        />
        <div className="from-blue-dark via-blue-dark/40 to-blue-dark/85 absolute inset-0 bg-linear-to-b" />
      </div>

      <div className="relative z-10 container pt-40 pb-20 md:pb-28">
        <div className="max-w-3xl text-white">
          <div className="reveal is-visible mb-6 flex items-center gap-4">
            <span className="bg-accent h-px w-10" />
            <span className="text-[0.72rem] tracking-[0.32em] text-white/85 uppercase">
              {eyebrow}
            </span>
          </div>
          <h1 className="font-serif text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed font-light text-white/80 md:text-lg">
            {copy}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/#contact"
              className="group bg-accent text-accent-foreground inline-flex items-center gap-3 px-8 py-4 text-[0.75rem] tracking-[0.28em] uppercase transition-transform duration-300 hover:-translate-y-0.5"
            >
              Make an enquiry
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-3 border-b border-white/50 px-2 py-4 text-[0.75rem] tracking-[0.28em] text-white uppercase transition-colors hover:border-white"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
