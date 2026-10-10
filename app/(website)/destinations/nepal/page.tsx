import SubHero from "@/components/SubHero";
import DestinationSpace from "@/components/destinations/DestinationSpace";

const NepalPage = () => {
  return (
    <div>
      <SubHero
        title="Nepal"
        description="Nepal is a landlocked country in South Asia. It is located mainly in the Himalayas, but also includes parts of the Indo-Gangetic Plain. It is the 49th largest country by area and the 41st most populous country."
        backgroundVideo="4uW4rbwb3LuArhd7Jg02t9URL8yJG1izEYfkLPHT7bxI"
        eyebrow={{
          text: "< Destinations",
          href: "/destinations",
        }}
        button={{
          label: "Download our Nepal Profile",
          href: "/pdfs/destinations/Nepal.pdf",
          variant: "default",
          size: "lg",
        }}
      />
      <DestinationSpace destinationId="nepal" />
    </div>
  );
};

export default NepalPage;
