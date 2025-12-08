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
import { Folder, Image, Pointer } from "lucide-react";
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
  imagePosition: string;
}

const ProjectSingle = ({
  title,
  description,
  links,
  inverted = false,
  query,
  tags,
  image,
  imagePosition,
}: ProjectSingleProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const hasToBeCentered = imagePosition === "center";

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
    <div className={`perspective-[1000px] flex h-full w-full`}>
      {/* PAI */}
      <div
        className={`border-muted-foreground duration-400 transform-3d relative flex min-h-[600px] w-full gap-5 overflow-visible rounded-lg border-2 transition-all ease-in ${isFlipped && "-rotate-y-180"} ${
          inverted && "flex-row-reverse"
        }`}
      >
        <div className="md:flex-3/5 hidden h-full w-full items-center justify-center px-2 md:flex">
          <div className="flex h-full w-full max-w-[300px] items-center">
            <Card3D
              hideBallText={true}
              title=""
              image={image}
              imagePosition={imagePosition}
            />
          </div>
        </div>

        {/* FRENTE */}
        <div className="growth-0 bg-background translate-z-0 backface-hidden relative flex h-full w-full flex-col justify-between gap-4 rounded-lg py-2 md:py-0">
          <div className="w-full px-4">
            <Button
              variant={"outline"}
              size={"icon"}
              className="bg-background border-foreground z-3 absolute bottom-2 right-2 flex rounded-full shadow-2xl md:hidden"
              onClick={handleFlip}
            >
              <Image className="stroke-foreground" size={32} />
            </Button>
            <CardTitle className="text-foreground text-left text-[2rem]">
              {title}
            </CardTitle>
            <p className="text-muted-foreground md:max-h-70 max-h-60 w-full overflow-y-auto">
              {getTextoDestacado(description)}
            </p>

            <TechStack tags={tags} />
          </div>
          <div className="just relative flex h-full max-h-20 items-center gap-12 px-4">
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
              className="absolute bottom-2 right-2 flex h-full items-end"
            >
              <Button
                variant={"outline"}
                size={"icon"}
                className="border-foreground dark:bg-background flex rounded-full shadow-sm md:hidden"
                onClick={handleFlip}
              >
                <Folder className="stroke-foreground dark:stroke-foreground rotate-y-180" />
              </Button>
            </motion.div>
            <img
              src={image}
              className={`z-1 h-full w-full object-cover ${hasToBeCentered ? "object-center" : "object-top"} `}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectSingle;
