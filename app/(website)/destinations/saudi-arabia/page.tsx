
const SaudiArabiaPage = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#C0D7E6] px-6 py-20">
      {/* Subtle brand-colored background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(20,118,184,0.08),_transparent_65%)]" />

      {/* Decorative corners */}
      <div className="pointer-events-none absolute left-8 top-8 h-20 w-20 border-l border-t border-[#1476B8]/30 md:left-16 md:top-16 md:h-28 md:w-28" />

      <div className="pointer-events-none absolute bottom-8 right-8 h-20 w-20 border-b border-r border-[#1476B8]/30 md:bottom-16 md:right-16 md:h-28 md:w-28" />

      {/* Main content */}
      <div className="relative mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#1476B8]">
          <span className="h-px w-8 bg-[#F0444F]" />
          Destination 06
          <span className="h-px w-8 bg-[#F0444F]" />
        </span>

        <h1 className="mt-8 font-serif text-5xl font-light tracking-tight text-[#1476B8] sm:text-6xl md:text-8xl">
          Saudi Arabia
        </h1>

        {/* Logo-inspired accent */}
        <div className="mx-auto my-8 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-[#1476B8]/40" />
          <span className="h-2 w-2 rotate-45 bg-[#F0444F]" />
          <span className="h-px w-12 bg-[#1476B8]/40" />
        </div>

        <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-[#F0444F] sm:text-base">
          Coming Soon
        </h2>

        <p className="mx-auto mt-6 max-w-lg text-sm font-light leading-7 text-[#424A52] sm:text-base">
          Discover a world where ancient heritage meets modern luxury.
          An extraordinary Arabian journey is on its way.
        </p>

        <div className="mt-10 inline-flex items-center gap-2 border border-[#1476B8]/30 bg-white/60 px-6 py-3 text-[10px] font-medium uppercase tracking-[0.25em] text-[#1476B8] transition-colors hover:border-[#1476B8] hover:bg-[#1476B8] hover:text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-[#F0444F]" />
          A New Journey Awaits
        </div>
      </div>
    </main>
  );
};

export default SaudiArabiaPage;
