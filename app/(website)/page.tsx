import BlocksSection from "@/components/home/BlocksSection";
import Hero from "@/components/home/Hero";
import WhySection from "@/components/home/WhySection";
import DestinationsSection from "@/components/home/DestinationsSection";
import { SignatureExperiencesSection } from "@/components/home/SignatureExperiencesSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { Testimonials } from "@/components/home/Testimonials";
import { AwardsSection } from "@/components/home/AwardsSection";
import { NewslettersSection } from "@/components/home/NewslettersSection";
import BrandLogos from "@/components/BrandLogos";
import { FaqAccordion } from "@/components/FaqAccordion";

export default function Home() {
  return (
    <div className="">
      <Hero />
      {/* <BlocksSection /> */}
      <DestinationsSection />
      <WhySection />
      <SignatureExperiencesSection />
      <ServicesSection />
      <Testimonials />
      {/* <AwardsSection /> */}
      <NewslettersSection />
      <FaqAccordion />
      <BrandLogos />
    </div>
  );
}
