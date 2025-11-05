import SectionTitle from "@/components/SectionTitle";
import Wrapper from "@/components/Wrapper";
import ProjectContainer from "./components/ProjectContainer";
import ProjectFilter from "./components/ProjectFilter";
import { projects } from "../../data/projects";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation("projects");

  const [searchValue, setSearchValue] = useState("");

  function handleSearch(value: string) {
    setSearchValue(value);
  }

  function getAllTags() {
    const result = 
      projects
        .flatMap((p) => p.tags)
        .map(t => {
          return { label: t.title, value: t.title.toLowerCase() }
        })
   
    console.log(result)
  }
  getAllTags();

  const regex = new RegExp(`${searchValue.toLowerCase()}`);

  const filteredProjects = projects.filter((p) => {
    const i18title = t(`projects.${p.id}.title`).toLowerCase();
    const i18description = t(`projects.${p.id}.longDescription`).toLowerCase();
    return regex.test(i18title) || regex.test(i18description);
  });

  return (
    <div className="w-full h-full font-azeret-mono">
      <Wrapper>
        <SectionTitle>{t("section_title")}</SectionTitle>
        <p className="max-w-100 whitespace-wrap">{t("description")}</p>
        <ProjectFilter onSearch={handleSearch} tags={getAllTags()} />
        <ProjectContainer projects={filteredProjects} query={searchValue} />
      </Wrapper>
    </div>
  );
};

export default Projects;
