import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import ProjectSingle from "../ProjectSingle";
import { projects } from "../../../../../../data/projects";
import { useTranslation } from "react-i18next";

const ProjectContainer = () => {
  const { t } = useTranslation("projects");

  return (
    <div className="">
      <ScrollArea className="relative w-full">
        <div className="relative flex w-full flex-col items-center space-y-12 pt-3 md:flex-row md:items-stretch md:space-x-12 md:pt-0">
          {projects.map((p) => (
            <ProjectSingle
              key={p.id}
              title={t(`projects.${p.id}.title`)}
              description={t(`projects.${p.id}.shortDescription`)}
              image={p.image}
            />
          ))}
        </div>
        <div className="py-5"></div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default ProjectContainer;
