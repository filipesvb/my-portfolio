import SectionTitle from "@/components/SectionTitle";
import Wrapper from "@/components/Wrapper";
import ProjectContainer from "./components/ProjectContainer";

const Projects = () => {
  return (
    <div className="w-full h-full font-azeret-mono">
      <Wrapper>
        <SectionTitle>Meus projetos</SectionTitle>
        <p className="max-w-100 whitespace-wrap">Projetos pessoais que tenho construído durante minha jornada de aprendizado.</p>
        <div className="rounded-lg border-1 w-full h-15 mt-6">
          Seção de filtros
        </div>
        <ProjectContainer />
      </Wrapper>
    </div>
  )
}

export default Projects;