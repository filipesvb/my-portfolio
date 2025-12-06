import { techstack, TechKey } from "../../../../data/techstack";
import TechIcon from "./TechIcon";

const MyTechStack = () => {
  return (
    <div className="max-w-400 grid columns-2xl grid-cols-3 gap-2 md:grid-cols-5">
      {Object.entries(techstack).map(([key, tech]) => {
        const Icon = tech.image;
        return <TechIcon key={key} tech={tech} />;
      })}
    </div>
  );
};

export default MyTechStack;
