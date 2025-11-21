import SectionTitle from "@/components/SectionTitle";
import Wrapper from "@/components/Wrapper";
import ProjectContainer from "./components/ProjectContainer";
import ProjectFilter from "./components/ProjectFilter";
import { projects } from "../../data/projects";
import { TechKey, techstack } from "../../data/techstack";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation("projects");

  const [searchValue, setSearchValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");

  function handleSearch(value: string) {
    setSearchValue(value);
  }

  function handleSelectCategory(value: string) {
    setCategoryValue(value);
  }

  function getAllTags() {
    const result = projects
      .flatMap((p) => p.tags)
      .map((t) => {
        return {
          label: techstack[t] ? techstack[t].title : "nao tem",
          value: techstack[t] ? techstack[t].value : "nao tem",
        };
      });

    const projectsMap = new Map(result.map((p) => [p.value, p]));
    return projectsMap;
  }

  const regex = new RegExp(`${searchValue.toLowerCase()}`);

  const filteredProjects = projects.filter((p) => {
    const i18title = t(`projects.${p.id}.title`).toLowerCase();
    const i18description = t(`projects.${p.id}.longDescription`).toLowerCase();
    const techStack = p.tags;
    return !!categoryValue
      ? (regex.test(i18title) || regex.test(i18description)) &&
          techStack.some((tech) =>
            techstack[tech] ? techstack[tech].value === categoryValue : false,
          )
      : regex.test(i18title) || regex.test(i18description);
  });

  return (
    <div className="w-full h-full font-azeret-mono">
      <Wrapper>
        <SectionTitle>{t("section_title")}</SectionTitle>
        <p className="max-w-100 whitespace-wrap text-md max-w-[300px]">
          {t("description")}
        </p>
        <ProjectFilter
          onSearch={handleSearch}
          searchValue={searchValue}
          onSelectCategory={handleSelectCategory}
          tags={getAllTags()}
        />
        <ProjectContainer projects={filteredProjects} query={searchValue} />
      </Wrapper>
    </div>
  );
};

export default Projects;
