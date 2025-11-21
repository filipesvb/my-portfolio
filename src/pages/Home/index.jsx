import Footer from "@/components/Footer";
import Wrapper from "../../components/Wrapper";
import Hero from "./components/Hero";
import ProjectSection from "./components/ProjectSection";
import ServiceSection from "./components/ServiceSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-start font-azeret-mono ">
        <Wrapper>
          <div className="mt-10">
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
