import AnimatedText from './AnimatedText';
import HeroCTA from './HeroCTA';
import NameCard from './NameCard';

const HeroText = () => {
  return (
    <div className="flex-2/5">
      <NameCard />
      <AnimatedText />
      <HeroCTA />
    </div>
  );
};

export default HeroText;
