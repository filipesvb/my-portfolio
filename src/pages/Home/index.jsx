import Footer from '@/components/Footer';
import Wrapper from '../../components/Wrapper';
import Hero from './components/Hero';
import ProjectSection from './components/ProjectSection';
import ServiceSection from './components/ServiceSection';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <>
      <div className="w-full h-full font-azeret-mono">
        <Wrapper>
          <Hero />
          <ServiceSection />
          <ProjectSection />
          <AboutSection />
        </Wrapper>
        <Footer />
      </div>
    </>
  );
}

export default App;
