import Card3D from "@/components/Card3D";
import CardTitle from "@/components/CardTitle";
import { TechKey, type Technology } from "../../../../data/techstack";
import TechStack from "@/components/TechStack";
import { Magnetic } from "@/components/ui/shadcn-io/magnetic";
import LiveLink from "./components/LiveLink";
import GithubLink from "./components/GithubLink";
import { motion } from "framer-motion";
import { CardContainer } from "@/components/ui/shadcn-io/3d-card";
import { useState } from "react";
import { Folder, Image } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const [isFlipped, setIsFlipped] = useState(false);

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

  function handleFlip() {
    setIsFlipped(!isFlipped);
  }

  return (
    // AVÔ
    <div className={`perspective-[1000px] h-full w-full`}>
      {/* PAI */}
      <div
        className={`border-muted-foreground transform-3d duration-400 relative flex w-full gap-5 overflow-visible rounded-lg border-2 transition-all ease-in ${isFlipped && "-rotate-y-180"} ${
          inverted && "flex-row-reverse"
        }`}
      >
        <div className="md:flex-3/5 hidden w-full items-start justify-center md:flex">
          <div className="w-30 w-full">
            <Card3D hideBall image={image} />
          </div>
        </div>

        {/* FRENTE */}
        <div className="growth-0 translate-z-0 bg-background backface-hidden relative flex h-full w-full flex-col space-y-20 rounded-lg py-2 md:py-0">
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="absolute right-2 top-2 shadow-2xl"
            viewport={{ once: true }}
            transition={{ duration: 1.6 }}
          >
            <Button
              variant={"outline"}
              size={"icon"}
              className="bg-background border-foreground flex rounded-full md:hidden"
              onClick={handleFlip}
            >
              <Image className="stroke-foreground" size={32} />
            </Button>
          </motion.div>
          <div className="w-full px-4">
            <CardTitle className="text-foreground text-left text-[2rem]">
              {title}
            </CardTitle>
            <p className="text-muted-foreground w-full">
              {getTextoDestacado(description)}
            </p>

            <TechStack tags={tags} />
          </div>
          <div className="relative flex h-full items-end gap-12 px-4 pb-5">
            <Magnetic>
              <LiveLink link={links.live} />
            </Magnetic>
            <Magnetic>
              <GithubLink link={links.github} />
            </Magnetic>
          </div>
        </div>

        {/* TRÁS */}
        <div className="-translate-z-1 rotate-y-180 backface-hidden absolute left-0 top-0 block h-full w-full overflow-hidden rounded-lg md:hidden">
          <div className="z-1 relative h-full w-full">
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              className="absolute right-2 top-2"
            >
              <Button
                variant={"outline"}
                size={"icon"}
                className="border-foreground dark:bg-background flex rounded-full shadow-sm md:hidden"
                onClick={handleFlip}
              >
                <Folder className="stroke-foreground rotate-y-180 dark:stroke-foreground" />
              </Button>
            </motion.div>
            <img src={image} className="z-1" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectSingle;
