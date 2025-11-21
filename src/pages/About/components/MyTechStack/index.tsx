import { techstack, TechKey } from '../../../../data/techstack';
import TechIcon from './TechIcon';

const MyTechStack = () => {
  return (
    <div className="max-w-400 grid grid-cols-5 columns-2xl gap-2">
      {Object.entries(techstack).map(([key, tech]) => {
        const Icon = tech.image;
        return <TechIcon tech={tech} />;
      })}
    </div>
  );
};

export default MyTechStack;
