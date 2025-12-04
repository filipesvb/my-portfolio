import Card3D from "@/components/Card3D";
import CardTitle from "@/components/CardTitle";
import { TechKey, type Technology } from "../../../../data/techstack";
import TechStack from "@/components/TechStack";
import { Magnetic } from "@/components/ui/shadcn-io/magnetic";
import LiveLink from "./components/LiveLink";
import GithubLink from "./components/GithubLink";
import { motion } from "framer-motion";

interface ProjectSingleProps {
  title: string;
  description: string;
  links: {
    github: string;
    live: string;
  };
  inverted?: boolean;
  query?: string;
  tags: TechKey[];
  image: string;
}

const ProjectSingle = ({
  title,
  description,
  links,
  inverted = false,
  query,
  tags,
  image,
}: ProjectSingleProps) => {
  function getTextoDestacado(desc: string) {
    const partes = desc.split(new RegExp(`(${query})`, "gi"));

    return query && query.length > 1 ? (
      partes.map((parte, index) =>
        parte.toLowerCase() === query.toLowerCase() ? (
          <motion.span key={index} style={{ backgroundColor: "#315078" }}>
            {parte}
          </motion.span>
        ) : (
          <span key={index} className="text-foreground">
            {parte}
          </span>
        ),
      )
    ) : (
      <span className="text-foreground">{desc}</span>
    );
  }

  return (
    <div
      className={`border-muted-foreground flex w-full gap-5 rounded-lg border-2 ${
        inverted && "flex-row-reverse"
      }`}
    >
      <div className="md:flex-3/5 hidden w-full items-start justify-center md:flex">
        <div className="w-30 w-full">
          <Card3D hideBall image={image} />
        </div>
      </div>

      <div className="growth-0 flex h-full w-full flex-col space-y-20">
        <div className="w-full px-4">
          <CardTitle className="text-foreground text-left text-[2rem]">
            {title}
          </CardTitle>
          <p className="text-muted-foreground w-full">
            {getTextoDestacado(description)}
          </p>

          <TechStack tags={tags} />
        </div>
        <div className="flex h-full items-end gap-12 px-4 pb-5">
          <Magnetic>
            <LiveLink link={links.live} />
          </Magnetic>
          <Magnetic>
            <GithubLink link={links.github} />
          </Magnetic>
        </div>
      </div>
    </div>
  );
};
export default ProjectSingle;
