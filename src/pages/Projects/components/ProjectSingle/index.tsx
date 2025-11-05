import Card3D from "@/components/Card3D";
import CardTitle from "@/components/CardTitle";
import { type Technology } from "../../../../data/projects";
import TechStack from "@/components/TechStack";
import { Magnetic } from "@/components/ui/shadcn-io/magnetic";
import LiveLink from "./components/LiveLink";
import GithubLink from "./components/GithubLink";

interface ProjectSingleProps {
  title: string;
  description: string;
  links: {
    github: string,
    live: string
  };
  inverted?: boolean;
  query?: string;
  tags: Technology[]
}

const ProjectSingle = ({
  title,
  description,
  links,
  inverted = false,
  query,
  tags
}: ProjectSingleProps) => {
  
  function getTextoDestacado(desc: string) {
    const partes = desc.split(new RegExp(`(${query})`, "gi"));

    return query && query.length > 1
      ? partes.map((parte, index) =>
          parte.toLowerCase() === query.toLowerCase() ? (
            <span key={index} style={{ backgroundColor: "#315078" }}>
              {parte}
            </span>
          ) : (
            <span key={index}>{parte}</span>
          ),
        )
      : desc;
  }

  return (
    <div
      className={`flex border-2 rounded-lg gap-5 ${inverted && "flex-row-reverse"}`}
    >
      <div className="flex flex-2/5 justify-center items-start">
        <Card3D hideBall height="10" />
      </div>
      <div className="flex-3/5 flex gap-10 py-4 px-10">
        <div className="h-full flex flex-col">
          
          <CardTitle className="text-[2rem] text-left">{title}</CardTitle>
          <p>{getTextoDestacado(description)}</p>
          <TechStack tags={tags} />
          <div className="h-full flex items-end pb-5 gap-12">
            <Magnetic>
              <LiveLink link={links.live} />
            </Magnetic>
            <Magnetic>
              <GithubLink link={links.github} />
            </Magnetic>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default ProjectSingle;
