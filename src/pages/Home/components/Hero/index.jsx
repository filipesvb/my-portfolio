import HeroImage from "./components/HeroImage";
import HeroText from "./components/HeroText";

const Hero = () => {
  return (
    <section className='flex w-full'>

      <HeroText />
      <HeroImage />
      
    </section>
  )
}

export default Hero;