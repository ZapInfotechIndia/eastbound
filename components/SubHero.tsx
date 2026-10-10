import { Button, type ButtonProps } from "@/components/ui/Button";
import { MuxBackgroundVideo } from "@mux/mux-background-video/react";

type SubHeroButton = {
  label: string;
  href?: string;
} & Pick<ButtonProps, "variant" | "size" | "className">;

type SubHeroEyebrow = {
  text: string;
  href?: string;
};

type SubHeroProps = {
  title: string;
  description?: string;
  backgroundVideo?: string;
  eyebrow?: string | SubHeroEyebrow;
  button?: SubHeroButton;
};

export default function SubHero({
  title,
  description,
  backgroundVideo,
  eyebrow,
  button,
}: SubHeroProps) {
  return (
    <section className="relative isolate h-[75vh] min-h-105 overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        {backgroundVideo ? (
          <MuxBackgroundVideo
            src={`https://stream.mux.com/${backgroundVideo}.m3u8`}
          >
            <img
              src={`https://image.mux.com/${backgroundVideo}/thumbnail.webp?time=0`}
              alt={description ?? "Hero background"}
            />
          </MuxBackgroundVideo>
        ) : (
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(151,180,222,0.35),_transparent_30%),linear-gradient(135deg,_#132436_0%,_#0f172a_52%,_#020617_100%)]" />
        )}

        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/45 to-slate-900/15" />
      </div>

      <div className="relative z-10 container flex h-full items-end pt-28 pb-10 md:pb-14">
        <div className="max-w-2xl text-white">
          {eyebrow ? (
            typeof eyebrow === "string" ? (
              <p className="mb-4 text-[0.68rem] font-medium tracking-[0.32em] text-white/75 uppercase">
                {eyebrow}
              </p>
            ) : eyebrow.href ? (
              <a
                href={eyebrow.href}
                // target="_blank"
                // rel="noreferrer noopener"
                className="mb-4 inline-block text-[0.68rem] font-medium tracking-[0.32em] text-white/75 uppercase transition-opacity hover:opacity-90"
              >
                {eyebrow.text}
              </a>
            ) : (
              <p className="mb-4 text-[0.68rem] font-medium tracking-[0.32em] text-white/75 uppercase">
                {eyebrow.text}
              </p>
            )
          ) : null}

          <h1 className="max-w-2xl font-serif text-4xl tracking-tight text-white md:text-5xl">
            {title}
          </h1>

          {description ? (
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80 md:text-base">
              {description}
            </p>
          ) : null}

          {button ? (
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {button.href ? (
                <Button
                  asChild
                  variant={button.variant}
                  size={button.size}
                  className={button.className}
                >
                  <a
                    href={button.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {button.label}
                  </a>
                </Button>
              ) : (
                <Button
                  variant={button.variant}
                  size={button.size}
                  className={button.className}
                >
                  {button.label}
                </Button>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
