import { techstack, TechKey, Technology, tagValues } from "./techstack";
import MyPortfolioImage from "@/assets/projects/images/myportfolio.png";

export type Project = {
  id: string;
  image: string;

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
];
