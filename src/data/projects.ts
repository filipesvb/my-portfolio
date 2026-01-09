import { techstack, TechKey, Technology, tagValues } from "./techstack";
import MyPortfolioImage from "@/assets/projects/images/myportfolio.png";
import Barbershop from "@/assets/projects/images/Barbershop.png";
import EntreTrilhas from "@/assets/projects/images/entreTrilhas.png";
import SuperMilk from "@/assets/projects/images/supermilk.png";
import Visivel from "@/assets/projects/images/Visivel.png";

export type Project = {
  id: string;
  image: string;
  imagePosition: "top" | "center";
  links: {
    github: string;
    live: string;
  };
  tags: TechKey[];
};

export const projects: Project[] = [
  {
    id: "project1",
    image: MyPortfolioImage,
    imagePosition: "top",
    links: {
      github: "https://github.com/filipesvb/my-portfolio",
      live: "https://filipevilasboas.netlify.app",
    },
    tags: [
      tagValues.REACT,
      tagValues.TAILWINDCSS,
      tagValues.I18NEXT,
      tagValues.NETLIFY,
      tagValues.TYPESCRIPT,
      tagValues.VITE,
    ],
  },
  {
    id: "barbershop",
    image: Barbershop,
    imagePosition: "top",
    links: {
      github: "https://github.com/filipesvb/app-barber-fsw",
      live: "",
    },
    tags: [
      tagValues.NEXTJS,
      tagValues.TAILWINDCSS,
      tagValues.TYPESCRIPT,
      tagValues.PRISMA,
      tagValues.ZOD,
      tagValues.POSTGRESQL,
      tagValues.ESLINT,
    ],
  },
  {
    id: "entre-trilhas",
    image: EntreTrilhas,
    imagePosition: "top",
    links: {
      github: "",
      live: "",
    },
    tags: [
      tagValues.WORDPRESS,
      tagValues.ELEMENTOR,
      tagValues.FIGMA,
      tagValues.CSS,
    ],
  },
  {
    id: "super-milk",
    image: SuperMilk,
    imagePosition: "top",
    links: {
      github: "",
      live: "",
    },
    tags: [
      tagValues.WORDPRESS,
      tagValues.ELEMENTOR,
      tagValues.FIGMA,
      tagValues.CSS,
    ],
  },
  {
    id: "visivel",
    image: Visivel,
    imagePosition: "top",
    links: {
      github: "",
      live: "",
    },
    tags: [
      tagValues.WORDPRESS,
      tagValues.ELEMENTOR,
      tagValues.FIGMA,
      tagValues.CSS,
    ],
  },
];
