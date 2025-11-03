import Card3D from "@/components/Card3D";
import CardTitle from "@/components/CardTitle";
import ProjectSingle from "../ProjectSingle";
import { projects } from '../../../../data/projects'
import { useTranslation } from "react-i18next";

const ProjectContainer = () => {

  const { t } = useTranslation('projects')
  
  return (
    <div className="mt-6 w-full py-5 flex flex-col gap-15">
      {projects.map((p, i) => (
        <ProjectSingle
          {...(i % 2 === 0 && {inverted: true})}
          key={p.id}
          title={t(`${p.id}.title`)}
          description={t(`${p.id}.longDescription`)}
        />
      ))}
    </div>
  )
}

export default ProjectContainer;