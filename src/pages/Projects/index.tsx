import SectionTitle from "@/components/SectionTitle";
import Wrapper from "@/components/Wrapper";
import ProjectContainer from "./components/ProjectContainer";
import Footer from "@/components/Footer";
import ProjectFilter from "./components/ProjectFilter";
import { projects } from "../../data/projects"
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Projects = () => {

  const { t } = useTranslation('projects');

  const [searchValue, setSearchValue] = useState('');

  function handleSearch(value: string) {
    setSearchValue(value);
  }

  const regex = new RegExp(`${searchValue.toLowerCase()}`)

  const filteredProjects = projects.filter(p => {
    const i18title = t(`${p.id}.title`).toLowerCase();
    const i18description = t(`${p.id}.longDescription`).toLowerCase();
    return regex.test(i18title) || regex.test(i18description)
  });
  
  return (
    <div className="w-full h-full font-azeret-mono">
      <Wrapper>
        <SectionTitle>Meus projetos</SectionTitle>
        <p className="max-w-100 whitespace-wrap">Projetos pessoais que tenho construído durante minha jornada de aprendizado.</p>
        <ProjectFilter onSearch={handleSearch} />
        <ProjectContainer projects={filteredProjects} query={searchValue} />
      </Wrapper>
    </div>
  )
}

export default Projects;