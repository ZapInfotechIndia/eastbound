import { brands } from "@/data/brands";

const BrandLogos = () => {
  const loop = [...brands, ...brands];

  return (
    <section className="border-border/60 bg-background overflow-hidden border-b py-16 md:py-20">
      <div className="container-x">
        <p className="eyebrow mb-10 text-center">In partnership with</p>
      </div>
      <div className="relative">
        <div className="marquee-track items-center gap-10 md:gap-16">
          {loop.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex h-12 w-28 items-center justify-center md:h-24 md:w-48"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="max-h-full max-w-full object-contain transition-opacity hover:opacity-100"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r to-transparent" />
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l to-transparent" />
      </div>
    </section>
  );
};

export default BrandLogos;
