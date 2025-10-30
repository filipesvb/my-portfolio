import Wrapper from '../../components/Wrapper';
import Hero from './components/Hero';
import ProjectSection from './components/ProjectSection';
import ServiceSection from './components/ServiceSection';

function App() {
  return (
    <>
      <div className="w-full h-full font-azeret-mono">
        <Wrapper>
          <Hero />
          <ServiceSection />
          <ProjectSection />
        </Wrapper>
      </div>
    </>
  );
}

export default App;
