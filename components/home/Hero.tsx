"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MuxBackgroundVideo } from "@mux/mux-background-video/react";
import { Button } from "../ui/Button";
import { MoveRight } from "lucide-react";

const videoURL = "https://stream.mux.com/";
const videoIDs = [
  "9022vXqxureSKaBH7UZ00WYFRULLTuB8WbaVrOxSCFiD4",
  "S2RRL3V75jl9QogjjtWZLcNpTJTVqy02laQa1FhLSixI",
  "SZJLzywFHSO9irdzrbbzpw2PLgy9msG8nOMb02L2xQSc",
];
const videoExtension = ".m3u8";

const heroVideos = [
  `${videoURL}${videoIDs[0]}${videoExtension}`,
  `${videoURL}${videoIDs[1]}${videoExtension}`,
  `${videoURL}${videoIDs[2]}${videoExtension}`,
];

const Hero = () => {
  const router = useRouter();
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideoIndex(
        (currentIndex) => (currentIndex + 1) % heroVideos.length,
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative isolate h-dvh min-h-dvh w-full overflow-hidden">
      <div className="absolute inset-0 -z-20 h-full w-full">
        <MuxBackgroundVideo
          key={heroVideos[activeVideoIndex]}
          src={heroVideos[activeVideoIndex]}
          className="h-full w-full"
        >
          <img
            src={`https://image.mux.com/${videoIDs[activeVideoIndex]}/thumbnail.webp?time=0`}
            alt="Hero background"
            className="h-full w-full object-cover object-center"
          />
        </MuxBackgroundVideo>
      </div>
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/75 via-black/25 to-black/10" />

      <div className="relative z-10 container flex h-full w-full items-end pt-32 pb-10 sm:pt-36 sm:pb-16 lg:pb-24">
        <div className="max-w-3xl">
          {/* slide-indicators  */}
          <div
            className="mb-4 flex items-center gap-2"
            aria-label="Hero slide indicators"
          >
            {heroVideos.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 w-2 rounded-full border border-white/70 transition-all duration-300 ${
                  activeVideoIndex === index ? "bg-white" : "bg-white/35"
                }`}
                onClick={() => setActiveVideoIndex(index)}
              />
            ))}
          </div>

          <h1 className="font-serif text-[2.15rem] leading-[1.08] tracking-[-0.03em] text-white sm:text-4xl sm:leading-[1.08] lg:text-5xl">
            <span className="text-[2.55rem] sm:text-4xl lg:text-6xl">20</span>{" "}
            Years of
            <br className="sm:hidden" /> Extraordinary Journeys
            <span className="mt-1 block sm:mt-0">Timeless Expeditions</span>
          </h1>
          <p className="mt-5 mb-6 max-w-xl text-sm leading-6 text-white/85 sm:text-sm sm:leading-7">
            From luxury FITs and incentive travel to photography, culinary tours
            and educational trips, Eastbound designs classic, seamless and
            signature travel experiences across India, Nepal, Bhutan, Sri Lanka
            and the UAE for tour operators, travel agents, wholesalers globally.
          </p>
          <Button
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => router.push("/contact")}
          >
            Talk to our experts <MoveRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
