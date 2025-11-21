import HeroImageContainer from "./components/HeroImageContainer";
import HeroText from "./components/HeroText";
import Section from "../../../../components/Section";

const Hero = () => {
  return (
    <Section className="flex flex-col  md:flex-row">
      <HeroText />
      <HeroImageContainer />
    </Section>
  );
};

export default Hero;
