
export default function HeroBottomBanner() {
  return (
    <section className="w-full overflow-hidden">
      <picture>
        {/* Mobile: below 768px */}
        <source
          media="(max-width: 767px)"
          srcSet="/images/hero-bottom/Mobile.jpeg"
        />

        {/* Tablet: 768px to 1023px */}
        <source
          media="(max-width: 1023px)"
          srcSet="/images/hero-bottom/Tablet.jpeg"
        />

        {/* Desktop: 1024px and above */}
        <img
          src="/images//Desktop.jpeg"
          alt="Featured banner"
          className="block h-auto w-full"
          loading="lazy"
          decoding="async"
        />
      </picture>

    </section>
  );
}
