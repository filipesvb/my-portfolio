import HeroImageContainer from "./components/HeroImageContainer";
import HeroText from "./components/HeroText";
import Section from "../../../../components/Section";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <Section className="flex h-[calc(100vh-56px)] flex-col justify-between md:h-full md:flex-row">
      <HeroText />
      <HeroImageContainer />
      <Button
        size={"icon"}
        className="border-foreground mx-auto mb-4 animate-bounce rounded-full border-2 md:hidden"
      >
        <ArrowDown />
      </Button>
    </Section>
  );
};

export default Hero;
