import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import ProjectSingle from '../ProjectSingle';
import { projects } from '../../../../../../data/projects';
import { useTranslation } from 'react-i18next';

const ProjectContainer = () => {
  const { t } = useTranslation('projects');

  return (
    <div className="">
      <ScrollArea className="w-full relative ">
        <div className="flex flex-col w-full md:space-x-12 space-y-12 items-center px-4 relative  md:items-stretch md:flex-row ">
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
