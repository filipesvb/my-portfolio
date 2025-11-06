import SectionTitle from "@/components/SectionTitle";
import Wrapper from "@/components/Wrapper";
import ProjectContainer from "./components/ProjectContainer";
import ProjectFilter from "./components/ProjectFilter";
import { projects } from "../../data/projects";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation("projects");

  const [searchValue, setSearchValue] = useState("");
  const [categoryValue, setCategoryValue] = useState('');

  function handleSearch(value: string) {
    setSearchValue(value);
  }

  function handleSelectCategory(value: string) {
    setCategoryValue(value);
  }

  function getAllTags() {
    const result = 
      projects
        .flatMap((p) => p.tags)
        .map(t => {
          return { label: t.title, value: t.value }
        })

    const projectsMap = new Map(result.map(p => [p.value, p]));
    return projectsMap;
  }

  const regex = new RegExp(`${searchValue.toLowerCase()}`);

  const filteredProjects = projects.filter((p) => {
    const i18title = t(`projects.${p.id}.title`).toLowerCase();
    const i18description = t(`projects.${p.id}.longDescription`).toLowerCase();
    const techStack = p.tags;
    return !!categoryValue ? ((regex.test(i18title) || regex.test(i18description)) && techStack.some(tech => tech.value === categoryValue)) :
      (regex.test(i18title) || regex.test(i18description));
  });

  return (
    <div className="w-full h-full font-azeret-mono">
      <Wrapper>
        <SectionTitle>{t("section_title")}</SectionTitle>
        <p className="max-w-100 whitespace-wrap">{t("description")}</p>
        <ProjectFilter onSearch={handleSearch} searchValue={searchValue} onSelectCategory={handleSelectCategory} tags={getAllTags()} />
        <ProjectContainer projects={filteredProjects} query={searchValue} />
      </Wrapper>
    </div>
  );
};

export default Projects;
