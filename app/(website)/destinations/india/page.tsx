import DestinationSpace from "@/components/destinations/DestinationSpace";
import SubHero from "@/components/SubHero";

const IndiaPage = () => {
  return (
    <div>
      <SubHero
        title="India"
        description="India is a country in South Asia. It is the seventh-largest country by land area, the second-most populous country, and the most populous democracy in the world."
        backgroundVideo="n6Rjgc7JOOkb3CfiBSwlvIeO02DvkbCTEUGaugWmGdwc"
        eyebrow={{
          text: "< Destinations",
          href: "/destinations",
        }}
        button={{
          label: "Download our India Profile",
          href: "/pdfs/destinations/India.pdf",
          variant: "default",
          size: "lg",
        }}
      />
      <DestinationSpace destinationId="india" />
    </div>
  );
};

export default IndiaPage;
