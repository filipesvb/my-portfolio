import Wrapper from "../../components/Wrapper";
import Hero from "./components/Hero";
import ProjectSection from "./components/ProjectSection";
import ServiceSection from "./components/ServiceSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <>
      <div className="font-azeret-mono flex h-full w-full flex-col justify-start">
        <Wrapper>
          <div className="h-full space-y-10">
            <Hero />
            <ServiceSection />
            <ProjectSection />
            <AboutSection />
            <ContactSection />
          </div>
        </Wrapper>
      </div>
    </>
  );
}

export default App;
