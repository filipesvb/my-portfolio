import { techstack, TechKey, Technology, tagValues } from "./techstack";

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
    image: "/images/project1.png",
    links: {
      github: "",
      live: "",
    },
    tags: [tagValues.REACT, tagValues.FIREBASE],
  },
  {
    id: "project2",
    image: "/images/project2.png",
    links: {
      github: "",
      live: "",
    },
    tags: [tagValues.REACT, tagValues.PHASERJS],
  },
  {
    id: "project3",
    image: "/images/project3.png",
    links: {
      github: "",
      live: "",
    },
    tags: [tagValues.REACT, tagValues.ZUSTAND, tagValues.TAILWINDCSS],
  },
  {
    id: "project4",
    image: "/images/project4.png",
    links: {
      github: "",
      live: "",
    },
    tags: [tagValues.VITE, tagValues.I18NEXT, tagValues.FRAMER_MOTION],
  },
];
