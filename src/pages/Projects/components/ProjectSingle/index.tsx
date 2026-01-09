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
  const [isFlipped, setIsFlipped] = useState(true);
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
    <div className={`flex h-full w-full perspective-[1000px]`}>
      {/* PAI */}
      <div
        className={`border-muted-foreground relative flex min-h-[600px] w-full gap-5 overflow-visible rounded-lg border-2 transition-all duration-400 ease-in transform-3d ${isFlipped && "-rotate-y-180"} ${
          inverted && "flex-row-reverse"
        }`}
      >
        <div className="hidden h-full w-full items-center justify-center px-2 md:flex md:flex-3/5">
          <div className="relative flex h-full w-full max-w-[300px] items-center">
            <Card3D
              hideBallText={true}
              title=""
              image={image}
              imagePosition={imagePosition}
            />
          </div>
        </div>

        {/* FRENTE */}
        <div className="growth-0 bg-background relative flex h-full w-full translate-z-0 flex-col justify-between gap-4 rounded-lg py-2 backface-hidden md:py-0">
          <div className="w-full px-4">
            <Button
              variant={"outline"}
              size={"icon"}
              className="bg-background border-foreground absolute right-2 bottom-2 z-3 flex rounded-full shadow-2xl md:hidden"
              onClick={handleFlip}
            >
              <Image className="stroke-foreground" size={32} />
            </Button>
            <CardTitle className="text-foreground text-left text-[2rem]">
              {title}
            </CardTitle>
            <p className="text-muted-foreground max-h-60 w-full overflow-y-auto md:max-h-70">
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
        <div className="absolute top-0 left-0 block h-full w-full -translate-z-1 rotate-y-180 overflow-hidden rounded-lg backface-hidden md:hidden">
          <div className="relative z-1 h-full w-full">
            <div
              className={`bg-background absolute top-1 right-1 z-4 overflow-hidden rounded-full border shadow`}
            >
              {links.live !== "" ? (
                <div className="flex items-center gap-2 px-4 py-2">
                  <a
                    href={links.live}
                    target={"_blank"}
                    className="text-foreground text-sm leading-none font-medium"
                  >
                    VEJA AO VIVO
                  </a>
                  <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-red-400"></span>
                </div>
              ) : (
                <div className="relative h-full w-full px-4 py-2">
                  <span className="text-foreground pr-4 text-sm leading-none font-medium">
                    EM CONSTRUÇÃO
                  </span>
                  <div className="absolute top-0 right-0 h-[120%] w-[15%] -skew-x-14 bg-yellow-300 bg-[repeating-linear-gradient(45deg,_#fffb00_0px,_#fffb00_10px,_#000000_10px,_#000000_20px)]"></div>
                </div>
              )}
            </div>
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              className="absolute right-2 bottom-2 flex h-full items-end"
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
