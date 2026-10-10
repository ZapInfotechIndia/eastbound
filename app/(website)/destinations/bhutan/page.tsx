import SubHero from "@/components/SubHero";
import DestinationSpace from "@/components/destinations/DestinationSpace";

const BhutanPage = () => {
  return (
    <div>
      <SubHero
        title="Bhutan"
        description="Bhutan is a landlocked country in South Asia, located in the Eastern Himalayas. It is known for its stunning landscapes, rich cultural heritage, and commitment to Gross National Happiness."
        backgroundVideo="fFpZfzxVf6bmyAJF9PGSiVUH8JXpS65iZvoM7VSx02gY"
        eyebrow={{
          text: "< Destinations",
          href: "/destinations",
        }}
        button={{
          label: "Download our Bhutan Profile",
          href: "/pdfs/destinations/Bhutan.pdf",
          variant: "default",
          size: "lg",
        }}
      />
      <DestinationSpace destinationId="bhutan" />
    </div>
  );
};

export default BhutanPage;
