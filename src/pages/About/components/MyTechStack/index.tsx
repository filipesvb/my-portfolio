import { techstack, TechKey } from '../../../../data/techstack';

const MyTechStack = () => {
  return (
    <div className="max-w-400 grid grid-cols-5 columns-2xl">
      {Object.entries(techstack).map(([key, tech]) => {
        const Icon = tech.image;
        return (
          <div
            className="border-2 p-3"
            style={{ backgroundColor: tech.style.bg }}
            key={tech.value}
          >
            {tech.title}
            <Icon />
          </div>
        );
      })}
    </div>
  );
};

export default MyTechStack;
