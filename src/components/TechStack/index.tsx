import { TechKey, techstack, type Technology } from '../../data/techstack';
import TechBadge from './components/TechBadge';

interface TechStackProps {
  tags: TechKey[];
}

const TechStack = ({ tags }: TechStackProps) => {
  return (
    <div className=" rounded-lg flex gap-2 py-4">
      {tags.map((t, i) => {
        const bg = techstack[t] ? techstack[t].style.bg : '#ff0000';
        const text = techstack[t] ? techstack[t].style.text : '#000000';

        return (
          <TechBadge
            key={techstack[t] ? techstack[t].title : 'N/A' + i}
            title={techstack[t] ? techstack[t].title : 'N/A'}
            style={{ backgroundColor: bg, color: text }}
          />
        );
      })}
    </div>
  );
};

export default TechStack;
