import Card3D from "@/components/Card3D";
import CardTitle from "@/components/CardTitle";
import ProjectSingle from "../ProjectSingle";
import { type Project } from '../../../../data/projects'
import { useTranslation } from "react-i18next";

const ProjectContainer = ({projects, query} : {projects: Project[], query: string}) => {

  const { t } = useTranslation('projects')


  return (
    <div className="mt-6 w-full py-5 flex flex-col gap-15">
      {projects.length > 0 ? projects.map((p, i) => {

        const desc = t(`projects.${p.id}.longDescription`);
      
        return (
            <ProjectSingle
              {...(i % 2 === 0 && {inverted: true})}
              key={p.id}
              title={t(`projects.${p.id}.title`)}
              description={desc}
              query={query}
              tags={p.tags}
              links={p.links}
            />
        )
      
      }) : 
      (
        <div>{t('filter.search.notFound')}</div>
      )}
    </div>
  )
}

export default ProjectContainer;