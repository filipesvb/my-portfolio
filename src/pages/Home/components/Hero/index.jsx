import HeroImageContainer from "./components/HeroImageContainer";
import HeroText from "./components/HeroText";
import Section from '../../../../components/Section';

const Hero = () => {
  return (
    <Section className='flex w-full' variant={{'display': 'flex', 'width': '100%', 'justify-content': "space-between"}}>
    
      <HeroText />
      <HeroImageContainer />
      
    </Section>
  )
}

export default Hero;