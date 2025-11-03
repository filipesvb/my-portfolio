import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import ProjectSingle from '../ProjectSingle';
import { projects } from '../../../../../../data/projects';
import { useTranslation } from 'react-i18next';

const ProjectContainer = () => {
  const { t } = useTranslation('projects');

  return (
    <div className="">
      <ScrollArea className="w-full rounded-md relative">
        <div className="flex flex-col w-full space-x-12 items-center px-4 relative  md:items-stretch md:flex-row ">
          {projects.map((p) => (
            <ProjectSingle
              key={p.id}
              title={t(`${p.id}.title`)}
              description={t(`${p.id}.shortDescription`)}
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
