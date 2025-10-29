import HeroImageContainer from "./components/HeroImageContainer";
import HeroText from "./components/HeroText";

const Hero = () => {
  return (
    <section className='flex w-full'>

      <HeroText />
      <HeroImageContainer />
      
    </section>
  )
}

export default Hero;