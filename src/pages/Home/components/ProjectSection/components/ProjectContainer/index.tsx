import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import ProjectSingle from "../ProjectSingle";
import { projects } from '../../../../../../data/projects'
import { useTranslation } from "react-i18next";


const ProjectContainer = () => {

  const { t } = useTranslation('projects')
  
  return (
    <div className="">
      <ScrollArea className="w-full rounded-md ">
        <div className="flex flex-col w-full space-x-4 py-4 items-center md:items-stretch md:gap-25 md:flex-row ">
          {projects.map(p => <ProjectSingle title={t(`${p.id}.title`)} description={t(`${p.id}.description`)} image={p.image} />)}
        </div>
        <div className="py-5"></div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

export default ProjectContainer;