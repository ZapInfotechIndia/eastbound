
export default function HeroBottomBanner() {
  return (
    <section className="w-full overflow-hidden">
      <picture>
        {/* Mobile: below 768px */}
        <source
          media="(max-width: 767px)"
          srcSet="/images/hero-bottom/Mobile.jpg"
        />

        {/* Tablet: 768px to 1023px */}
        <source
          media="(max-width: 1023px)"
          srcSet="/images/hero-bottom/Tablet.jpg"
        />

        {/* Desktop: 1024px and above */}
        <img
          src="/images/Desktop.jpg"
          alt="Featured banner"
          className="block h-auto w-full"
          loading="lazy"
          decoding="async"
        />
      </picture>

    </section>
  );
}
